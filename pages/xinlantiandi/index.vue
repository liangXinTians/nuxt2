<template>
  <div class="home">
    <!-- 标题内容 -->
    <div class="top">
      <!-- <img loading="lazy" src="../../assets/images/xinlantiandi/1.jpg" alt=""> -->
      <div class="video" @click="toggleVideo1()">
        <video
          :src="$config.videoUrl + '/videos.mp4'"
          loop
          id="xinlanvideo"
          :controls="showControlss"
          controlslist="nodownload"
          :poster="require('../../assets/images/xinlantiandi/video_bg.png')"
        >
          Your browser does not support the video tag.
        </video>
        <div class="play_button" id="playButtons1">
          <a-icon type="play-circle" />
        </div>
      </div>
      <div class="banner">
        <div class="banners" id="xinlanFont">
          <div class="title">信澜天地</div>
          <div class="subTitle">崇明东滩 度假式文旅康养社区</div>
          <div class="borders"></div>
          <div class="content">常&非常 216亩瑰丽秘境全域示范</div>
        </div>
      </div>
      <div class="two_dimensional">
        <div class="two_dimensional1">
          <img
            loading="lazy"
            src="../../assets/images/二维码/信澜天地公众号二维码.jpg"
            alt=""
          />
          <div>信澜天地公众号</div>
        </div>
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
            src="../../assets/images/xinlantiandi/logos.png"
            alt=""
          />
        </div>
        <div class="contents">
          <div class="contentss">
            信澜天地是中信养老的CCRC旗舰项目，位于世界级生态岛--上海崇明东滩，距离上海市区约1小时车程，紧邻崇明地铁线东滩站(计划2026年通车)，直线距离仅600米。
          </div>
          <div class="contentss">
            社区定位“康养+文旅”，既是活力长者的康养目的地，又是全周期家庭的旅居度假目的地。配套内容远比其他单一的养老社区精彩。适配康养的医养、餐饮、活动配套及全方位管家服务；适配文旅的晖廷(亲子)、云居(度假)两座酒店及文旅小镇丰富的休闲度假项目。
          </div>
          <div class="contentss">
            理想国，是信澜天地的康养，定位55岁以上健康活力人群，提供度假式退休持续照料；长青藤，是信澜天地的文旅，定位都市家庭全龄人群，提供精彩丰富的休闲度假场景。服务对象从个人到家庭，从一代人到几代人，实现传统养老行业的真正意义上的代际服务延伸。
          </div>
        </div>
      </div>
    </div>
    <div class="singLands">
      <div class="img">
        <img
          loading="lazy"
          src="../../assets/images/xinlantiandi/logos.png"
          alt=""
        />
      </div>
      <div class="contentss">
        信澜天地是中信养老的CCRC旗舰项目，位于世界级生态岛--上海崇明东滩，距离上海市区约1小时车程，紧邻崇明地铁线东滩站(计划2026年通车)，直线距离仅600米。
      </div>
      <div class="contentss">
        社区定位“康养+文旅”，既是活力长者的康养目的地，又是全周期家庭的旅居度假目的地。配套内容远比其他单一的养老社区精彩。适配康养的医养、餐饮、活动配套及全方位管家服务；适配文旅的晖廷(亲子)、云居(度假)两座酒店及文旅小镇丰富的休闲度假项目。
      </div>
      <div class="contentss">
        理想国，是信澜天地的康养，定位55岁以上健康活力人群，提供度假式退休持续照料；长青藤，是信澜天地的文旅，定位都市家庭全龄人群，提供精彩丰富的休闲度假场景。服务对象从个人到家庭，从一代人到几代人，实现传统养老行业的真正意义上的代际服务延伸。
      </div>
    </div>
    <!-- 三个图片 -->
    <div class="images">
      <div class="image">
        <div class="img_left">
          <div class="img1">
            <img
              loading="lazy"
              src="../../assets/images/xinlantiandi/2.jpg"
              alt=""
            />
            <div class="img_font">护理院</div>
          </div>
          <div class="img2">
            <img
              loading="lazy"
              src="../../assets/images/xinlantiandi/3.jpg"
              alt=""
            />
            <div class="img_font">康养独墅</div>
          </div>
        </div>
        <div class="img_right">
          <img
            loading="lazy"
            src="../../assets/images/xinlantiandi/4.jpg"
            alt=""
          />
          <div class="img_font">澜会所大堂</div>
        </div>
      </div>
      <div class="image-mobile">
        <div class="img_top" @click="handleImageClickSingle(threeBigImg[0])">
          <img loading="lazy" :src="threeBigImg[0]" alt="" />
          <div class="img_font">澜会所大堂</div>
        </div>
        <div class="img_bottom">
          <div class="img1" @click="handleImageClickSingle(threeBigImg[1])">
            <img loading="lazy" :src="threeBigImg[1]" alt="" />
            <div class="img_font">护理院</div>
          </div>
          <div class="img2" @click="handleImageClickSingle(threeBigImg[2])">
            <img loading="lazy" :src="threeBigImg[2]" alt="" />
            <div class="img_font">康养独墅</div>
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
        <div class="bottom_top">
          <!-- <img loading="lazy" src="../../assets/images/xinlantiandi/0/1s.png" alt=""> -->
          <!-- <div class="imgShdow"></div> -->
          <div class="back_color"></div>
          <div class="contents">
            <div class="content">
              <div>
                信澜天地占地约216亩，地上总建筑面积约11.5万方，全部采用低层建筑，容积率仅有0.78。项目由四幅地块构成，ABC地块定位康养，包含20套合院别墅、443套康养公寓、180床老年护理院。D地块定位文旅，引进海派经典五星级酒店品牌：锦江酒店集团。
              </div>
              <div>
                信澜天地汇集WATG建筑规划、Bensley
                园林景观、HBA室内艺术等全球大师设计智慧，约40000平米超大规模配套，涵盖约12000平米三重会所、约11000平米精品医疗、约17000平米文旅小镇。约100000平米浩园林，龙生九子、凤舞九天，巧妙构思“信澜十八胜景”，东滩秘境，瑰丽园艺，跃然眼前，实现想象之外的环境品质。
              </div>
            </div>
          </div>
          <div class="go_video">
            <div>点击视频，走进信澜天地</div>
            <div class="go_icon">→</div>
          </div>
          <div class="video" id="xinlantiandiVideo" @click="toggleVideo()">
            <video
              :src="$config.videoUrl + '/信澜天地video.mp4'"
              :poster="require('../../assets/images/index/onePro1.png')"
              loop
              :controls="showControls"
              id="myVideos"
              controlslist="nodownload"
            >
              Your browser does not support the video tag.
            </video>
            <div class="play_button" id="playButtons">
              <a-icon type="play-circle" />
            </div>
          </div>
          <div id="crosss" @click="handleImageClickss()">×</div>
        </div>
        <div class="bottom_top_mobiles">
          <div class="back_color">
            <div class="content">
              <div>
                信澜天地占地约216亩，地上总建筑面积约11.5万方，全部采用低层建筑，容积率仅有0.78。项目由四幅地块构成，ABC地块定位康养，包含20套合院别墅、443套康养公寓、180床老年护理院。D地块定位文旅，引进海派经典五星级酒店品牌：锦江酒店集团。
              </div>
              <div>
                信澜天地汇集WATG建筑规划、Bensley
                园林景观、HBA室内艺术等全球大师设计智慧，约40000平米超大规模配套，涵盖约12000平米三重会所、约11000平米精品医疗、约17000平米文旅小镇。约100000平米浩园林，龙生九子、凤舞九天，巧妙构思“信澜十八胜景”，东滩秘境，瑰丽园艺，跃然眼前，实现想象之外的环境品质。
              </div>
            </div>
          </div>
          <div class="video" @click="toggleVideoMobile()">
            <video
              :src="$config.videoUrl + '/信澜天地video.mp4'"
              :poster="require('../../assets/images/index/onePro1.png')"
              loop
              :controls="showControls"
              id="myVideos_mobile"
              controlslist="nodownload"
            >
              Your browser does not support the video tag.
            </video>
            <div class="play_button" id="playButtons_mobile">
              <a-icon type="play-circle" />
            </div>
          </div>
        </div>
        <div
          v-for="(item, index) in bottom1"
          :key="index"
          :class="{
            list: true,
            highlight: index == 0 || index == 2 || index == 4,
          }"
        >
          <div class="lists">
            <div class="list_left">
              <img loading="lazy" :src="item.img" alt="" />
              <div class="left_title">
                <div class="list_title">
                  <div class="title1">{{ item.title1 }}</div>
                  <div class="number">{{ item.number }}</div>
                  <div class="title2">{{ item.title2 }}</div>
                </div>
                <div class="subTitle">{{ item.subTitle }}</div>
              </div>
            </div>
            <div class="list_right">
              <img
                class="quotation"
                loading="lazy"
                :src="item.content_img"
                alt=""
              />
              <div class="content">{{ item.content }}</div>
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
                alt=""
                @click="handleImageClickSingle(imgItem.img)"
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
            src="../../assets/images/xinlantiandi/1/banner.jpg"
            alt=""
          />
          <!-- <div class="imgShdow"></div> -->
          <div class="contents">
            <div class="title_content">
              <div class="content">
                信澜天地的6大基础服务，在传统康养社区的标准上显著升级。具体包括：“信·领结”模块（职业化管家团队）、“澜·克勒”模块（高级圈层社交）、“味·餐厅”模块（澜会所的本帮、淮扬、粤菜餐饮）、“活·精致”模块（全面及精细的服务）、“修·养生”模块（护理院与漾SPA的疗养与养生服务），以及“感·智慧”模块（分布在全案的高科技智能服务与设施）。
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_top_mobile">
          <div class="contents">
            <div class="content-box">
              <div class="content-top">
                信澜天地的6大基础服务，在传统康养社区的标准上显著升级。具体包括：“信·领结”模块（职业化管家团队）、“澜·克勒”模块（高级圈层社交）、“味·餐厅”模块（澜会所的本帮、淮扬、粤菜餐饮）、“活·精致”模块（全面及精细的服务）、“修·养生”模块（护理院与漾SPA的疗养与养生服务），以及“感·智慧”模块（分布在全案的高科技智能服务与设施）。
              </div>
            </div>
          </div>
          <!-- 图片 -->
          <img
            loading="lazy"
            :src="serviceHighlightsBigImg[0]"
            @click="handleImageClickSingle(serviceHighlightsBigImg[0])"
          />
        </div>
        <div class="list1s">
          <div class="list1">
            <div class="left">
              <!-- <img loading="lazy" class="img1" src="../../assets/images/xinlantiandi/1/1s.png" alt=""> -->
              <div class="img_title">
                <img
                  loading="lazy"
                  class="img2"
                  src="../../assets/images/xinlantiandi/img_title/3.png"
                  alt=""
                  v-if="mobile"
                />
                <div class="title-box">
                  <img
                    loading="lazy"
                    src="../../assets/images/bg_s_read.png"
                    alt=""
                  />信 · 领结
                </div>
              </div>
              <div class="content">
                <img
                  loading="lazy"
                  class="img2"
                  src="../../assets/images/xinlantiandi/img_title/1.png"
                  alt=""
                  v-if="!mobile"
                />
                <div>
                  中信养老品牌的管家和服务文化，以职业化管家标准输出服务。合院专属、公寓精细、旅居特色、高龄保障四大分级体系，统一管理而有各有侧重，按照客户需求提供定制化服务。
                </div>
              </div>
            </div>
            <div class="right">
              <img
                loading="lazy"
                :src="serviceHighlightsBigImg[1]"
                @click="handleImageClickSingle(serviceHighlightsBigImg[1])"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="list2s">
          <div class="list1">
            <div class="left">
              <img
                loading="lazy"
                :src="serviceHighlightsBigImg[2]"
                @click="handleImageClickSingle(serviceHighlightsBigImg[2])"
                alt=""
              />
            </div>
            <div class="right">
              <!-- <img loading="lazy" class="img1" src="../../assets/images/xinlantiandi/1/2.png" alt=""> -->
              <div class="img_title" :class="{ 'mobile_style ': mobile }">
                <img
                  loading="lazy"
                  class="img2"
                  src="../../assets/images/xinlantiandi/img_title/2.png"
                  alt=""
                  v-if="mobile"
                />
                <div class="title-box">
                  <img
                    loading="lazy"
                    src="../../assets/images/bg_s_read.png"
                    alt=""
                    v-if="mobile"
                  />澜 · 克勒<img
                    loading="lazy"
                    src="../../assets/images/bg_s_read.png"
                    alt=""
                    v-if="!mobile"
                  />
                </div>
              </div>
              <div class="content">
                <img
                  loading="lazy"
                  class="img2"
                  src="../../assets/images/xinlantiandi/img_title/2.png"
                  alt=""
                  v-if="!mobile"
                />
                <div>
                  信澜天地打造俱乐部形式的社区活动，黑池舞俱乐部、SPA俱乐部、非遗俱乐部、旅居俱乐部、金融俱乐部。为长者营造丰富多彩的养老生活。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list1s">
          <div class="list1">
            <div class="left">
              <!-- <img loading="lazy" class="img1" src="../../assets/images/xinlantiandi/1/3.png" alt=""> -->
              <div class="img_title">
                <img
                  loading="lazy"
                  class="img2"
                  src="../../assets/images/xinlantiandi/img_title/1.png"
                  alt=""
                  v-if="mobile"
                />
                <div class="title-box">
                  <img
                    loading="lazy"
                    src="../../assets/images/bg_s_read.png"
                    alt=""
                  />味 · 餐厅
                </div>
              </div>
              <div class="content">
                <img
                  loading="lazy"
                  class="img2"
                  src="../../assets/images/xinlantiandi/img_title/3.png"
                  alt=""
                  v-if="!mobile"
                />
                <div>
                  信澜天地餐饮团队由锦江高星酒店行政主厨主理，规划了中式、西式、自助三大料理餐厅。早餐，我们提供双早餐服务模式，您可以选择中西自助早餐，也可以选择粤式自助早茶；午餐，中餐厅提供以淮扬菜式为主的自选或零点；晚餐，则是口味清淡，但是确保优质蛋白摄入的精致轻奢套餐。
                </div>
              </div>
            </div>
            <div class="right">
              <img
                loading="lazy"
                :src="serviceHighlightsBigImg[3]"
                @click="handleImageClickSingle(serviceHighlightsBigImg[3])"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="list2s">
          <div class="list1">
            <div class="left">
              <img
                loading="lazy"
                :src="serviceHighlightsBigImg[4]"
                @click="handleImageClickSingle(serviceHighlightsBigImg[4])"
                alt=""
              />
            </div>
            <div class="right">
              <!-- <img loading="lazy" class="img1" src="../../assets/images/xinlantiandi/1/4.png" alt=""> -->
              <div class="img_title" :class="{ 'mobile_style ': mobile }">
                <img
                  loading="lazy"
                  class="img2"
                  src="../../assets/images/xinlantiandi/img_title/3.png"
                  alt=""
                  v-if="mobile"
                />
                <div class="title-box">
                  <img
                    loading="lazy"
                    src="../../assets/images/bg_s_read.png"
                    alt=""
                    v-if="mobile"
                  />活 · 精致<img
                    loading="lazy"
                    src="../../assets/images/bg_s_read.png"
                    alt=""
                    v-if="!mobile"
                  />
                </div>
              </div>
              <div class="content">
                <img
                  loading="lazy"
                  class="img2"
                  src="../../assets/images/xinlantiandi/img_title/4.png"
                  alt=""
                  v-if="!mobile"
                />
                <div>
                  信澜天地给予24小时管家在岗，配备时尚家政、深度保洁、入户消杀、四季收纳等服务，帮助长者与物业对接，解决日常需求。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list1s">
          <div class="list1">
            <div class="left">
              <!-- <img loading="lazy" class="img1" src="../../assets/images/xinlantiandi/1/5.png" alt=""> -->
              <div class="img_title">
                <img
                  loading="lazy"
                  class="img2"
                  src="../../assets/images/xinlantiandi/img_title/5.png"
                  alt=""
                  v-if="mobile"
                />
                <div class="title-box">
                  <img
                    loading="lazy"
                    src="../../assets/images/bg_s_read.png"
                    alt=""
                  />修 · 养生
                </div>
              </div>
              <div class="content">
                <img
                  loading="lazy"
                  class="img2"
                  src="../../assets/images/xinlantiandi/img_title/5.png"
                  alt=""
                  v-if="!mobile"
                />
                <div>
                  信澜天地专门针对55-65岁健康活力长者，匹配包括运动评估、运动处方、教练课程在内的完整解决方案。
                </div>
              </div>
            </div>
            <div class="right">
              <img
                loading="lazy"
                :src="serviceHighlightsBigImg[5]"
                @click="handleImageClickSingle(serviceHighlightsBigImg[5])"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="list2s">
          <div class="list1">
            <div class="left">
              <img
                loading="lazy"
                :src="serviceHighlightsBigImg[6]"
                @click="handleImageClickSingle(serviceHighlightsBigImg[6])"
                alt=""
              />
            </div>
            <div class="right">
              <!-- <img loading="lazy" class="img1" src="../../assets/images/xinlantiandi/1/6.png" alt=""> -->
              <div class="img_title" :class="{ 'mobile_style ': mobile }">
                <img
                  loading="lazy"
                  class="img2"
                  src="../../assets/images/xinlantiandi/img_title/1.png"
                  alt=""
                  v-if="mobile"
                />
                <div class="title-box">
                  <img
                    loading="lazy"
                    src="../../assets/images/bg_s_read.png"
                    alt=""
                    v-if="mobile"
                  />感 · 智慧<img
                    loading="lazy"
                    src="../../assets/images/bg_s_read.png"
                    alt=""
                    v-if="!mobile"
                  />
                </div>
              </div>

              <div class="content">
                <img
                  loading="lazy"
                  class="img2"
                  src="../../assets/images/xinlantiandi/img_title/2.png"
                  alt=""
                  v-if="!mobile"
                />
                <div>
                  信澜天地打造便捷的智慧社区，用一张卡解决出入、消费以及安全问题，定位、报警、消费、梯控、门禁5合一卡通。
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
              @click="changeImgReviews(1)"
              :class="{ active: changeImgReview === 1 }"
            >
              周边配套
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(2)"
              :class="{ active: changeImgReview === 2 }"
            >
              园区环境
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
              @click="changeImgReviews(0)"
              :class="{ active: changeImgReview === 0 }"
            >
              康养公寓
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(5)"
              :class="{ active: changeImgReview === 5 }"
            >
              护理院
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(6)"
              :class="{ active: changeImgReview === 6 }"
            >
              服务设施
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(3)"
              :class="{ active: changeImgReview === 3 }"
            >
              生活场景
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
                  :id="'img-' + index"
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
import ImgSwiper from "../../components/imgSwiper.vue";
export default {
  name: "xinlantiandi",
  head: {
    title: "信澜天地",
    meta: [
      { charset: "utf-8" },
      {
        hid: "keywords",
        name: "keywords",
        content: "信澜天地，崇明养老院，度假式养老社区，文旅康养养老院，养老院",
      },
      {
        hid: "description",
        name: "description",
        content:
          "信澜天地是中信养老的CCRC旗舰项目，位于世界级生态岛--上海崇明东滩，“康养+文旅”的社区定位，既是活力长者的康养目的地，又是全周期家庭的旅居度假目的地。配套内容远比其他单一的养老社区精彩。",
      },
    ],
  },
  components: { ImgSwiper },
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
      changeImgReview: 1,
      // 三个图片
      threeBigImg: [
        require("~/assets/images/xinlantiandi/4.jpg"),
        require("~/assets/images/xinlantiandi/2.jpg"),
        require("~/assets/images/xinlantiandi/3.jpg"),
      ],
      // 社区设施
      bottom1: {
        0: {
          img: require("../../assets/images/xinlantiandi/img_title/1.png"),
          title1: "约",
          number: "17000",
          title2: "平方米",
          subTitle: "文旅小镇信澜荟",
          content_img: require("../../assets/images/xinlantiandi/content_img/1.png"),
          content:
            "  信澜天地D地块文旅小镇约17000平米，涵盖游、购、餐、娱等全家人的缤纷假日。文旅小镇内配置艺术中心、黑池舞厅、黑池KTV、龙腾市井商业街和体育公园;其中龙腾市井商业街即将在2024年引入崇明好物、宠物乐园、婚纱馆、户外运动、特色餐饮等品牌，营造持续昼夜的有趣场景，丰富住客娱乐休闲生活。",
          img_list: [
            {
              img: require("../../assets/images/xinlantiandi/0/2.jpg"),
              title: "黑池歌舞厅",
            },
            {
              img: require("../../assets/images/xinlantiandi/0/3.jpg"),
              title: "碧潭翠岭",
            },
            {
              img: require("../../assets/images/xinlantiandi/0/4.jpg"),
              title: "龙腾市井",
            },
          ],
        },

        1: {
          img: require("../../assets/images/xinlantiandi/img_title/2.png"),
          title1: "约",
          number: "10000",
          title2: "平方米",
          subTitle: "主楼澜会所",
          content_img: require("../../assets/images/xinlantiandi/content_img/2.png"),
          content:
            "  信澜天地B区澜会所约10000平米，内设有中西餐厅群、星空恒温泳池、秘境SPA、棋牌中心、图书馆、电影院、健身房、舞蹈室、书画手工、美容美发美甲、桌球乒乓、室内模拟高尔夫等10余项休闲娱乐设施。其中星空泳池，黑池舞蹈，秘境SPA，龙腾市井等场景都是在康养市场上首创。",
          img_list: [
            {
              img: require("../../assets/images/xinlantiandi/0/星空泳池.jpg"),
              title: "星空泳池",
            },
            {
              img: require("../../assets/images/xinlantiandi/0/图书馆.jpg"),
              title: "图书馆",
            },
            {
              img: require("../../assets/images/xinlantiandi/0/健身房.jpg"),
              title: "健身房",
            },
          ],
        },
        2: {
          img: require("../../assets/images/xinlantiandi/img_title/3.png"),
          title1: "",
          number: "102",
          title2: "间",
          subTitle: "锦江文旅酒店",
          content_img: require("../../assets/images/xinlantiandi/content_img/1.png"),
          content:
            "  信澜天地晖廷云居酒店包括“晖廷、云居”两个区域，其中:“晖廷”共享D区文旅小镇配套，包括24间平层、复式客房，以亲子度假风为产品特色;“云居”则坐拥B区澜会所配套，由78间一房一厅、两房两厅酒店式公寓组成，以家庭式全套房配置为产品特色。",
          img_list: [
            {
              img: require("../../assets/images/xinlantiandi/0/酒店大堂.jpg"),
              title: "酒店大堂",
            },
            {
              img: require("../../assets/images/xinlantiandi/0/亲子LOFT房1.jpg"),
              title: "亲子LOFT房",
            },
            {
              img: require("../../assets/images/xinlantiandi/0/亲子LOFT房2.jpg"),
              title: "亲子LOFT房",
            },
          ],
        },
        3: {
          img: require("../../assets/images/xinlantiandi/img_title/4.png"),
          title1: "",
          number: "",
          title2: "",
          subTitle: "康养公寓",
          content_img: require("../../assets/images/xinlantiandi/content_img/2.png"),
          content:
            "  设有一室一厅、两室一厅两款房型，约8.4米全南两开间宽境，使得整体空间提升约15%。全明走廊单边入户，约8平米全南阔景阳台。同样的房型，提供美式、欧式两款风格，精装全配交付，德系内核，无忧拎包入住，配备适老家居用品、适老厨房与卫浴，家具和家电的交付标准和样板房保持一致，所见即所得。",
          img_list: [
            {
              img: require("../../assets/images/xinlantiandi/0/康养公寓（二室一厅）客厅.jpg"),
              title: "康养公寓（二室一厅）客厅",
            },
            {
              img: require("../../assets/images/xinlantiandi/0/康养公寓（二室一厅）卧室1.jpg"),
              title: "康养公寓（二室一厅）卧室",
            },
            {
              img: require("../../assets/images/xinlantiandi/0/康养公寓（二室一厅）卧室2.jpg"),
              title: "康养公寓（二室一厅）卧室",
            },
          ],
        },
        4: {
          img: require("../../assets/images/xinlantiandi/img_title/5.png"),
          title1: "约",
          number: "11000",
          title2: "平方米",
          subTitle: "护理院",
          content_img: require("../../assets/images/xinlantiandi/content_img/1.png"),
          content:
            "  信澜护理院位于信澜天地园区北侧，总建筑面积11000平米，设置门诊和住院部，是信澜天地必不可少的医疗精品配套。门诊部内有内科、外科、康复医学科、中医科、B超心电、药房等科室，并设有中医理疗、针灸、康复康乐等主要具有老年特色科室功能区域。住院部整体床位180张，以单人间、双人间为主，病房均朝南设置，并具备单独卫浴。",
          img_list: [
            {
              img: require("../../assets/images/xinlantiandi/0/护理院大堂.jpg"),
              title: "护理院大堂",
            },
            {
              img: require("../../assets/images/xinlantiandi/0/护理院病房.jpg"),
              title: "护理院病房",
            },
            {
              img: require("../../assets/images/xinlantiandi/0/护理院康复区.jpg"),
              title: "护理院康复区",
            },
          ],
        },
      },
      // 服务亮点要放大的图片
      serviceHighlightsBigImg: [
        require("~/assets/images/xinlantiandi/1/banner_mobile.jpg"),
        require("~/assets/images/xinlantiandi/1/领结.jpg"),
        require("~/assets/images/xinlantiandi/img_list/1.jpg"),
        require("~/assets/images/xinlantiandi/1/餐厅.png"),
        require("~/assets/images/xinlantiandi/1/精致.png"),
        require("~/assets/images/xinlantiandi/1/养生.jpg"),
        require("~/assets/images/xinlantiandi/1/智慧.png"),
      ],
      // 头部视频控件属性
      showControlss: false,
      //社区设施控件属性
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
        pid: 1,
      }
    );
    this.bottom3 = response.data.data;
    console.log("bottom3", this.bottom3);
    // this.bottom3s = this.bottom3.slice(0, 1)[0].media_details
    // this.bottom3s = this.bottom3.slice(0, 1)[0].media_details.map((item, index) => {
    //   return {
    //     ...item,
    //     newIndex: index // 添加一个新属性保存新索引值
    //   }
    // })
    const bottom3ss = this.bottom3.slice(1, 2)[0].media_details;
    this.bottom3s = Object.values(bottom3ss);
    this.bottom3s.forEach((obj, index) => {
      obj.newIndex = index;
    });
    console.log("bottom3s", this.bottom3s);
    this.imgIndex = this.bottom3s.length;

    this.mobileFunction();
    window.addEventListener("resize", this.mobileFunction);

    this.$nextTick(() => {
      this.$refs.visitReserve?.mobileFunctions();
    });
  },
  watch: {
    // isPlaying(newValue) {
    //   if (newValue) {
    //     console.log('视频已开始播放');
    //   } else {
    //     // 视频暂停或结束时执行的方法
    //     console.log('视频已暂停或播放结束');
    //   }
    // }
  },
  methods: {
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
    // 点击视频的时候
    toggleVideo1() {
      // const video = document.getElementById("xinlanvideo")
      // const playButton = document.getElementById("playButtons1")
      // const font = document.getElementById("xinlanFont")
      // this.showImg = false
      // if (video.paused) {
      //   video.play()
      //   playButton.style.display = "none"
      //   font.style.opacity = "0"
      // } else {
      //   video.pause()
      //   playButton.style.display = "block"
      //   font.style.opacity = "1"
      // }
      const video = document.getElementById("xinlanvideo");
      const playButton = document.getElementById("playButtons1");
      const font = document.getElementById("xinlanFont");
      if (video.paused) {
        font.style.opacity = "0";
        setTimeout(() => {
          font.style.display = "none";
        }, 300);
      } else {
        font.style.display = "block";
        setTimeout(() => {
          // font.style.display = "block"
          font.style.opacity = "1";
        }, 300);
      }

      if (this.showControlss) {
        return;
      } else {
        this.showImg = false;
        this.showControlss = true;
        // font.style.opacity = "0"
        playButton.style.display = "none";

        setTimeout(() => {
          video.play();
        }, 300);
      }
    },
    toggleVideo() {
      // 如果视频处于展开状态，则不执行播放或暂停操作
      if (this.showControls) {
        return;
      } else {
        const video = document.getElementById("myVideos");
        const playButton = document.getElementById("playButtons");
        playButton.style.display = "none";
        // video.play()
        // 显示控件
        this.showControls = true;

        // 视频位置
        const checkImg = document.getElementById("xinlantiandiVideo");
        const cross = document.getElementById("crosss");
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
    },
    toggleVideoMobile() {
      const video = document.getElementById("myVideos_mobile");
      const playButton = document.getElementById("playButtons_mobile");
      if (this.showControls) {
        return;
      } else {
        // video.play()
        // 显示控件
        this.showControls = true;
        playButton.style.display = "none";
        // 解决第一次点击视频出现的问题
        setTimeout(() => {
          video.play();
        }, 100);
      }
    },
    handleImageClickss() {
      const checkImg = document.getElementById("xinlantiandiVideo");
      const cross = document.getElementById("crosss");
      checkImg.classList.remove("changeImgs");
      cross.style.display = "none";
      // console.log("视频缩小")
      const video = document.getElementById("myVideos");
      video.pause();
      const playButton = document.getElementById("playButtons");
      playButton.style.display = "block";
      // 隐藏控件
      this.showControls = false;
      // 恢复滚动条
      let root = document.documentElement;
      root.style.overflow = "";
      root.style.borderRight = "";
    },
    // 切换模块
    changeReviews(index) {
      this.changeReview = index;
      if (index != 0) {
        this.showImg = true;
        this.showControls = false;
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
    // 鼠标在图片list区域的事件
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
      } else if (this.bottom3_id > this.imgIndex - 3) {
        this.bottom3_id -= 1;
      } else {
        imgList.style.left = `calc(-${40 * this.bottom3_id}vw - ${
          10 * this.bottom3_id
        }px)`;
        console.log("imgList", imgList.style.left);
      }
      console.log("bottom3_id", this.imgIndex, this.bottom3_id);
    },
    // 鼠标在图片list区域的事件
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
        const checkImg = document.getElementById("img-" + index);
        // const cross = document.getElementById("cross")
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
    // 云参观点击图片放大
    handleImageClickMobile(index) {
      this.distinguishingMark = 0;
      this.showBigImg = true;
      this.activeImgIndex = index;
      this.bigImgList = this.bottom3s;
    },
    // 关闭大图
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
        const checkImg = document.getElementById("img-" + this.imgListIndex);
        // const cross = document.getElementById("cross")
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
    lastImgs() {
      if (this.imgListIndex > 0) {
        const checkImg = document.getElementById("img-" + this.imgListIndex);
        checkImg.classList.remove("changeImg");
        this.imgListIndex -= 1;
        const checkImgs = document.getElementById("img-" + this.imgListIndex);
        checkImgs.classList.add("changeImg");
        console.log("imgListIndex", this.imgListIndex);
      } else {
        return;
      }
    },
    nextImgs() {
      if (this.imgListIndex < this.imgIndex - 1) {
        const checkImg = document.getElementById("img-" + this.imgListIndex);
        checkImg.classList.remove("changeImg");
        this.imgListIndex += 1;
        const checkImgs = document.getElementById("img-" + this.imgListIndex);
        checkImgs.classList.add("changeImg");
        console.log("imgListIndex", this.imgListIndex);
      }
    },
  },
  computed: {},
  beforeDestroy() {
    document.removeEventListener("wheel", this.handleMouseWheel, {
      passive: false,
    });
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  font-family: "Source Han Serif SC VF";
  video {
    vertical-align: middle;
  }
  .top {
    position: relative;
    height: auto;
    overflow: hidden;
    margin: 0 auto;

    img {
      width: 100%;
      // max-height: calc(100vh - 190px);
      max-height: calc(100vh - 206px);
      object-fit: cover;
    }

    .video {
      width: 100%;
      // max-height: calc(100vh - 190px);
      max-height: calc(100vh - 206px);

      video {
        width: 100%;
        // height: 100%;
        max-height: calc(100vh - 150px);
        object-fit: cover;
      }

      video::-webkit-media-controls-timeline {
        margin-bottom: 40px;
        //设置进度条与控制条之间的垂直距离
      }

      .play_button {
        position: absolute;
        top: 44%;
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
    }

    .banner {
      pointer-events: none;
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: #fff;
      display: flex;
      justify-content: center;

      .banners {
        width: 1200px;
        transition: opacity 0.3s ease, height 0.3s ease;

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
          width: 665px;
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
          width: 60px;
          height: 60px;
          margin: 0 auto;
        }

        div {
          font-size: 12px;
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
    margin: 50px 0;

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
        }
      }

      .contents {
        width: 740px;
        display: flex;
        flex-direction: column;
        align-self: flex-end;

        .contentss {
          list-style: 40px;
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

  .singLands {
    display: none;
    width: 100%;
    height: auto;
    padding: 0 20px;
    .img {
      text-align: center;
      margin: 20px 0;
      img {
        width: 40%;
        min-width: 150px;
        max-width: 300px;
        height: auto;
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
          margin: 45px 20px 45px 10px;
        }

        .active {
          border-bottom: rgb(175, 13, 13) solid 4px;
          color: rgb(0, 0, 0);
        }
      }
    }

    .bottom1 {
      .bottom_top {
        width: 100%;
        position: relative;
        width: 100%;
        height: 29.5vw;

        .back_color {
          height: 100%;
          width: 50%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: rgb(187, 2, 16);
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

            div {
              color: #fff;
              font-size: 16px;
              width: 48%;
              line-height: 30px;
              text-indent: 2em;
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

        .video {
          position: absolute;
          left: 50%;
          width: 50%;
          height: 100%;
          top: 0;
          // z-index: 91;

          video {
            width: 100%;
            height: 100%;
            object-fit: cover;

            position: absolute;
            top: 0;
            left: 0;
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

        #crosss {
          position: fixed;
          top: 120px;
          right: calc(17.5vw + 5px);
          font-size: 30px;
          color: #fff;
          font-weight: 900;
          display: none;
          z-index: 999;
          cursor: pointer;
        }

        .changeImgs {
          position: fixed;
          top: 120px;
          left: 50%;
          z-index: 91;
          transform: translateX(-50%);
          height: 40vw;
          width: 65vw;
        }
      }

      // 移动端样式
      .bottom_top_mobiles {
        display: none;
        .back_color {
          background-color: rgb(187, 2, 16);
          width: 100%;
          .content {
            padding: 20px;
            > div {
              color: #fff;
              font-size: 16px;
              line-height: 22px;
              text-indent: 2em;
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

            img {
              width: 66px;
              height: auto;
              margin-bottom: 20px;
            }

            .left_title {
              font-size: 40px;
              .list_title {
                display: flex;
                .number {
                  color: rgb(180, 1, 14);
                }
              }
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
              // color: rgb(0, 0, 0);
              line-height: 22px;
              text-indent: 2em;
            }
          }
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
              // height: auto;
              object-fit: cover;
            }

            div {
              margin-top: 15px;
              // color: rgb(0, 0, 0);
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
        height: 29.5vw;
        overflow: hidden;

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

          .title_content {
            width: 1200px;
            color: #fff;

            .content {
              width: 48%;
              line-height: 30px;
              font-size: 16px;
            }
          }
        }
      }
      // 移动端样式
      .bottom_top_mobile {
        display: none;
        .contents {
          background-color: #ba000e;
          .content-box {
            padding: 20px;
            margin: 0 auto;
            text-indent: 2em;
            color: white;
            width: fit-content;
            font-size: 16px;
            line-height: 22px;
          }
        }
        img {
          width: 100%;
        }
      }

      .list1s {
        height: 600px;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: rgb(255, 255, 255);
        padding: 80px 0;

        .list1 {
          width: 1200px;
          display: flex;
          justify-content: space-between;
          height: auto;
          position: relative;

          .left {
            width: 38%;

            .img_title {
              font-size: 40px;
              color: #ba000e;
              display: flex;
              align-items: center;
              font-weight: 700;
              justify-content: space-between;
              .title-box {
                img {
                  height: 15px;
                  width: 15px;
                  margin: 0 5px 18px 0;
                }
              }
            }

            // .img1 {
            //   width: 200px;
            //   min-width: 120px;
            //   position: absolute;
            //   left: 0;
            //   top: 0;
            // }

            .content {
              position: absolute;
              left: 0;
              bottom: 0;
              width: 38%;

              .img2 {
                width: 66px;
                margin-bottom: 10px;
              }

              div {
                line-height: 26px;
                font-size: 16px;
              }
            }
          }

          .right {
            width: 55%;

            img {
              width: 100%;
              height: 440px;
              object-fit: cover;
              // height: auto;
            }
          }
        }
      }

      .list2s {
        height: 600px;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: rgb(245, 245, 245);
        padding: 80px 0;

        .list1 {
          width: 1200px;
          display: flex;
          justify-content: space-between;

          position: relative;

          .left {
            width: 55%;

            img {
              width: 100%;
              height: 440px;
              object-fit: cover;
            }
          }

          .right {
            width: 38%;

            // .img1 {
            //   position: absolute;
            //   right: 0;
            //   top: 0;
            //   min-width: 120px;
            //   width: 200px;
            // }
            .img_title {
              // position: absolute;
              // right: 0;
              // top: 0;
              justify-content: flex-end;
              font-size: 40px;
              color: #ba000e;
              display: flex;
              align-items: center;
              font-weight: 700;

              &.mobile_style {
                justify-content: space-between;
              }

              .title-box {
                img {
                  height: 15px;
                  width: 15px;
                  margin: 0 0 18px 5px;
                }
              }
            }

            .content {
              width: 38%;
              position: absolute;
              right: 0;
              bottom: 0;

              .img2 {
                width: 66px;
                margin-bottom: 10px;
              }

              div {
                line-height: 26px;
                font-size: 16px;
              }
            }
          }
        }
      }
    }

    .bottom3 {
      width: 100%;
      background-color: rgb(42, 42, 42);
      height: auto;

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

        //解决频繁点击轮播按钮出现蓝色的问题
        ::selection {
          color: initial;
          background: initial;
        }

        .home_left {
          height: 50px;
          width: 50px;
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
    }
  }
}

@media screen and (max-width: 1220px) {
  .home {
    .top {
      .video .play_button {
        font-size: 50px;
      }
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
            width: 530px;
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
        justify-content: space-evenly;
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
      padding: 0 20px;

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
        .bottom_top {
          height: 40vw;
        }
        .list {
          // padding: 0 10px;

          .lists {
            width: 100%;

            .list_left {
              padding-left: 10px;
              .left_title {
                font-size: 38px;
              }
            }

            .list_right {
              padding-right: 10px;
            }
          }

          .imgs {
            width: 100%;
            padding: 0 10px;

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
          .contents {
            .title_content {
              width: 100%;
              padding: 0 10px;
            }
          }
        }

        .list1s {
          height: auto;

          .list1 {
            width: 100%;
            // padding: 0 10px;

            .left {
              width: 40%;

              .img1 {
                width: 15%;
                height: auto;
                left: 10px;
              }

              .content {
                left: 10px;
              }
            }

            .right {
              img {
                height: 36.6vw;
              }
            }
          }
        }

        .list2s {
          height: auto;

          .list1 {
            width: 100%;

            .left {
              img {
                height: 36.6vw;
              }
            }

            .right {
              width: 40%;

              .img1 {
                width: 15%;
                height: auto;
                right: 10px;
              }

              .content {
                right: 10px;
              }
            }
          }
        }
        .list1s,
        .list2s {
          .list1 {
            .left,
            .right {
              .img_title {
                .img2 {
                  width: 60px;
                }
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
    .bottoms {
      .bottom1 {
        .bottom_top {
          height: 46vw;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .home {
    .top {
      .video .play_button {
        font-size: 44px;
      }
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
            width: 465px;
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
        .bottom_top {
          height: 52vw;
        }
        .list {
          height: 650px;

          .lists {
            .list_left {
              .left_title {
                font-size: 36px;
              }
            }

            // .list_right {}
          }

          // .imgs {
          //   .img_div {
          //     img {}
          //   }
          // }
        }
      }

      .bottom2 {
        .list1s {
          padding: 70px 0;

          .list1 {
            .left {
              width: 41%;

              .content {
                width: 41%;
              }
            }
          }
        }

        .list2s {
          padding: 70px 0;

          .list1 {
            .right {
              width: 41%;

              .content {
                width: 41%;
              }
            }
          }
        }
        .list1s,
        .list2s {
          .list1 {
            .left,
            .right {
              .img_title {
                font-size: 36px;
                .img2 {
                  width: 50px;
                }
              }
            }
          }
        }
      }
    }
  }
}

// logo和文字
@media screen and (max-width: 835px) {
  .home {
    /*  .singLand {
      .content {
        .contents {
          .fix_content {
            width: 100vw;
            width: calc(100vw - 35px);
            margin-left: -43%;
          }
        }
      }
    } */

    .bottoms {
      .titles .title {
        justify-content: center;
      }
      .bottom1 {
        .bottom_top {
          height: 64vw;
        }
        .list {
          .lists {
            .list_left {
              .left_title {
                font-size: 40px;
              }
            }
          }
        }
      }
      .bottom2 {
        .bottom_top {
          .contents {
            .title_content {
              .content {
                line-height: 25px;
              }
            }
          }
        }

        .list1s {
          padding: 60px 0;

          .list1 {
            .left {
              width: 42%;

              .content {
                width: 42%;
              }
            }
          }
        }

        .list2s {
          padding: 60px 0;

          .list1 {
            .right {
              width: 42%;

              .content {
                width: 42%;
              }
            }
          }
        }
        .list1s,
        .list2s {
          .list1 {
            .left,
            .right {
              .img_title {
                font-size: 30px;
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
      .video .play_button {
        font-size: 40px;
      }
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
            width: 400px;
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
          .button {
            font-size: 24px;
            margin: 30px 10px 30px 10px;
            height: 50px;
            line-height: 50px;
          }
        }
      }
      // .bottom1 {
      //   .bottom_top {
      //     display: none;
      //   }
      //   .bottom_top_mobiles {
      //     display: block;
      //   }
      //   .list {
      //     height: 600px;
      //     .lists {
      //       .list_left {
      //         width: 45%;
      //         margin-bottom: 10px;
      //         img {
      //           width: auto;
      //         }
      //         .left_title {
      //           font-size: 24px;
      //           display: flex;
      //           flex-direction: column;
      //           justify-content: center;
      //         }
      //       }
      //       .list_right {
      //         width: 55%;
      //         .quotation {
      //           display: none;
      //         }
      //       }
      //     }
      //     .imgs {
      //       .img_div {
      //         font-size: 14px;
      //       }
      //     }
      //   }
      // }
      .bottom1 {
        .bottom_top {
          display: none;
        }
        .bottom_top_mobiles {
          display: block;
        }
        .list {
          height: auto;

          .lists {
            // height: 600px;
            height: auto;
            position: static;
            display: block;
            padding-top: 20px;
            margin-bottom: 10px;
            .list_left {
              width: 100%;
              position: static;
              display: flex;
              justify-content: space-between;
              padding: 0 20px;
              margin-bottom: 10px;
              align-items: center;
              img {
                margin-bottom: 0;
                width: 40px;
                height: 58px;
              }

              .left_title {
                justify-content: flex-end;
                flex-direction: column;
                display: flex;
                font-size: 24px;
                // .list_title {
                //   font-size: 30px;
                // }
                // .subTitle {
                //   font-size: 30px;
                // }
              }
            }

            .list_right {
              position: static;
              width: 100%;
              padding: 0 20px;
              .quotation {
                display: none;
              }
            }
          }

          .imgs {
            padding-bottom: 10px;
            padding: 0 20px;
            .img_div {
              img {
                height: 20vw;
              }
              div {
                margin-top: 5px;
                font-size: 14px;
              }
            }
          }
        }
      }
      .bottom2 {
        .bottom_top {
          display: none;
          .contents {
            .title_content {
              .content {
                line-height: 18px;
                font-size: 14px;
              }
            }
          }
        }
        .bottom_top_mobile {
          display: block;
        }
        .list1s {
          padding: 20px;
          .list1 {
            position: static;
            display: block;
            .left {
              width: 100%;
              .img1 {
                position: static;
              }
              .content {
                width: 100%;
                position: static;
                padding: 10px 0;
                div {
                  line-height: 22px;
                }
              }
            }
            .right {
              width: 100%;

              img {
                height: 60vw;
              }
            }
          }
        }

        .list2s {
          padding: 20px;
          .list1 {
            flex-direction: column-reverse;
            align-items: center;
            .left {
              width: 100%;
              img {
                height: 60vw;
              }
              .content {
                div {
                  line-height: 22px;
                }
              }
            }
            .right {
              width: 100%;
              // .img1 {}
              .content {
                width: 100%;
                position: static;
                padding: 10px 0;
              }
            }
          }
        }
        .list1s,
        .list2s {
          .list1 {
            .left,
            .right {
              .img_title {
                font-size: 24px;
                .img2 {
                  width: 40px;
                  height: 58px;
                }
                .title-box {
                  flex: 1;
                  text-align: right;
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
          height: calc(31vw + 20px);
          display: block;
        }
      }
    }
  }
}

@media screen and (max-width: 560px) {
  .home {
    .top {
      .video .play_button {
        font-size: 38px;
      }
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
            width: 294px;
            margin-top: -10px;
          }

          .content {
            font-size: 16px;
          }
        }
      }
    }

    // .images {
    //   .image {
    //     .img_left {
    //       .img1 {
    //         .img_font {
    //           font-size: 14px;
    //         }
    //       }

    //       .img2 {
    //         .img {
    //           .img_font {
    //             font-size: 14px;
    //           }
    //         }
    //       }
    //     }

    //     .img_right {
    //       .img_font {
    //         font-size: 14px;
    //       }
    //     }
    //   }
    // }

    // .bottoms {
    //   .bottom1 {
    //     .list {
    //       height: auto;

    //       .lists {
    //         // height: 600px;
    //         height: auto;
    //         position: static;
    //         display: block;
    //         padding-top: 40px;

    //         .list_left {
    //           width: 100%;
    //           position: static;
    //           display: flex;
    //           justify-content: space-between;
    //           padding: 0 10px;

    //           img {
    //             margin-bottom: 0;
    //             width:40px;
    //           }

    //           .lift_title {
    //             .list_title {
    //               font-size: 30px;
    //             }

    //             .subTitle {
    //               font-size: 30px;
    //             }
    //           }
    //         }

    //         .list_right {
    //           position: static;
    //           width: 100%;
    //           padding: 0 10px;
    //         }
    //       }

    //       .imgs {
    //         padding-bottom: 10px;
    //       }
    //     }
    //   }
    // }
  }
}

@media screen and (max-width: 350px) {
  .home {
    .top {
      .video .play_button {
        font-size: 34px;
      }
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
