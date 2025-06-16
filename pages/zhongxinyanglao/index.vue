<template>
  <!-- 新闻 -->
  <div class="news">
    <!-- 封面部分-->
    <div class="news-cover" @mouseleave="buttonControls()" @mouseenter="buttonControl()">
      <div class="cover-title" @click="toggleVideo()" v-if="showImg">
        中信养老<span class="spacing"></span>中信集团养老业务发展平台
      </div>
      <video :src="$config.videoUrl + '/video3s.mp4'" loop class="video" :controls="showControls" id="myVideo"
        :poster="require('../../assets/images/zhongxinyanglao/video-img.png')" @click="toggleVideo()"
        controlslist="nodownload" webkit-playsinline="true" x-webkit-airplay="true" playsinline="true"
        x5-video-player-type="h5" x5-video-orientation="h5" x5-video-player-fullscreen="true" preload="auto">
        Your browser does not support the video tag.
      </video>
      <div class="play-button" id="playButton" @click="toggleVideo()">
        <a-icon type="play-circle" />
      </div>
      <!-- <div class="pause-button" id="pauseButton" @click="toggleVideo()">
                <a-icon type="pause-circle" />
            </div> -->
    </div>
    <!-- 主体内容 -->
    <div class="wai">
      <div class="intro">
        <div class="intro_content">
          <div class="title">中信养老</div>
          <div class="red_gang"></div>
          <div class="paragraph">
            中信养老（上海中信兴业养老服务发展有限公司），是中信集团一级子公司“中信兴业投资集团有限公司”全资子公司，是中信集团养老业务发展平台。
          </div>
          <div class="paragraph">
            中信养老现有投资规模超过30亿元，立足以上海为核心的长三角地区，连锁布局深耕重点城市。目前在上海、杭州运营管理10个项目，布局床位数超6500张，其中上海单一城市床位数突破6000张，在上海中高端养老市场占据领先地位。
          </div>
          <div class="paragraph">
            目前已经形成“信澜天地、信福&信悦、信养之家”等信字系列产品线，可提供包括针对“活力人群的疗休养旅居、退休健康人群的康养公寓、适合高龄自理和高龄照护型长者的养老机构、生活不能自理及认知症长者对应的护理院“等多元产品。
          </div>
          <div class="paragraph">
            中信养老，以“都市型、一站式、医康养”为特色，提供全龄全场景解决方案。专注于“市场化、可支付、高品质”的集中式养老服务，力争发展成为特色鲜明、能力一流、规模领先的中国养老行业头部企业。
          </div>
        </div>
        <div class="img">
          <img loading="lazy" src="../../assets/images/zhongxinyanglao/abouts.png" alt="" />
        </div>
      </div>
      <div class="intros">
        <div class="intro_contents">
          <img loading="lazy" v-if="!this.mobileFlag" src="../../assets/images/zhongxinyanglao/abouts.png" alt=""
            align="right" />
          <div class="titles">中信养老</div>
          <div class="red_gangs"></div>
          <p class="paragraphs">
            中信养老（上海中信兴业养老服务发展有限公司），是中信集团一级子公司“中信兴业投资集团有限公司”全资子公司，是中信集团养老业务发展平台。
          </p>
          <p class="paragraphs">
            中信养老现有投资规模超过30亿元，立足以上海为核心的长三角地区，连锁布局深耕重点城市。目前在上海、杭州运营管理10个项目，布局床位数超6500张，其中上海单一城市床位数突破6000张，在上海中高端养老市场占据领先地位。
          </p>
          <p class="paragraphs">
            目前已经形成“信澜天地、信福&信悦、信养之家”等信字系列产品线，可提供包括针对“活力人群的疗休养旅居、退休健康人群的康养公寓、适合高龄自理和高龄照护型长者的养老机构、生活不能自理及认知症长者对应的护理院“等多元产品。
          </p>
          <p class="paragraphs">
            中信养老，以“都市型、一站式、医康养”为特色，提供全龄全场景解决方案。专注于“市场化、可支付、高品质”的集中式养老服务，力争发展成为特色鲜明、能力一流、规模领先的中国养老行业头部企业。
          </p>
        </div>
        <img loading="lazy" v-if="this.mobileFlag" src="../../assets/images/zhongxinyanglao/abouts.png" alt=""
          style="width: 100%" />
      </div>
    </div>
    <!-- 图片变动 -->
    <div class="img_animate">
      <div class="big_title">信澜、信福&信悦、信养</div>
      <div class="small_title">信字系列产品线，全周期养老解决方案</div>
    </div>
    <div class="img_animate_mobile">
      <div>“信字系列”产品线</div>
      <div>全周期养老解决方案</div>
    </div>
    <div class="animateimg">
      <div class="img1" :class="{ active: isActive == 1, page: isActive != 1 }" @mouseenter="openYemian(1)"
        @click="gotoPage('/xinlantiandi')">
        <div v-if="isActive != 1" style="width: 20px; margin: 0 calc(3.5vw - 10px)">
          <img loading="lazy" src="../../assets/images/zhongxinyanglao/icons.png" alt="" />信澜天地
        </div>
        <div v-else class="xuanzhong">
          <div class="xuanzhongTitle">信澜天地</div>
          <div class="xuanzhongintro">崇明东滩 康养+文旅 度假式养老社区</div>
          <div class="xuanzhongadress">
            地址：上海市 崇明区 陈家镇康寿路（福满路）
          </div>
        </div>
      </div>
      <div class="img2" :class="{ active: isActive == 2, page: isActive != 2 }" @mouseenter="openYemian(2)"
        @click="gotoPage('/xinfuxinyue/youyouxinfu')">
        <div v-if="isActive != 2" style="width: 20px; margin: 0 calc(3.5vw - 10px)">
          <img loading="lazy" src="../../assets/images/zhongxinyanglao/icons.png" alt="" />上海浦东由由信福养老院
        </div>
        <div v-else class="xuanzhong">
          <div class="xuanzhongTitle">上海浦东由由信福养老院</div>
          <div class="xuanzhongintro">都市中心 高龄长者持续照料社区</div>
          <div class="xuanzhongadress">地址：上海市 浦东新区 下南路1288弄</div>
        </div>
      </div>
      <div class="img3" :class="{ active: isActive == 3, page: isActive != 3 }" @mouseenter="openYemian(3)"
        @click="gotoPage('/xinfuxinyue/lianyangxinfu')">
        <div v-if="isActive != 3" style="width: 20px; margin: 0 calc(3.5vw - 10px)">
          <img loading="lazy" src="../../assets/images/zhongxinyanglao/icons.png" alt="" />上海浦东联洋信福康养社区
        </div>
        <div v-else class="xuanzhong">
          <!-- <div class="xuanzhongTitle">上海浦东联洋信福康养社区（昆仑邸）</div> -->
          <div class="xuanzhongTitle">上海浦东联洋信福康养社区</div>
          <div class="xuanzhongTitle">（昆仑邸）</div>
          <div class="xuanzhongintro">都市主城区 高龄长者持续照料社区</div>
          <div class="xuanzhongadress">地址：上海市 浦东新区 杨高中路1906号</div>
        </div>
      </div>
      <div class="img4" :class="{ active: isActive == 4, page: isActive != 4 }" @mouseenter="openYemian(4)"
        @click="gotoPage('/xinfuxinyue/xinyue88')">
        <div v-if="isActive != 4" style="width: 20px; margin: 0 calc(3.5vw - 10px)">
          <img loading="lazy" src="../../assets/images/zhongxinyanglao/icons.png" alt="" />杭州信悦88养老院
        </div>
        <div v-else class="xuanzhong">
          <div class="xuanzhongTitle">杭州信悦88养老院</div>
          <div class="xuanzhongintro">都市中心 高龄长者持续照料社区</div>
          <div class="xuanzhongadress">地址：杭州市 上城区 延安路88号</div>
        </div>
      </div>
      <div class="img5" :class="{ active: isActive == 5, page: isActive != 5 }" @mouseenter="openYemian(5)"
        @click="gotoPage('/xinyangzhijia/dachang')">
        <div v-if="isActive != 5" style="width: 20px; margin: 0 calc(3.5vw - 10px)">
          <img loading="lazy" src="../../assets/images/zhongxinyanglao/icons.png" alt="" />宝山大场养老院
        </div>
        <div v-else class="xuanzhong">
          <div class="xuanzhongTitle" v-if="subTitle">
            信养之家 宝山大场养老院
          </div>
          <div class="xuanzhongTitles" v-else>
            <div>信养之家</div>
            <div>宝山大场养老院</div>
          </div>
          <div class="xuanzhongintro">都市连锁 24h生活照料与专业护理机构</div>
          <div class="xuanzhongadress">
            地址：上海市 宝山区 场中路4098弄8号楼
          </div>
        </div>
      </div>
      <div class="img6" :class="{ active: isActive == 6, page: isActive != 6 }" @mouseenter="openYemian(6)"
        @click="gotoPage('/xinyangzhijia/jinxiu')">
        <div v-if="isActive != 6" style="width: 20px; margin: 0 calc(3.5vw - 10px)">
          <img loading="lazy" src="../../assets/images/zhongxinyanglao/icons.png" alt="" />浦东锦绣养老院
        </div>
        <div v-else class="xuanzhong">
          <div class="xuanzhongTitle" v-if="subTitle">
            信养之家 浦东锦绣养老院
          </div>
          <div class="xuanzhongTitles" v-else>
            <div>信养之家</div>
            <div>浦东锦绣养老院</div>
          </div>
          <div class="xuanzhongintro">都市连锁 24h生活照料与专业护理机构</div>
          <div class="xuanzhongadress">地址：浦东新区 北艾路1481-1485号</div>
        </div>
      </div>
      <div class="img7" :class="{ active: isActive == 7, page: isActive != 7 }" @mouseenter="openYemian(7)"
        @click="gotoPage('/xinyangzhijia/xinjiangwan')">
        <div v-if="isActive != 7" style="width: 20px; margin: 0 calc(3.5vw - 10px)">
          <img loading="lazy" src="../../assets/images/zhongxinyanglao/icons.png" alt="" />杨浦新江湾养老院
        </div>
        <div v-else class="xuanzhong">
          <div class="xuanzhongTitle" v-if="subTitle">
            信养之家 杨浦新江湾养老院
          </div>
          <div class="xuanzhongTitles" v-else>
            <div>信养之家</div>
            <div>杨浦新江湾养老院</div>
          </div>
          <div class="xuanzhongintro">都市连锁 24h生活照料与专业护理机构</div>
          <div class="xuanzhongadress">地址：上海市 杨浦区 世界路203号</div>
        </div>
      </div>
      <div class="img8" :class="{ active: isActive == 8, page: isActive != 8 }" @mouseenter="openYemian(8)"
        @click="gotoPage('/xinyangzhijia/aiqinren')">
        <div v-if="isActive != 8" style="width: 20px; margin: 0 calc(3.5vw - 10px)">
          <img loading="lazy" src="../../assets/images/zhongxinyanglao/icons.png" alt="" />爱亲仁护理院
        </div>
        <div v-else class="xuanzhong">
          <div class="xuanzhongTitle" v-if="subTitle">
            <!-- 信养之家 爱亲仁护理院（医保定点） -->
            <div>信养之家 爱亲仁护理院</div>
            <div>（医保定点）</div>
          </div>
          <div class="xuanzhongTitles" v-else>
            <div>信养之家</div>
            <div>爱亲仁护理院</div>
            <div>（医保定点）</div>
          </div>
          <div class="xuanzhongintro">都市连锁 24h生活照料与专业护理机构</div>
          <div class="xuanzhongadress">地址：上海市 杨浦区 辽阳路343号</div>
        </div>
      </div>
      <div class="img9" :class="{ active: isActive == 9, page: isActive != 9 }" @mouseenter="openYemian(9)"
        @click="gotoPage('/xinyangzhijia/zhenyue')">
        <div v-if="isActive != 9" style="width: 20px; margin: 0 calc(3.5vw - 10px)">
          <img loading="lazy" src="../../assets/images/zhongxinyanglao/icons.png" alt="" />臻悦护理院
        </div>
        <div v-else class="xuanzhong">
          <div class="xuanzhongTitle" v-if="subTitle">
            <!-- 信养之家 臻悦护理院（医保定点） -->
            <div>信养之家 臻悦护理院</div>
            <div>（医保定点）</div>
          </div>
          <div class="xuanzhongTitles" v-else>
            <div>信养之家</div>
            <div>臻悦护理院</div>
            <div>（医保定点）</div>
          </div>
          <div class="xuanzhongintro">都市连锁 24h生活照料与专业护理机构</div>
          <div class="xuanzhongadress">地址：上海市 杨浦区 周家嘴路3795号</div>
        </div>
      </div>
      <div class="img10" :class="{ active: isActive == 10, page: isActive != 10 }" @mouseenter="openYemian(10)"
        @click="gotoPage('/yifuyun')">
        <div v-if="isActive != 10" style="width: 20px; margin: 0 calc(3.5vw - 10px)">
          <img loading="lazy" src="../../assets/images/zhongxinyanglao/icons.png" alt="" />怡福荟康养小镇
        </div>
        <div v-else class="xuanzhong">
          <div class="xuanzhongTitle" v-if="subTitle">
            怡福荟康养小镇
          </div>
          <div class="xuanzhongTitles" v-else>
            <div>怡福荟康养小镇</div>
          </div>
          <div class="xuanzhongintro">CCRC 康养+文旅 一站式康养社区</div>
          <div class="xuanzhongadress">地址：上海市 奉贤区 申杰路58号</div>
        </div>
      </div>

    </div>
    <div class="animateimgs">
      <div class="img1s imgs" @click="gotoPage('/xinlantiandi')">
        <div class="xuanzhongTitle">信澜天地</div>
        <div class="xuanzhongintro">崇明东滩 康养+文旅 度假式养老社区</div>
        <div class="xuanzhongadress">
          地址：上海市 崇明区 陈家镇康寿路（福满路）
        </div>
      </div>
      <div class="img2s imgs" @click="gotoPage('/xinfuxinyue/youyouxinfu')">
        <div class="xuanzhongTitle">上海浦东由由信福养老院</div>
        <div class="xuanzhongintro">都市中心 高龄长者持续照料社区</div>
        <div class="xuanzhongadress">地址：上海市 浦东新区 下南路1288弄</div>
      </div>
      <div class="img3s imgs" @click="gotoPage('/xinfuxinyue/lianyangxinfu')">
        <div class="xuanzhongTitle">上海浦东联洋信福康养社区（昆仑邸）</div>
        <div class="xuanzhongintro">都市主城区 高龄长者持续照料社区</div>
        <div class="xuanzhongadress">地址：上海市 浦东新区 杨高中路1906号</div>
      </div>
      <div class="img4s imgs" @click="gotoPage('/xinfuxinyue/xinyue88')">
        <div class="xuanzhongTitle">杭州信悦88养老院</div>
        <div class="xuanzhongintro">都市中心 高龄长者持续照料社区</div>
        <div class="xuanzhongadress">地址：杭州市 上城区 延安路88号</div>
      </div>
      <div class="img5s imgs" @click="gotoPage('/xinyangzhijia/dachang')">
        <div class="xuanzhongTitle">信养之家 宝山大场养老院</div>
        <div class="xuanzhongintro">都市连锁 24h生活照料与专业护理机构</div>
        <div class="xuanzhongadress">地址：上海市 宝山区 场中路4098弄8号楼</div>
      </div>
      <div class="img6s imgs" @click="gotoPage('/xinyangzhijia/jinxiu')">
        <div class="xuanzhongTitle">信养之家 浦东锦绣养老院</div>
        <div class="xuanzhongintro">都市连锁 24h生活照料与专业护理机构</div>
        <div class="xuanzhongadress">地址：浦东新区 北艾路1481-1485号</div>
      </div>
      <div class="img7s imgs" @click="gotoPage('/xinyangzhijia/xinjiangwan')">
        <div class="xuanzhongTitle">信养之家 杨浦新江湾养老院</div>
        <div class="xuanzhongintro">都市连锁 24h生活照料与专业护理机构</div>
        <div class="xuanzhongadress">地址：上海市 杨浦区 世界路203号</div>
      </div>
      <div class="img8s imgs" @click="gotoPage('/xinyangzhijia/aiqinren')">
        <div class="xuanzhongTitle">信养之家 爱亲仁护理院</div>
        <div class="xuanzhongintro">都市连锁 24h生活照料与专业护理机构</div>
        <div class="xuanzhongadress">地址：上海市 杨浦区 辽阳路343号</div>
      </div>
      <div class="img9s imgs" @click="gotoPage('/xinyangzhijia/zhenyue')">
        <div class="xuanzhongTitle">信养之家 臻悦护理院（医保定点）</div>
        <div class="xuanzhongintro">都市连锁 24h生活照料与专业护理机构</div>
        <div class="xuanzhongadress">地址：上海市 杨浦区 周家嘴路3795号</div>
      </div>
      <div class="img10s imgs" @click="gotoPage('/yifuyun')">
        <div class="xuanzhongTitle">怡福荟康养小镇</div>
        <div class="xuanzhongintro">CCRC 康养+文旅 一站式康养社区</div>
        <div class="xuanzhongadress">地址：上海市 奉贤区 申杰路58号</div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "zhongxinyanglao",
  head: {
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
  },
  data () {
    return {
      // video控件
      showControls: false,
      isActive: 5,
      // 视频中标题文字
      showTitle: "",
      // 未启动的视频图片
      showImg: true,
      mobile: "",
      mobiles: true,
      //标题分行
      subTitle: true,
      // 控制移动端的
      mobileFlag: false,
    }
  },
  mounted () {
    this.mobileFunction()
    window.addEventListener("resize", this.mobileFunction)
    // console.log("this", this.passages, this.now);
    // console.log(this.$route.params.name);
    // this.now = this.$route.params.name
  },
  watch: {
    // // 监视路由
    // $route(res) {
    //     console.log('shouyewww', res);
    //     this.showMobileMenu = true;
    //     // 路由切换调用
    //     this.handleMobileMenu()
    //     // 给首页单独设置 点击图标的时候
    //     if (res.path == '/' || res.path.includes('/news')) {
    //         this.current = ['index']
    //     } else {//非首页的时候
    //         // // 对路径进行按'/'切分
    //         // let array = res.path.split('/');
    //         // // 存储路径关键字
    //         // let path = array[array.length-1];
    //         // // 将其path赋值给数组current
    //         // this.current = [path]
    //         // // 为stories需要修改
    //         // if(path=='stories'){
    //         //   this.current = ['success-stories']
    //         // }
    //         // if(!isNaN(this.current)){
    //         //   this.flags.forEach((item)=>{
    //         //     if(this.$route.path.includes(item.flag)){
    //         //       this.current = [item.name];
    //         //     }
    //         //   })
    //         // }
    //     }
    //     console.log("res", res, this.current)
    // },
  },
  methods: {
    mobileFunction () {
      let screenWidth =
        window?.innerWidth ||
        document?.documentElement.scrollWidth ||
        document.body?.clientWidth
      console.log("sdfsdfsd", screenWidth)
      if (screenWidth < 768 || this.isMobile()) {
        this.mobile = true
      } else {
        this.mobile = false
      }

      //标题换行及切换图片排列
      if (screenWidth < 1035 && screenWidth >= 768) {
        this.subTitle = false
        this.mobiles = true
      } else if (screenWidth < 768 || this.isMobile()) {
        this.subTitle = true
        this.mobiles = false
      } else {
        this.subTitle = true
        this.mobiles = true
      }

      if (this.isMobile()) {
        this.mobile = true
        this.mobiles = false
        this.subTitle = true
        this.mobileFlag = true
      } else {
        this.mobileFlag = true
      }
      //
    },
    isMobile () {
      let flag = window.navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      return flag
    },
    //鼠标进入视频
    buttonControl () {
      // const video = document.getElementById("myVideo")
      // const playButton = document.getElementById("playButton")
      // if (video.paused) {
      //   playButton.style.display = "block"
      // } else {
      //   playButton.style.display = "none"
      // }
      if (!this.showControls) {
        const playButton = document.getElementById("playButton")
        playButton.style.display = "block"
      } else {
        return
      }
    },
    // 鼠标移出视频
    buttonControls () {
      const playButton = document.getElementById("playButton")
      playButton.style.display = "none"
    },
    // 点击视频的时候
    toggleVideo () {
      // const video = document.getElementById("myVideo")
      // const playButton = document.getElementById("playButton")
      // this.showImg = false
      // if (video.paused) {
      //   video.play()
      //   playButton.style.display = "none"
      // } else {
      //   video.pause()
      //   playButton.style.display = "block"
      // }
      console.log("this", this.showControls)

      if (this.showControls) {
        return
      } else {
        const video = document.getElementById("myVideo")
        const playButton = document.getElementById("playButton")
        this.showImg = false
        this.showControls = true
        playButton.style.display = "none"
        setTimeout(() => {
          video.play()
        }, 100)
      }
    },
    openYemian (val) {
      this.isActive = val
    },
    gotoPage (val) {
      this.$router.push({
        path: val,
      })
    },
  },
  computed: {},
  beforeDestroy () {
    window.removeEventListener("resize", this.mobileFunction)
  },
}
</script>

