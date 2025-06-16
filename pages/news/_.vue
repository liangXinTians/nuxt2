<template>
  <!-- 新闻 -->
  <div class="news">
    <!-- 封面部分-->
    <div class="news-cover">
      <div class="cover-title">新闻资讯</div>
    </div>
    <!-- 新闻内容盒子 -->
    <div class="news-box">
      <!-- 导航部分 -->
      <div class="news-nav">
        您的位置：<span class="goHomes" @click="goHome">首页</span>> 新闻资讯 >
        {{ passages.title }}{{ passages.subtitle }}
      </div>
      <!-- 标题部分 -->
      <div class="news-title-box">
        <div class="news-title">{{ passages.title }}</div>
        <div class="sub-title-box">
          <!-- 作者 -->
          <div class="news-author">作者：{{ passages.author }}</div>
          <!-- 发布时间 -->
          <div class="release-time">发布时间：{{ passages.releaseTime }}</div>
        </div>
      </div>
      <!-- 新闻内容部分 -->
      <!-- v-html="passages[now].content" -->
      <div class="news-content" ref="content" v-html="passages.content"></div>
    </div>
    <!-- 往期阅读 -->
    <div class="bottom-read">
      <div class="bottom-title">新闻回顾</div>
      <div class="bottom-content">
        <!-- 往期内容列表 -->
        <div
          class="page-list"
          v-for="(item, index) in paginatedPassages"
          :key="index"
        >
          <div class="page">
            <div class="page-img">
              <img
                loading="lazy"
                :src="$config.apiFileUrl + item.file_path"
                alt=""
              />
            </div>
            <div class="page-detail">
              <div
                :title="item.title"
                class="page-title"
                @click="getDetail(item.id)"
              >
                {{ item.title }}{{ item.subtitle }}
              </div>
              <div class="page-time">{{ item.created_time.split(" ")[0] }}</div>
              <div class="view-it" @click="getDetail(item.id)">
                查看全文 <a-icon type="right" />
              </div>
            </div>
          </div>
        </div>
        <!-- 分页 -->
        <a-pagination
          v-model="current"
          :total="number"
          @change="onChange"
          :pageSize="pageSize"
          class="centered"
          show-less-items
        />
      </div>
    </div>
    <!-- 图片预览 -->
    <bigImg
      :imgList="bigImgList"
      :activeImgIndex="activeImgIndex"
      v-if="showBigImg"
      @changeShowBigImg="changeShowBigImg"
      :show.sync="showBigImg"
      :distinguishingMark="distinguishingMark"
    ></bigImg>
  </div>
