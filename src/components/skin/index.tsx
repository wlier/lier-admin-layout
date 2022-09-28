import { CheckOutlined } from '@ant-design/icons'
import { ConfigProvider, Popover, Space, Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import LierIcon from '../icon'
interface SkinItem {
  color: string
  title: string
}

const defaultColor = '#1890ff'
const SkinIcon: React.FC = () => {
  const [skinColor, setSkinColor] = useState<string>(
    localStorage.getItem('skinColor') || defaultColor
  )
  useEffect(() => {
    ConfigProvider.config({
      prefixCls: 'ant',
      theme: {
        primaryColor: skinColor,
      },
    })
    localStorage.setItem('skinColor', skinColor)
  }, [skinColor])

  const skinItem: SkinItem[] = [
    {
      color: '#1890ff',
      title: '拂晓蓝（默认）',
    },
    {
      color: '#f5222d',
      title: '薄暮',
    },
    {
      color: '#fa541c',
      title: '火山',
    },
    {
      color: '#faad14',
      title: '日暮',
    },
    {
      color: '#13c2c2',
      title: '明青',
    },
    {
      color: '#52c41a',
      title: '极光绿',
    },
    {
      color: '#1DA57A',
      title: '草绿色',
    },
    {
      color: '#2f54eb',
      title: '极客蓝',
    },
    {
      color: '#722ed1',
      title: '酱紫',
    },
  ]

  return (
    <>
      <Popover
        placement='bottom'
        title={'主题色'}
        content={
          <Space wrap size={8}>
            {skinItem.map((item: SkinItem, index: number) => {
              return (
                <Tooltip title={item.title} key={index}>
                  <div
                    style={{
                      height: 20,
                      width: 20,
                      background: `${item.color}`,
                      textAlign: 'center',
                    }}
                    onClick={() => {
                      setSkinColor(item.color)
                      localStorage.setItem('skinColor', item.color)
                    }}
                  >
                    {skinColor === item.color && (
                      <CheckOutlined style={{ color: '#fff' }} />
                    )}
                  </div>
                </Tooltip>
              )
            })}
          </Space>
        }
        trigger='click'
      >
        <LierIcon
          style={{
            color: 'var(--ant-primary-color)',
            fontSize: 20,
            position: 'relative',
            top: 3,
          }}
          svgIcon='icon-skinfill'
        />
      </Popover>
    </>
  )
}

export default SkinIcon