<style lang="less" scoped>
.news {
  background: #f5f5f5;
  font-family: "Source Han Serif SC VF";

  .news-cover {
    width: 100%;
    // height: 510px;
    // background: url("../../assets/images/news/cover.jpg") no-repeat center;
    // background-size: cover;
    position: relative;
    // height: calc(100vh - 90px);
    margin-top: 0px;
    overflow: hidden;
    background-color: #fff;
    z-index: 1;

    .cover-title {
      font-family: "Source Han Serif SC VF";
      position: absolute;
      top: 45%;
      // left: 50%;
      // width: 820px;
      width: 100%;
      text-align: center;
      transform: translateY(-50%);
      font-size: 40px;
      color: #fff;
      opacity: 0;
      transition: opacity 0.5s;
      z-index: 3;

      .spacing {
        display: inline-block;
        width: 1rem;
      }
    }

    img {
      // padding-bottom: 50px;
      width: 100%;
      // height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
    }

    .video {
      // padding-bottom: 50px;
      width: 100%;
      // height: 100%;
      // object-fit: cover;
      vertical-align: middle;
    }

    //video所有控件
    // video::-webkit-media-controls-enclosure {
    //   display: none;
    // }
    // video::-webkit-media-controls-timeline {
    //   margin-bottom: 70px;
    //   /* 设置进度条与控制条之间的垂直距离 */
    // }

    .play-button {
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
      // background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      padding: 10px;
      border-radius: 50%;
      font-size: 60px;
      cursor: pointer;
    }

    .pause-button {
      display: none;
      opacity: 0;
    }
  }

  .news-cover:hover .cover-title {
    opacity: 1;
  }

  .wai {
    background-color: #fff;

    .intro {
      width: 1200px;
      // background-color: aqua;
      margin: 0 auto;
      display: flex;
      font-family: "Source Han Serif SC VF";

      .intro_content {
        width: 690px;
        height: 786px;
        // background-color: pink;
        padding-top: 113px;

        .title {
          height: 115px;
          line-height: 115px;
          // background-color: aqua;
          font-size: 33px;
          font-weight: 600;
        }

        .red_gang {
          width: 60px;
          height: 5px;
          background-color: #ba000e;
          margin-bottom: 36px;
        }

        .paragraph {
          font-size: 16px;
          color: #333;
          line-height: 30px;
          margin-bottom: 10px;
          text-indent: 2em;
          width: 593px;
        }
      }

      .img {
        padding-top: 113px;
        width: 510px;
        height: 786px;
        // background-color: yellow;
      }
    }

    .intros {
      display: none;
      font-family: "Source Han Serif SC VF";
      width: 100%;
      height: auto;

      .intro_contents {
        width: 100%;
        padding: 60px 0;
        overflow: hidden;

        img {
          width: 40%;
          padding: 0 10px 10px 10px;
          min-width: 200px;
        }

        // .top {
        //     position: relative;

        //     .left {
        //         padding-left: 20px;
        //         width: 150px;

        //         .titles {
        //             height: 60px;
        //             line-height: 60px;
        //             font-size: 26px;
        //             font-weight: 600;
        //         }

        //         .red_gangs {
        //             width: 50px;
        //             height: 4px;
        //             background-color: #ba000e;
        //         }
        //     }

        //     .imgs {
        //         position: absolute;
        //         top: 0;
        //         right: 0;
        //         width: 30%;

        //         img {
        //             width: 100%;
        //         }
        //     }
        // }

        .titles {
          height: 60px;
          line-height: 60px;
          font-size: 26px;
          font-weight: 600;
          margin-left: 20px;
        }

        .red_gangs {
          width: 50px;
          height: 4px;
          background-color: #ba000e;
          margin-bottom: 20px;
          margin-left: 20px;
        }

        // .imgs {
        //     width: 25%;
        //     height: auto;

        //     img {
        //         width: 100%;
        //         height: auto;
        //     }
        // }

        .paragraphs {
          font-size: 16px;
          color: #333;
          line-height: 28px;
          margin-bottom: 10px;
          text-indent: 2em;
          height: auto;
          padding: 0 20px;
        }
      }
    }
  }

  .img_animate {
    width: 100%;
    height: 220px;
    // background-color: blue;
    padding-top: 65px;
    margin: 0 auto;

    .big_title {
      height: 67px;
      line-height: 67px;
      // background-color: pink;
      font-size: 33px;
      text-align: center;
      color: #ba000e;
    }

    .small_title {
      height: 49px;
      line-height: 49px;
      // background-color: yellow;
      font-size: 24px;
      text-align: center;
      margin-bottom: 55px;
    }
  }

  // 移动端
  .img_animate_mobile {
    display: none;
    padding: 30px 0;
    text-align: center;
    font-size: 33px;
    color: #ba000e;
  }

  .animateimg {
    // background-color: green;
    display: flex;

    .page {
      width: 7vw;
      height: 600px;
      background-color: #ccc;
      transition: all 0.3s ease;
      // line-height: 600px;
      text-align: center;
      /* 添加过渡效果 */
      font-size: 21px;
      display: flex;
      // align-items: center;
      padding-top: 113px;

      color: #fff;

      /* 设置文字方向为直立 */
      &:not(:last-child) {
        margin-right: 10px;
        /* 设置除最后一个class之外的margin-right值 */
      }

      img {
        width: 30px;
        height: 30px;
        margin-bottom: 10px;
        margin-left: -5px;
      }
    }

    .active {
      width: 42vw;
      height: 600px;
      // line-height: 600px;
      // background-color: yellow;
      text-align: center;
      transition: width 0.3s ease;

      &:not(:last-child) {
        margin-right: 10px;
        /* 设置除最后一个class之外的margin-right值 */
      }
    }

    .xuanzhong {
      padding-top: 223px;
      color: #fff;
      cursor: pointer;

      .xuanzhongTitle {
        // height: 60px;
        line-height: 60px;
        font-size: 32px;
      }

      .xuanzhongTitles {
        line-height: 40px;
        font-size: 22px;
      }

      .xuanzhongintro {
        height: 41px;
        line-height: 41px;
        font-size: 16px;
      }

      .xuanzhongadress {
        height: 41px;
        line-height: 41px;
        font-size: 16px;
      }
    }
  }

  // 移动端
  .animateimgs {
    display: none;
    width: 100%;

    // height: 30vw;
    .imgs {
      //width: 100%;
      height: 50vw;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      color: #fff;
      margin: 4px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;

      .xuanzhongTitle {
        font-size: 20px;
        margin-bottom: 16px;
      }

      .xuanzhongadress,
      .xuanzhongintro {
        font-size: 16px;
        // height: 25px;
        // line-height: 25px;
      }
    }

    .img1s {
      background-image: url("../../assets/images/zhongxinyanglao/1.jpg");
    }

    .img2s {
      background-image: url("../../assets/images/zhongxinyanglao/2.jpg");
    }

    .img3s {
      background-image: url("../../assets/images/zhongxinyanglao/lianyangxinfu.png");
    }

    .img4s {
      background-image: url("../../assets/images/zhongxinyanglao/4.jpg");
    }

    .img5s {
      background-image: url("../../assets/images/zhongxinyanglao/5.jpg");
    }

    .img6s {
      background-image: url("../../assets/images/zhongxinyanglao/6.jpg");
    }

    .img7s {
      background-image: url("../../assets/images/zhongxinyanglao/7.jpg");
    }

    .img8s {
      background-image: url("../../assets/images/zhongxinyanglao/8.jpg");
    }

    .img9s {
      background-image: url("../../assets/images/zhongxinyanglao/9.jpg");
    }

    .img10s {
      background-image: url("../../assets/images/yifuyun/1.png");
    }
  }
}



