<template>
  <div class="banner-swiper">
    <swiper ref="bannerSwiper" :slides-per-view="1" :options="swiperOptions">
      <swiper-slide
        v-for="(item, index) in bannerHome"
        :key="item.file_path"
        class="swiper-item"
        v-if="bannerHome.length > 0"
      >
        <div
          class="video"
          @mouseleave="buttonControls(index)"
          @mouseenter="buttonControl(index)"
          v-if="
            item.file_path.slice(item.file_path.lastIndexOf('.')) === '.mp4'
          "
        >
          <!-- 视频播放 -->
          <transition name="slide">
            <div class="title" v-if="item.showTitle">信养老&nbsp;&nbsp;新可能</div>
          </transition>
          <video
            :ref="`video${index}`"
            :src="$config.apiFileUrl + item?.file_path"
            loop
            id="my-video"
            controlslist="nodownload"
            :controls="item.showControls"
            @click="toggleVideo(index)"
            :poster="item.poster_img"
          >
            Your browser does not support the video tag.
          </video>
          <div class="play-button" id="play-button" :ref="`playButton${index}`" @click="toggleVideo(index)">
            <a-icon type="play-circle" />
          </div>
        </div>
        <div v-else class="img" @click="goDetailPage(item.link_url)">
          <img loading="lazy" :src="$config.apiFileUrl + item?.file_path" alt="" />
        </div>
      </swiper-slide>
    </swiper>
    <!-- 按钮部分 -->
    <div @click="goHomeLeft" v-if="bannerHome.length > 1" class="home_left">
      <a-icon type="left" class="news_icon" />
    </div>
    <div @click="goHomeRight" v-if="bannerHome.length > 1" class="home_right">
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
  name: "bannerSwiper",
  props: {},
  components: {
    Swiper,
    SwiperSlide,
    Navigation,
  },
  data() {
    return {
      bannerHome: [],
      swiperOptions: {
        initialSlide: 0,
        // width: "100%", // 设置容器宽度
        // height: "100%",
        navigation: {
          nextEl: ".swiper-button-next", // 下一张按钮的类名
          prevEl: ".swiper-button-prev", // 上一张按钮的类名
        },
        autoplay: {
          delay: 3000, // 自动轮播间隔时间，单位为毫秒
          disableOnInteraction: false, // 当用户拖动幻灯片时是否禁用自动轮播
        },
        loop: true,
      },
      // showTitle: true,
      // video控件
      // showControls: false,
    };
  },
  methods: {
    goHomeLeft() {
      // 获取全部视频元素
      console.log("goHomeLeft", this.$refs);
      this.$refs.bannerSwiper.$swiper.slidePrev(); // 手动触发上一页事件
    },
    goHomeRight() {
      this.$refs.bannerSwiper.$swiper.slideNext(); // 手动触发下一页事件
    },
    //鼠标进入视频
    buttonControl(index) {
      if (!this.showControls) {
        // const video = document.getElementById("my-video")
        const playButton = this.$refs[`playButton${index}`][0];
        // if (video.paused) {
        playButton.style.display = "block";
        // } else {
        // playButton.style.display = "none"
      } else {
        return;
      }
    },
    // 鼠标移出视频
    buttonControls(index) {
      const playButton = this.$refs[`playButton${index}`][0];
      playButton.style.display = "none";
    },
    // 点击视频的时候
    toggleVideo(index) {
      if (this.bannerHome[index].showControls) {
        console.log("视频暂停了", this.showControls);
        return;
      } else {
        // 进来了
        console.log("点击视频了");
        // const video = document.getElementById("my-video");
        const video = this.$refs[`video${index}`][0];
        console.log("video", video);
        // const playButton = document.getElementById("play-button");
        const playButton = this.$refs[`playButton${index}`][0];
        this.bannerHome[index].showTitle = false;
        this.bannerHome[index].showControls = true;
        playButton.style.display = "none";
        console.log("video.paused", this.bannerHome);
        // 解决第一次点击视频出现的问题
        setTimeout(() => {
          video.play();
        }, 100);
      }
    },
    // 进入图片详情页
    goDetailPage(url) {
      this.$router.push(url);
    },
  },
  computed: {
    swiper() {
      return this.$refs.bannerSwiper.$swiper;
    },
  },
  created() {},
  async mounted() {
    const response1 = await this.$axios.get(
      this.$config.apiBaseUrl + "/homeBannerList"
    );
    // this.bannerHome = response1.data.data[0].file_path
    this.bannerHome = response1.data.data;
    this.bannerHome.forEach((item) => {
      if (item.title === "中信养老") {
        item.poster_img = require("../assets/images/zhongxinyanglao/video-img.png");
      }
      // 给每个视频添加属性

      if (item.file_path.slice(item.file_path.lastIndexOf(".")) === ".mp4") {
        item.showTitle = true;
        item.showControls = false;
      }
    });
    console.log("1231231", this.bannerHome);
    // 跳转到第一个
    this.$refs.bannerSwiper.$swiper.slideTo(1, 10, false);
  },
};
</script>

<style scoped lang="less">
.banner-swiper {
  position: relative;
  width: 100%;
  height: calc(100% - 90px);
  .swiper-item {
    height: calc(100% - 90px);
    width: 100%;
    .video {
      margin-top: 0px;
      overflow: hidden;
      position: relative;
      height: 100%;

      video {
        height: 100%;
      }

      video::-webkit-media-controls-timeline {
        margin-bottom: 70px;
        /* 设置进度条与控制条之间的垂直距离 */
      }
      .title {
        position: absolute;
        top: 45%;
        left: 50%;
        color: #fff;
        font-family: "Source Han Serif SC VF";
        transform: translate(-50%, -50%);
        font-size: 2.5rem;
      }

      video {
        width: 100%;
        height: 100%;
        display: block;
      }

      .play-button {
        position: absolute;
        top: 52%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        padding: 10px;
        font-size: 3rem;
        cursor: pointer;
      }
    }
    .img {
      margin-top: 0px;
      overflow: hidden;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .home_left {
    height: 50px;
    width: 50px;
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
      font-size: 32px;
      color: #fff;
    }
  }
  .home_right {
    height: 50px;
    width: 50px;
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
      font-size: 32px;
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
