<template>
  <div class="home">
    <img class="banner-img" src="../../assets/images/banner/newsBanner.jpg" alt="">
    <div class="product-nav">
      <ul>
        <li><a href="" @click="$event.preventDefault(); $router.push('/article')" class="clear">NEWS</a>
        </li>

      </ul>
    </div>
    <div class="title">NEWS</div>
    <div class="title-logo-container">
      <img src="@/assets/images/titleLogo.png" class="title-logo">
    </div>

    <div class="grid-container">
      <div class="grid-item" v-for="(item, index) in items" :key="index">
        <img :src="item.image" class="product-image" @click="$router.push(`/articleDetail/${item.title}`)"/>

        <div class="product-info">
          <div class="blog_time l"><span class="blog_y">12</span><span class="blog_day">2023-06</span></div>
          <div class="product-titles">
            <div class="product-title" @click="$router.push(`/articleDetail/${item.title}`)">{{ item.title }}</div>
            <div class="product-subtitle">{{ item.subtitle }}</div>
          </div>

        </div>
        <div class="product-content">
          {{ item.content }}
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
      items: [
        { image: require('@/assets/images/yifuyun/1.png'), title: '产品1标题标题标题标题标题标题标题标题', subtitle: '产品11111标题标题标题标题标题标题标题标题标题', content: '产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题标题标题标题' },
        { image: require('@/assets/images/yifuyun/2.png'), title: '产品222222222222222', subtitle: '产品11111' },
        { image: require('@/assets/images/yifuyun/1.png'), title: '产品1标题标题标题标题标题标题标题标题', subtitle: '产品11111标题标题标题标题标题标题标题标题标题', content: '产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题标题标题标题' },
        { image: require('@/assets/images/yifuyun/2.png'), title: '产品222222222222222', subtitle: '产品11111' },
        { image: require('@/assets/images/yifuyun/1.png'), title: '产品1标题标题标题标题标题标题标题标题', subtitle: '产品11111标题标题标题标题标题标题标题标题标题', content: '产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题标题标题标题' },
        { image: require('@/assets/images/yifuyun/2.png'), title: '产品222222222222222', subtitle: '产品11111' },
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
  background-color: #F7F7F7;

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

  .grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    padding: 20px;

    .grid-item {
      background-color: #fff;
      height: 430px;
      // aspect-ratio: 340/450;
      overflow: hidden; // 修改为可见
      display: flex; // 新增：启用flex布局
      flex-direction: column; // 新增：垂直排列

      &:hover {
        box-shadow: 0 0 0 1px #FF1C8E;
      }

      .product-image {
        width: 100%;
        aspect-ratio: 340/200;
        // height: 200px;
        object-fit: cover;
        cursor: pointer;

      }

      .product-info {
        padding: 10px;
        display: flex;
        align-items: center;

        .blog_time {
          // width: 20%;
          width: 65px;
          height: 78px;
          background-color: #ff1c8e;
          z-index: 10;

          span {
            display: block;
            font-family: Arial;
            color: #FFF;
            width: 100%;
            text-align: center;
          }

          .blog_y {
            font-size: 37.6px;
            height: 46px;
            line-height: 46px;
            font-weight: bold;
            letter-spacing: 2px;
          }

          .blog_day {
            background-color: #686868;
            height: 32px;
            line-height: 32px;
            font-size: 14px;
          }
        }

        .product-titles {
          display: flex;
          flex-direction: column;
          // justify-content: center;
          width: 80%;
          padding: 15px;

          .product-title {
            cursor: pointer;

            margin-bottom: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            text-align: left;

            height: 30px;
            line-height: 30px;
            color: #000;
            font-size: 16px;
            font-weight: bold;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

          }

          .product-subtitle {
            text-align: left;
            color: #999999;
            font-size: 14px;
            line-height: 24px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
        }
      }

      .product-content {
        padding: 10px;
        line-height: 27px;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;

      }








    }
  }

}

@media screen and (max-width: 1220px) {}


@media screen and (max-width: 1000px) {}

@media screen and (max-width: 992px) {}
</style>
