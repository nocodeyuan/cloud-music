import axios from 'axios'

//创建请求实例
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
})

instance.defaults.headers.post['Content-Type'] =
  'application/json;charset=utf-8'

//TODO请求拦截

//GET请求
const get = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'GET',
      url,
      params,
      ...config,
    })
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

//POST请求
const post = (url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'POST',
      url,
      data,
      ...config,
    })
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export { get, post }
