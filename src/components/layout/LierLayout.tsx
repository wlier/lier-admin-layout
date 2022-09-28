import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Col, Layout, Row, Space } from 'antd'
import type { ItemType } from 'antd/lib/menu/hooks/useItems'
import React, { useState, useEffect, Suspense } from 'react'

import { Outlet, RouteObject, useLocation, useNavigate } from 'react-router-dom'
import LierLogo from '@/components/logo'
import LierMenu from '@/components/menu'
import LierAccount from '@/components/account'

import { LierBreadcrumb } from '../breadcrumb/LierBreadcrumb'
import './LierLayout.less'
import Access from '../account/access'
import LierContent from '../content'
import ThemeIcon from '../theme'
import SkinIcon from '../skin'

export interface LierLayoutProps {
  menuConfig: ItemType[]
  routerConfig: RouterItem[]
  userAccess?: string[]
  isLogin?: boolean
  setIsLogin?: React.Dispatch<React.SetStateAction<boolean>>
}

export type RouterItem = RouteObject

const { Header, Footer, Sider, Content } = Layout
const LierLayout: React.FC<LierLayoutProps> = ({
  menuConfig,
  routerConfig,
  userAccess = [],
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(
    localStorage.getItem('menu_open') === '1'
  )
  const location = useLocation()
  const navigate = useNavigate()

  const isAccess = (path: string) => {
    return userAccess.includes(path)
  }

  useEffect(() => {
    localStorage.setItem('menu_open', collapsed ? '1' : '0')
  }, [collapsed])

  useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      navigate('/account/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return (
    <Layout className='Layout'>
      <Header className='Header'>
        <Row className='Row'>
          <Col span={6}>
            <LierLogo />
          </Col>
          <Col span={18} className='Col-right'>
            <Space size={8} className='Space'>
              <SkinIcon />
              <ThemeIcon />

              <LierAccount />
            </Space>
          </Col>
        </Row>
      </Header>

      <Layout>
        <Sider collapsed={collapsed}>
          <LierMenu
            menuConfig={menuConfig}
            mode='inline'
            height={'calc(100% - 32px)'}
            routerConfig={routerConfig}
          />
          <Button
            type='primary'
            style={{ width: '100%' }}
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        </Sider>
        <Layout style={{ margin: '0 10px 10px' }}>
          <LierBreadcrumb menuConfig={menuConfig} />
          <Content className='Content'>
            <Suspense fallback={<div>Loading...</div>}>
              <LierContent>
                <Access
                  hasAccess={isAccess(location.pathname)}
                  children={<Outlet />}
                />
              </LierContent>
            </Suspense>
          </Content>
          <Footer
            className='Footer'
            style={{
              height: 32,
              padding: 0,
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '100%',
                position: 'absolute',
                top: '50%',
                transform: 'translate(0, -50%)',
              }}
            >
              aide-cloud
            </div>
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LierLayout
