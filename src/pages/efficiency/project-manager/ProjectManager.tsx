import React, { useEffect } from 'react'
import './ProjectManager.less'
import dragula from 'react-dragula'
import { Col, Row, Space } from 'antd'

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
      ],
      {
        accepts: function (el: any, target: any, source: any, sibling: any) {
          console.log('el', el)
          console.log('target', target)
          console.log('source', source)
          console.log('right', sibling)

          switch (source) {
            case document.getElementById('a'): {
              return (
                target === document.getElementById('b') ||
                target === document.getElementById('d')
              )
            }
            case document.getElementById('b'): {
              return (
                target === document.getElementById('c') ||
                target === document.getElementById('d')
              )
            }
            case document.getElementById('c'): {
              return target === document.getElementById('d')
            }
          }
        },
      }
    )
  }, [])
  return (
    <div className='ProBox'>
      <Space wrap style={{ width: '100%' }}>
        <div id='a' style={{ width: 200 }}>
          <div style={{ background: 'blue', height: 20 }}></div>
          <div style={{ background: 'green', height: 20 }}></div>
          <div style={{ background: 'pink', height: 20 }}></div>
          <div style={{ background: 'pink', height: 20 }}>Swap him around</div>
          <div style={{ background: 'pink', height: 20 }}>Swap them around</div>
          <div style={{ background: 'pink', height: 20 }}>Swap us around</div>
          <div style={{ background: 'pink', height: 20 }}>
            Swap things around
          </div>
          <div style={{ background: 'pink', height: 20 }}>
            Swap everything around
          </div>
        </div>
        <div id='b' style={{ width: 200 }}>
          <div style={{ background: 'red', height: 20 }}>西瓜</div>
          <div style={{ background: 'yellow', height: 20 }}>苹果</div>
          <div style={{ background: 'pink', height: 20 }}>香蕉</div>
          <div style={{ background: 'blue', height: 20 }}>葡萄</div>
          <div style={{ background: 'blue', height: 20 }}>榴莲</div>
          <div style={{ background: 'blue', height: 20 }}>橘子</div>
          <div style={{ background: 'blue', height: 20 }}>石榴</div>
        </div>
        <div id='c' style={{ width: 200 }}>
          <div style={{ background: 'red', height: 20 }}>西瓜1</div>
          <div style={{ background: 'yellow', height: 20 }}>苹果1</div>
          <div style={{ background: 'pink', height: 20 }}>香蕉1</div>
          <div style={{ background: 'blue', height: 20 }}>葡萄1</div>
          <div style={{ background: 'blue', height: 20 }}>榴莲1</div>
          <div style={{ background: 'blue', height: 20 }}>橘子1</div>
          <div style={{ background: 'blue', height: 20 }}>石榴1</div>
        </div>
        <div id='d' style={{ width: 200 }}>
          <div style={{ background: 'red', height: 20 }}>西瓜2</div>
          <div style={{ background: 'yellow', height: 20 }}>苹果2</div>
          <div style={{ background: 'pink', height: 20 }}>香蕉2</div>
          <div style={{ background: 'blue', height: 20 }}>葡萄2</div>
          <div style={{ background: 'blue', height: 20 }}>榴莲2</div>
          <div style={{ background: 'blue', height: 20 }}>橘子2</div>
          <div style={{ background: 'blue', height: 20 }}>石榴2</div>
        </div>
      </Space>
    </div>
  )
}
export default ProjectManager
