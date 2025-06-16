<template>
  <div class="home">
    <!-- 标题内容 -->
    <div class="top">
      <!-- <div class="boxShdow"></div> -->
      <img loading="lazy" class="img_banner" src="../../assets/images/yifuyun/1.png" alt="" @load="handleImgLoad" />
      <div class="banner">
        <div class="banners">
          <div class="title">怡福荟康养小镇</div>
          <div class="subTitle">上海大型CCRC中信养老 性价比之最</div>
          <div class="borders"></div>
          <div class="content">自建约6.6万方丰富配套业态 自理公寓1609套（规划）</div>
        </div>
      </div>
      <div class="two_dimensional">
        <div class="two_dimensional1">
          <img loading="lazy" src="../../assets/images/二维码/怡福荟公众号二维码.png" alt="" />
          <div>怡福荟公众号</div>
        </div>
        <!-- <div class="two_dimensional2"><img src="../../assets/images/二维码/信悦88公众号二维码.jpg" alt="">
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
          <img loading="lazy" src="../../assets/images/yifuyun/Background.png" alt="" />
        </div>
        <div class="contents">
          <div class="contentss">
            新发展集团携手上海信养养老服务有限公司，双强联合共同打造怡福荟康养小镇。双方以星级酒店服务品质，专业的运营服务标准，共同致力于提升长者生活质量，引领上海养老行的新风尚。
          </div>
          <div class="contentss">
            怡福荟康养小镇择址临港自贸区新片区，位于大叶公路以北、申杰路以东，进则繁华，退则自然。三纵三横交通便捷，链接城芯，紧邻约70000m²生态农场，自然环境优越。
          </div>
          <div class="contentss">
            怡福荟康养小镇定位为集合公寓、餐娱、健康医疗、生态于一体的大型高端综合社区，已于2025年3月18日开园投运。
          </div>
        </div>
      </div>
    </div>
    <div class="singLands">
      <div class="img">
        <img loading="lazy" src="../../assets/images/yifuyun/Background.png" alt="" />
      </div>
      <div class="contentss">
        新发展集团携手上海信养养老服务有限公司，双强联合共同打造怡福荟康养小镇。双方以星级酒店服务品质，专业的运营服务标准，共同致力于提升长者生活质量，引领上海养老行的新风尚。
      </div>
      <div class="contentss">
        怡福荟康养小镇择址临港自贸区新片区，位于大叶公路以北、申杰路以东，进则繁华，退则自然。三纵三横交通便捷，链接城芯，紧邻约70000m²生态农场，自然环境优越。
      </div>
      <div class="contentss">
        怡福荟康养小镇定位为集合公寓、餐娱、健康医疗、生态于一体的大型高端综合社区，已于2025年3月18日开园投运。
      </div>
    </div>
    <!-- 三个图片 -->
    <div class="images">
      <div class="image">
        <div class="img_left">
          <div class="img1">
            <img loading="lazy" src="../../assets/images/yifuyun/2.png" alt="" />
            <div class="img_font">怡福荟文化中心</div>
          </div>
          <div class="img2">
            <img loading="lazy" src="../../assets/images/yifuyun/3.png" alt="" />
            <div class="img_font">怡福荟内景</div>
          </div>
        </div>
        <div class="img_right">
          <img loading="lazy" src="../../assets/images/yifuyun/4.png" alt="" />
          <div class="img_font">怡福荟康养小镇全景</div>
        </div>
      </div>
      <div class="image-mobile">
        <div class="img_top" @click="handleImageClickSingle(threeBigImg[0])">
          <img loading="lazy" :src="threeBigImg[0]" alt="" />
          <div class="img_font">怡福荟康养小镇全景</div>
        </div>
        <div class="img_bottom">
          <div class="img1" @click="handleImageClickSingle(threeBigImg[1])">
            <img loading="lazy" :src="threeBigImg[1]" alt="" />
            <div class="img_font">怡福荟文化中心</div>
          </div>
          <div class="img2" @click="handleImageClickSingle(threeBigImg[2])">
            <img loading="lazy" :src="threeBigImg[2]" alt="" />
            <div class="img_font">怡福荟内景</div>
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
          <img loading="lazy" src="../../assets/images/yifuyun/bg4.png" alt="" />
          <div class="contents">
            <div class="content">
              <div class="content_content text-indent">
                怡福荟康养小镇总占地约126000m²，总建筑面积约270000m²，容积率约1.6%，绿化率约36%。小镇分为一期和二期，分别建设一期8栋864套，二期8栋745套，小镇内实行人车分流。
              </div>
              <div class="content_content text-indent">
                小镇配备丰富生活业态及设施配套，让入住的客户开启全生态、全龄段、全新生活:
              </div>
              <div class="content_content content_content_margin">
                ·约66000m²公区配套，全维臻享生活服务。
              </div>
              <div class="content_content">
                ·医疗中心，总建筑面积约 35000m²，包括体检中心和三级康复医院(筹建中)。
              </div>
              <div class="content_content">
                ·文体中心、生活街区、小镇餐厅共计约 31000m²， 包含各类餐饮中心,文娱活动室、健身运动场馆、老年大学等。
              </div>
              <div class="content_content">
                ·北侧拥有约占地 约70000㎡农场。
              </div>
            </div>
          </div>

          <div class="go_video">
            <div>点击视频，走进怡福荟</div>
            <div class="go_icon">→</div>
          </div>
          <div class="video" id="xinyue88Video" @click="toggleVideo()">
            <video controlslist="nodownload" :src="$config.videoUrl + '/yifuyun_video.mp4'" :poster="require('../../assets/images/yifuyun/bg2.png')
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
          <div class="bottom_background"></div>
        </div>

        <div class="bottom_tops_mobiles">
          <div class="back_color">
            <div class="content">
              <div class="content_content text-indent">
                怡福荟康养小镇总占地约126000m²，总建筑面积约270000m²，容积率约1.6%，绿化率约36%。小镇分为一期和二期，分别建设一期8栋864套，二期8栋745套，小镇内实行人车分流。
              </div>
              <div class="content_content text-indent">
                小镇配备丰富生活业态及设施配套，让入住的客户开启全生态、全龄段、全新生活:
              </div>
              <div class="content_content">
                ·约66000m²公区配套，全维臻享生活服务。
              </div>
              <div class="content_content">
                ·医疗中心，总建筑面积约 35000m²，包括体检中心和三级康复医院(筹建中)。
              </div>
              <div class="content_content">
                ·文体中心、生活街区、小镇餐厅共计约 31000m²， 包含各类餐饮中心,文娱活动室、健身运动场馆、老年大学等。
              </div>
              <div class="content_content">
                ·北侧拥有约占地 约70000㎡农场。
              </div>
            </div>
          </div>
          <div class="video" id="xinyue88Video" @click="toggleVideoMobile()">
            <video controlslist="nodownload" :src="$config.videoUrl + '/yifuyun_video.mp4'" :poster="require('../../assets/images/yifuyun/bg2.png')
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
        }">
          <div class="lists">
            <div class="list_left">

              <div class="tip_left">
                <div><img loading="lazy" :src="item.content_img" alt=""></div>
                <div class="title">{{ item.title }}</div>
                <div class="title_bottom">
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="list_content">{{ item.content }}</div>

            </div>
            <div class="list_right">
              <img loading="lazy" :src="item.img_list" alt="" class="quotation" />
              <div class="content">{{ item.content1 }}</div>
            </div>
          </div>

        </div>
      </div>
      <!-- 服务亮点 -->
      <div v-if="changeReview === 1" class="bottom2">
        <div class="bottom_top">
          <div class="contents">
            <div class="p-content">
              <div class="content_content text-indent">
                上海交通大学医学院附属第九人民医院奉城分院将为社区居民开通就医绿色通道，优先安排专家会诊、住院治疗等；定期派遣医护人员到康养小镇开展健康讲座、义诊活动，普及健康知识，进行疾病筛查。为住户提供24小时急诊响应，生命防线更稳固。
              </div>
              <div class="content_content text-title">
                六大享老服务体系
              </div>
              <div class="content_content">
                小镇始终以人为本，凭借全维度六大享老服务体系，百项服务内容,满足住户的医、食、住、行、娱等需求，并丰富住户精神生活。
              </div>

            </div>
          </div>

          <img loading="lazy" src="../../assets/images/yifuyun/bg3s.png"
            @click="handleImageClickSingle('../../assets/images/yifuyun/bg3s.png')" alt="" />
        </div>
        <div class="bottom_top_mobile">
          <div class="contents">
            <div class="p-content">
              <div class="content_content text-indent">
                上海交通大学医学院附属第九人民医院奉城分院将为社区居民开通就医绿色通道，优先安排专家会诊、住院治疗等；定期派遣医护人员到康养小镇开展健康讲座、义诊活动，普及健康知识，进行疾病筛查。为住户提供24小时急诊响应，生命防线更稳固。
              </div>
              <div class="content_content text-title">
                六大享老服务体系
              </div>
              <div class="content_content">
                小镇始终以人为本，凭借全维度六大享老服务体系，百项服务内容,满足住户的医、食、住、行、娱等需求，并丰富住户精神生活。
              </div>

            </div>
          </div>
        </div>
        <div class="bottom_background"></div>
        <div class="bottom_box type1">
          <div class="title-box">
            <img :src="tips[0]" alt="">
            <div class="title-box-text">健享常伴</div>
          </div>
          <div class="box">
            <div class="left text-box">

              <div v-for="(item, index) in tipsText[0]" :key="index" class="tips-text">
                <span class="tips-text-title"><span class="tips-text-title-num"></span>{{ item.title }}</span>
                <span>{{ item.content }}</span>
              </div>
            </div>
            <div class="right">
              <div class="img">
                <img loading="lazy" :src="serviceHighlightsBigImg[0]"
                  @click="handleImageClickSingle(serviceHighlightsBigImg[0])" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_box_mobile type1s">
          <div class="bottom_box_mobile_top">
            <div class="title-box">
              <img :src="tips[0]" alt="">
              <div class="title-box-text">健享常伴</div>
            </div>
            <div class="tips-text-box">
              <div v-for="(item, index) in tipsText[0]" :key="index" class="tips-text">
                <span class="tips-text-title"><span class="tips-text-title-num"></span>{{ item.title }}</span>
                <span>{{ item.content }}</span>
              </div>
            </div>
          </div>
          <div class="img">
            <img loading="lazy" :src="serviceHighlightsBigImg[0]"
              @click="handleImageClickSingle(serviceHighlightsBigImg[0])" alt="" />
          </div>
        </div>
        <div class="bottom_box type2">
          <div class="box">
            <div class="left">
              <div class="img">
                <img loading="lazy" :src="serviceHighlightsBigImg[1]"
                  @click="handleImageClickSingle(serviceHighlightsBigImg[1])" alt="" />
              </div>
            </div>
            <div class="right text-box">

              <div v-for="(item, index) in tipsText[1]" :key="index" class="tips-text">
                <span class="tips-text-title"><span class="tips-text-title-num"></span>{{ item.title }}</span>
                <span>{{ item.content }}</span>
              </div>
            </div>
          </div>
          <div class="title-box">
            <img :src="tips[1]" alt="">
            <div class="title-box-text">尊享管家</div>
          </div>
        </div>
        <div class="bottom_box_mobile type2s">
          <div class="bottom_box_mobile_top">
            <div class="tips-text-box">
              <div v-for="(item, index) in tipsText[1]" :key="index" class="tips-text">
                <span class="tips-text-title"><span class="tips-text-title-num"></span>{{ item.title }}</span>
                <span>{{ item.content }}</span>
              </div>
            </div>
            <div class="title-box">
              <img :src="tips[1]" alt="">
              <div class="title-box-text">尊享管家</div>
            </div>
          </div>
          <div class="img">
            <img loading="lazy" :src="serviceHighlightsBigImg[1]"
              @click="handleImageClickSingle(serviceHighlightsBigImg[1])" alt="" />
          </div>
        </div>
        <div class="bottom_box type1">
          <div class="title-box">
            <img :src="tips[2]" alt="">
            <div class="title-box-text">乐享文娱</div>
          </div>
          <div class="box">
            <div class="left text-box">

              <div v-for="(item, index) in tipsText[2]" :key="index" class="tips-text">
                <span class="tips-text-title"><span class="tips-text-title-num"></span>{{ item.title }}</span>
                <span>{{ item.content }}</span>
              </div>
            </div>
            <div class="right">
              <div class="img">
                <img loading="lazy" :src="serviceHighlightsBigImg[2]"
                  @click="handleImageClickSingle(serviceHighlightsBigImg[2])" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_box_mobile type1s">
          <div class="bottom_box_mobile_top">
            <div class="title-box">
              <img :src="tips[2]" alt="">
              <div class="title-box-text">乐享文娱</div>
            </div>
            <div class="tips-text-box">
              <div v-for="(item, index) in tipsText[2]" :key="index" class="tips-text">
                <span class="tips-text-title"><span class="tips-text-title-num"></span>{{ item.title }}</span>
                <span>{{ item.content }}</span>
              </div>
            </div>
          </div>
          <div class="img">
            <img loading="lazy" :src="serviceHighlightsBigImg[2]"
              @click="handleImageClickSingle(serviceHighlightsBigImg[2])" alt="" />
          </div>
        </div>
        <div class="bottom_box type2">
          <div class="box">
            <div class="left">
              <div class="img">
                <img loading="lazy" :src="serviceHighlightsBigImg[3]"
                  @click="handleImageClickSingle(serviceHighlightsBigImg[3])" alt="" />
              </div>
            </div>
            <div class="right text-box">

              <div v-for="(item, index) in tipsText[3]" :key="index" class="tips-text">
                <span class="tips-text-title"><span class="tips-text-title-num"></span>{{ item.title }}</span>
                <span>{{ item.content }}</span>
              </div>
            </div>
          </div>
          <div class="title-box">
            <img :src="tips[3]" alt="">
            <div class="title-box-text">星享生活</div>
          </div>
        </div>
        <div class="bottom_box_mobile type2s">
          <div class="bottom_box_mobile_top">
            <div class="tips-text-box">
              <div v-for="(item, index) in tipsText[3]" :key="index" class="tips-text">
                <span class="tips-text-title"><span class="tips-text-title-num"></span>{{ item.title }}</span>
                <span>{{ item.content }}</span>
              </div>
            </div>
            <div class="title-box">
              <img :src="tips[3]" alt="">
              <div class="title-box-text">星享生活</div>
            </div>
          </div>
          <div class="img">
            <img loading="lazy" :src="serviceHighlightsBigImg[3]"
              @click="handleImageClickSingle(serviceHighlightsBigImg[3])" alt="" />
          </div>
        </div>
        <div class="bottom_box type1">
          <div class="title-box">
            <img :src="tips[4]" alt="">
            <div class="title-box-text">安享智能</div>
          </div>
          <div class="box">
            <div class="left text-box">

              <div v-for="(item, index) in tipsText[4]" :key="index" class="tips-text">
                <span class="tips-text-title"><span class="tips-text-title-num"></span>{{ item.title }}</span>
                <span>{{ item.content }}</span>
              </div>
            </div>
            <div class="right">
              <div class="img">
                <img loading="lazy" :src="serviceHighlightsBigImg[4]"
                  @click="handleImageClickSingle(serviceHighlightsBigImg[4])" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_box_mobile type1s">
          <div class="bottom_box_mobile_top">
            <div class="title-box">
              <img :src="tips[4]" alt="">
              <div class="title-box-text">安享智能</div>
            </div>
            <div class="tips-text-box">
              <div v-for="(item, index) in tipsText[4]" :key="index" class="tips-text">
                <span class="tips-text-title"><span class="tips-text-title-num"></span>{{ item.title }}</span>
                <span>{{ item.content }}</span>
              </div>
            </div>
          </div>
          <div class="img">
            <img loading="lazy" :src="serviceHighlightsBigImg[4]"
              @click="handleImageClickSingle(serviceHighlightsBigImg[4])" alt="" />
          </div>
        </div>
      </div>
      <!-- 云参观 -->
      <div v-if="changeReview === 2" class="bottom3">
        <div class="bottom_titles">
          <div class="bottom_title">
            <div class="button_img" @click="changeImgReviews(0)" :class="{ active: changeImgReview === 0 }">
              园区环境
            </div>
            <div class="button_img" @click="changeImgReviews(1)" :class="{ active: changeImgReview === 1 }">
              建筑实景
            </div>
            <div class="button_img" @click="changeImgReviews(2)" :class="{ active: changeImgReview === 2 }">
              服务设施
            </div>
            <div class="button_img" @click="changeImgReviews(3)" :class="{ active: changeImgReview === 3 }">
              生活场景
            </div>
            <div class="button_img" @click="changeImgReviews(4)" :class="{ active: changeImgReview === 4 }">
              项目照片
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
import VisitReserve from "../../components/visitReserve.vue"

