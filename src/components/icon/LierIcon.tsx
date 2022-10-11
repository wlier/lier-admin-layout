import { createFromIconfontCN } from '@ant-design/icons'
import React from 'react'

export interface LierIconProps {
  scriptUrl?: string
  antdIcon?: string
  svgIcon?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler
}

const _antd_icon = require('@ant-design/icons')

const _interopRequireDefault = (obj: any) => {
  return obj && obj.__esModule ? obj : { default: obj }
}

const antd_icon = _interopRequireDefault(_antd_icon)

const LierIcon: React.FC<LierIconProps> = ({
  scriptUrl = '//at.alicdn.com/t/c/font_3294159_h79nws8zmc9.js',
  antdIcon,
  svgIcon,
  style,
  onClick,
}) => {
  if (svgIcon !== undefined && svgIcon !== '') {
    const MyIcon = createFromIconfontCN({
      scriptUrl: scriptUrl,
    })
    return <MyIcon onClick={onClick} style={style} type={svgIcon} />
  }

  if (!!antdIcon && antdIcon in antd_icon) {
    return React.createElement(antd_icon[antdIcon] || null, null, 123)
  }

  return <></>
}

export default LierIcon