</template>
<script>
export default {
  name: "news",
  head: {
    title: "公司要闻",
  },
  data() {
    return {
      passages: "",
      // 当前页数
      current: 1,
      // 往期文章数目
      number: 0,
      //分页每页展示数目
      pageSize: 5,
      // 解决数据还未从接口获取到，但已经计算属性的问题
      paginated: false,
      // 展示大图
      showBigImg: false,
      // 存储所有图片
      bigImgList: [],
      // 图片预览下标
      activeImgIndex: 0,
      // 区分是云参观还是普通图片预览 0:云参观 1:普通图片预览
      distinguishingMark: 1,
    };
  },
  async mounted() {
    const { data } = await this.$axios.get(
      this.$config.apiBaseUrl +
        "/importantNewsList?id=" +
        this.$route.params.pathMatch
      // "http://devsrv.linknology.cn:18888/zhongxin/index.php/importantNewsList?id=" + this.$route.params.pathMatch
    );
    this.passages = {
      title: data.data.title,
      author: data.data.author,
      id: data.data.id,
      releaseTime: data.data.created_time,
      img: this.$config.apiFileUrl + data.data.file_path,
      content: data.data.html_content,
    };

    // 筛选出所有src
    // 使用 DOMParser 解析 HTML 字符串
    // const parser = new DOMParser();
    // const doc = parser.parseFromString(data.data.html_content, "text/html");
    // // 提取所有 img 标签的 src 属性值
    // this.bigImgs = Array.from(doc.querySelectorAll("img")).map((img) => {
    //   img.src;
    //   img.addEventListener("click", () => {
    //     alert(`Image clicked: ${img.src}`);
    //   });
    // });

    const response2 = await this.$axios.get(
      this.$config.apiBaseUrl + "/importantNewsList"
    );
    this.news = response2.data.data;
    this.paginated = true;
    this.number = Object.values(this.news).length;
    // console.log("this", this.passages, this.now)
    // console.log("this.$route.params.name", this.$route.params.pathMatch)
    // this.now = this.$route.params.pathMatch
    //文章数目

    // 给video标签添加属性
    /*   this.number = Object.values(this.news).length;
    const el = document.querySelector("video");
    el["disablePictureInPicture"] = true; // disablePictureInPicture的属性改为true 禁用画中画
    el["controlsList"] = "nodownload noremoteplayback";  */ // 隐藏下载按钮
    this.$nextTick(() => {
      this.bindImgEvents();
    });
  },
  watch: {
    // 监视路由
    // $route (res) {
    //   console.log('shouyewww', res)
    //   this.showMobileMenu = true
    //   // 路由切换调用
    //   this.handleMobileMenu()
    //   // 给首页单独设置 点击图标的时候
    //   if (res.path == '/' || res.path.includes('/news')) {
    //     this.current = ['index']
    //   } else {//非首页的时候
    //     // // 对路径进行按'/'切分
    //     // let array = res.path.split('/');
    //     // // 存储路径关键字
    //     // let path = array[array.length-1];
    //     // // 将其path赋值给数组current
    //     // this.current = [path]
    //     // // 为stories需要修改
    //     // if(path=='stories'){
    //     //   this.current = ['success-stories']
    //     // }
    //     // if(!isNaN(this.current)){
    //     //   this.flags.forEach((item)=>{
    //     //     if(this.$route.path.includes(item.flag)){
    //     //       this.current = [item.name];
    //     //     }
    //     //   })
    //     // }
    //   }
    //   console.log("res", res, this.current)
    // },
  },
  methods: {
    isMobile() {
      let flag = window.navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    //切换分页
    onChange(current) {
      this.current = current;
    },
    //进入文章详情
    getDetail(val) {
      // console.log("跳转文章");
      this.$router.push({
        path: "/news/" + val,
      });
    },
    goHome() {
      this.$router.push({
        path: "/",
      });
    },
    // 给图片绑定事件
    bindImgEvents() {
      // 获取插入的 HTML 内容
      const contentDiv = this.$refs.content;
      // 选择所有 img 标签并绑定事件
      const imgElements = contentDiv?.querySelectorAll("img");
      imgElements.forEach((img) => {
        img.addEventListener("click", () => {
          this.handleImageClickSingle(img.src);
        });
      });
    },
    // 关闭大图
    changeShowBigImg() {
      this.showBigImg = false;
      this.activeImgIndex = 0;
      // console.log("关闭大图");
    },
    // 项目其他图片点击图片放大
    handleImageClickSingle(img) {
      // console.log("图片点击", img);
      if (this.isMobile()) {
        this.distinguishingMark = 1;
        this.showBigImg = true;
        this.activeImgIndex = 0;
        this.bigImgList = [img];
      }
    },
  },
  computed: {
    // 每次分页展示的列表
    paginatedPassages() {
      if (this.paginated) {
        const passagesArray = Object.values(this.news);
        const start = (this.current - 1) * this.pageSize;
        const end = start + this.pageSize;
        return passagesArray.slice(start, end);
      } else {
        return [];
      }
    },
  },
  beforeDestroy() {},
};
</script>
<style lang="less" scoped>
.news {
  background: #f5f5f5;
  font-family: "Source Han Serif SC VF";
  padding-bottom: 40px;

  .news-cover {
    width: 100%;
    height: 510px;
    background: url("../../assets/images/news/cover.jpg") no-repeat center;
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
      .goHomes {
        cursor: pointer;
      }
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
    margin: 30px auto 0;
    padding-bottom: 80px;
    background-color: #fff;
    padding: 20px;

    .bottom-title {
      font-size: 32px;
      font-weight: 600;
      color: #333;
      margin-bottom: 20px;
    }

    .bottom-content {
      width: 100%;
      // display: flex;
      // justify-content: center;

      .page-list {
        width: 100%;

        .page {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;

          .page-img {
            height: 100px;
            width: 160px;

            img {
              height: 100%;
              width: 100%;
            }
          }

          .page-detail {
            height: 100px;
            width: 900px;
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

            .page-time {
              margin-bottom: 10px;
            }

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

      .centered {
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

      .news-nav {
      }

      .news-title-box {
        .news-title {
          font-size: 36px;
        }

        .sub-title-box {
        }
      }

      .news-content {
        padding: 26px;
      }
    }

    .bottom-read {
      width: 100%;

      .bottom-title {
      }

      .bottom-content {
        .page-list {
          .page {
            .page-img {
            }

            .page-detail {
              width: 80%;

              .page-title {
              }
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

@media screen and (max-width: 991px) and (min-width: 768px) {
  .news {
    .news-cover {
      height: 400px;

      .cover-title {
        font-size: 36px;
      }
    }

    .news-box {
      width: 100%;

      .news-nav {
      }

      .news-title-box {
        .news-title {
          font-size: 34px;
        }

        .sub-title-box {
        }
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
            .page-img {
            }

            .page-detail {
              width: 70%;

              .page-title {
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .news {
    .news-cover {
      height: 300px;
      .cover-title {
        font-size: 30px;
      }
    }

    .news-box {
      width: 100%;
      .news-title-box {
        .news-title {
          font-size: 24px;
        }

        .sub-title-box {
          .news-author {
            font-size: 16px;
          }

          .release-time {
            font-size: 16px;
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
        font-size: 30px;
      }

      .bottom-content {
        .page-list {
          .page {
            .page-img {
              display: none;
            }
            .page-detail {
              width: 100%;
              padding: 0 10px;
              .page-title {
                font-size: 22px;
              }
              .page-time {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 419px) {
  .news .news-box .news-title-box .sub-title-box {
    .new-author,
    .release-time {
      margin: 0 2px;
    }
  }
}
@media screen and (max-width: 368px) {
  .news .news-box .news-title-box .sub-title-box {
    flex-direction: column;
    .new-author,
    .release-time {
      margin: 2px 0;
    }
  }
}
</style>
<style lang="less">
.news-content {
  background-color: #fff;
  padding: 28px;
  font-family: "Source Han Serif SC VF" !important;

  img {
    max-width: 100%;
  }
  // span {
  //   text-align: center !important;
  // }
  p {
    font-size: 16px !important;
    color: #333;

    // span {
    //   border-bottom: 2px solid red;
    //   display: inline-block;
    //   padding-bottom: 2px;
    // }
    span {
      font-family: "Source Han Serif SC VF" !important;
      font-size: 16px !important;
    }
  }

  section {
    font-size: 16px !important;

    span {
      font-family: "Source Han Serif SC VF" !important;
      font-size: 16px !important;
    }
  }

  figure {
    figcaption {
      text-align: center;
      span {
        font-family: "Source Han Serif SC VF" !important;
      }
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
      max-width: 100%;
    }
  }

  .p-title {
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
    font-weight: bolder;
  }
}

@media screen and (max-width: 768px) {
  .news {
    .news-box {
      width: 100%;
      .news-content {
        padding: 15px;

        figure {
          .image {
            img {
              width: 100% !important;
              height: auto;
            }
          }
          figcaption {
            font-size: 14px !important;
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