.img1 {
  background: url("../../assets/images/zhongxinyanglao/1.jpg");
}

.img2 {
  background: url("../../assets/images/zhongxinyanglao/2.jpg");
}

.img3 {
  background: url("../../assets/images/zhongxinyanglao/lianyangxinfu.png");
}

.img4 {
  background: url("../../assets/images/zhongxinyanglao/4.jpg");
}

.img5 {
  background: url("../../assets/images/zhongxinyanglao/5.jpg");
}

.img6 {
  background: url("../../assets/images/zhongxinyanglao/6.jpg");
}

.img7 {
  background: url("../../assets/images/zhongxinyanglao/7.jpg");
}

.img8 {
  background: url("../../assets/images/zhongxinyanglao/8.jpg");
}

.img9 {
  background: url("../../assets/images/zhongxinyanglao/9.jpg");
}

.img10 {
  background: url("../../assets/images/yifuyun/1.png");
}

// .img8 {
//   background: url("../../assets/images/zhongxinyanglao/aiqinren.png");
// }

// .img9 {
//   background: url("../../assets/images/zhongxinyanglao/zhenyue.png");
// }

.img1,
.img2,
.img3,
.img4,
.img5,
.img6,
.img7,
.img8,
.img9,
.img10 {
  background-position: center center;
  /* 将背景图片在可视区域中间显示 */
  background-repeat: no-repeat;
  /* 禁止背景图片重复 */
  background-size: cover;
  /* 调整背景图片大小以填充整个元素 */
}