export default {
  name: "xinyue88",
  head: {
    title: "怡福荟",
    meta: [
      { charset: "utf-8" },
      {
        hid: "keywords",
        name: "keywords",
        content: "怡福荟，怡福荟养老院，养老院",
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
        require("~/assets/images/yifuyun/4.png"),
        require("~/assets/images/yifuyun/2.png"),
        require("~/assets/images/yifuyun/3.png"),
      ],
      // 社区设施
      bottom1: {
        0: {
          title: "文化中心",
          content_img: require("../../assets/images/yifuyun/tip1.png"),
          content: "约31000m²文体中心，含游泳馆、羽毛球馆、图书馆、老年大学、KTV、咖啡厅等。",
          content1: "文体中心恒温泳池",

          img_list: require("../../assets/images/yifuyun/5.png")
        },
        1: {
          title: "餐饮中心",
          content_img: require("../../assets/images/yifuyun/tip2.png"),
          content: '约11000m²美食中心，含自选餐厅、粤菜私宴、地中海餐厅，人均25-150元左右。',
          content1: "餐饮中心大厅",
          img_list: require("../../assets/images/yifuyun/6.png")
        },
        2: {
          title: "智慧系统",
          content_img: require("../../assets/images/yifuyun/tip3.png"),
          content: '爱讯科技智慧养老平台，支持健康监测、安全定位、紧急救助等功能。',
          content1: "养生坊健康检测",
          img_list: require("../../assets/images/yifuyun/7.png")
        },
      },
      // 服务亮点要放大的图片
      serviceHighlightsBigImg: [
        require("~/assets/images/yifuyun/8.png"),
        require("~/assets/images/yifuyun/9.png"),
        require("~/assets/images/yifuyun/10.png"),
        require("~/assets/images/yifuyun/11.png"),
        require("~/assets/images/yifuyun/12.png"),
      ],
      // 服务亮点图标
      tips: [
        require("~/assets/images/yifuyun/tip4.png"),
        require("~/assets/images/yifuyun/tip5.png"),
        require("~/assets/images/yifuyun/tip6.png"),
        require("~/assets/images/yifuyun/tip7.png"),
        require("~/assets/images/yifuyun/tip8.png"),
      ],
      // 服务亮点文字
      tipsText: {
        0: {
          0: {
            title: "健康评估",
            content: "提供身体评估、疾病风险评估、生活方式分析等。"
          },
          1: {
            title: "健康档案",
            content: "建立专属个人健康档案，提供健康管理服务。"
          },
          2: {
            title: "个性化健康指导方案",
            content: "根据健康情况，制定个性化健康指导方案，并给予解读指导。"
          },
          3: {
            title: "健康监测",
            content: "血压、骨密度、肺功能检测。"
          },
          4: {
            title: "健康关怀",
            content: "定期入户拜访，记录健康状况。"
          },
          5: {
            title: "健康咨询",
            content: "答疑解惑，健康宣教，预防疾病。"
          },
          6: {
            title: "常见慢性病健康管理",
            content: "高血压、糖尿病、痛风等建议。"
          },
          7: {
            title: "健康宣教讲座",
            content: "开展营养、慢病、运动、心理、中医保健、节气养生等健康宣教。"
          },
          8: {
            title: "医务代办服务",
            content: "线上医保本更新、代配药等。"
          }
        },
        1: {
          0: {
            title: "入住关怀",
            content: "30天入住适应关怀。"
          },
          1: {
            title: "亲情维护",
            content: "建立家属联络簿，及时沟通。"
          },
          2: {
            title: "关怀访视",
            content: "进行上门拜访，协助各项生活需求。"
          },
          3: {
            title: "代办服务",
            content: "代缴费、代订报、代叫车、代收件等。"
          },
          4: {
            title: "全天候管家服务",
            content: "解决生活、健康、餐饮、娱乐、出行、维修等问题。"
          },
          5: {
            title: "24小时呼叫响应服务",
            content: "室内和一卡通均设有紧急呼叫设备，提供7*24小时的呼叫响应服务。"
          },
          6: {
            title: "紧急就医陪同",
            content: "呼叫120及联系家属，专人陪同，代理入院。"
          },
          7: {
            title: "房屋代管服务",
            content: "定期开窗通风，检查电器设备安全性。"
          },
          8: {
            title: "住院探视",
            content: "专职管家探视、问候。"
          }
        },
        2: {
          0: {
            title: "生日祝福",
            content: "举办集体生日会活动。"
          },
          1: {
            title: "主题活动",
            content: "举办文化类、益智类、艺术类、教学类、竞技类等主题活动。"
          },
          2: {
            title: "节庆活动",
            content: "举办节日庆祝活动。"
          },
          3: {
            title: "趣味俱乐部",
            content: "建立俱乐部，引导住户成为俱乐部领袖。"
          },
          4: {
            title: "小镇志愿行动队",
            content: "定期开展志愿活动。"
          },
          5: {
            title: "社区共治服务",
            content: "建立专项居民委员会，举办沟通会。"
          },
          6: {
            title: "畅享空间",
            content: "设有六坊功能空间。"
          }
        },
        3: {
          0: {
            title: "入户打扫",
            content: "每周免费清洁服务。"
          },
          1: {
            title: "精保洁",
            content: "每月室内细节卫生进行清理。"
          },
          2: {
            title: "床上用品更换",
            content: "每月床上用品更换。"
          },
          3: {
            title: "社区接驳",
            content: "提供电瓶车接驳服务。"
          },
          4: {
            title: "社区定点班车",
            content: "就近地铁站、医院、商业设施接送服务。"
          },
          5: {
            title: "维修服务",
            content: "公共设施和公共空间的日常维修、保养。"
          },
          6: {
            title: "定期检查电器安全",
            content: "每季入户对电器设备安全检查。"
          },
          7: {
            title: "除虫除害",
            content: "公共区域定期消杀灭四害。"
          },
          8: {
            title: "营养菜单配置",
            content: "邀请养生专家制定菜单，每周菜谱提前公示。"
          },
          9: {
            title: "生日长寿面服务",
            content: "生日免费提供生日长寿面。"
          },
          10: {
            title: "停车场服务",
            content: "免费提供地下车库停车位。"
          }
        },
        4: {
          0: {
            title: "紧急呼叫系统",
            content: "公区及室内均安装紧急呼叫按钮及拉绳。"
          },
          1: {
            title: "智能一卡通",
            content: "具有开门、充值消费等功能。"
          },
          2: {
            title: "安静社区环境",
            content: "实施人车分流。"
          },
          3: {
            title: "智能网络平台",
            content: "可通过微信端掌握社区最新资讯。"
          },
          4: {
            title: "无障碍通行服务",
            content: "打造无障碍社区和无障碍救护通道。"
          },
          5: {
            title: "公共配套网络覆盖 ",
            content: "公共区域无线网络全覆盖。"
          },
          6: {
            title: "室内报警系统检查 ",
            content: "定期检查烟感、紧急呼叫按钮等。"
          }
        },
      },
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
        pid: 10,
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
          width: 805px;
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
          border-bottom: #CDAC76 solid 4px;
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
              // color: #fff;
              font-size: 16px;
              width: 48%;
              line-height: 30px;

            }

            .text-indent {
              text-indent: 2em;
            }

            .content_content_margin {
              margin-top: 20px;
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

        .bottom_background {
          width: 100%;
          height: 10px;
          background-color: #936F43;
        }
      }

      // 移动端
      .bottom_tops_mobiles {
        display: none;
        font-size: 16px;
        line-height: 22px;

        .back_color {
          background-image: url("../../assets/images/yifuyun/bg4.png");
          padding: 20px;
          // color: white;

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



      .list {
        width: 100%;
        // height: 480px;
        height: 650px;
        display: flex;
        align-items: center;

        .lists {
          width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          height: 400px;


          .list_left {
            width: 48%;
            height: 70%;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            img {
              width: 55px;
            }

            .title {
              font-size: 36px;
              // padding: 5px 10px;
              padding: 10px 0 2px 0;

            }

            .title_bottom {
              // padding-bottom: 200px;

              div {
                width: 140px;
                height: 2px;
                background-color: #E9E9E9;
                margin-bottom: 2px;
              }
            }

            .list_content {
              // padding-top: 200px;
              // background-color: #ba000e;
              font-size: 16px;
            }

          }

          .list_right {
            width: 50%;

            img {
              width: 100%;
              aspect-ratio: 370 / 265;
              object-fit: cover;
            }

            .content {
              font-size: 16px;
            }
          }
        }

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



      .highlight {
        background-color: rgb(255, 255, 255);
        // background-color: red;
      }
    }

    .bottom2 {
      .bottom_top {
        position: relative;
        width: 100%;
        // height: 23vw;



        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
          .p-content {
            width: 1200px;

            .content_content {
              width: 45%;
              line-height: 30px;
              font-size: 16px;

            }

            .text-indent {
              text-indent: 2em;

            }

            .text-title {
              padding-top: 20px;
            }
          }
        }

      }

      .bottom_top_mobile {
        display: none;
        width: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }



        .contents {
          width: 100%;
          display: flex;
          justify-content: center;
          background-size: cover;
          background-image: url("../../assets/images/yifuyun/bg4.png");

          padding: 20px;

          .p-content {

            .content_content {
              line-height: 30px;
              font-size: 16px;

            }

            .text-indent {
              text-indent: 2em;

            }

            .text-title {
              padding-top: 20px;
            }
          }
        }
      }

      .bottom_background {
        width: 100%;
        height: 10px;
        background-color: #936F43;
      }

      .bottom_box {
        max-height: 480px;
        display: flex;
        justify-content: center;

        .title-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100px;
          align-items: center;

          img {
            width: 50px;
            margin-bottom: 10px;
          }

          .title-box-text {
            font-size: 20px;
            // writing-mode: vertical-rl !important;
            /* 竖排，从右到左排列（传统中文排版方向） */
            text-orientation: upright !important;
            /* 保持文字直立（默认会旋转英文/数字） */
            width: 20px;
            text-align: center;
            color: #CFAC74;
          }
        }

        .box {
          max-width: 1200px;
          padding: 50px 0;
          flex: 1;
          display: flex;
          justify-content: space-between;

          .text-box {
            display: flex;
            flex-direction: column;
            // justify-content: space-between;
            justify-content: center;



            .tips-text {
              line-height: 26px;
              font-size: 16px;


              .tips-text-title {
                color: #CFAC74;
                margin-right: 5px;
                line-height: 1.2;

                .tips-text-title-num {
                  height: 5px;
                  width: 5px;
                  border-radius: 5px;
                  background-color: #CFAC74;
                  display: inline-block;
                  vertical-align: middle;
                  position: relative;
                  top: -1px; // 微调位置
                  margin-right: 5px;
                }
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
            }
          }
        }

        &.type1 {
          background-color: #fff;
          padding-right: 100px;

          .box {
            // .text-box .title::before {
            //   background-image: url("../../assets/images/xinfuxinyue/xinyue88/title_bg_gray.png");
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
              width: 55%;
            }
          }
        }

        &.type2 {
          // background-image: url("../../assets/images/xinfuxinyue/xinyue88/bg.jpg");
          background-color: #F5F5F5;
          background-size: contain;
          padding-left: 100px;

          .box {
            // color: #fff;

            .text-box .title {
              // color: #fff;
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
              width: 55%;
            }

            .right {
              width: 40%;
            }
          }
        }
      }

      .bottom_box_mobile {
        width: 100%;
        padding: 50px 10px;
        display: flex;
        flex-direction: column;
        display: none;

        .bottom_box_mobile_top {
          display: flex;
          padding-bottom: 20px;

          .title-box {

            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100px;
            align-items: center;

            img {
              width: 50px;
              margin-bottom: 10px;
            }

            .title-box-text {
              font-size: 20px;
              text-orientation: upright !important;
              /* 保持文字直立（默认会旋转英文/数字） */
              width: 20px;
              text-align: center;
              color: #CFAC74;
            }
          }

          .tips-text-box {
            width: calc(100% - 100px);

            .tips-text {
              line-height: 26px;
              font-size: 16px;


              .tips-text-title {
                color: #CFAC74;
                margin-right: 5px;
                line-height: 1.2;

                .tips-text-title-num {
                  height: 5px;
                  width: 5px;
                  border-radius: 5px;
                  background-color: #CFAC74;
                  display: inline-block;
                  vertical-align: middle;
                  position: relative;
                  top: -1px; // 微调位置
                  margin-right: 5px;
                }
              }
            }
          }


        }

        .img {
          width: 100%;

          img {
            width: 100%;
            height: auto;
          }
        }
      }

      .type1s {
        background-color: #fff;
      }

      .type2s {
        background-color: #F5F5F5;
      }
    }

    .bottom3 {
      width: 100%;
      // background-color: rgb(42, 42, 42);
      background-image: url("../../assets/images/yifuyun/bg4.png");
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
            background-color: #B58249;
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
            width: 645px;
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
            height: 350px;
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
          .box {
            width: calc(100% - 100px);
            padding: 50px 10px;
          }


        }

        .type1 {
          padding-right: 0 !important;
        }

        .type2 {
          padding-left: 0 !important;
        }


      }
    }
  }
}

