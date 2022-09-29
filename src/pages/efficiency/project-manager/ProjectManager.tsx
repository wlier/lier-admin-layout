import React, { useEffect } from 'react'
import './ProjectManager.less'
import dragula from 'react-dragula'
import { Col, Row } from 'antd'

const ProjectManager: React.FC = () => {
  // dragula([document.getElementById('left'), document.getElementById('right')], {
  //   direction: 'vertical',
  //   moves: (el: any, container: any, handle: any) => {
  //     return handle.classList.contains('handle')
  //   },
  // })
  // dragula([document.getElementById('left')], { direction: 'vertical' })
  // dragula([document.getElementById('right')], { direction: 'vertical' })

  useEffect(() => {
    dragula(
      [document.getElementById('left'), document.getElementById('right')],
      {
        accepts: function (el: any, target: any) {
          console.log('el', el)
          console.log('target', target)
          return target === document.getElementById('right')
        },
      }
    )
  }, [])
  return (
    <div className='ProBox'>
      <Row>
        <Col span={6}>
          <div id='left'>
            <div style={{ background: 'blue', height: 20 }}></div>
            <div style={{ background: 'green', height: 20 }}></div>
            <div style={{ background: 'pink', height: 20 }}></div>
            <div style={{ background: 'pink', height: 20 }}>
              Swap him around
            </div>
            <div style={{ background: 'pink', height: 20 }}>
              Swap them around
            </div>
            <div style={{ background: 'pink', height: 20 }}>Swap us around</div>
            <div style={{ background: 'pink', height: 20 }}>
              Swap things around
            </div>
            <div style={{ background: 'pink', height: 20 }}>
              Swap everything around
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div id='right' style={{ background: 'pink' }}>
            <div style={{ background: 'red', height: 20 }}>西瓜</div>
            <div style={{ background: 'yellow', height: 20 }}>苹果</div>
            <div style={{ background: 'pink', height: 20 }}>香蕉</div>
            <div style={{ background: 'blue', height: 20 }}>葡萄</div>
            <div style={{ background: 'blue', height: 20 }}>榴莲</div>
            <div style={{ background: 'blue', height: 20 }}>橘子</div>
            <div style={{ background: 'blue', height: 20 }}>石榴</div>
          </div>
        </Col>
        <Col span={6}>
          <div id='right1' style={{ background: 'pink' }}>
            <div style={{ background: 'red', height: 20 }}>西瓜1</div>
            <div style={{ background: 'yellow', height: 20 }}>苹果1</div>
            <div style={{ background: 'pink', height: 20 }}>香蕉1</div>
            <div style={{ background: 'blue', height: 20 }}>葡萄1</div>
            <div style={{ background: 'blue', height: 20 }}>榴莲1</div>
            <div style={{ background: 'blue', height: 20 }}>橘子1</div>
            <div style={{ background: 'blue', height: 20 }}>石榴1</div>
          </div>
        </Col>
        <Col span={6}>
          <div id='right2' style={{ background: 'pink' }}>
            <div style={{ background: 'red', height: 20 }}>西瓜2</div>
            <div style={{ background: 'yellow', height: 20 }}>苹果2</div>
            <div style={{ background: 'pink', height: 20 }}>香蕉2</div>
            <div style={{ background: 'blue', height: 20 }}>葡萄2</div>
            <div style={{ background: 'blue', height: 20 }}>榴莲2</div>
            <div style={{ background: 'blue', height: 20 }}>橘子2</div>
            <div style={{ background: 'blue', height: 20 }}>石榴2</div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default ProjectManager
