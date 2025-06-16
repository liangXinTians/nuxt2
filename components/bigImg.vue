<template>
  <div
    class="big-img"
    :class="{ hideo: !showNow, fadeIn: showNow }"
    @touchmove.prevent
  >
    <div class="content">
      <swiper :options="swiperOption" ref="myswiper">
        <swiper-slide
          v-for="(item, index) in imgList"
          :key="index"
          class="slide"
        >
          <div class="swiper-zoom-container">
            <img
              loading="lazy"
              class="slide-img"
              :src="
                distinguishingMark == 0
                  ? (item.file_path ? $config.apiFileUrl + item.file_path : item.src)
                  : item
              "
              alt="加载中..."
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="page" v-if="distinguishingMark == 0">
      {{ currIndex }}/{{ imgList.length || 0 }}
    </div>
    <div class="close" @click="imgClick()">×</div>
  </div>
</template>
<script>
// import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    imgList: {
      type: Array,
    },
    activeImgIndex: {
      type: Number,
      default: 0,
    },
    distinguishingMark: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currIndex: this.activeImgIndex + 1,
      showNow: this.show,
      swiperOption: {
        zoom: true,
        on: {
          slideChange: (e) => {
            this.currIndex = this.$refs.myswiper.$swiper.activeIndex + 1;
          },
        },
      },
    };
  },
  mounted() {
    this.$refs.myswiper.$swiper.slideTo(this.activeImgIndex, 0, false);
    // console.log("xxx", this.imgList);
  },
  created() {},
  computed: {},
  methods: {
    imgClick() {
      this.showNow = false;
      this.$emit("changeShowBigImg");
    },
    getImageUrl(path) {
      return require(`~/assets/${path}`);
    },
  },
};
</script>
<style lang="less" scoped>
.big-img {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 1);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 9999999;
  .content {
    width: 100%;
    height: 100%;
    .slide {
      overflow: hidden;
    }
    .swiper-container {
      height: 100%;
    }
  }
  .swiper-zoom-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // overflow: hidden;
    .slide-img {
      width: 100%;
    }
  }
  .page {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 40px;
    z-index: 999999;
  }
  .close {
    position: absolute;
    right: 15px;
    top: 15px;
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    text-align: center;
    border:1px solid black;
    // line-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 16px;
    cursor: pointer;
    z-index: 99999;
    font-weight: bolder;
  }
}
.hideo {
  display: none !important;
}
.fadeIn {
  -webkit-animation: fadeInDown 0.2s forwards;
  animation: fadeInDown 0.2s forwards;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
