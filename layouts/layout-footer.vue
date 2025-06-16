<template>
  <!-- <client-only> -->
  <div>
    <footer class="layout-footer">
      <div class="main_footer">
        <!-- <div class="top">
          <img loading="lazy" src="../assets/images/logo4.png" alt="">
        </div> -->
        <!-- 网页端容器 -->
        <div class="f-container" v-if="!mobile">
          <!-- 上边部分 -->
          <div class="footer-top">
            <!-- 左边部分 -->
            <div class="left">
              <div class="footer-company">上海中信兴业养老服务发展有限公司</div>
              <div class="contact">
                <div>上海市四川北路859号中信广场2305-2308室</div>
                <div>邮编：200085</div>
                <div>电话：+86 21 36716008-8838</div>
                <div>传真：+85 21 36716008</div>
              </div>
              <!-- 二维码 -->
              <div class="qrCode">
                <img loading="lazy" src="../assets/images/index/qrCode.jpg" alt="" />
              </div>
              <div class="qrcode_title">中信养老公众号</div>
            </div>
            <!-- 右边导航部分 -->
            <div class="right">
              <dl class="menu-item">
                <dt class="title">信澜天地</dt>
                <dd class="title-item">地址：上海市崇明区陈家镇福满路</dd>
                <dd class="title-item">电话：021-3966 8888</dd>
              </dl>
              <dl class="menu-item">
                <div>
                  <dt class="title">上海浦东由由信福养老院</dt>
                  <dd class="title-item">地址：上海市浦东新区下南路1288弄</dd>
                  <dd class="title-item">电话：021-58800208</dd>
                </div>
                <div>
                  <dt class="title">上海浦东联洋信福康养社区（昆仑邸）</dt>
                  <dd class="title-item">
                    地址：上海浦东新区杨高中路1906号
                  </dd>
                  <dd class="title-item">电话：021-68881906</dd>
                </div>
                <div>
                  <dt class="title">杭州信悦88养老院</dt>
                  <dd class="title-item">地址：杭州市上城区延安路88号</dd>
                  <dd class="title-item">电话：0571-86778888</dd>
                </div>
              </dl>
              <dl class="menu-item">
                <div>
                  <dt class="title">信养之家宝山大场养老院</dt>
                  <dd class="title-item">
                    地址：上海市宝山区场中路4098弄8号楼
                  </dd>
                  <dd class="title-item">电话：021-5655 5322</dd>
                </div>
                <div>
                  <dt class="title">信养之家浦东锦绣养老院</dt>
                  <dd class="title-item">
                    地址：上海市浦东新区北艾路1481-1485号
                  </dd>
                  <dd class="title-item">电话：021-58600038</dd>
                </div>
                <div>
                  <dt class="title">信养之家杨浦新江湾养老院</dt>
                  <dd class="title-item">地址：上海市杨浦区世界路203号</dd>
                  <dd class="title-item">电话：021-65501066</dd>
                </div>
                <div>
                  <dt class="title">信养之家爱亲仁护理院</dt>
                  <dd class="title-item">地址：上海市杨浦区辽阳路343号</dd>
                  <dd class="title-item">电话：021-35368886</dd>
                </div>
                <div>
                  <dt class="title">信养之家臻悦护理院</dt>
                  <dd class="title-item">地址：上海市杨浦区周家嘴路3795号</dd>
                  <dd class="title-item">电话：021-6589 1200</dd>
                </div>
              </dl>
              <dl class="menu-item">
                <dt class="title">怡福荟康养小镇</dt>
                <dd class="title-item">地址：上海市奉贤区申杰路58号</dd>
                <dd class="title-item">电话：021-67187000</dd>
              </dl>
            </div>
          </div>
        </div>
        <!-- 移动端容器 -->
        <div class="m-container" v-else>
          <div class="company-info">
            <div class="company-title">上海中信兴业养老服务发展有限公司</div>
            <div class="company-address item-layout">
              <img loading="lazy" src="../assets/images/footer/address.png" alt="" />上海市四川北路859号中信广场2305-2308室
            </div>
            <div class="company-postcode item-layout">
              <img loading="lazy" src="../assets/images/footer/postcode.png" alt="" />邮编：200085
            </div>
            <div class="company-tel item-layout">
              <img loading="lazy" src="../assets/images/footer/tel.png" alt="" />电话：+86 21
              36716008-8838
            </div>
            <div class="company-fax item-layout">
              <img loading="lazy" src="../assets/images/footer/fax.png" alt="" />传真：+85 21
              36716008
            </div>
          </div>
          <!-- <div class="title">上海中信兴业养老服务发展有限公司</div>
          <div class="content">上海市四川北路859号中信广场2305-2308室</div>
          <div class="content">邮编：200085</div>
          <div class="content">电话：+86 21 36716008-8838</div>
          <div class="content">传真：+85 21 36716008</div> -->
          <!-- <div class="title">信澜天地</div>
          <div class="content">地址：上海市崇明区陈家镇福满路</div>
          <div class="content">电话：021-3966 8888</div>
          <div class="title">上海浦东由由信福养老院</div>
          <div class="content">地址：上海市浦东新区下南路1288弄</div>
          <div class="content">电话：021-58800208</div>
          <div class="title">上海浦东洋泾信福养老院</div>
          <div class="content">地址：上海市浦东新区杨高中路洋泾港桥</div>
          <div class="content">电话：预计2024年投运</div>
          <div class="title">杭州信悦88养老院</div>
          <div class="content">地址：杭州市上城区延安路88号</div>
          <div class="content">电话：0571-86778888</div>
          <div class="title">信养之家宝山大场养老院</div>
          <div class="content">地址：上海市宝山区场中路4098弄8号楼</div>
          <div class="content">电话：021-5655 5322</div>
          <div class="title">信养之家浦东锦绣养老院</div>
          <div class="content">地址：上海市浦东新区北艾路1481-1485号</div>
          <div class="content">电话：021-58600038</div>
          <div class="title">信养之家杨浦新江湾养老院</div>
          <div class="content">地址：上海市杨浦区世界路203号</div>
          <div class="content">电话：021-65501066</div>
          <div class="title">信养之家爱亲仁护理院</div>
          <div class="content">地址：上海市杨浦区辽阳路343号</div>
          <div class="content">电话：:021-35368886</div>
          <div class="title">信养之家臻悦护理院</div>
          <div class="content">地址：上海市杨浦区周家嘴路3795号</div>
          <div class="content">电话：021-6589 1200</div> -->
          <div class="menu">
            <div class="menu-item">
              <div class="top-title" @click="unfoldSubItem(0)">
                <div class="item-title">信澜天地</div>
                <div class="icon">
                  <a-icon class="icon" type="right" />
                </div>
              </div>
              <div class="sub-menu">
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/address.png" alt="" />地址：上海市崇明区陈家镇福满路
                </div>
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/tel.png" alt="" />电话：021-3966 8888
                </div>
              </div>
            </div>
            <div class="menu-item">
              <div class="top-title" @click="unfoldSubItem(1)">
                <div class="item-title">上海浦东由由信福养老院</div>
                <div class="icon">
                  <a-icon class="icon" type="right" />
                </div>
              </div>
              <div class="sub-menu">
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/address.png" alt="" />地址：上海市浦东新区下南路1288弄
                </div>
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/tel.png" alt="" />电话：021-58800208
                </div>
              </div>
            </div>
            <div class="menu-item">
              <div class="top-title" @click="unfoldSubItem(2)">
                <div class="item-title">上海浦东联洋信福康养社区（昆仑邸）</div>
                <div class="icon">
                  <a-icon class="icon" type="right" />
                </div>
              </div>
              <div class="sub-menu">
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/address.png" alt="" />地址：上海市浦东新区杨高中路1906号
                </div>
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/tel.png" alt="" />电话：021-68881906
                </div>
              </div>
            </div>
            <div class="menu-item">
              <div class="top-title" @click="unfoldSubItem(3)">
                <div class="item-title">杭州信悦88养老院</div>
                <div class="icon">
                  <a-icon class="icon" type="right" />
                </div>
              </div>
              <div class="sub-menu">
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/address.png" alt="" />地址：杭州市上城区延安路88号
                </div>
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/tel.png" alt="" />电话：0571-86778888
                </div>
              </div>
            </div>
            <div class="menu-item">
              <div class="top-title" @click="unfoldSubItem(4)">
                <div class="item-title">信养之家宝山大场养老院</div>
                <div class="icon">
                  <a-icon class="icon" type="right" />
                </div>
              </div>
              <div class="sub-menu">
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/address.png" alt="" />地址：上海市宝山区场中路4098弄8号楼
                </div>
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/tel.png" alt="" />电话：021-5655 5322
                </div>
              </div>
            </div>
            <div class="menu-item">
              <div class="top-title" @click="unfoldSubItem(5)">
                <div class="item-title">信养之家浦东锦绣养老院</div>
                <div class="icon">
                  <a-icon class="icon" type="right" />
                </div>
              </div>
              <div class="sub-menu">
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/address.png" alt="" />地址：上海市浦东新区北艾路1481-1485号
                </div>
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/tel.png" alt="" />电话：021-58600038
                </div>
              </div>
            </div>
            <div class="menu-item">
              <div class="top-title" @click="unfoldSubItem(6)">
                <div class="item-title">信养之家杨浦新江湾养老院</div>
                <div class="icon">
                  <a-icon class="icon" type="right" />
                </div>
              </div>
              <div class="sub-menu">
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/address.png" alt="" />地址：上海市杨浦区世界路203号
                </div>
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/tel.png" alt="" />电话：021-65501066
                </div>
              </div>
            </div>
            <div class="menu-item">
              <div class="top-title" @click="unfoldSubItem(7)">
                <div class="item-title">信养之家爱亲仁护理院</div>
                <div class="icon">
                  <a-icon class="icon" type="right" />
                </div>
              </div>
              <div class="sub-menu">
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/address.png" alt="" />地址：上海市杨浦区辽阳路343号
                </div>
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/tel.png" alt="" />电话：021-35368886
                </div>
              </div>
            </div>
            <div class="menu-item">
              <div class="top-title" @click="unfoldSubItem(8)">
                <div class="item-title">信养之家臻悦护理院</div>
                <div class="icon">
                  <a-icon class="icon" type="right" />
                </div>
              </div>
              <div class="sub-menu">
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/address.png" alt="" />地址：上海市杨浦区周家嘴路3795号
                </div>
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/tel.png" alt="" />电话：021-6589 1200
                </div>
              </div>
            </div>
            <div class="menu-item">
              <div class="top-title" @click="unfoldSubItem(9)">
                <div class="item-title">怡福荟康养小镇</div>
                <div class="icon">
                  <a-icon class="icon" type="right" />
                </div>
              </div>
              <div class="sub-menu">
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/address.png" alt="" />地址：上海市奉贤区申杰路58号
                </div>
                <div class="sub-menu-item">
                  <img loading="lazy" src="../assets/images/footer/tel.png" alt="" />电话：021-67187000
                </div>
              </div>
            </div>
          </div>
          <div class="qrcode">
            <div class="img">
              <img loading="lazy" src="../assets/images/index/qrCode.jpg" alt="" />
            </div>
            <span class="content">中信养老公众号</span>
          </div>
        </div>
        <!-- 版权部分 -->
        <div class="footer-bottoms" :class="{ 'mobile-style': mobile }">
          <div class="top">
            <div class="item">
              Copyright © 2025 上海中信兴业养老服务发展有限公司
            </div>
            <div class="item">版权所有</div>
          </div>
          <div class="bottom">
            <div class="item">
              <a href="http://beian.miit.gov.cn/" target="_blank" class="beian">沪ICP备2023026992号-1</a>
            </div>
            <div class="item">
              <a href="https://beian.mps.gov.cn/#/query/webSearch?code=31010902103602\" rel="noreferrer" target="_blank"
                class="beian"><img loading="lazy" src="../assets/images/logos.png" alt="" />沪公网安备31010902103602</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <!-- </client-only> -->
