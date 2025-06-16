<template>
  <!-- 崇明生态游 -->
  <div class="chongming-tour">
    <div class="top">
      <div class="top-logo">
        <!-- 图片做到适配不同屏幕大小 -->
        <picture>
          <!-- 移动端 -->
          <source media="(max-width: 768px)" srcset="~/assets/images/sojourns/chongmingTour/logo_mobile.png"></source>
          <!-- pc端 -->
          <source media="(min-width: 768px)" srcset="~/assets/images/sojourns/chongmingTour/logo.png"></source>
          <img src="~/assets/images/sojourns/chongmingTour/logo.png" alt="">
        </picture>
      </div>
      <div class="top-banner">
        <!-- 图片做到适配不同屏幕大小 -->
        <picture>
          <source media="(max-width: 768px)" srcset="~/assets/images/sojourns/chongmingTour/top_banner_mobile.webp"></source>
          <source media="(min-width: 768px)" srcset="~/assets/images/sojourns/chongmingTour/top_banner.webp"></source>
          <img src="~/assets/images/sojourns/chongmingTour/top_banner.webp" alt="banner" @click="
            handleImageClickSingle(
              require('~/assets/images/sojourns/chongmingTour/top_banner_mobile.webp')
            )
          ">
        </picture>
      </div>
    </div>
    <div class="content-box">
      <!-- 左右排列盒 -->
      <!-- 信澜的房 -->
      <div class="permutation-box">
        <div class="title">
          <!-- 图片做到适配不同屏幕大小 -->
          <picture>
            <source media="(max-width: 768px)" srcset="~/assets/images/sojourns/chongmingTour/house/title_mobile.png"></source>
            <source media="(min-width: 768px)" srcset="~/assets/images/sojourns/chongmingTour/house/title.png"></source>
            <img src="~/assets/images/sojourns/chongmingTour/house/title.png" alt="">
          </picture>
        </div>
        <div class="text-left content">
          <div class="left background">
            <div class="text-box">
              <span class="text">
                全程入住一室一厅俱乐部豪华套房，设计精致且充满温馨感。套内阔达82平米，宽敞舒适。约8平方米的全南阔景阳台，更是让你能够尽情享受阳光和美景。无论是亲子度假，还是与好友一起欢聚，都能在这里找到属于自己的舒适与快乐。
              </span>
            </div>
          </div>
          <div class="right img-swiper">
            <TourImgSwiper
              :imagesGroup="imgList.house"
              @handleImageClickMobile="handleImageClickMobile"
            ></TourImgSwiper>
          </div>
        </div>
      </div>
      <!--  信澜活动 -->
      <div class="permutation-box">
        <div class="title">
          <!-- 图片做到适配不同屏幕大小 -->
          <picture>
            <source media="(max-width: 768px)" srcset="~/assets/images/sojourns/chongmingTour/activity/title_mobile.png"></source>
            <source media="(min-width: 768px)" srcset="~/assets/images/sojourns/chongmingTour/activity/title.png"></source>
            <img src="~/assets/images/sojourns/chongmingTour/activity/title.png" alt="">
          </picture>
        </div>
        <div class="text-right content">
          <div class="left img-swiper">
            <TourImgSwiper
              :imagesGroup="imgList.activity"
              @handleImageClickMobile="handleImageClickMobile"
            ></TourImgSwiper>
          </div>
          <div class="right background">
            <div class="text-box">
              <span class="text">
                在信澜天地，“文旅+康养”融合，产品与服务的设计跨越代际，充分考虑到合家欢游玩需求，每日推出多达4档亲子活动，涵盖户外探索、国学文化、非遗体验、水上活动......可以玩一周都不重样。
              </span>
              <span class="text">
                活动除了满足亲子同乐，也能保证长辈们身心疗养。不仅有专业老师指导的太极、八段锦、瑜伽课程，还可以参加黑池舞会、湖畔野趣下午茶、焚香纳凉夜等众多活动，解锁夏日创意玩法，全家日夜清凉嗨玩，收获无与伦比的难忘回忆。
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- 海报盒 -->
      <div class="poster-box">
        <div class="poster">
          <img
            :src="posterUrl"
            alt=""
            @click="handleImageClickSingle(posterUrl)"
          />
        </div>
      </div>
      <!--  信澜的餐 -->
      <div class="permutation-box">
        <div class="title">
          <!-- 图片做到适配不同屏幕大小 -->
          <picture>
            <source media="(max-width: 768px)" srcset="~/assets/images/sojourns/chongmingTour/meal/title_mobile.png"></source>
            <source media="(min-width: 768px)" srcset="~/assets/images/sojourns/chongmingTour/meal/title.png"></source>
            <img src="~/assets/images/sojourns/chongmingTour/meal/title.png" alt="">
          </picture>
        </div>
        <div class="text-left content">
          <div class="left background">
            <div class="text-box">
              <span class="text">
                锦江酒店餐饮团队出品，四大餐厅轮番上阵，每日不同美食主题：崇明农家、有机素食主题、粤式排挡、生态银鲈鱼主题、和牛BBQ.....，把玩美食与度假的完美节奏，让你的味蕾在度假中也能享受到极致满足。
              </span>
            </div>
          </div>
          <div class="right img-swiper">
            <TourImgSwiper
              :imagesGroup="imgList.meal"
              @handleImageClickMobile="handleImageClickMobile"
            ></TourImgSwiper>
          </div>
        </div>
      </div>
      <!--  会所配套 -->
      <div class="permutation-box">
        <div class="title">
          <!-- 图片做到适配不同屏幕大小 -->
          <picture>
            <source media="(max-width: 768px)" srcset="~/assets/images/sojourns/chongmingTour/club/title_mobile.png"></source>
            <source media="(min-width: 768px)" srcset="~/assets/images/sojourns/chongmingTour/club/title.png"></source>
            <img src="~/assets/images/sojourns/chongmingTour/club/title.png" alt="">
          </picture>
        </div>
        <div class="text-right content">
          <div class="left img-swiper">
            <TourImgSwiper
              :imagesGroup="imgList.club"
              @handleImageClickMobile="handleImageClickMobile"
            ></TourImgSwiper>
          </div>
          <div class="right background">
            <div class="text-box">
              <span class="text">
                B区澜会所内，配置星空恒温泳池、棋牌中心、图书馆、电影院、健身房、舞蹈室、书画手工、美容美发美甲、桌球乒乓、室内模拟高尔夫等10余项休闲娱乐设施。
              </span>
            </div>
          </div>
        </div>
      </div>
      <!--  健康护航 -->
      <div class="permutation-box">
        <div class="title">
          <!-- <img
            src="~/assets/images/sojourns/chongmingTour/health/title.png"
            alt=""
            class="web-title"
          />
          <img
            src="~/assets/images/sojourns/chongmingTour/health/title_mobile.png"
            alt=""
            class="mobile-title"
          /> -->
          <!-- 图片做到适配不同屏幕大小 -->
          <picture>
            <source media="(max-width: 768px)" srcset="~/assets/images/sojourns/chongmingTour/health/title_mobile.png"></source>
            <source media="(min-width: 768px)" srcset="~/assets/images/sojourns/chongmingTour/health/title.png"></source>
            <img src="~/assets/images/sojourns/chongmingTour/health/title.png" alt="">
          </picture>
        </div>
        <div class="text-left content">
          <div class="left background">
            <div class="text-box">
              <span class="text">
                社区内的信澜护理院已经投运，医保开通在即，专业医师可全天提供中医养生治疗、刮痧、拔罐、针灸、艾灸、中药熏蒸......等项目。无论文旅度假，还是疗休康养，全家人都可以获得全天候的健康护航。
              </span>
            </div>
          </div>
          <div class="right img-swiper">
            <TourImgSwiper
              :imagesGroup="imgList.health"
              @handleImageClickMobile="handleImageClickMobile"
            ></TourImgSwiper>
          </div>
        </div>
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
import TourImgSwiper from "../../components/tourImgSwiper.vue";
export default {
  name: "chongmingTour",
  components: {
    TourImgSwiper,
  },
  /*   head: {
    title: "中信养老",
    meta: [
      { charset: "utf-8" },
      {
        hid: "keywords",
        name: "keywords",
        content: "中信集团养老业务平台，中信养老，中信养老官网",
      },
      {
        hid: "description",
        name: "description",
        content:
          "中信养老是中信集团发展养老业务的平台。以“都市型、一站式、医康养”为特色，提供全年龄全场景养老解决方案。目前已经形成“信澜天地、信福&信悦、信养之家”等信字系列产品线，可提供针对退休健康人群的活力公寓、适合高龄自理和高龄照护型长者的养老机构、生活不能自理及认知症长者对应的护理院等多元产品。",
      },
    ],
  }, */
  data() {
    return {
      showBigImg: false,
      bigImgList: [],
      // 区分是云参观还是普通图片预览 0:多张图片预览 1:一张图片预览
      distinguishingMark: 0,
      // 图片预览下标
      activeImgIndex: 0,
      // 定义轮播图片数据
      imgList: {
        house: [
          {
            src: require("~/assets/images/sojourns/chongmingTour/house/1.jpg"),
            alt: "客厅",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/house/2.jpg"),
            alt: "客厅2",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/house/3.jpg"),
            alt: "卧室1",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/house/4.jpg"),
            alt: "卧室2",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/house/5.jpg"),
            alt: "阳台",
          },
        ],
        activity: [
          {
            src: require("~/assets/images/sojourns/chongmingTour/activity/1.jpg"),
            alt: "东滩骑行",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/activity/2.jpg"),
            alt: "非遗手工",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/activity/3.jpg"),
            alt: "黑池舞厅",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/activity/4.jpg"),
            alt: "户外太极",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/activity/5.jpg"),
            alt: "瑜伽",
          },
        ],
        meal: [
          {
            src: require("~/assets/images/sojourns/chongmingTour/meal/1.jpg"),
            alt: "广粤早茶",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/meal/2.jpg"),
            alt: "自助餐",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/meal/3.jpg"),
            alt: "和牛BBQ",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/meal/4.jpg"),
            alt: "营养套餐",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/meal/5.jpg"),
            alt: "鱼羊鲜面",
          },
        ],
        club: [
          {
            src: require("~/assets/images/sojourns/chongmingTour/club/1.jpg"),
            alt: "星空泳池",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/club/2.jpg"),
            alt: "健身房",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/club/3.jpg"),
            alt: "图书馆",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/club/4.jpg"),
            alt: "手工室",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/club/5.jpg"),
            alt: "放映厅",
          },
        ],
        health: [
          {
            src: require("~/assets/images/sojourns/chongmingTour/health/1.jpg"),
            alt: "护理院外观",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/health/2.jpg"),
            alt: "服务台1",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/health/3.jpg"),
            alt: "病房",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/health/4.jpg"),
            alt: "问诊室",
          },
          {
            src: require("~/assets/images/sojourns/chongmingTour/health/5.jpg"),
            alt: "服务台2",
          },
        ],
      },
      // 海报
      posterUrl: require("~/assets/images/sojourns/chongmingTour/poster.png"),
    };
  },
  mounted() {},
  watch: {},
  methods: {
    isMobile() {
      let flag = window.navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    // 轮播图点击图片放大
    handleImageClickMobile(index, obj) {
      if (this.isMobile()) {
        this.distinguishingMark = 0;
        this.showBigImg = true;
        this.activeImgIndex = index;
        this.bigImgList = obj;
      }
    },
    // 关闭大图
    changeShowBigImg() {
      this.showBigImg = false;
      this.activeImgIndex = 0;
      console.log("关闭大图");
    },
    //海报点击图片放大
    handleImageClickSingle(img) {
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
.chongming-tour {
  .top {
    .top-logo,
    .top-banner {

      img {
        height: 100%;
        width: 100%;
      }
    }
    .top-logo {
      height: 52px;
      width: 400px;
      margin: 30px auto;
    }
  }
  // 内容区
  .content-box {
    // 排列盒
    .permutation-box {
      margin-top: 40px;
      .title {
        margin: 0 40px;
        img {
          width: 100%;
        }

      }
      .content {
        display: flex;
        height: 29.5vw;
        &.text-left {
          .background {
            justify-content: flex-end;
            .text-box {
              padding-right: 40px;
            }
          }
        }
        &.text-right {
          .background {
            justify-content: flex-start;
            .text-box {
              padding-left: 40px;
            }
          }
        }
        .background {
          background-color: #bb0210;
          width: 50%;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          .text-box {
            color: white;
            font-size: 16px;
            line-height: 30px;
            width: 600px;
            box-sizing: border-box;
            .text {
              display: inline-block;
              text-indent: 2em;
            }
          }
        }
        .img-swiper {
          width: 50%;
          height: 100%;
        }
      }
    }
    // 海报盒
    .poster-box {
      position: relative;
      &::after {
        content: "";
        background-color: #bb0210;
        height: 36%;
        inset: 0;
        margin: auto;
        position: absolute;
        width: 100%;
        z-index: -1;
      }
      .poster {
        max-width: 1200px;
        margin: 100px auto;
        img {
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .chongming-tour {
    .content-box {
      .permutation-box {
        .title {
          margin: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 1049px) {
  .chongming-tour {
    .top {
      padding-top: 76px;
    }
  }
}

@media screen and (max-width: 992px) {
  .chongming-tour {
    .content-box {
      .permutation-box {
        .content {
          height: 50vw;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .chongming-tour {
    .top {
      .top-logo {
        height: auto;
        width: 30vw;
        margin: 20px auto;
      }
    }
    .content-box {
      .permutation-box {
        margin-top: 10px;
        .content {
          width: auto;
          &.text-left,
          &.text-right {
            height: auto;
            .background {
              .text-box {
                width: 100%;
                padding: 10px 20px;
              }
            }
          }
          &.text-left {
            flex-direction: column;
          }
          &.text-right {
            flex-direction: column-reverse;
          }
          .background,
          .img-swiper {
            width: 100%;
          }
        }
      }
      .poster-box {
        .poster {
          margin: 20px auto;
        }
      }
    }
  }
}
</style>
