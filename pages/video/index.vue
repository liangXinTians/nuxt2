<template>
  <div class="home">
    <img class="banner-img" src="../../assets/images/banner/videoBanner.jpg" alt="">

    <div class="product-nav">
      <ul>
        <li><a href="" @click="$event.preventDefault(); $router.push('/video')" class="clear">{{ $t('menu.video') }}</a></li>
      </ul>
    </div>
    <div class="title">{{ $t('menu.video') }}</div>
    <div class="title-logo-container">
      <img src="@/assets/images/titleLogo.png" class="title-logo">
    </div>
    <!-- <a-icon class="play-button" type="play-circle" theme="filled" /> -->
    <div class="indexk3">
      <div class="indexk44">
        <ul>
          <li v-for="(video, index) in videoList" :key="index" @click="$router.push(`/videoDetail/${video.id}`)"
            class="video-poster-container">
            <div class="poster-wrapper">
              <img :src="$config.apiFileUrl + video.imageUrl" class="video-poster" :alt="video.name">
              <div class="play-button-overlay">
                <a-icon class="play-button" type="play-circle" theme="filled" />
              </div>
            </div>
            <p class="xianzhi1">{{ video.name }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <a-pagination 
        v-model="params.pageNum"
        :total="total"
        :pageSize="params.pageSize"
        :item-render="itemRender"
        @change="handlePageChange"
        style="text-align: center; margin: 20px 0;"
      />
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
  name: "",
  data () {
    return {
      videoList: [
        // {
        //   poster: require('@/assets/images/yifuyun/7.png'),
        //   title: 'Factory penis【S206-2】with belt sex toys dildo huge shop vibrating dildos vibrator for women'
        // },
        // {
        //   poster: require('@/assets/images/yifuyun/7.png'),
        //   title: 'Banana Adult Penty Vibrator【S-219】Sex Toy Women Silicone G Spot Vibrator Penis Ring'
        // },
        // {
        //   poster: require('@/assets/images/yifuyun/7.png'),
        //   title: 'Factory penis with belt【S-305】sex toys dildo huge dildos vibrator for women'
        // },
        // {
        //   poster: require('@/assets/images/yifuyun/7.png'),
        //   title: 'Banana Adult Penty Vibrator【S-219】Sex Toy Women Silicone G Spot Vibrator Penis Ring'
        // },
        // {
        //   poster: require('@/assets/images/yifuyun/7.png'),
        //   title: 'Factory penis with belt【S-305】sex toys dildo huge dildos vibrator for women'
        // }
      ],
      datas: [
      ],
      total: 0, 
      params: {
        pageNum: 1,
        pageSize: 8,
        lang: Cookies.get('user_lang')
      }
    }
  },
  async mounted () {
    await this.getProductList();
  },
  watch: {},
  methods: {
    itemRender(current, type, originalElement) {
      if (type === 'prev') {
        return <a>Previous</a>;
      } else if (type === 'next') {
        return <a>Next</a>;
      }
      return originalElement;
    },
    handlePageChange(page, pageSize) {
      this.params.pageNum = page;
      this.getProductList();
    },
    // async getProductList() {
    //   const response = await this.$axios.get(
    //     this.$config.apiBaseUrl + "/video-category/list",
    //     {
    //       params: this.params
    //     }
    //   )
    //   this.datas = response.data.rows
    //   // this.datas = response.data.rows.map(item => {
    //   //   return {
    //   //     ...item,
    //   //     images: item.images.split(',').map(img => img.trim())
    //   //   }
    //   // });
    //   console.log(this.datas,'this.datas0')
    //   this.total = response.data.total;  // 设置总条数
    // }

    async getProductList() {
      try {
        const response = await this.$axios.get(
          this.$config.apiBaseUrl + '/video-category/list',
          { params: this.params }
        )
        this.videoList = response.data.rows 
        this.total = response.data.total
      } catch (error) {
        console.error('Failed to fetch videos:', error)
      }
    },
  },
  computed: {},
  beforeDestroy () { },
  components: {},
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;

  .banner-img {
    width: 100%;
    height: auto;
  }

  .product-nav {
    background-color: #f7f7f7;
    border-bottom: 1px solid #DDDDDD;
    width: 100%;
    margin: 0 auto;

    ul {
      text-align: center;
      margin-bottom: 0;

      li {
        display: inline-block;
        text-align: center;
        position: relative;
        margin: 10px 8px 10px 8px;
        padding: 0 0;
        list-style-type: none;

        &:first-child::before {
          display: none;
        }

        &:before {
          position: absolute;
          content: '';
          width: 1px;
          height: 12px;
          top: 8px;
          left: -10px;
          border-left: 1px solid #DDDDDD;
        }

        a {
          padding: 10px 10px;
          color: #333;
          width: 100%;
          margin: 0 auto;
          font-weight: bold;
          font-size: 18px;

          &:hover,
          &:active {
            color: #ff1c8e;
            text-decoration: none;
          }
        }
      }
    }
  }

  .title {
    font-family: 'TENSANS';
    font-size: 24px;
    font-size: 4rem;
    line-height: 120%;
    color: #fff;
    font-weight: 600;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
    padding: 4rem 0 1rem 0;
    color: #666;
    position: relative;
    font-weight: 900;
  }

  .title-logo-container {
    text-align: center;

    .title-logo {
      margin: 0 auto;
      margin-top: 15px;
      // width: 100%;
      height: 31px;
    }
  }


  .indexk3 {
    width: 100%;
    margin: 0 auto;
    height: auto;
    padding: 40px 0 30px;

    .indexk44 {
      width: 100%;
      margin: 0 auto;
      height: auto;
      overflow: hidden;

      ul {
        width: 100%;
        margin: 0 auto;
        height: auto;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        padding: 0 20px;

        li.video-poster-container {
          width: 24%;
          margin: 0 0.5% 1rem;
          background: #fff;
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

            .poster-wrapper {
              .video-poster {
                transform: scale(1.1);
              }

              .play-button-overlay {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.1);

                // i {
                //   color: #ff1c8e;
                // }
              }
            }
          }

          .poster-wrapper {
            position: relative;
            overflow: hidden;
            width: 100%;
            padding-top: 56.29%;

            .video-poster {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.5s ease;
            }

            .play-button-overlay {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              opacity: 0.8;
              transition: all 0.3s ease;

              .play-button {
                font-size: 4rem;
                color: rgba(255, 255, 255, 0.9);
                text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                transition: all 0.3s ease;
              }
            }
          }

          p.xianzhi1 {
            color: #fff;
            text-align: center;
            position: relative;
            z-index: 20;
            line-height: 25px;
            padding: 5px;
            background: #773369;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 0 !important;
            margin-top: 0;
            transition: none;
          }
        }
      }
    }
  }

  /* 媒体查询适配 */
  @media screen and (max-width: 1200px) {
    .indexk3 {
      .indexk44 {
        ul {
          padding: 0 18px;

          li.video-poster-container {
            width: 32%;
            margin: 0 0.67% 1rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 990px) {


      .title-logo-container {
        .title-logo {
          width: 100% !important;
        }
      }

      .indexk3 {
        .indexk44 {
          ul {
            padding: 0 16px;

            li.video-poster-container {
              width: 31%;
              margin: 0 0.67% 1rem;
            }
          }
        }
      }
    
  }

  @media screen and (max-width: 768px) {
    .indexk3 {
      padding: 30px 0 20px;

      .indexk44 {
        ul {
          padding: 0 15px;

          li.video-poster-container {
            width: 48%;
            margin: 0 1% 1rem;

            .poster-wrapper {
              .play-button-overlay {
                .play-button {
                  font-size: 3rem;
                }
              }
            }

            p.xianzhi1 {
              font-size: 14px;
              line-height: 22px;
              padding: 8px 5px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .title {
      font-size: 3rem;
      padding: 3rem 0 1rem 0;
    }

    .indexk3 {
      padding: 20px 0 15px;

      .indexk44 {
        ul {
          padding: 0 10px;

          li.video-poster-container {
            width: 98%;
            margin: 0 1% 1rem;

            .poster-wrapper {
              .play-button-overlay {
                .play-button {
                  font-size: 2.5rem;
                }
              }
            }

            p.xianzhi1 {
              font-size: 13px;
              line-height: 20px;
              padding: 10px 8px;
            }
          }
        }
      }
    }
  }
}
</style>