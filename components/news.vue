<template>
  <!-- <div class="product-test">
    <div class="tab-content" v-for="(tab, index) in tabs" :key="index" v-show="currentTab === index">
      <div class="grid-container">
        <div class="grid-item" v-for="(item, i) in tab.items" :key="i">
          <img :src="item.image" class="product-image" @click=" $router.push('/articleDetail/' + item.title)" />

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

  </div> -->
  <!-- <div class="product-test">
    <div class="tab-content">
      <div class="grid-container">
        <div class="grid-item" v-for="(item, i) in datas" :key="i">
          <img :src="$config.apiFileUrl + item.imageUrl" class="product-image"
            @click=" $router.push('/articleDetail/' + item.id)" />
          <div class="product-info">
            <div class="blog_time l"><span class="blog_y">{{ item.day }}</span><span class="blog_day">{{ item.yearMonth
            }}</span></div>
            <div class="product-titles">
              <div class="product-title" @click=" $router.push('/articleDetail/' + item.id)">{{ item.title }}</div>
              <div class="product-subtitle">{{ item.summary }}</div>
            </div>
          </div>
          <div class="product-content">
            <div>{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>

  </div> -->
    <div class="product-test">
    <div class="tab-content">
      <div class="grid-container">
        <div class="grid-item" v-for="(item, i) in datas" :key="i">
          <img :src="$config.apiFileUrl + item.imageUrl" class="product-image"
            @click=" $router.push('/articleDetail/' + item.id)" />
          <div class="product-info">
            <div class="blog_time l"><span class="blog_y">{{ item.day }}</span><span class="blog_day">{{ item.yearMonth
            }}</span></div>
            <div class="product-titles">
              <div class="product-title" @click=" $router.push('/articleDetail/' + item.id)">{{ item.title }}</div>
              <div class="product-subtitle"></div>
            </div>
          </div>
          <div class="product-content">
            <div>{{ item.summary }}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Cookies from 'js-cookie'
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
      datas: [],
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
            { image: require('@/assets/images/yifuyun/1.png'), title: '产品1标题标题标题标题标题标题标题标题题标题标题标题标题标题标题', subtitle: '产品11111标题标题标题标题标题标题标题标题标题', content: '产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题产品11111标题标题标题标题标题标题标题标题标题' },
            { image: require('@/assets/images/yifuyun/2.png'), title: '产品222222222222222', subtitle: '产品11111' },
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

  async mounted () {
    const response = await this.$axios.get(
      this.$config.apiBaseUrl + "/article/list",
      {
        params: {
          pageNum: 1,
          pageSize: 5,
          lang: Cookies.get('user_lang')
        }
      }
    )
    console.log(response.data, 'news')

    this.datas = response.data.rows.map(item => {
      if (item.createTime) {
        const [datePart, timePart] = item.createTime.split(' ')
        const [year, month, day] = datePart.split('-')


        return {
          ...item,
          yearMonth: `${year}-${month}`,
          day: day
        }
      }
      return item
    })
  },
  methods: {
    // aadiv_show (index) {
    //   // 这里实现选项卡切换逻辑
    //   const tabs = document.querySelectorAll('.tabcon')
    //   tabs.forEach(tab => tab.style.display = 'none')
    //   document.getElementById(`aashowdiv${index}`).style.display = 'block'
    // }
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
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: relative;

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
          pointer-events: none;
        }
      }

      .product-image {
        cursor: pointer;
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .product-info {
        padding: 10px;
        display: flex;
        align-items: center;

        .blog_time {
          width: 65px;
          height: 78px;
          background-color: #ff1c8e;
          z-index: 10;
          flex-shrink: 0;

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
          flex: 1;
          box-sizing: border-box;
          padding: 15px;
          width: 50%;

          .product-title {
            cursor: pointer;
            margin-bottom: 10px;
            height: 30px;
            line-height: 30px;
            color: #000;
            font-size: 16px;
            font-weight: bold;
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
        line-height: 30px;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        flex-grow: 1;
        text-align: left;
      }
    }
  }

  /* 统一媒体查询 */
  @media screen and (max-width: 1200px) {
    .grid-container {
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      padding: 18px;
    }
  }

  @media screen and (max-width: 990px) {
    .grid-container {
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      padding: 16px;

      .grid-item {
        .product-info {
          padding: 10px 10px 10px 10px;

          .blog_time {
            display: none;
          }

          .product-titles {
            padding: 15px 0px 15px 0px;

            .product-title {
              white-space: normal;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
              margin-bottom: 0px;
              height: 26px;
              line-height: 26px;
              font-size: 15px;
              text-align: left;
            }

            .product-subtitle {
              display: none;
            }
          }
        }

        .product-content {
          line-height: 28px;
          -webkit-line-clamp: 5;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      padding: 15px;

      .grid-item {
        height: 400px;

        .product-image {
          height: 180px;
        }

        .product-info {


          .product-titles {
            padding: 0px;


          }
        }

        .product-content {
          line-height: 31.5px;
          -webkit-line-clamp: 5;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .grid-container {
      padding: 10px;

      .grid-item {
        height: 400px;

        .product-image {
          height: 160px;
        }

        .product-info {
          padding: 8px;

          .product-titles {
            .product-title {
              font-size: 14px;
              margin-bottom: 8px;
            }
          }
        }

        .product-content {
          padding: 8px;
          font-size: 14px;
          line-height: 30px;
          -webkit-line-clamp: 5;
        }
      }
    }
  }
}
</style>