</template>

<script>
export default {
  name: "layout-footer",
  data () {
    return {
      // 保存前一个dom对象
      frontEventTarget: null,
    }
  },
  props: ["mobile"],
  mounted () {
    console.log(this.mobile, "this.mobile")
  },
  methods: {
    // 点击展开下面的item
    unfoldSubItem (val) {
      let target = document.querySelectorAll(".menu .menu-item .top-title")[
        val
      ]
      //不相同的两个dom
      if (this.frontEventTarget != target) {
        // 把前一个缩起来
        if (this.frontEventTarget != null) {
          this.frontEventTarget
            .getElementsByClassName("icon")[0]
            .classList.remove("rotate")
          this.frontEventTarget.parentElement
            .getElementsByClassName("sub-menu")[0]
            .classList.remove("slide-down")
        }
        console.log("target111", target)
        target.getElementsByClassName("icon")[0].classList.add("rotate")
        target.parentElement
          .getElementsByClassName("sub-menu")[0]
          .classList.add("slide-down")
      } else {
        // 相同的，用toggle，有就加，没有删
        target.getElementsByClassName("icon")[0].classList.toggle("rotate")
        target.parentElement
          .getElementsByClassName("sub-menu")[0]
          .classList.toggle("slide-down")
      }
      this.frontEventTarget = target
    },
    // 获取年份
    getYear () {
      return new Date().getFullYear()
    },
  },
  watch: {
    $route (res) {
      if (this.frontEventTarget) {
        // 路由跳转时删除rotate，slide-down类
        this.frontEventTarget
          .getElementsByClassName("icon")[0]
          ?.classList.remove("rotate")
        this.frontEventTarget.parentElement
          .getElementsByClassName("sub-menu")[0]
          .classList.toggle("slide-down")
        this.frontEventTarget = null
      }
    },
  },
}
</script>

