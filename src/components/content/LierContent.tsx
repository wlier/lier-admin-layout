import React from 'react'

import './LierContent.less'

export interface LierContentProps {
  children: React.ReactNode | React.ReactElement
}

export const LierContent: React.FC<LierContentProps> = ({ children }) => {
  return <div className='content-root'>{children}</div>
}
