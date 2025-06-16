<template>
  <div class="home">
    <!-- 标题内容 -->
    <div class="top">
      <div class="boxShdow"></div>
      <img
        loading="lazy"
        src="../../../assets/images/xinfuxinyue/youyouxinfu/1s.jpg"
        alt=""
        @load="handleImgLoad"
      />
      <div class="banner">
        <div class="banners">
          <div class="title">由由信福</div>
          <div class="subTitle">内中环 都市医养综合体</div>
          <div class="borders"></div>
          <div class="content">2022年浦东新区重大民生实事项目</div>
        </div>
      </div>
      <div class="two_dimensional">
        <div class="two_dimensional1">
          <img
            loading="lazy"
            src="../../../assets/images/二维码/由由信福二维码.jpg"
            alt=""
          />
          <div>由由信福公众号</div>
        </div>
        <!-- <div class="two_dimensional2"><img loading="lazy" src="../../../assets/images/二维码/由由信福二维码.jpg" alt="">
          <div>由由信福视频号</div>
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
            src="../../../assets/images/xinfuxinyue/youyouxinfu/logo.png"
            alt=""
          />
        </div>
        <div class="contents">
          <div class="contentss">
            由由信福养老院，上海由由集团投资建设，中信养老运营管理。是上海市浦东新区2022年重大民生实事工程，上海市中心城区(中环内)规模最大的综合性养老项目，上海市中心城区(中环内)唯一联通三甲医院的养老项目。
          </div>
          <div class="contentss">
            由由信福养老院，位于下南路1288弄(高科西路路口)，浦东内中环，7/13号线双地铁正对山姆会员店，与上海第九人民医院浦东分院一墙之隔。
          </div>
          <div class="contentss">
            由由信福养老院，已于2023年4月28日开园投运，院区内设护理院（设立中）、联通三甲医院(九院浦东分院)、实现“医疗+康复+养老”服务闭环，是以“高龄自理、高龄护理、医养结合为特色的持续照料型社区。
          </div>
        </div>
      </div>
    </div>
    <div class="singLands">
      <div class="img">
        <img
          loading="lazy"
          src="../../../assets/images/xinfuxinyue/youyouxinfu/logo.png"
          alt=""
        />
      </div>
      <div class="contentss">
        由由信福养老院，上海由由集团投资建设，中信养老运营管理。是上海市浦东新区2022年重大民生实事工程，上海市中心城区(中环内)规模最大的综合性养老项目，上海市中心城区(中环内)唯一联通三甲医院的养老项目。
      </div>
      <div class="contentss">
        由由信福养老院，位于下南路1288弄(高科西路路口)，浦东内中环，7/13号线双地铁正对山姆会员店，与上海第九人民医院浦东分院一墙之隔。
      </div>
      <div class="contentss">
        由由信福养老院，已于2023年4月28日开园投运，院区内设护理院（设立中）、联通三甲医院(九院浦东分院)、实现“医疗+康复+养老”服务闭环，是以“高龄自理、高龄护理、医养结合为特色的持续照料型社区。
      </div>
    </div>
    <!-- 三个图片 -->
    <div class="images">
      <div class="image">
        <div class="img_left">
          <div class="img1">
            <img
              loading="lazy"
              src="../../../assets/images/xinfuxinyue/youyouxinfu/2.png"
              alt=""
            />
            <div class="img_font">护理区小组团</div>
          </div>
          <div class="img2">
            <img
              loading="lazy"
              src="../../../assets/images/xinfuxinyue/youyouxinfu/3.png"
              alt=""
            />
            <div class="img_font">邻里四友会客厅-画友集</div>
          </div>
        </div>
        <div class="img_right">
          <img
            loading="lazy"
            src="../../../assets/images/xinfuxinyue/youyouxinfu/4.png"
            alt=""
          />
          <div class="img_font">院区外立面</div>
        </div>
      </div>
      <div class="image-mobile">
        <div class="img_top" @click="handleImageClickSingle(threeBigImg[0])">
          <img loading="lazy" :src="threeBigImg[0]" alt="" />
          <div class="img_font">院区外立面</div>
        </div>
        <div class="img_bottom">
          <div class="img1" @click="handleImageClickSingle(threeBigImg[1])">
            <img loading="lazy" :src="threeBigImg[1]" alt="" />
            <div class="img_font">护理区小组团</div>
          </div>
          <div class="img2" @click="handleImageClickSingle(threeBigImg[2])">
            <img loading="lazy" :src="threeBigImg[2]" alt="" />
            <div class="img_font">邻里四友会客厅-画友集</div>
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
          <img
            loading="lazy"
            src="../../../assets/images/xinfuxinyue/youyouxinfu/banner11.png"
            alt=""
          />
          <div class="contents">
            <div class="content">
              <div class="content_content">
                由由信福养老院，总占地约31亩，总建筑面积约7万平米，地上建筑面积大约5.2万平米，园区共有5栋楼，1-2号楼为高龄自理区，3-4号楼为高龄护理区，5号楼为会所。规划床位1251张，其中包括254套生活单元、249床护理单元、502床老年护理院（设立中）。
              </div>
            </div>
          </div>
          <div class="go_video">
            <div>点击视频，走进由由信福</div>
            <div class="go_icon">→</div>
          </div>
          <div class="video" id="youyouxinfuVideo1" @click="toggleVideo()">
            <video
              :src="$config.videoUrl + '/youyou_video_one.mp4'"
              controlslist="nodownload"
              :poster="
                require('../../../assets/images/xinfuxinyue/youyouxinfu/video_img.png')
              "
              loop
              :controls="showControls"
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
                由由信福养老院，总占地约31亩，总建筑面积约7万平米，地上建筑面积大约5.2万平米，园区共有5栋楼，1-2号楼为高龄自理区，3-4号楼为高龄护理区，5号楼为会所。规划床位1251张，其中包括254套生活单元、249床护理单元、502床老年护理院（设立中）。
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_tops_mobiles_video">
          <div
            class="video"
            id="youyouxinfuVideo1"
            @click="toggleMobileVideo()"
          >
            <video
              :src="$config.videoUrl + '/youyou_video_one.mp4'"
              controlslist="nodownload"
              :poster="
                require('../../../assets/images/xinfuxinyue/youyouxinfu/video_img.png')
              "
              loop
              :controls="showControls"
              id="myVideos1_mobile"
            >
              Your browser does not support the video tag.
            </video>
            <div
              class="play_button"
              id="playButtons1_mobile"
              @click="toggleMobileVideo()"
            >
              <a-icon type="play-circle" />
            </div>
          </div>
        </div>
        <div class="color1">
          <div class="color1s"></div>
          <div class="color1ss"></div>
        </div>
        <div class="color2"></div>
        <div
          v-for="(item, index) in bottom1"
          :key="index"
          :class="{
            list: true,
            highlight: index == 0 || index == 2 || index == 4,
            list_height1: index == 1,
            list_height2: index == 2,
          }"
        >
          <div
            class="lists"
            :class="{
              lists1: index == 0,
              lists2: index == 1,
              lists3: index == 2,
            }"
          >
            <div class="list_left">
              <div
                :class="{
                  title: true,
                  title1: index == 0,
                  title2: index == 1,
                  title3: index == 2,
                }"
              >
                {{ item.title }}
              </div>
            </div>
            <div class="list_right">
              <img
                loading="lazy"
                :src="item.content_img"
                alt=""
                class="quotation"
              />
              <div class="content">{{ item.content1 }}</div>
              <div class="content">{{ item.content2 }}</div>
              <div class="content">{{ item.content3 }}</div>
            </div>
          </div>
          <div class="imgs">
            <div
              v-for="(imgItem, imgIndex) in item.img_list"
              :key="imgIndex"
              class="img_div"
            >
              <img
                loading="lazy"
                :src="imgItem.img"
                @click="handleImageClickSingle(imgItem.img)"
                alt=""
              />
              <div>{{ imgItem.title }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 服务亮点 -->
      <div v-if="changeReview === 1" class="bottom2">
        <div class="bottom_top">
          <img
            loading="lazy"
            src="../../../assets/images/xinfuxinyue/youyouxinfu/banner1.png"
            alt=""
          />
          <div class="imgShdow"></div>
          <div class="contents">
            <div class="title_content">
              <div class="content">
                由由信福养老院，源自对高龄长者特有的需求研究，拥有80项高龄自理服务标准（基础56项+增值24项），其中的26项，人无我有，包括“起居、营养、养生、社交、出行、护理”六个方面。
              </div>
              <div class="content">
                另超90项高龄护理服务标准，洞察护理长者需求，形成以“护理学、老年医学、心理学、社会学、营养学、康复医学”六个专业构成，包括“生活照护、健康管理、娱乐活动”三大系统的服务体系。
              </div>
            </div>
          </div>
          <div class="go_video">
            <div>点击视频，走进由由信福</div>
            <div class="go_icon">→</div>
          </div>
          <div class="video" id="youyouxinfuVideo2" @click="toggleVideo(2)">
            <video
              :src="$config.videoUrl + '/youyou_video_two.mp4'"
              controlslist="nodownload"
              :poster="
                require('../../../assets/images/xinfuxinyue/youyouxinfu/video_img2.png')
              "
              loop
              :controls="showControls"
              id="myVideos2"
            >
              Your browser does not support the video tag.
            </video>
            <!-- <video :src="$config.videoUrl + '/youyou_video_two.mp4'" controlslist="nodownload" loop
              :controls="showControls" id="myVideos2">
              Your browser does not support the video tag.
            </video> -->
            <div class="play_button" id="playButtons2">
              <a-icon type="play-circle" />
            </div>
          </div>
          <div id="crossss2" class="crossss" @click="handleImageClickss(2)">
            ×
          </div>
        </div>
        <div class="bottom_tops_mobiles">
          <div class="back_color">
            <div class="content">
              <div class="content_content">
                由由信福养老院，源自对高龄长者特有的需求研究，拥有80项高龄自理服务标准（基础56项+增值24项），其中的26项，人无我有，包括“起居、营养、养生、社交、出行、护理”六个方面。
              </div>
              <div class="content_content">
                另超90项高龄护理服务标准，洞察护理长者需求，形成以“护理学、老年医学、心理学、社会学、营养学、康复医学”六个专业构成，包括“生活照护、健康管理、娱乐活动”三大系统的服务体系。
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_tops_mobiles_video">
          <div
            class="video"
            id="youyouxinfuVideo2"
            @click="toggleMobileVideo(2)"
          >
            <video
              :src="$config.videoUrl + '/youyou_video_two.mp4'"
              controlslist="nodownload"
              :poster="
                require('../../../assets/images/xinfuxinyue/youyouxinfu/video_img2.png')
              "
              loop
              :controls="showControls"
              id="myVideos2_mobile"
            >
              Your browser does not support the video tag.
            </video>
            <!-- <video :src="$config.videoUrl + '/youyou_video_two.mp4'" controlslist="nodownload" loop
              :controls="showControls" id="myVideos2_mobile">
              Your browser does not support the video tag.
            </video> -->
            <div
              class="play_button"
              id="playButtons2_mobile"
              @click="toggleMobileVideo(2)"
            >
              <a-icon type="play-circle" />
            </div>
          </div>
        </div>
        <div class="colors">
          <div class="color1">
            <div class="color1s"></div>
            <div class="color1ss"></div>
          </div>
          <div class="color2"></div>
        </div>
        <div class="background">
          <div class="title">四重医康养服务体系</div>
          <div class="content">
            <div class="content1 contents">
              <div class="content_title">比邻三甲医院</div>
              <div class="content_content">
                隔壁就是第九人民医院浦东院区，仁济医院（东院）约2.6公里、曙光医院约5.5公里、东方医院（南院）约4.7公里。
              </div>
            </div>
            <div class="content2 contents">
              <div class="content_title">
                自建老年护理院<span class="subTitle">（设立中）</span>
              </div>
              <div class="content_content">
                开放床位502张。专注各类老年病诊治和重症康复，提供门诊、检验、住院等医疗服务。
              </div>
            </div>
          </div>
          <div class="content">
            <div class="content3 contents">
              <div class="content_title">中西医特色康复</div>
              <div class="content_content">
                配置两座约30米全景康复大厅，分别位于1层的康复医学科（西医）、位于2层的中医康复，实现中西医结合。5号楼以中医养生为特色的内设医疗，独立配置推拿、理疗、针灸、艾灸等中医养生康复服务。
              </div>
            </div>
            <div class="content4 contents">
              <div class="content_title">海上名医会客厅</div>
              <div class="content_content">
                中信养老与“海上名医”战略合作，全年不间断举办名医直播；名医工作室，与沪上名医一对一健康咨询；创新融媒体，自由阅览海上名医海量健康专题类节目。
              </div>
            </div>
          </div>
          <div class="title">全日制餐厅服务模式</div>
          <div class="content3s">
            由由信福的餐饮服务特色是全日制餐厅模式。，7:00-21:00全日制服务，正餐时段(7:00-9:00、11:00-13:00、17:00-19:00)之外，另设早午套餐、下午茶、宵夜服务时间段，全日提供多款面食与简餐，丰富高龄长者就餐时间段选择。
          </div>
          <div class="content3s">
            整个餐厅，无遮挡面向中庭景观，最大可容纳200人同时就餐。三餐都采用明档半自助服务，主档转角设计，总长10米，是丰富的主菜自选区域,包括主食和汤羹。中西主题美食节、水岸外摆BBQ
            、仲夏夜啤酒节……，由由信福的餐饮团队，不经意带给长者的惊喜。还将特别组织共享厨房活动。
          </div>
          <div class="content3s">
            根据高龄长者自主权，提供全包月或半包月模式进行选择，半包月即每月15天次的早中晚套餐，剩余15天可自由主理。
          </div>
          <div class="img_list">
            <img
              loading="lazy"
              :src="serviceHighlightsBigImg[0]"
              @click="handleImageClickSingle(serviceHighlightsBigImg[0])"
              alt=""
            />
            <img
              loading="lazy"
              :src="serviceHighlightsBigImg[1]"
              @click="handleImageClickSingle(serviceHighlightsBigImg[1])"
              alt=""
            />
            <img
              loading="lazy"
              :src="serviceHighlightsBigImg[2]"
              @click="handleImageClickSingle(serviceHighlightsBigImg[2])"
              alt=""
            />
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
              自理区
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(1)"
              :class="{ active: changeImgReview === 1 }"
            >
              院区环境
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(2)"
              :class="{ active: changeImgReview === 2 }"
            >
              护理区
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(3)"
              :class="{ active: changeImgReview === 3 }"
            >
              生活场景
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(4)"
              :class="{ active: changeImgReview === 4 }"
            >
              建筑实景
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(5)"
              :class="{ active: changeImgReview === 5 }"
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
          <div @click="lastImg" v-if="!showShadow" class="home_left">
            <a-icon type="left" class="news_icon" />
          </div>
          <div @click="nextImg" v-if="!showShadow" class="home_right">
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
          @handleImageClickMobile="handleImageClickMobile"
        >
        </ImgSwiper>
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
  name: "youyouxinfu",
  head: {
    title: "由由信福",
    meta: [
      { charset: "utf-8" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "由由信福，由由信福养老院，上海由由集团，高龄自理养老院，由由信福社区，养老院",
      },
      {
        hid: "description",
        name: "description",
        content:
          "由由信福养老院，上海由由集团投资建设，中信养老运营管理。是上海市浦东新区2022年重大民生实事工程，上海市中心城区(中环内)规模最大的综合性养老项目，上海市中心城区(中环内)唯一联通三甲医院的养老项目，是以“高龄自理、高龄护理、医养结合为特色的持续照料型社区。",
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
      showImg: true,
      // 三个图片
      threeBigImg: [
        require("~/assets/images/xinfuxinyue/youyouxinfu/4.png"),
        require("~/assets/images/xinfuxinyue/youyouxinfu/2.png"),
        require("~/assets/images/xinfuxinyue/youyouxinfu/3.png"),
      ],
      // 社区设施
      bottom1: {
        0: {
          title: "园区会所",
          content_img: require("../../../assets/images/xinlantiandi/content_img/1.png"),
          content1:
            "1F为中信品牌会客厅及全日制餐厅:中信养老“信”字系列产品线，从55+到85+，实现养老全周期、一站式的解决方案。",
          content2:
            "2F为美丽养生会客厅：安排了以中医养生为特色的内设医疗和精油养生两大类特色服务。特别策划Party World（派对天地），由一个多功能厅、两间家庭包房，和自助小食区组成。定期组织交谊舞会、红歌会、兴趣讲堂等主题社交活动。",
          content3:
            "3F为海上名医会客厅：是浦东地区目前唯一的数字直播室，每年现场举办不少于50场名医直播，为市民提供专业，权威的健康科普。",
          img_list: [
            {
              img: require("../../../assets/images/xinfuxinyue/youyouxinfu/5.png"),
              title: "中信品牌会客厅",
            },
            {
              img: require("../../../assets/images/xinfuxinyue/youyouxinfu/6.png"),
              title: "美丽养生会客厅",
            },
            {
              img: require("../../../assets/images/xinfuxinyue/youyouxinfu/7.png"),
              title: "海上名医会客厅",
            },
          ],
        },
        1: {
          title: "高龄自理区",
          content_img: require("../../../assets/images/xinlantiandi/content_img/2.png"),
          content1:
            "1-2号楼高龄自理区设有254套生活单元。1层楼栋中庭面积约600m²，规划以书、画、花、雀为主题的邻里四友会客厅，承载老人最喜闻乐见的活动。",
          content2:
            "1-15层设有一室一厅套间、一室户两款房型，其中一室一厅面宽约6.8米，房型全南，带阳台，可实现拎包入住。",
          content3: "",
          img_list: [
            {
              img: require("../../../assets/images/xinfuxinyue/youyouxinfu/8.png"),
              title: "自理区一室一厅客厅",
            },
            {
              img: require("../../../assets/images/xinfuxinyue/youyouxinfu/9.png"),
              title: "自理区一室一厅房间",
            },
            {
              img: require("../../../assets/images/xinfuxinyue/youyouxinfu/10.png"),
              title: "自理区一室",
            },
          ],
        },
        2: {
          title: "高龄护理区",
          content_img: require("../../../assets/images/xinlantiandi/content_img/1.png"),
          content1:
            "3-4号楼高龄护理区设有照护单元249床，老年护理院502床（设立中），主力房型为单人间、双人间、三人间，全朝南，带独立卫浴。",
          content2: "",
          content3: "",
          img_list: [
            {
              img: require("../../../assets/images/xinfuxinyue/youyouxinfu/11.png"),
              title: "护理小组团",
            },
            {
              img: require("../../../assets/images/xinfuxinyue/youyouxinfu/12.png"),
              title: "护理双人间",
            },
            {
              img: require("../../../assets/images/xinfuxinyue/youyouxinfu/13.png"),
              title: "护理双人间",
            },
          ],
        },
      },
      // 服务亮点要放大的图片
      serviceHighlightsBigImg: [
        require("~/assets/images/xinfuxinyue/youyouxinfu/1_1.png"),
        require("~/assets/images/xinfuxinyue/youyouxinfu/1_2.png"),
        require("~/assets/images/xinfuxinyue/youyouxinfu/1_3.png"),
      ],
      //控件属性
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
      // 图片点击后的遮罩层
      showShadow: false,
    };
  },
  async mounted() {
    const response = await this.$axios.post(
      this.$config.apiBaseUrl + "/cloudTourList",
      {
        pid: 2,
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
      } else {
        this.showImg = true;
        this.showControls = false;
      }
    },
    // 由由信福养老院video视频
    //鼠标进入视频
    buttonControl(type) {
      if (type == 2) {
        const video = document.getElementById("myVideos2");
        const playButton = document.getElementById("playButtons2");
        if (video.paused) {
          playButton.style.display = "block";
        } else {
          playButton.style.display = "none";
        }
      } else {
        const video = document.getElementById("myVideos1");
        const playButton = document.getElementById("playButtons1");
        if (video.paused) {
          playButton.style.display = "block";
        } else {
          playButton.style.display = "none";
        }
      }
    },
    // 鼠标移出视频
    buttonControls(type) {
      if (type == 2) {
        const playButton = document.getElementById("playButtons2");
        playButton.style.display = "none";
      } else {
        const playButton = document.getElementById("playButtons1");
        playButton.style.display = "none";
      }
    },
    // 点击视频的时候
    toggleVideo(type) {
      if (type == 2) {
        if (this.showControls) {
          return;
        } else {
          const video = document.getElementById("myVideos2");
          const playButton = document.getElementById("playButtons2");
          this.showImg = false;
          playButton.style.display = "none";
          // 显示控件
          this.showControls = true;

          const checkImg = document.getElementById("youyouxinfuVideo2");
          const cross = document.getElementById("crossss2");
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

          // 解决第一次点击视频出现的问题
          setTimeout(() => {
            video.play();
          }, 100);
        }
      } else {
        if (this.showControls) {
          return;
        } else {
          const video = document.getElementById("myVideos1");
          const playButton = document.getElementById("playButtons1");
          this.showImg = false;
          playButton.style.display = "none";
          // 显示控件
          this.showControls = true;

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
          setTimeout(() => {
            video.play();
          }, 100);
        }
      }
    },
    // 移动端点击视频
    toggleMobileVideo(type) {
      if (type == 2) {
        const video = document.getElementById("myVideos2_mobile");
        const playButton = document.getElementById("playButtons2_mobile");
        if (this.showControls) {
          return;
        } else {
          this.showImg = false;
          this.showControls = true;
          playButton.style.display = "none";
          // 解决第一次点击视频出现的问题
          setTimeout(() => {
            video.play();
          }, 100);
        }
      } else {
        const video = document.getElementById("myVideos1_mobile");
        const playButton = document.getElementById("playButtons1_mobile");
        if (this.showControls) {
          return;
        } else {
          this.showImg = false;
          this.showControls = true;
          playButton.style.display = "none";
          // 解决第一次点击视频出现的问题
          setTimeout(() => {
            video.play();
          }, 100);
        }
      }
    },
    // 视频叉号
    handleImageClickss(type) {
      if (type == 2) {
        const checkImg = document.getElementById("youyouxinfuVideo2");
        const cross = document.getElementById("crossss2");
        checkImg.classList.remove("changeImgs");
        cross.style.display = "none";
        // console.log("视频缩小")
        const video = document.getElementById("myVideos2");
        video.pause();
        const playButton = document.getElementById("playButtons2");
        playButton.style.display = "block";

        // 隐藏控件
        this.showControls = false;

        // 恢复滚动条
        let root = document.documentElement;
        root.style.overflow = "";
        root.style.borderRight = "";
      } else {
        const checkImg = document.getElementById("youyouxinfuVideo1");
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
      }
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
      console.log();
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
          width: 515px;
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
        align-items: flex-end;

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
    padding: 0 10px;
    margin-top: 50px;

    .img {
      text-align: center;
      margin: 20px 0;

      img {
        width: 40%;
        min-width: 150px;
        height: auto;
        max-width: 300px;
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

    // 公共视频播放属性
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

    .bottom1,
    .bottom2 {
      // 移动端
      .bottom_tops_mobiles {
        display: none;
        font-size: 16px;
        line-height: 22px;

        .back_color {
          background-image: url("../../../assets/images/xinfuxinyue/youyouxinfu/banner11.png");
          padding: 20px;

          .content .content_content {
            color: white;
            text-indent: 2em;
          }
        }
      }

      .bottom_tops_mobiles_video {
        display: none;

        .video {
          position: relative;
          height: 100%;
          width: 100%;

          video {
            height: 100%;
            width: 100%;
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
      }
    }

    .bottom1 {
      .bottom_tops {
        width: 100%;
        position: relative;
        width: 100%;
        // height: auto;
        height: 29.5vw;

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

            .title1 {
              width: 120px;
              background-color: rgb(254, 225, 0);
            }

            .title2 {
              width: 125px;
              color: #fff;
              background-color: rgb(230, 22, 115);
            }

            .title3 {
              width: 125px;
              color: #fff;
              background-color: rgb(34, 181, 168);
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

        .lists2 {
          height: 230px;
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

      .list_height1 {
        height: 680px;
      }

      .list_height2 {
        height: 640px;
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
        height: 29.5vw;

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
          width: 50%;
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

      .colors {
        width: 100%;

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
      }

      .background {
        background-image: url("../../../assets/images/xinfuxinyue/youyouxinfu/background-image.png");
        background-size: cover;

        .title {
          text-align: center;
          color: #fff;
          font-size: 40px;
          font-weight: 600;
          padding: 80px 0 56px 0;
        }

        .content {
          width: 1200px;
          margin: 0 auto;
          font-size: 16px;
          display: flex;
          justify-content: space-between;

          .contents {
            width: 49%;
            padding: 40px;
            margin-top: 24px;

            .content_title {
              font-size: 30px;
              font-weight: 600;
              text-align: center;
              margin-bottom: 15px;

              .subTitle {
                font-size: 16px;
                font-weight: 300;
                color: rgb(9, 58, 149);
              }
            }

            .content_content {
              font-size: 16px;
              line-height: 26px;
              // text-align: center;
            }
          }

          .content1 {
            color: rgb(9, 58, 149);
            background-color: rgb(126, 206, 244);
          }

          .content2 {
            color: rgb(9, 58, 149);
            background-color: rgb(255, 255, 0);
          }

          .content3 {
            color: #fff;
            background-color: rgb(34, 181, 168);
          }

          .content4 {
            color: #fff;
            background-color: rgb(230, 22, 115);
          }
        }

        .content3s {
          text-indent: 2em;
          line-height: 26px;
          color: #fff;
          width: 1200px;
          margin: 0 auto;
          padding-bottom: 30px;
          font-size: 16px;
        }

        .img_list {
          width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          padding: 30px 0 80px 0;

          img {
            width: 32%;
          }
        }
      }
    }

    .bottom3 {
      width: 100%;
      // background-color: rgb(42, 42, 42);
      background-image: url("../../../assets/images/xinfuxinyue/youyouxinfu/background-image.png");
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
            background-color: rgb(185, 0, 14);
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
            width: 415px;
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
          padding: 0 20px;

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
        .background {
          padding: 0 10px;

          .title {
            font-size: 38px;
            padding: 70px 0 50px 0;
          }

          .content {
            width: 100%;

            .contents {
              padding: 30px;
            }
          }

          .content3s {
            width: 100%;
          }

          .img_list {
            width: 100%;
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
            width: 360px;
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
        .background {
          padding: 0 20px;

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
            padding-bottom: 10px;

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
        .background {
          .title {
            font-size: 30px;
          }

          .content {
            flex-direction: column;

            .contents {
              width: 100%;

              .content_title {
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
            width: 310px;
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

    .singLand {
      display: none;
    }

    .singLands {
      display: block;
      width: 100%;
      height: auto;
      padding: 0 20px;
      margin-top: 50px;

      .img {
        text-align: center;
        margin: 20px 0;

        img {
          width: 40%;
          min-width: 150px;
          height: auto;
        }
      }

      .contentss {
        padding: 10px 0;
        font-size: 16px;
        text-indent: 2em;
        list-style: 40px;
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

      .bottom1,
      .bottom2 {
        .bottom_tops {
          display: none;
        }

        .bottom_top {
          display: none;
        }

        .bottom_tops_mobiles {
          display: block;
        }

        .bottom_tops_mobiles_video {
          display: block;
        }
      }

      .bottom1 {
        .list {
          // height: 700px;
          height: auto;

          .lists {
            justify-content: initial;
            flex-direction: column;
            // margin: 0 auto;
            height: auto;
            padding-top: 10px;
            margin-bottom: 10px;

            .list_left {
              width: auto;
              left: auto;
              bottom: auto;
              // right: 10px;
              top: 30px;
              position: static;
              display: block;
              z-index: 9;

              .title {
                margin-bottom: 10px;
              }
            }

            .list_right {
              width: auto;
              top: 0;
              right: auto;
              bottom: auto;
              display: block;
              // margin-top: 90px;
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
            // height: calc(500px - 32vw);
            overflow: hidden;
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
        .background {
          .title {
            font-size: 24px;
          }

          .content {
            flex-direction: column;

            .contents {
              width: 100%;

              .content_content {
                line-height: 22px;
              }

              .content_title {
                font-size: 22px;
              }
            }
          }

          .content3s {
            line-height: 22px;
            padding-bottom: 10px;
          }

          .img_list {
            padding: 10px 0;
          }
        }
      }

      .bottom3 {
        .bottom_titles {
          .bottom_title {
            width: 100%;
            margin: 10px 0;
            // :nth-child(1) {
            //   margin-left: 10px;
            // }

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
            // height: calc(500px - 36vw);
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
            width: 229px;
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
