export default (api) => ({
  // // 获取首页数据
  // getHomeData: (params) => api.get('/importantNewsList', { params }),

  // // 获取新闻列表
  // getNewsList: (page = 1) => api.get('/news', { params: { page } }),

  // // 提交预约
  // submitReservation: (data) => api.post('/reservation', data)

  // 获取首页数据
  getHomeData () {
    return api.get('/importantNewsList')
  },
})