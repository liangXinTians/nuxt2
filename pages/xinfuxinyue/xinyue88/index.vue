<template>
  <div class="home">
    <!-- 标题内容 -->
    <div class="top">
      <div class="boxShdow"></div>
      <img loading="lazy" src="../../../assets/images/xinfuxinyue/xinyue88/1.jpg" alt="" @load="handleImgLoad" />
      <div class="banner">
        <div class="banners">
          <div class="title">信悦88</div>
          <div class="subTitle">杭州城芯 都市医养商综合体</div>
          <div class="borders"></div>
          <div class="content">吴山脚下 西子湖畔</div>
        </div>
      </div>
      <div class="two_dimensional">
        <div class="two_dimensional1">
          <img loading="lazy" src="../../../assets/images/二维码/信悦88公众号二维码.jpg" alt="" />
          <div>信悦88公众号</div>
        </div>
        <!-- <div class="two_dimensional2"><img src="../../../assets/images/二维码/信悦88公众号二维码.jpg" alt="">
          <div>信悦88视频号</div>
        </div> -->
      </div>
    </div>
    <!-- 参观预约 -->
    <VisitReserve ref="visitReserve" />
    <!-- logo和文字-->
    <div class="singLand">
      <div class="content">
        <div class="logo">
          <img loading="lazy" src="../../../assets/images/xinfuxinyue/xinyue88/logo.png" alt="" />
        </div>
        <div class="contents">
          <div class="contentss">
            信悦88是中信兴业养老（中信集团子公司）旗下高品质养老项目，是中信养老首个融医疗、养老、商业于一体的都市综合体项目。项目以医养结合为主体，为独立生活、介助介护、专业护理（含记忆照护）三类长者提供都市型高品质养老服务。
          </div>
          <div class="contentss">
            信悦88，位居杭州市城市原点的延安路88号，西子湖畔，吴山山麓，拥揽城市繁华和湖山风光。项目距离城隍阁、河坊街、西湖十景之一的“柳浪闻莺”等热门景点步行可达，距浙一、浙二、省中医院等三甲医院仅2公里。
          </div>
          <div class="contentss">
            基于得天独厚的地理位置，信悦88不仅服务杭州本地长者，亦为长三角地区的长者提供短期旅居服务。
          </div>
        </div>
      </div>
    </div>
    <div class="singLands">
      <div class="img">
        <img loading="lazy" src="../../../assets/images/xinfuxinyue/xinyue88/logo.png" alt="" />
      </div>
      <div class="contentss">
        信悦88是中信兴业养老（中信集团子公司）旗下高品质养老项目，是中信养老首个融医疗、养老、商业于一体的都市综合体项目。项目以医养结合为主体，为独立生活、介助介护、专业护理（含记忆照护）三类长者提供都市型高品质养老服务。
      </div>
      <div class="contentss">
        信悦88，位居杭州市城市原点的延安路88号，西子湖畔，吴山山麓，拥揽城市繁华和湖山风光。项目距离城隍阁、河坊街、西湖十景之一的“柳浪闻莺”等热门景点步行可达，距浙一、浙二、省中医院等三甲医院仅2公里。
      </div>
      <div class="contentss">
        基于得天独厚的地理位置，信悦88不仅服务杭州本地长者，亦为长三角地区的长者提供短期旅居服务。
      </div>
    </div>
    <!-- 三个图片 -->
    <div class="images">
      <div class="image">
        <div class="img_left">
          <div class="img1">
            <img loading="lazy" src="../../../assets/images/xinfuxinyue/xinyue88/2.jpg" alt="" />
            <div class="img_font">吴山城隍阁</div>
          </div>
          <div class="img2">
            <img loading="lazy" src="../../../assets/images/xinfuxinyue/xinyue88/3.jpg" alt="" />
            <div class="img_font">西湖风光</div>
          </div>
        </div>
        <div class="img_right">
          <img loading="lazy" src="../../../assets/images/xinfuxinyue/xinyue88/4.jpg" alt="" />
          <div class="img_font">屋顶花园</div>
        </div>
      </div>
      <div class="image-mobile">
        <div class="img_top" @click="handleImageClickSingle(threeBigImg[0])">
          <img loading="lazy" :src="threeBigImg[0]" alt="" />
          <div class="img_font">屋顶花园</div>
        </div>
        <div class="img_bottom">
          <div class="img1" @click="handleImageClickSingle(threeBigImg[1])">
            <img loading="lazy" :src="threeBigImg[1]" alt="" />
            <div class="img_font">吴山城隍阁</div>
          </div>
          <div class="img2" @click="handleImageClickSingle(threeBigImg[2])">
            <img loading="lazy" :src="threeBigImg[2]" alt="" />
            <div class="img_font">西湖风光</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部切换 -->
    <div class="bottoms">
      <div class="titles">
        <div class="title">
          <div class="button" @mouseenter="changeReviews(0)" :class="{ active: changeReview === 0 }">
            社区设施
          </div>
          <div class="button" @mouseenter="changeReviews(1)" :class="{ active: changeReview === 1 }">
            服务亮点
          </div>
          <div class="button" @mouseenter="changeReviews(2)" :class="{ active: changeReview === 2 }">
            云参观
          </div>
        </div>
      </div>
      <!-- 社区设施 -->
      <div v-if="changeReview === 0" class="bottom1" id="bottom1">
        <div class="bottom_tops">
          <img loading="lazy" src="../../../assets/images/xinfuxinyue/xinyue88/bg.jpg" alt="" />
          <div class="contents">
            <div class="content">
              <div class="content_content">
                信悦88原系中信银行杭州分行大楼，欧式城堡式建筑。大楼一共六层，1-2层为商场，3-6层为高品质康养公寓、照护机构和护理院。
              </div>
              <div class="content_content">
                总建筑面积约2.3万平方米，包含76套自理公寓、150张护理床位（医保定点单位）。充分考虑适老化和去机构化，生活、娱乐、休闲、运动、医疗、康复等设施一应俱全。
              </div>
            </div>
          </div>
          <!-- <div class="video">
            <img loading="lazy" style="width: 100%;" src="../../../assets/images/xinfuxinyue/xinyue88/5.jpg" alt="">
          </div> -->
          <div class="go_video">
            <div>点击视频，走进信悦88</div>
            <div class="go_icon">→</div>
          </div>
          <div class="video" id="xinyue88Video" @click="toggleVideo()">
            <video controlslist="nodownload" :src="$config.videoUrl + '/信悦88空间宣传片高清.mp4'" :poster="require('../../../assets/images/xinfuxinyue/xinyue88/4.png')
              " loop :controls="showControls" id="myVideos1" playsinline="true" webkit-playsinline="true">
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
                信悦88原系中信银行杭州分行大楼，欧式城堡式建筑。大楼一共六层，1-2层为商场，3-6层为高品质康养公寓、照护机构和护理院。
              </div>
              <div class="content_content">
                总建筑面积约2.3万平方米，包含76套自理公寓、150张护理床位（医保定点单位）。充分考虑适老化和去机构化，生活、娱乐、休闲、运动、医疗、康复等设施一应俱全。
              </div>
            </div>
          </div>
          <div class="video" id="xinyue88Video" @click="toggleVideoMobile()">
            <video controlslist="nodownload" :src="$config.videoUrl + '/信悦88空间宣传片高清.mp4'" :poster="require('../../../assets/images/xinfuxinyue/xinyue88/4.png')
              " loop :controls="showControls" id="myVideos1_mobile">
              Your browser does not support the video tag.
            </video>
            <div class="play_button" id="playButtons1_mobile" @click="toggleVideoMobile()">
              <a-icon type="play-circle" />
            </div>
          </div>
        </div>
        <div v-for="(item, index) in bottom1" :key="index" :class="{
          list: true,
          highlight: index == 0 || index == 2 || index == 4,
          list_height1: index == 1,
          list_height2: index == 2,
        }">
          <div class="lists" :class="{
            lists1: index == 0,
            lists2: index == 1,
            lists3: index == 2,
          }">
            <div class="list_left">
              <div :class="{
                title: true,
                title1: index == 0,
                title2: index == 1,
                title3: index == 2,
              }">
                {{ item.title }}
              </div>
            </div>
            <div class="list_right">
              <img loading="lazy" :src="item.content_img" alt="" class="quotation" />
              <div class="content">{{ item.content1 }}</div>
              <div class="content">{{ item.content2 }}</div>
            </div>
          </div>
          <div class="imgs">
            <div v-for="(imgItem, imgIndex) in item.img_list" :key="imgIndex" class="img_div">
              <img loading="lazy" :src="imgItem.img" @click="handleImageClickSingle(imgItem.img)" alt="" />
              <div>{{ imgItem.title }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 服务亮点 -->
      <div v-if="changeReview === 1" class="bottom2">
        <div class="bottom_top">
          <img loading="lazy" :src="serviceHighlightsBigImg[0]"
            @click="handleImageClickSingle(serviceHighlightsBigImg[0])" alt="" />
        </div>
        <div class="bottom_box type1">
          <div class="box">
            <div class="left text-box">
              <div class="title">
                <img loading="lazy" src="../../../assets/images/bg_s_read.png" alt="" />专业团队
              </div>
              <div class="content-box">
                <div class="sub-title">多学科团队融合运营</div>
                <div class="content">
                  项目采用多学科团队融合运营模式，通过医生、康复师、护士、健康管理师、管家、营养师等团队的高效联动，从营养膳食、文娱活动、生活照护到健康指导、医疗康复，为长者制定个性化照护方案，实现对长者全生命周期的一站式服务。
                </div>
              </div>
            </div>
            <div class="right">
              <div class="img">
                <img loading="lazy" :src="serviceHighlightsBigImg[1]"
                  @click="handleImageClickSingle(serviceHighlightsBigImg[1])" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_box type2">
          <div class="box">
            <div class="left">
              <div class="img">
                <img loading="lazy" :src="serviceHighlightsBigImg[2]"
                  @click="handleImageClickSingle(serviceHighlightsBigImg[2])" alt="" />
              </div>
            </div>
            <div class="right text-box">
              <div class="title">
                <img loading="lazy" src="../../../assets/images/bg_s_gray.png" alt="" class="mobile_img" />
                特色康复<img loading="lazy" src="../../../assets/images/bg_s_gray.png" alt="" class="web_img" />
              </div>
              <div class="content-box">
                <div class="sub-title">
                  聚焦三大特色康复，打造个性化康复计划
                </div>
                <div class="content">
                  依托项目内专业的医疗团队，以中西医学、慢病管理、康复护理、老年常见病为治疗方向，聚焦脑卒中康复、阿兹海默康复、骨折术后康复三种特色康复项目。为长者提供从疾病预防、健康管理、基本诊断到治疗、康复的多方位健康保障。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_box type1">
          <div class="box">
            <div class="left text-box">
              <div class="title">
                <img loading="lazy" src="../../../assets/images/bg_s_read.png" alt="" />认知症专区
              </div>
              <div class="content-box">
                <div class="sub-title">国际认知症照护单元</div>
                <div class="content">
                  专业的认知症康复训练，依据空间环境、长者日常生活、营养膳食、身心健康管理、照护支援五大维度，通过多种非药物疗法，鼓励长者找到认同感、归属感，减缓认知衰退速度，提高长者及家属的生活质量。并建立个性化的服务方案，更精准的提供照护服务。
                </div>
              </div>
            </div>
            <div class="right">
              <div class="img">
                <img loading="lazy" :src="serviceHighlightsBigImg[3]"
                  @click="handleImageClickSingle(serviceHighlightsBigImg[3])" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_box type2">
          <div class="box">
            <div class="left">
              <div class="img">
                <img loading="lazy" :src="serviceHighlightsBigImg[4]"
                  @click="handleImageClickSingle(serviceHighlightsBigImg[4])" alt="" />
              </div>
            </div>
            <div class="right text-box">
              <div class="title">
                <img loading="lazy" src="../../../assets/images/bg_s_gray.png" alt="" class="mobile_img" />
                疗休养服务<img loading="lazy" src="../../../assets/images/bg_s_gray.png" alt="" class="web_img" />
              </div>
              <div class="content-box">
                <div class="sub-title">枕居山水之间，探索疗愈之旅</div>
                <div class="content">
                  依托项目优渥的地理位置及完善的内部设施，为前来杭州短期居住的客户提供康复疗养、健康管理、休闲度假、养生修炼于一体的杭州深度康养旅居生活。
                </div>
                <div class="content">
                  信悦88推出的焕新之旅产品是医养结合式的亚健康管理服务，有多种周期可选择（7天/14天），可根据客户个人身体状况与健康管理需求进行定制，涵盖健康体检、中医调理、抗衰服务、养生修炼、中西医理疗等特色服务。
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
            <div class="button_img" @click="changeImgReviews(0)" :class="{ active: changeImgReview === 0 }">
              康养公寓
            </div>
            <div class="button_img" @click="changeImgReviews(1)" :class="{ active: changeImgReview === 1 }">
              周边配套
            </div>
            <div class="button_img" @click="changeImgReviews(2)" :class="{ active: changeImgReview === 2 }">
              院区环境
            </div>
            <div class="button_img" @click="changeImgReviews(3)" :class="{ active: changeImgReview === 3 }">
              生活场景
            </div>
            <div class="button_img" @click="changeImgReviews(4)" :class="{ active: changeImgReview === 4 }">
              建筑实景
            </div>
            <div class="button_img" @click="changeImgReviews(5)" :class="{ active: changeImgReview === 5 }">
              护理院
            </div>
            <div class="button_img" @click="changeImgReviews(6)" :class="{ active: changeImgReview === 6 }">
              服务设施
            </div>
          </div>
        </div>
        <div class="img_lists" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
          <div @click="lastImg" v-if="Object.keys(bottom3s).length > 2 && !showShadow" class="home_left">
            <a-icon type="left" class="news_icon" />
          </div>
          <div @click="nextImg" v-if="Object.keys(bottom3s).length > 2 && !showShadow" class="home_right">
            <a-icon type="right" class="news_icon" />
          </div>

          <div class="img_list" id="imgList">
            <div class="imgs" v-for="(item, index) in bottom3s" :key="item.newIndex">
              <div class="img">
                <img loading="lazy" :src="$config.apiFileUrl + item.file_path" alt="" :id="'imgs-' + index"
                  @click="handleImageClick(index)" />
                <div @click="lastImgs" v-if="showShadow" class="home_lefts">
                  <a-icon type="left" class="news_icon" />
                </div>
                <div @click="nextImgs" v-if="showShadow" class="home_rights">
                  <a-icon type="right" class="news_icon" />
                </div>
                <div id="cross" v-if="showShadow" @click="handleImageClicks()">
                  ×
                </div>
                <div class="shadow" v-if="showShadow" @click="handleImageClicks()"></div>
              </div>
              <div class="font">{{ item.title }}</div>
            </div>
          </div>
        </div>
        <!-- 移动端显示 -->
        <ImgSwiper class="img_lists_mobile" :imagesGroup="bottom3s" @handleImageClickMobile="handleImageClickMobile">
        </ImgSwiper>
      </div>
    </div>
    <!-- 图片预览 -->
    <bigImg :imgList="bigImgList" :activeImgIndex="activeImgIndex" v-if="showBigImg"
      @changeShowBigImg="changeShowBigImg" :show.sync="showBigImg" :distinguishingMark="distinguishingMark"></bigImg>
  </div>
</template>

<script>
import VisitReserve from "../../../components/visitReserve.vue"

export default {
  name: "xinyue88",
  head: {
    title: "信悦88",
    meta: [
      { charset: "utf-8" },
      {
        hid: "keywords",
        name: "keywords",
        content: "信悦88，信悦88养老院，信悦88社区，杭州养老院，养老院",
      },
      {
        hid: "description",
        name: "description",
        content:
          "信悦88是中信兴业养老（中信集团子公司）旗下高品质养老项目，是中信养老首个融医疗、养老、商业于一体的都市综合体项目。项目以医养结合为主体，为独立生活、介助介护、专业护理（含记忆照护）三类长者提供都市型高品质养老服务。",
      },
    ],
  },
  data () {
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
      showImg: true,
      // 三个图片
      threeBigImg: [
        require("~/assets/images/xinfuxinyue/xinyue88/4.jpg"),
        require("~/assets/images/xinfuxinyue/xinyue88/2.jpg"),
        require("~/assets/images/xinfuxinyue/xinyue88/3.jpg"),
      ],
      // 社区设施
      bottom1: {
        0: {
          title: "自理公寓",
          content_img: require("../../../assets/images/xinlantiandi/content_img/1.png"),
          content1:
            "“信悦88”的屋顶，被誉为“杭州醉美露台”，傍晚可以远眺夕阳西下里的西湖绵延湖山。巧妙构思“动静”双中庭，巴洛克透明圆顶，室内超大挑高共享活动空间。开设悦学堂、悦画坊等多种高品质课程，并配置影音室、卡拉ok室、台球室等设施。",
          content2:
            "信悦餐厅可以为对患有高血脂、心脏病、痛风等对餐饮有特殊要求的长者，提供如地中海饮食、梅奥饮食等营养套餐，保证饮食健康。",
          img_list: [
            {
              img: require("../../../assets/images/xinfuxinyue/xinyue88/6.jpg"),
              title: "接待中心",
            },
            {
              img: require("../../../assets/images/xinfuxinyue/xinyue88/7.jpg"),
              title: "膳食餐厅",
            },
            {
              img: require("../../../assets/images/xinfuxinyue/xinyue88/8.png"),
              title: "房间环境",
            },
          ],
        },
        1: {
          title: "护理院",
          content_img: require("../../../assets/images/xinlantiandi/content_img/2.png"),
          content1:
            "信颐护理院是由杭州中信养老服务有限公司出资设立的医保定点医疗机构，集医疗、康复、护理、安宁照护于一体的高端型护理院。本院以康复治疗和专业护理为特色，聘请三甲医院主任医师为护理院常年顾问，一对一制定康复护理计划，内设康复科、内科、中医内科、医学影像科、检验科等科室和认知症、骨折术后等特色病区，为患者提供颐、养、康、护一站式高端医疗服务。",
          img_list: [
            {
              img: require("../../../assets/images/xinfuxinyue/xinyue88/9.jpg"),
              title: "公区大厅",
            },
            {
              img: require("../../../assets/images/xinfuxinyue/xinyue88/10.jpg"),
              title: "怀旧区",
            },
            {
              img: require("../../../assets/images/xinfuxinyue/xinyue88/11.jpg"),
              title: "房间照",
            },
          ],
        },
      },
      // 服务亮点要放大的图片
      serviceHighlightsBigImg: [
        require("~/assets/images/xinfuxinyue/xinyue88/12.jpg"),
        require("~/assets/images/xinfuxinyue/xinyue88/13.png"),
        require("~/assets/images/xinfuxinyue/xinyue88/14.jpg"),
        require("~/assets/images/xinfuxinyue/xinyue88/15.png"),
        require("~/assets/images/xinfuxinyue/xinyue88/17.jpg"),
      ],
      showControls: false,
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
      // 点开图片后的阴影层
      showShadow: false,
    }
  },
  async mounted () {
    const response = await this.$axios.post(
      this.$config.apiBaseUrl + "/cloudTourList",
      {
        pid: 4,
      }
    )
    this.bottom3 = response.data.data
    console.log("bottom3", this.bottom3)
    const bottom3ss = this.bottom3.slice(0, 1)[0].media_details
    this.bottom3s = Object.values(bottom3ss)
    this.bottom3s.forEach((obj, index) => {
      obj.newIndex = index
    })
    console.log("bottom3s", this.bottom3s)
    this.imgIndex = this.bottom3s.length

    this.mobileFunction()
    window.addEventListener("resize", this.mobileFunction)
  },
  watch: {},
  methods: {
    handleImgLoad () {
      this.$nextTick(() => {
        this.$refs.visitReserve?.mobileFunctions()
      })
    },
    // 宽度变化
    mobileFunction () {
      let screenWidth =
        window?.innerWidth ||
        document?.documentElement.scrollWidth ||
        document.body?.clientWidth
      if (screenWidth < 768 || this.isMobile()) {
        this.mobile = true
      } else {
        this.mobile = false
      }
    },
    isMobile () {
      let flag = window.navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      return flag
    },
    // 切换模块
    changeReviews (index) {
      this.changeReview = index
      if (index == 0) {
        this.showImg = true
      } else {
        this.showImg = true
        this.showControls = false
      }
    },
    // 点击视频的时候
    toggleVideo () {
      if (this.showControls) {
        return
      } else {
        const video = document.getElementById("myVideos1")
        const playButton = document.getElementById("playButtons1")
        this.showImg = false
        this.showControls = true
        playButton.style.display = "none"

        const checkImg = document.getElementById("xinyue88Video")
        const cross = document.getElementById("crossss1")
        checkImg.classList.add("changeImgs")
        cross.style.display = "block"

        //禁止滚动条滚动
        let widthBar = 17,
          root = document.documentElement
        if (typeof window.innerWidth == "number") {
          widthBar = window.innerWidth - root.clientWidth
        }
        root.style.overflow = "hidden"
        root.style.borderRight = widthBar + "px solid transparent"

        // 解决第一次点击视频出现的问题
        setTimeout(() => {
          video.play()
        }, 100)
      }
    },
    toggleVideoMobile () {
      const video = document.getElementById("myVideos1_mobile")
      const playButton = document.getElementById("playButtons1_mobile")
      if (this.showControls) {
        return
      } else {
        this.showImg = false
        this.showControls = true
        playButton.style.display = "none"
        // 解决第一次点击视频出现的问题
        setTimeout(() => {
          video.play()
        }, 100)
      }
    },
    // 视频叉号
    handleImageClickss () {
      const checkImg = document.getElementById("xinyue88Video")
      const cross = document.getElementById("crossss1")
      checkImg.classList.remove("changeImgs")
      cross.style.display = "none"
      // console.log("视频缩小")
      const video = document.getElementById("myVideos1")
      video.pause()
      const playButton = document.getElementById("playButtons1")
      playButton.style.display = "block"

      // 恢复滚动条
      let root = document.documentElement
      root.style.overflow = ""
      root.style.borderRight = ""
      this.showControls = false
    },
    // 切换图片模块
    changeImgReviews (index) {
      this.changeImgReview = index
      const bottom3ss = this.bottom3.slice(index, index + 1)[0].media_details

      this.bottom3s = Object.values(bottom3ss)
      this.bottom3s.forEach((obj, index) => {
        obj.newIndex = index
      })
      console.log("bottom3s", this.bottom3s)
      this.imgIndex = Object.keys(this.bottom3s).length

      console.log("imgIndex", this.imgIndex)
      const imgList = document.getElementById("imgList")
      imgList.style.left = "0"
      this.bottom3_id = 0
      console.log("bottom3_id", this.bottom3_id)
      console.log("imgList.style.left", imgList.style.left)
    },
    nextImg () {
      const imgList = document.getElementById("imgList")
      this.bottom3_id += 1
      if (this.imgIndex < 3) {
        imgList.style.left = "0"
      }
      if (this.imgIndex === 3) {
        this.bottom3_id -= 1
        imgList.style.left = `calc(-${40 * this.bottom3_id + 20}vw - ${10 * this.bottom3_id
          }px)`
      } else if (this.bottom3_id === this.imgIndex - 3) {
        imgList.style.left = `calc(-${40 * this.bottom3_id + 20}vw - ${10 * this.bottom3_id
          }px)`
        // this.bottom3_id -= 1
      } else if (this.bottom3_id > this.imgIndex - 3) {
        // imgList.style.left = `calc(-${40 * this.bottom3_id + 20}vw - ${10 * this.bottom3_id}px)`
        this.bottom3_id -= 1
      } else {
        imgList.style.left = `calc(-${40 * this.bottom3_id}vw - ${10 * this.bottom3_id
          }px)`
        console.log("imgList", imgList.style.left)
      }
      console.log("bottom3_id", this.imgIndex, this.bottom3_id)
    },
    lastImg () {
      const imgList = document.getElementById("imgList")
      this.bottom3_id -= 1
      if (this.bottom3_id < 0) {
        this.bottom3_id += 1
        imgList.style.left = "0"
      } else {
        imgList.style.left = `calc(-${40 * this.bottom3_id}vw - ${10 * this.bottom3_id
          }px)`
      }
      console.log("bottom3_id", this.imgIndex, this.bottom3_id)
    },
    handleImageClick (index) {
      if (!this.isImageZoomed) {
        this.isImageZoomed = true
        this.imgListIndex = index
        const checkImg = document.getElementById("imgs-" + index)
        // const cross = document.getElementById("crosss")
        checkImg.classList.add("changeImg")
        // cross.style.display = "block"
        this.showShadow = true
        //禁止滚动条滚动
        let widthBar = 17,
          root = document.documentElement
        if (typeof window.innerWidth == "number") {
          widthBar = window.innerWidth - root.clientWidth
        }
        root.style.overflow = "hidden"
        root.style.borderRight = widthBar + "px solid transparent"
      }
    },
    handleImageClickMobile (index) {
      this.distinguishingMark = 0
      this.showBigImg = true
      this.activeImgIndex = index
      this.bigImgList = this.bottom3s
    },
    changeShowBigImg () {
      this.showBigImg = false
      this.activeImgIndex = 0
      console.log("关闭大图")
    },
    // 项目其他图片点击图片放大
    handleImageClickSingle (img) {
      if (this.isMobile()) {
        this.distinguishingMark = 1
        this.showBigImg = true
        this.activeImgIndex = 0
        this.bigImgList = [img]
      }
    },
    handleImageClicks () {
      if (this.isImageZoomed) {
        const checkImg = document.getElementById("imgs-" + this.imgListIndex)
        // const cross = document.getElementById("crosss")
        checkImg.classList.remove("changeImg")
        // cross.style.display = "none"

        this.showShadow = false
        // 恢复滚动条
        let root = document.documentElement
        root.style.overflow = ""
        root.style.borderRight = ""
        this.isImageZoomed = false
        this.imgListIndex = ""
      }
    },
    // 鼠标进入图片区域
    handleMouseOver () {
      // 明确事件处理程序为非 passive
      // if (Object.keys(this.bottom3s).length < 3) {
      document.addEventListener("wheel", this.handleMouseWheel, {
        passive: false,
      })
    },
    // 鼠标离开图片区域
    handleMouseOut () {
      // 明确事件处理程序为非 passive
      // if (Object.keys(this.bottom3s).length < 3) {
      document.removeEventListener("wheel", this.handleMouseWheel, {
        passive: false,
      })
      // }
    },
    // 鼠标在图片list区域滚轮滚动
    handleMouseWheel (event) {
      const imgList = document.getElementById("imgList")
      const rect = imgList.getBoundingClientRect()
      const isInImgArea =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom

      if (isInImgArea && Object.keys(this.bottom3s).length > 2) {
        event.preventDefault() // 只在滚动区域内阻止默认行为
        const delta = Math.sign(event.deltaY)
        if (delta < 0) {
          this.lastImg()
        } else if (delta > 0) {
          this.nextImg()
        }
      }
    },
    lastImgs () {
      if (this.imgListIndex > 0) {
        const checkImg = document.getElementById("imgs-" + this.imgListIndex)
        checkImg.classList.remove("changeImg")
        this.imgListIndex -= 1
        const checkImgs = document.getElementById("imgs-" + this.imgListIndex)
        checkImgs.classList.add("changeImg")
        console.log("imgListIndex", this.imgListIndex)
      } else {
        return
      }
    },
    nextImgs () {
      if (this.imgListIndex < this.imgIndex - 1) {
        const checkImg = document.getElementById("imgs-" + this.imgListIndex)
        checkImg.classList.remove("changeImg")
        this.imgListIndex += 1
        const checkImgs = document.getElementById("imgs-" + this.imgListIndex)
        checkImgs.classList.add("changeImg")
        console.log("imgListIndex", this.imgListIndex)
      } else {
        return
      }
    },
  },
  computed: {},
  beforeDestroy () {
    window.removeEventListener("resize", this.mobileFunction)
    document.removeEventListener("wheel", this.handleMouseWheel, {
      passive: false,
    })
  },
  components: { VisitReserve },
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  font-family: "Source Han Serif SC VF";
  margin: 0 auto;

  video {
    vertical-align: middle;
  }

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
          width: 615px;
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
        margin-left: 10px;

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
          width: 55%;
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

        :nth-child(3) {
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

    .bottom1 {
      .bottom_tops {
        width: 100%;
        position: relative;
        width: 100%;
        // height: auto;
        height: 29.5vw;

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

            .content_content {
              color: #fff;
              font-size: 16px;
              width: 48%;
              line-height: 30px;
              text-indent: 2em;
              margin-bottom: 10px;
            }
          }
        }

        // 公共视频播放属性
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

        .go_video {
          position: absolute;
          right: 52%;
          bottom: 10px;
          color: #fff;
          font-size: 16px;

          .go_icon {
            display: flex;
            justify-content: flex-end;
          }
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
          background-image: url("../../../assets/images/xinfuxinyue/xinyue88/bg.jpg");
          padding: 20px;
          color: white;

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

      .color1 {
        display: flex;
        width: 100%;

        .color1s {
          height: 10px;
          width: 50%;
          background-color: rgb(254, 225, 0);
        }

        .color1ss {
          height: 10px;
          width: 50%;
          background-color: rgb(34, 181, 168);
        }
      }

      .color2 {
        height: 4px;
        width: 100%;
        background-color: rgb(230, 22, 115);
      }

      .list {
        width: 100%;
        height: 750px;

        .lists {
          width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          position: relative;
          height: 300px;
          margin-bottom: 50px;

          .list_left {
            width: 50%;
            position: absolute;
            left: 0;
            bottom: 0;

            .title {
              font-size: 20px;
              padding: 5px 10px;
              // width: 125px;
              text-align: center;
              // background-color: rgb(254, 225, 0);
              margin-bottom: 5px;
            }

            .title1,
            .title2 {
              color: #fff;
              width: 120px;
              background-color: #6bb2f0;
            }
          }

          .list_right {
            width: 50%;
            position: absolute;
            right: 0;
            bottom: 0;

            img {
              width: 55px;
              margin: 30px 0 20px 0;
            }

            .content {
              font-size: 16px;
              line-height: 26px;
              text-indent: 2em;
            }
          }
        }

        // .lists1 {
        // }

        // .lists2 {
        //   height: 230px;
        // }

        .lists3 {
          height: 190px;
        }

        .imgs {
          width: 1200px;
          display: flex;
          margin: 0 auto;
          justify-content: space-between;
          padding-bottom: 100px;

          .img_div {
            width: 32%;

            img {
              width: 100%;
              height: 300px;
              object-fit: cover;
            }

            div {
              padding-top: 15px;
            }
          }
        }
      }

      // .list_height1 {
      //   height: 680px;
      // }

      // .list_height2 {
      //   height: 640px;
      // }

      .highlight {
        background-color: rgb(255, 255, 255);
        // background-color: red;
      }
    }

    .bottom2 {
      .bottom_top {
        position: relative;
        width: 100%;
        height: 21vw;

        .changeImgs {
          position: fixed;
          top: 120px;
          left: 50%;
          transform: translateX(-50%);
          height: 40vw;
          width: 65vw;
          z-index: 9;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .imgShdow {
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.3);
        }

        .contents {
          width: 100%;
          display: flex;
          justify-content: center;
          position: absolute;
          top: 50%;
          left: 50%;

          transform: translate(-50%, -50%);
          // height: 750px;

          .title_content {
            width: 1200px;
            // margin: 0 auto;
            // position: absolute;
            // top: 50%;
            // transform: translateY(-50%);
            color: #fff;

            .content {
              width: 48%;
              line-height: 30px;
              font-size: 16px;
              text-indent: 2em;
            }
          }
        }
      }

      .bottom_box {
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
              // height: 40px;
              // line-height: 40px;
              width: fit-content;
              z-index: 2;
              display: flex;
              align-items: center;
              font-weight: 700;

              img {
                width: 15px;
                height: 15px;
              }

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
            }
          }
        }

        &.type1 {
          background-color: #fff;

          .box {
            // .text-box .title::before {
            //   background-image: url("../../../assets/images/xinfuxinyue/xinyue88/title_bg_gray.png");
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

        &.type2 {
          background-image: url("../../../assets/images/xinfuxinyue/xinyue88/bg.jpg");
          background-size: contain;

          .box {
            color: #fff;

            .text-box .title {
              color: #fff;
              // text-align: right;
              align-self: flex-end;

              .mobile_img {
                display: none;
              }

              img {
                margin-left: 5px;
                margin-bottom: 18px;
              }
            }

            .left {
              width: 50%;
            }

            .right {
              width: 40%;
            }
          }
        }
      }
    }

    .bottom3 {
      width: 100%;
      // background-color: rgb(42, 42, 42);
      background-image: url("../../../assets/images/xinfuxinyue/xinyue88/bg.jpg");
      background-size: cover;

      .bottom_titles {
        width: 100%;
        display: flex;
        justify-content: center;

        .bottom_title {
          width: 1200px;
          display: flex !important;
          margin: 60px 0 30px 0;
          flex-wrap: wrap;

          .button_img {
            font-size: 20px;
            padding: 5px 10px;
            color: #fff;
            margin-right: 20px;
            cursor: pointer;
          }

          .active {
            background-color: #4284bd;
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
              color: #fff;
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
            width: 490px;
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
        .bottom_top {
          height: 30vw;
        }

        .bottom_box {
          &.type1 .box {
            .left {
              width: 48%;

              .title {
                font-size: 38px;
              }
            }
          }

          &.type2 .box {
            .right {
              width: 48%;

              .title {
                font-size: 38px;
              }
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
            width: 430px;
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
          height: 35vw;
        }

        .list {
          height: auto;

          // .lists {
          // }

          .imgs {
            padding-bottom: 50px;

            .img_div {
              div {
                padding-top: 10px;
              }
            }
          }
        }

        // .list_height1 {
        //   height: 600px;
        // }

        // .list_height2 {
        //   height: 560px;
        // }
      }

      .bottom2 {
        .bottom_top {
          height: 40vw;
        }

        .background {
          padding: 0 10px;

          .title {
            font-size: 36px;
            padding: 60px 0 40px 0;
          }

          .content {
            width: 100%;

            .contents {
              padding: 20px;

              .content_title {
                font-size: 26px;
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
      .titles .title {
        justify-content: center;
      }

      .bottom1 {
        .list {
          height: auto;

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
            padding-bottom: 10px;

            .img_div {
              div {
                padding-top: 10px;
              }
            }
          }
        }

        // .list_height1 {
        //   height: 570px;
        // }

        // .list_height2 {
        //   height: 520px;
        // }
      }

      .bottom2 {
        .bottom_box {
          max-height: inherit;

          &.type1 {
            .box {
              flex-direction: column;

              .left,
              .right {
                box-sizing: border-box;
                width: 100%;
                padding: 20px;

                .title {
                  align-self: flex-end;
                  font-size: 30px;
                }

                .content-box .sub-title {
                  font-size: 20px;
                }
              }
            }
          }

          &.type2 {
            .box {
              flex-direction: column-reverse;

              .left,
              .right {
                box-sizing: border-box;
                width: 100%;
                padding: 20px;

                .title {
                  align-self: flex-end;
                  font-size: 30px;
                }

                .content-box .sub-title {
                  font-size: 20px;
                }
              }
            }
          }
        }
      }

      .bottom3 {
        .bottom_titles {
          .bottom_title {
            width: 100%;

            .button_img {
              margin-right: 10px;
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
            width: 370px;
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
    }

    .images {
      padding: 0 20px;
      margin-bottom: 30px;

      .image {
        display: none;
        /*  .img_left {
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
        } */
      }

      .image-mobile {
        display: block;
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

      .bottom1 {
        .bottom_tops {
          display: none;
        }

        .bottom_tops_mobiles {
          display: block;
        }

        // .list {
        //   .imgs {
        //     .img_div {
        //       div {
        //         padding-top: 5px;
        //       }
        //     }
        //   }
        // }
        .list {
          // height: 700px;
          height: auto;
          padding: 0 20px;

          .lists {
            justify-content: initial;
            flex-direction: column;
            height: auto;
            padding-top: 10px;
            margin-bottom: 10px;

            .list_left {
              width: auto;
              left: auto;
              bottom: auto;
              // right: 10px;
              right: auto;
              top: 30px;
              position: static;
              display: block;
              z-index: 9;

              .title {
                font-size: 20px;
                margin-bottom: 10px;
              }
            }

            .list_right {
              width: auto;
              top: 0;
              right: auto;
              bottom: auto;
              display: block;
              position: static;

              .quotation {
                display: none;
              }

              .content {
                line-height: 22px;
              }
            }
          }

          .imgs .img_div {
            font-size: 14px;

            img {
              height: 20vw;
            }
          }

          .lists1 {
            // height: calc(500px - 45vw);
          }

          .lists2 {
            // height: calc(300px - 15vw);
          }

          .lists3 {
            // height: calc(250px - 15vw);
          }
        }
      }

      .bottom2 {
        .bottom_box {
          .box {
            padding: 10px 0;
          }

          &.type1 {
            .box {

              .left,
              .right {
                .title {
                  font-size: 24px;
                  margin-bottom: 5px;
                }

                .content-box .sub-title {
                  font-size: 22px;
                }
              }
            }
          }

          &.type2 {
            .box {

              .left,
              .right {
                .title {
                  font-size: 24px;
                  margin-bottom: 5px;

                  .web_img {
                    display: none;
                  }

                  .mobile_img {
                    display: inline-block;
                  }
                }

                .content-box .sub-title {
                  font-size: 22px;
                }
              }
            }
          }
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
              // right: 10px;
              right: auto;
              top: 30px;
              display: block;
              z-index: 9;
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
            // height: calc(500px - 50vw);
          }

          .lists2 {
            // height: calc(300px - 15vw);
          }

          .lists3 {
            // height: calc(250px - 15vw);
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
            width: 270px;
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

      .bottom2 {
        .bottom_top {
          height: 46vw;
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
