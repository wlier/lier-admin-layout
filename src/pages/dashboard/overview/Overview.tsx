import LierIcon from '@/components/icon'
import { TeamOutlined } from '@ant-design/icons'
import { Button, Col, Row, Space, Statistic } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import PanelCard from './child/PanelCard'
import PanelOpLine from './child/PanelOpLine'
import { panelData } from './child/panel.config'
import './Overview.less'
import { Gauge, Pie, Rose, WordCloud } from '@ant-design/plots'

const Overview: React.FC = () => {
  const panelList = [
    {
      icon: 'icon-user',
      title: '访客量',
      value: 1121233,
      class: 'icon-people',
    },
    {
      icon: 'icon-renminbi',
      title: '销售额',
      value: 1121233,
      class: 'icon-money',
    },
    {
      icon: 'icon-ai-cart',
      title: '加入购物车',
      value: 112893,
      class: 'icon-shopping',
    },
    {
      icon: 'icon-xinxifill',
      title: '留言板',
      value: 112893,
      class: 'icon-message',
    },
  ]

  const [data, setData] = useState(panelData.userData as any[])
  const panelCard = (item: any) => {
    switch (item.title) {
      case '访客量': {
        setData(panelData.userData)
        break
      }
      case '销售额': {
        setData(panelData.moneyData)
        break
      }
      case '加入购物车': {
        setData(panelData.shoppingData)
        break
      }
      case '留言板': {
        setData(panelData.messageData)
      }
    }
  }
  const data1 = [
    {
      type: '分类一',
      value: 20,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 15,
    },
    {
      type: '分类四',
      value: 12,
    },
    {
      type: '分类五',
      value: 18,
    },
    {
      type: '其他',
      value: 10,
    },
  ]
  const config = {
    data: data1,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 0.9,
    label: {
      offset: 8,
    },
    colorField: 'type', // 部分图表使用 seriesField
    color: ['#69c0ff', '#d3adf7', '#5cdbd3', '#ff85c0', '#b7eb8f', '#ffbb96'],
  }

  const pieData = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ]
  const pieConfig = {
    appendPadding: 10,
    data: pieData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    color: ['#69c0ff', '#d3adf7', '#5cdbd3', '#ff85c0', '#b7eb8f', '#ffbb96'],
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  }

  const [wordCloudData, setWordCloudData] = useState([])

  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json'
    )
      .then((response) => response.json())
      .then((json) => setWordCloudData(json))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }
  const wordCloudConfig = {
    data: wordCloudData,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      fontFamily: 'Verdana',
      rotation: 0,
    },
    // 返回值设置成一个 [0, 1) 区间内的值，
    // 可以让每次渲染的位置相同（前提是每次的宽高一致）。
    random: () => 0.5,
  }

  const ticks = [0, 1 / 3, 2 / 3, 1]
  const color = ['#F4664A', '#FAAD14', '#30BF78']
  const graphRef = useRef()
  const gaugeConfig = {
    radius: 0.7,
    percent: 0,
    innerRadius: 0.75,
    type: 'meter',
    // 自定义 meter 总步数 以及 step 占比
    meter: {
      steps: 50,
      stepRatio: 0.6,
    },
    range: {
      ticks: [0, 1],
      color: ['l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78'],
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    statistic: {
      title: {
        formatter: ({ percent }: any) => {
          if (percent < ticks[1]) {
            return '差'
          }

          if (percent < ticks[2]) {
            return '中'
          }

          return '优'
        },
        style: ({ percent }: any) => {
          return {
            fontSize: '20px',
            lineHeight: 1,
            color:
              percent < ticks[1]
                ? color[0]
                : percent < ticks[2]
                ? color[1]
                : color[2],
          }
        },
      },
      content: {
        offsetY: 24,
        style: {
          fontSize: '16px',
          color: '#4B535E',
        },
        formatter: () => '系统表现',
      },
    },
    onReady: (plot: any) => {
      graphRef.current = plot
    },
  }
  useEffect(() => {
    if (graphRef.current) {
      let data = 0.7
      const interval = setInterval(() => {
        if (data >= 1.5) {
          clearInterval(interval)
        }

        data += 0.005
        // graphRef.current?.changeData(data > 1 ? data - 1 : data)
      }, 100)
    }
  }, [graphRef])
  return (
    <div className='overview-box'>
      <h1>Overview</h1>
      <Row gutter={[{ xs: 8, sm: 16, md: 24 }, 16]}>
        {panelList.map((item, index) => (
          <Col
            xs={12}
            lg={6}
            key={index}
            onClick={() => {
              panelCard(item)
            }}
          >
            <PanelCard cardItem={item} />
          </Col>
        ))}
        <Col span={24}>
          <div style={{ backgroundColor: '#f5f5f5' }}>
            <PanelOpLine data={data} />
          </div>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <div style={{ backgroundColor: '#f5f5f5', height: 200 }}>
            <Rose {...config} />
          </div>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <div style={{ backgroundColor: '#f5f5f5', height: 200 }}>
            <Pie {...pieConfig} />
          </div>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <div style={{ backgroundColor: '#f5f5f5', height: 200 }}>
            <Gauge {...gaugeConfig} />
          </div>
        </Col>
        <Col span={24}>
          <div style={{ backgroundColor: '#f5f5f5' }}>
            <WordCloud {...wordCloudConfig} />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Overview
