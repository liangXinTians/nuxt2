<template>
  <!-- 主界面的 -->
  <div class="container index">
    <div class="home-box">
      <bannerSwiper></bannerSwiper>
    </div>
    <!-- 参观预约 -->
    <VisitReserve ref="visitReserve" :flagIndex="flagIndex"></VisitReserve>
    <!-- 中信集团发展养老业务的平台 -->
    <div class="elder_care_platform">
      <!-- 相关数据 -->
      <div ref="aboutData" class="aboutData">
        <!-- <div class="platformTitle">
          中信集团唯一发展养老业务的平台
        </div>
        <div class="platformIntro">
          都市型·一站式·医康养
        </div> -->
        <div class="platformTitle">
          <div class="web">中信养老：四个阶段，一站式养老解决方案</div>
          <div class="mobile">
            <div class="top">四个阶段</div>
            <div class="bottom">一站式养老解决方案</div>
          </div>
        </div>
        <div class="platformTags">
          <div class="platformTag">
            <div class="tagLeft">【</div>
            <div class="tagFont">活力</div>
            <div class="tagRight">】</div>
          </div>
          <div class="platformTag">
            <div class="tagLeft">【</div>
            <div class="tagFont">自理</div>
            <div class="tagRight">】</div>
          </div>
          <div class="platformTag">
            <div class="tagLeft">【</div>
            <div class="tagFont">护理</div>
            <div class="tagRight">】</div>
          </div>
          <div class="platformTag">
            <div class="tagLeft">【</div>
            <div class="tagFont">认知症</div>
            <div class="tagRight">】</div>
          </div>
        </div>
        <div class="mobile-subject">中信养老</div>
        <div class="platformContain" id="flagScroll">
          <!-- data-wow-delay="0.2s"
          data-wow-duration="1.5s" -->
          <div class="web">
            <span class="font">信字系列</span>
            <span class="num">
              <!-- <countTo :start-val="0" :end-val="3" :duration="3000" ref="example1" :autoplay="true"></countTo> -->
              3
            </span>
            <span class="font">大产品线</span>
            <span class="num">
              <!-- <countTo :start-val="0" :end-val="9" :duration="3000" ref="example2" :autoplay="true"></countTo> -->
              10</span>
            <span class="font">大项目</span>
            <span class="symbol">近</span>
            <span class="num symbol-margin">
              <!-- <countTo :start-val="0" :end-val="4500" :duration="3000" ref="example3" :autoplay="true"></countTo> -->
              6500</span>
            <span class="font">张床位</span>
          </div>
          <div class="mobile">
            <div class="mobile-item">
              <span class="num">3</span>
              <span class="font">大产品线</span>
            </div>
            <div class="mobile-item">
              <span class="num">10</span>
              <span class="font">大项目</span>
            </div>
            <div class="mobile-item">
              <span class="font">近</span>
              <span class="num">6500</span>
              <span class="font">张床位</span>
            </div>
          </div>
        </div>
        <nuxt-link :to="{ path: '/zhongxinyanglao' }">
          <div class="knowMore">了解更多 <a-icon type="arrow-right" /></div>
        </nuxt-link>
      </div>
    </div>
    <!-- 公司要闻 -->
    <div class="important_news">
      <!-- 主要新闻信息 -->
      <div class="main_news">
        <div class="newstitle">公司要闻</div>
        <!-- 轮播图左键 -->
        <div @click="goLeft" class="news_left goLeftRight">
          <a-icon type="left" class="news_icon" />
        </div>
        <swiper :options="swiperOption" ref="carousel" class="news_row">
          <swiper-slide v-for="(item, index) in news" :key="index" class="row">
            <div class="news_item" @click="goToPage(item?.link_url + '/' + item.id)">
              <div class="png">
                <img loading="lazy" :src="$config.apiFileUrl + item.file_path" alt="" />
              </div>
              <div class="font">
                <div class="news_title">
                  <!-- <nuxt-link :to="item?.link_url + '/' + item.id"> -->
                  <!-- <div>{{ item.titles }}</div>
                    {{ item.title }} -->
                  <div>{{ item.title }}</div>
                  {{ item.subtitle }}
                  <!-- </nuxt-link> -->
                </div>
                <div class="news_contain">
                  {{ item.introduction }}
                </div>
              </div>
              <div class="checkAll">
                <div>{{ item.created_time.split(" ")[0] }}</div>
                <!-- <nuxt-link :to="item?.link_url + '/' + item.id"> -->
                <div>
                  查看全文<a-icon type="arrow-right" class="all-icon" />
                </div>
                <!-- </nuxt-link> -->
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
        <!-- 轮播图右键 -->
        <div @click="goRight" class="news_right goLeftRight">
          <a-icon type="right" class="news_icon" />
        </div>
        <div class="bottom">左右滑动查看更多新闻</div>
      </div>
    </div>
    <!-- 三大产品线 -->
    <div class="three_pro">
      <div class="main_pro">
        <div class="proTitle">三大产品线</div>
        <div class="kuanRedmain_proprointro">
          “信字系列”产品线<br />全周期养老解决方案
        </div>
        <!-- web端 -->
        <div class="changePro_web">
          <div class="three_button">
            <div :class="{ one: index == 1, ones: index != 1 }" @mouseenter="changePro(1)">
              信澜天地系列
            </div>
            <div :class="{ one: index == 2, ones: index != 2 }" @mouseenter="changePro(2)">
              信福&信悦系列
            </div>
            <div :class="{ one: index == 3, ones: index != 3 }" @mouseenter="changePro(3)">
              信养之家系列
            </div>
            <!-- <div class="button" ref="button" @click="downloadDiolage('virtual-currency')">立即下载<a-icon class="icon" type="download" /></div> -->
          </div>
          <!-- 轮播图 -->
          <div class="pro_carousel" v-for="(product, index) in filteredProducts" :key="index">
            <div @click="goLeftpProduct" class="product_left">
              <a-icon type="left" class="product_icon" />
            </div>
            <div @click="goRightpProduct" class="product_right">
              <a-icon type="right" class="product_icon" />
            </div>
            <div class="main_carousel">
              <img loading="lazy" :src="product.imgSrcs[currentImgIndex]" alt="" />
            </div>
            <div class="main_font">
              <div class="world">
                <div class="left">
                  <span class="number">
                    <span class="span1">{{ product.number }}</span><span class="span2">+</span>
                  </span>
                  <span class="font">{{ product.title }}</span>
                </div>
                <nuxt-link class="know_more" :to="product.link[selectedLinkIndex]">
                  了解更多<a-icon type="arrow-right" />
                </nuxt-link>
              </div>
              <div class="font_link">
                <div class="link_box" v-for="(link, linkIndex) in product.links" :key="linkIndex"
                  @mouseenter="getLinkIndex(linkIndex)" :class="{ active: linkIndex === selectedLinkIndex }">
                  <nuxt-link :to="product.link[selectedLinkIndex]">{{
                    link
                    }}</nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <!-- 红线 -->
          <div class="kuanRed"></div>
        </div>
        <!-- 三大产品线移动端 -->
        <div class="changePro">
          <div class="pro_carousels">
            <div class="top-title">“信澜天地”系列</div>
            <div class="carousel">
              <div class="carousel-item" v-for="(item, index) in mobileProducts[0]" :key="index"
                @click="goToPage(item.link)">
                <div class="item-top">
                  <div class="left">
                    <span>55</span><span class="sign">+</span>
                  </div>
                  <div class="right">度假式文旅康养社区</div>
                </div>
                <div class="item-bottom">
                  <div class="img">
                    <img loading="lazy" :src="item.imgSrc" alt="" />
                  </div>
                  <div class="item-tag">
                    <div class="learn-more">点击查看</div>
                    <div class="img-title">{{ item.title }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pro_carousels">
            <div class="top-title">“信福&信悦”系列</div>
            <div class="carousel">
              <swiper ref="carouselSwiper">
                <swiper-slide class="carousel-item" v-for="(item, index) in mobileProducts[1]" :key="index">
                  <div class="swiper-item-box" @click="goToPage(item.link)">
                    <div class="item-top">
                      <div class="left">
                        <span>75</span><span class="sign">+</span>
                      </div>
                      <div class="right">都市型医康养综合体</div>
                    </div>
                    <div class="item-bottom">
                      <div class="img">
                        <img loading="lazy" :src="item.imgSrc" alt="" />
                      </div>
                      <div class="item-tag">
                        <div class="learn-more">点击查看</div>
                        <div class="img-title">{{ item.title }}</div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="bottom">左右滑动查看更多项目</div>
          </div>
          <div class="pro_carousels">
            <div class="top-title">“信养之家”系列</div>
            <div class="carousel">
              <swiper ref="carouselSwiper">
                <swiper-slide class="carousel-item" v-for="(item, index) in mobileProducts[2]" :key="index">
                  <div class="swiper-item-box" @click="goToPage(item.link)">
                    <div class="item-top">
                      <div class="left">
                        <span>85</span><span class="sign">+</span>
                      </div>
                      <div class="right">
                        护理型单体养老机构<br class="mobile-br" />（连锁）
                      </div>
                    </div>
                    <div class="item-bottom">
                      <div class="img">
                        <img loading="lazy" :src="item.imgSrc" alt="" />
                      </div>
                      <div class="item-tag">
                        <div class="learn-more">点击查看</div>
                        <div class="img-title">{{ item.title }}</div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="bottom">左右滑动查看更多项目</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 短居旅住 -->
    <div class="short_stay_box">
      <div class="short_stay">
        <div class="main_stay">
          <div class="title">旅居短住</div>
          <swiper :options="swiperOptionStay" ref="staySwiper" class="Stay_row">
            <swiper-slide key="row1">
              <div class="row1" style="margin: auto" @click="goToPage('/sojourns/chongmingTour')">
                <div class="row-content-box">
                  <div class="shengtai">崇明生态游</div>
                  <p>
                    <span>上海崇明东滩国际旅游度假区</span><br />
                    <span>入住中信养老康养文旅旗舰</span><br />
                    <span>80㎡豪华套房服务公寓</span><br />
                    <span>锦江主厨料理餐饮</span><br />
                    <span>会所设施畅享</span><br />
                    <span>24H医护值守</span><br />
                    <span>丰富在地特色活动</span><br />
                  </p>
                  <div class="knowMore">
                    了解更多 <a-icon type="arrow-right" />
                  </div>
                </div>
              </div>
            </swiper-slide>
            <!-- <swiper-slide key="row2">
              <div class="row2">
                <div class="row-content-box">
                  <div class="shengtai">西湖山水游</div>
                  <p>
                    <span>杭州西子湖畔，吴山脚下</span><br />
                    <span>杭州醉美露台，对望雷峰塔</span><br />
                    <span>入住中信都市康养综合体</span><br />
                    <span>38㎡紫薇套房</span><br />
                    <span>专业康复理疗</span><br />
                    <span>美白嫩肤体验</span><br />
                    <br />
                  </p>
                  <div
                    class="knowMore"
                    @click="goToPage('/sojourns/westlakeTour')"
                  >
                    了解更多 <a-icon type="arrow-right" />
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="row3">
              <div class="row3">
                <div class="row-content-box">
                  <div class="shengtai">都市观光游</div>
                  <p>
                    <span>上海浦东内中环，地铁直达</span><br />
                    <span>入住中信都市康养综合体</span><br />
                    <span>45㎡信福套房</span><br />
                    <span>海上名医健康咨询</span><br />
                    <span>九院专家门诊预约</span><br />
                    <span>知名品牌精油养生</span><br />
                    <span>24H医护值守</span><br />
                  </p>
                  <div class="knowMore" @click="goToPage('/sojourns/cityTour')">
                    了解更多 <a-icon type="arrow-right" />
                  </div>
                </div>
              </div>
            </swiper-slide> -->
          </swiper>
          <!--  <div class="Stay_row_mobile">
            <swiper
              :options="swiperOptionStay"
              ref="staySwiper"
              class="stay_row_swiper"
            >
              <swiper-slide key="row1">
                <div class="row1">
                  <div class="row-content-box">
                    <div class="shengtai">崇明生态游</div>
                    <p>
                      <span>上海崇明东滩国际旅游度假区</span><br />
                      <span>入住中信养老康养文旅旗舰</span><br />
                      <span>80㎡豪华套房服务公寓</span><br />
                      <span>锦江主厨料理餐饮</span><br />
                      <span>会所设施畅享</span><br />
                      <span>24H医护值守</span><br />
                      <span>丰富在地特色活动</span><br />
                    </p>
                    <div
                      class="knowMore"
                      @click="goToPage('/sojourns/chongmingTour')"
                    >
                      了解更多 <a-icon type="arrow-right" />
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide key="row2">
                <div class="row2">
                  <div class="row-content-box">
                    <div class="shengtai">西湖山水游</div>
                    <p>
                      <span>杭州西子湖畔，吴山脚下</span><br />
                      <span>杭州醉美露台，对望雷峰塔</span><br />
                      <span>入住中信都市康养综合体</span><br />
                      <span>38㎡紫薇套房</span><br />
                      <span>专业康复理疗</span><br />
                      <span>美白嫩肤体验</span><br />
                      <br />
                    </p>
                    <div
                      class="knowMore"
                      @click="goToPage('/sojourns/westlakeTour')"
                    >
                      了解更多 <a-icon type="arrow-right" />
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide key="row3">
                <div class="row3">
                  <div class="row-content-box">
                    <div class="shengtai">都市观光游</div>
                    <p>
                      <span>上海浦东内中环，地铁直达</span><br />
                      <span>入住中信都市康养综合体</span><br />
                      <span>45㎡信福套房</span><br />
                      <span>海上名医健康咨询</span><br />
                      <span>九院专家门诊预约</span><br />
                      <span>知名品牌精油养生</span><br />
                      <span>24H医护值守</span><br />
                    </p>
                    <div
                      class="knowMore"
                      @click="goToPage('/sojourns/cityTour')"
                    >
                      了解更多 <a-icon type="arrow-right" />
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div> -->
        </div>
      </div>
      <!-- 移动端 -->
      <!-- <div class="short_stay_mobile">
        <div class="main_stay">
          <div class="title">旅居短住</div>
          <div class="stay_box">
            <div class="stay_item">
              <div class="left-img">
                <img
                  loading="lazy"
                  src="../assets/images/index/stay_1.png"
                  alt=""
                />
              </div>
              <div class="item-content-box">
                <div class="item-title">崇明生态游</div>
                <ul class="list-item">
                  <li>上海崇明东滩国际旅游度假区</li>
                  <li>入住中信养老康养文旅旗舰</li>
                  <li>80㎡豪华套房服务公寓</li>
                </ul>
              </div>
            </div>
            <div class="stay_item">
              <div class="left-img">
                <img
                  loading="lazy"
                  src="../assets/images/index/stay_2.png"
                  alt=""
                />
              </div>
              <div class="item-content-box">
                <div class="item-title">西湖山水游</div>
                <ul class="list-item">
                  <li>杭州醉美露台，对望雷峰塔</li>
                  <li>入住中信都市康养综合体</li>
                  <li>38㎡紫薇套房</li>
                </ul>
              </div>
            </div>
            <div class="stay_item">
              <div class="left-img">
                <img
                  loading="lazy"
                  src="../assets/images/index/stay_3.png"
                  alt=""
                />
              </div>
              <div class="item-content-box">
                <div class="item-title">都市观光游</div>
                <ul class="list-item">
                  <li>上海浦东内中环，地铁直达</li>
                  <li>入住中信都市康养综合体</li>
                  <li>45㎡信福套房</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import "swiper/css/swiper.css"
import bannerSwiper from "../components/bannerSwiper22.vue"
import { message } from "ant-design-vue"
export default {
  components: {
    Swiper,
    SwiperSlide,
    bannerSwiper,
  },
  // directives: {
  //   swiper: directive
  // },
  data () {
    return {
      activeIndex: 1,
      data: {},
      // video控件
      showControls: false,
      poster_img: null,
      //商标滚动效果
      animateChange: true,
      form: {
        value1: "",
      },
      index: 1,
      // 轮播图下面的红色
      active: 1,
      // 视频文字
      showTitle: "",
      // 新闻轮播
      currentIndex: 0,
      news: [],
      bannerHome: [],
      filter: true, //首页通栏视频图片判断
      file_path_id: 0,
      routerPath: "",
      swiperOption: {
        slidesPerView: "", // 显示数目
        spaceBetween: "", //间隔
        // centeredSlides: true, //居中
        pagination: {
          //轮播按钮
          // el: ".swiper-pagination",
          // clickable: true,
          el: "",
          clickable: null,
        },
        updateOnWindowResize: true,
        // touchable: true, // 开启触摸滑动功能 pc
        // grabCursor: true, // 手掌效果
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // },
        slidesToScroll: 1, //轮播按钮前进数目
        touch: true, //移动端滑动
      },
      // 旅居服务swiper参数
      swiperOptionStay: {
        slidesPerView: "", // 显示数目
        spaceBetween: "", //间隔
        updateOnWindowResize: true,
        slidesToScroll: 1, //轮播按钮前进数目
        touch: true, //移动端滑动
      },
      // 三大产品线轮播list
      products: [
        {
          index: 1,
          imgSrcs: [require("../assets/images/index/onePro1.png")],
          number: "55",
          title: "度假式文旅康养社区",
          links: ["信澜天地"],
          link: ["/xinlantiandi"],
        },
        {
          index: 2,
          imgSrcs: [
            require("../assets/images/index/twoPro1.png"),
            require("../assets/images/index/twoPro2s.jpg"),
            // require("../assets/images/index/twoPro3.jpg"),
            require("../assets/images/xinfuxinyue/xinyue88/1.jpg"),
          ],
          number: "75",
          title: "都市型医康养综合体",
          links: ["浦东 由由信福", "浦东 联洋信福（昆仑邸）", "杭州西湖 信悦88"],
          link: [
            "/xinfuxinyue/youyouxinfu",
            "/xinfuxinyue/lianyangxinfu",
            "/xinfuxinyue/xinyue88",
          ],
        },
        {
          index: 3,
          imgSrcs: [
            require("../assets/images/index/threePro1.png"),
            require("../assets/images/index/threePro2.png"),
            require("../assets/images/index/threePro3.jpg"),
            require("../assets/images/xinyangzhijia/zhenyue/1.jpg"),
            require("../assets/images/xinyangzhijia/aiqinren/1s.jpg"),
          ],
          number: "85",
          title: "护理型单体养老机构（连锁）",
          links: [
            "浦东 锦绣养老院",
            "宝山 大场养老院",
            "杨浦 新江湾养老院",
            "杨浦 臻悦护理院",
            "杨浦 爱亲仁护理院",
          ],
          link: [
            "/xinyangzhijia/jinxiu",
            "/xinyangzhijia/dachang",
            "/xinyangzhijia/xinjiangwan",
            "/xinyangzhijia/zhenyue",
            "/xinyangzhijia/aiqinren",
          ],
        },
      ],
      // 移动端产品数据
      mobileProducts: [
        [
          {
            imgSrc: require("../assets/images/index/onePro1.png"),
            title: "信澜天地",
            link: "/xinlantiandi",
          },
        ],
        [
          {
            imgSrc: require("../assets/images/index/twoPro1.png"),
            title: "浦东 由由信福",
            link: "/xinfuxinyue/youyouxinfu",
          },
          {
            imgSrc: require("../assets/images/index/twoPro2s.jpg"),
            title: "浦东 联洋信福",
            link: "/xinfuxinyue/lianyangxinfu",
          },
          {
            imgSrc: require("../assets/images/xinfuxinyue/xinyue88/1.jpg"),
            title: "杭州西湖 信悦88",
            link: "/xinfuxinyue/xinyue88",
          },
        ],
        [
          {
            imgSrc: require("../assets/images/index/threePro1.png"),
            title: "浦东 锦绣养老院",
            link: "/xinyangzhijia/jinxiu",
          },
          {
            imgSrc: require("../assets/images/index/threePro2.png"),
            title: "宝山 大场养老院",
            link: "/xinyangzhijia/dachang",
          },
          {
            imgSrc: require("../assets/images/index/threePro3.jpg"),
            title: "杨浦 新江湾养老院",
            link: "/xinyangzhijia/xinjiangwan",
          },
          {
            imgSrc: require("../assets/images/xinyangzhijia/zhenyue/1.jpg"),
            title: "杨浦 臻悦护理院",
            link: "/xinyangzhijia/zhenyue",
          },
          {
            imgSrc: require("../assets/images/xinyangzhijia/aiqinren/1s.jpg"),
            title: "杨浦 爱亲仁护理院",
            link: "/xinyangzhijia/aiqinren",
          },
        ],
      ],
      //轮播点击的当前图片index
      currentImgIndex: 0,
      //点击三大产品后动态添加背景色
      selectedLinkIndex: 0,
      // 改变三大产品布局样式
      changeproduct: true,
      // 定义一个值证明是首页
      flagIndex: "index",
    }
  },
  computed: {
    swiper () {
      return this.$refs.carousel && this.$refs.carousel.$swiper
    },
    swiper1 () {
      return this.$refs.staySwiper && this.$refs.staySwiper.$swiper
    },
    // 产品线轮播
    filteredProducts () {
      return this.products.filter((product) => product.index === this.index)
    },
  },
  created () { },
  watch: {
    // 监视路由
    // $route(newVal) {
    //   console.log('newVal');
    //   console.log(newVal);
    //   // 为了获取参数
    //   this.flag = newVal.params.name;
    //   // console.log("this.flag",this.flag);
    // }
  },
  async mounted () {
    const response2 = await this.$axios.get(
      this.$config.apiBaseUrl + "/importantNewsList"
    )
    this.news = response2.data.data

    this.data = {
      reservation_type: "活力",
      reservation_city: "上海",
      reservation_project: "信澜天地",
      reservation_phone: "",
    }

    const _this = this
    console.log("xxxxmounted", process.browser)
    // 初始化
    if (process.browser) {
      /* new _this.$wow({
        // 回调函数  参数是dom元素
        callback: function (dom) {
          // 这里给数字滚动的dom元素加上id 来确定是否是数字滚动元素，调用函数
          if (dom.id == "flagScroll") {
            console.log("🫥");
            _this.setNumChange();
          }
        },
        live: false,
      }).init(); */
    }

    setTimeout(() => {
      this.showTitle = true
    }, 1000) // 延迟1秒后开始动画
    this.mobileFunctions()
    // window.onresize = () => {
    //   // 判断屏幕的大小 设置为手机端
    //   this.mobileFunctions()
    // }
    window.addEventListener("resize", this.mobileFunctions)

    this.$nextTick(() => {
      this.$refs.visitReserve?.mobileFunctions()
    })
  },
  // 影响首屏加载的方法
  // async asyncData({$axios}) {
  // },
  methods: {
    // 封装设置使用swiper轮播的相同方法
    setSwiperOption (swiperObj, screenWidth) {
      if (swiperObj) {
        // 新闻轮播的问题
        if (screenWidth < 1200 && screenWidth > 1140) {
          console.log("屏幕宽度", screenWidth)
          swiperObj.params.spaceBetween = (screenWidth - 350 * 3 - 80) / 2
          swiperObj.params.slidesPerView = 3
          swiperObj.update()
        } else if (screenWidth <= 1140 && screenWidth > 992) {
          swiperObj.params.spaceBetween = screenWidth - 350 * 2 - 240
          swiperObj.params.slidesPerView = 2
        } else if (screenWidth <= 992 && screenWidth > 768) {
          swiperObj.params.spaceBetween = screenWidth - 340 * 2 - 60
          swiperObj.params.slidesPerView = 2
        } else if (screenWidth <= 768) {
          swiperObj.params.slidesPerView = 1
          swiperObj.params.spaceBetween = 0
          swiperObj.update()
        } else {
          swiperObj.params.slidesPerView = 3
          swiperObj.params.spaceBetween = 75
          swiperObj.update()
        }

        if (screenWidth < 768 || this.isMobile()) {
          swiperObj.params.pagination = {
            el: ".swiper-pagination",
            clickable: true,
          }
          swiperObj.update()
          this.changeproduct = false
          console.log(swiperObj.params.pagination)
        } else {
          this.changeproduct = true

          swiperObj.params.pagination = {
            el: "",
            clickable: null,
          }
          swiperObj.update()
        }
      }
    },
    mobileFunctions () {
      // 获取包含滚动条的宽度
      let screenWidth =
        window?.innerWidth ||
        document?.documentElement.scrollWidth ||
        document.body?.clientWidth
      // 获取屏幕的宽度
      // let screenWidth = window.innerWidth || document.documentElement.clientWidth
      // console.log('window.innerWidth',screenWidth);
      if (screenWidth <= 768 || this.isMobile()) {
        console.log(this.unfold)
        this.unfold = true
        const idMore = this.$refs.getMore
        if (idMore) {
          idMore.style.height = "60px"
          idMore.style.overflow = "hidden"
        }
        this.unfolds = true

        const aboutDatas = this.$refs.aboutData
        if (aboutDatas) {
          aboutDatas.style.top = "70px"
          aboutDatas.style.marginTop = "0px"
        }

        // const elderCarePlatform = document.querySelector(
        //   ".elder_care_platform"
        // );
        // elderCarePlatform && (elderCarePlatform.style.height = "430px");

        const goLeftRights = document.querySelectorAll(".goLeftRight")
        for (let i = 0; i < goLeftRights.length; i++) {
          goLeftRights[i].style.display = "none"
        }
      } else if (screenWidth > 768 && screenWidth < 1139) {
        // this.unfold = false
        // const idMore = this.$refs.getMore
        // idMore.style.height = "150px"
        // idMore.style.overflow = "none"
        // this.unfolds = true

        // const aboutDatas = this.$refs.aboutData
        // aboutDatas.style.top = "350px"
        // aboutDatas.style.marginTop = "0px"

        // const elderCarePlatform = document.querySelector(
        //   ".elder_care_platform"
        // );
        // elderCarePlatform && (elderCarePlatform.style.height = "auto");
        const goLeftRights = document.querySelectorAll(".goLeftRight")
        for (let i = 0; i < goLeftRights.length; i++) {
          goLeftRights[i].style.display = ""
        }
      } else {
        this.unfold = false
        const idMore = this.$refs.getMore
        if (idMore) {
          idMore.style.height = "100px"
          idMore.style.overflow = "none"
        }
        this.unfolds = true

        const aboutDatas = this.$refs.aboutData
        if (aboutDatas) {
          aboutDatas.style.top = "350px"
          aboutDatas.style.marginTop = "0px"
        }

        // const elderCarePlatform = document.querySelector(
        //   ".elder_care_platform"
        // );
        // elderCarePlatform && (elderCarePlatform.style.height = "auto");

        const goLeftRights = document.querySelectorAll(".goLeftRight")
        for (let i = 0; i < goLeftRights.length; i++) {
          goLeftRights[i].style.display = ""
        }
      }

      if (screenWidth >= 768 && screenWidth < 810) {
        this.unfold = false
        const idMore = this.$refs.getMores
        if (idMore) {
          idMore.style.height = "150px"
          idMore.style.overflow = "none"
        }
        const aboutDatas = this.$refs.aboutData
        if (aboutDatas) {
          aboutDatas.style.top = "350px"
          aboutDatas.style.marginTop = "0px"
        }
        this.unfolds = true
      }

      // 公司要闻
      this.setSwiperOption(this.swiper, screenWidth)
      // 旅居服务  只有一个关闭，有多个后打开
      // this.setSwiperOption(this.swiper1, screenWidth);

      // console.log(screenWidth);

      // 获取不包括滚动条的宽度
      let widthData = document.body.clientWidth
      // 获取类为home的元素
      let home = document.getElementsByClassName("home")[0]
      // 给它设置高度
      home && (home.style.height = (widthData * 272) / 483 + "px")
    },
    /**
     * 判断是否为移动端
     * @returns {Array} flag 返回的是一个数组，里面存储匹配到的值
     * */
    isMobile () {
      let flag = window.navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      return flag
    },
    handleChange (value) {
      console.log(`selected ${value}`)
    },
    // 刷新防止页面按键样式丢失
    // setStyle() {
    //   //初次拿到传递过来的参数
    //   this.flag = this.$route.params.name;
    //   // 为了解决刷新丢失params()
    //   // 如果为空，就从路径上判断含有introduction吗？
    //   if (!this.flag) {
    //     if (this.$route.path.includes('news1')) {
    //       this.flag = 'news1'
    //     } else if (this.$route.path.includes('news2')) {
    //       this.flag = 'news2'
    //     } else if (this.$route.path.includes('new3')) {
    //       this.flag = 'new3'
    //     }
    //   }
    // },
    changePro (value) {
      this.index = value
      this.currentImgIndex = 0
      this.selectedLinkIndex = 0
    },
    // 开启数字滚动函数
    setNumChange () {
      console.log("❤️🎈❤️🎈")
      // 给个延迟  如果不给,就是到达这个位置后就开启,会导致没有向上浮动效果
      setTimeout(() => {
        // 用了遍历每一个的方法
        for (let i = 1; i < 4; i++) {
          this.$refs["example" + i]?.start()
        }
      }, 3000)
    },
    // 头部视频图片轮播
    goHomeLeft () {
      this.activeIndex -= 1
      const playButton = document.getElementById("play-button")
      this.file_path_id -= 1
      if (this.file_path_id < 0) {
        this.file_path_id = this.bannerHome.length - 1
      }
      console.log("点击了---")
      if (
        this.bannerHome[this.file_path_id].file_path.slice(
          this.bannerHome[this.file_path_id].file_path.lastIndexOf(".")
        ) === ".mp4"
      ) {
        // this.filter = true;
        this.$nextTick(() => {
          if (this.bannerHome[this.file_path_id].title === "中信养老") {
            this.poster_img = require("../assets/images/zhongxinyanglao/video-img.png")
          } else {
            this.poster_img = null
          }
          console.log(
            "this.$refs[`video + ${this.file_path_id}`]",
            this.$refs[`video${this.file_path_id}`]
          )
          // this.$refs[`video${this.file_path_id}`]?.load();
        })
        // playButton && (playButton.style.display = 'block');
      } else {
        // this.filter = false;
        // playButton && (playButton.style.display = 'none');
      }
      this.routerPath = this.bannerHome[this.file_path_id].link_url
    },
    // 进入图片详情页
    goDetailPage () {
      this.$router.push(this.routerPath)
    },
    goHomeRight () {
      this.activeIndex += 1
      const playButton = document.getElementById("play-button")
      this.file_path_id += 1
      if (this.file_path_id > this.bannerHome.length - 1) {
        this.file_path_id = 0
      }
      if (
        this.bannerHome[this.file_path_id].file_path.slice(
          this.bannerHome[this.file_path_id].file_path.lastIndexOf(".")
        ) === ".mp4"
      ) {
        // this.filter = true;
        this.$nextTick(() => {
          if (this.bannerHome[this.file_path_id].title === "中信养老") {
            this.poster_img = require("../assets/images/zhongxinyanglao/video-img.png")
          } else {
            this.poster_img = null
          }
          console.log(
            "this.$refs[`video + ${this.file_path_id}`]",
            this.$refs[`video${this.file_path_id}`]
          )
          // this.$refs[`video${this.file_path_id}`]?.load();
        })
        // playButton.style.display = 'block'
      } else {
        // this.filter = false;
        // playButton.style.display = 'none'
      }
      this.routerPath = this.bannerHome[this.file_path_id].link_url
    },
    //公司要闻轮播图左键
    goLeft () {
      this.swiper.slidePrev()
    },
    //公司要闻轮播图右键
    goRight () {
      this.swiper.slideNext()
    },
    //鼠标进入视频
    buttonControl () {
      if (!this.showControls) {
        // const video = document.getElementById("my-video")
        const playButton = document.getElementById("play-button")
        // if (video.paused) {
        playButton.style.display = "block"
        // } else {
        // playButton.style.display = "none"
      } else {
        return
      }
    },
    // 鼠标移出视频
    buttonControls () {
      const playButton = document.getElementById("play-button")
      playButton.style.display = "none"
    },
    // 点击视频的时候
    toggleVideo () {
      if (this.showControls) {
        return
      } else {
        const video = document.getElementById("my-video")
        const playButton = document.getElementById("play-button")
        this.showTitle = false
        this.showControls = true

        // if (video.paused) {
        //   video.play()
        //   // video.volume = 0.5 // 设置音量为 0.5（取值范围为 0 到 1）
        playButton.style.display = "none"
        // } else {
        //   video.pause()
        //   playButton.style.display = "block"
        // }
        // 解决第一次点击视频出现的问题
        setTimeout(() => {
          video.play()
        }, 100)
      }
    },
    // 三大产品轮播左键
    goLeftpProduct () {
      this.currentImgIndex--
      if (this.currentImgIndex < 0) {
        this.currentImgIndex = this.products[this.index - 1].imgSrcs.length - 1
      }
      this.selectedLinkIndex = this.currentImgIndex
    },
    // 三大产品轮播右键
    goRightpProduct () {
      this.currentImgIndex++
      if (
        this.currentImgIndex >= this.products[this.index - 1].imgSrcs.length
      ) {
        this.currentImgIndex = 0
      }
      this.selectedLinkIndex = this.currentImgIndex
    },
    // 点击三大产品中每个产品
    getLinkIndex (value) {
      console.log(value)
      this.currentImgIndex = value
      this.selectedLinkIndex = value
    },
    goToPage (link) {
      console.log("链接地址", link)
      // 跳转页面
      this.$router.push(link)
    },
  },
  beforeDestroy () {
    window.removeEventListener("resize", this.mobileFunctions)
  },
}
</script>

<style lang="less" scoped>
.index.container {
  width: 100%;
  // background-color: #fafafa;
  font-family: "Source Han Serif SC VF";

  // position: relative;
  // z-index: -100;
  span,
  .title,
  .li-title,
  .text {
    cursor: default;
  }

  // span {
  //   width: 38px;
  // }
  // overflow: hidden;
  // 首页--视频播放
  .home-box {
    height: calc(100% - 90px);
    position: relative;

    .home {
      position: relative;
      width: 100%;
      flex-shrink: 0;

      .video {
        // height: 100vh;
        // background-color: pink;
        margin-top: 0px;
        // z-index: -100;
        overflow: hidden;
        position: relative;
        height: 100%;

        video {
          height: 100%;
        }

        video::-webkit-media-controls-timeline {
          margin-bottom: 70px;
          /* 设置进度条与控制条之间的垂直距离 */
        }

        .title {
          position: absolute;
          // top: 350px;
          top: 45%;
          left: 50%;
          color: #fff;
          font-family: "Source Han Serif SC VF";
          transform: translate(-50%, -50%);
          font-size: 2.5rem;
          // z-index: 100;  40
          // animation: slideOutRight 2s 6s forwards;
        }

        video {
          width: 100%;
          height: 100%;
          // height: calc(100vh - 90px);
          // transform: scale(2);
          display: block;
          // cursor: pointer;
        }

        .play-button {
          position: absolute;
          top: 52%;
          left: 50%;
          transform: translate(-50%, -50%);
          // z-index: 9999;
          color: #fff;
          padding: 10px;
          font-size: 3rem;
          cursor: pointer;
        }
      }

      .img {
        margin-top: 0px;
        //  width: 100%;
        overflow: hidden;
        height: 100%;
        //  display: flex;
        //  justify-content: center;

        img {
          width: 100%;
          height: 100%;
          //  object-fit: contain;
          object-fit: cover;
        }
      }
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

    // .slide-enter-active,
    // .slide-leave-active {
    //   transition: all 2s;
    // }

    // .slide-enter,
    // .slide-leave-to {
    //   opacity: 0;
    //   transform: translateX(-100%);
    // }

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s ease;
    }

    .fade-enter,
    .fade-leave-to {
      opacity: 0;
    }

    .fade-enter-to,
    .fade-leave {
      opacity: 1;
    }
  }

  // 中信集团发展养老业务平台
  .elder_care_platform {
    // height: 580px;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    font-family: "Source Han Serif SC VF";
    z-index: 10;

    //相关数据
    .aboutData {
      width: 100%;
      // height: 580px;
      // background-color: green;
      padding-top: 100px;
      z-index: 10;
      text-align: center;
      margin: 0 auto;

      .platformTitle {
        // height: 70px;
        line-height: 70px;
        // font-size: 36px;
        font-size: 2.3rem;
        // background-color: yellow;
        font-weight: 600;
        // font-family: Roboto, "Source Han Serif SC VF";
        font-family: "Source Han Serif SC VF";

        .mobile {
          display: none;
        }
      }

      .platformTags {
        display: flex;
        width: 430px;
        max-width: 100%;
        justify-content: space-between;
        margin: 0 auto;
        padding: 10px 0 20px 0;

        .platformTag {
          font-size: 1.4rem;
          display: flex;
          /* .tagLeft,
          .tagRight {
          }
          .tagFont {
            // padding: 0 10px;
          } */
        }
      }

      .platformIntro {
        height: 60px;
        // background-color: blue;
        font-size: 22px;
      }

      .mobile-subject {
        display: none;
      }

      .platformContain {
        height: 100px;
        line-height: 100px;

        .mobile {
          display: none;
        }

        // background-color: pink;
        .font {
          font-size: 22px;
        }

        .web .symbol {
          font-size: 22px;
          margin-left: 30px;
        }

        .num {
          font-size: 60px;
          margin-left: 30px;
          color: #ba000e;
        }

        .symbol-margin {
          margin-left: 0px !important;
        }
      }

      .knowMore {
        width: 132px;
        height: 48px;
        line-height: 48px;
        background-color: #ededed;
        font-size: 16px;
        color: #6c6c6c;
        margin: 0 auto;
        margin-bottom: 20px;
        margin-top: 20px;
        // cursor: pointer;
      }

      .knowMore:hover {
        background-color: #b9000e;
        color: #fff;
        /* 或者其他样式 */
      }
    }
  }

  // 重点新闻
  .important_news {
    height: 895px;
    width: 100%;
    //  width: 1200px;

    // background-color: blue;
    display: flex;
    //  justify-content: center;
    //  align-items: center;
    // border: 1px solid pink;
    background: url("../assets/images/index/focusNew.png");
    background-size: cover;
    /* 将背景图片铺满整个页面 */
    background-position: center;
    /* 将背景图片从中心放大 */
    background-repeat: no-repeat;
    /* 禁止背景图片重复 */
    font-family: "Source Han Serif SC VF";

    // 主要新闻信息
    .main_news {
      //  width: 100%;
      width: 1200px;
      height: 895px;
      //  overflow: hidden;
      margin: 0 auto;
      position: relative;

      // padding: 85px 0 105px;
      // border: 1px solid blue;
      // background-color: #c51e1e;
      .newstitle {
        height: 273px;
        line-height: 273px;
        font-size: 40px;
        font-weight: 600;
        color: #fff;
        // background-color: #fff;
        // margin: 0 auto;
        text-align: center;
      }

      .news_row {
        width: 100%;
        //  width: 1200px;
        height: 500px;
        display: flex;

        //  position: relative;
        //  justify-content: space-between;
        .row {
          //  background-color: #ffffff;
          width: 350px;
          height: 500px;
          box-sizing: border-box;
          //  margin: 0 25px;

          // padding-top: 272px;
          // font-size: 16px;
          .news_item {
            cursor: pointer;
          }

          .png {
            height: 220px;
            //  width: 100%;

            img {
              width: 350px;
              /* 图片宽度占满容器 */
              height: 100%;
              /* 图片高度占满容器 */
              object-position: center center;
            }
          }

          .font {
            height: 225px;
            width: 350px;
            overflow: hidden;
            border-bottom: 1px solid #b9000e;
            padding: 0 18px;
            background-color: #ffffff;

            .news_title {
              font-size: 21px;
              margin: 12px 0;
              max-height: 110px;
              // font-weight: 600;
              color: #b6222d;
              /* 显示省略号 */
              text-overflow: ellipsis;
              /* 将元素作为弹性伸缩盒子模型展示 */
              display: -webkit-box;
              /* 显示多少行文字 */
              -webkit-line-clamp: 3;
              /* 文本垂直排列 */
              -webkit-box-orient: vertical;
              /* 隐藏溢出的内容 */
              overflow: hidden;
            }

            .news_contain {
              font-size: 16px;
              background-color: #ffffff;
              text-overflow: ellipsis;
              /* 显示省略号 */
              display: -webkit-box;
              /* 将元素作为弹性伸缩盒子模型展示 */
              -webkit-line-clamp: 4;
              /* 显示多少行文字 */
              -webkit-box-orient: vertical;
              /* 文本垂直排列 */
              overflow: hidden;
              /* 隐藏溢出的内容 */
            }
          }

          .checkAll {
            height: 49px;
            width: 350px;
            line-height: 49px;
            // text-align: end;
            display: flex;
            justify-content: space-between;
            // background-color: #fccccc;
            font-size: 16px;
            color: #6c6c6c;
            padding: 0 18px;
            background-color: #ffffff;
            //  position: absolute;
            //  bottom: 0;
          }
        }

        .swiper-pagination {
          left: 50%;
          width: 150px;
          bottom: 5px;
          transform: translateX(-50%);
        }
      }

      //轮播左键
      .news_left {
        height: 50px;
        width: 50px;
        // border: 1px solid #c0c0c0;
        position: absolute;
        border-radius: 50%;
        top: 500px;
        left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(72, 72, 72, 0.2);
        transition: 0.3s;
        z-index: 5;
        cursor: pointer;

        .news_icon {
          font-size: 32px;
          color: #fff;
        }
      }

      .news_left:active {
        background-color: rgba(72, 72, 72, 0.7);
      }

      //轮播右键
      .news_right {
        height: 50px;
        width: 50px;
        // border: 1px solid #c0c0c0;
        border-radius: 50%;
        position: absolute;
        top: 500px;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(72, 72, 72, 0.2);
        transition: 0.3s;
        z-index: 5;
        cursor: pointer;

        .news_icon {
          font-size: 32px;
          color: #fff;
        }
      }

      .news_right:active {
        background-color: rgba(72, 72, 72, 0.7);
      }

      //解决频繁点击轮播按钮出现蓝色的问题
      ::selection {
        color: initial;
        background: initial;
      }

      .bottom {
        display: none;
      }
    }
  }

  // 三大产品线
  .three_pro {
    //  height: 1133px;
    width: 100%;
    // background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid pink;

    // 主要新闻信息
    .main_pro {
      // width: 1200px;
      margin-bottom: 30px;
      width: 100%;
      //  height: 1133px;
      // background-color: #4c8fee;
      padding-top: 68px;
      text-align: center;
      position: relative;
      z-index: 1;

      .proTitle {
        font-size: 40px;
        font-weight: 600;
        color: #ab000d;
        height: 99px;
        line-height: 99px;
        font-family: Roboto, "Source Han Serif SC VF", sans-serif;
        // font-family: "Source Han Serif";
      }

      //解决频繁点击轮播按钮出现蓝色的问题
      ::selection {
        color: #ab000d;
        background: initial;
      }

      .kuanRedmain_proprointro {
        font-size: 22px;
        font-weight: bold;
      }

      .prointro {
        height: 70px;
        font-size: 25px;
        // background-color: yellow;
        font-family: "Source Han Serif SC VF";
      }

      .three_button {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 20px;

        // background-color: #c51e1e;
        // 选中的
        .one {
          width: 132px;
          line-height: 41px;
          height: 41px;
          text-align: center;
          background-color: #b9000d;
          color: #fff;
          margin: 0 6px;
          font-family: "Source Han Serif SC VF";
        }

        // 未选中的
        .ones {
          width: 132px;
          line-height: 41px;
          height: 41px;
          text-align: center;
          background-color: #c0c0c0;

          margin: 0 6px;
          font-family: "Source Han Serif SC VF";
        }
      }

      // 轮播图
      .pro_carousel {
        margin-top: 50px;
        //  height: 700px;
        width: 1200px;
        margin: 50px auto;
        padding-bottom: 20px;
        z-index: 100;
        box-sizing: border-box;
        border: 5px solid #fff;
        position: relative;
        background-color: #fff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

        .product_left {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          height: 45px;
          width: 45px;
          background-color: rgba(255, 255, 255, 0.7);
          cursor: pointer;

          .product_icon {
            color: rgba(72, 72, 72, 0.8);
            font-size: 26px;
          }
        }

        .product_right {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          height: 45px;
          width: 45px;
          background-color: rgba(255, 255, 255, 0.7);
          cursor: pointer;

          .product_icon {
            color: rgba(72, 72, 72, 0.8);
            font-size: 26px;
          }
        }

        .product_left:active,
        .product_right:active {
          background-color: #ba000e;
        }

        .main_carousel {
          width: 1190px;
          height: 560px;
          background-color: #fff;
          overflow: hidden;

          img {
            width: 1190px;
            margin-top: -40px;
            // height: 560px !important;
          }
        }

        //解决频繁点击轮播按钮出现蓝色的问题
        ::selection {
          color: initial;
          background: initial;
        }

        .main_font {
          width: 1165px;
          height: 140px;
          padding-left: 25px;
          margin-top: -35px;
          background-color: #fff;
          font-family: "Source Han Serif SC VF";
          display: flex;
          justify-content: space-between;

          .world {
            position: relative;

            .left {
              display: flex;
              justify-content: left;
              position: relative;

              .number {
                width: 110px;
                height: 90px;
                line-height: 90px;
                background-color: #b9000d;
                color: #fff;

                .span1 {
                  font-size: 45px;
                }

                .span2 {
                  font-size: 20px;
                }
              }

              .font {
                font-size: 27px;
                position: absolute;
                left: 125px;
                text-align: left;
                bottom: 0;
                width: 400px;
                font-weight: 600;
              }
            }

            .know_more {
              position: absolute;
              bottom: 0;
              left: 0;
              cursor: pointer;
              font-size: 16px;
            }
          }

          .font_link {
            height: 140px;
            width: 500px;
            display: flex;
            flex-wrap: wrap;
            padding-top: 45px;
            justify-content: flex-end;

            .link_box {
              // width: 90px;
              height: 40px;
              line-height: 40px;
              color: #fff;
              font-size: 18px;
              padding: 0 5px;
              margin: 0 5px;
              background-color: #a4a3a3;
              cursor: pointer;

              // margin-left: auto;
              a:hover {
                color: #fff;
              }
            }

            .active {
              background-color: #ba000e;
            }
          }
        }
      }

      .kuanRed {
        height: 182px;
        width: 100%;
        background-color: #ba000e;
        position: absolute;
        top: 550px;
        left: 0;
        z-index: -1;
      }

      // 移动端
      .changePro {
        display: none;
        width: 100%;

        .pro_carousels {
          padding: 50px 0 0;

          .top-title {
            position: relative;
            color: #ab000d;
            font-size: 30px;
            font-weight: 500;

            &::after {
              display: block;
              font-size: 84px;
              font-weight: bold;
              color: rgba(204, 204, 204, 0.5);
              position: absolute;
              bottom: 5px;
              line-height: 84px;
              margin: auto;
              left: 0;
              right: 0;
              z-index: -1;
            }
          }

          &:nth-child(1) .top-title::after {
            content: "1";
          }

          &:nth-child(2) .top-title::after {
            content: "2";
          }

          &:nth-child(3) .top-title::after {
            content: "3";
          }

          .carousel {
            position: relative;

            &::after {
              content: "";
              height: 60%;
              width: 100%;
              background-color: #ba000e;
              position: absolute;
              inset: 0;
              margin: auto;
              z-index: -1;
            }

            .carousel-item {
              width: calc(100% - 60px) !important;
              margin: 20px 30px;
              // height: 500px;
              padding: 10px;
              background-color: #fff;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

              .item-top {
                display: flex;

                .left {
                  line-height: 80px;
                  width: 90px;
                  height: 80px;
                  background-color: #ba000e;
                  color: white;
                  font-size: 40px;
                  font-weight: bold;
                  flex-shrink: 0;

                  .sign {
                    font-size: 30px;
                  }
                }

                .right {
                  margin-left: 10px;
                  font-size: 24px;
                  font-weight: bold;
                  display: flex;
                  align-items: flex-end;
                  text-align: left;
                }
              }

              .item-bottom {
                position: relative;
                margin-top: 10px;

                .img {
                  width: 100%;
                  aspect-ratio: 16/9;

                  img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  }
                }

                .item-tag {
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  margin-top: 10px;
                  font-size: 16px;

                  .learn-more {
                    padding: 5px;
                  }

                  .img-title {
                    background-color: #ba000e;
                    color: white;
                    padding: 5px;
                  }
                }

                // .img-title {
                //   position: absolute;
                //   bottom: 10px;
                //   left: 15px;
                //   color: white;
                //   font-size: 24px;
                //   font-weight: bold;
                //   // 字间距
                //   letter-spacing: 2px;
                // }
              }
            }
          }

          .bottom {
            font-size: 16px;
            color: rgb(103, 103, 103);
            margin-bottom: 10px;
          }
        }
      }
    }
  }

  // 旅居短住
  .short_stay_box {

    //display: none;
    // web端
    .short_stay {
      height: 912px;
      width: 100%;
      // background-color: blue;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url("../assets/images/index/xh.jpg");
      background-size: cover;
      /* 调整背景图片的大小 */
      background-repeat: no-repeat;
      /* 禁止背景图片重复 */
      box-sizing: border-box;

      // 主要新闻信息
      .main_stay {
        width: 1200px;
        height: 912px;
        // background-color: pink;
        // border-bottom: 3px solid #ba000e;
        padding-top: 53px;
        text-align: center;

        .title {
          height: 137px;
          line-height: 137px;
          // background-color: #edb7b7;
          font-size: 40px;
          font-weight: 600;
          color: #fff;
          font-family: "Source Han Serif SC VF";
        }

        .Stay_row {
          width: 1200px;
          height: 605px;

          // background-color: yellow;
          // display: flex;
          // justify-content: space-between;
          .knowMore {
            cursor: pointer;
          }

          .row1,
          .row2,
          .row3 {
            background-color: #ed4646;
            width: 350px;
            height: 605px;
            background-size: 100% 100%;
            font-size: 16px;
            position: relative;
            cursor: pointer;

            .row-content-box {
              position: absolute;
              bottom: 0;
              width: 100%;
            }

            .shengtai {
              // padding-top: 272px;
              height: 48px;
              line-height: 48px;
              width: 157px;
              font-size: 26px;
              color: #fff;
              background-color: #c3000f;
              text-align: center;
              margin: 0 auto;
              font-family: "Source Han Serif SC VF";
            }

            p {
              max-width: 350px;
              line-height: 1.8;
              // font-weight: 600;
              letter-spacing: 2.05px;
              padding: 18px 0;
              border-bottom: 1px solid #ba000e;
              margin: 0 auto;
              font-family: "Source Han Serif SC VF";
            }

            .knowMore {
              height: 48px;
              line-height: 48px;
              // background-color: green;
              color: #6c6c6c;
              font-family: "Source Han Serif SC VF";
            }
          }

          .row1 {
            background: url("../assets/images/index/stayrow1.jpg");
            //  background-size: contain;
            /* 调整背景图片的大小 */
            background-repeat: no-repeat;
            /* 禁止背景图片重复 */
            background-position: center;
            /* 将背景图片居中显示 */
          }

          .row2 {
            background: url("../assets/images/index/stayrow2.jpg");
            //  background-size: contain;
            /* 调整背景图片的大小 */
            background-repeat: no-repeat;
            /* 禁止背景图片重复 */
            background-position: center;
            /* 将背景图片居中显示 */
          }

          .row3 {
            background: url("../assets/images/index/stayrow3.jpg");
            //  background-size: contain;
            /* 调整背景图片的大小 */
            background-repeat: no-repeat;
            /* 禁止背景图片重复 */
            background-position: center;
            /* 将背景图片居中显示 */
          }
        }
      }
    }

    // 移动端
    /*  .short_stay_mobile {
      display: none;
      .main_stay {
        background-color: #cacfe3;
        .title {
          font-size: 30px;
          font-weight: bold;
          color: #fff;
          padding: 24vw 0 30vw;
          text-align: center;
          background-image: url("../assets/images/index/stay_bg.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          letter-spacing: 5px;
        }
        .stay_box {
          padding-bottom: 50px;
          .stay_item {
            background-color: #fff;
            margin: 10px;
            padding: 10px;
            display: flex;
            align-items: center;
            .left-img {
              aspect-ratio: 1 / 1;
              height: 100%;
              width: 44%;
              flex-shrink: 0;
              img {
                height: 100%;
                width: 100%;
              }
            }
            .item-content-box {
              margin: 0 0 0 10px;
              .item-title {
                padding: 10px 0;
                font-size: 24px;
                // font-size: 6vw;
                color: #ab000d;
              }
              .list-item {
                li {
                  list-style-type: disc;
                  margin-left: 24px;
                  color: #515151;
                  // font-size: 3.8vw;
                  font-size: 16px;
                  position: relative;
                  display: list-item;
                  &::marker {
                    font-size: 16px;
                  }
                }
                // .item {
                //   margin-left: 10px;
                //   font-size: 16px;
                //   color: #515151;
                //   position: relative;
                //   &::before {
                //     content: "";
                //     display: inline-block;
                //     width: 4px;
                //     height: 4px;
                //     border-radius: 50%;
                //     font-size: 16px;
                //     background-color: #515151;
                //     vertical-align: middle;
                //   }
                // }
              }
            }
          }
        }
      }
    } */
  }
}

