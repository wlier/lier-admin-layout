import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.less'
import 'antd/dist/antd.variable.min.css'
import 'react-dragula/dist/dragula.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
