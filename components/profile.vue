<template>
  <div class="product-test">
    <div class="indexk6">
      <div class="indexk6_zi">
        <!-- <p style="text-align:center;">Established in
          2014, Shenzhen S-Hande Technology Co.,
          Ltd has been developed into top 10 sex
          toy manufacturers in China.S-Hande
          insists on all-in-house production, with
          our creative R&D team, own m<br>oulding
          workshop,
          plastic injection, silicone production,
          oil painting and assembling, clients can
          always expect both OEM and ODM products
          from us with high quality. As a most
          innovated company, our <br>products win
          great popularity
          both online and in shops world widely,
          from Europe, America to Asia.We offer 3
          year warranty for all of our products.
          Our manufacturing is under ISO9001
          standard ,and <br>products are certified
          with CE, ROHS, FCC &
          FDA.Customer first is our marketing
          principle, that makes us growing
          rapidly. We have principle to protect
          customers who are in the same area from
          price <br>competiton.What’s more, We
          have a dream-graphic design team
          of 8 members to make high quality
          pictures and even pickagings as
          customer’s request.We warmly invite you
          to build a brighter future.<br>***</p> -->
          <div v-html="data.content"></div>
      </div>
      <div class="indexk6_img">
        <!-- <img src="../assets/images/yifuyun/5.png" alt=""> -->
        <img :src="$config.apiFileUrl + data.imageUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'profile',
  props: {

  },
  data () {
    return {
      params: {
        pageNum: 1,
        pageSize: 1,
        lang: Cookies.get('user_lang') || 'en' // 默认语言
      },
      data: []
    }
  },
  async mounted() {
    await this.getProductList()
  },
  methods: {
    async getProductList() {
      try {
        const response = await this.$axios.get(
          this.$config.apiBaseUrl + '/company-profile/list',
          { params: this.params }
        )
        this.data = response.data.rows[0]
      } catch (error) {
        console.error('Failed to fetch videos:', error)
      }
    },
  }

}
</script>

<style lang="less" scoped>

.indexk6 {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 4rem;
    height: auto;
    overflow: hidden;
    padding-top: 30px;
}

.indexk6_zi h3 {
    font-family: 'TENSANS';
    font-size: 64px;
    font-size: 4rem;
    line-height: 120%;
    color: #fff;
    font-weight: normal;
    margin: 0;
    padding: 0;
    margin-bottom: 40px;
    margin-bottom: 2.5rem;
    text-align: center;
    width: 100%;
    color: #fff;
    position: relative;
    text-align: left;
}

.indexk6_zi {
    width: 100%;
    float: left;
    color: #fff;
}

.indexk6_zi p {
    line-height: 200%;
}

.indexk6_img {
    width: 100%;
    float: left;
    img{
      width: 100%;
    }
}

.indexk6_img img {
    max-width: 100%;
}

</style>