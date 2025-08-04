<template>
  <div class="home">
    <img class="banner-img" src="../../assets/images/banner/aboutUsBanner.jpg" alt="">
    <div class="title">Company Profile</div>
    <div class="title-logo-container">
      <img src="@/assets/images/titleLogo.png" class="title-logo">
    </div>
  </div>
</template>

<script>

export default {
  name: "",
  data () {
    return {}
  },
  mounted () {},
  watch: {},
  methods: {},
  computed: {},
  beforeDestroy () {},
  components: { },
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  .banner-img{
    width: 100%;
    height: auto;
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
}

@media screen and (max-width: 1220px) {

}


@media screen and (max-width: 1000px) {

}

@media screen and (max-width: 992px) {

}


</style>
