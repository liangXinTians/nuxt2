<template>
  <div class="img-swiper">
    <swiper ref="imgSwiper" :options="swiperOptions">
      <swiper-slide
        v-for="(item, index) in imagesGroup"
        :key="index"
        class="swiper-item"
      >
        <div class="img-box" @click="handleImageClick(index)">
          <div class="img">
            <img :src="$config.apiFileUrl + item.file_path" alt="" />
          </div>
          <div class="img-title" :style="{ color: fontColor }">{{ item.title }}</div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- 按钮部分 -->
    <div @click="goHomeLeft" v-if="imagesGroup.length > 2" class="home_left">
      <a-icon type="left" class="news_icon" />
    </div>
    <div @click="goHomeRight" v-if="imagesGroup.length > 2" class="home_right">
      <a-icon type="right" class="news_icon" />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, Navigation } from "vue-awesome-swiper";
// import { Navigation } from "swiper/modules";
// import "swiper/css/swiper.css";
// import "swiper/css/navigation.css";
export default {
  name: "imgSwiper",
  props: {
    imagesGroup: {
      type: Array,
      default: () => [],
    },
    fontColor: {
      type: String,
      default: "#fff",
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    Navigation,
  },
  data() {
    return {
      swiperOptions: {
        spaceBetween: 10,
        slidesPerView: "auto",
        initialSlide: 0,
        // width: "100%", // 设置容器宽度
        // height: "100%",
        navigation: {
          nextEl: ".swiper-button-next", // 下一张按钮的类名
          prevEl: ".swiper-button-prev", // 上一张按钮的类名
        },
        // loop: true,
      },
      // showTitle: true,
      // video控件
      // showControls: false,
    };
  },
  methods: {
    goHomeLeft() {
      this.$refs.imgSwiper.$swiper.slidePrev(); // 手动触发上一页事件
    },
    goHomeRight() {
      this.$refs.imgSwiper.$swiper.slideNext(); // 手动触发下一页事件
    },
    // 点击触发图片放大
    handleImageClick(index) {
      this.$emit("handleImageClickMobile", index);
    },
  },
  computed: {
    swiper() {
      return this.$refs.bannerSwiper.$swiper;
    },
  },
  watch: {
    imagesGroup: {
      deep: true,
      handler(newVal, oldVal) {
        // 让swiperx的初始位置为0
        this.$refs.imgSwiper.$swiper.slideTo(0,0, false);
      },
    },
  },
  created() {},
  async mounted() {},
};
</script>

<style scoped lang="less">
.img-swiper {
  height: 100%;
  position: relative;
  .swiper-container {
    cursor: pointer;
    height: 100%;
    .swiper-item {
      width: 40vw;
      .img-box {
        height: 100%;
        // width: 40vw;
        .img {
          height: 26.4vw;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            display: inline-block;
          }
        }
        .img-title {
          color: #fff;
          font-size: 14px;
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  .home_left {
    height: 3rem;
    width: 3rem;
    /*border: 1px solid #c0c0c0;*/
    position: absolute;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(72, 72, 72, 0.5);
    transition: 0.3s;
    z-index: 5;
    cursor: pointer;
    .news_icon {
      font-size: 2rem;
      color: #fff;
    }
  }
  .home_right {
    height: 3rem;
    width: 3rem;
    /*border: 1px solid #c0c0c0;*/
    position: absolute;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(72, 72, 72, 0.5);
    transition: 0.3s;
    z-index: 5;
    cursor: pointer;
    .news_icon {
      font-size: 2rem;
      color: #fff;
    }
  }
  .home_left:active {
    background-color: rgba(72, 72, 72, 1);
  }
  .home_right:active {
    background-color: rgba(72, 72, 72, 1);
  }
}
</style>
