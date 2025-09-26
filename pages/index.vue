<template>
  <!-- 主界面的 -->
  <div class="container index">
    <div class="home-box">
      <!-- <bannerSwiper></bannerSwiper> -->
      <banner-swiper :banners="bannerList"></banner-swiper>
      <three-images></three-images>
      <div class="biaoti">
        <div class="title">
          {{ $t('home.forYou') }}
        </div>
        <div class="fenge">
        </div>
        <div class="more" @click="handleClick('/product')">
          {{ $t('home.more') }}
        </div>
      </div>
      <four-images-with-text></four-images-with-text>

      <!-- video -->
      <div class="biaoti black">
        <div class="titles">
          {{ $t('home.video') }}
        </div>
        <div class="fenge">
        </div>
        <div class="mores" @click="handleClick('/video')">
          {{ $t('home.more') }}
        </div>
        <videos></videos>
      </div>

      <!-- product-test -->
      <div class="biaoti">
        <div class="titles" style="color: #666666;">
          {{ $t('home.productTest') }}
        </div>
        <div class="fenge">
        </div>
        <div class="title-list">
          <div class="title-item" @mouseover="handleTabChange(0)">{{ $t('home.freeSexToy') }}</div>
          <div class="title-item" @mouseover="handleTabChange(1)">{{ $t('home.toExperience') }}</div>
          <div class="title-item" @mouseover="handleTabChange(2)">{{ $t('home.theComments') }}</div>
        </div>
        <div class="more" @click="handleClick('/productTest')">
          {{ $t('home.more') }}
        </div>
        <product-test ref="productTest"></product-test>
      </div>

      <!-- profile -->
      <div class="biaoti profile-black">
        <div class="titles" style="color: #FFFFFF;">
          {{ $t('home.profile') }}
        </div>
        <div class="fenge">
        </div>
        <div class="mores" @click="handleClick('/companyProfile')">
          {{ $t('home.more') }}
        </div>
        <profile></profile>
      </div>

      <!-- news -->
      <div class="biaoti">
        <div class="titles" style="color: #666666;">
          {{ $t('home.news') }}
        </div>
        <div class="fenge">
        </div>
        <!-- <div class="title-list">
          <div class="title-item" @mouseover="handleNewsChange(0)">Social news</div>
          <div class="title-item" @mouseover="handleNewsChange(1)">About sex</div>
          <div class="title-item" @mouseover="handleNewsChange(2)">Industry Dynamic</div>
        </div> -->
        <div class="more" @click="handleClick('/article')">
          {{ $t('home.more') }}
        </div>
        <news ref="news"></news>
      </div>
    </div>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import "swiper/css/swiper.css"
// import bannerSwiper from "../components/bannerSwiper22.vue"
import { message } from "ant-design-vue"

import BannerSwiper from "@/components/bannerSwiper.vue"
import ThreeImages from '@/components/threeImages.vue'
import FourImagesWithText from '@/components/fourImagesWithText.vue'
import videos from '@/components/videos.vue'
import productTest from '@/components/productTest.vue'
import profile from '@/components/profile.vue'
import news from "@/components/news.vue"


import { websiteApi } from '../services/api'
export default {
  components: {
    ThreeImages,
    BannerSwiper,
    FourImagesWithText,
    videos,
    productTest,
    profile,
    news
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

  },
  async mounted () {


  },
  methods: {
    // 切换模块
    handleTabChange (index) {
      document.querySelectorAll('.title-item').forEach(el => el.style.color = '#666')
      event.target.style.color = '#FF1C8E'
      this.$refs.productTest.currentTab = index
    },
    handleNewsChange (index) {
      document.querySelectorAll('.title-item').forEach(el => el.style.color = '#666')
      event.target.style.color = '#FF1C8E'
      this.$refs.news.currentTab = index
    },
    handleClick (url) {
      this.$router.push({ path: url })
    }


  },
  beforeDestroy () {
  },

}
</script>

