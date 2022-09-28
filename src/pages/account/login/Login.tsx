import LierLogo from '@/components/logo'
import { loginFC } from '@/config/api'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, Space, Spin } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Login.less'

export interface UserInfo {
  name: string
  pwd: string
}

const Login: React.FC = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = React.useState<boolean>(false)

  const login = (userInfo: UserInfo) => {
    setLoading(true)
    let data = {
      name: userInfo.name,
      pwd: userInfo.pwd,
      code: 'code',
    }

    // TODO 登录逻辑
    const loginFunc = () => {
      localStorage.setItem('username', data.name)
      localStorage.setItem('accessToken', data.pwd)
      navigate('/', { replace: true })
      setLoading(false)
    }

    loginFunc()
  }

  return (
    <Spin spinning={loading} delay={500}>
      <Space direction='vertical' size={24} className='root'>
        <Space size={4} className='Login' align='center' direction='vertical'>
          <Space className='Space-Title'>
            <div className='logo'>
              <LierLogo />
            </div>
            <div className='title'>Login</div>
          </Space>
          <Form onFinish={login} className='Form' size='large'>
            <Form.Item
              name='name'
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input
                allowClear
                className='Input'
                placeholder='Username'
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              name='pwd'
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password
                allowClear
                autoComplete='true'
                placeholder='Password'
                className='Input'
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Space align='baseline' size={66} className='Space'>
              <Space size={1} align='baseline'>
                还有没有账号？
                <Link to='/account/register'>点这里注册</Link>
              </Space>
              <Space align='baseline'>
                <Form.Item>
                  <Button type='ghost' htmlType='reset' size='middle'>
                    重置
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button type='primary' htmlType='submit' size='middle'>
                    登陆
                  </Button>
                </Form.Item>
              </Space>
            </Space>
          </Form>
        </Space>
        <LierFooter />
      </Space>
    </Spin>
  )
}

export const LierFooter = () => {
  return (
    <div className='footer'>
      基于
      <a href='https://zh-hans.reactjs.org/' target='_blank' rel='noreferrer'>
        React
      </a>
      框架
      <a href='https://ant.design/index-cn' target='_blank' rel='noreferrer'>
        ant.design
      </a>
      . UI设计
    </div>
  )
}

export default Login
