<template>
  <!-- 活动 -->
  <div class="activities">
    <div class="news" v-if="passages.extension !== 'mp4'">
      <div class="news-box">
        <!-- 标题部分 -->
        <div class="news-title-box">
          <div class="news-title">{{ passages.title }}</div>
        </div>
        <!-- 新闻内容部分 -->
        <div class="news-content" ref="content" v-html="passages.content"></div>
      </div>
    </div>
    <div class="video" v-else @click="toggleVideo()">
      <video
        :src="passages.video"
        loop
        id="videos"
        :controls="showControls"
        disablepictureinpicture
        controlslist="nodownload"
      >
        Your browser does not support the video tag.
      </video>
      <div class="button" id="buttons">
        <a-icon type="play-circle" />
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
  name: "activities",
  data() {
    return {
      // 当前是那一篇
      now: "",
      passages: {},
      current: 1,
      // 往期文章数目
      number: 0,
      //分页每页展示数目
      pageSize: 5,
      // 控件
      showControls: false,
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
    console.log(
      this.$router.name,
      this.$route.params.pathMatch,
      this.$route.query.isPass
    );
    // const response = await $axios.get("http://devsrv.linknology.cn:18888/zhongxin/index.php/AcCalendarBannerList?type=0&is_pass=1")
    const response = await this.$axios.get(
      this.$config.apiBaseUrl +
        `/AcCalendarBannerList?type=0&is_pass=${
          this.$route.query.isPass ? this.$route.query.isPass : "1"
        }`
    );
    let responses = response.data.data.filter(
      (item) => item.id === Number(this.$route.params.pathMatch)
    );
    this.passages = {
      title: responses[0].title,
      author: responses[0].author,
      // id: data.data.id,
      // releaseTime: data.data.created_time,
      video: this.$config.apiFileUrl + responses[0].file_path,
      content: responses[0].html_content,
      extension: responses[0].extension,
    };

    console.log("this", this.passages, this.now);
    console.log("this.$route.params.name", this.$route.params.pathMatch);
    this.now = this.$route.params.pathMatch;
    //文章数目
    // this.number = Object.values(this.passages).length
    console.log("this.$route", this.$route.name);

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
    toggleVideo() {
      if (this.showControls) {
        return;
      } else {
        const video = document.getElementById("videos");
        const playButton = document.getElementById("buttons");
        this.showControls = true;

        playButton.style.display = "none";

        setTimeout(() => {
          video.play();
        }, 100);
      }
    },
    isMobile() {
      let flag = window.navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    // 给图片绑定事件
    bindImgEvents() {
      // 获取插入的 HTML 内容
      const contentDiv = this.$refs.content;
      console.log("contentDiv", contentDiv);
      // 选择所有 img 标签并绑定事件
      const imgElements = contentDiv?.querySelectorAll("img");
      console.log("imgElements", imgElements);
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
  computed: {},
  beforeDestroy() {},
};
</script>
<style lang="less" scoped>
.activities {
  font-family: "Source Han Serif SC VF";
  padding: 0;
  margin: 0;

  .news {
    background: #f5f5f5;
    padding-bottom: 40px;

    .news-box {
      width: 1200px;
      margin: 0 auto;

      .news-title-box {
        text-align: center;
        padding: 30px 0;

        .news-title {
          font-size: 40px;
          font-weight: 600;
          color: #333;
        }
      }

      .news-content {
        background-color: #fff;
        padding: 28px;
      }
    }
  }

  .video {
    position: relative;
    // top: 0;
    // left: 0;
    // position: absolute;
    // height: calc(100vh - 90px);
    // width: 100%;
    overflow: hidden;
    display: flex;

    video {
      height: auto;
      width: 80vw;
      max-width: 1200px;
      justify-content: center;
      margin: 0 auto;
      padding: 50px;
    }

    .button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 55px;
      color: #fff;
      font-weight: 600;
      z-index: 99;
      cursor: pointer;
    }
  }
}

@media screen and(max-width:1200px) and(min-width:992px) {
  .activities {
    .news {
      .news-box {
        width: 100%;

        .news-title-box {
          .news-title {
            font-size: 36px;
          }
        }

        .news-content {
          padding: 24px;
        }
      }
    }

    .video {
      .button {
        font-size: 50px;
      }
    }
  }
}

@media screen and(max-width:991px) and(min-width:768px) {
  .activities {
    .news {
      background: #f5f5f5;
      padding-bottom: 40px;

      .news-box {
        width: 100%;

        .news-title-box {
          .news-title {
            font-size: 34px;
          }
        }

        .news-content {
          padding: 20px;
        }
      }
    }

    .video {
      .button {
        font-size: 45px;
      }
    }
  }
}

@media screen and(max-width:1050px) {
  .activities {
    padding-top: 75px;

    /*  .news {

      .news-box {

        .news-title-box {

          .news-title {}
        }
      }

    } */
  }
}

@media screen and(max-width:768px) {
  .activities {
    .news {
      .news-box {
        width: 100%;

        .news-title-box {
          .news-title {
            // padding-top: 75px;
            font-size: 24px;
          }
        }

        .news-content {
          padding: 10px;

          .img {
            width: 100%;

            img {
              width: 100%;
            }
          }
        }
      }
    }
    .video {
      z-index: 1;
      video {
        width: 100vw;
        padding: 0;
      }
      .button {
        font-size: 35px;
      }
    }
  }
}
</style>
<style lang="less">
.news-content {
  background-color: #fff;
  padding: 28px;

  video {
    max-width: 100%;
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

  p {
    span {
      text-align: center;

      img {
        width: 640px;
        height: auto;
        margin-top: 20px;
      }
    }
  }

  .img {
    text-align: center;
    margin-bottom: 20px;

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

@media screen and(max-width:767px) {
  .activities {
    .news {
      .news-box {
        width: 100%;

        .news-title-box {
          .news-title {
            // padding-top: 75px;
            font-size: 28px;
          }
        }

        .news-content {
          .img {
            width: 100%;

            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
