<template>
  <div class="home">
    <!-- 标题内容 -->
    <div class="top">
      <div class="boxShdow"></div>
      <img
        loading="lazy"
        src="../../../assets/images/xinyangzhijia/jinxiu/1.jpg"
        alt=""
        @load="handleImgLoad"
      />
      <div class="banner">
        <div class="banners">
          <div class="title">信养之家</div>
          <div class="subTitle">浦东锦绣养老院</div>
          <div class="borders"></div>
          <div class="content">机构连锁 85+高龄失能失智长辈</div>
        </div>
      </div>
      <div class="two_dimensional">
        <div class="two_dimensional1">
          <img
            loading="lazy"
            src="../../../assets/images/二维码/信养之家公众号二维码.jpg"
            alt=""
          />
          <div>信养之家公众号</div>
        </div>
        <!-- <div class="two_dimensional2"><img loading="lazy" src="../../../assets/images/二维码/信养之家公众号二维码.jpg" alt="">
          <div>信养之家视频号</div>
        </div> -->
      </div>
    </div>
    <!-- 参观预约 -->
    <VisitReserve ref="visitReserve" />
    <!-- logo和文字-->
    <div class="singLand">
      <div class="content">
        <div class="logo">
          <img
            loading="lazy"
            src="../../../assets/images/xinyangzhijia/logo.png"
            alt=""
          />
        </div>
        <div class="contents">
          <div class="contentss">
            信养之家浦东锦绣养老院项目,是一家国有品质连锁护理型养老机构。项目位于内环与中环之间,距离地铁13号线约500米,7号线约1300米。SAM超市、巴黎春天、盒马超市步行可达。与丰富的医疗资源毗邻而居，龙华医院浦东分院
            (三甲)、东方医院南院
            (三甲)、仁济医院(三甲)以及社区卫生中心,君康医院等，为长者健康保驾护航。
          </div>
          <div class="contentss">
            项目建筑面积10500㎡，独栋独院带3000㎡独立花园。涵盖176个高品质床位，户型规划以双人间和单人间为主，含有少量套房可供选择。已于2021年年底对外营业，2023年入住长辈超过百人。
          </div>
        </div>
      </div>
    </div>
    <div class="singLands">
      <div class="img">
        <img
          loading="lazy"
          src="../../../assets/images/xinyangzhijia/logo.png"
          alt=""
        />
      </div>
      <div class="contentss">
        信养之家浦东锦绣养老院项目,是一家国有品质连锁护理型养老机构。项目位于内环与中环之间,距离地铁13号线约500米,7号线约1300米。SAM超市、巴黎春天、盒马超市步行可达。与丰富的医疗资源毗邻而居，龙华医院浦东分院
        (三甲)、东方医院南院
        (三甲)、仁济医院(三甲)以及社区卫生中心,君康医院等，为长者健康保驾护航。
      </div>
      <div class="contentss">
        项目建筑面积10500㎡，独栋独院带3000㎡独立花园。涵盖176个高品质床位，户型规划以双人间和单人间为主，含有少量套房可供选择。已于2021年年底对外营业，2023年入住长辈超过百人。
      </div>
    </div>
    <!-- 三个图片 -->
    <div class="images">
      <div class="image">
        <div class="img_left">
          <div class="img1">
            <img
              loading="lazy"
              src="../../../assets/images/xinyangzhijia/jinxiu/2.jpg"
              alt=""
            />
            <div class="img_font">一楼-认知症区单人间</div>
          </div>
          <div class="img2">
            <img
              loading="lazy"
              src="../../../assets/images/xinyangzhijia/jinxiu/3.jpg"
              alt=""
            />
            <div class="img_font">六楼-组团区域</div>
          </div>
        </div>
        <div class="img_right">
          <img
            loading="lazy"
            src="../../../assets/images/xinyangzhijia/jinxiu/4.jpg"
            alt=""
          />
          <div class="img_font">信养之家俯瞰图</div>
        </div>
      </div>
      <div class="image-mobile">
        <div class="img_top" @click="handleImageClickSingle(threeBigImg[0])">
          <img loading="lazy" :src="threeBigImg[0]" alt="" />
          <div class="img_font">信养之家俯瞰图</div>
        </div>
        <div class="img_bottom">
          <div class="img1" @click="handleImageClickSingle(threeBigImg[1])">
            <img loading="lazy" :src="threeBigImg[1]" alt="" />
            <div class="img_font">一楼-认知症区单人间</div>
          </div>
          <div class="img2" @click="handleImageClickSingle(threeBigImg[2])">
            <img loading="lazy" :src="threeBigImg[2]" alt="" />
            <div class="img_font">六楼-组团区域</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部切换 -->
    <div class="bottoms">
      <div class="titles">
        <div class="title">
          <div
            class="button"
            @mouseenter="changeReviews(0)"
            :class="{ active: changeReview === 0 }"
          >
            社区设施
          </div>
          <div
            class="button"
            @mouseenter="changeReviews(1)"
            :class="{ active: changeReview === 1 }"
          >
            服务亮点
          </div>
          <div
            class="button"
            @mouseenter="changeReviews(2)"
            :class="{ active: changeReview === 2 }"
          >
            云参观
          </div>
        </div>
      </div>
      <!-- 社区设施 -->
      <div v-if="changeReview === 0" class="bottom1" id="bottom1">
        <div class="bottom_tops">
          <div class="contents">
            <div class="content">
              <div class="content_content">
                信养之家精心研发小组团理念，以6-10间居室(10-15位长辈)
                提供更为精准及有个性化的小组团服务，每个组团都配备客厅、餐厅、小厨房，尽可能实现每张床位空间私属化、居家化，家庭氛围得到有效延伸，让私密和社交在空间的塑造中无形穿插。
              </div>
              <div class="content_content">
                根据地域特色和长者生活习惯，用老上海风味+上海“老克勒”风情，结合健康均衡餐饮要求，推出每月特色餐饮服务，满足海派养老的需求。一楼老佛爷书咖吧,每日提供各类风味点心、咖啡、简餐;对于有特殊需求的长辈定制碎食、流食、糖尿病、痛风饮食满足不同长辈需求;针对长期卧床长辈可提供营养补充剂增强体质。
              </div>
              <div class="content_content">
                机构内配置康复大厅，满足长者各种照护需求，遵循国际ICAA实践准则，在日常护理外更多的鼓励长者参与力所能及的丰富活动，主题社交、文化休闲、专业康复、春秋出游。
              </div>
              <!-- logo部分 -->
              <!-- <div class="logo">
                <img loading="lazy"
                  src="../../../assets/images/xinyangzhijia/bg_l_sage-green.png"
                  alt=""
                />
              </div> -->
            </div>
          </div>
          <div class="go_video">
            <div>点击视频，走进浦东锦绣养老院</div>
            <div class="go_icon">→</div>
          </div>
          <!-- <div class="video">
            <img loading="lazy" style="width: 100%; height: 100%" src="../../../assets/images/xinyangzhijia/jinxiu/5.jpg" alt="" />
          </div> -->
          <div class="video" id="jinxiuVideo" @click="toggleVideo()">
            <video
              :src="$config.videoUrl + '/信养之家浦东锦绣养老院.mp4'"
              loop
              :controls="showControls"
              controlslist="nodownload"
              id="myVideos1"
            >
              Your browser does not support the video tag.
            </video>
            <div class="play_button" id="playButtons1">
              <a-icon type="play-circle" />
            </div>
          </div>
          <div id="crossss1" class="crossss" @click="handleImageClickss()">
            ×
          </div>
        </div>
        <div class="bottom_tops_mobiles">
          <div class="back_color">
            <div class="content">
              <div class="content_content">
                信养之家精心研发小组团理念，以6-10间居室(10-15位长辈)
                提供更为精准及有个性化的小组团服务，每个组团都配备客厅、餐厅、小厨房，尽可能实现每张床位空间私属化、居家化，家庭氛围得到有效延伸，让私密和社交在空间的塑造中无形穿插。
              </div>
              <div class="content_content">
                根据地域特色和长者生活习惯，用老上海风味+上海“老克勒”风情，结合健康均衡餐饮要求，推出每月特色餐饮服务，满足海派养老的需求。一楼老佛爷书咖吧,每日提供各类风味点心、咖啡、简餐;对于有特殊需求的长辈定制碎食、流食、糖尿病、痛风饮食满足不同长辈需求;针对长期卧床长辈可提供营养补充剂增强体质。
              </div>
              <div class="content_content">
                机构内配置康复大厅，满足长者各种照护需求，遵循国际ICAA实践准则，在日常护理外更多的鼓励长者参与力所能及的丰富活动，主题社交、文化休闲、专业康复、春秋出游。
              </div>
            </div>
          </div>
          <div class="video" id="jinxiuVideo" @click="toggleVideoMobile()">
            <video
              :src="$config.videoUrl + '/信养之家浦东锦绣养老院.mp4'"
              :controls="showControls"
              controlslist="nodownload"
              id="myVideos1_mobile"
              :poster="
                require('../../../assets/images/xinyangzhijia/jinxiu/video_poster.png')
              "
            >
              Your browser does not support the video tag.
            </video>
            <div
              class="play_button"
              id="playButtons1_mobile"
              @click="toggleVideoMobile()"
            >
              <a-icon type="play-circle" />
            </div>
          </div>
        </div>
      </div>
      <!-- 服务亮点 -->
      <div v-if="changeReview === 1" class="bottom2">
        <div class="bottom_up">
          <div class="box">
            <div class="left text-box">
              <div class="title">
                <img
                  loading="lazy"
                  src="../../../assets/images/bg_s_read.png"
                  alt=""
                />特色康复
              </div>
              <div class="content-box">
                <div class="sub-title">六个专业岗位协同照护</div>
                <div class="content">
                  配置了有针对性的康养服务科目，实现了显著的服务升级。除了生活照料和专业护理，专技康养岗位每天为长者提供包括四肢、吞咽、语言在内的能力训练，尽可能保持长者身体技能。在这里，每一位长者的日常，都由六个专技岗位协同提供服务。
                </div>
              </div>
            </div>
            <div class="right">
              <div class="img">
                <img
                  loading="lazy"
                  @click="handleImageClickSingle(serviceHighlightsBigImg[0])"
                  :src="serviceHighlightsBigImg[0]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_down">
          <div class="box">
            <div class="left">
              <div class="img">
                <img
                  loading="lazy"
                  @click="handleImageClickSingle(serviceHighlightsBigImg[1])"
                  :src="serviceHighlightsBigImg[1]"
                  alt=""
                />
              </div>
            </div>
            <div class="right text-box">
              <div class="title">
                <img
                  loading="lazy"
                  src="../../../assets/images/bg_s_read.png"
                  alt=""
                  class="mobile_img"
                />
                记忆之家<img
                  loading="lazy"
                  src="../../../assets/images/bg_s_read.png"
                  alt=""
                  class="web_img"
                />
              </div>
              <div class="content-box">
                <div class="sub-title">国际认知症照护单元</div>
                <div class="content">
                  两个认知症单元，以国际照护标准配置服务人员，为中重度认知症长者指定专属照护与康复计划。独创小组团服务理念，缩小服务单位，仅以6-10间居室（约10-15位老人）提供小组团服务。面向生活不能自理、患有认知症、有老年疾病或者其他康复需求的高龄长者，还有“老年康复”和“记忆之家”两大特色服务。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 云参观 -->
      <div v-if="changeReview === 2" class="bottom3">
        <div class="bottom_titles">
          <div class="bottom_title">
            <div
              class="button_img"
              @click="changeImgReviews(0)"
              :class="{ active: changeImgReview === 0 }"
            >
              周边配套
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(1)"
              :class="{ active: changeImgReview === 1 }"
            >
              项目照片
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(2)"
              :class="{ active: changeImgReview === 2 }"
            >
              生活场景
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(3)"
              :class="{ active: changeImgReview === 3 }"
            >
              建筑实景
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(4)"
              :class="{ active: changeImgReview === 4 }"
            >
              服务设施
            </div>
          </div>
        </div>
        <div
          class="img_lists"
          @mouseover="handleMouseOver"
          @mouseout="handleMouseOut"
        >
          <div
            @click="lastImg"
            v-if="Object.keys(bottom3s).length > 2 && !showShadow"
            class="home_left"
          >
            <a-icon type="left" class="news_icon" />
          </div>
          <div
            @click="nextImg"
            v-if="Object.keys(bottom3s).length > 2 && !showShadow"
            class="home_right"
          >
            <a-icon type="right" class="news_icon" />
          </div>
          <div class="img_list" id="imgList">
            <div
              class="imgs"
              v-for="(item, index) in bottom3s"
              :key="item.newIndex"
            >
              <div class="img">
                <img
                  loading="lazy"
                  :src="$config.apiFileUrl + item.file_path"
                  alt=""
                  :id="'imgs-' + index"
                  @click="handleImageClick(index)"
                />
                <div @click="lastImgs" v-if="showShadow" class="home_lefts">
                  <a-icon type="left" class="news_icon" />
                </div>
                <div @click="nextImgs" v-if="showShadow" class="home_rights">
                  <a-icon type="right" class="news_icon" />
                </div>
                <div id="cross" v-if="showShadow" @click="handleImageClicks()">
                  ×
                </div>
                <div
                  class="shadow"
                  v-if="showShadow"
                  @click="handleImageClicks()"
                ></div>
              </div>
              <div class="font">{{ item.title }}</div>
            </div>
          </div>
        </div>
        <!-- 移动端显示 -->
        <ImgSwiper
          class="img_lists_mobile"
          :imagesGroup="bottom3s"
          fontColor="black"
          @handleImageClickMobile="handleImageClickMobile"
        ></ImgSwiper>
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
import VisitReserve from "../../../components/visitReserve.vue";
export default {
  name: "jinxiu",
  head: {
    title: "浦东锦绣养老院",
    meta: [
      { charset: "utf-8" },
      {
        hid: "keywords",
        name: "keywords",
        content: "浦东新区养老院，锦绣养老院，信养之家养老院，养老院",
      },
      {
        hid: "description",
        name: "description",
        content:
          "信养之家浦东锦绣养老院项目,是一家国有品质连锁护理型养老机构。项目位于内环与中环之间,距离地铁13号线约500米,7号线约1300米。SAM超市、巴黎春天、盒马超市步行可达。与丰富的医疗资源毗邻而居，龙华医院浦东分院 (三甲)、东方医院南院 (三甲)、仁济医院(三甲)以及社区卫生中心,君康医院等，为长者健康保驾护航。",
      },
    ],
  },
  data() {
    return {
      showBigImg: false,
      bigImgList: [],
      // 区分是云参观还是普通图片预览 0:云参观 1:普通图片预览
      distinguishingMark: 0,
      // 图片预览下标
      activeImgIndex: 0,
      mobile: false,
      changeReview: 0,
      changeImgReview: 0, // 默认显示项目生活
      showImg: true,
      // 三个图片
      threeBigImg: [
        require("~/assets/images/xinyangzhijia/jinxiu/4.jpg"),
        require("~/assets/images/xinyangzhijia/jinxiu/2.jpg"),
        require("~/assets/images/xinyangzhijia/jinxiu/3.jpg"),
      ],
      //控件属性
      showControls: false,
      // 服务亮点要放大的图片
      serviceHighlightsBigImg: [
        require("~/assets/images/xinyangzhijia/jinxiu/锦绣康复.jpg"),
        require("~/assets/images/xinyangzhijia/jinxiu/锦绣认知症.jpg"),
      ],
      // 云参观 所有的内容
      bottom3: [],
      //遍历单独的内容
      bottom3s: [],
      // 云参观 轮播id
      bottom3_id: 0,
      imgIndex: 0,
      // 储存图片放大后的index
      imgListIndex: "",
      // 控制图片是否放大的变量
      isImageZoomed: false,
      // 图片点击后的遮罩层
      showShadow: false,
    };
  },
  async mounted() {
    const response = await this.$axios.post(
      this.$config.apiBaseUrl + "/cloudTourList",
      {
        pid: 5,
      }
    );
    this.bottom3 = response.data.data;
    console.log("bottom3", this.bottom3);
    // 让其选择了数组下标为1的了
    const bottom3ss = this.bottom3.slice(0, 1)[0].media_details;
    this.bottom3s = Object.values(bottom3ss);
    this.bottom3s.forEach((obj, index) => {
      obj.newIndex = index;
    });
    console.log("bottom3s", this.bottom3s);
    this.imgIndex = this.bottom3s.length;

    this.mobileFunction();
    window.addEventListener("resize", this.mobileFunction);
  },
  watch: {},
  methods: {
    handleImgLoad() {
      this.$nextTick(() => {
        this.$refs.visitReserve?.mobileFunctions();
      });
    },
    // 宽度变化
    mobileFunction() {
      let screenWidth =
        window?.innerWidth ||
        document?.documentElement.scrollWidth ||
        document.body?.clientWidth;
      if (screenWidth < 768 || this.isMobile()) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
    isMobile() {
      let flag = window.navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    // 切换模块
    changeReviews(index) {
      this.changeReview = index;
      if (index == 0) {
        this.showImg = true;
      } else {
        this.showImg = true;
        this.showControls = false;
      }
    },
    // 点击视频的时候
    toggleVideo() {
      // 如果视频处于展开状态，则不执行播放或暂停操作
      if (this.showControls) {
        return;
      } else {
        const video = document.getElementById("myVideos1");
        const playButton = document.getElementById("playButtons1");
        this.showImg = false;
        playButton.style.display = "none";
        // 显示控件
        this.showControls = true;

        const checkImg = document.getElementById("jinxiuVideo");
        const cross = document.getElementById("crossss1");
        checkImg.classList.add("changeImgs");
        cross.style.display = "block";

        //禁止滚动条滚动
        let widthBar = 17,
          root = document.documentElement;
        if (typeof window.innerWidth == "number") {
          widthBar = window.innerWidth - root.clientWidth;
        }
        root.style.overflow = "hidden";
        root.style.borderRight = widthBar + "px solid transparent";
        setTimeout(() => {
          video.play();
        }, 100);
      }
    },
    toggleVideoMobile() {
      const video = document.getElementById("myVideos1_mobile");
      const playButton = document.getElementById("playButtons1_mobile");
      if (this.showControls) {
        return;
      } else {
        this.showImg = false;
        playButton.style.display = "none";
        // 显示控件
        this.showControls = true;
        // 解决第一次点击视频出现的问题
        setTimeout(() => {
          video.play();
        }, 100);
      }
    },
    // 视频叉号
    handleImageClickss() {
      const checkImg = document.getElementById("jinxiuVideo");
      const cross = document.getElementById("crossss1");
      checkImg.classList.remove("changeImgs");
      cross.style.display = "none";
      // console.log("视频缩小")
      const video = document.getElementById("myVideos1");
      video.pause();
      const playButton = document.getElementById("playButtons1");
      playButton.style.display = "block";

      // 隐藏控件
      this.showControls = false;

      // 恢复滚动条
      let root = document.documentElement;
      root.style.overflow = "";
      root.style.borderRight = "";
    },
    // 切换图片模块
    changeImgReviews(index) {
      this.changeImgReview = index;
      const bottom3ss = this.bottom3.slice(index, index + 1)[0].media_details;
      this.bottom3s = Object.values(bottom3ss);
      this.bottom3s.forEach((obj, index) => {
        obj.newIndex = index; //添加新索引值
      });
      console.log("bottom3s", this.bottom3s);
      this.imgIndex = Object.keys(this.bottom3s).length;
      console.log("imgIndex", this.imgIndex);
      const imgList = document.getElementById("imgList");
      imgList.style.left = "0";
      this.bottom3_id = 0;
      console.log("bottom3_id", this.bottom3_id);
      console.log("imgList.style.left", imgList.style.left);
    },
    nextImg() {
      const imgList = document.getElementById("imgList");
      this.bottom3_id += 1;
      if (this.imgIndex < 3) {
        imgList.style.left = "0";
      }
      if (this.imgIndex === 3) {
        this.bottom3_id -= 1;
        imgList.style.left = `calc(-${40 * this.bottom3_id + 20}vw - ${
          10 * this.bottom3_id
        }px)`;
      } else if (this.bottom3_id === this.imgIndex - 3) {
        imgList.style.left = `calc(-${40 * this.bottom3_id + 20}vw - ${
          10 * this.bottom3_id
        }px)`;
        // this.bottom3_id -= 1
      } else if (this.bottom3_id > this.imgIndex - 3) {
        // imgList.style.left = `calc(-${40 * this.bottom3_id + 20}vw - ${10 * this.bottom3_id}px)`
        this.bottom3_id -= 1;
      } else {
        imgList.style.left = `calc(-${40 * this.bottom3_id}vw - ${
          10 * this.bottom3_id
        }px)`;
        console.log("imgList", imgList.style.left);
      }
      console.log("bottom3_id", this.imgIndex, this.bottom3_id);
    },
    lastImg() {
      const imgList = document.getElementById("imgList");
      this.bottom3_id -= 1;
      if (this.bottom3_id < 0) {
        this.bottom3_id += 1;
        imgList.style.left = "0";
      } else {
        imgList.style.left = `calc(-${40 * this.bottom3_id}vw - ${
          10 * this.bottom3_id
        }px)`;
      }
      console.log("bottom3_id", this.imgIndex, this.bottom3_id);
    },
    handleImageClick(index) {
      if (!this.isImageZoomed) {
        this.isImageZoomed = true;
        this.imgListIndex = index;
        const checkImg = document.getElementById("imgs-" + index);
        // const cross = document.getElementById("crosss")
        checkImg.classList.add("changeImg");
        // cross.style.display = "block"
        this.showShadow = true;
        //禁止滚动条滚动
        let widthBar = 17,
          root = document.documentElement;
        if (typeof window.innerWidth == "number") {
          widthBar = window.innerWidth - root.clientWidth;
        }
        root.style.overflow = "hidden";
        root.style.borderRight = widthBar + "px solid transparent";
      }
    },
    handleImageClickMobile(index) {
      this.distinguishingMark = 0;
      this.showBigImg = true;
      this.activeImgIndex = index;
      this.bigImgList = this.bottom3s;
    },
    changeShowBigImg() {
      this.showBigImg = false;
      this.activeImgIndex = 0;
      console.log("关闭大图");
    },
    // 项目其他图片点击图片放大
    handleImageClickSingle(img) {
      if (this.isMobile()) {
        this.distinguishingMark = 1;
        this.showBigImg = true;
        this.activeImgIndex = 0;
        this.bigImgList = [img];
      }
    },
    handleImageClicks() {
      if (this.isImageZoomed) {
        const checkImg = document.getElementById("imgs-" + this.imgListIndex);
        // const cross = document.getElementById("crosss")
        checkImg.classList.remove("changeImg");
        // cross.style.display = "none"
        this.showShadow = false;
        // 恢复滚动条
        let root = document.documentElement;
        root.style.overflow = "";
        root.style.borderRight = "";
        this.isImageZoomed = false;
        this.imgListIndex = "";
      }
    },
    // 鼠标进入图片区域
    handleMouseOver() {
      // 明确事件处理程序为非 passive
      document.addEventListener("wheel", this.handleMouseWheel, {
        passive: false,
      });
    },
    // 鼠标离开图片区域
    handleMouseOut() {
      // 明确事件处理程序为非 passive
      document.removeEventListener("wheel", this.handleMouseWheel, {
        passive: false,
      });
    },
    // 鼠标在图片list区域滚轮滚动
    handleMouseWheel(event) {
      const imgList = document.getElementById("imgList");
      const rect = imgList.getBoundingClientRect();
      const isInImgArea =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      if (isInImgArea && Object.keys(this.bottom3s).length > 2) {
        event.preventDefault(); // 只在滚动区域内阻止默认行为
        const delta = Math.sign(event.deltaY);
        if (delta < 0) {
          this.lastImg();
        } else if (delta > 0) {
          this.nextImg();
        }
      }
    },
    lastImgs() {
      if (this.imgListIndex > 0) {
        const checkImg = document.getElementById("imgs-" + this.imgListIndex);
        checkImg.classList.remove("changeImg");
        this.imgListIndex -= 1;
        const checkImgs = document.getElementById("imgs-" + this.imgListIndex);
        checkImgs.classList.add("changeImg");
        console.log("imgListIndex", this.imgListIndex);
      } else {
        return;
      }
    },
    nextImgs() {
      if (this.imgListIndex < this.imgIndex - 1) {
        const checkImg = document.getElementById("imgs-" + this.imgListIndex);
        checkImg.classList.remove("changeImg");
        this.imgListIndex += 1;
        const checkImgs = document.getElementById("imgs-" + this.imgListIndex);
        checkImgs.classList.add("changeImg");
        console.log("imgListIndex", this.imgListIndex);
      } else {
        return;
      }
    },
  },
  computed: {},
  beforeDestroy() {
    window.removeEventListener("resize", this.mobileFunction);
    document.removeEventListener("wheel", this.handleMouseWheel, {
      passive: false,
    });
  },
  components: { VisitReserve },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  font-family: "Source Han Serif SC VF";
  margin: 0 auto;
  // 头部
  .top {
    position: relative;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    .boxShdow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }
    img {
      width: 100%;
      // max-height: calc(100vh - 190px);
      max-height: calc(100vh - 206px);
      object-fit: cover;
    }
    .banner {
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: #fff;
      display: flex;
      justify-content: center;
      .banners {
        width: 1200px;
        .title {
          font-size: 50px;
          font-weight: 600;
          color: rgb(255, 221, 143);
        }
        .subTitle {
          font-size: 50px;
          font-weight: 600;
        }
        .borders {
          height: 12px;
          width: 356px;
          margin-top: -17px;
          background-color: rgb(186, 0, 14);
        }
        .content {
          font-size: 30px;
        }
      }
    }
    .two_dimensional {
      position: absolute;
      bottom: 10px;
      right: 10px;
      display: flex;
      .two_dimensional1 {
        display: flex;
        flex-direction: column;
        img {
          width: 60px;
          margin: 0 auto;
          height: 60px;
        }

        div {
          font-size: 12px;
          color: #fff;
          padding-top: 3px;
        }
      }

      .two_dimensional2 {
        display: flex;
        flex-direction: column;

        img {
          width: 50px;
          height: 50px;
          margin: 0 auto;
        }

        div {
          font-size: 16px;
          color: #fff;
          padding-top: 3px;
        }
      }
    }
  }

  // logo
  .singLand {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;

    .content {
      width: 1200px;
      display: flex;
      justify-content: space-between;

      .logo {
        width: 450px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 80%;
          padding-bottom: 5px;
        }
      }

      .contents {
        width: 740px;
        display: flex;
        flex-direction: column;
        align-self: flex-end;

        .contentss {
          line-height: 26px;
          padding: 15px 0;
          font-size: 16px;
          text-indent: 2em;
        }

        :nth-child(2) {
          padding-bottom: 0;
        }
      }
    }
  }

  // 移动端
  .singLands {
    display: none;
    width: 100%;
    height: auto;
    padding: 0 20px;
    margin-top: 50px;

    .img {
      text-align: center;
      margin: 20px 0;
      img {
        width: 40%;
        height: auto;
        max-width: 300px;
        min-width: 150px;
      }
    }

    .contentss {
      padding: 10px 0;
      font-size: 16px;
      text-indent: 2em;
      // list-style: 40px;
      line-height: 22px;
    }
  }

  // 三个图片
  .images {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 60px;
    .image {
      width: 1200px;
      display: flex;

      .img_left {
        margin-right: 10px;

        .img1 {
          width: 450px;
          height: 300px;
          position: relative;
          margin-bottom: 10px;

          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }

          .img_font {
            position: absolute;
            left: 10px;
            bottom: 10px;
            font-size: 16px;
            color: #fff;
          }
        }

        .img2 {
          width: 450px;
          height: 260px;
          position: relative;

          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }

          .img_font {
            position: absolute;
            left: 10px;
            bottom: 10px;
            font-size: 16px;
            color: #fff;
            text-overflow: ellipsis;
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
        }
      }

      .img_right {
        position: relative;
        height: 570px;
        width: 740px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .img_font {
          position: absolute;
          bottom: 10px;
          left: 10px;
          font-size: 16px;
          color: #fff;
        }
      }
    }
    // 移动端
    .image-mobile {
      display: none;
      flex: 1;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .img_top {
        position: relative;
        height: 60vw;
        margin-bottom: 10px;
        .img_font {
          position: absolute;
          left: 10px;
          bottom: 10px;
          font-size: 16px;
          color: #fff;
        }
      }
      .img_bottom {
        display: flex;
        .img1 {
          margin-right: 5px;
        }
        .img2 {
          margin-left: 5px;
        }
        .img1,
        .img2 {
          flex: 1;
          height: 30vw;
          position: relative;
          .img_font {
            position: absolute;
            left: 10px;
            bottom: 10px;
            font-size: 16px;
            color: #fff;
          }
        }
      }
    }
  }

  // 底部切换
  .bottoms {
    background-color: rgb(245, 245, 245);
    width: 100%;

    .titles {
      width: 100%;
      display: flex;
      justify-content: center;
      .title {
        width: 1200px;
        display: flex;
        .button {
          font-size: 30px;
          line-height: 70px;
          height: 70px;
          cursor: pointer;
          margin: 45px 30px 45px 0;
        }

        .active {
          border-bottom: rgb(175, 13, 13) solid 4px;
          color: rgb(0, 0, 0);
        }
      }
    }

    .bottom1 {
      .bottom_tops {
        width: 100%;
        position: relative;
        width: 100%;
        // height: auto;
        height: 29.5vw;
        min-height: 500px;
        background-color: #b0b596;
        img {
          width: 50%;
          height: 100%;
          object-fit: cover;
        }

        .contents {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          justify-content: center;
          width: 100%;

          .content {
            width: 1200px;
            position: relative;

            .content_content {
              font-size: 16px;
              width: 48%;
              line-height: 30px;
              text-indent: 2em;
              margin-bottom: 10px;
            }

            .logo {
              position: absolute;
              height: 200px;
              width: 200px;
              left: -220px;
              bottom: -50px;

              img {
                width: 100%;
              }
            }
          }
        }

        .go_video {
          position: absolute;
          right: 52%;
          bottom: 10px;
          font-size: 16px;

          .go_icon {
            display: flex;
            justify-content: flex-end;
          }
        }

        .video {
          position: absolute;
          left: 50%;
          width: 50%;
          height: 100%;
          top: 0;

          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 10;
            position: absolute;
            top: 0;
            left: 0;
          }

          .play_button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 11;
            // background-color: rgba(0, 0, 0, 0.7);
            color: #fff;
            padding: 10px;
            border-radius: 50%;
            font-size: 50px;
            cursor: pointer;
          }
        }

        .crossss {
          position: fixed;
          top: 120px;
          right: calc(17.5vw + 5px);
          font-size: 30px;
          color: #fff;
          font-weight: 900;
          display: none;
          z-index: 10;
          cursor: pointer;
        }

        #crossss {
          position: fixed;
          top: 120px;
          right: calc(17.5vw + 5px);
          font-size: 30px;
          color: #fff;
          font-weight: 900;
          display: none;
          z-index: 10;
          cursor: pointer;
        }

        .changeImgs {
          position: fixed;
          top: 120px;
          left: 50%;
          transform: translateX(-50%);
          height: 40vw;
          width: 65vw;
          z-index: 9;
        }
      }
      // 移动端
      .bottom_tops_mobiles {
        display: none;
        font-size: 16px;
        line-height: 22px;
        .back_color {
          background-color: #b0b596;
          padding: 20px;
          color: black;
          .content {
            .content_content {
              text-indent: 2em;
              margin: 10px 0;
            }
          }
        }
        .video {
          width: 100%;
          position: relative;
          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            vertical-align: middle;
          }
          .play_button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            // z-index: ;
            color: #fff;
            padding: 10px;
            border-radius: 50%;
            font-size: 50px;
            cursor: pointer;
          }
        }
      }
    }

    .bottom2 {
      .bottom_up,
      .bottom_down {
        // height: 25vw;
        max-height: 480px;
        display: flex;
        justify-content: center;

        .box {
          max-width: 1200px;
          padding: 50px 0;
          flex: 1;
          display: flex;
          justify-content: space-between;

          .text-box {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .title {
              font-size: 40px;
              color: #ba000e;
              font-weight: bold;
              width: fit-content;
              display: flex;
              align-items: center;
              z-index: 2;

              // &::before {
              //   position: absolute;
              //   content: "";
              //   display: block;
              //   height: 100px;
              //   width: 100px;
              //   background-size: 100% 100%;
              //   z-index: -1;
              //   left: 0;
              //   right: 0;
              //   margin: 0 auto;
              // }
              img {
                width: 15px;
                height: 15px;
              }
            }

            .content-box {
              .sub-title {
                font-size: 26px;
                font-weight: bold;
                margin-bottom: 10px;
              }

              .content {
                font-size: 16px;
              }
            }
          }

          .img {
            width: 100%;
            height: 100%;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              aspect-ratio: 4 / 3;
            }
          }
        }
      }

      .mobile_img {
        display: none;
      }

      .bottom_up {
        background-color: #b0b596;

        .box {
          // .text-box .title::before {
          //   background-image: url("../../../assets/images/xinyangzhijia/bg_s_yellow.png");
          // }

          .left {
            width: 40%;

            .title {
              img {
                margin-right: 5px;
                margin-bottom: 18px;
              }
            }
          }

          .right {
            width: 50%;
          }
        }
      }

      .bottom_down {
        background-color: #fff;

        .box {
          .text-box .title {
            text-align: right;
            align-self: flex-end;

            // &::before {
            //   background-image: url("../../../assets/images/xinyangzhijia/bg_s_gray.png");
            // }
          }

          .left {
            width: 50%;
          }

          .right {
            width: 40%;

            .title {
              img {
                margin-left: 5px;
                margin-bottom: 18px;
              }
            }
          }
        }
      }
    }

    .bottom3 {
      width: 100%;
      // background-color: rgb(42, 42, 42);
      background-color: #b0b596;
      background-size: cover;

      .bottom_titles {
        width: 100%;
        display: flex;
        justify-content: center;

        .bottom_title {
          width: 1200px;
          display: flex;
          margin: 60px 0 30px 0;
          flex-wrap: wrap;
          .button_img {
            font-size: 20px;
            padding: 5px 10px;
            color: black;
            margin-right: 20px;
            cursor: pointer;
          }

          .active {
            background-color: #94987d;
            color: #fff;
          }
        }
      }

      .img_lists {
        width: 100%;
        overflow: hidden;
        height: 31vw;
        position: relative;

        .img_list {
          // width: 100%;
          display: flex;
          padding-bottom: 80px;
          position: absolute;
          top: 0;
          left: 0;

          .imgs {
            // margin: 0 5px;
            margin-right: 10px;

            .img {
              height: 26.4vw;
              width: 40vw;

              img {
                height: 100%;
                width: 100%;
                object-fit: cover;
              }

              #cross {
                position: fixed;
                top: 120px;
                right: calc(20vw + 5px);
                font-size: 30px;
                color: #fff;
                font-weight: 900;
                // display: none;
                z-index: 92;
                cursor: pointer;
              }

              ::selection {
                color: #fff;
                background: initial;
              }

              .changeImg {
                position: fixed;
                top: 120px;
                left: 50%;
                transform: translateX(-50%);
                height: 40vw;
                width: 60vw;
                z-index: 91;
              }

              .shadow {
                position: fixed;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                background-color: rgba(0, 0, 0, 0.001);
                z-index: 90;
              }

              .home_lefts {
                height: 50px;
                width: 50px;
                position: fixed;
                border-radius: 50%;
                top: calc(20vw + 95px);
                // transform: translateY(-50%);
                left: calc(20vw + 20px);
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: rgba(72, 72, 72, 0.1);
                transition: 0.3s;
                z-index: 91;
                cursor: pointer;
                // display: none;

                .news_icon {
                  font-size: 32px;
                  color: #fff;
                }
              }

              .home_rights {
                height: 50px;
                width: 50px;
                position: fixed;
                border-radius: 50%;
                top: calc(20vw + 95px);
                // transform: translateY(-50%);
                right: calc(20vw + 20px);
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: rgba(72, 72, 72, 0.1);
                transition: 0.3s;
                z-index: 91;
                cursor: pointer;
                // display: none;

                .news_icon {
                  font-size: 32px;
                  color: #fff;
                }
              }

              .home_lefts:active {
                background-color: rgba(72, 72, 72, 1);
              }

              .home_rights:active {
                background-color: rgba(72, 72, 72, 1);
              }
            }

            .font {
              font-size: 16px;
              color: black;
              margin-top: 10px;
            }
          }
        }

        //解决频繁点击轮播按钮出现蓝色的问题
        ::selection {
          color: initial;
          background: initial;
        }

        .home_left {
          height: 50px;
          width: 50px;
          // border: 1px solid #c0c0c0;
          position: absolute;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          left: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(72, 72, 72, 0.5);
          transition: 0.3s;
          z-index: 5;
          cursor: pointer;

          .news_icon {
            font-size: 32px;
            color: #fff;
          }
        }

        .home_right {
          height: 50px;
          width: 50px;
          // border: 1px solid #c0c0c0;
          position: absolute;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          right: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(72, 72, 72, 0.5);
          transition: 0.3s;
          z-index: 5;
          cursor: pointer;

          .news_icon {
            font-size: 32px;
            color: #fff;
          }
        }

        .home_left:active {
          background-color: rgba(72, 72, 72, 1);
        }

        .home_right:active {
          background-color: rgba(72, 72, 72, 1);
        }
      }
      .img_lists_mobile {
        display: none;
      }
      // .img_list::-webkit-scrollbar {
      //   display: none;
      // }
    }
  }
}

