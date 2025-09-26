<template>
  <div class="baibg">
    <div class="indexk1">
      <ul>
        <li v-for="(item, index) in imageList" :key="index" @click="navigateToProduct(item.route)">
          <a href="javascript:void(0)">
            <img :src="item.img" :alt="item.alt">
            <span></span>
            <p>{{ item.text }}</p>
            <em></em>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FourImagesWithCenterText',
  data () {
    return {
      imageList: [
        {
          img: require('@/assets/images/product/product1.jpg'),
          alt: this.$t('menu.femaleToys'), // "Female sex toys"
          text: this.$t('menu.femaleToys'),
          route: 'product/1'
        },
        {
          img: require('@/assets/images/product/product2.jpg'),
          alt: this.$t('menu.maleToys'), // "Male sex toys"
          text: this.$t('menu.maleToys'),
          route: 'product/2'
        },
        {
          img: require('@/assets/images/product/product3.jpg'),
          alt: this.$t('menu.coupleToys'), // "Couple sex toys"
          text: this.$t('menu.coupleToys'),
          route: 'product/3'
        },
        {
          img: require('@/assets/images/product/product4.jpg'),
          alt: this.$t('menu.bondage'), // "Bondage And Constraints"
          text: this.$t('menu.bondage'),
          route: 'product/4'
        }
      ]
    }
  },
  methods: {
    navigateToProduct (route) {
      this.$router.push({ path: route })
    }
  }
}
</script>

<style lang="less" scoped>
.baibg {
  width: 100%;
  padding-top: 3rem;
}

.indexk1 {
  width: 100%;
  margin: 0 auto;
  height: auto;
  overflow: hidden;
  margin-bottom: 4rem;
}

.indexk1 ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  width: 100%;
}

.indexk1 ul li {
  flex: 1;
  position: relative;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
}

.indexk1 ul li a {
  display: block;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 78.48%;
  /* 宽高比 */
  text-decoration: none;
}

.indexk1 ul li img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.indexk1 ul li:hover img {
  transform: scale(1.05);
}

.indexk1 ul li p {
  position: absolute;
  z-index: 99;
  line-height: 100%;
  vertical-align: middle;
  top: 45%;
  left: 0;
  right: 0;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.5s ease 0s;
  color: #fff;
  margin: 0;
  padding: 0 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.indexk1 ul li span {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: block;
  opacity: 0;
  transition: all 0.5s ease 0s;
}

.indexk1 ul li:hover span {
  opacity: 1;
  transition: all 0.5s ease 0s;
}

.indexk1 ul li:hover p {
  top: 35%;
  transition: all 0.5s ease 0s;
}

.indexk1 ul li em {
  content: '';
  width: 0;
  height: 2px;
  position: absolute;
  margin: 0 auto;
  top: 50%;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 99;
  transition: width 0.5s linear;
}

.indexk1 ul li:hover em {
  width: 70%;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .baibg {
    width: 100%;
    padding-top: 0;
  }

  .indexk1 ul {
    flex-wrap: wrap;
  }

  .indexk1 ul li {
    flex: 0 0 calc(50% - 5px);
    margin-bottom: 10px;
  }

  .indexk1 ul li:nth-child(odd) {
    margin-right: 10px;
  }

  .indexk1 ul li p {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  // .indexk1 ul {
  //   flex-direction: column;
  // }

  // .indexk1 ul li {
  //   flex: 1;
  //   margin-bottom: 15px;
  //   margin-right: 0;
  // }

  // .indexk1 ul li:last-child {
  //   margin-bottom: 0;
  // }

  .indexk1 ul li p {
    font-size: 14px;
  }
}
</style>