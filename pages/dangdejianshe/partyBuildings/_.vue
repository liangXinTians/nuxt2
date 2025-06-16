<template>
  <!-- 新闻 -->
  <div class="news">
    <!-- 封面部分-->
    <div class="news-cover">
      <div class="cover-title">党建学习</div>
    </div>
    <!-- 新闻内容盒子 -->
    <div class="news-box">
      <!-- 导航部分 -->
      <div class="news-nav">
        您的位置：党的建设 > 党建学习 > {{ passages.title }}
      </div>
      <!-- 标题部分 -->
      <div class="news-title-box">
        <div class="news-title">{{ passages.title }}</div>
        <div class="sub-title-box">
          <!-- 作者 -->
          <div class="news-author">作者：{{ passages.author }}</div>
          <!-- 发布时间 -->
          <div class="release-time">
            发布时间：{{ passages.releaseTime }}
          </div>
        </div>
      </div>
      <!-- 新闻内容部分 -->
      <div class="news-content" v-html="passages.content">
      </div>
    </div>

    <div class="bottom-read">
      <div class="bottom-title">党建学习</div>
      <div class="out_line"></div>
      <div class="bottom-content">
        <div class="page-list" v-for="(item, index) in paginatedPassages" :key="index">
          <div class="page">

            <div class="page-detail">
              <div class="page-title" @click="getDetail(item.id)">{{ item.title }}</div>
              <div class="page-bottom">
                <div class="page-time" @click="getDetail(item.id)">{{ item.created_time }}</div>
                <div class="view-it" @click="getDetail(item.id)">查看全文 <a-icon type="right" /></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 分页 -->
        <a-pagination v-model="current" :total="number" @change="onChange" :pageSize=pageSize class="centered" show-less-items />
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "News",
  data () {
    return {
      passages: '',
      // 当前页数
      current: 1,
      // 往期文章数目
      number: 0,
      //分页每页展示数目
      pageSize: 5,
      // 解决数据还未从接口获取到，但已经计算属性的问题
      paginated: false,
      news: []
    }
  },

  async mounted () {
    console.log("跳转文章s", this.$route)
    const { data } = await this.$axios.get(
      this.$config.apiBaseUrl + "/DangJianList?id=" + this.$route.params.pathMatch
    )
    console.log("data.data", data.data)
    this.passages = {
      title: data.data.title,
      author: data.data.author,
      id: data.data.id,
      releaseTime: data.data.created_time,
      content: data.data.html_content,
    }

    const response2 = await this.$axios.get(this.$config.apiBaseUrl + "/DangJianList")
    this.news = response2.data.data
    this.paginated = true



    // console.log("this", this.passages, this.now)
    // console.log("this.$route.params.name", this.$route.params.pathMatch)
    // this.now = this.$route.params.pathMatch
    //文章数目
    this.number = Object.values(this.news).length

  },
  watch: {

  },
  methods: {

    //切换分页
    onChange (current) {
      this.current = current
    },

    //进入文章详情
    getDetail (val) {
      console.log("跳转文章")
      this.$router.push({
        path: '/partyBuildings/' + val,
      })
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
  beforeDestroy () { },
}
</script>
<style lang="less" scoped>
.news {
  background: #f5f5f5;
  font-family: 'Source Han Serif SC VF';
  padding-bottom: 40px;

  .news-cover {
    width: 100%;
    height: 510px;
    background: url("../../../assets/images/news/cover.jpg") no-repeat center;
    background-size: cover;
    position: relative;

    .cover-title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 40px;
      color: #fff;
    }
  }

  .news-box {
    width: 1200px;
    margin: 0 auto;

    .news-nav {
      height: 50px;
      font-size: 16px;
      line-height: 50px;
      border-bottom: 1px solid #b9000d;
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

    .news-title-box {
      text-align: center;
      margin: 30px 0;

      .news-title {
        font-size: 40px;
        font-weight: 600;
        color: #333;
      }

      .sub-title-box {
        display: flex;
        justify-content: center;
        margin-top: 20px;

        .news-author,
        .release-time {
          font-size: 16px;
          color: #999;
          margin: 0 10px;
        }
      }
    }

    .news-content {
      background-color: #fff;
      padding: 28px;
      /* .paragraph {
          font-size: 16px;
          color: #333;
          line-height: 30px;
          margin-bottom: 20px;
          text-indent: 2em;
        }
        .img {
          text-align: center;
          margin-bottom: 20px;
          img {
            width: 640px;
            height: auto;
          }
        }
        .p-title {
          font-size: 20px;
          color: #333;
          margin-bottom: 20px;
          font-weight: bolder;
        } */
    }
  }

  .bottom-change {
    width: 1200px;
    margin: 20px auto 0;
    padding-bottom: 80px;
    display: flex;
    justify-content: space-between;
    position: relative;

    .bottom-front {
      .text-box {
        text-align: left;
        margin-left: 10px;
      }
    }

    .bottom-end {
      .text-box {
        text-align: right;
        margin-right: 10px;
      }
    }

    .bottom-front,
    .bottom-end {
      display: flex;
      align-items: center;
      font-size: 16px;

      .icon {
        font-size: 40px;
        color: #b9000e;
      }
    }
  }

  //往期阅读模块
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

@media screen and (max-width: 1200px) and (min-width: 992px) {
  .news {
    .news-cover {
      height: 480px;

      .cover-title {
        font-size: 38px;
      }
    }

    .news-box {
      width: 100%;

      .news-nav {}

      .news-title-box {
        .news-title {
          font-size: 36px;
        }

        .sub-title-box {}
      }

      .news-content {
        padding: 26px;
      }
    }

    .bottom-read {
      width: 100%;

      .bottom-title {}

      .bottom-content {
        .page-list {
          .page {
            .page-img {}

            .page-detail {
              width: 80%;

              .page-title {}

            }
          }
        }
      }
    }
  }

}

// 顶部导航栏切换后顶部距离问题
@media screen and (max-width: 1050px) {
  .news {
    .news-cover {
      margin-top: 75px;

    }
  }
}

@media screen and (max-width:991px) and (min-width: 768px) {
  .news {
    .news-cover {
      height: 400px;

      .cover-title {
        font-size: 36px;
      }
    }

    .news-box {
      width: 100%;

      .news-nav {}

      .news-title-box {
        .news-title {
          font-size: 34px;
        }

        .sub-title-box {}
      }

      .news-content {
        padding: 26px;
      }
    }

    .bottom-read {
      width: 100%;

      .bottom-title {
        font-size: 30px;
      }

      .bottom-content {
        .page-list {
          .page {
            .page-img {}

            .page-detail {
              width: 70%;

              .page-title {}

            }
          }
        }
      }
    }
  }
}

@media screen and (max-width:767px) {
  .news {
    .news-cover {
      height: 300px;

      .cover-title {
        font-size: 32px;
      }
    }

    .news-box {
      width: 100%;

      .news-nav {}

      .news-title-box {
        .news-title {
          font-size: 28px;
        }

        .sub-title-box {
          .news-author {
            font-size: 14px;
          }

          .release-time {
            font-size: 14px;
          }
        }
      }

      .news-content {
        padding: 15px;

        figure.image {
          width: 200px;

          img {
            width: 100% !important;
            height: auto;
          }
        }

        // .image {
        //   img {
        //     width: 100% !important;
        //     height: auto;
        //   }
        // }

        p {
          img {
            width: 100% !important;
          }
        }
      }
    }

    .bottom-read {
      width: 100%;
      padding: 5px;

      .bottom-title {
        font-size: 28px;
      }

      .bottom-content {
        .page-list {
          .page {
            .page-img {
              margin-right: 10px;
            }

            .page-detail {
              width: 70%;

              .page-title {}

            }
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.news-content {
  background-color: #fff;
  padding: 28px;

  // span {
  //   text-align: center !important;
  // }
  p {
    font-size: 16px;
    color: #333;

    // span {
    //   border-bottom: 2px solid red;
    //   display: inline-block;
    //   padding-bottom: 2px;
    // }
  }

  figure {
    figcaption {
      text-align: center;
    }
  }

  .paragraph {
    font-size: 16px;
    color: #333;
    line-height: 30px;
    margin-bottom: 20px;
    text-indent: 2em;
  }

  .title {
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
    font-weight: bolder;
    text-align: center;

    .h-title {
      display: inline-block;
      padding-bottom: 2px;
      border-bottom: 2px solid red;
    }
  }

  .img {
    text-align: center;
    margin-bottom: 20px;
    position: relative;

    img {
      width: 640px;
      height: auto;
      margin-top: 20px;
    }
  }

  .p-title {
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
    font-weight: bolder;
  }
}

@media screen and (max-width:767px) {
  .news {
    .news-cover {
      height: 300px;

      .cover-title {
        font-size: 32px;
      }
    }

    .news-box {
      width: 100%;

      .news-nav {}

      .news-title-box {
        .news-title {
          font-size: 28px;
        }

        .sub-title-box {
          font-size: 14px;
        }
      }

      .news-content {
        padding: 15px;

        figure.image {

          img {
            width: 100% !important;
            height: auto;
          }
        }


        p {
          img {
            width: 100% !important;
          }
        }
      }
    }
  }
}
</style>
