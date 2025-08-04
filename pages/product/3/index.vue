<template>
  <div class="home">
    <img class="banner-img" src="../../../assets/images/banner/productBanner.png" alt="">
    <div class="product-nav">
      <ul>

        <li><a style="color: #ff1c8e;" href="" @click="$event.preventDefault(); $router.push('/product/1')"
            class="clear">Female sex toys</a></li>

        <li><a href="" @click="$event.preventDefault(); $router.push('/product/2')" class="clear">Male sex toys</a></li>

        <li><a href="" @click="$event.preventDefault(); $router.push('/product/3')" class="clear">Couple sex toys</a>
        </li>

        <li><a href="" @click="$event.preventDefault(); $router.push('/product/4')" class="clear">Bondage And
            Constraints</a></li>

      </ul>
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

  .product-nav {
    // display: flex;
    // justify-content: center;
    padding-top: 90px;
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
}

@media screen and (max-width: 1220px) {}


@media screen and (max-width: 1000px) {}

@media screen and (max-width: 992px) {}
</style>
