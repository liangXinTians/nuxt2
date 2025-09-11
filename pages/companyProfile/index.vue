<template>
  <div class="home">
    <img class="banner-img" src="../../assets/images/banner/aboutUsBanner.jpg" alt="">
    <div class="title">Company Profile</div>
    <div class="title-logo-container">
      <img src="@/assets/images/titleLogo.png" class="title-logo">
    </div>
    <div class="content">
      <div v-html="datas.content"></div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: "CompanyProfile",
  data() {
    return {
      datas: [],
      params: {
        pageNum: 1,
        pageSize: 10,
        lang: Cookies.get('user_lang')
      }
    }
  },
  async mounted() {
    await this.getProductList();
  },
  methods: {
    async getProductList() {
      const response = await this.$axios.get(
        this.$config.apiBaseUrl + "/company-profile/list",
        {
          params: this.params
        }
      )
      this.datas = response.data.rows[0]
      console.log(this.datas, 'this.datas0')
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  
  .banner-img {
    width: 100%;
    height: auto;
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
      margin: 15px auto 0;
      height: 31px;
    }
  }
  
  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 20px;
    
    /deep/ img {
      max-width: 100%;
      height: auto;
    }
    
    /deep/ iframe {
      max-width: 100%;
    }
  }
}

/* 响应式调整 */
@media screen and (max-width: 1220px) {
  .home {
    .content {
      max-width: 1000px;
    }
  }
}

@media screen and (max-width: 1000px) {
  .home {
    .title {
      font-size: 3rem;
      padding: 3rem 0 1rem 0;
    }
    
    .content {
      max-width: 800px;
    }
    .title-logo-container{
      .title-logo{
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home {
    .title {
      font-size: 2.5rem;
      padding: 2.5rem 0 1rem 0;
    }
    
    .title-logo-container .title-logo {
      height: 25px;
    }
    
    .content {
      padding: 0 40px;
    }
  }
}

@media screen and (max-width: 576px) {
  .home {
    .title {
      font-size: 2rem;
      padding: 2rem 0 0.8rem 0;
    }
    
    .title-logo-container .title-logo {
      height: 20px;
      margin-top: 10px;
    }
    
  }
}
</style>