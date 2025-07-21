<template>
  <div class="product-test">
    <div class="tab-content" v-for="(tab, index) in tabs" :key="index" v-show="currentTab === index">
      <div class="grid-container">
        <div class="grid-item" v-for="(item, i) in tab.items" :key="i">
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
      images: [
        {
          url: require('@/assets/images/yifuyun/5.png'),
          alt: '图片1'
        },
        {
          url: require('@/assets/images/yifuyun/6.png'),
          alt: '图片2'
        },
        {
          url: require('@/assets/images/yifuyun/7.png'),
          alt: '图片3'
        }
      ],
      tabs: [
        { // Tab 1
          items: [
            { image: require('@/assets/images/yifuyun/1.png'), title: '产品1' },
            { image: require('@/assets/images/yifuyun/2.png'), title: '产品2' },
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
      // 这里实现选项卡切换逻辑
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
    padding: 5px 0; // 新增：内边距
    z-index: 1; // 新增：确保文字在上层
  }
}
</style>