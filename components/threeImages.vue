<template>
  <div class="three-images-container">
    <div class="image-grid">
      <div class="image-item" v-for="(item, index) in images" :key="index">
        <img :src="'/file' + item.fileUrl" :alt="item.alt" class="image-content">
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'ThreeImages',
  data () {
    return {
      images: [
        {
          url: require('@/assets/images/yifuyun/5.png'),
          alt: '图片1'
        },
        {
          url: require('@/assets/images/yifuyun/6.png'),
          alt: '图片2'
        },
        {
          url: require('@/assets/images/yifuyun/7.png'),
          alt: '图片3'
        }
      ]
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
          type: 2,
          lang: Cookies.get('user_lang')
        }
      }
    )
    console.log(response.data, 'response.data')
    this.images = response.data.rows
  },




}
</script>

<style lang="less" scoped>
.three-images-container {
  width: 100%;

  .image-grid {
    display: flex;
    width: 100%;

    .image-item {
      flex: 1;
      overflow: hidden;


      .image-content {
        width: 100%;
        display: block;
        object-fit: cover;
        aspect-ratio: 1/1;
      }

      // 移除图片间的边框线（如果有）
      &:not(:last-child) {
        border-right: none;
      }
    }
  }
}

// @media (max-width: 768px) {
//   .three-images-container {
//     .image-grid {
//       flex-direction: column;

//       .image-item {
//         // 移除垂直排列时的间距
//         margin-bottom: 0;

//         .image-content {
//           width: 100%;
//         }
//       }
//     }
//   }
// }</style>