@media screen and (max-width: 1220px) {
  .home {
    .top {
      .banner {
        .banners {
          width: 100%;
          margin-left: 200px;

          .title {
            font-size: 40px;
          }

          .subTitle {
            font-size: 40px;
          }

          .borders {
            height: 10px;
            width: 286px;
          }

          .content {
            font-size: 26px;
          }
        }
      }
    }

    .singLand {
      .content {
        width: 100%;
        padding: 0 20px;

        .logo {
          width: 20%;

          img {
            width: 100%;
          }
        }

        .contents {
          width: 70%;

          .contentss {
            padding: 15px 0;
            text-indent: 2em;
          }
        }
      }
    }

    .images {
      height: auto;
      padding: 0 10px;

      .image {
        width: 100%;
        // height: auto;

        .img_left {
          width: 37.5%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .img1 {
            height: calc(25vw - 4px);
            width: 100%;
          }

          .img2 {
            height: 22vw;
            width: 100%;
          }
        }

        .img_right {
          width: 61.6%;
          height: 47.5vw;
        }
      }
    }

    .bottoms {
      .titles {
        .title {
          width: 100%;

          :nth-child(1) {
            margin-left: 10px;
          }

          .button {
            font-size: 28px;
          }
        }
      }

      .bottom1 {
        .list {
          padding: 0 10px;

          .lists {
            width: 100%;
          }

          .imgs {
            width: 100%;

            .img_div {
              img {
                height: 25vw;
              }
            }
          }
        }
      }

      .bottom2 {
        .bottom_up,
        .bottom_down {
          max-height: inherit;
          .box {
            padding-left: 20px;
            padding-right: 20px;
            .text-box .title {
              font-size: 38px;
            }
          }
        }
      }
    }
  }
}

