<template>
  <div class="product-test">
    <div class="grid-container">
      <div 
        class="grid-item" 
        v-for="(item, i) in datas" 
        :key="i" 
        @click="$router.push('/productDetail/' + item.id)"
      >
        <img :src="'/file' + item.imageUrl[0]" class="product-image" />
        <div class="product-title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'ThreeImages',
  props: {
    currentTab: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      datas: [], // 存储接口返回的数据
    }
  },
  watch: {
    // 监听 currentTab 的变化
    currentTab: {
      immediate: true, // 组件创建时立即执行一次
      handler(newTab) {
        this.loadDataByTab(newTab)
      }
    }
  },
  methods: {
    // 根据 Tab 索引获取对应的 type 值（按你的实际需求调整）
    getTypeByTab(tabIndex) {
      // 示例映射关系：
      // 第1个Tab（index=0）-> type=1
      // 第2个Tab（index=1）-> type=2
      // 第3个Tab（index=2）-> type=3
      return tabIndex + 1
    },
    
    // 加载数据
    async loadDataByTab(tabIndex) {
      try {
        const type = this.getTypeByTab(tabIndex)
        const response = await this.$axios.get(
          this.$config.apiBaseUrl + "/product-test/list",
          {
            params: {
              pageNum: 1,
              pageSize: 5,
              type: type, // 动态 type
              lang: Cookies.get('user_lang')
            }
          }
        )
        
        // 处理返回数据
        this.datas = response.data.rows.map(item => {
          return {
            ...item,
            imageUrl: item.imageUrl.split(',').map(img => img.trim())
          }
        })
      } catch (error) {
        console.error('加载数据失败:', error)
      }
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