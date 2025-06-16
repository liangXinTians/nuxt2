<template>
  <div class="older">
    <!-- 头部 -->
    <div class="home">
      <div class="left">
        <div class="title">
          <div class="top-title">
            <div class="t-left">信养老</div>
            <div class="t-right">新场景</div>
          </div>
          <div>发现生活新可能</div>
        </div>
        <div class="article">
          <div class="article_title">养老服务，于中信养老每一位长者,</div>
          <div class="article_title article_padding">
            当是用心陪伴，用信守护。
          </div>
          <div class="article_p">
            中信养老，秉承“一机构一创新，一项目一特色”的服务理念，深入了解50至100岁长者的身体与精神需求，切实从长者需求出发制定活动。
          </div>
          <div class="article_p">
            一位长者，一个家庭。从活力长者、高龄自理、高龄护理到家庭跨代际养老，开发健康、美食、运动、社交等创新服务新场景。
          </div>
          <div class="article_p">
            一个中信，一个客户。依托中信集团庞大资源，打造多角度、多类别的活动条线，开发党建、文化、财富等活动新内容。
          </div>
          <div class="article_p">
            我们期待，打开一扇门，让您和您的家人，在这里，发现生活的新可能。
          </div>
        </div>
      </div>
      <div class="png">
        <!-- <img loading="lazy" src="../../assets/images/yanglaoshenghuo/older1.png" alt="" /> -->
      </div>
    </div>
    <!-- 参观预约 -->
    <VisitReserve />
    <!-- 六个图片 -->
    <div class="six_module">
      <div class="module">
        <img
          loading="lazy"
          src="../../assets/images/yanglaoshenghuo/1s.jpg"
          alt=""
        />
        <div class="module_name module_name1">节日派对</div>
      </div>
      <div class="module">
        <img
          loading="lazy"
          src="../../assets/images/yanglaoshenghuo/2.png"
          alt=""
        />
        <div class="module_name module_name2">健康服务</div>
      </div>
      <div class="module">
        <img
          loading="lazy"
          src="../../assets/images/yanglaoshenghuo/3s.jpg"
          alt=""
        />
        <div class="module_name module_name3">文化之旅</div>
      </div>
      <div class="module">
        <img
          loading="lazy"
          src="../../assets/images/yanglaoshenghuo/4.png"
          alt=""
        />
        <div class="module_name module_name4">摩登城市</div>
      </div>
      <div class="module">
        <img
          loading="lazy"
          src="../../assets/images/yanglaoshenghuo/5s.jpg"
          alt=""
        />
        <div class="module_name module_name6">养老讲堂</div>
      </div>
      <div class="module">
        <img
          loading="lazy"
          src="../../assets/images/yanglaoshenghuo/5.png"
          alt=""
        />
        <div class="module_name module_name5">社区活动</div>
      </div>
    </div>
    <!-- 近日重要活动 -->
    <div class="recent_important_events">
      <div class="important_events_title">
        近日重要活动
        <div class="title_border"></div>
      </div>
      <!-- <div class="important_events_list">
        <div class="contents" v-if="changeIndex === 1">
          <div class="title">信澜天地的41种奇妙体验：好玩到爆的新春指南正式发布</div>
          <div class="time">作者：信澜天地 发布时间：2024-01-05 11:19</div>
          <div class="content">
            <div class="p">
              新春将至，中信养老康养旗舰项目：信澜天地，将迎来一系列精彩纷呈的“新春嘉年华”活动，集结各种玩法，重拾传统年味，为住店客人带来多达41种奇妙体验(详见本次推送第2条)，让每一个住客感受更加美好的“康养+文旅”的融合生活方式，在这个新春假期，和长辈们一起尽享阖家欢乐。烟花篝火、特色美食、非遗与经典赏鉴、全能会所配套、诚意满满的活动安排……，信澜天地，还你一个充满年味、老少皆宜的幸福年。
            </div>
            <div class="p">
              目前，信澜天地晖廷云居酒店春节期间的客房预订已进入高峰期，新春期间酒店各种房型(含早)每晚1288元起售，对应超五星环境品质和多姿多彩的节庆内容，性价比极高。据悉，早前开售的五天四晚康养短住产品预定火爆，其中，第一档(除夕至初四)已经售罄，仅剩第二档(初四至初八)少量房源。
            </div>
            <img loading="lazy" src="../../assets/images/yanglaoshenghuo/list1_1.jpg" alt="">
            <div class="p">
              谈到迎新的“仪式感”，节庆烟花秀和灯笼秀必定不能缺席。从除夕到初四，信澜天地每日将上演绚丽多彩的节庆烟花秀，为住客献上一场视觉盛宴。此外，灯笼秀也将全日开放，游客可以漫步在红色长廊中，百盏花灯流光溢彩，熠熠生辉，大家可以穿着汉服去打卡。此外，在信澜天地同样可以感受唯美梦幻的冬日限定美景，这个冬天的第一场心动初雪，在信澜天地龙腾市井如约而至；夜幕降临，繁星笼罩，大家可以围着熊熊燃烧的篝火，享受美食，度过一个难忘的夜晚。
            </div>
            <div class="p">
              如果你细心留意，就会发现信澜天地的十八胜景中藏着多个与龙有关的景点：龙珠涌动、龙生九子、龙隐香樟、青雀黄龙、龙腾市井……；信澜天地为迎接龙年，推出了一系列龙主题有奖打卡探秘活动，在信澜天地过年，住客可以一边欣赏信澜美景，一边领略“龙”主题国学文化。
            </div>
            <img loading="lazy" src="../../assets/images/yanglaoshenghuo/list1_2.jpg" alt="">
            <div class="p">
              除了打卡探秘活动，信澜天地还为住客准备了20余项丰富多彩的休闲娱乐项目。在澜会所，您可以尽情享受星空恒温泳池的惬意，体验活力健康馆的乐趣。如果您喜欢放松休闲，可以选择在图书馆静心阅读，或者参加少山文化咖啡品鉴活动。如果您热爱文化艺术，可以看一场朵云轩木版水印展，或者亲自动手，体验崇明非遗土布手工和崇明糕制作。更有电影放映、卡拉OK、桌球、乒乓球、室内高尔夫、美甲DIY、书画静心抄经、自行车骑行、怀旧邓丽君&黑池舞会&酒廊、崇明好物花车、崇明手帕馆、趣味高尔夫、河塘生态垂钓等，住客可以在信澜天地尽情探索，收获满满的快乐回忆。
            </div>
            <img loading="lazy" src="../../assets/images/yanglaoshenghuo/list1_3.jpg" alt="">
            <div class="p">
              对于美食爱好者来说，信澜天地新春美食不容错过。不论是粤汕早茶式中西自助早餐，还是中餐厅的信澜新春家宴，都能满足不同口味的游客需求(详见本次推送第3条)。此外，本次信澜天地还推出2款别具特色的美食选择，崇明特色农场白山羊火锅和沪上网红ANAR
              KAWAP巨鹿路石榴烤肉，让住客在品尝美食的同时，也能感受到不同地域的独特风情。最后还能逛一逛崇明好物花车，把生态有机大米、崇明白山羊、有机无抗猪肉、精酿啤酒等特色美食带回家，这些商品势必会成为游客们了解崇明文化和带走美好回忆的最佳选择。
            </div>
            <img loading="lazy" src="../../assets/images/yanglaoshenghuo/list1_4.jpg" alt="">
            <div class="p">
              不得不提信澜天地的客房，不同类型的客房都有独特的设计和布置，满足不同家庭出游的需求。度假风的晖廷酒店，包括24间平层、复式客房，最适合亲子度假；全套房的云居酒店，由78间一房一厅、两房两厅酒店式公寓组成，起跳面积高达套内80平米，满足家庭出游，朋友聚会的各种需求。更让人惊喜的是，房间内由巴黎水领衔的mini吧可以统统带走。
            </div>
            <div class="p">信澜天地具有烟火气、上海味、国际范的“新春嘉年华”活动内容设计，融合“康养+文旅”，实现各种生活场景的代际延伸，将为所有住客，尤其是跨代际大家庭带来一个别具特色的春节。</div>
            <img loading="lazy" src="../../assets/images/yanglaoshenghuo/list1_5.png" alt="">
          </div>
        </div>
        <div class="contents" v-if="changeIndex === 2">
          <div class="title">信澜天地新春家宴菜单新鲜出炉，预定从速！</div>
          <div class="time">作者：信澜天地 发布时间：2024-01-05 11:19</div>
          <div class="content">
            <img loading="lazy" src="../../assets/images/yanglaoshenghuo/list2_1.png" alt="">
            <img loading="lazy" src="../../assets/images/yanglaoshenghuo/list2_2.jpg" alt="">
            <img loading="lazy" src="../../assets/images/yanglaoshenghuo/list2_3.png" alt="">
            <img loading="lazy" src="../../assets/images/yanglaoshenghuo/list2_4.png" alt="">
            <img loading="lazy" src="../../assets/images/yanglaoshenghuo/list2_5.jpg" alt="">
            <img loading="lazy" src="../../assets/images/yanglaoshenghuo/list2_6.png" alt="">
            <img loading="lazy" src="../../assets/images/yanglaoshenghuo/list2_7.jpg" alt="">
            <img loading="lazy" src="../../assets/images/yanglaoshenghuo/list2_8.png" alt="">
          </div>
        </div>
        <div class="contents" v-if="changeIndex === 3">
          <div class="title">过年，到信澜天地!</div>
          <div class="time">作者：中信养老 发布时间：2024-01-05 11:19</div>
          <div class="content">
            <img loading="lazy" src="../../assets/images/yanglaoshenghuo/list3_1.jpg" alt="">
          </div>
        </div>
        <div class="event_list">
          <div class="list1 list" :class="{ active: changeIndex === 1 }" @click="changeList(1)">
            <div class="list_img"><img loading="lazy" src="../../assets/images/yanglaoshenghuo/list1.png" alt=""></div>
            <div class="list_right">
              <div class="list_title">信澜天地的41种奇妙体验：好玩到爆的新春指南正式发布</div>
              <div class="list_content">
                新春将至，中信养老康养旗舰项目：信澜天地，将迎来一系列精彩纷呈的“新春嘉年华”活动，集结各种玩法，重拾传统年味，
              </div>
            </div>
          </div>
          <div class="list2 list" :class="{ active: changeIndex === 2 }" @click="changeList(2)">
            <div class="list_img"><img loading="lazy" src="../../assets/images/yanglaoshenghuo/list2.png" alt=""></div>
            <div class="list_right">
              <div class="list_title">信澜天地新春家宴菜单新鲜出炉，预定从速！</div>
              <div class="list_content">信澜天地专业的厨师团队 精心打造味蕾 盛宴 阖家禧宴 新春团圆饭</div>
            </div>
          </div>
          <div class="list3 list" :class="{ active: changeIndex === 3 }" @click="changeList(3)">
            <div class="list_img"><img loading="lazy" src="../../assets/images/yanglaoshenghuo/list3.png" alt=""></div>
            <div class="list_right">
              <div class="list_title">过年，到信澜天地!</div>
              <div class="list_content">上海信澜天地晖延云居酒店<br>中信养老“文旅+康复”旗舰</div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="important_events_list">
        <div
          class="contents"
          v-for="event in filteredActiveList"
          :key="event.id"
        >
          <div class="title">{{ event.title }}</div>
          <div class="time">
            作者：{{ event.author }} 发布时间：{{ event.created_time }}
          </div>
          <!-- 有内容 -->
          <div
            class="content"
            v-html="event.html_content"
            v-if="!event.file_path.toLowerCase().endsWith('.mp4')"
          ></div>
          <!-- 只有视频的 -->
          <div
            v-else
            class="video"
            @mouseleave="buttonControls()"
            @mouseenter="buttonControl()"
            @click="toggleVideos()"
          >
            <video
              :src="$config.apiFileUrl + event.file_path"
              loop
              id="myVideosss"
              disablepictureinpicture
              controlslist="nodownload"
            ></video>
            <div class="play_button" id="playButtonsss">
              <a-icon type="play-circle" />
            </div>
          </div>
        </div>
        <div class="event_list">
          <div class="control_list">
            <div
              class="list"
              v-for="event in activeList"
              :key="event.id"
              @click="changeList(event.id, event.link_url)"
            >
              <div
                class="list_img"
                v-if="!event.file_path.toLowerCase().endsWith('.mp4')"
              >
                <img
                  loading="lazy"
                  :src="$config.apiFileUrl + event.file_path"
                  alt=""
                />
              </div>
              <div
                :class="{
                  list_right: true,
                  video_width: isVideoFile(event.file_path),
                }"
              >
                <div class="list_title">{{ event.title }}</div>
                <div class="list_content">{{ event.introduce }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="event_list">
          <div class="list" v-for="event in activeList" :key="event.id" @click="changeList(event.id)">
            <div class="list_img"><img loading="lazy" :src="$config.apiFileUrl + event.file_path" alt=""></div>
            <div class="list_right">
              <div class="list_title">{{ event.title }}</div>
              <div class="list_content">{{ event.introduce }}</div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <!-- 往期回顾 -->
    <div class="bottom-read">
      <div class="tops">
        <div class="bottom-title">
          往期活动回顾
          <div class="title-line"></div>
        </div>
        <div class="right">
          <div
            class="button"
            @click="changeReviews(0)"
            :class="{ active: changeReview === 0 }"
          >
            全部
          </div>
          <div
            class="button"
            @click="changeReviews(1)"
            :class="{ active: changeReview === 1 }"
          >
            节日派对
          </div>
          <div
            class="button"
            @click="changeReviews(2)"
            :class="{ active: changeReview === 2 }"
          >
            健康服务
          </div>
          <div
            class="button"
            @click="changeReviews(3)"
            :class="{ active: changeReview === 3 }"
          >
            文化之旅
          </div>
          <div
            class="button"
            @click="changeReviews(4)"
            :class="{ active: changeReview === 4 }"
          >
            摩登城市
          </div>
          <div
            class="button"
            @click="changeReviews(5)"
            :class="{ active: changeReview === 5 }"
          >
            养老讲堂
          </div>
          <div
            class="button"
            @click="changeReviews(6)"
            :class="{ active: changeReview === 6 }"
          >
            社区活动
          </div>
        </div>
      </div>
      <div class="bottom-content">
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
                v-if="item.extension !== 'mp4'"
              />
              <div
                :id="'video-' + index"
                class="video"
                @click="toggleVideo(index, index)"
                v-else
              >
                <video
                  :src="$config.apiFileUrl + item.file_path"
                  loop
                  :controls="showControls(index)"
                  disablepictureinpicture
                  controlslist="nodownload"
                  :id="'my-videos-' + index"
                ></video>
                <div class="play-button" :id="'play-buttons-' + index">
                  <a-icon type="play-circle" />
                </div>
                <div
                  class="click"
                  :id="'deleteIt' + index"
                  @click.stop="deleteIt(index)"
                >
                  ×
                </div>
                <!-- <div class="box-shadow" v-if="showShadow" @click.stop="deleteIt">
                </div> -->
              </div>
              <div
                class="box-shadow"
                v-if="showShadow"
                @click.stop="deleteIt"
              ></div>
            </div>
            <div class="page-detail">
              <div class="top">
                <div class="page-title">
                  <nuxt-link
                    :to="'/yanglaoshenghuo' + item?.link_url + '/' + item.id"
                    :title="item.title"
                    >{{ item.title }}</nuxt-link
                  >
                </div>
                <div class="releaseTime">
                  {{ item.created_time.split(" ")[0] }}
                </div>
              </div>
              <div class="page-time">{{ item.introduce }}</div>
              <div class="mobile-realseTime">
                {{ item.created_time.split(" ")[0] }}
              </div>
              <div class="view-it" v-if="item.extension !== 'mp4'">
                <nuxt-link
                  :to="'/yanglaoshenghuo' + item?.link_url + '/' + item.id"
                  >查看全文 <a-icon type="right"
                /></nuxt-link>
              </div>
              <div class="view-it" v-else>
                <nuxt-link
                  :to="'/yanglaoshenghuo' + item?.link_url + '/' + item.id"
                  >完整视频 <a-icon type="right"
                /></nuxt-link>
              </div>
            </div>
          </div>
        </div>
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
  </div>
</template>
<script>
export default {
  name: "yanglaoshenghuo",
  head: {
    title: "养老生活",
  },
  data() {
    return {
      mobile: true,
      // 近日重要活动
      activeList: {},
      // 索引
      changeIndex: "",
      // 往期活动回顾
      passages: {},
      activities: {},
      changeReview: 0,
      // 当前页数
      current: 1,
      // 往期文章数目
      number: 0,
      //分页每页展示数目
      pageSize: 5,
      // 视频索引
      currentVideoIndex: null,
      // 图片点击后的遮罩层
      showShadow: false,
      // 存储每个视频的控件显示状态
      controlsState: {},

      activeListLoaded: false,
    };
  },
  async mounted() {
    // console.log("this.$options.name", this.$options.name)
    // console.log("this.$options", this.$options)

    // const response1 = await $axios.get("http://devsrv.linknology.cn:18888/zhongxin/index.php/AcCalendarBannerList?type=0&is_pass=0")
    const response1 = await this.$axios.get(
      this.$config.apiBaseUrl + "/AcCalendarBannerList?type=0&is_pass=0"
    );
    this.activeList = response1.data.data;
    this.changeIndex = this.activeList[0].id;
    // const response2 = await $axios.get("http://devsrv.linknology.cn:18888/zhongxin/index.php/AcCalendarBannerList?type=0&is_pass=1")
    const response2 = await this.$axios.get(
      this.$config.apiBaseUrl + "/AcCalendarBannerList?type=0&is_pass=1"
    );
    this.activities = response2.data.data;
    this.activeListLoaded = true;
    console.log("this.activities", response2.data.data);
    //文章数目
    this.passages = this.activities;
    this.number = Object.values(this.passages).length;

    this.mobileFunction();
    window.addEventListener("resize", this.mobileFunction);
    // console.log("this.$route", this.$route.name)
  },
  watch: {},
  methods: {
    //切换重要活动
    changeList(index, link_url) {
      if (!this.mobile) {
        this.changeIndex = index;
        console.log(this.filteredActiveList);
      } else {
        this.$router.push({
          path: "/yanglaoshenghuo" + link_url + "/" + index,
          query: {
            isPass: 0,
          },
        });
      }
    },
    isVideoFile(filePath) {
      return filePath.toLowerCase().endsWith(".mp4");
    },
    //鼠标进入视频
    buttonControl() {
      const video = document.getElementById("myVideosss");
      const playButton = document.getElementById("playButtonsss");
      if (video.paused) {
        playButton.style.display = "block";
      } else {
        playButton.style.display = "none";
      }
    },
    // 鼠标移出视频
    buttonControls() {
      const playButton = document.getElementById("playButtonsss");
      playButton.style.display = "none";
    },
    // 点击视频的时候
    toggleVideos() {
      const video = document.getElementById("myVideosss");
      const playButton = document.getElementById("playButtonsss");
      if (video.paused) {
        video.play();
        playButton.style.display = "none";
      } else {
        video.pause();
        playButton.style.display = "block";
      }
    },
    //切换分页
    onChange(current) {
      this.current = current;
    },
    // 切换往日回顾
    changeReviews(index) {
      this.changeReview = index;
      this.current = 1;
      if (index === 0) {
        this.passages = this.activities;
      } else if (index === 1) {
        this.passages = this.activities.filter((event) => event.type === 1);
      } else if (index === 2) {
        this.passages = this.activities.filter((event) => event.type === 2);
      } else if (index === 3) {
        this.passages = this.activities.filter((event) => event.type === 3);
      } else if (index === 4) {
        this.passages = this.activities.filter((event) => event.type === 4);
      } else if (index === 5) {
        this.passages = this.activities.filter((event) => event.type === 5);
      } else {
        this.passages = this.activities.filter((event) => event.type === 6);
      }
      this.number = Object.values(this.passages).length;
    },
    // 点击视频的时候
    toggleVideo(index) {
      if (this.showShadow) {
        console.log("第二");
        return;
      } else {
        const video = document.getElementById("my-videos-" + index);
        const playButton = document.getElementById("play-buttons-" + index);
        playButton.style.display = "none";

        const boxVideo = document.getElementById("video-" + index);
        boxVideo.classList.add("videos");

        const deleteIt = document.getElementById("deleteIt" + index);
        deleteIt.style.display = "block";

        this.showShadow = true;
        // 控件属性
        this.currentVideoIndex = index;

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
    // 视频取消的
    deleteIt() {
      const index = this.currentVideoIndex;
      const videos = document.getElementById("my-videos-" + index);
      const boxVideo = document.getElementById("video-" + index);
      boxVideo.classList.remove("videos");
      console.log(this.currentVideoIndex, index);

      const deleteIt = document.getElementById("deleteIt" + index);
      deleteIt.style.display = "none";

      const playButtons = document.getElementById("play-buttons-" + index);
      playButtons.style.display = "block";
      playButtons.style.fontSize = "20px";

      videos.pause();
      this.showShadow = false;

      let root = document.documentElement;
      root.style.overflow = "";
      root.style.borderRight = "";

      this.currentVideoIndex = null;
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
  },
  computed: {
    // 近日活动切换
    filteredActiveList() {
      // return this.activeList.filter(event => event.id === this.changeIndex)
      if (this.activeListLoaded) {
        return this.activeList.filter((event) => event.id === this.changeIndex);
      } else {
        return [];
      }
    },

    // 视频控件
    showControls() {
      return function (index) {
        return index === this.currentVideoIndex;
      };
    },

    // 每次分页展示的列表
    paginatedPassages() {
      const passagesArray = Object.values(this.passages);
      const start = (this.current - 1) * this.pageSize;
      const end = start + this.pageSize;
      return passagesArray.slice(start, end);
    },
  },
  beforeDestroy() {},
};
</script>
<style lang="less" scoped>
.older {
  font-family: "Source Han Serif SC VF";
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: rgb(245, 245, 245);
  .home {
    // width: 100%;
    // height: calc(100vh - 190px);
    height: calc(100vh - 206px);
    min-height: 700px;
    display: flex;
    position: relative;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    min-width: 1240px;

    .left {
      width: 50%;
      height: 100%;
      background-color: rgb(42, 42, 42);
      // position: relative;

      // min-height: 768px;
      .title {
        // height: 120px;
        // width: 300px;
        background-color: #b6222d;
        position: absolute;
        color: #fff;
        // top: 130px;
        top: 10%;
        right: 50%;
        transform: translateX(50%);
        z-index: 5;
        font-size: 32px;
        padding: 15px 25px;
        font-weight: 600;
        .top-title {
          display: flex;
          justify-content: space-between;
        }
      }

      .article {
        position: absolute;
        // right: 20px;
        right: calc(50% + 20px);
        // top: 300px;
        top: 30%;
        width: 580px;
        color: #fff;
        // min-height: 768px;
        .article_title {
          font-size: 26px;
          font-weight: 600;
        }

        .article_padding {
          padding-bottom: 30px;
        }

        .article_p {
          line-height: 30px;
          font-size: 18px;
        }
      }
    }

    .png {
      background-image: url("../../assets/images/yanglaoshenghuo/older1.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 50%;
      height: 100%;
      // background-color: aqua;
      overflow: hidden;

      img {
        height: 100%;
        width: auto;
      }
    }
  }

  // 六个图片模块
  .six_module {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;

    .module {
      width: 33.3333%;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .module_name {
        position: absolute;
        left: 15px;
        bottom: 15px;
        padding: 10px 15px;
        color: #fff;
        font-size: 18px;
      }

      .module_name1 {
        background-color: rgb(250, 132, 0);
      }

      .module_name2 {
        background-color: rgb(0, 173, 137);
      }

      .module_name3 {
        background-color: rgb(95, 157, 247);
      }

      .module_name4 {
        background-color: rgb(248, 65, 168);
      }

      .module_name5 {
        background-color: rgb(212, 187, 50);
      }

      .module_name6 {
        background-color: rgb(251, 94, 105);
      }
    }
  }

  // 重要活动
  .recent_important_events {
    width: 1200px;
    height: 600px;
    margin: 0 auto;
    margin-top: 20px;
    // background-color: #ab000d;

    .important_events_title {
      font-size: 32px;
      font-weight: 900;
      margin-bottom: 20px;

      .title_border {
        margin-top: 10px;
        width: 70px;
        height: 5px;
        background-color: #ab000d;
      }
    }

    .important_events_list {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .contents {
        width: 680px;
        height: 500px;
        background-color: #fff;
        padding: 15px;
        // overflow: scroll;
        overflow: auto;
        margin-right: 20px;

        .title {
          font-size: 24px;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .time {
          font-size: 14px;
          color: #999;
          padding-bottom: 10px;
          margin-bottom: 10px;
          border-bottom: 1px solid #999;
        }

        .content {
          width: 100%;

          .p {
            text-indent: 2em;
            line-height: 30px;
            font-size: 16px;
            font-family: "Source Han Serif SC VF";

            span {
              font-family: "Source Han Serif SC VF";

              img {
                width: 100%;
                height: auto;
                margin: 10px 0;
              }
            }
          }

          img {
            width: 100%;
            height: auto;
            margin: 10px 0;
          }
        }

        .video {
          width: 100%;
          // height: 312px;
          position: relative;
          video {
            width: 100%;
            height: auto;
            // position: absolute;
            // top: 0;
            // left: 0;
          }

          .play_button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 11;
            color: #fff;
            padding: 10px;
            border-radius: 50%;
            font-size: 50px;
            cursor: pointer;
          }
        }
      }

      .event_list {
        width: 500px;
        height: 500px;

        background-color: rgb(245, 245, 245);
        overflow: auto;

        .control_list {
          height: 675px;
          display: flex;
          flex-direction: column;
          align-items: center;
          /* 垂直居中对齐 */
          justify-content: space-between;
          /* 上下平均分配间距 */

          .list {
            width: 100%;
            padding: 20px;
            height: 150px;
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            cursor: pointer;

            .list_img {
              width: 170px;
              height: 110px;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }

            .list_right {
              width: 290px;
              height: 110px;
              box-sizing: border-box;
              padding: 0 20px;

              .list_title {
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 10px;
                text-overflow: ellipsis;
                /* 显示省略号 */
                display: -webkit-box;
                /* 将元素作为弹性伸缩盒子模型展示 */
                -webkit-line-clamp: 2;
                /* 显示多少行文字 */
                -webkit-box-orient: vertical;
                /* 文本垂直排列 */
                overflow: hidden;
                /* 隐藏溢出的内容 */
              }

              .list_content {
                font-size: 16px;
                text-overflow: ellipsis;
                /* 显示省略号 */
                display: -webkit-box;
                /* 将元素作为弹性伸缩盒子模型展示 */
                -webkit-line-clamp: 2;
                /* 显示多少行文字 */
                -webkit-box-orient: vertical;
                /* 文本垂直排列 */
                overflow: hidden;
                /* 隐藏溢出的内容 */
              }
            }

            .video_width {
              width: 100%;
              padding: 0;
            }
          }

          .list:hover {
            background-color: rgb(186, 0, 14);
            color: #fff;
          }

          .active {
            background-color: rgb(186, 0, 14);
            color: #fff;
          }
        }

        // .list {
        //   width: 100%;
        //   padding: 20px;
        //   height: 150px;
        //   background-color: #fff;
        //   display: flex;
        //   justify-content: space-between;
        //   cursor: pointer;

        //   .list_img {
        //     width: 170px;
        //     height: 110px;

        //     img {
        //       width: 100%;
        //       height: 100%;
        //     }
        //   }

        //   .list_right {
        //     width: 290px;
        //     height: 110px;
        //     box-sizing: border-box;
        //     padding: 0 20px;

        //     .list_title {
        //       font-size: 18px;
        //       font-weight: 600;
        //       margin-bottom: 10px;
        //       text-overflow: ellipsis;
        //       /* 显示省略号 */
        //       display: -webkit-box;
        //       /* 将元素作为弹性伸缩盒子模型展示 */
        //       -webkit-line-clamp: 2;
        //       /* 显示多少行文字 */
        //       -webkit-box-orient: vertical;
        //       /* 文本垂直排列 */
        //       overflow: hidden;
        //       /* 隐藏溢出的内容 */
        //     }

        //     .list_content {
        //       font-size: 16px;
        //       text-overflow: ellipsis;
        //       /* 显示省略号 */
        //       display: -webkit-box;
        //       /* 将元素作为弹性伸缩盒子模型展示 */
        //       -webkit-line-clamp: 2;
        //       /* 显示多少行文字 */
        //       -webkit-box-orient: vertical;
        //       /* 文本垂直排列 */
        //       overflow: hidden;
        //       /* 隐藏溢出的内容 */
        //     }
        //   }
        // }

        // .list:hover {
        //   background-color: rgb(186, 0, 14);
        //   color: #fff;
        // }

        // .active {
        //   background-color: rgb(186, 0, 14);
        //   color: #fff;
        // }
      }
    }
  }

  //往期阅读回顾
  .bottom-read {
    width: 1200px;
    margin: 50px auto 0px;
    padding-bottom: 140px;
    background-color: rgb(245, 245, 245);

    // padding: 20px;
    > .tops {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      align-items: center;

      .bottom-title {
        font-size: 32px;
        font-weight: 600;
        color: #333;

        .title-line {
          height: 5px;
          width: 80px;
          margin-top: 10px;
          background-color: #ab000d;
        }
      }

      .right {
        display: flex;
        // width: 380px;

        .button {
          padding: 0px 18px;
          background-color: #fff;
          margin-left: 10px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .active {
          background-color: rgb(186, 0, 14);
          color: #fff;
        }
      }
    }

    .bottom-content {
      width: 100%;
      // display: flex;
      // justify-content: center;

      .page-list {
        width: 100%;
        border-bottom: 1px dashed;
        padding-top: 20px;

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

            .video {
              height: 100%;
              width: 100%;
              position: relative;

              video {
                height: 100%;
                width: 100%;
                object-fit: cover;
              }

              .play-button {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                font-size: 20px;
                color: #fff;
                // z-index: 102;
              }

              .click {
                position: absolute;
                top: -5px;
                right: 5px;
                font-size: 35px;
                font-weight: 600;
                color: #fff;
                cursor: pointer;
                z-index: 102;
                display: none;
              }
            }

            .videos {
              position: fixed;
              height: 33.6vw;
              width: 60vw;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 999;
            }

            .box-shadow {
              position: fixed;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              background-color: rgba(0, 0, 0, 0.001);
              z-index: 100;
            }
          }

          .page-detail {
            height: 100px;
            width: 900px;
            position: relative;

            .top {
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
              align-items: center;

              .page-title {
                font-size: 18px;
                font-weight: 600;
                // margin-bottom: 10px;
                cursor: pointer;
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

              .releaseTime {
                margin-right: 10px;
              }
            }
            .mobile-realseTime {
              display: none;
            }

            .page-time {
              margin-bottom: 10px;
              text-overflow: ellipsis;
              /* 显示省略号 */
              display: -webkit-box;
              /* 将元素作为弹性伸缩盒子模型展示 */
              -webkit-line-clamp: 2;
              /* 显示多少行文字 */
              -webkit-box-orient: vertical;
              /* 文本垂直排列 */
              overflow: hidden;
              /* 隐藏溢出的内容 */
              // height: 60px;
              width: 700px;
            }

            .view-it {
              position: absolute;
              right: 5px;
              bottom: -15px;
              cursor: pointer;
              font-size: 16px;
              font-weight: 600;
              color: #ab000d;
            }
          }
        }
      }

      .centered {
        padding-top: 20px;
        display: flex;
        justify-content: center;
      }
    }
  }
}

// 设置自适应
@media screen and (max-width: 1240px) {
  // 近期重要活动
  .older {
    .home {
      min-width: 100%;
      height: auto;
      min-height: auto;

      .left {
        padding: 40px 20px;

        .title {
          width: fit-content;
          font-size: 28px;
          // position: static;
          // transform: translateX(0);
          margin: 0 auto;
        }

        // width: 100%;
        width: 50%;

        .article {
          // margin: 10px auto;
          margin: 40px auto;
          width: fit-content;
          position: static;

          .article_title {
            font-size: 24px;
          }

          .article_padding {
          }

          .article_p {
            font-size: 16px;
          }
        }
      }

      .png {
        // position: absolute;
        // width: 40%;
        // height: 40%;
        // right: 0;
        // display: none;
        width: 50vw;
        height: auto;
        aspect-ratio: 4 / 3;
        img {
        }
      }
    }

    .six_module {
      .module .module_name {
        font-size: 16px;
      }
    }

    .recent_important_events {
      width: 100%;
      padding: 0 20px;

      .important_events_title {
        font-size: 28px;
      }
    }

    .bottom-read {
      width: 100%;
      padding: 0 20px 20px;

      .tops .bottom-title {
        font-size: 28px;
      }

      .bottom-content .page-list {
        .page {
          .page-img {
            flex-shrink: 0;
          }

          .page-detail {
            width: auto;
            margin-left: 20px;
            flex: 1;

            .top {
              .releaseTime {
                flex-shrink: 0;
              }
            }

            .page-time {
              width: auto;
            }
          }
        }
      }
    }
  }
}

// 设置banner margin
@media screen and (max-width: 1049px) {
  .older {
    .home {
      margin-top: 76px;

      .left {
        .title {
          font-size: 24px;
        }

        .article {
          .article_title {
            font-size: 20px;
          }

          .article_p {
            font-size: 14px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .older {
    .home {
      .left {
        padding: 20px;
      }
    }
    .six_module {
      .module .module_name {
        font-size: 14px;
        padding: 8px 10px;
      }
    }

    .recent_important_events {
      height: auto;
      .important_events_title {
        font-size: 26px;
      }
      .important_events_list {
        flex-direction: column-reverse;
        .contents {
          width: 100%;
          .video {
            height: 50vw;

            .play_button {
              font-size: 40px;
            }
          }
        }
        .event_list {
          height: auto;
          width: 100%;
          // margin-bottom: 10px;
          // flex-direction: row;

          .control_list {
            height: auto;
            width: 100%;
            margin-bottom: 10px;
            // flex-direction: row;

            .list {
              // width: 32.5%;
              width: 100%;
              margin: 5px 0;
              // flex-direction: column;
              // height: auto;
              height: 160px;

              .list_img {
                width: 200px;
                height: 100%;
                margin-right: 10px;
                // height: auto;
              }

              .list_right {
                width: 100%;
                padding: 0;
                margin-top: 10px;
                height: auto;

                .list_title {
                  // 这个写死了
                  min-height: 41.4px;
                }
              }
            }
          }
        }
      }
    }
    .bottom-read {
      .tops .bottom-title {
        font-size: 26px;
      }

      .bottom-content {
        .page-list {
          padding-top: 0;

          .page {
            margin: 20px 0;

            .page-detail {
              .view-it {
                bottom: -10px;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}

// 往期活动标签
@media screen and (max-width: 900px) {
  .older {
    .home {
      .left {
        .title {
          font-size: 24px;
          padding: 10px;
        }
        .article {
          .article_title {
            width: fit-content;
            font-size: 20px;
          }
          .article_p {
            font-size: 16px;
          }
        }
      }
    }
    .bottom-read {
      .tops {
        flex-direction: column;
        align-items: flex-start;
        .right {
          align-self: flex-end;
          flex-wrap: wrap;
          .button {
            margin-top: 10px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 862px) {
  .older {
    .home {
      flex-direction: column-reverse;
      .left {
        width: 100%;
        position: relative;
        .title {
          left: 20px;
          right: auto;
          transform: translateY(-50%);
          top: 0;
        }
        .article {
          margin: 40px auto 20px;
          .article_title {
            display: none;
          }
        }
      }
      .png {
        width: 100%;
        max-height: 300px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .older {
    .home {
      .left {
        .title {
          font-size: 20px;
        }

        .article {
          .article_title {
            font-size: 18px;
          }

          .article_p {
            font-size: 16px;
          }
        }
      }
    }
    .six_module {
      display: none;
    }

    .recent_important_events {
      .important_events_title {
        font-size: 22px;
      }

      .important_events_list {
        .contents {
          display: none;
          .video {
            .play_button {
              font-size: 30px;
            }
          }

          .title {
            font-size: 20px;
          }

          .time {
            font-size: 13px;
          }
        }

        .event_list {
          .control_list {
            .list {
              // height: 230px;
              height: 146px;
              .list_img {
                width: 190px;
                // height: 100px;
              }
              .list_right {
                .list_title {
                  font-size: 16px;
                  min-height: 37px;
                }
                .list_content {
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }

    .bottom-read {
      .tops {
        .bottom-title {
          font-size: 22px;
        }
        .right .button {
          font-size: 16px;
        }
      }
      .bottom-content .page-list .page .page-detail .top .page-title {
        font-size: 16px;
      }
    }
  }
}

// 往期活动标签
@media screen and (max-width: 740px) {
  .older {
    .bottom-read {
      .tops {
        .right {
          flex-wrap: wrap;
          .button {
            margin-left: 10px;
            height: 30px;
            padding: 0 10px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .older {
    .six_module {
      .module .module_name {
        font-size: 12px;
        padding: 6px 8px;
      }
    }

    .recent_important_events {
      .important_events_title {
        font-size: 22px;
      }

      .important_events_list {
        .contents {
          // height: auto;
          height: 400px;

          .title {
            font-size: 18px;
          }

          .time {
            font-size: 12px;
          }
        }

        .event_list {
          .control_list {
            .list {
              padding: 10px;
              height: 120px;

              .list_img {
                width: 180px;
                height: 100%;
              }

              .list_right {
                .list_title {
                  font-size: 16px;
                  min-height: 34px;
                }

                .list_content {
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }

    .bottom-read {
      > .tops {
        flex-direction: column;
        align-items: flex-start;

        .bottom-title {
          font-size: 22px;
          margin-bottom: 10px;
        }

        .right {
          width: 100%;
          // justify-content: center;
          flex-wrap: wrap;
          .button {
            padding: 0 10px;
            height: 25px;
            margin-left: 5px;
          }
        }
      }

      .bottom-content .page-list .page {
        .page-img {
          display: none;
        }
        .page-detail {
          margin-left: 10px;
          .top .releaseTime {
            display: none;
          }
          .mobile-realseTime {
            display: inline-block;
            position: absolute;
            bottom: -10px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 510px) {
  .older {
    .bottom-read {
      .tops {
        .right {
          flex-wrap: wrap;
          justify-content: flex-start;
          .button {
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
@media screen and (max-width: 768px) {
  .older {
    .recent_important_events {
      .important_events_list {
        .contents {
          .content {
            .p {
              font-size: 15px !important;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .older {
    .recent_important_events {
      .important_events_list {
        .contents {
          .content {
            .p {
              font-size: 14px !important;
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
p {
  line-height: 30px;
  font-size: 16px !important;
  font-family: "Source Han Serif SC VF" !important;

  span {
    font-family: "Source Han Serif SC VF" !important;
    font-size: 16px !important;
  }
  video {
    max-width: 100%;
  }
}
</style>