// 头部压缩的距离
@media screen and (max-width: 1049px) {
  .home {
    margin-top: 75px;
  }
}

// 社区设施图文第一个
@media screen and (max-width: 1000px) {
  .home {
    .bottoms {
      .bottom1 {
        .list {
          .lists1 {
            height: 350px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .home {
    .top {
      .banner {
        .banners {
          margin-left: 130px;

          .title {
            font-size: 35px;
          }

          .subTitle {
            font-size: 35px;
          }

          .borders {
            height: 8px;
            width: 250px;
            margin-top: -15px;
          }

          .content {
            font-size: 24px;
          }
        }
      }
    }

    .singLand {
      .content {
        width: 100%;
        padding: 0 10px;

        .logo {
          width: 25%;
        }

        .contents {
          width: 70%;

          .contentss {
            padding: 15px 0;
            text-indent: 2em;
          }
        }
      }
    }

    .bottoms {
      .titles {
        .title {
          .button {
            font-size: 26px;
          }
        }
      }

      .bottom1 {
        .bottom_tops {
          height: 64vw;
        }
      }

      .bottom2 {
        .bottom_up,
        .bottom_down {
          .box .text-box {
            .title {
              font-size: 36px;
            }
            .content-box {
              .sub-title {
                font-size: 24px;
              }
            }
          }
        }
      }
    }
  }
}

// 社区设施标题图文问题
@media screen and (max-width: 837px) {
  .home {
    .bottoms {
      .bottom1 {
        .bottom_tops {
          height: 82vw;
        }
        .list {
          height: 700px;

          .lists {
            .list_left {
              width: 30%;
            }

            .list_right {
              width: 65%;
            }
          }

          // .lists2 {
          // }

          .lists3 {
            height: 180px;
          }

          .imgs {
            padding-bottom: 50px;

            .img_div {
              div {
                padding-top: 10px;
              }
            }
          }
        }

        .list_height1 {
          height: 570px;
        }

        .list_height2 {
          height: 520px;
        }
      }
      .bottom2 {
        .bottom_up,
        .bottom_down {
          .box .text-box {
            .title {
              font-size: 30px;
            }
            .content-box {
              .sub-title {
                font-size: 20px;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home {
    .top {
      .banner {
        .banners {
          margin-left: 70px;

          .title {
            font-size: 30px;
          }

          .subTitle {
            font-size: 30px;
          }

          .borders {
            height: 6px;
            width: 216px;
            margin-top: -13px;
          }

          .content {
            font-size: 22px;
          }
        }
      }
      .two_dimensional .two_dimensional1 img {
        width: 44px;
        height: 44px;
      }
    }
    .singLand {
      display: none;
    }

    .singLands {
      display: block;
      width: 100%;
      height: auto;
      margin-top: 50px;

      img {
        width: 20%;
        min-width: 150px;
        height: auto;
        margin-right: 10px;
      }

      .contentss {
        padding: 10px 0;
        font-size: 16px;
        text-indent: 2em;
        list-style: 40px;
      }
    }

    .images {
      margin-bottom: 30px;
      padding: 0 20px;
      .image {
        display: none;
        .img_left {
          .img1 {
            .img_font {
              font-size: 14px;
              left: 5px;
              bottom: 5px;
            }
          }

          .img2 {
            .img_font {
              font-size: 14px;
              left: 5px;
              bottom: 5px;
            }
          }
        }

        .img_right {
          .img_font {
            font-size: 14px;
            left: 5px;
            bottom: 5px;
          }
        }
      }
      .image-mobile {
        display: block;
      }
    }

    .bottoms {
      .titles {
        .title {
          justify-content: center;
          .button {
            font-size: 24px;
            margin: 30px 10px 30px 10px;
            height: 50px;
            line-height: 50px;
          }
        }
      }
      .bottom1 {
        .bottom_tops {
          display: none;
        }
        .bottom_tops_mobiles {
          display: block;
        }
        .list {
          .imgs {
            .img_div {
              div {
                padding-top: 5px;
              }
            }
          }
        }
      }

      .bottom2 {
        .bottom_up,
        .bottom_down {
          max-height: inherit;
          .box {
            padding: 10px 0;
            .left,
            .right {
              .title {
                font-size: 24px;
              }
              width: 100%;
              padding: 10px 20px 0;
              .content-box {
                .sub-title {
                  font-size: 22px;
                }
                .content {
                  line-height: 22px;
                }
              }
            }
          }
        }
        .mobile_img {
          display: inline-block;
        }
        .web_img {
          display: none;
        }
        .bottom_up .box {
          flex-direction: column;
          padding: auto 20px;
          .left .title {
            align-self: flex-end;
          }
        }
        .bottom_down .box {
          flex-direction: column-reverse;
        }
      }
      .bottom3 {
        .bottom_titles {
          .bottom_title {
            width: 100%;
            margin: 10px 0;
            .button_img {
              margin-right: 0;
              margin-left: 10px;
              font-size: 16px;
              padding: 5px;
            }
          }
        }
        .img_lists {
          display: none;
          height: calc(31vw + 20px);
          .home_left {
            height: 40px;
            width: 40px;

            .news_icon {
              font-size: 26px;
            }
          }

          .home_right {
            height: 40px;
            width: 40px;

            .news_icon {
              font-size: 26px;
            }
          }
        }
        .img_lists_mobile {
          display: block;
          height: calc(31vw + 20px);
        }
      }
    }
  }
}

// 社区设施标题图文问题
@media screen and (max-width: 651px) {
  .home {
    .bottoms {
      .bottom1 {
        .list {
          // height: 700px;
          height: auto;

          .lists {
            justify-content: initial;
            flex-direction: column;

            .list_left {
              width: auto;
              left: auto;
              bottom: auto;
              right: 10px;
              top: 30px;
              display: block;
            }

            .list_right {
              width: auto;
              top: 0;
              right: auto;
              bottom: auto;
              display: block;

              .content {
                line-height: 22px;
              }
            }
          }

          .lists1 {
            height: calc(500px - 40vw);
          }

          .lists2 {
            height: calc(300px - 15vw);
          }

          .lists3 {
            height: calc(250px - 15vw);
          }
        }
      }
    }
  }
}

@media screen and (max-width: 560px) {
  .home {
    .top {
      .banner {
        .banners {
          margin-left: 20px;

          .title {
            font-size: 22px;
          }

          .subTitle {
            font-size: 22px;
          }

          .borders {
            height: 6px;
            width: 160px;
            margin-top: -10px;
          }

          .content {
            font-size: 16px;
          }
        }
      }
    }

    .bottoms {
      .titles {
        .title {
          .button {
            font-size: 24px;
            margin: 30px 10px 30px 10px;
            height: 50px;
            line-height: 50px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 350px) {
  .home {
    .top {
      .banner {
        .banners {
          margin-left: 10px;
        }
      }
    }

    .bottoms {
      .titles {
        .title {
          justify-content: center;

          .button {
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>
