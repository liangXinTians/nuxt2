<template>
  <!-- 主界面的 -->
  <div class="container index">
    <div class="home-box">
      <!-- <bannerSwiper></bannerSwiper> -->
      <banner-swiper :banners="bannerList"></banner-swiper>
      <three-images></three-images>
      <!-- <div class="biaoti">
        <div class="title">
          S-HANDE For You
        </div>
        <div class="fenge">
        </div>
        <div class="more">
          More
        </div>
      </div> -->
      <!-- <four-images-with-text></four-images-with-text> -->
      <!-- <div class="biaoti black">
        <div class="titles">
          S-HANDE Video
        </div>
        <div class="fenge">
        </div>
        <div class="mores">
          More
        </div>
        <videos></videos>
      </div> -->

    </div>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import "swiper/css/swiper.css"
// import bannerSwiper from "../components/bannerSwiper22.vue"
import { message } from "ant-design-vue"

import BannerSwiper from "../components/bannerSwiper.vue"
import ThreeImages from '@/components/threeImages.vue'
import FourImagesWithText from '@/components/fourImagesWithText.vue'
import videos from '@/components/videos.vue'

import { websiteApi } from '../services/api'
export default {
  components: {
    ThreeImages,
    BannerSwiper,
    FourImagesWithText,
    videos
  },
  // directives: {
  //   swiper: directive
  // },
  data () {
    return {
      bannerList: []
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
    // await websiteApi.getBanners()
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
<style lang="less" scoped>
.home-box {
  .biaoti {
    line-height: 120%;
    text-align: center;
    padding: 4rem 0;

    .title {
      font-family: 'TENSANS';
      // font-size: 24px;
      font-size: 5rem;
      line-height: 120%;
      color: #fff;
      font-weight: normal;
      margin: 0;
      padding: 0;
      text-align: center;
      width: 100%;

      color: #666;
      position: relative;
      font-weight: 900;
    }
  }

  .black {
    background: url(https://www.sexhande.com/template/en/images/hintergrund_pjurlove.jpg) center no-repeat;
  }

  .fenge {
    display: block;
    margin: 0 auto;
    margin-top: 15px;
    width: 100%;
    height: 31px;
    background: url(https://www.sexhande.com/template/en/pic/title.png) center no-repeat;
  }

  .more {
    cursor: pointer;
    width: 60px;
    margin: 0 auto;
    display: block;
    text-align: center;
    height: 26px;
    line-height: 22px;
    background: #666;
    color: #fff;
    font-size: 16px;
    border: 1px solid #666;
    border-radius: 20px;
    padding: 0;
    margin-top: 20px;
    transition: 0.3s;

    &:hover {
      color: #ff1c8e;

    }
  }

  .titles {
    font-family: 'TENSANS';
    // font-size: 24px;
    font-size: 5rem;
    line-height: 120%;
    color: #fff;
    font-weight: normal;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;

    color: #fff;
    position: relative;
    font-weight: 900;

  }

  .fenge {
    display: block;
    margin: 0 auto;
    margin-top: 15px;
    width: 100%;
    height: 31px;
    background: url(https://www.sexhande.com/template/en/pic/title.png) center no-repeat;
  }

  .mores {
    cursor: pointer;
    width: 60px;
    margin: 0 auto;
    display: block;
    text-align: center;
    height: 26px;
    line-height: 22px;
    background: #fff;
    color: #666;
    font-size: 16px;
    border: 1px solid #fff;
    border-radius: 20px;
    padding: 0;
    margin-top: 20px;
    transition: 0.3s;

    &:hover {
      color: #ff1c8e;

    }

  }

}
</style>
