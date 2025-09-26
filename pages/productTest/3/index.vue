<template>
  <div class="home">
    <img class="banner-img" src="@/assets/images/banner/productTestBanner.jpg" alt="">
    <div class="product-nav">
      <ul>

        <li><a href=""  @click="$event.preventDefault(); $router.push('/productTest/1')"
            class="clear">{{ $t('menu.download') }}</a>
        </li>

        <li><a href="" @click="$event.preventDefault(); $router.push('/productTest/2')" class="clear">{{ $t('menu.freeTesting') }}</a></li>

        <li><a href="" style="color: #ff1c8e;" @click="$event.preventDefault(); $router.push('/productTest/3')" class="clear">{{ $t('menu.experience') }}</a>
        </li>

        <li><a href="" @click="$event.preventDefault(); $router.push('/productTest/4')" class="clear">{{ $t('menu.comments') }}</a></li>

      </ul>
    </div>
    <div class="title">{{ $t('menu.download') }}</div>
    <div class="title-logo-container">
      <img src="@/assets/images/titleLogo.png" class="title-logo">
    </div>
    <div class="product-test">

      <div class="grid-container">
        <div class="grid-item" v-for="(item, index) in datas" :key="index"
           @click="$router.push(`/productTestDetail/${item.id}`)">
          <img :src="$config.apiFileUrl + item.images[0]" class="product-image" />
          <div class="product-title">{{ item.title }}</div>
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
import Cookies from 'js-cookie';
export default {
  name: "",
  data () {
    return {
      datas: [
      ],
      total: 0, 
      params: {
        pageNum: 1,
        pageSize: 10,
        type: 3,
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
    async getProductList() {
      const response = await this.$axios.get(
        this.$config.apiBaseUrl + "/product-test/list",
        {
          params: this.params
        }
      )
      this.datas = response.data.rows.map(item => {
        return {
          ...item,
          images: item.imageUrl.split(',').map(img => img.trim())
        }
      });
      console.log(this.datas,'this.datas0')
      this.total = response.data.total;  // 设置总条数
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

  .product-test {
    margin-top: 50px;
    cursor: pointer;

    .grid-container {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 20px;
      padding: 20px;

      .grid-item {
        height: auto; // 移除固定高度
        aspect-ratio: 1/1; // 新增：容器宽高比1:1
        overflow: hidden; // 修改为可见
        display: flex; // 新增：启用flex布局
        flex-direction: column; // 新增：垂直排列

        // &:hover {
        //   transform: translateY(-5px);
        // }
      }
    }

    .product-image {
      width: 100%;
      height: calc(100% - 30px);
      object-fit: cover;
      transition: transform 0.3s ease;
      transform-origin: center center;
      object-fit: cover;

      &:hover {
        transform: scale(1.1);
      }
    }

    .product-title {
      font-size: 16px;
      color: #fff;
      transition: color 0.3s;
      background-color: #773369;
      cursor: pointer;
      text-align: center;
      padding: 5px 0; // 新增：内边距
      z-index: 1; // 新增：确保文字在上层
    }
  }
}

@media screen and (max-width: 1220px) {}


@media screen and (max-width: 1000px) {}

@media screen and (max-width: 992px) {}
</style>
