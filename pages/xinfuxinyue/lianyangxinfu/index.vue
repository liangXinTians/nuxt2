<template>
  <div class="home">
    <!-- 标题内容 -->
    <div class="top">
      <div class="boxShdow"></div>
      <img
        loading="lazy"
        src="../../../assets/images/index/twoPro2s.jpg"
        alt=""
        @load="handleImgLoad"
      />
      <div class="banner">
        <div class="banners">
          <div class="title">联洋信福（昆仑邸）</div>
          <div class="subTitle">内环内 联洋上 滨河花园融合康养社区</div>
          <!-- <div class="borders"></div> -->
          <div class="content">2024年内环内新建最大康养项目</div>
        </div>
      </div>
      <!-- <div class="two_dimensional">
        <div class="two_dimensional1"><img src="../../../assets/images/二维码/联洋信福公众号二维码.jpg" alt="">
          <div>联洋信福公众号</div>
        </div>
        <div class="two_dimensional2"><img src="../../../assets/images/二维码/联洋信福视频号二维码.jpg" alt="">
          <div>联洋信福视频号</div>
        </div>
      </div> -->
    </div>
    <!-- 参观预约 -->
    <VisitReserve ref="visitReserve" />
    <!-- logo和文字-->
    <div class="singLand">
      <div class="content">
        <div class="logo">
          <img
            loading="lazy"
            src="../../../assets/images/xinfuxinyue/lianyangxinfu/logo.png"
            alt=""
          />
        </div>
        <div class="contents">
          <div class="contentss">
            联洋信福康养社区（昆仑邸）由上海地产养投投资承建，中信养老合作运营管理，国央企联袂倾力打造，是“都市型、一站式、医康养”的全新升级产品。
          </div>
          <div class="contentss">
            项目位于杨高中路1906号，浦东新区内环内联洋板块，高端社区环伺，生活氛围浓厚。距9号线芳甸路站点仅0.35公里，2公里内可达三家二级以上公立型医院，及大拇指广场、正大生活馆、天物空间、旭辉广场等醇熟商业配套，让养老回归内环内。
          </div>
          <div class="contentss">
            项目定位“城芯、康养、新融合”，从长者真实需求出发，推出五大融合Uni服务体系，涵盖独立生活、协助生活、介助介护、认知障碍四大健康阶段，包括社区、餐饮、活动、管家、医疗、家政六大服务模块，为客户提供一站式全周期康养服务。
          </div>
        </div>
      </div>
    </div>
    <div class="singLands">
      <div class="img">
        <img
          loading="lazy"
          src="../../../assets/images/xinfuxinyue/lianyangxinfu/logo.png"
          alt=""
        />
      </div>
      <div class="contentss">
        联洋信福康养社区（昆仑邸）由上海地产养投投资承建，中信养老合作运营管理，国央企联袂倾力打造，是“都市型、一站式、医康养”的全新升级产品。
      </div>
      <div class="contentss">
        项目位于杨高中路1906号，浦东新区内环内联洋板块，高端社区环伺，生活氛围浓厚。距9号线芳甸路站点仅0.35公里，2公里内可达三家二级以上公立型医院，及大拇指广场、正大生活馆、天物空间、旭辉广场等醇熟商业配套，让养老回归内环内。
      </div>
      <div class="contentss fix_content">
        项目定位“城芯、康养、新融合”，从长者真实需求出发，推出五大融合Uni服务体系，涵盖独立生活、协助生活、介助介护、认知障碍四大健康阶段，包括社区、餐饮、活动、管家、医疗、家政六大服务模块，为客户提供一站式全周期康养服务。
      </div>
    </div>
    <!-- 三个图片 -->
    <div class="images">
      <div class="image">
        <div class="img_left">
          <div class="img1">
            <img
              loading="lazy"
              src="../../../assets/images/xinfuxinyue/lianyangxinfu/3.jpg"
              alt=""
            />
            <div class="img_font">昆仑邸大门</div>
          </div>
          <div class="img2">
            <img
              loading="lazy"
              src="../../../assets/images/xinfuxinyue/lianyangxinfu/4.png"
              alt=""
            />
            <div class="img_font">昆仑邸内景</div>
          </div>
        </div>
        <div class="img_right">
          <img
            loading="lazy"
            src="../../../assets/images/xinfuxinyue/lianyangxinfu/2.jpg"
            alt=""
          />
          <div class="img_font">昆仑邸全景</div>
        </div>
      </div>
      <div class="image-mobile">
        <div class="img_top" @click="handleImageClickSingle(threeBigImg[0])">
          <img loading="lazy" :src="threeBigImg[0]" alt="" />
          <div class="img_font">昆仑邸大门</div>
        </div>
        <div class="img_bottom">
          <div class="img1" @click="handleImageClickSingle(threeBigImg[1])">
            <img loading="lazy" :src="threeBigImg[1]" alt="" />
            <div class="img_font">昆仑邸内景</div>
          </div>
          <div class="img2" @click="handleImageClickSingle(threeBigImg[2])">
            <img loading="lazy" :src="threeBigImg[2]" alt="" />
            <div class="img_font">昆仑邸全景</div>
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
          <img
            loading="lazy"
            src="~/assets/images/xinfuxinyue/lianyangxinfu/6.png"
            alt=""
          />
          <!-- <div class="imgShdow"></div> -->
          <!-- <div class="back_color"></div> -->
          <div class="contents">
            <div class="content">
              <div>
                联洋信福康养社区（昆仑邸）总建筑面积4.68万方，1号楼为养护机构，规划244张床位，设置有门诊（包括康复、理疗中心）、内设医务室等专业化医疗服务配套设施。3、5、6号楼为康养公寓，规划281套自理公寓，2号楼为社区公共配套中心。
              </div>
              <div>
                项目整体配套面积超5000平米，设有中信书店、昆仑食坊、香愈社、翰墨社、品茗社、对弈社、欢唱集、悦动社等19大主题“集社”空间。
              </div>
              <div>
                项目绿化率为35%，采用立体景观设计，内外互通、上下横纵相连，以老上海11路环形电车元素为人文记忆，串联时光环道、童叟森林公园、空中花园、下沉庭院、屋顶聚场等景观空间，打造“城市花园里的美学家”。
              </div>
            </div>
          </div>
          <div class="img">
            <img
              loading="lazy"
              src="~/assets/images/xinfuxinyue/lianyangxinfu/5.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="bottom_top_mobiles">
          <div class="back_color">
            <!-- <img loading="lazy" src="~/assets/images/xinfuxinyue/lianyangxinfu/6.png" alt=""> -->
            <div class="content">
              <div class="content_content">
                联洋信福康养社区（昆仑邸）总建筑面积4.68万方，1号楼为养护机构，规划244张床位，设置有门诊（包括康复、理疗中心）、内设医务室等专业化医疗服务配套设施。3、5、6号楼为康养公寓，规划281套自理公寓，2号楼为社区公共配套中心。
              </div>
              <div class="content_content">
                项目整体配套面积超5000平米，设有中信书店、昆仑食坊、香愈社、翰墨社、品茗社、对弈社、欢唱集、悦动社等19大主题“集社”空间。
              </div>
              <div class="content_content">
                项目绿化率为35%，采用立体景观设计，内外互通、上下横纵相连，以老上海11路环形电车元素为人文记忆，串联时光环道、童叟森林公园、空中花园、下沉庭院、屋顶聚场等景观空间，打造“城市花园里的美学家”。
              </div>
            </div>
          </div>
          <div class="img">
            <img
              loading="lazy"
              src="~/assets/images/xinfuxinyue/lianyangxinfu/5.jpg"
              @click="
                handleImageClickSingle(
                  require('~/assets/images/xinfuxinyue/lianyangxinfu/5.png')
                )
              "
              alt=""
            />
          </div>
        </div>
        <div class="color"></div>
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
                <img loading="lazy" :src="item.img" alt="" class="" />
                <div class="left_title">{{ item.title }}</div>
                <div class="title_underscores">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div class="list_right">
              <img
                loading="lazy"
                :src="item.content_img"
                alt=""
                class="quotation"
              />
              <div class="content">{{ item.content }}</div>
            </div>
          </div>
          <div
            class="lists_mobiles"
            :class="{
              lists1: index == 0,
              lists2: index == 1,
              lists3: index == 2,
            }"
          >
            <div class="list_left">
              <img loading="lazy" :src="item.img" alt="" class="" />
              <div class="left_title">{{ item.title }}</div>
            </div>
            <div class="list_right">
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
            src="../../../assets/images/xinfuxinyue/lianyangxinfu/banner_bg.png"
            alt=""
          />
          <div class="contents">
            <div class="title_content">
              <div class="content">
                联洋信福康养社区（昆仑邸）除了内环内稀缺的养老资源之外叠加了高品质养老配套及医养服务，开创性提出“5Uni融合”服务理念，内外软硬件全面升级，给出了城芯高品质养老最优解决方案。
              </div>
              <div class="content">
                洞察长者自理护理痛点和需求，项目依托内设+外部优质医疗资源，面向“独立生活、协助生活、介助介护、认知障碍”4大阶段、涵盖“社区、餐饮、活动、管家、医疗、家政”6大模块服务清单，实现医、康、养、护全方位照料。
              </div>
            </div>
          </div>
          <div class="go_video">
            <div>点击视频，走进联洋信福</div>
            <div class="go_icon">→</div>
          </div>
          <div class="video" id="lianyangxinfuVideo" @click="toggleVideo()">
            <video
              :src="$config.videoUrl + '/lianyangxinfu_video.mp4'"
              controlslist="nodownload"
              :poster="
                require('../../../assets/images/xinfuxinyue/lianyangxinfu/banners.png')
              "
              loop
              :controls="showControls"
              id="myVideos"
            >
              Your browser does not support the video tag.
            </video>
            <div class="play_button" id="playButtons">
              <a-icon type="play-circle" />
            </div>
          </div>
          <div id="crosss" class="crosss" @click="handleImageClickss()">×</div>
        </div>
        <div class="bottom_top_mobile">
          <div class="contents">
            <div class="content-box">
              <div class="content-top">
                联洋信福康养社区（昆仑邸）除了内环内稀缺的养老资源之外叠加了高品质养老配套及医养服务，开创性提出“5Uni融合”服务理念，内外软硬件全面升级，给出了城芯高品质养老最优解决方案。
              </div>

              <div class="content-top">
                洞察长者自理护理痛点和需求，项目依托内设+外部优质医疗资源，面向“独立生活、协助生活、介助介护、认知障碍”4大阶段、涵盖“社区、餐饮、活动、管家、医疗、家政”6大模块服务清单，实现医、康、养、护全方位照料。
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_tops_mobiles_video">
          <div
            class="video"
            id="lianyangxinfuVideo"
            @click="toggleMobileVideo()"
          >
            <video
              :src="$config.videoUrl + '/lianyangxinfu_video.mp4'"
              controlslist="nodownload"
              :poster="
                require('../../../assets/images/xinfuxinyue/lianyangxinfu/banners.png')
              "
              loop
              :controls="showControls"
              id="myVideos_mobile"
            >
              Your browser does not support the video tag.
            </video>
            <div
              class="play_button"
              id="playButtons_mobile"
              @click="toggleMobileVideo()"
            >
              <a-icon type="play-circle" />
            </div>
          </div>
        </div>
        <div class="img_bottoms"></div>
        <div class="list_title">5Uni融合服务体系</div>
        <!-- 他们图片问题，单独改了样式the_first -->
        <div class="the_first list1s">
          <div class="list1">
            <div class="left">
              <!-- <img loading="lazy" class="img1" src="../../../assets/images/xinlantiandi/1/1s.png" alt=""> -->
              <div class="img_title">
                <div class="img">
                  <img :src="serviceHighlightsImg[0]" alt="" />
                </div>
                <div class="title_box">Uni-社区与板块融合</div>
                <div class="title_underscore">
                  <div></div>
                  <div></div>
                </div>
                <div class="title_contents">内环内 联洋上 尽享所有</div>
              </div>
              <div class="img_titles">
                <div class="img_title_box">
                  <div class="img">
                    <img :src="serviceHighlightsImg[0]" alt="" />
                  </div>
                  <div class="title_box">Uni-社区与板块融合</div>
                </div>
                <div class="title_contents">内环内 联洋上 尽享所有</div>
              </div>
              <div class="img_titless">
                <div class="img">
                  <img :src="serviceHighlightsImg[0]" alt="" />
                </div>
                <div class="title_subtitle">
                  <div class="title_box">Uni-社区与板块融合</div>
                  <div class="title_contents">内环内 联洋上 尽享所有</div>
                </div>
              </div>
              <div class="content">
                <div>
                  打开社区面向城市，社区与板块互为配套，外享联洋优质资源，内拥开放配套，同时还将开通社区融合专线，串联周边生活、医疗、文旅等资源，长者坐专线即可享受周边“吃喝玩乐游学医”。
                </div>
              </div>
            </div>
            <div class="right">
              <!-- <img loading="lazy" :src="serviceHighlightsBigImg[0]"
                @click="handleImageClickSingle(serviceHighlightsBigImg[0])" alt="" /> -->
              <a-carousel
                autoplay
                :dots="false"
                :autoplaySpeed="2000"
                trigger="click"
              >
                <div>
                  <img
                    loading="lazy"
                    :src="serviceHighlightsBigImg[0]"
                    @click.prevent="
                      handleImageClickSingle(serviceHighlightsBigImg[0])
                    "
                    alt=""
                  />
                </div>
                <div>
                  <img
                    loading="lazy"
                    :src="serviceHighlightsBigImg[5]"
                    @click.prevent="
                      handleImageClickSingle(serviceHighlightsBigImg[5])
                    "
                    alt=""
                  />
                </div>
              </a-carousel>
            </div>
          </div>
        </div>
        <div class="list2s">
          <div class="list1">
            <div class="left">
              <img
                loading="lazy"
                :src="serviceHighlightsBigImg[1]"
                @click="handleImageClickSingle(serviceHighlightsBigImg[1])"
                alt=""
              />
            </div>
            <div class="right">
              <!-- <img loading="lazy" class="img1" src="../../../assets/images/xinlantiandi/1/2.png" alt=""> -->
              <div class="img_title" :class="{ 'mobile_style ': mobile }">
                <div class="img">
                  <img :src="serviceHighlightsImg[1]" alt="" />
                </div>
                <div class="title_box">Uni-建筑与景观融合</div>
                <div class="title_underscore">
                  <div></div>
                  <div></div>
                </div>
                <div class="title_contents">垂直立体景观</div>
              </div>
              <div class="img_titles">
                <div class="title_contents">垂直立体景观</div>
                <div class="img_title_box">
                  <div class="title_box">Uni-建筑与景观融合</div>
                  <div class="img">
                    <img :src="serviceHighlightsImg[1]" alt="" />
                  </div>
                </div>
              </div>
              <div class="img_titless">
                <div class="title_subtitle">
                  <div class="title_box">Uni-建筑与景观融合</div>
                  <div class="title_contents">垂直立体景观</div>
                </div>
                <div class="img">
                  <img :src="serviceHighlightsImg[1]" alt="" />
                </div>
              </div>
              <div class="content">
                <div>
                  整个社区通过内外景观互通、上下垂直花园、地面11路时光环道，打造垂直立体花园，让长者住进花园里。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list1s">
          <div class="list1">
            <div class="left">
              <!-- <img loading="lazy" class="img1" src="../../../assets/images/xinlantiandi/1/3.png" alt=""> -->
              <div class="img_title">
                <div class="img">
                  <img :src="serviceHighlightsImg[2]" alt="" />
                </div>
                <div class="title_box">Uni-空间与场景融合</div>
                <div class="title_underscore">
                  <div></div>
                  <div></div>
                </div>
                <div class="title_contents">19大主题“集社”空间</div>
              </div>
              <div class="img_titles">
                <div class="img_title_box">
                  <div class="img">
                    <img :src="serviceHighlightsImg[2]" alt="" />
                  </div>
                  <div class="title_box">Uni-空间与场景融合</div>
                </div>
                <div class="title_contents">19大主题“集社”空间</div>
              </div>
              <div class="img_titless">
                <div class="img">
                  <img :src="serviceHighlightsImg[2]" alt="" />
                </div>
                <div class="title_subtitle">
                  <div class="title_box">Uni-空间与场景融合</div>
                  <div class="title_contents">19大主题“集社”空间</div>
                </div>
              </div>
              <div class="content">
                <div>
                  包括中信书店、昆仑食坊、瑜悦社、聚弈社等空间，为长者定制乐器、舞蹈、手工、书法、绘画等活动。
                </div>
              </div>
            </div>
            <div class="right">
              <img
                loading="lazy"
                :src="serviceHighlightsBigImg[2]"
                @click="handleImageClickSingle(serviceHighlightsBigImg[2])"
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
                :src="serviceHighlightsBigImg[3]"
                @click="handleImageClickSingle(serviceHighlightsBigImg[3])"
                alt=""
              />
            </div>
            <div class="right">
              <!-- <img loading="lazy" class="img1" src="../../../assets/images/xinlantiandi/1/4.png" alt=""> -->
              <div class="img_title" :class="{ 'mobile_style ': mobile }">
                <div class="img">
                  <img :src="serviceHighlightsImg[3]" alt="" />
                </div>
                <div class="title_box">Uni-医养与服务融合</div>
                <div class="title_underscore">
                  <div></div>
                  <div></div>
                </div>
                <div class="title_contents">场景切换一站式保障</div>
              </div>
              <div class="img_titles">
                <div class="title_contents">场景切换一站式保障</div>
                <div class="img_title_box">
                  <div class="title_box">Uni-医养与服务融合</div>
                  <div class="img">
                    <img :src="serviceHighlightsImg[3]" alt="" />
                  </div>
                </div>
              </div>
              <div class="img_titless">
                <div class="title_subtitle">
                  <div class="title_box">Uni-医养与服务融合</div>
                  <div class="title_contents">场景切换一站式保障</div>
                </div>
                <div class="img">
                  <img :src="serviceHighlightsImg[3]" alt="" />
                </div>
              </div>
              <div class="content">
                <div>
                  基于长者身体状态制定个性化照护、康复方案，涵盖4大阶段6大模块，从自理到护理一站式照料，尽享全周期健康服务。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list1s">
          <div class="list1">
            <div class="left">
              <!-- <img loading="lazy" class="img1" src="../../../assets/images/xinlantiandi/1/5.png" alt=""> -->
              <div class="img_title">
                <div class="img">
                  <img :src="serviceHighlightsImg[4]" alt="" />
                </div>
                <div class="title_box">Uni-功能与细节融合</div>
                <div class="title_underscore">
                  <div></div>
                  <div></div>
                </div>
                <div class="title_contents">安心适老化细节</div>
              </div>
              <div class="img_titles">
                <div class="img_title_box">
                  <div class="img">
                    <img :src="serviceHighlightsImg[4]" alt="" />
                  </div>
                  <div class="title_box">Uni-功能与细节融合</div>
                </div>
                <div class="title_contents">安心适老化细节</div>
              </div>
              <div class="img_titless">
                <div class="img">
                  <img :src="serviceHighlightsImg[4]" alt="" />
                </div>
                <div class="title_subtitle">
                  <div class="title_box">Uni-功能与细节融合</div>
                  <div class="title_contents">安心适老化细节</div>
                </div>
              </div>
              <div class="content">
                <div>
                  全南户型设计，南北通风，南向空间极致利用，更将超30+项适老化细节融入户型空间，让长者生活的每一刻都被温暖守护。
                </div>
              </div>
            </div>
            <div class="right">
              <img
                loading="lazy"
                :src="serviceHighlightsBigImg[4]"
                @click="handleImageClickSingle(serviceHighlightsBigImg[4])"
                alt=""
              />
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
              建筑实景
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(1)"
              :class="{ active: changeImgReview === 1 }"
            >
              社区环境
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(2)"
              :class="{ active: changeImgReview === 2 }"
            >
              功能空间
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(3)"
              :class="{ active: changeImgReview === 3 }"
            >
              康养公寓
            </div>
            <div
              class="button_img"
              @click="changeImgReviews(4)"
              :class="{ active: changeImgReview === 4 }"
            >
              养护机构
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
  name: "lianyangxinfu",
  head: {
    title: "联洋信福",
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
        require("~/assets/images/xinfuxinyue/lianyangxinfu/3.jpg"),
        require("~/assets/images/xinfuxinyue/lianyangxinfu/4.jpg"),
        require("~/assets/images/xinfuxinyue/lianyangxinfu/2.jpg"),
      ],
      // 社区设施
      bottom1: {
        0: {
          img: require("../../../assets/images/xinfuxinyue/lianyangxinfu/img1.png"),
          title: "中信书店",
          content_img: require("../../../assets/images/xinfuxinyue/lianyangxinfu/content_img1.png"),
          content:
            "  2#1F为中信书店，依托中信出版社领先的文化资源，打造约500㎡涵盖【书店+咖啡店+主题讲堂+文创展览+社群活动】的集合空间，融合人文社科、商业财经、社区党建等运营场景专区。",
          img_list: [
            {
              img: require("../../../assets/images/xinfuxinyue/lianyangxinfu/23.jpg"),
              title: "中信书店",
            },
            {
              img: require("../../../assets/images/xinfuxinyue/lianyangxinfu/22.jpg"),
              title: "书店图片",
            },
          ],
        },
        1: {
          img: require("../../../assets/images/xinfuxinyue/lianyangxinfu/img2.png"),
          title: "昆仑食坊",
          content_img: require("../../../assets/images/xinfuxinyue/lianyangxinfu/content_img2.png"),
          content:
            "  2#、6#-1F设置昆仑食坊，星级酒店名厨主理，选择多样、形式灵活，季节时令，无国界菜肴，7:00-21:00全时段膳食供应，正餐时间外供应各式面点/中西简餐，可定制家庭包厢家宴，把更多时间留给亲友陪伴。",
          img_list: [
            {
              img: require("../../../assets/images/xinfuxinyue/lianyangxinfu/7.jpg"),
              title: "昆仑食坊大厅",
            },
            {
              img: require("../../../assets/images/xinfuxinyue/lianyangxinfu/8.jpg"),
              title: "昆仑食坊包厢",
            },
          ],
        },
        2: {
          img: require("../../../assets/images/xinfuxinyue/lianyangxinfu/img3.png"),
          title: "“集社”空间",
          content_img: require("../../../assets/images/xinfuxinyue/lianyangxinfu/content_img1.png"),
          content:
            "  2#、6#-1F 、6# 1F更打造瑜悦社、翰墨社、香愈社、造物社、品茗社、悦活社等空间，定期举办不同主题活动，愉悦长者身心。",
          img_list: [
            {
              img: require("../../../assets/images/xinfuxinyue/lianyangxinfu/9.jpg"),
              title: "翰墨社",
            },
            {
              img: require("../../../assets/images/xinfuxinyue/lianyangxinfu/10.jpg"),
              title: "瑜悦社",
            },
          ],
        },
      },
      //控件属性
      showControls: false,
      // 服务亮点要放大的图片
      serviceHighlightsBigImg: [
        require("~/assets/images/xinfuxinyue/lianyangxinfu/11.jpg"),
        require("~/assets/images/xinfuxinyue/lianyangxinfu/12.png"),
        require("~/assets/images/xinfuxinyue/lianyangxinfu/23.jpg"),
        require("~/assets/images/xinfuxinyue/lianyangxinfu/16.jpg"),
        require("~/assets/images/xinfuxinyue/lianyangxinfu/21.jpg"),
        require("~/assets/images/xinfuxinyue/lianyangxinfu/lunbo.jpg"), //第一个和这个图片轮播
      ],
      // 服务亮点左右上角小图片
      serviceHighlightsImg: [
        require("~/assets/images/xinfuxinyue/lianyangxinfu/img1.png"),
        require("~/assets/images/xinfuxinyue/lianyangxinfu/img2.png"),
        require("~/assets/images/xinfuxinyue/lianyangxinfu/img3.png"),
        require("~/assets/images/xinfuxinyue/lianyangxinfu/img4.png"),
        require("~/assets/images/xinfuxinyue/lianyangxinfu/img5.png"),
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
        pid: 3,
      }
    );
    // this.bottom3 = response.data.data
    // console.log("bottom3", this.bottom3)
    // this.bottom3s = this.bottom3.slice(0, 1)[0].media_details
    // console.log("bottom3s", this.bottom3s)
    // this.imgIndex = this.bottom3s.length

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
    //鼠标进入视频
    buttonControl() {
      const video = document.getElementById("myVideos");
      const playButton = document.getElementById("playButtons");
      if (video.paused) {
        playButton.style.display = "block";
      } else {
        playButton.style.display = "none";
      }
    },
    // 鼠标移出视频
    buttonControls() {
      const playButton = document.getElementById("playButtons");
      playButton.style.display = "none";
    },
    // 点击视频的时候
    toggleVideo() {
      if (this.showControls) {
        return;
      } else {
        const video = document.getElementById("myVideos");
        const playButton = document.getElementById("playButtons");
        this.showImg = false;
        playButton.style.display = "none";
        // 显示控件
        this.showControls = true;

        const checkImg = document.getElementById("lianyangxinfuVideo");
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
        setTimeout(() => {
          video.play();
        }, 100);
      }
    },
    // 移动端点击视频
    toggleMobileVideo() {
      const video = document.getElementById("myVideos_mobile");
      const playButton = document.getElementById("playButtons_mobile");
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
    },
    // 视频叉号
    handleImageClickss() {
      const checkImg = document.getElementById("lianyangxinfuVideo");
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
    // 切换模块
    changeReviews(index) {
      // this.changeReview = index
      this.changeReview = index;
      if (index == 0) {
        this.showImg = true;
      } else {
        this.showImg = true;
        this.showControls = false;
      }
    },

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
    // 云参观点击图片放大
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
      console.log("img", img);
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

  video {
    vertical-align: middle;
  }

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
      background-color: rgba(0, 0, 0, 0.3);
    }

    img {
      width: 100%;
      max-height: calc(100vh - 190px);
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
          width: fit-content;
          font-size: 50px;
          font-weight: 600;
          position: relative;

          &::after {
            display: block;
            content: "";
            left: 0;
            right: 0;
            bottom: 0;
            height: 8px;
            width: fit-content;
            background-color: rgb(186, 0, 14);
            width: 100%;
            position: absolute;
            bottom: 10px;
            z-index: -1;
          }
        }

        .borders {
          height: 12px;
          width: 920px;
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
        margin-right: 10px;

        img {
          width: 50px;
          margin: 0 auto;
          height: 50px;
        }

        div {
          font-size: 16px;
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

        img {
          width: 50%;
          height: 100%;
          object-fit: cover;
        }

        .back_color {
          height: 100%;
          width: 50%;
          position: absolute;
          top: 0;
          left: 0;

          // background-color: rgb(187, 2, 16);
          img {
            width: 50%;
            height: 100%;
            object-fit: cover;
          }
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

        .img {
          position: absolute;
          left: 50%;
          width: 50%;
          height: 100%;
          top: 0;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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

      .color {
        width: 100%;
        height: 8px;
        background-color: #e47f24;
      }

      .bottom_top_mobiles {
        display: none;
        font-size: 16px;
        line-height: 22px;

        .back_color {
          // background-color: #bb0210;
          background-image: url("~/assets/images/xinfuxinyue/lianyangxinfu/6.png");

          padding: 20px;

          .content .content_content {
            color: white;
            text-indent: 2em;
          }
        }

        .img {
          width: 100%;

          img {
            width: 100%;
            height: 100%;
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
          height: 200px;
          margin-bottom: 50px;

          .list_left {
            width: 52%;
            position: absolute;
            left: 0;
            bottom: 0;

            img {
              width: 110px;
              height: auto;
            }

            .left_title {
              font-size: 40px;
            }

            .title_underscores {
              div {
                width: 160px;
                height: 2px;
                background-color: rgb(233, 233, 233);
                margin: 3px;
              }
            }
          }

          .list_right {
            width: 48%;
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
              line-height: 26px;
              text-indent: 2em;
            }
          }
        }

        .lists_mobiles {
          padding: 0 10px;
          display: none;
          width: 100%;
          // width: 1200px;
          margin: 0 auto;
          // height: 200px;
          // margin-bottom: 50px;

          .list_left {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;

            img {
              width: 50px;
              height: auto;
            }

            .left_title {
              font-size: 25px;
            }
          }

          .list_right {
            img {
              width: 55px;
              // margin: 30px 0 20px 0;
            }

            .content {
              font-size: 16px;
              line-height: 26px;
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
            width: 48%;

            img {
              width: 100%;
              height: 385px;
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

        // img {
        //   width: 50%;
        //   height: 100%;
        //   object-fit: cover;
        // }

        // .contents {
        //   width: 100%;
        //   display: flex;
        //   justify-content: center;
        //   position: absolute;
        //   top: 50%;
        //   left: 50%;

        //   transform: translate(-50%, -50%);

        //   .title_content {
        //     width: 1200px;
        //     color: #fff;

        //     .content {
        //       width: 48%;
        //       line-height: 30px;
        //       font-size: 16px;
        //       text-indent: 2rem;
        //     }
        //   }
        // }

        // .go_video {
        //   position: absolute;
        //   right: 52%;
        //   bottom: 10px;
        //   color: #fff;
        //   font-size: 16px;
        //   .go_icon {
        //     display: flex;
        //     justify-content: flex-end;
        //   }
        // }

        // .img {
        //   position: absolute;
        //   left: 50%;
        //   width: 50%;
        //   height: 100%;
        //   top: 0;

        //   img {
        //     width: 100%;
        //     height: 100%;
        //     object-fit: cover;
        //   }
        // }
        #crosss {
          position: fixed;
          top: 120px;
          right: calc(17.5vw + 5px);
          font-size: 30px;
          color: #fff;
          font-weight: 900;
          display: none;
          z-index: 92;
          cursor: pointer;
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

      // 移动端样式
      .bottom_top_mobile {
        display: none;

        .contents {
          // background-image: ;
          background-image: url("~/assets/images/xinfuxinyue/lianyangxinfu/banner_bg.png");

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

      .img_bottoms {
        width: 100%;
        height: 8px;
        background-color: rgb(16, 88, 59);
      }

      .list_title {
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        background-color: #ffffff;
        padding: 40px 0 0 0;
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
              img {
                height: 70px;
                width: 70px;
                // margin: 0 5px 18px 0;
              }

              .title_underscore {
                div {
                  width: 180px;
                  height: 2px;
                  background-color: rgb(233, 233, 233);
                  margin: 3px;
                }
              }

              .title_box {
                font-size: 30px;
                font-weight: 700;
              }

              .title_contents {
                font-size: 25px;
              }
            }

            .img_titles {
              display: none;

              .title_contents {
                font-size: 20px;
              }
            }

            .img_titless {
              display: none;
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
                text-indent: 2rem;
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

      .the_first {
        height: auto;
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
          // height: 370px;

          position: relative;

          .left {
            width: 38%;

            .img_title {
              img {
                height: 70px;
                width: 70px;
                // margin: 0 5px 18px 0;
              }

              .title_underscore {
                div {
                  width: 180px;
                  height: 2px;
                  background-color: rgb(233, 233, 233);
                  margin: 3px;
                }
              }

              .title_box {
                font-size: 30px;
                font-weight: 700;
              }

              .title_contents {
                font-size: 25px;
              }
            }

            .img_titles {
              display: none;

              .title_contents {
                font-size: 20px;
              }
            }

            .img_titless {
              display: none;
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
                text-indent: 2rem;
              }
            }
          }

          .right {
            width: 55%;

            img {
              width: 100%;
              height: 370px;
              display: block;
              object-fit: cover;
            }

            ::v-deep .ant-carousel {
              .slick-list .slick-slide {
                pointer-events: auto;
              }
            }

            // img {
            //   width: 100%;
            //   height: 370px;
            //   object-fit: cover;
            // }

            // .ant-carousel>>>.slick-slide {
            //   text-align: center;
            //   height: 160px;
            //   line-height: 160px;
            //   background: #364d79;
            //   overflow: hidden;
            // }

            // .ant-carousel>>>.slick-slide h3 {
            //   color: #fff;
            // }
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
              display: flex;
              flex-direction: column;
              /* 垂直排列 */
              align-items: flex-end;
              /* 靠右对齐 */

              &.mobile_style {
                justify-content: space-between;
              }

              .img {
                img {
                  height: 70px;
                  width: 70px;
                }
              }

              .title_box {
                font-weight: 700;
                font-size: 30px;
              }

              .title_underscore {
                div {
                  width: 180px;
                  height: 2px;
                  background-color: rgb(233, 233, 233);
                  margin: 3px;
                }
              }

              .title_contents {
                font-size: 25px;
                display: flex;
                justify-content: flex-end;
              }
            }

            .img_titles {
              display: none;

              .title_contents {
                font-size: 20px;
              }
            }

            .img_titless {
              display: none;
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
                text-indent: 2rem;
              }
            }
          }
        }
      }
    }

    .bottom3 {
      width: 100%;
      // background-color: rgb(42, 42, 42);
      background-image: url("../../../assets/images/xinfuxinyue/lianyangxinfu/6.png");
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
            background-color: #e47f24;
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
                // background-color: rgba(72, 72, 72, 0.1);
                background-color: rgba(228, 127, 36, 1);
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
                // background-color: rgba(72, 72, 72, 0.1);
                background-color: rgba(228, 127, 36, 1);
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
                // background-color: rgba(72, 72, 72, 1);
                background-color: rgba(228, 127, 36, 0.3);
              }

              .home_rights:active {
                // background-color: rgba(72, 72, 72, 1);
                background-color: rgba(228, 127, 36, 0.3);
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
          // background-color: rgba(72, 72, 72, 0.5);
          background-color: rgba(228, 127, 36, 1);

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
          // background-color: rgba(72, 72, 72, 0.5);
          background-color: rgba(228, 127, 36, 1);
          transition: 0.3s;
          z-index: 5;
          cursor: pointer;

          .news_icon {
            font-size: 32px;
            color: #fff;
          }
        }

        .home_left:active {
          // background-color: rgba(72, 72, 72, 1);
          background-color: rgba(228, 127, 36, 0.3);
        }

        .home_right:active {
          background-color: rgba(228, 127, 36, 0.3);
          // background-color: rgba(72, 72, 72, 1);
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

            &::after {
              bottom: 6px;
            }
          }

          .borders {
            height: 10px;
            width: 735px;
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
        justify-content: space-around;

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
          // padding: 0 10px;

          .lists {
            width: 100%;

            .list_left {
              padding-left: 10px;
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
                height: 31vw;
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

        .list_title {
          font-size: 35px;
        }

        .list1s {
          height: auto;

          .list1 {
            width: 100%;
            padding: 0 10px;

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

        .the_first {
          height: auto;

          .list1 {
            width: 100%;
            padding: 0 10px;

            .left {
              width: 40%;
              height: auto;

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
                height: 30vw;
              }
            }
          }
        }

        .list2s {
          height: auto;

          .list1 {
            width: 100%;
            padding: 0 10px;

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
      }
    }
  }
}

// 头部压缩的距离
@media screen and (max-width: 1090px) {
  .home {
    .bottoms {
      .bottom1 {
        .bottom_top {
          height: 33vw;

          // .img {
          //   img {
          //     object-fit: fill;
          //   }
          // }
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
          height: 36vw;

          .img {
            // img {
            //   object-fit: fill;
            // }
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
            width: 643px;
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
          // display: block;
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
          height: 50vw;
        }

        .list {
          height: 650px;

          .lists {
            height: 210px;

            .list_left {
              .left_title {
                font-size: 35px;
              }

              .title_underscores {
                div {
                  width: 140px;
                }
              }
            }
          }
        }
      }

      .bottom2 {
        .bottom_top {
          height: 35vw;
        }

        .list_title {
          font-size: 30px;
        }

        .list1s {
          padding: 70px 0;

          .list1 {
            .left {
              width: 41%;

              .img_title {
                .title_box {
                  font-size: 26px;
                }

                .title_contents {
                  font-size: 22px;
                }
              }

              .content {
                width: 41%;

                .img2 {
                  display: none;
                }
              }
            }
          }
        }

        .the_first {
          padding: 70px 0;

          .list1 {
            .left {
              width: 41%;

              .img_title {
                .title_box {
                  font-size: 26px;
                }

                .title_contents {
                  font-size: 22px;
                }
              }

              .content {
                width: 41%;

                .img2 {
                  display: none;
                }
              }
            }
          }
        }

        .list2s {
          padding: 70px 0;

          .list1 {
            .right {
              width: 41%;

              .img_title {
                .title_box {
                  font-size: 26px;
                }

                .title_contents {
                  font-size: 22px;
                }
              }

              .content {
                width: 41%;

                .img2 {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
}

// 服务亮点list第一个图片问题
@media screen and (max-width: 878px) {
  .home {
    .bottoms {
      .bottom2 {
        .the_first {
          padding: 70px 0;

          .list1 {
            height: 290px;

            .left {
              width: 41%;

              .img_title {
                .title_box {
                  font-size: 26px;
                }

                .title_contents {
                  font-size: 22px;
                }
              }

              .content {
                width: 41%;

                .img2 {
                  display: none;
                }
              }
            }

            .right {
              display: flex;
              flex-direction: column;
              /* 垂直方向排列 */
              justify-content: flex-end;
              /* 内容从底部开始排列 */
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
    .top {
      .banner {
        .banners {
          margin-left: 70px;

          .title {
            font-size: 30px;
          }

          .subTitle {
            font-size: 30px;

            &::after {
              bottom: 4px;
            }
          }

          .borders {
            height: 6px;
            width: 550px;
            margin-top: -13px;
          }

          .content {
            font-size: 22px;
          }
        }
      }
    }

    .singLand {
      .content {
        .contents {
          .fix_content {
            width: 100vw;
            width: calc(100vw - 35px);
            margin-left: -43%;
          }
        }
      }
    }

    .bottoms {
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
    // .top {
    //   .two_dimensional .two_dimensional1 img{ width:44px; height: 44px;}
    // }

    .singLand {
      display: none;
    }

    .singLands {
      display: block;
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
        .list {
          padding: 0 10px;
          // height: 600px;
          height: auto;

          .lists {
            display: none;

            .list_left {
              width: 35%;

              img {
                display: none;
              }

              .left_title {
                font-size: 30px;
              }
            }

            .list_right {
              width: 65%;

              img {
                display: none;
              }
            }
          }

          .lists_mobiles {
            display: block;
          }

          .imgs {
            padding-bottom: 20px;
          }
        }

        .bottom_top {
          display: none;
        }

        .bottom_top_mobiles {
          display: block;
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
        .bottom_tops_mobiles_video {
          display: block;
        }

        .list1s {
          padding: 50px 0;

          .list1 {
            .left {
              .content {
                div {
                  line-height: 22px;
                }
              }
            }
          }
        }

        .list2s {
          padding: 50px 0;

          .list1 {
            .left {
              .content {
                div {
                  line-height: 22px;
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
          display: block;
          height: calc(31vw + 20px);
        }
      }
    }
  }
}

// 服务亮点图文
@media screen and (max-width: 740px) {
  .home {
    .bottoms {
      .bottom2 {
        .list_title {
          font-size: 26px;
        }

        .list1s {
          padding: 40px 10px;

          .list1 {
            position: static;
            display: block;

            .left {
              width: 100%;

              .img_title {
                display: none;

                .title_underscore {
                  display: none;
                }
              }

              .img_titles {
                // display: block;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .img_title_box {
                  display: flex;
                  align-items: center;

                  img {
                    height: 60px;
                  }

                  .title_box {
                    font-size: 22px;
                    font-weight: 700;
                  }
                }
              }

              .img1 {
                position: static;
              }

              .content {
                width: 100%;
                position: static;
                padding: 15px 0;
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

        .the_first {
          padding: 40px 10px;

          .list1 {
            position: static;
            display: block;
            height: auto;

            .left {
              width: 100%;

              .img_title {
                display: none;

                .title_underscore {
                  display: none;
                }
              }

              .img_titles {
                // display: block;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .img_title_box {
                  display: flex;
                  align-items: center;

                  img {
                    height: 60px;
                  }

                  .title_box {
                    font-size: 22px;
                    font-weight: 700;
                  }
                }
              }

              .img1 {
                position: static;
              }

              .content {
                width: 100%;
                position: static;
                padding: 15px 0;
              }
            }

            .right {
              width: 100%;

              img {
                // height: 60vw;
                width: 100%;
                height: auto;
              }
            }
          }
        }

        .list2s {
          padding: 40px 10px;

          .list1 {
            // position: static;
            flex-direction: column-reverse;
            align-items: center;

            .left {
              width: 100%;

              img {
                height: 60vw;
              }
            }

            .right {
              width: 100%;

              .img_title {
                display: none;

                .title_underscore {
                  display: none;
                }
              }

              .img_titles {
                // display: block;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .img_title_box {
                  display: flex;
                  align-items: center;

                  img {
                    height: 60px;
                  }

                  .title_box {
                    font-size: 22px;
                    font-weight: 700;
                  }
                }
              }

              // .img1 {}

              .content {
                width: 100%;
                position: static;
                padding: 15px 0;
              }
            }
          }
        }
      }
    }
  }
}

// 标题特殊设置
@media screen and (max-width: 640px) {
  .home {
    .top .banner .banners {
      margin-left: 20px;

      .subTitle {
        font-size: 28px;

        &::after {
          bottom: 2px;
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
            bottom: 0;
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

    .images {
      .image {
        .img_left {
          .img1 {
            .img_font {
              font-size: 14px;
            }
          }

          .img2 {
            .img {
              .img_font {
                font-size: 14px;
              }
            }
          }
        }

        .img_right {
          .img_font {
            font-size: 14px;
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

      .bottom1 {
        .list {
          height: auto;

          .lists {
            // height: 600px;
            height: auto;
            position: static;
            // display: block;
            padding-top: 40px;

            .list_left {
              width: 100%;
              position: static;
              display: flex;
              justify-content: space-between;
              padding: 0 10px;

              img {
                margin-bottom: 0;
              }

              .lift_title {
                font-size: 30px;
              }
            }

            .list_right {
              position: static;
              width: 100%;
              padding: 0 10px;
            }
          }

          .imgs {
            // padding-bottom: 40px;
            padding-bottom: 15px;
          }
        }
      }
    }
  }
}

// 服务亮点图文
@media screen and (max-width: 550px) {
  .home {
    .bottoms {
      .bottom2 {
        .list1s {
          .list1 {
            .left {
              width: 100%;

              .img_titles {
                display: none;
              }

              .img_titless {
                display: flex;
                align-items: center;
                justify-content: space-between;

                img {
                  height: 50px;
                }

                .title_subtitle {
                  .title_box {
                    font-size: 22px;
                    font-weight: 700;
                  }

                  .title_contents {
                    font-size: 20px;
                    text-align: right;
                  }
                }
              }

              .img1 {
                position: static;
              }
            }

            .right {
              width: 100%;

              img {
                // height: 60vw;
                width: 100%;
                height: auto;
              }
            }
          }
        }

        .list2s {
          padding: 40px 10px;

          .list1 {
            // position: static;
            flex-direction: column-reverse;
            align-items: center;

            .left {
              width: 100%;

              img {
                // height: 60vw;
                width: 100%;
                height: auto;
              }
            }

            .right {
              width: 100%;

              .img_titles {
                display: none;
              }

              .img_titless {
                display: flex;
                align-items: center;
                justify-content: space-between;

                img {
                  height: 50px;
                }

                .title_subtitle {
                  .title_box {
                    font-size: 22px;
                    font-weight: 700;
                  }

                  .title_contents {
                    font-size: 20px;
                  }
                }
              }

              // .img1 {}

              .content {
                width: 100%;
                position: static;
                padding: 15px 0;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 430px) {
  .home {
    .top {
      .banner {
        .banners {
          margin-left: 10px;

          .title {
            font-size: 18px;
          }

          .subTitle {
            font-size: 18px;
            bottom: 0;
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
          margin-left: 2px;
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
