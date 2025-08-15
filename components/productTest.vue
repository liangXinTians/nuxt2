<template>
  <div class="product-test">
    <div class="tab-content" v-for="(tab, index) in tabs" :key="index" v-show="currentTab === index">
      <div class="grid-container">
        <div class="grid-item" v-for="(item, i) in tab.items" :key="i"
          @click="$router.push('/productDetail/' + item.title)">
          <img :src="item.image" class="product-image" />
          <div class="product-title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThreeImages',
  props: {
    currentTab: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      tabs: [
        { // Tab 1
          items: [
            { image: require('@/assets/images/yifuyun/1.png'), title: '产品1' },
            { image: require('@/assets/images/yifuyun/2.png'), title: '产品2' },
            { image: require('@/assets/images/yifuyun/1.png'), title: '产品1' },
            { image: require('@/assets/images/yifuyun/2.png'), title: '产品2' },
            { image: require('@/assets/images/yifuyun/1.png'), title: '产品1' },
          ]
        },
        { // Tab 2
          items: [
            { image: require('@/assets/images/yifuyun/3.png'), title: '体验1' },
          ]
        },
        { // Tab 2
          items: [
            { image: require('@/assets/images/yifuyun/3.png'), title: '体验1' },
          ]
        }
      ]
    }
  },
  methods: {
    aadiv_show (index) {
      const tabs = document.querySelectorAll('.tabcon')
      tabs.forEach(tab => tab.style.display = 'none')
      document.getElementById(`aashowdiv${index}`).style.display = 'block'
    }
  }
}
</script>

<style lang="less" scoped>
.product-test {
  .grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    padding: 20px;
  }

  .grid-item {
    height: auto;
    aspect-ratio: 1/1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    cursor: pointer;
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
    padding: 5px 0;
    text-align: center;
    z-index: 1;
  }

  @media screen and (max-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      padding: 18px;
    }
  }

  @media screen and (max-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      padding: 15px;
    }

    .product-title {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 480px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      padding: 10px;
    }

    .product-title {
      font-size: 12px;
      padding: 3px 0;
    }
  }
}
</style>