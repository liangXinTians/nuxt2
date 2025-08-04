<template>
  <div class="home">
    <img class="banner-img" src="../../assets/images/banner/newsBanner.jpg" alt="">
    <div class="product-nav">
      <ul>
        <li><a href="" @click="$event.preventDefault(); $router.push('/article')" class="clear">NEWS</a>
        </li>

      </ul>
    </div>
    <div class="container">
      <div class="article-detail">
        <div class="article-detail-header">
          <div class="article-detail-title">Inclusivity Matters: Supporting the LGBT+ Community as a Sex Toy Business
</div>
          <div class="article-detail-img"><img class="banner-img" src="@/assets/images/titleLogo.png" alt="">
          </div>
          <div class="article-detail-time">Viewed:1728 Date:2023-06-01</div>
        </div>
        <div class="article-detail-content">内容</div>
      </div>
      <div class="news-list">
        <H3 class="product-title">Recommended</H3>
        <div class="product-item" v-for="(item, index) in dataList" :key="item.title"
          @click="$router.push(`/articleDetail/${item.id}`)">
          <img :src="item.img" alt="product">
          <div class="product-contents">
            <div class="product-content">{{ item.title }}</div>
            <div class="product-time">[{{ item.time }}]</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

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
      ]
    }
  },
  mounted () { },
  watch: {},
  methods: {},
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
          width: 100%;
          height: 31px;
          margin: 15px auto 0px;

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
</style>