<style scoped lang="less">
// 底部footer
.layout-footer {
  font-family: "Source Han Serif SC VF";
  background: rgb(237, 237, 237);
  // height: 680px;
  width: 100%;
  box-sizing: border-box;
  border-top: 5px solid #ba000e;
  padding-top: 33px;
  z-index: 999;

  .main_footer {
    width: 1200px;
    // height: 600px;
    margin: 0 auto;

    // .top {
    //   height: 35px;
    //   background-color: yellow;
    //   img {
    //     height: 35px;
    //   }
    // }

    // pc端容器
    .f-container {
      // height: 630px;
      margin: 0 auto;
      // 最大宽度
      max-width: var(--contentWidth);
      // height: 100%;
      clear: both;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      // 除版权所有的一部分呢
      .footer-top {
        max-width: var(--contentWidth);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        // height: 370px;

        // 左边包含logo的一部分呢
        .left {
          // width: 40%;
          width: 25%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          margin-top: 0px;
          font-size: 16px;

          // 给logo设置宽高
          .footer-company {
            height: 38px;
            line-height: 38px;
            font-weight: 600;
            font-family: "Source Han Serif SC VF";
          }

          // 联系方式部分
          .contact {
            margin-top: 6px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            font-size: 12px;
            font-family: "Source Han Serif SC VF";
          }

          .qrCode {
            width: 90px;
            height: 90px;
            background-color: blue;
            margin-top: 20px;

            img {
              width: 90px;
              height: 90px;
            }
          }

          .qrcode_title {
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            font-family: "Source Han Serif SC VF";
          }
        }

        // 右边导航部分
        .right {
          width: 85%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 0px;
          padding-left: 30px;
          text-align: center;

          // background-color: #ba000e;
          // 列表项
          .menu-item {
            text-align: left;

            div {
              margin-bottom: 20px;
            }

            // 标题
            .title {
              font-family: "Source Han Serif SC VF";
              margin-bottom: 5px;
              font-size: 16px;
              height: 38px;
              line-height: 38px;
              font-weight: 600;
              // color: #0739a4;
            }

            // 除标题后的每项
            .title-item {
              font-family: "Source Han Serif SC VF";
              // margin-bottom: 20px;
              font-size: 12px;

              a {
                color: #595f6f;
              }
            }

            dd {
              margin-bottom: 0;
            }
          }
        }
      }
    }

    // 移动端
    .m-container {
      margin: 0 auto;
      height: auto;
      padding: 0 20px;
      font-family: "Source Han Serif SC VF";

      // margin-top: -100px;
      // background-color: red;
      .company-info {
        .company-title {
          font-size: 18px;
          // height: 38px;
          // line-height: 38px;
          padding: 5px 0;
          font-weight: bold;
          margin-bottom: 8px;
        }
      }

      .item-layout {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        font-size: 15px;

        img {
          width: 18px;
          height: 18px;
          margin-right: 6px;
        }
      }

      .menu {
        padding: 10px 0 30px;

        .menu-item {
          user-select: none;

          .top-title {
            display: flex;
            font-size: 16px;
            // line-height: 50px;
            // height: 50px;
            padding: 10px 0;
            justify-content: space-between;
            cursor: pointer;
            border-bottom: 1px solid #d1d1d1;
            align-items: center;
            box-sizing: border-box;

            .item-title {
              font-size: 16px;
              margin: 0;
              font-weight: bold;
            }

            .icon {
              transition: transform 0.5s;

              &.rotate {
                // 绕z轴中心点旋转90度
                transform-origin: center;
                transform: rotateZ(90deg);
              }
            }
          }

          .sub-menu {
            font-size: 15px;
            height: 0;
            overflow: hidden;
            transition: height 0.5s ease-out;

            // color: rgba(0, 0, 0, 0.3);
            &.slide-down {
              height: 70px;
            }

            .sub-menu-item {
              display: flex;
              align-items: center;
              font-size: 15px;
              padding: 0 10px;

              &:first-child {
                padding-top: 10px;
                margin-bottom: 5px;
              }

              &:last-child {
                padding-bottom: 10px;
              }

              img {
                width: 18px;
                height: 18px;
                margin-right: 6px;
              }
            }
          }
        }
      }

      .title {
        margin-top: 20px;
        font-size: 16px;
        height: 38px;
        line-height: 38px;
        font-weight: 600;
        text-align: center;
      }

      .content {
        font-size: 12px;
        color: #595f6f;
        text-align: center;
      }

      .qrcode {
        text-align: center;

        .img {
          img {
            width: 130px;
            height: 130px;
          }
        }

        .content {
          font-size: 16px;
        }
      }
    }

    // 底部样式
    .footer-bottoms {
      margin: 0 auto;
      color: #bbbbbb;
      width: 1200px;
      height: auto;
      text-align: center;
      font-size: 14px;
      background: #ededed;
      padding: 30px 10px 10px 10px;

      .top .item,
      .bottom .item {
        margin: 0 5px;
      }

      .top {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .bottom {
        display: flex;
        align-items: center;
        justify-content: center;

        .beian {
          display: flex;
          align-items: center;

          img {
            height: 14px;
            width: 14px;
          }
        }
      }

      // 移动端样式
      &.mobile-style {

        .top,
        .bottom {
          margin-bottom: 6px;
          flex-direction: column;
        }
      }
    }
  }
}

@media screen and(max-width:1215px) and(min-width:992px) {
  .layout-footer {
    .main_footer {
      width: 100%;

      .f-container {
        .footer-company {
          line-height: normal !important;
        }

        .title {
          line-height: normal !important;
        }
      }

      .footer-bottoms {
        width: 100%;
      }
    }
  }
}

@media screen and(max-width:991px) and(min-width:768px) {
  .layout-footer {
    .main_footer {
      width: 100%;

      .f-container {
        .footer-top {
          .left {
            width: 25%;

            .footer-company {
              height: auto;
              // line-height: 38px;
            }
          }

          .right {
            width: 75%;

            .menu-item {
              .title {
                // height: 76px;
                height: auto;
              }
            }
          }
        }
      }

      .footer-bottoms {
        width: 100%;
      }
    }
  }
}

@media screen and(max-width:767px) {
  .layout-footer {
    height: auto;

    .main_footer {
      height: auto;
      width: 100%;

      // .f-container {}
      .footer-bottoms {
        width: 100%;
      }
    }
  }
}
</style>
