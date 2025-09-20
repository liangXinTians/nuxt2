<template>
  <div class="home">
    <img class="banner-img" src="../../assets/images/banner/videoBanner.jpg" alt="">
    <div class="product-nav">
      <ul>
        <li><a href="" @click="$event.preventDefault(); $router.push('/video')" class="clear">VIDEO</a>
        </li>

      </ul>
    </div>
    <div class="container">
      <div class="article-detail">
        <div class="article-detail-header">
          <div class="article-detail-title">{{ detail.name }}</div>
          <!-- <div class="article-detail-img"><img class="banner-img" src="@/assets/images/titleLogo.png" alt="">
          </div> -->
          <div class="article-detail-img">
          </div>
          <div class="article-detail-time">Date:{{ detail.createTime }}</div>
        </div>
        <div class="article-detail-content">

          <video :src="$config.apiFileUrl + detail.videoUrl" width="100%" controls :poster="$config.apiFileUrl + detail.imageUrl"
            class="video-player"></video>
        </div>
      </div>
      <div class="news-list">
        <H3 class="product-title">Recommended</H3>
        <div class="product-item" v-for="(item, index) in dataList" :key="item.id"
          @click="$router.push(`/videoDetail/${item.id}`)">
          <img :src="$config.apiFileUrl + item.imageUrl" alt="product">
          <div class="product-contents">
            <div class="product-content">{{ item.name }}</div>
            <div class="product-time">[{{ item.createTime }}]</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: "",
  data () {
    return {
      dataList: [
        {
          title: 'title1title1title1title1title1title1title1title1title1title1',
          img: require("../../assets/images/yifuyun/4.png"),
          time: '2023-06-01'
        },
        {
          title: 'title2',
          img: require("../../assets/images/yifuyun/5.png"),
          time: '2023-06-01'
        },
        {
          title: 'title3',
          img: require("../../assets/images/yifuyun/6.png"),
          time: '2023-06-01'
        },
        {
          title: 'title4',
          img: require("../../assets/images/yifuyun/7.png"),
          time: '2023-06-01'
        }
      ],
      detail: '',
      params: {
        pageNum: 1,
        pageSize: 5,
        lang: Cookies.get('user_lang')
      }
    }
  },
  async mounted () {
    const id = this.$route.params.pathMatch
    console.log(this.$route, 'idid')
    await this.getDetail(id)
    await this.getList()
  },
  watch: {},
  methods: {
    async getDetail (id) {
      try {
        const response = await this.$axios.get(
          `${this.$config.apiBaseUrl}/video-category/selectInfoById/${id}`
        )
        console.log(response, 'response')
        this.detail = response.data.data
      } catch (error) {
        console.error('Failed to fetch videos:', error)
      }
    },
    async getList () {
      try {
        const response = await this.$axios.get(
          this.$config.apiBaseUrl + '/video-category/list',
          { params: this.params }
        )
        this.dataList = response.data.rows.map(item => {
          return {
            ...item,
            createTime: item.createTime.split(' ')[0] // 分割字符串取第一部分
          }
        })
      } catch (error) {
        console.error('Failed to fetch videos:', error)
      }
    }

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
    // display: flex;
    // justify-content: center;
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

  .container {
    width: 100%;
    margin: 0 auto;
    height: auto;
    overflow: hidden;
    background: #fff;

    .article-detail {
      box-sizing: border-box;
      width: 68%;
      float: left;
      margin-left: 2%;
      padding: 0 2%;

      .article-detail-header {
        font-family: TENSANS;
        // font-size: 4rem;
        line-height: 120%;
        font-weight: normal;
        text-align: center;
        width: 100%;
        color: rgb(102, 102, 102);
        position: relative;
        margin: 0px;
        padding: 4rem 0px;

        .article-detail-title {
          font-size: 1.2rem;
          font-weight: 600;
        }

        .article-detail-img {
          // width: 100%;
          // height: 31px;
          // margin: 15px auto 0px;
          display: block;
          margin: 0 auto;
          margin-top: 15px;
          width: 100%;
          height: 31px;
          background: url(@/assets/images/titleLogo.png) no-repeat center;

          img {
            width: 80%;
          }

        }

        .article-detail-time {
          text-align: center;
          color: #666;
          line-height: 50px;
        }
      }
    }

    .news-list {
      width: 20%;
      float: left;
      margin-left: 2%;
      margin-top: 4rem;
      margin-bottom: 20px;

      .product-title {
        line-height: 3;
        font-size: 1.3rem;
        font-family: 'TENSANS';
        // border-bottom: 1px solid #333;
      }

      .product-item {
        cursor: pointer;
        border-bottom: 1px solid #eee;

        img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .product-contents {
          margin-top: 5px;
          display: flex;
          justify-content: space-between;

          .product-content {
            // color: #ff1c8e;
            width: 70%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            transition: 0.3s;
            font-size: 14px;
            padding-top: 5px;
            padding-bottom: 2px;
          }

          .product-time {
            transition: 0.3s;
            font-size: 14px;
            padding-top: 5px;
            padding-bottom: 2px;
          }
        }

        &:hover {
          .product-contents {
            color: #ff1c8e;
          }
        }
      }

    }
  }
}

@media screen and (max-width: 1220px) {}


@media screen and (max-width: 1000px) {}

@media screen and (max-width: 992px) {}

@media screen and (max-width: 776px) {
  .home {
    .container {
      .article-detail {
        width: 100%;
        margin-left: 0;
        padding: 10px;

        .article-detail-header {
          .article-detail-title {
            font-size: 1.4rem;
          }

          .article-detail-img {
            img {
              width: 100%;
            }
          }
        }
      }

      .news-list {
        display: none;
      }
    }
  }

}
</style>