// input输入框的背景颜色
.ant-input {
  background-color: transparent !important;
  border: 1px solid #fff;
  color: #fff;
  height: 30px;
  margin-left: 5px;
}

// 多选框
// .ant-select-selection-selected-value{
//   background-color: #fff;
// }
.ant-select {
  // background-color: #fff;
  // border: 1px solid #fff;
  height: 30px;
  // width: 100px !important;
  color: #afaeae;
  // padding-left: 11px;
  margin: 0 8px;
}

//下拉框
// .anticon,.anticon-down,.ant-select-arrow-icon{
//   background-color: yellow;
// }

// 中信集团发展养老业务的平台
@media screen and (max-width: 1018px) and (min-width: 768px) {
  .index.container {
    .elder_care_platform .aboutData {
      padding-top: 130px;

      .platformTags {
        .platformTag {
          font-size: 1.8rem;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .index.container {

    // 中信集团发展养老业务的平台
    .elder_care_platform .aboutData {
      padding-top: 0;
      padding: 20px 0;

      .platformTitle {
        .web {
          display: none;
        }

        .mobile {
          display: block;
          // line-height: 50px;
          line-height: normal;
          // padding: 10px 0;
          font-weight: 600;
          font-size: 24px;
        }
      }

      .platformTags {
        margin: 10px 20px 15px;
        justify-content: space-between;
        width: auto;

        .platformTag {
          // font-size: 1.9rem;
          font-size: 22px;
        }
      }

      .mobile-subject {
        display: block;
        // font-size: 2.3rem;
        font-size: 24px;
        font-weight: 600;
        line-height: 50px;
      }

      .platformContain {
        line-height: normal;
        height: auto;

        .web {
          display: none;
        }

        .mobile {
          display: flex;
          line-height: normal;
          justify-content: space-between;
          margin: 0 30px;

          .mobile-item {
            padding: 10px 4px;

            // display: flex;
            // flex-direction: column;
            // align-items: center;
            .num {
              margin: 0;
              // font-size: 4rem;
              font-size: 22px;
              font-weight: bold;
            }

            .font {
              // font-size: 1.8rem;
              font-size: 22px;
            }
          }
        }
      }

      .knowMore {
        height: auto;
        line-height: normal;
        padding: 10px;
        width: fit-content;
      }
    }

    // 公司要闻
    .important_news {
      background-image: none;
      background-color: rgb(245, 245, 245);
      height: auto;
      padding-bottom: 10px;

      .main_news {
        height: auto;
        width: 100%;

        .newstitle {
          color: black;
          height: auto;
          line-height: normal;
          padding: 30px 0;
          font-size: 30px;
        }

        .news_row .row .png img {
          object-fit: cover;
        }

        .news_row .row {

          .png img,
          .font,
          .checkAll {
            width: 100%;
          }

          .font {
            .news_title {
              -webkit-line-clamp: 2;
              font-size: 22px;
            }

            .news_contain {
              min-height: calc(4 * 1.5em);
            }
          }

          .checkAll .all-icon {
            display: none;
          }
        }

        .bottom {
          text-align: center;
          padding: 20px 0;
          font-size: 16px;
          display: block;
        }
      }
    }

    // 三大产品线
    .three_pro .main_pro {
      padding-top: 0;

      .proTitle {
        padding: 30px 0 15px;
        font-size: 30px;
        line-height: normal;
        height: auto;
      }

      .kuanRedmain_proprointro {
        font-size: 22px;
        margin-bottom: 15px;
      }

      .changePro_web {
        display: none;
      }

      .changePro {
        display: block;
      }
    }

    // 旅居短住
    .short_stay_box {
      .short_stay .main_stay {
        .title {
          font-size: 30px;
        }

        .Stay_row {
          .row-content-box {
            .shengtai {
              font-size: 24px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 423px) {
  .index.container {

    // 中信集团发展养老业务的平台
    .elder_care_platform .aboutData {
      .platformTitle .mobile {
        font-size: 5.8vw;
        line-height: normal;
      }

      .platformTags .platformTag {
        font-size: 4.9vw;
      }

      .mobile-subject {
        line-height: normal;
        font-size: 5.7vw;
      }

      .platformContain .mobile .mobile-item {
        padding: 10px 0;

        .num {
          font-size: 5.5vw;
        }

        .font {
          font-size: 4.9vw;
        }
      }

      .knowMore {
        // font-size: 4.5vw;
        font-size: 3.8vw;
      }
    }

    // 公司要闻
    .important_news {
      .main_news {
        .newstitle {
          font-size: 7.2vw;
        }

        .news_row {
          height: auto;

          .row {
            height: auto;

            .font {
              padding-bottom: 10px;
              height: auto;

              .news_title {
                font-size: 5.2vw;
                // min-height: 62px;
                // min-height: calc(3 * 1.5em);
                // 标题显示两行
                // -webkit-line-clamp: 2;
              }

              .news_contain {
                font-size: 3.8vw;
              }
            }

            .checkAll {
              font-size: 3.8vw;
            }
          }
        }

        .bottom {
          font-size: 3.8vw;
        }
      }
    }

    // 三大产品线
    .three_pro .main_pro {
      .proTitle {
        font-size: 7.2vw;
      }

      .kuanRedmain_proprointro {
        font-size: 4.8vw;
      }

      .changePro {
        .pro_carousels {
          padding: 30px 0 0;

          .top-title {
            font-size: 7.2vw;

            &::after {
              // font-size: 64px;
              // line-height: 64px;
              font-size: 15.4vw;
              line-height: 15.4vw;
              bottom: 2px;
            }
          }

          .carousel {
            .carousel-item {
              .item-top {
                .left {
                  line-height: normal;
                  width: auto;
                  height: auto;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding: 5px;
                  font-size: 7.6vw;

                  .sign {
                    font-size: 6.4vw;
                  }
                }

                .right {
                  font-size: 6.2vw;

                  .mobile-br {
                    display: none;
                  }
                }
              }

              .item-bottom {
                .item-tag {
                  font-size: 4vw;
                }
              }
            }
          }
        }
      }
    }

    // 旅居服务
    // .short_stay_box {
    // .short_stay_mobile {
    //   .main_stay {
    //     .title {
    //       font-size: 7.2vw;
    //     }
    //     .stay_box .stay_item {
    //       .item-content-box {
    //         .item-title {
    //           font-size: 6.2vw;
    //         }
    //         .list-item {
    //           li {
    //             font-size: 5vw;
    //             &::marker {
    //               font-size: 5vw;
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    // }
  }
}

@media screen and (max-width: 1200px) and (min-width: 1140px) {
  .index.container {
    .important_news {
      .main_news {
        width: 100%;

        .newstitle {
          font-size: 36px;
        }

        // .news_row {}
      }
    }
  }
}

@media screen and (max-width: 1215px) and (min-width: 1065px) {
  // .index.container {
  //   .important_news {
  //     .main_news {
  //       width: 100%;
  //       .newstitle {
  //         font-size: 38px;
  //       }
  //       // .news_row {}
  //     }
  //   }
  // }
}

@media screen and (max-width: 1064px) and (min-width: 768px) {
  .index.container {
    .important_news {
      .main_news {
        width: 100%;

        .newstitle {
          font-size: 30px;
        }

        .news_row {
          height: 540px;

          .row {
            width: 40%;
            height: 540px;
            background-color: #fff;

            .png {
              height: auto;
              width: 100%;

              img {
                width: 100%;
                height: 260px;
              }
            }

            .font {
              width: 100%;

              .news_title {
                font-size: 22px;
              }

              .news_contain {
                font-size: 16px;
              }
            }

            .checkAll {
              width: 100%;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1050px) {
  .index.container {
    .home-box {
      margin-top: 75px;
    }

    .elder_care_platform {
      .fixed {
        top: 75px;
        box-shadow: none;
      }
    }
  }
}

@media screen and (max-width: 992px) {}

@media screen and(max-width:1215px) and(min-width:992px) {
  .index.container {
    .home {
      .home_left {
        height: 45px;
        width: 45px;

        .news_icon {
          font-size: 30px;
        }
      }

      .home_right {
        height: 45px;
        width: 45px;

        .news_icon {
          font-size: 30px;
        }
      }
    }

    .important_news {
      .main_news {
        width: 100%;

        .newstitle {
          font-size: 38px;
        }
      }
    }

    .three_pro {
      .main_pro {
        .proTitle {
          font-size: 38px;
        }

        .kuanRedmain_proprointro {
          font-size: 20px;
        }

        .three_button {
          .one {
            width: 120px;
            line-height: 38px;
            height: 38px;
          }

          .ones {
            width: 120px;
            line-height: 38px;
            height: 38px;
          }
        }

        .pro_carousel {
          box-sizing: border-box;
          width: auto;
          margin-left: 20px;
          margin-right: 20px;

          // .product_left {}

          // .product_right {}

          .main_carousel {
            width: 100%;
            height: 47vw;

            img {
              width: 100%;
            }
          }

          .main_font {
            width: 100%;
            margin-top: -25px;

            .world {
              .left {
                .number {
                  width: 100px;
                  height: 80px;
                  line-height: 80px;

                  .span1 {
                    font-size: 42px;
                  }

                  .span2 {
                    font-size: 18px;
                  }
                }

                .font {
                  font-size: 24px;
                }
              }

              // .know_more {}
            }

            .font_link {
              .link_box {
                height: 38px;
                line-height: 38px;
              }
            }
          }
        }
      }
    }

    .short_stay_box {
      .short_stay .main_stay .title {
        font-size: 38px;
      }
    }
  }
}

@media screen and(max-width:991px) and(min-width:768px) {
  .index.container {
    .home {
      .video {
        .title {
          font-size: 2rem;
        }
      }

      .home_left {
        height: 40px;
        width: 40px;

        .news_icon {
          font-size: 28px;
        }
      }

      .home_right {
        height: 40px;
        width: 40px;

        .news_icon {
          font-size: 28px;
        }
      }
    }

    // .elder_care_platform {
    //   .aboutData {
    //     .platformTitle {
    //       font-size: 32px;
    //     }

    //     .platformIntro {
    //       font-size: 20px;
    //     }

    //     .platformContain {
    //       height: 100px;
    //       line-height: 100px;

    //       .font {
    //         font-size: 20px;
    //       }

    //       .num {
    //         margin-left: 20px;
    //         font-size: 50px;
    //       }
    //     }
    //   }
    // }
    .important_news {
      .main_news {
        .newstitle {
          font-size: 36px;
        }
      }
    }

    .three_pro {
      .main_pro {
        .proTitle {
          font-size: 36px;
        }

        .kuanRedmain_proprointro {
          font-size: 18px;
        }

        .three_button {
          .one {
            width: 110px;
            line-height: 36px;
            height: 36px;
          }

          .ones {
            width: 110px;
            line-height: 36px;
            height: 36px;
          }
        }

        .pro_carousel {
          width: auto;
          margin-left: 20px;
          margin-right: 20px;

          // .product_left {}

          // .product_right {}

          .main_carousel {
            width: 100%;
            height: 47vw;

            img {
              width: 100%;
            }
          }

          .main_font {
            width: 100%;
            margin-top: -15px;

            .world {
              .left {
                .number {
                  width: 90px;
                  height: 70px;
                  line-height: 70px;

                  .span1 {
                    font-size: 40px;
                  }

                  .span2 {
                    font-size: 16px;
                  }
                }

                .font {
                  font-size: 22px;
                }
              }

              // .know_more {}
            }

            .font_link {
              .link_box {
                height: 36px;
                line-height: 36px;
              }
            }
          }
        }
      }
    }

    .short_stay_box {
      .short_stay .main_stay .title {
        font-size: 36px;
      }
    }
  }
}

@media screen and(max-width: 940px) and(min-width:768px) {
  .index.container {
    .three_pro {
      .main_pro {
        .proTitle {
          font-size: 36px;
        }

        .kuanRedmain_proprointro {
          font-size: 18px;
        }

        .three_button {
          .one {
            width: 110px;
            line-height: 36px;
            height: 36px;
          }

          .ones {
            width: 110px;
            line-height: 36px;
            height: 36px;
          }
        }

        .pro_carousel {
          .main_carousel {
            width: 100%;
            height: 47vw;

            img {
              width: 100%;
            }
          }

          .main_font {
            width: 100%;
            margin-top: -15px;
            padding-left: 0;

            .world {
              .left {
                .number {
                  width: 80px;
                  height: 70px;
                  line-height: 70px;

                  .span1 {
                    font-size: 38px;
                  }

                  .span2 {
                    font-size: 16px;
                  }
                }

                .font {
                  font-size: 20px;
                  left: 90px;
                }
              }
            }

            .font_link {
              .link_box {
                height: 34px;
                line-height: 34px;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and(max-width:768px) {
  .index.container {
    .home {
      .video {
        .title {
          font-size: 1.5rem;
        }
      }

      .home_left {
        height: 35px;
        width: 35px;

        .news_icon {
          font-size: 22px;
        }
      }

      .home_right {
        height: 35px;
        width: 35px;

        .news_icon {
          font-size: 22px;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .index.container {

    // 公司要闻
    .important_news {
      .main_news {
        .news_row {
          margin: 0 40px;
          width: calc(100% - 80px);
        }
      }
    }

    // 旅居服务
    .short_stay_box {

      // 旅居短住
      .short_stay {
        .main_stay {
          width: 100%;

          .Stay_row {
            width: auto;
            margin: 0 40px;
            width: calc(100% - 80px);

            // justify-content: space-evenly;
            .row1,
            .row2,
            .row3 {
              width: auto;

              p {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1140px) {
  .index.container {
    .important_news .main_news {
      .news_row {
        margin: 0 120px;
        width: calc(100% - 240px);
      }
    }

    .short_stay_box {
      .short_stay .main_stay .Stay_row {
        margin: 0 120px;
        width: calc(100% - 240px);
      }
    }
  }
}

@media screen and (max-width: 1050px) {
  // .index.container {
  // 旅居短住
  // .short_stay_box {
  //   .short_stay {
  //     .main_stay {
  //       .Stay_row {
  //         .row1,
  //         .row2,
  //         .row3 {
  //           font-size: 15px;
  //           .shengtai {
  //             width: 120px;
  //             height: 40px;
  //             line-height: 40px;
  //             font-size: 20px;
  //           }
  //           p {
  //             width: 100%;
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // }
}

@media screen and (max-width: 992px) {
  .index.container {

    // 公司要闻
    .important_news .main_news {
      .news_left {
        left: 60px;
      }

      .news_right {
        right: 60px;
      }

      .news_row {
        margin: 0 30px;
        width: calc(100% - 60px);

        .row {
          width: 340px;
        }
      }
    }
  }
}

@media screen and (max-width: 868px) {
  .index.container {

    // 旅居短住
    .short_stay_box {
      .short_stay {
        height: auto;

        .main_stay {
          height: auto;

          .Stay_row {
            // justify-content: space-between;
            // height: auto;
            // display: block;
            // position: relative;
            // padding: 0 20px;
            margin-bottom: 80px;
            // .row1,
            // .row2,
            // .row3 {
            // width: 32%;
            // }
            // .row1,
            // .row2,
            // .row3 {
            //   font-size: 14px;
            //   position: inherit;
            //   height: 300px;
            //   background-size: 30% 160%;
            //   background-position: 0 0;
            //   margin: 15px 0;
            //   width: 100%;
            //   background-color: #fff;

            //   .row-content-box {
            //     height: 100%;

            //     .shengtai {
            //       width: 120px;
            //       flex-shrink: 0;
            //       height: 30px;
            //       line-height: 30px;
            //       font-size: 18px;
            //       position: absolute;
            //       top: 20px;
            //       left: -10px;
            //     }
            //   }

            //   p {
            //     font-size: 16px;
            //     width: 70%;
            //     border-bottom: none;
            //     margin-left: 30%;
            //     height: 252px;
            //     box-sizing: border-box;
            //     border-bottom: 1px solid #ba000e;
            //     padding: 20px 0;
            //   }

            //   .knowMore {
            //     margin-left: 30%;
            //     width: 70%;
            //     text-align: right;
            //     box-sizing: border-box;
            //     padding: 0 20px;
            //   }
            // }
          }
        }
      }
    }
  }
}
</style>

<style lang="less">
.ant-select-selection {
  background-color: transparent !important;
  color: white;
}

.ant-select-focused .ant-select-selection,
.ant-select-selection:focus,
.ant-select-selection:active,
.ant-select-selection:hover {
  border-color: inherit;
}

.ant-select-dropdown-menu-item {
  font-family: "Source Han Serif SC VF" !important;
}
</style>