<style lang="less" scoped>
.home-box {
  background-color: #F7F7F7;

  .biaoti {
    line-height: 120%;
    text-align: center;
    padding: 4rem 0;

    .title {
      font-family: 'TENSANS';
      font-size: 5rem;
      line-height: 120%;
      color: #666;
      font-weight: 900;
      margin: 0;
      padding: 0;
      text-align: center;
      width: 100%;
      position: relative;
    }

    .titles {
      font-family: 'TENSANS';
      font-size: 5rem;
      line-height: 120%;
      color: #fff;
      font-weight: 900;
      margin: 0;
      padding: 0;
      text-align: center;
      width: 100%;
      position: relative;
    }

    .title-list {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 40px;
      // gap: 40px;
      flex-wrap: wrap;



      .title-item {
        color: #666;
        cursor: pointer;
        transition: color 0.3s;
        font-size: 1.6rem;
        white-space: nowrap;
        position: relative;
        // padding-left: 20px; 
        margin: 10px 20px 10px 20px;

        &:first-child::before {
          display: none;
        }

        &:before {
          position: absolute;
          content: '';
          width: 1px;
          height: 12px;
          top: 8px;
          left: -20px;
          border-left: 1px solid #DDDDDD;
        }

        &:first-child {
          color: #FF1C8E;
        }

        &:hover {
          color: #FF1C8E;
        }
      }
    }
  }

  .black {
    background: url(@/assets/images/hintergrund_pjurlove.jpg) center no-repeat;
    background-size: cover;
  }

  .profile-black {
    background-color: #666666;
  }

  .fenge {
    display: block;
    margin: 15px auto 0;
    width: 100%;
    // max-width: 200px;
    height: 31px;
    background: url(@/assets/images/titleLogo.png) center no-repeat;
    background-size: contain;
  }

  .more,
  .mores {
    cursor: pointer;
    width: 80px;
    height: 36px;
    line-height: 34px;
    margin: 20px auto 0;
    display: block;
    text-align: center;
    font-size: 16px;
    border-radius: 20px;
    padding: 0;
    transition: 0.3s;
  }

  .more {
    background: #666;
    color: #fff;
    border: 1px solid #666;

    &:hover {
      color: #ff1c8e;
    }
  }

  .mores {
    background: #fff;
    color: #666;
    border: 1px solid #fff;

    &:hover {
      color: #ff1c8e;
    }
  }
}

/* 响应式设计 */
/* 平板设备 (768px - 1023px) */
@media (max-width: 1023px) and (min-width: 768px) {
  .home-box {
    .biaoti {
      padding: 3rem 1rem;

      .title,
      .titles {
        font-size: 3.5rem;
      }

      .title-list {
        // gap: 30px;
        padding-top: 30px;

        .title-item {
          font-size: 1.4rem;
        }
      }
    }

    .fenge {
      // max-width: 150px;
      // height: 25px;
    }

    .more,
    .mores {
      width: 70px;
      height: 32px;
      line-height: 30px;
      font-size: 14px;
    }
  }
}

@media (max-width: 767px) {
  .home-box {
    .biaoti {
      padding: 2rem 1rem 1rem 1rem;

      .title,
      .titles {
        font-size: 2.5rem;
      }

      .title-list {
        // flex-direction: column;
        // gap: 20px;
        padding-top: 25px;

        .title-item {
          font-size: 1.2rem;
          white-space: normal;
          text-align: center;
          // padding: 8px 16px;
          margin: 10px 15px 10px 15px;
          &:before {

          top: 5px;
          left: -15px;
          border-left: 1px solid #DDDDDD;
        }
        }
      }
    }

    .fenge {
      // max-width: 120px;
      // height: 20px;
      // margin-top: 10px;
    }

    .more,
    .mores {
      // width: 60px;
      // height: 28px;
      // line-height: 26px;
      // font-size: 12px;
      // margin-top: 15px;
      display: none;
    }
  }
}

@media (max-width: 479px) {
  .home-box {
    .biaoti {
      padding: 1.5rem 0.5rem 0.5rem 0.5rem;


      .title,
      .titles {
        font-size: 2rem;
        line-height: 110%;
      }

      .title-list {
        // gap: 15px;
        padding-top: 20px;

        .title-item {
          font-size: 1rem;
          // padding: 6px 12px;
        }
      }
    }

    .fenge {
      // max-width: 100px;
      // height: 18px;
    }

    .more,
    .mores {
      // width: 50px;
      // height: 24px;
      // line-height: 22px;
      // font-size: 11px;
    }
  }
}
</style>