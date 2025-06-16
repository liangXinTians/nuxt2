<template>
  <div class="visit" id="visit" ref="getMores" :class="{
    'index-fixed': flagIndex == 'index' && scrollTop > startTop,
    'index-nofixed': flagIndex == 'index' && scrollTop <= startTop,
  }">
    <div ref="getMoress" :class="{
      fixed: !mobiles && scrollTop > startTop,
      preVisit: mobiles || scrollTop <= startTop,
    }">
      <!-- <div ref="getMore" class="preVisit"> -->
      <div class="top">
        <div class="visitTitle">
          <div class="left">
            <span>预约参观</span>
            <span class="span2">SCHEDULE A VISIT</span>
          </div>
          <div class="right" v-if="unfold">
            <span class="more" @click="getMore()" v-if="unfolds">点击展开</span>
            <span class="more" @click="deleteMore()" v-if="!unfolds">点击收缩</span>
          </div>
        </div>
      </div>
      <div class="bottom" v-if="informationFlag">
        <div class="button">
          <div class="components-input-demo-size-box">
            <!-- 类型 -->
            <div class="components-input-demo-size">
              <span class="first-span">四个阶段</span><a-select v-model="data.reservation_type" default-value="文旅康养"
                class="input-size input-size1" @change="handleReservationTypeChange">
                <a-select-option value="活力"> 1、活力 </a-select-option>
                <a-select-option value="自理"> 2、自理 </a-select-option>
                <a-select-option value="护理"> 3、护理 </a-select-option>
                <a-select-option value="认知症"> 4、认知症 </a-select-option>
              </a-select>
            </div>
            <!-- 城市 -->
            <div class="components-input-demo-size">
              <span>城市</span>
              <a-select v-model="data.reservation_city" default-value="上海" class="input-size input-size2"
                @change="handleReservationTypeChange1">
                <a-select-option value="上海"> 上海 </a-select-option>
                <a-select-option value="杭州" v-if="data.reservation_type === '自理'">
                  杭州
                </a-select-option>
              </a-select>
            </div>
          </div>
          <div class="components-input-demo-size-box">
            <!-- 项目 -->
            <div class="components-input-demo-size xiangmu">
              <span>项目</span>
              <a-select v-model="data.reservation_project" default-value="信澜天地" class="input-size input-size4">
                <a-select-option value="信澜天地" v-if="data.reservation_type === '活力'">
                  信澜天地
                </a-select-option>
                <a-select-option value="信悦88" v-if="
                  data.reservation_type === '自理' &&
                  data.reservation_city === '杭州'
                ">
                  信悦88
                </a-select-option>
                <a-select-option value="由由信福" v-if="
                  data.reservation_type === '自理' &&
                  data.reservation_city === '上海'
                ">
                  由由信福
                </a-select-option>
                <a-select-option value="联洋信福" v-if="
                  data.reservation_type === '自理' &&
                  data.reservation_city === '上海'
                ">
                  联洋信福
                </a-select-option>
                <a-select-option value="怡福荟" v-if="
                  data.reservation_type === '自理' &&
                  data.reservation_city === '上海'
                ">
                  怡福荟
                </a-select-option>
                <a-select-option value="锦绣养老院" v-if="
                  data.reservation_type === '护理' ||
                  data.reservation_type === '认知症'
                ">
                  锦绣养老院
                </a-select-option>
                <a-select-option value="大场养老院" v-if="
                  data.reservation_type === '护理' ||
                  data.reservation_type === '认知症'
                ">
                  大场养老院
                </a-select-option>
                <a-select-option value="新江湾养老院" v-if="
                  data.reservation_type === '护理' ||
                  data.reservation_type === '认知症'
                ">
                  新江湾养老院
                </a-select-option>
                <a-select-option value="臻悦护理院" v-if="data.reservation_type === '护理'">
                  臻悦护理院
                </a-select-option>
                <a-select-option value="爱亲仁护理院" v-if="data.reservation_type === '护理'">
                  爱亲仁护理院
                </a-select-option>
                <a-select-option value="信澜护理院" v-if="data.reservation_type === '护理'">
                  信澜护理院
                </a-select-option>
              </a-select>
            </div>
            <!-- 电话 -->
            <div class="components-input-demo-size">
              <span>电话 </span>
              <a-input v-model="data.reservation_phone" placeholder="" class="input-size input-size6" />
            </div>
          </div>
        </div>
        <div class="Button" @click="postMessages">提交预约</div>
      </div>
      <!-- <div class="bottom">
        <div class="button" style="display: flex; color: #fff;margin-top: 10px;font-size: 18px;">

          <div class="components-input-demo-size">
            <span>类型 </span><a-select v-model="data.reservation_type" default-value="文旅康养"
              class="input-size input-size1" @change="handleReservationTypeChange">
              <a-select-option value="文旅康养">
                文旅康养
              </a-select-option>
              <a-select-option value="都市CCRC">
                都市CCRC
              </a-select-option>
              <a-select-option value="养老院">
                养老院
              </a-select-option>
              <a-select-option value="护理院">
                护理院
              </a-select-option>
            </a-select>
          </div>

          <div class="components-input-demo-size">
            <span>城市</span> <a-select v-model="data.reservation_city" default-value="上海" class="input-size input-size2"
              @change="handleReservationTypeChange1">
              <a-select-option value="上海">
                上海
              </a-select-option>
              <a-select-option value="杭州" v-if="data.reservation_type === '都市CCRC'">
                杭州
              </a-select-option>
            </a-select>
          </div>

          <div class="components-input-demo-size">
            <span>区域</span> <a-select v-model="data.reservation_region" default-value="浦东"
              class="input-size input-size3" @change="handleReservationTypeChange2">
              <a-select-option value="浦东"
                v-if="data.reservation_type === '都市CCRC' && data.reservation_city === '上海' || data.reservation_type === '养老院' && data.reservation_city === '上海'">
                浦东
              </a-select-option>
              <a-select-option value="宝山" v-if="data.reservation_type === '养老院' && data.reservation_city === '上海'">
                宝山
              </a-select-option>
              <a-select-option value="杨浦"
                v-if="data.reservation_type === '护理院' && data.reservation_city === '上海' || data.reservation_type === '养老院' && data.reservation_city === '上海'">
                杨浦
              </a-select-option>
              <a-select-option value="崇明岛" v-if="data.reservation_type === '文旅康养' && data.reservation_city === '上海'">
                崇明岛
              </a-select-option>
              <a-select-option value="上城区" v-if="data.reservation_type === '都市CCRC' && data.reservation_city === '杭州'">
                上城区
              </a-select-option>
            </a-select>
          </div>

          <div class="components-input-demo-size xiangmu">
            <span>项目</span>
            <a-select v-model="data.reservation_project" default-value="信澜天地" class="input-size input-size4">
              <a-select-option value="信澜天地"
                v-if="data.reservation_type === '文旅康养' && data.reservation_city === '上海' && data.reservation_region === '崇明岛'">
                信澜天地
              </a-select-option>
              <a-select-option value="由由信福"
                v-if="data.reservation_type === '都市CCRC' && data.reservation_city === '上海' && data.reservation_region === '浦东'">
                由由信福
              </a-select-option>
              <a-select-option value="联洋信福"
                v-if="data.reservation_type === '都市CCRC' && data.reservation_city === '上海' && data.reservation_region === '浦东'">
                联洋信福
              </a-select-option>
              <a-select-option value="信悦88"
                v-if="data.reservation_type === '都市CCRC' && data.reservation_city === '杭州' && data.reservation_region === '上城区'">
                信悦88
              </a-select-option>
              <a-select-option value="锦绣养老院"
                v-if="data.reservation_type === '养老院' && data.reservation_city === '上海' && data.reservation_region === '浦东'">
                锦绣养老院
              </a-select-option>
              <a-select-option value="大场养老院"
                v-if="data.reservation_type === '养老院' && data.reservation_city === '上海' && data.reservation_region === '宝山'">
                大场养老院
              </a-select-option>
              <a-select-option value="新江湾养老院"
                v-if="data.reservation_type === '养老院' && data.reservation_city === '上海' && data.reservation_region === '杨浦'">
                新江湾养老院
              </a-select-option>
              <a-select-option value="臻悦护理院"
                v-if="data.reservation_type === '护理院' && data.reservation_city === '上海' && data.reservation_region === '杨浦'">
                臻悦护理院
              </a-select-option>
              <a-select-option value="爱亲仁护理院"
                v-if="data.reservation_type === '护理院' && data.reservation_city === '上海' && data.reservation_region === '杨浦'">
                爱亲仁护理院
              </a-select-option>
            </a-select>
          </div>

          <div class="components-input-demo-size">
            <span>姓名 </span> <a-input v-model="data.reservation_name" placeholder="" class="input-size input-size5" />
          </div>

          <div class="components-input-demo-size">
            <span>电话 </span> <a-input v-model="data.reservation_phone" placeholder="" class="input-size input-size6" />
          </div>

          <div class="components-input-demo-size">
            <span>其他</span> <a-select v-model="data.reservation_other" default-value="入住人"
              class="input-size input-size7">
              <a-select-option value="入住人">
                入住人
              </a-select-option>
              <a-select-option value="家人">
                家人
              </a-select-option>
              <a-select-option value="朋友">
                朋友
              </a-select-option>
              <a-select-option value="同行">
                同行
              </a-select-option>
              <a-select-option value="团队">
                团队
              </a-select-option>
            </a-select>
          </div>
        </div>
        <div class="Button" @click="postMessages">提交预约</div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { message } from "ant-design-vue"
