import { Switch } from 'antd'
import React, { useEffect, useState } from 'react'
import LierIcon from '../icon'
import * as DarkReader from 'darkreader'

export const dark = 'dark'
export const light = 'light'

const ThemeIcon: React.FC = () => {
  const [themeStat, setThemeStat] = useState<boolean>(
    localStorage.getItem('theme') === dark
  )

  useEffect(() => {
    themeStat ? DarkReader.enable({}) : DarkReader.disable()
    localStorage.setItem('theme', themeStat ? dark : light)
  }, [themeStat])

  return (
    <>
      <Switch
        checked={themeStat}
        checkedChildren={<LierIcon svgIcon='icon-taiyang-copy' />}
        unCheckedChildren={<LierIcon svgIcon='icon-icon_huabanfuben' />}
        onChange={setThemeStat}
      />
    </>
  )
}

export default ThemeIcon
