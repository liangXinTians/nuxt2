import { apiService } from '../plugins/api'

// 官网常用API接口
export const websiteApi = {
  // 获取首页轮播图
  getBanners () {
    // return apiService.get('/importantNewsList')
    return apiService.get('/homeBannerList')
  },

  // 获取产品列表
  getProducts (params) {
    return apiService.get('/products', params)
  },

  // 获取产品详情
  getProductDetail (id) {
    return apiService.get(`/products/${id}`)
  },

  // 获取新闻列表
  getNewsList (params) {
    return apiService.get('/news', params)
  },

  // 获取新闻详情
  getNewsDetail (id) {
    return apiService.get(`/news/${id}`)
  },

  // 获取公司信息
  getCompanyInfo () {
    return apiService.get('/company/info')
  },

  // 提交联系表单
  submitContact (data) {
    return apiService.post('/contact', data)
  },

  // 获取案例列表
  getCaseList (params) {
    return apiService.get('/cases', params)
  },

  // 获取案例详情
  getCaseDetail (id) {
    return apiService.get(`/cases/${id}`)
  }
}

// 内容管理API
export const contentApi = {
  // 获取页面SEO信息
  getPageSeo (page) {
    return apiService.get(`/seo/${page}`)
  },

  // 获取友情链接
  getFriendLinks () {
    return apiService.get('/friend-links')
  },

  // 获取网站配置
  getSiteConfig () {
    return apiService.get('/site-config')
  },

  // 获取分类列表
  getCategories (type) {
    return apiService.get('/categories', { type })
  }
}

// 文件上传API
export const uploadApi = {
  // 上传图片
  uploadImage (file) {
    const formData = new FormData()
    formData.append('file', file)
    return apiService.upload('/upload/image', formData)
  },

  // 批量上传
  uploadMultiple (files) {
    const formData = new FormData()
    files.forEach(file => {
      formData.append('files', file)
    })
    return apiService.upload('/upload/multiple', formData)
  }
}