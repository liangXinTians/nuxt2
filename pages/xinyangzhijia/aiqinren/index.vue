<template>
  <div class="home">
    <!-- 标题内容 -->
    <div class="top">
      <div class="boxShdow"></div>
      <img
        loading="lazy"
        src="../../../assets/images/xinyangzhijia/aiqinren/1s.jpg"
        alt=""
        @load="handleImgLoad"
      />
      <div class="banner">
        <div class="banners">
          <div class="title">信养之家</div>
          <div class="subTitle">爱亲仁护理院</div>
          <div class="borders"></div>
          <div class="content">机构连锁 医保定点 24小时全方位照护</div>
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
            信养之家爱亲仁护理院（医保定点）位处杨浦区北外滩区核心区域，由上海市卫健委批准设置的，集医疗、康复、护理、临终关怀于一体的高品质现代化护理院。2023年康复门诊开业，以朴实、深刻而睿智的医学思想为众多长者提供了高质量的医疗技术。
          </div>
          <div class="contentss">
            目前护理院为上海市医保定点单位、上海市杨浦区控江医院老年医学医康养护医联体、上海交通大学全球自体粪菌库爱亲仁护理院工作站、上海交通大学肠道菌群移植（FMT）质控中心爱亲仁护理院工作站、上海交通大学全球自体粪菌库中信集团爱亲仁站、上海交通大学IBD诊治中心定点护理院、上海市老年友善医院、老年康复联盟理事单位。以专业、优质的服务，助力更多长者享受健康舒适的养老生活。
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
        信养之家爱亲仁护理院（医保定点）位处杨浦区北外滩区核心区域，由上海市卫健委批准设置的，集医疗、康复、护理、临终关怀于一体的高品质现代化护理院。2023年康复门诊开业，以朴实、深刻而睿智的医学思想为众多长者提供了高质量的医疗技术。
      </div>
      <div class="contentss">
        目前护理院为上海市医保定点单位、上海市杨浦区控江医院老年医学医康养护医联体、上海交通大学全球自体粪菌库爱亲仁护理院工作站、上海交通大学肠道菌群移植（FMT）质控中心爱亲仁护理院工作站、上海交通大学全球自体粪菌库中信集团爱亲仁站、上海交通大学IBD诊治中心定点护理院、上海市老年友善医院、老年康复联盟理事单位。以专业、优质的服务，助力更多长者享受健康舒适的养老生活。
      </div>
    </div>
    <!-- 三个图片 -->
    <div class="images">
      <div class="image">
        <div class="img_left">
          <div class="img1">
            <img
              loading="lazy"
              src="../../../assets/images/xinyangzhijia/aiqinren/2.jpg"
              alt=""
            />
            <div class="img_font">一楼-放射科-B超室</div>
          </div>
          <div class="img2">
            <img
              loading="lazy"
              src="../../../assets/images/xinyangzhijia/aiqinren/3.jpg"
              alt=""
            />
            <div class="img_font">一楼-检验科-检验室</div>
          </div>
        </div>
        <div class="img_right">
          <img
            loading="lazy"
            src="../../../assets/images/xinyangzhijia/aiqinren/4.jpg"
            alt=""
          />
          <div class="img_font">住院部-房型-豪华两人间</div>
        </div>
      </div>
      <div class="image-mobile">
        <div class="img_top" @click="handleImageClickSingle(threeBigImg[0])">
          <img loading="lazy" :src="threeBigImg[0]" alt="" />
          <div class="img_font">住院部-房型-豪华两人间</div>
        </div>
        <div class="img_bottom">
          <div class="img1" @click="handleImageClickSingle(threeBigImg[1])">
            <img loading="lazy" :src="threeBigImg[1]" alt="" />
            <div class="img_font">一楼-放射科-B超室</div>
          </div>
          <div class="img2" @click="handleImageClickSingle(threeBigImg[2])">
            <img loading="lazy" :src="threeBigImg[2]" alt="" />
            <div class="img_font">一楼-检验科-检验室</div>
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
                传承信养之家经营理念，利用小组团空间设计生活单元，将社交、动静区域、餐厅穿插厨房融会贯通，不仅把小型活动场景融入居家模式，在保持个人私密空间的同时，也把活力的一面引入居家动线。化整为零，精细化、提供小半径活动，空间与环境落到细微处的设计点滴，为了实现更高品质的24h生活照护与护理服务。
              </div>
              <div class="content_content">
                院内设有内科、外科、中医科、康复医学科、医学影像科、检验科等科室，并配备精湛的医疗团队。高标准个性化餐饮，智能化多功能助浴设备、先进的康复理疗设备。高品质的生活照护及专业护理打造，以两人VIP房为主，开放床位173张。为长者们提供医康养护一站式高品质医疗服务。
              </div>
              <!-- logo部分 -->
              <!-- <div class="logo">
                <img loading="lazy"
                  src="../../../assets/images/xinyangzhijia/bg_l_gold.png"
                  alt=""
                />
              </div> -->
            </div>
          </div>
          <!-- <div class="go_video">
            <div>点击视频，走进爱亲仁护理院</div>
            <div class="go_icon">→</div>
          </div> -->
          <div class="video">
            <img
              loading="lazy"
              style="width: 100%; height: 100%"
              :src="bottom1Img"
              alt=""
            />
          </div>
          <!-- <div class="video" id="aiqinrenVideo"
            @click="toggleVideo()">
            <video src="/信养之家宝山大场养老院.m4v" loop id="myVideos1"
              :poster="require('../../../assets/images/xinyangzhijia/aiqinren/5.jpg')" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <div class="play_button" id="playButtons1">
              <a-icon type="play-circle" />
            </div>
          </div>
          <div id="crossss1" class="crossss" @click="handleImageClickss()">
            ×
          </div> -->
        </div>
        <div class="bottom_tops_mobiles">
          <div class="back_color">
            <div class="content">
              <div class="content_content">
                传承信养之家经营理念，利用小组团空间设计生活单元，将社交、动静区域、餐厅穿插厨房融会贯通，不仅把小型活动场景融入居家模式，在保持个人私密空间的同时，也把活力的一面引入居家动线。化整为零，精细化、提供小半径活动，空间与环境落到细微处的设计点滴，为了实现更高品质的24h生活照护与护理服务。
              </div>
              <div class="content_content">
                院内设有内科、外科、中医科、康复医学科、医学影像科、检验科等科室，并配备精湛的医疗团队。高标准个性化餐饮，智能化多功能助浴设备、先进的康复理疗设备。高品质的生活照护及专业护理打造，以两人VIP房为主，开放床位173张。为长者们提供医康养护一站式高品质医疗服务。
              </div>
              <!-- logo部分 -->
              <!-- <div class="logo">
                <img loading="lazy"
                  src="../../../assets/images/xinyangzhijia/bg_l_gold.png"
                  alt=""
                />
              </div> -->
            </div>
          </div>
          <div class="img">
            <img
              loading="lazy"
              style="width: 100%; height: 100%"
              @click="handleImageClickSingle(bottom1Img)"
              :src="bottom1Img"
              alt=""
            />
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
                <div class="sub-title">市区内、高品质、专科化护理院</div>
                <div class="content">
                  外部地理环境优越，内部医康养护资源齐全，同时具备中医科特色康复。除拥有专业的医护团队外，设施设备也具备一定优势，护理院拥有五星级个性化餐饮标准，主导护理院饮食的专业厨师团队均具备十年以上从业经验。众多先进的康复理疗设备，可为：长期卧床、生活不能自理的长者、慢性疾病及残障长者、脑血管疾病等神经系列疾病康复期长者、身体功能恢复期的长者、各类术后（尤其脑外科、骨科手术后）的长者、癌症晚期长者等提供较为健全的康复期护理。
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
                <div class="sub-title">提供国际认知症照护环境与服务</div>
                <div class="content">
                  全球认知症环境设计与运营顾问Smith Group
                  JJR全程咨询。参照国际标准全单间认知症单元照护，专业认知症疗法与康复服务。从居住空间的灯光布置、软装搭配、动线设计，到每月不断的针对认知症疗愈的五感手法，引入认知症患者记忆康复家园概念，采用康复训练（PT/OT/ST）+非药物干预疗法，组织琴棋书画、家庭影院、手工制作、绿植认养、手指经络操、音乐疗法等康乐活动，重建老人对生活的信心，在休闲娱乐中延缓衰老，促进康复。
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
              院区环境
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(1)"
              :class="{ active: changeImgReview === 1 }"
            >
              建筑实景
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(2)"
              :class="{ active: changeImgReview === 2 }"
            >
              护理院
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
              :key="item.Index"
            >
              <div class="img">
                <img
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
  name: "aiqinren",
  head: {
    title: "爱亲仁护理院",
    meta: [
      { charset: "utf-8" },
      {
        hid: "keywords",
        name: "keywords",
        content: "爱亲仁护理院，爱亲仁养老院，信养之家护理院，养老院，护理院",
      },
      {
        hid: "description",
        name: "description",
        content:
          "信养之家爱亲仁护理院（医保定点）位处杨浦区北外滩区核心区域，由上海市卫健委批准设置的，集医疗、康复、护理、临终关怀于一体的高品质现代化护理院。2023年康复门诊开业，以朴实、深刻而睿智的医学思想为众多长者提供了高质量的医疗技术。",
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
      changeImgReview: 0,
      // 三个图片
      threeBigImg: [
        require("~/assets/images/xinyangzhijia/aiqinren/4.jpg"),
        require("~/assets/images/xinyangzhijia/aiqinren/2.jpg"),
        require("~/assets/images/xinyangzhijia/aiqinren/3.jpg"),
      ],
      // bottom1图片
      bottom1Img: require("~/assets/images/xinyangzhijia/aiqinren/5s.jpg"),
      showImg: true,
      // 服务亮点要放大的图片
      serviceHighlightsBigImg: [
        require("~/assets/images/xinyangzhijia/aiqinren/6.jpg"),
        require("~/assets/images/xinyangzhijia/aiqinren/7.jpg"),
      ],
      // 社区设施
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
        pid: 9,
      }
    );
    this.bottom3 = response.data.data;
    console.log("bottom3", this.bottom3);
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
      }
    },
    // 点击视频的时候
    toggleVideo() {
      const video = document.getElementById("myVideos1");
      const playButton = document.getElementById("playButtons1");
      this.showImg = false;
      if (video.paused) {
        video.play();
        playButton.style.display = "none";
      } else {
        video.pause();
        playButton.style.display = "block";
      }

      const checkImg = document.getElementById("youyouxinfuVideo1");
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
    },
    // 视频叉号
    handleImageClickss(type) {
      const checkImg = document.getElementById("aiqinrenVideo");
      const cross = document.getElementById("crossss1");
      checkImg.classList.remove("changeImgs");
      cross.style.display = "none";
      // console.log("视频缩小")
      const video = document.getElementById("myVideos1");
      video.pause();
      const playButton = document.getElementById("playButtons1");
      playButton.style.display = "block";

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
        obj.newIndex = index;
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
          width: 302px;
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
        // margin-right: 10px;

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
        // background-color: #FFF8DC;
        background-color: rgb(174, 182, 202);

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
          background-color: rgb(174, 182, 202);
          padding: 20px;
          color: black;
          .content {
            .content_content {
              text-indent: 2em;
              margin: 10px 0;
            }
          }
        }
        .img {
          width: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            aspect-ratio: 4 / 3;
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
        background-color: rgb(174, 182, 202);

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
      background-color: rgb(174, 182, 202);
      // background-color: #FFF8DC;
      background-size: cover;
      .bottom_titles {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .bottom_title {
          width: 1200px;
          display: flex;
          margin: 60px 0 30px 0;

          .button_img {
            font-size: 20px;
            padding: 5px 10px;
            color: black;
            margin-right: 20px;
            cursor: pointer;
          }

          .active {
            // background-color: #FFD700;
            background-color: rgb(133, 93, 139);
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
            width: 246px;
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
        padding: 0 10px;

        .logo {
          width: 20%;

          img {
            width: 100%;
          }
        }

        .contents {
          width: 70%;

          .contentss {
            list-style: 40px;
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
            width: 216px;
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
        .list {
          height: 700px;

          // .lists {
          // }

          .lists2 {
            height: 230px;
          }

          .lists3 {
            height: 220px;
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
          height: 600px;
        }

        .list_height2 {
          height: 560px;
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
            width: 186px;
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
          .box {
            padding: 10px 0;
            .left,
            .right {
              .title {
                font-size: 24px;
                margin-bottom: 10px;
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
            width: 136px;
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
