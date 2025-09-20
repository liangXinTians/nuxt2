<template>
  <div class="swiper-container">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in localImages" :key="index">
        <img  :src="$config.apiFileUrl + item.fileUrl" class="swiper-image">
        <!-- <div class="swiper-title">{{ item.title }}</div> -->
      </swiper-slide>

      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>

      <!-- 导航按钮 -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Cookies from 'js-cookie';

export default {
  name: 'BannerSwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      localImages: [
      ],
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  async mounted () {
    // this.getBannerImg()
    const response = await this.$axios.get(
      this.$config.apiBaseUrl + "/banner-display/list",
      {
        params: {  // 将参数包裹在 params 对象中
          pageNum: 1,
          pageSize: 3,
          type: 1,
          lang: Cookies.get('user_lang')
        }
      }
    )
    console.log(response.data,'response.data')
    this.localImages = response.data.rows

  },
   methods: {
    // async getBannerImg () {
    //   const res = await this.$axios.get('/api/banner')
    //   if (res.data.code === 200) {
    //     this.localImages = res.data.data
    //   }
    // }

  }
}
</script>

<style lang="less" scoped>
// 定义变量
@swiper-height: 550px;
@title-font-size: 24px;
@button-size: 40px;
@bullet-size: 12px;
@primary-color: #ff1c8e;
@bullet-active-color: #ff1c8e;

.swiper-container {
  width: 100%;
  // height: @swiper-height;
  height: 100vh;
  position: relative;

  .swiper-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-title {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    text-align: center;
    color: white;
    font-size: @title-font-size;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.3);
  }

  // 导航按钮
  .swiper-button-prev,
  .swiper-button-next {
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    width: @button-size;
    height: @button-size;
    height: 70px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;

    &::after {
      font-size: @title-font-size - 4;
    }
  }

  .swiper-button-prev {
    left: 10px;
  }

  .swiper-button-next {
    right: 10px;
  }

  // 分页器样式
  /deep/ .swiper-pagination-bullet {
    width: @bullet-size;
    height: @bullet-size;
    background: white;
    opacity: 0.4;

    &-active {
      // background: @primary-color;
      background: @bullet-active-color;
      opacity: 0.4;
    }
  }
}
</style>