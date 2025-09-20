<template>
  <div class="home">
    <img class="banner-img" src="../../assets/images/banner/productBanner.png" title="">
    <div class="product-nav">
      <ul>
        <li><a href="" @click="$event.preventDefault(); $router.push('/product/1')" class="clear">Female sex toys</a>
        </li>

        <li><a href="" @click="$event.preventDefault(); $router.push('/product/2')" class="clear">Male sex toys</a></li>

        <li><a href="" @click="$event.preventDefault(); $router.push('/product/3')" class="clear">Couple sex toys</a>
        </li>

        <li><a href="" @click="$event.preventDefault(); $router.push('/product/4')" class="clear">Bondage And
            Constraints</a></li>
      </ul>
    </div>
    <div class="title">FOR HIM/FOR HER</div>
    <div class="title-logo-container">
      <img src="@/assets/images/titleLogo.png" class="title-logo">
    </div>
    <div class="product-test">

      <div class="grid-container">
        <div class="grid-item" v-for="(item, index) in datas" :key="index"
          @click="$router.push(`/productDetail/${item.id}`)">
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
        this.$config.apiBaseUrl + "/product/list",
        {
          params: this.params
        }
      )
      this.datas = response.data.rows.map(item => {
        return {
          ...item,
          images: item.images.split(',').map(img => img.trim())
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
    font-size: 4rem;
    line-height: 120%;
    color: #666;
    font-weight: 900;
    margin: 0;
    padding: 4rem 0 1rem 0;
    text-align: center;
    width: 100%;
    position: relative;
  }

  .title-logo-container {
    text-align: center;

    .title-logo {
      margin: 0 auto;
      margin-top: 15px;
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
        height: auto; 
        aspect-ratio: 1/1;
        overflow: hidden; 
        display: flex;
        flex-direction: column;
      }
    }

    .product-image {
      width: 100%;
      height: calc(100% - 30px);
      object-fit: cover;
      transition: transform 0.3s ease;
      transform-origin: center center;

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
      padding: 5px 0;
      z-index: 1;
    }
  }
}

/* 992px 以下的适配 */
@media screen and (max-width: 992px) {
  .home {
    .product-nav {
      ul li a {
        font-size: 16px;
        padding: 8px 8px;
      }
    }

    .title {
      font-size: 3.2rem;
      padding: 3rem 0 1rem 0;
    }

    .title-logo-container .title-logo {
      // height: 28px;
      width: 100%;
      margin: 0 auto;

    }

    .product-test {
      margin-top: 40px;
      
      .grid-container {
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
        padding: 15px;
      }

      .product-title {
        font-size: 15px;
      }
    }
  }
}

/* 768px 以下的适配 */
@media screen and (max-width: 768px) {
  .home {
    .product-nav {
      ul {
        li {
          margin: 8px 6px;
          
          &:before {
            height: 10px;
            top: 6px;
            left: -8px;
          }

          a {
            font-size: 14px;
            padding: 6px 6px;
          }
        }
      }
    }

    .title {
      font-size: 2.5rem;
      padding: 2.5rem 0 1rem 0;
    }

    .title-logo-container .title-logo {
      height: 25px;
    }

    .product-test {
      margin-top: 30px;
      
      .grid-container {
        grid-template-columns: repeat(2, 1fr); /* 关键：小于768px时显示2列 */
        gap: 12px;
        padding: 10px;
      }

      .product-title {
        font-size: 14px;
        padding: 8px 0;
      }
    }
  }
}

/* 480px 以下的适配 */
@media screen and (max-width: 480px) {
  .home {
    .product-nav {
      padding: 20px 0;
      ul {
        li {
          // display: block;
          margin: 10px;
          
          &:before {
            display: none;
          }

          a {
            font-size: 13px;
            padding: 10px;
            display: block;
            width: auto;
            border: 1px solid #DDDDDD;
          }
        }
      }
    }

    .title {
      font-size: 2rem;
      padding: 2rem 0 1rem 0;
    }

    .title-logo-container .title-logo {
      height: 22px;
    }

    .product-test {
      margin-top: 20px;
      
      .grid-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
        padding: 8px;
      }

      .product-title {
        font-size: 12px;
        padding: 6px 0;
      }
    }

    /* 分页组件在小屏幕下的适配 */
    .ant-pagination {
      font-size: 12px;
      
      .ant-pagination-item,
      .ant-pagination-prev,
      .ant-pagination-next {
        min-width: 28px;
        height: 28px;
        line-height: 26px;
      }
    }
  }
}
</style>