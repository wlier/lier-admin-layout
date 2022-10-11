import React, { useState, useEffect } from 'react'
import { Line } from '@ant-design/plots'
import LineChart from '@ant-design/plots/es/components/line'
import { start } from 'repl'
import { time } from 'console'
interface PanelOpLineProps {
  data: any[]
}
const PanelOpLine: React.FC<PanelOpLineProps> = ({ data }) => {
  return (
    <LineChart
      renderer='canvas'
      autoFit
      smooth
      data={data}
      padding='auto'
      xField='Date'
      yField='value'
      seriesField='type'
      xAxis={{
        tickCount: 5,
      }}
    />
  )
}

export default PanelOpLine
