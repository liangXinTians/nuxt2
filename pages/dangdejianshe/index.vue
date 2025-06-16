<template>
  <div class="all">
    <div class="top"></div>
    <div class="bottom-read">
      <div class="bottom-title">党建学习</div>
      <div class="out_line"></div>
      <div class="bottom-content">
        <div class="page-list" v-for="(item, index) in paginatedPassages" :key="index">
          <div class="page">
            <div class="page-detail">
              <div class="page-title"><nuxt-link :to="'/dangdejianshe' + item?.link_url + '/' + item.id">{{ item.title
                  }}</nuxt-link></div>
              <div class="page-bottom">
                <div class="page-time">{{ item.created_time }}</div>
                <div class="view-it"><nuxt-link :to="'/dangdejianshe' + item?.link_url + '/' + item.id">查看全文 <a-icon
                      type="right" /></nuxt-link></div>
              </div>
            </div>
          </div>
        </div>
        <a-pagination v-model="current" :total="0" @change="onChange" :pageSize=pageSize class="centered" show-less-items />
      </div>
    </div>
    <div class="top"></div>
  </div>
</template>

<script>
export default {
  head: {
    title:"党建学习",
  },
  data () {
    return {
      passages: '',
      // 当前页数
      current: 1,
      // 往期数目
      number: 0,
      //分页每页展示数目
      pageSize: 5,
      // 解决数据还未从接口获取到，但已经计算属性的问题
      paginated: false,

      news: [],
    }
  },

  created () { },
  async mounted () {
    const response2 = await this.$axios.get(this.$config.apiBaseUrl + "/DangJianList")
    // console.log("response2", response2)
    this.news = response2.data.data
    // console.log("this.news", this.news)
    this.paginated = true

    //文章数目
    this.number = Object.values(this.news).length

  },
  methods: {
    //切换分页
    onChange (current) {
      this.current = current
    },

    //进入详情
    getDetail (val) {

    },
  },
  computed: {
    // 每次分页展示的列表
    paginatedPassages () {
      if (this.paginated) {
        const passagesArray = Object.values(this.news)
        const start = (this.current - 1) * this.pageSize
        const end = start + this.pageSize
        return passagesArray.slice(start, end)
      } else {
        return []
      }
    }
  },

}

</script>

<style lang='less' scoped>
.all {
  font-family: "Source Han Serif SC VF";
  margin: 0;
  padding: 0;
  background: #f5f5f5;

  .top {
    height: 50px;
  }

  .bottom-read {
    width: 1200px;
    // margin: 30px auto 0;
    // margin-top: 50px;
    margin: 0 auto;
    padding-bottom: 80px;
    background-color: #fff;
    padding: 20px;

    .bottom-title {
      font-size: 32px;
      font-weight: 600;
      color: #333;
      // margin-bottom: 20px;
    }

    .out_line {
      height: 5px;
      width: 100px;
      background-color: #ab000d;
      margin-bottom: 20px;
    }

    .bottom-content {
      width: 100%;
      // display: flex;
      // justify-content: center;

      .page-list {
        width: 100%;
        border-bottom: 1px dashed;

        .page {
          width: 100%;
          // display: flex;
          // justify-content: space-between;
          // margin-bottom: 10px;
          margin: 20px 0;

          // .page-img {
          //   height: 100px;
          //   width: 160px;

          //   img {
          //     height: 100%;
          //     width: 100%;
          //   }
          // }

          .page-detail {
            height: 60px;
            // width: 900px;
            width: 100%;
            position: relative;

            .page-title {
              font-size: 18px;
              font-weight: 600;
              margin-bottom: 10px;
              cursor: pointer;
              /* 显示省略号 */
              display: -webkit-box;
              /* 将元素作为弹性伸缩盒子模型展示 */
              -webkit-line-clamp: 1;
              /* 显示多少行文字 */
              -webkit-box-orient: vertical;
              /* 文本垂直排列 */
              overflow: hidden;
              /* 隐藏溢出的内容 */
            }

            .page-bottom {
              display: flex;
              justify-content: space-between;

              .view-it {
                position: absolute;
                right: 5px;
                cursor: pointer;
                font-size: 16px;
                font-weight: 600;
              }
            }

          }
        }
      }

      .centered {
        margin-top: 30px;
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
