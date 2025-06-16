<template>
  <!-- 主界面的 -->
  <div class="container index">
    <div class="home-box">
      <!-- <bannerSwiper></bannerSwiper> -->
    </div>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import "swiper/css/swiper.css"
import bannerSwiper from "../components/bannerSwiper.vue"
import { message } from "ant-design-vue"


import { websiteApi } from '../services/api'
export default {
  components: {

    bannerSwiper,
  },
  // directives: {
  //   swiper: directive
  // },
  data () {
    return {

    }
  },
  computed: {
  },
  created () { },
  watch: {
    // 监视路由
    // $route(newVal) {
    //   console.log('newVal');
    //   console.log(newVal);
    //   // 为了获取参数
    //   this.flag = newVal.params.name;
    //   // console.log("this.flag",this.flag);
    // }
  },
  async mounted () {
    await websiteApi.getBanners()
    // try {
    //   const [bannerData] = await ([
    //     this.$api.getHomeData(),
    //   ])
    //   return { bannerData }
    // } catch (error) {
    //   console.error('数据获取失败:', error)
    // }
    // const response2 = await this.$axios.get(
    //   this.$config.apiBaseUrl + "/importantNewsList"
    // )
    // this.$api.getHomeData()
    // const this = _this
    // try {
    //   const response = await this.$api.getBanners()
    //   console.log('首页数据:', response.data)
    //   // 处理数据逻辑...
    // } catch (error) {
    //   console.error('数据请求失败:', error)
    //   message.error('数据加载失败')
    // }

  },
  methods: {

  },
  beforeDestroy () {
  },
  // async asyncData ({ $api }) {
  //   try {
  //     const [banners] = await Promise.all([
  //       $api.get('/banners'),
  //     ])

  //     return { banners }
  //   } catch (error) {
  //     console.error('获取首页数据失败:', error.message)
  //     return {
  //       banners: []
  //     }
  //   }
  // }
}
</script>
