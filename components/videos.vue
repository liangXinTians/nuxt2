
<template>
  <div class="video-gallery">
    <div class="gallery-container">
      <ul class="video-list">
        <li v-for="(video, index) in videoList" :key="index" class="video-item">
          <div class="video-wrapper">
            <video
              :src="'/file' + video.videoUrl"
              controls
              :poster="'/file' + video.imageUrl"
              class="video-player"
              @play="handleVideoPlay(index)"
            ></video>
          </div>
          <p class="video-title">{{ video.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'VideoGallery',
  data() {
    return {
      videoList: [
        {
          videoUrl: '',
          imageUrl: '',
          name: 'Factory penis【S206-2】with belt sex toys dildo huge shop vibrating dildos vibrator for women'
        },
        {
          videoUrl: '',
          imageUrl: '',
          name: 'Banana Adult Penty Vibrator【S-219】Sex Toy Women Silicone G Spot Vibrator Penis Ring'
        },
        {
          videoUrl: '',
          imageUrl: '',
          name: 'Factory penis with belt【S-305】sex toys dildo huge dildos vibrator for women'
        }
      ],
      params: {
        pageNum: 1,
        pageSize: 3,
        lang: Cookies.get('user_lang') || 'en' // 默认语言
      },
      videoElements: [] // 存储视频DOM元素的引用
    }
  },
  async mounted() {
    await this.getProductList()
    // 在nextTick中获取视频元素，确保DOM已渲染
    this.$nextTick(() => {
      this.videoElements = document.querySelectorAll('.video-player')
    })
  },
  methods: {
    async getProductList() {
      try {
        const response = await this.$axios.get(
          this.$config.apiBaseUrl + '/video-category/list',
          { params: this.params }
        )
        this.videoList = response.data.rows 
      } catch (error) {
        console.error('Failed to fetch videos:', error)
      }
    },
    handleVideoPlay(currentIndex) {
      // 遍历所有视频元素
      this.videoElements.forEach((video, index) => {
        if (index !== currentIndex && !video.paused) {
          video.pause() // 暂停其他正在播放的视频
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
/* 原有样式保持不变 */
.video-gallery {
  width: 100%;
  padding: 40px 0;
  background: url('@/assets/images/titleLogo.png') no-repeat;
  background-size: cover;

  .gallery-container {

  }

  .video-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;


    .video-item {
      width: calc(33.33% - 20px);
      margin: 0 10px 30px;
      background: #fff;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      .video-wrapper {
        position: relative;
        width: 100%;
        padding-top: 56.25%; 
        background: #000;

        .video-player {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .video-title {
        color: #fff;
        background: #773369;
        margin: 0;
        padding: 12px 15px;
        font-size: 14px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}

/* 响应式调整 */
@media (max-width: 992px) {
  .video-list .video-item {
    width: calc(50% - 20px);
  }
}
@media (max-width: 768px) {
  .video-gallery{
    .gallery-container{
      .video-list{
        
      }
    }
  }
}

@media (max-width: 576px) {
  .video-list .video-item {
    width: 100% !important;
    margin-bottom: 20px !important;
    // padding: 0 10px !important;
  }
}
</style>