// 社区设施视频文字
@media screen and (max-width: 1150px) {
  .home {

    .bottoms {
      .bottom1 {
        .bottom_tops {
          .contents {
            .content {
              .content_content {
                line-height: 24px;
              }

              .content_content_margin {
                margin-top: 0px;
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
            width: 565px;
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

          .go_video {
            display: none;
          }
        }

        .list {
          // height: auto;
          height: 430px;

          .lists {
            // height: 350px;
            height: auto;

            .list_left {
              height: 250px;
            }

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

        // .list_height1 {
        //   height: 600px;
        // }

        // .list_height2 {
        //   height: 560px;
        // }
      }

      .bottom2 {
        .bottom_top {
          height: 37vw;
        }

        .bottom_box {
          display: none;
        }

        .bottom_box_mobile {
          display: block;
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

// 社区设施视频文字
@media screen and (max-width: 865px) {
  .home {


    .bottoms {
      .bottom1 {
        .bottom_tops {
          display: none;
        }

        .bottom_tops_mobiles {
          display: block;
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
          // height: auto;
          // height: 460px;

          .lists {
            // height: 300px;

            .list_left {
              // width: 30%;
            }

            .list_right {
              // width: 65%;
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
        .bottom_top {
          .contents {
            .p-content {
              .content_content {
                line-height: 22px;
              }

              .text-title {
                padding-top: 10px;
              }
            }
          }
        }

        .bottom_box {
          max-height: inherit;


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
            width: 485px;
            margin-top: -13px;
          }

          .content {
            font-size: 22px;
          }
        }
      }

      .two_dimensional .two_dimensional1 img {
        width: 40px;
        height: 40px;
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
              // width: auto;
              // left: auto;
              // bottom: auto;
              // // right: 10px;
              // right: auto;
              // top: 30px;
              // position: static;
              // display: block;
              flex-wrap: nowrap;
              flex-direction: row;
              width: 100%;
              display: flex;
              justify-content: space-between;
              z-index: 9;
              height: auto;

              .tip_left {
                width: 30%;

                .title_bottom {

                  div {
                    width: 82px;

                  }
                }
              }

              .list_content {
                width: 65%;
              }

              .title {
                font-size: 20px;
                margin-bottom: 10px;
              }
            }

            .list_right {
              // width: auto;
              // top: 0;
              // right: auto;
              // bottom: auto;
              // display: block;
              // position: static;
              width: 100%;
              padding-top: 10px;

              .quotation {
                // display: none;
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
        .bottom_top {
          display: none;
        }

        .bottom_top_mobile {
          display: block;
        }

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
        // .list {
        //   // height: 700px;
        //   height: auto;

        //   .lists {
        //     justify-content: initial;
        //     flex-direction: column;

        //     .list_left {
        //       width: auto;
        //       left: auto;
        //       bottom: auto;
        //       // right: 10px;
        //       right: auto;
        //       top: 30px;
        //       display: block;
        //       z-index: 9;
        //     }

        //     .list_right {
        //       width: auto;
        //       top: 0;
        //       right: auto;
        //       bottom: auto;
        //       display: block;

        //       .content {
        //         line-height: 22px;
        //       }
        //     }
        //   }

        //   .lists1 {
        //     // height: calc(500px - 50vw);
        //   }

        //   .lists2 {
        //     // height: calc(300px - 15vw);
        //   }

        //   .lists3 {
        //     // height: calc(250px - 15vw);
        //   }
        // }
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
            width: 355px;
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

@media screen and (max-width: 450px) {
  .home {
    .top {
      .img_banner {
        height: 56vw;
        width: 100vw;
        object-fit: cover;
      }

      .banner {
        .banners {
          margin-top: -50px;
          margin-left: 20px;

          .title {
            font-size: 20px;
          }

          .subTitle {
            font-size: 18px;
          }

          .borders {
            height: 6px;
            width: 292px;
            margin-top: -8px;
          }

          .content {
            font-size: 16px;
          }
        }
      }
    }

    .bottoms {
      .bottom1 {
        .list {
          .lists {
            .list_left {
              .tip_left {
                img {
                  width: 40px
                }

                .title {
                  font-size: 18px;
                }
              }
            }
          }
        }
      }

      .bottom2 {
        .bottom_box_mobile {
          padding-left: 20px !important;
          padding-right: 20px !important;
        }

        .type1s {
          padding: 20px 10px;

          .bottom_box_mobile_top {
            display: flex;
            flex-direction: column;

            .title-box {
              align-items: center;
              flex-direction: row;
              width: 100%;

              img {
                width: 40px;
                margin-right: 10px;
              }

              .title-box-text {
                font-size: 18px;
                text-orientation: none;
                width: 100%;
                text-align: left;
              }
            }

            .tips-text-box {
              width: 100%;
            }
          }
        }

        .type2s {
          padding: 20px 10px;

          .bottom_box_mobile_top {
            display: flex;
            flex-direction: column-reverse;

            .title-box {
              align-items: center;
              // flex-direction: row;
              width: 100%;
              // justify-content: flex-end;
              flex-direction: row-reverse;

              img {
                width: 40px;
                margin-left: 10px;
              }

              .title-box-text {
                font-size: 18px;
                text-orientation: none;
                width: 100%;
                text-align: right;
              }
            }

            .tips-text-box {
              width: 100%;
            }
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
