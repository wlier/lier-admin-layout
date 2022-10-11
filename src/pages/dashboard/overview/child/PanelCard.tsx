import LierIcon from '@/components/icon'
import { Statistic } from 'antd'
import React from 'react'
interface PanelCardProps {
  cardItem: any
}
const PanelCard: React.FC<PanelCardProps> = ({ cardItem }) => {
  return (
    <div className='card'>
      <div className={`icon ${cardItem.class}`}>
        <LierIcon svgIcon={cardItem.icon} style={{ fontSize: 40 }} />
      </div>
      <Statistic
        title={cardItem.title}
        value={cardItem.value}
        className='text'
      />
    </div>
  )
}
export default PanelCard