export default {
  props: ["flagIndex"],
  data () {
    return {
      data: {},
      mobiles: false,
      // 展开参观预约
      unfold: false,
      unfolds: true,
      // 提交信息部分
      informationFlag: false,
      scrollTop: 0,
      // 存储最开始的预约参观模块距离顶部的距离
      startTop: 0,
    }
  },
  mounted () {
    // this.data = {
    //   reservation_type: "文旅康养",
    //   reservation_city: "上海",
    //   reservation_region: "崇明岛",
    //   reservation_project: "信澜天地",
    //   reservation_name: "",
    //   reservation_phone: "",
    //   reservation_other: "入住人"
    // }
    this.data = {
      reservation_type: "活力",
      reservation_city: "上海",
      reservation_project: "信澜天地",
      reservation_phone: "",
    }
    this.mobileFunctions()
    // window.addEventListener("resize", this.mobileFunctions);
    this.handleScroll()
    // 监听滚动事件
    window.addEventListener("scroll", this.handleScroll)
    // 监听屏幕大小变化
    window.addEventListener("resize", this.mobileFunctions)
  },
  methods: {
    handleScroll () {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      // console.log(
      //   "this.scrollTop",
      //   this.scrollTop,
      //   "this.startTop",
      //   this.startTop
      // );
    },
    mobileFunctions () {
      // console.log("调用了！！！");
      // console.log('this.screenHeight', this.screenHeight)
      // 获取包含滚动条的宽度
      let screenWidth =
        window?.innerWidth ||
        document?.documentElement.scrollWidth ||
        document.body?.clientWidth
      // 获取屏幕的宽度
      // let screenWidth = window.innerWidth || document.documentElement.clientWidth
      // console.log('window.innerWidth',screenWidth);
      this.$nextTick(() => {
        if (document.getElementById("visit")) {
          this.startTop = document.getElementById("visit").offsetTop
          if (this.flagIndex === "index" && this.scrollTop <= this.startTop) {
            this.startTop -= document.getElementById("visit").offsetHeight / 2
          }
          this.handleScroll()
          if (screenWidth < 768 || this.isMobile()) {
            this.informationFlag = false
            this.unfold = true
            this.unfolds = true
            this.mobiles = true
          } else {
            this.unfold = false
            this.informationFlag = true
            this.unfolds = true
            this.mobiles = false
          }
        }
      })
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
    // 参观预约点击展开
    getMore () {
      this.$nextTick(() => {
        this.informationFlag = true
        this.unfolds = !this.unfolds
      })
    },
    // 收缩参观预约
    deleteMore () {
      this.informationFlag = false
      this.unfolds = !this.unfolds
    },
    postMessages () {
      // const data = this.data
      console.log(this.data)
      if (this.data.reservation_phone === "") {
        // message.warning('请输入完整的信息')
        message.warning({
          content: "请输入完整的信息！",
          icon: <a-icon type="exclamation" />,
        })
        return
      }
      // 对电话号码进行验证
      const phoneRegex = /^[1][3-9]\d{9}$/ // 简单的手机号码正则表达式
      if (!phoneRegex.test(this.data.reservation_phone)) {
        // console.log('请输入有效的手机号码')
        message.warning({
          content: "请输入有效的手机号码！",
          icon: <a-icon type="exclamation" />,
        })
        return
      }

      // 发送数据到服务器
      this.$axios
        .post(this.$config.apiBaseUrl + "/reservationApi", this.data)
        .then((response) => {
          console.log(response.data)
          // 处理请求成功的结果
          message.success({
            content: "感谢您的预约，我们会尽快安排工作人员与您联系！",
            icon: <a-icon type="check" />,
          })
        })
        .catch((error) => {
          console.error(error)
          // 处理请求失败的结果
        })
      // message.success({
      //   content: '感谢您的预约，我们会尽快安排工作人员与您联系！',
      //   icon: <a-icon type="check" />
      // })
    },
    // 四个阶段
    handleReservationTypeChange (index) {
      console.log(index)
      if (index === "活力") {
        this.data = {
          reservation_type: "活力",
          reservation_city: "上海",
          reservation_project: "信澜天地",
          reservation_phone: "",
        }
      } else if (index === "自理") {
        this.data = {
          reservation_type: "自理",
          reservation_city: "上海",
          reservation_project: "由由信福",
          reservation_phone: "",
        }
      } else if (index === "护理") {
        this.data = {
          reservation_type: "护理",
          reservation_city: "上海",
          reservation_project: "锦绣养老院",
          reservation_phone: "",
        }
      } else {
        this.data = {
          reservation_type: "认知症",
          reservation_city: "上海",
          reservation_project: "锦绣养老院",
          reservation_phone: "",
        }
      }
    },
    // 改变城市
    handleReservationTypeChange1 (index) {
      if (index === "杭州") {
        this.data = {
          reservation_type: "自理",
          reservation_city: "杭州",
          reservation_project: "信悦88",
          reservation_phone: "",
        }
      }
      if (index === "上海" && this.data.reservation_type === "自理") {
        this.data = {
          reservation_type: "自理",
          reservation_city: "上海",
          reservation_project: "由由信福",
          reservation_phone: "",
        }
      }
    },
  },
  computed: {},
}
</script>

<style lang="less" scoped>
// 预约参观
.visit {
  width: 100%;
  // min-height: 116px;
  background: url("../assets/images/index/yulan.jpg");
  box-shadow: 0.125rem 0.125rem 20px rgba(72, 72, 72, 0.8);
  background-position: center;
  overflow: hidden;
  font-family: "Source Han Serif SC VF";

  &.index-fixed,
  &.index-nofixed {
    .preVisit {
      box-shadow: 0.125rem 0.125rem 20px rgba(72, 72, 72, 0.8);
    }
  }

  .preVisit {
    margin: 0 auto;
    width: 1200px;
    padding: 10px 20px;
    max-width: 100%;
    background: url("../assets/images/index/yulan.jpg");
    background-position: center;
  }

  // 固定样式
  .fixed {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    width: 1200px;
    max-width: 100%;
    background: url("../assets/images/index/yulan.jpg");
    box-shadow: 0.125rem 0.125rem 20px rgba(72, 72, 72, 0.8);
    /* 将背景图片铺满整个页面 */
    background-position: center;
    /* 将背景图片从中心放大 */
    padding: 10px 20px;
  }

  .top {

    // background-color: blue;
    .visitTitle {
      color: #fff;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;

      .span2 {
        font-size: 12px;
        margin-left: 5px;
        padding: 12px;
      }

      .left {
        font-size: 24px;
      }

      .right {
        .more {
          width: 93px;
          cursor: pointer;
          font-size: 1.2rem;
          padding: 5px 10px;
          border: 1px solid white;
        }
      }
    }

    //解决频繁点击轮播按钮出现蓝色的问题
    ::selection {
      color: #fff;
      background: initial;
    }
  }

  .bottom {
    display: flex;
    // height: 40px;
    line-height: 40px;
    position: relative;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;

    .button {
      display: flex;
      color: #fff;
      font-size: 18px;
      align-items: center;
      // justify-content: space-evenly;
      flex-wrap: wrap;
      flex: 1;

      .components-input-demo-size-box {
        display: flex;
        flex-wrap: wrap;
        flex: 1;

        .components-input-demo-size {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;

          span {
            // width: 80px;
            min-width: 38px;
            text-align: center;
          }

          .first-span {
            width: 80px;
          }

          .input-size {
            // margin-right: 60px;
            flex: 1;
          }

          .input-size1 {
            width: 140px;
          }

          .input-size2 {
            width: 140px;
          }

          .input-size4 {
            width: 140px;
          }

          .input-size6 {
            width: 140px;
          }
        }
      }
    }

    .Button {
      box-sizing: border-box;
      width: 100px;
      height: 32px;
      flex-shrink: 0;
      background-color: #fff;
      color: #ab000d;
      font-size: 20px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  &.index-nofixed {
    min-height: auto;
    background: transparent;
    box-shadow: none;
    position: absolute;
    transform: translateY(-50%);
    z-index: 11;
  }

  &.index-fixed {
    min-height: auto;
    background: transparent;
    box-shadow: none;
  }
}

@media screen and (max-width: 1018px) {
  .visit {

    // min-height: 156px;
    .bottom {
      .button .components-input-demo-size-box .components-input-demo-size span {
        min-width: 80px;
      }
    }

    &.index-nofixed {
      transform: translateY(-18%);
    }
  }
}

@media screen and(max-width: 768px) {
  .visit {

    // min-height: 60px;
    .bottom {
      flex-direction: column;

      .button {
        flex-direction: column;
        width: 100%;

        .components-input-demo-size-box {
          flex-direction: column;
          width: 100%;

          .components-input-demo-size {
            flex: 1;
            margin: 2px 0;
          }
        }
      }

      .Button {
        margin-top: 5px;
        width: 90%;
      }
    }

    &.index-nofixed {
      background: transparent;
      box-shadow: none;
      position: relative;
      transform: none;
    }
  }
}

@media screen and(max-width: 419px) {
  .visit {

    .preVisit,
    .fixed {
      padding-left: 5px;
      padding-right: 5px;

      .top .visitTitle {
        .left {
          font-size: 4.5vw;

          .span2 {
            padding: 0;
          }
        }

        .right {
          .more {
            font-size: 4.3vw;
            padding: 2px 5px;
          }
        }
      }

      .bottom {
        margin: 5px 0;

        .button {
          font-size: 4.5vw;

          .components-input-demo-size-box .components-input-demo-size {
            span {
              width: fit-content;
              min-width: fit-content;
            }
          }
        }

        .Button {
          font-size: 5vw;
          line-height: normal;
        }
      }
    }
  }
}

// @media screen and (max-width: 1050px) {
//   .visit {
//     .fixed {
//       top: 75px;
//       box-shadow: none;
//     }
//   }
// }

// @media screen and(max-width: 767px) {
//   .visit {
//     .preVisit {
//       padding: 11px 0 0 0;

//       .top {
//         .visitTitle {
//           .span2 {
//             margin-left: 0;
//             padding: 3px;
//           }
//         }
//       }
//     }

//     .fixed {
//       padding: 11px 0 0 0;

//       .top {
//         .visitTitle {
//           .span2 {
//             margin-left: 0;
//             padding: 3px;
//           }
//         }
//       }
//     }
//   }
// }

// @media screen and(max-width: 420px) {
//   .visit {
//     .preVisit {
//       padding: 11px 0 0 0;

//       .top {
//         .visitTitle {
//           padding-left: 0;
//           display: flex;
//           justify-content: center;
//           align-items: flex-end;

//           :nth-child(1) {
//             font-size: 20px;
//           }

//           :nth-child(2) {
//             padding: 0 5px 2px 5px;
//           }
//         }
//       }
//     }

//     .fixed {
//       padding: 11px 0 0 0;

//       .top {
//         .visitTitle {
//           padding-left: 0;
//           display: flex;
//           justify-content: center;
//           align-items: flex-end;

//           :nth-child(1) {
//             font-size: 20px;
//           }

//           :nth-child(2) {
//             padding: 0 5px 2px 5px;
//           }
//         }
//       }
//     }
//   }
// }</style>
<style lang="less">
.ant-select-dropdown-menu-item {
  font-family: "Source Han Serif SC VF" !important;
}

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

.ant-input {
  background-color: transparent !important;
  border: 1px solid #fff;
  color: #fff;
  height: 30px;
  margin: 0 8px;

  &:focus {
    border-right-width: 1px !important;
    outline: 0;
    border-color: #fff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  &:hover {
    border-color: #fff;
  }
}

.ant-select {
  height: 30px;
  color: #afaeae;
  margin: 0 8px;
}

@media screen and(max-width: 419px) {
  .ant-select {
    font-size: 4.5vw;
  }
}
</style>
