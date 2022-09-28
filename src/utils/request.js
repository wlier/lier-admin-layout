/**
 * 网络请求配置
 */
import axios from 'axios'

import { notification } from 'antd'

axios.defaults.timeout = 600000
axios.defaults.baseURL = 'http://localhost:18888'
axios.defaults.headers.post['Content-Type'] = 'application/json'
/**
 *  request 拦截器
 */
axios.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('accessToken')
    if (token) {
      config.headers = {
        accessToken: token,
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 *  response 拦截器
 */
axios.interceptors.response.use(
  (response) => {
    if (response.data.code !== 0) {
      notification['info']({
        message: response.data.msg,
      })
    }
    return response
  },
  (error) => {
    console.log('请求出错：', error)
  }
)

/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function GET(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((response) => {
        landing(url, params, response.data)
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function POST(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      (response) => {
        //关闭进度条
        resolve(response.data)
      },
      (err) => {
        console.log('err', err)
        msag(err)
        reject(err)
      }
    )
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function PUT(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        msag(err)
        reject(err)
      }
    )
  })
}
/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function DELETE(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, data).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        msag(err)
        reject(err)
      }
    )
  })
}

//失败提示
function msag(err) {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        alert(err.response.data.error.details)
        break
      case 401:
        alert('未授权，请登录')
        break

      case 403:
        alert('拒绝访问')
        break

      case 404:
        alert('请求地址出错')
        break

      case 408:
        alert('请求超时')
        break

      case 500:
        alert('服务器内部错误')
        break

      case 501:
        alert('服务未实现')
        break

      case 502:
        alert('网关错误')
        break

      case 503:
        alert('服务不可用')
        break

      case 504:
        alert('网关超时')
        break

      case 505:
        alert('HTTP版本不受支持')
        break
      default:
    }
  }
}

/**
 * 查看返回的数据
 * @param url
 * @param params
 * @param data
 */
function landing(url, params, data) {
  if (data.code === -1) {
  }
}