@media screen and (max-width: 1200px) and (min-width: 992px) {
  .news {
    .news-cover {
      .cover-title {
        font-size: 36px;
      }

      .play-button {
        font-size: 50px;
      }
    }

    .wai {
      .intro {
        width: 100%;
        padding: 0 5%;
        padding-bottom: 20px;
        justify-content: space-between;

        .intro_content {
          width: 55%;
          height: auto;

          .title {
            height: 100px;
            line-height: 100px;
          }

          .red_gang {}

          .paragraph {
            width: 100%;
          }
        }

        .img {
          padding-top: 200px;
          width: 41%;
          height: auto;

          img {
            // width: 100%;
            height: 500px;
          }
        }
      }
    }

    .img_animate {
      height: 200px;
      padding-top: 60px;

      .big_title {
        height: 62px;
        line-height: 62px;
        font-size: 30px;
      }

      .small_title {
        height: 40px;
        line-height: 40px;
        font-size: 20px;
      }
    }
  }
}

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
      .cover-title {
        font-size: 30px;
      }

      .play-button {
        font-size: 45px;
      }
    }

    .wai {
      .intro {
        width: 100%;
        padding: 0 5%;
        justify-content: space-between;

        .intro_content {
          width: 55%;
          height: auto;

          .title {
            font-size: 28px;
            height: 80px;
            line-height: 80px;
          }

          .red_gang {}

          .paragraph {
            width: 100%;
          }
        }

        .img {
          padding-top: 250px;
          width: 41%;
          height: auto;

          img {
            // width: 40%;
            height: 400px;
          }
        }
      }
    }

    .img_animate {
      height: 170px;
      padding-top: 55px;

      .big_title {
        height: 55px;
        line-height: 55px;
        font-size: 26px;
      }

      .small_title {
        height: 40px;
        line-height: 40px;
        font-size: 18px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .news {
    .news-cover {
      height: auto;

      .cover-title {
        // font-size: 2rem;
        display: none;
      }

      .play-button {
        font-size: 2.5rem;
        top: 50%;
      }
    }

    .wai {
      .intro {
        display: none;
      }

      .intros {
        display: block;

        .intro_contents {
          .titles {
            font-size: 30px;
          }
        }
      }
    }

    .img_animate {
      display: none;
      height: 140px;
      padding-top: 50px;

      .big_title {
        height: 45px;
        line-height: 45px;
        font-size: 22px;
      }

      .small_title {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
      }
    }

    .img_animate_mobile {
      display: block;
      font-size: 30px;
    }

    .animateimg {
      display: none;
    }

    .animateimgs {
      display: block;

      .imgs {
        .xuanzhongTitle {
          font-size: 22px;
        }

        .xuanzhongintro,
        .xuanzhongadress {
          font-size: 16px;
        }
      }
    }
  }
}

// 图文变动
@media screen and (max-width: 1400px) and (min-width: 1200px) {
  .news {
    .animateimg {
      .xuanzhong {
        .xuanzhongTitle {
          font-size: 26px;
        }
      }
    }
  }
}

// 图文变动
@media screen and (max-width: 1199px) and (min-width: 768px) {
  .news {
    .animateimg {
      .xuanzhong {
        .xuanzhongTitle {
          font-size: 22px;
          height: auto;
        }

        .xuanzhongintro,
        .xuanzhongadress {
          height: auto;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  // .news {
  //   .news-cover {
  //     .cover-title {
  //       display: none;
  //     }

  //     .play-button {
  //       top: 50%;
  //     }
  //   }
  //   .img_animate_mobile {
  //     font-size: 24px;
  //   }
  // }
}
</style>

<style lang="less"></style>
