import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Card, Col, Row, Space, Typography } from 'antd'
import Tag from 'antd/es/tag'
import React, { useEffect } from 'react'
import dragula from 'react-dragula'

import './TaskManager.less'
const { Paragraph, Text } = Typography

const TaskManager: React.FC = () => {
  useEffect(() => {
    dragula(
      [
        document.getElementById('taskStatus1'),
        document.getElementById('taskStatus2'),
        document.getElementById('taskStatus3'),
        document.getElementById('taskStatus4'),
      ] as HTMLElement[],
      {
        accepts: function (el: any, target: any, source: any, sibling: any) {
          switch (source) {
            case document.getElementById('taskStatus1'): {
              return (
                target === document.getElementById('taskStatus2') ||
                target === document.getElementById('taskStatus4')
              )
            }
            case document.getElementById('taskStatus2'): {
              return (
                target === document.getElementById('taskStatus3') ||
                target === document.getElementById('taskStatus4')
              )
            }
            case document.getElementById('taskStatus3'): {
              return target === document.getElementById('taskStatus4')
            }
            default:
              return true
          }
        },
      }
    )
  }, [])
  return (
    <div>
      <Space wrap style={{ alignItems: 'normal' }}>
        <div className='taskBox'>
          <div className='title'>未开始</div>
          <div id='taskStatus1' className=''>
            <div className='taskCard'>
              <Row>
                <Col span={18}>
                  <Tag color='#ff85c0' style={{ borderRadius: '16px' }}>
                    完善xx完善xx
                  </Tag>
                </Col>
                <Col span={6} style={{ textAlign: 'right' }}>
                  <EllipsisOutlined />
                </Col>
              </Row>
              <Paragraph ellipsis={{ rows: 2 }} className='content'>
                这是任务描述这是任务描述这是任务描述这是任务描述这是任务描述这是任务描述这是任务描述这是任务描述这是任务描述
              </Paragraph>
              <Tag color='magenta'>2h</Tag>
              <Tag color='magenta'>p1</Tag>
              <Tag color='magenta'>xx</Tag>
            </div>
          </div>
        </div>

        <div className='taskBox'>
          <div className='title'>处理中</div>
          <div id='taskStatus2'>
            <div>完善yyy</div>
            <div>yyy的选择</div>
            <div>修改yyy</div>
          </div>
        </div>
        <div className='taskBox'>
          <div className='title'>已完成</div>
          <div id='taskStatus3'>
            <div>完善xx111</div>
            <div>111xxx的选择</div>
            <div>修改xx1111</div>
          </div>
        </div>
        <div className='taskBox'>
          <div className='title'>已完成</div>
          <div id='taskStatus4'>
            <div>完善xx111222</div>
            <div>111222xxx的选择</div>
            <div>修改xx1111222</div>
          </div>
        </div>
      </Space>
    </div>
  )
}

export default TaskManager
