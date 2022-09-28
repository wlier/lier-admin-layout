import { Logout } from '@/config/api'
import {
  DownOutlined,
  LockOutlined,
  PoweroffOutlined,
  SoundOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons'
import { Menu, Dropdown, Avatar, Button, Space } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Account.less'

export interface AccountProps {
  userInfo?: AccountInfo
}

export interface AccountInfo {
  id: number
  name: string
  avatar: string
  email: string
  phone: string
  address: string[]
  roles: string[]
  permissions: string[]
  token: string
}

const Account: React.FC<AccountProps> = ({ userInfo }) => {
  const navigate = useNavigate()
  const logout = () => {
    navigate('/account/login')
    localStorage.removeItem('username')
  }
  const menu = (
    <Menu
      items={[
        {
          label: '账户信息',
          key: 'account',
          icon: <UserOutlined />,
          onClick: () => {},
        },
        {
          label: '修改密码',
          key: 'password',
          icon: <LockOutlined />,
          onClick: () => {},
        },
        {
          label: '查看通知',
          key: 'notification',
          icon: <SoundOutlined />,
          onClick: () => {},
        },
        {
          label: '角色切换',
          key: 'role_switct',
          icon: <UserSwitchOutlined />,
          onClick: () => {},
          children: [
            {
              label: '超级管理员',
              key: 'super_admin',
              onClick: () => {},
            },
            {
              label: '管理员',
              key: 'admin',
              onClick: () => {},
            },
            {
              label: '团队负责人',
              key: 'team_admin',
              onClick: () => {},
            },
            {
              label: '项目负责人',
              key: 'project_admin',
              onClick: () => {},
            },
            {
              label: '个人账户',
              key: 'self',
              onClick: () => {},
            },
          ],
        },
        {
          label: '退出登录',
          key: 'logout',
          icon: <PoweroffOutlined />,
          onClick: logout,
        },
      ]}
    />
  )
  return (
    <Dropdown
      className='Account'
      overlay={menu}
      trigger={['click']}
      placement='bottomLeft'
    >
      <Button type='link'>
        <Space size={4}>
          <Avatar
            src={localStorage.getItem('avatar') || <UserOutlined />}
            size='small'
          />
          {localStorage.getItem('username')}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  )
}

export default Account
