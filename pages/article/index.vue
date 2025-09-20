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
      <div class="grid-item" v-for="(item, index) in datas" :key="index">
        <img :src="$config.apiFileUrl + item.imageUrl" class="product-image" @click="$router.push(`/articleDetail/${item.id}`)" />

        <div class="product-info">
          <div class="blog_time l"><span class="blog_y">{{ item.day }}</span><span class="blog_day">{{ item.yearMonth
            }}</span></div>
          <div class="product-titles">
            <div class="product-title" @click="$router.push(`/articleDetail/${item.id}`)">{{ item.title }}</div>
            <div class="product-subtitle"></div>
          </div>

        </div>
        <div class="product-content">
          {{ item.summary }}
        </div>
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
import Cookies from 'js-cookie'
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
      ],
      params: {
        pageNum: 1,
        pageSize: 10,
        lang: Cookies.get('user_lang')
      },
      total: 0, 
      datas: []
    }
  },
  async mounted () {
    // this.getBannerImg()
    const response = await this.$axios.get(
      this.$config.apiBaseUrl + "/article/list",
      {
         params: this.params
        
      }
    )
    console.log(response.data, 'response.data')
    this.total = response.data.total; 
    this.datas = response.data.rows.map(item => {
      if (item.createTime) {
        const [datePart, timePart] = item.createTime.split(' ')
        const [year, month, day] = datePart.split('-')


        return {
          ...item,
          yearMonth: `${year}-${month}`,
          day: day
        }
      }
      return item
    })
  },
  watch: {},
  methods: {
    handlePageChange(page, pageSize) {
      this.params.pageNum = page;
      this.getProductList();
    },
    itemRender(current, type, originalElement) {
      if (type === 'prev') {
        return <a>Previous</a>;
      } else if (type === 'next') {
        return <a>Next</a>;
      }
      return originalElement;
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
  background-color: #F7F7F7;

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
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: relative;

      &:hover {
        box-shadow: 0 0 0 1px #FF1C8E;

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          box-shadow: inset 0 0 0 1px #FF1C8E;
          pointer-events: none;
        }
      }

      .product-image {
        cursor: pointer;
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .product-info {
        padding: 10px;
        display: flex;
        align-items: center;

        .blog_time {
          width: 65px;
          height: 78px;
          background-color: #ff1c8e;
          z-index: 10;
          flex-shrink: 0;

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
          flex: 1;
          box-sizing: border-box;
          padding: 15px;
          width: 50%;

          .product-title {
            cursor: pointer;
            margin-bottom: 10px;
            height: 30px;
            line-height: 30px;
            color: #000;
            font-size: 16px;
            font-weight: bold;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align:center;

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
        line-height: 30px;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        flex-grow: 1;
        text-align:left;

      }
    }
  }

  /* 统一媒体查询 */
  @media screen and (max-width: 1200px) {
    .grid-container {
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      padding: 18px;
    }
  }

  @media screen and (max-width: 990px) {
    .title-logo {
      width: 100%;
    }

    .grid-container {
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      padding: 16px;

      .grid-item {
        .product-info {
          padding: 10px 10px 10px 10px;

          .blog_time {
            display: none;
          }

          .product-titles {
            // padding: 15px 0px 15px 0px;
            padding: 0;

            .product-title {
              white-space: normal;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
              margin-bottom: 0px;
              height: 26px;
              line-height: 26px;
              font-size: 15px;
              text-align: left;
            }

            .product-subtitle {
              display: none;
            }
          }
        }

        .product-content {
          line-height: 31.5px;
          -webkit-line-clamp: 5;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      padding: 15px;

      .grid-item {
        height: 400px;

        .product-image {
          height: 180px;
        }

        .product-info {
          .product-titles {
            padding: 0px;
          }
        }

        .product-content {
          line-height: 29.5px;
          -webkit-line-clamp: 5;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .grid-container {
      padding: 10px;

      .grid-item {
        height: 400px;

        .product-image {
          height: 160px;
        }

        .product-info {
          padding: 8px;

          .product-titles {
            .product-title {
              font-size: 14px;
              margin-bottom: 8px;
            }
          }
        }

        .product-content {
          padding: 8px;
          font-size: 14px;
          line-height: 28px;
          -webkit-line-clamp: 6;
        }
      }
    }
  }
}
</style>