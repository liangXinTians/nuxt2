
// plugins/api.js
import axios from 'axios'

// 创建axios实例
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? '/api'
    : process.env.API_BASE_URL,
  // baseURL: '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    // 添加时间戳防止缓存
    if (config.method === 'get') {
      config.params = {
        ...config.params,
      }
    }

    console.log('请求发送:', config)
    return config
  },
  (error) => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    console.log('响应接收:', response)

    // 统一处理响应数据结构
    const { data } = response

    // 根据你的后端API规范调整
    if (data.code === 200 || data.success) {
      return data.data || data
    } else {
      // 业务错误处理
      const errorMsg = data.message || data.msg || '请求失败'
      throw new Error(errorMsg)
    }
  },
  (error) => {
    console.error('响应错误:', error)

    // HTTP状态码错误处理
    if (error.response) {
      const { status, data } = error.response

      switch (status) {
        case 403:
          throw new Error('没有权限访问')
        case 404:
          throw new Error('请求的资源不存在')
        case 500:
          throw new Error('服务器内部错误')
        default:
          throw new Error(data?.message || `请求失败 (${status})`)
      }
    } else if (error.request) {
      throw new Error('网络连接失败，请检查网络')
    } else {
      throw new Error(error.message || '请求失败')
    }
  }
)

// 封装常用请求方法
class ApiService {
  // GET请求
  get (url, params = {}) {
    return api.get(url, { params })
  }

  // POST请求
  post (url, data = {}) {
    return api.post(url, data)
  }

  // PUT请求
  put (url, data = {}) {
    return api.put(url, data)
  }

  // DELETE请求
  delete (url, params = {}) {
    return api.delete(url, { params })
  }

  // 文件上传
  upload (url, formData) {
    return api.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  // 下载文件
  download (url, params = {}) {
    return api.get(url, {
      params,
      responseType: 'blob'
    })
  }
}

// 创建API服务实例
const apiService = new ApiService()

// 在Vue实例中注入API服务
export default ({ app }, inject) => {
  // 注入到Vue原型，可以通过this.$api访问
  inject('api', apiService)

  // 注入到context，可以在asyncData、fetch等生命周期中访问
  inject('http', api)
}

// 导出API服务供其他地方使用
export { apiService, api }