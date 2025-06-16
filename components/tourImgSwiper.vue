<template>
  <div class="tour-img-swiper">
    <swiper ref="tourImgSwiper" :options="swiperOptions">
      <swiper-slide
        v-for="(item, index) in imagesGroup"
        :key="index"
        class="swiper-item"
      >
        <div class="img-box" @click="handleImageClick(index)">
          <img :src="item.src" :alt="item.alt" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, Navigation } from "vue-awesome-swiper";
// import { Navigation } from "swiper/modules";
// import "swiper/css/swiper.css";
// import "swiper/css/navigation.css";
export default {
  name: "tourImgSwiper",
  props: {
    imagesGroup: {
      type: Array,
      default: () => [],
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
        spaceBetween: 0,
        slidesPerView: "auto",
        initialSlide: 0,
        // width: "100%", // 设置容器宽度
        // height: "100%",
        loop: true,
        // 轮播
        autoplay: {
          delay: 1000, // 自动轮播间隔时间，单位为毫秒
          disableOnInteraction: false, // 当用户拖动幻灯片时是否禁用自动轮播
        },
      },
      // showTitle: true,
      // video控件
      // showControls: false,
    };
  },
  methods: {
    handleImageClick(index) {
      this.$emit("handleImageClickMobile", index, this.imagesGroup);
    },
  },
  computed: {
    swiper() {
      return this.$refs.tourImgSwiper.$swiper;
    },
  },
  watch: {
    imagesGroup: {
      deep: true,
      handler(newVal, oldVal) {
        // 让swiperx的初始位置为0
        this.$refs.tourImgSwiper.$swiper.slideTo(0, 0, false);
      },
    },
  },
  created() {},
  async mounted() {},
};
</script>

<style scoped lang="less">
.tour-img-swiper {
  height: 100%;
  position: relative;
  .swiper-container {
    cursor: pointer;
    height: 100%;
    .swiper-item {
      width: 100%;
      .img-box {
        height: 100%;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
