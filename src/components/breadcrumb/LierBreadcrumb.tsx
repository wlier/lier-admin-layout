import { Breadcrumb, Button, Space } from 'antd'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './LierBreadcrumb.less'

export interface LierBreadcrumbProps {
  menuConfig?: ItemType[]
}

export const LierBreadcrumb: React.FC<LierBreadcrumbProps> = ({
  menuConfig = [],
}) => {
  const location = useLocation()
  const pathSnippets = location.pathname.split('/').filter((i) => i)
  const [breadcrumbNameMap, setBreadcrumbNameMap] = useState<{
    [key: string]: string
  }>({})

  // menuConfig递归生成breadcrumbNameMap
  const buidlBreadcrumbNameMap = (menuConfig: ItemType[]) => {
    let breadcrumbNameMap: { [key: string]: string } = {}

    menuConfig.forEach((item: any) => {
      if (item?.children && item?.children.length > 0) {
        breadcrumbNameMap[item.key] = item.label
        breadcrumbNameMap = {
          ...breadcrumbNameMap,
          ...buidlBreadcrumbNameMap(item.children),
        }
        return
      }
      breadcrumbNameMap[item.key] = item.label
    })
    return breadcrumbNameMap
  }
  //   const breadcrumbNameMap = buidlBreadcrumbNameMap(menuConfig)

  useEffect(() => {
    setBreadcrumbNameMap(buidlBreadcrumbNameMap(menuConfig))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    if (url === '/home') {
      return <></>
    }
    return (
      <Breadcrumb.Item key={url}>
        <Button type='link'>{breadcrumbNameMap[url]}</Button>
      </Breadcrumb.Item>
    )
  })

  const breadcrumbItems = [
    <Breadcrumb.Item key='home'>
      <Button type='link'>
        <Link to='/'>首页</Link>
      </Button>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems)

  return (
    <Breadcrumb
      className='Breadcrumb'
      style={{ margin: '4px 0', paddingLeft: 12 }}
    >
      {breadcrumbItems}
    </Breadcrumb>
  )
}
