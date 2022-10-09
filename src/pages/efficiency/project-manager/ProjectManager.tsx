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
      [
        document.getElementById('a'),
        document.getElementById('b'),
        document.getElementById('c'),
        document.getElementById('d'),
      ] as HTMLElement[],
      {
        // el 自己
        // target 去哪里
        // source 来自哪里
        // sibling 到达目标后的相邻元素（后一个）
        accepts: function (
          el?: Element,
          target?: Element,
          source?: Element,
          sibling?: Element
        ) {
          console.log('el', el)
          // 获取el自定义属性data

          console.log('target', target)
          console.log('source', source)
          console.log('sibling', sibling)
          return true
        },

        // el 被移动元素
        // container 被移动元素所处容器
        // handle 被移动元素
        // sibling 被移动元素下一个元素，如果被移动元素为最后一个，则为null
        moves: (el?, container?, handle?, sibling?) => {
          return true
        },
      }
    )
  }, [])
  return (
    <div className='ProBox'>
      <Row>
        <Col span={6}>
          <div id='a'>
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
          <div id='b' style={{ background: 'pink' }}>
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
          <div id='c' style={{ background: 'pink' }}>
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
          <div id='d' style={{ background: 'pink' }}>
            <div style={{ background: 'red', height: 20 }}>西瓜2</div>
            <div style={{ background: 'yellow', height: 20 }}>苹果2</div>
            <div style={{ background: 'pink', height: 20 }}>香蕉2</div>
            <div style={{ background: 'blue', height: 20 }}>葡萄2</div>
            <div style={{ background: 'blue', height: 20 }}>榴莲2</div>
            <div style={{ background: 'blue', height: 20 }}>橘子2</div>
            <div className='ddd' style={{ background: 'blue', height: 20 }}>
              石榴2
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default ProjectManager
