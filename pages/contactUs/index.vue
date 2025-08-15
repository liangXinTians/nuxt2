<template>
  <div class="home">
    <img class="banner-img" src="../../assets/images/banner/contactUsBanner.jpg" alt="">
    <div class="title">CONTACT US</div>
    <div class="title-logo-container">
      <img src="@/assets/images/titleLogo.png" class="title-logo">
    </div>
    <div class="contact-con">
      <div class="contact-box">
        <div class="contact-box1">
          <div class="contact-title">Contact Us</div>
          <div class="contact-subtitle"><strong>Business</strong></div>
          <div class="contact-info-item">
            <span class="contact-info-label">Email:</span>
            <span class="contact-info-content">info@sexhande.com</span>
          </div>
          <div class="contact-info-item">
            <span class="contact-info-label">Mobile:</span>
            <span class="contact-info-content">+86 133 1656 3803</span>
          </div>
          <div class="contact-info-item">
            <span class="contact-info-label">Whatsapp:</span>
            <span class="contact-info-content">sales06@sexhande.com</span>
          </div>
          <div class="contact-info-item">
            <span class="contact-info-label">Wechat:</span>
            <span class="contact-info-content">13316563803</span>
          </div>
        </div>
        <div class="contact-box2">
          <div class="contact-title">Service</div>
          <div class="contact-info-item">
            <span class="contact-info-label">Contact:</span>
            <span class="contact-info-content">Jason Li</span>
          </div>
          <div class="contact-info-item">
            <span class="contact-info-label">Email:</span>
            <span class="contact-info-content">service@sexhande.com</span>
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
    return {}
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

  .title {
    font-family: 'TENSANS';
    // font-size: 24px;
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
    margin-bottom: 50px;
    text-align: center;

    .title-logo {
      margin: 0 auto;
      margin-top: 15px;
      // width: 100%;
      height: 31px;
    }
  }

  .contact-con {
    padding: 4rem 0;
    background-color: #f5f5f5;
    background-image: url(@/assets/images/contactUs/contactUs_bg.jpg);
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% auto;

    .contact-box {
      background: #fff;
      -webkit-box-shadow: 0 10px 20px #e9e9e9;
      box-shadow: 0 10px 20px #e9e9e9;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding: 4rem;
      max-width: 1534px;
      margin: 0 auto;

      display: flex;
      background-image: url(@/assets/images/contactUs/contactUs_bg2.jpg);
      background-position: center left;
      background-repeat: no-repeat;
      background-size: cover;

      .contact-box1 {
        // width: 860px;
        width: 50%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .contact-box2 {
        width: 50%;
        flex: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;


      }

      .contact-title {
        font-size: 1.8rem;
        color: #333;
        margin-bottom: 1.5rem;
        font-weight: 600;
      }

      .contact-subtitle {
        font-size: 1.4rem;
        margin: 1.2rem 0;
        color: #444;
      }

      .contact-info-item {
        display: flex;
        align-items: center;
        margin: 0.8rem 0;
        font-size: 1.1rem;

        .contact-info-label {
          // min-width: 90px;
          font-weight: 600;
          color: #444;
        }

        .contact-info-content {
          color: #666;
          word-break: break-all;
          line-height: 1.4;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {

  .title-logo {
    width: 100%;
  }
  .title {
      font-size: 3.2rem !important;
      padding: 3rem 0 1rem 0 !important;
  }
}
@media screen and (max-width: 768px){
  .title {
      font-size: 2.5rem !important;
      padding: 2.5rem 0 1rem 0 !important;
    }
}


@media screen and (max-width: 630px) {
  .home {
    .contact-box {
      flex-direction: column;

      .contact-box1 {
        width: 100% !important;
      }

      .contact-box2 {
        margin-top: 30px;
        width: 100% !important;

      }
    }
  }


}
@media screen and (max-width: 480px){
  .title {
      font-size: 2rem !important;
      padding: 2rem 0 1rem 0 !important;
    }
}
</style>
