import LierLogo from '@/components/logo'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Space, Form, Input, Button } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LierFooter, UserInfo } from '../login/Login'

import './Register.less'

const Register: React.FC = () => {
  const navigate = useNavigate()

  const register = (userInfo: UserInfo) => {
    localStorage.setItem('username', userInfo.name)
    navigate('/', { replace: true })
  }

  return (
    <Space direction='vertical' size={24} className='root'>
      <Space size={4} className='Register' align='center' direction='vertical'>
        <Space className='Space-Title'>
          <div className='logo'>
            <LierLogo />
          </div>
          <div className='title'>Register</div>
        </Space>
        <Form onFinish={register} className='Form' size='large'>
          <Form.Item
            name='name'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder='Username'
              className='Input'
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item
            name='pwd'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              autoComplete='true'
              placeholder='Password'
              className='Input'
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item
            name='password_check'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              autoComplete='true'
              placeholder='Password check'
              className='Input'
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Space align='baseline' size={66} className='Space'>
            <Space size={1} align='baseline'>
              已经有有账号？
              <Link to='/account/login'>点这里登陆</Link>
            </Space>
            <Space align='baseline'>
              <Form.Item>
                <Button type='ghost' htmlType='reset' size='middle'>
                  重置
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit' size='middle'>
                  注册
                </Button>
              </Form.Item>
            </Space>
          </Space>
        </Form>
      </Space>
      <LierFooter />
    </Space>
  )
}

export default Register
