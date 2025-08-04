<template>
  <div class="product-test">
    <div class="tab-content" v-for="(tab, index) in tabs" :key="index" v-show="currentTab === index">
      <div class="grid-container">
        <div class="grid-item" v-for="(item, i) in tab.items" :key="i">
          <img :src="item.image" class="product-image" @click=" $router.push('/articleDetail/' + item.title)"/>

          <div class="product-info">
            <div class="blog_time l"><span class="blog_y">12</span><span class="blog_day">2023-06</span></div>
            <div class="product-titles">
              <div class="product-title" @click=" $router.push('/articleDetail/' + item.title)">{{ item.title }}</div>
              <div class="product-subtitle">{{ item.subtitle }}</div>
            </div>

          </div>
          <div class="product-content">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'news',
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
            { image: require('@/assets/images/yifuyun/1.png'), title: '产品1标题标题标题标题标题标题标题标题', subtitle: '产品11111标题标题标题标题标题标题标题标题标题', content: '产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题标题标题标题' },
            { image: require('@/assets/images/yifuyun/2.png'), title: '产品222222222222222', subtitle: '产品11111' },
          ]
        },
        { // Tab 2
          items: [
            { image: require('@/assets/images/yifuyun/3.png'), title: '体验1', subtitle: '产品11111' },
          ]
        },
        { // Tab 2
          items: [
            { image: require('@/assets/images/yifuyun/1.png'), title: '体验1', subtitle: '产品11111' },
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
      background-color: #fff;
      height: 430px;
      // aspect-ratio: 340/450;
      overflow: hidden; // 修改为可见
      display: flex; // 新增：启用flex布局
      flex-direction: column; // 新增：垂直排列

      &:hover {
        box-shadow: 0 0 0 1px #FF1C8E;

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          box-shadow: inset 0 0 0 1px #FF1C8E;
        }
      }

      .product-image {
        cursor: pointer;
        width: 100%;
        aspect-ratio: 340/200;
        // height: 200px;
        object-fit: cover;

      }

      .product-info {
        padding: 10px;
        display: flex;
        align-items: center;

        .blog_time {
          // width: 20%;
          width: 65px;
          height: 78px;
          background-color: #ff1c8e;
          z-index: 10;

          span {
            display: block;
            font-family: Arial;
            color: #FFF;
            width: 100%;
            text-align: center;
          }

          .blog_y {
            font-size: 37.6px;
            height: 46px;
            line-height: 46px;
            font-weight: bold;
            letter-spacing: 2px;
          }

          .blog_day {
            background-color: #686868;
            height: 32px;
            line-height: 32px;
            font-size: 14px;
          }
        }

        .product-titles {
          display: flex;
          flex-direction: column;
          // justify-content: center;
          width: 80%;
          padding: 15px;

          .product-title {
            cursor: pointer;

            margin-bottom: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            text-align: left;

            height: 30px;
            line-height: 30px;
            color: #000;
            font-size: 16px;
            font-weight: bold;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

          }

          .product-subtitle {
            text-align: left;
            color: #999999;
            font-size: 14px;
            line-height: 24px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
        }
      }

      .product-content {
        padding: 10px;
        line-height: 27px;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

      }








    }
  }



  // .product-title {
  //   font-size: 16px;
  //   color: #fff;
  //   transition: color 0.3s;
  //   // background-color: #773369;
  //   cursor: pointer;
  //   padding: 5px 0; // 新增：内边距
  //   z-index: 1; // 新增：确保文字在上层
  // }
}
</style>