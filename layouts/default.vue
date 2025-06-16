<template>
  <div id="pageId" class="eltabs">
    <layout-header :mobile="mobile" :closeMobileMenu="closeMobileMenu" />
    <Nuxt />
    <layout-footer :mobile="mobile" />
    <!-- 返回顶部按钮 -->
    <!-- <div v-if="!mobile" class="goToTop animate__animated animate__zoomIn" @click="toTop" v-show="scrollTop>'200'">
      返回顶部
      <img loading="lazy" @dragstart.prevent src="@/assets/images/top.png" alt="">
    </div> -->

    <!-- <a-back-top>
      <a-icon type="vertical-align-top" class="goTop" />
    </a-back-top>
    <div class="goHome" v-if="this.$route.name !== 'index'" @click="goHome">
      首页
    </div>
    <div class="goBack" v-if="hasPreviousPage" @click="goBack">
      <a-icon type="arrow-left" class="goBackIcon" />
    </div>

    <a-back-top>
      <a-icon type="vertical-align-top" class="goTop" />
    </a-back-top> -->

    <!-- 回到顶部 -->
    <a-back-top>
      <a-icon style="margin-right: 5px;" type="vertical-align-top" class="goTop" />回到顶部
    </a-back-top>

    <!-- 返回上一页面 -->
    <div class="goBack" v-if="hasPreviousPage" @click="goBack">
      <a-icon style="margin-right: 5px;" type="arrow-left" class="goBackIcon" />返回上页
    </div>

    <!-- 回到首页 -->
    <div class="goHome" v-if="this.$route.name !== 'index'" @click="goHome">
      <a-icon style="margin-right: 5px;" type="home" />返回首页
    </div>
  </div>
</template>
<script>
import LayoutHeader from "./layout-header"
import LayoutFooter from "./layout-footer"

export default {
  components: { LayoutHeader, LayoutFooter },
  // middleware: 'auth' // 页面层级中间件定义
  middleware (context) {
    // console.log('layout script middleware')
    const { store, route, redirect, params, query, req, res } = context
    // context 服务端上下文
    // 全局守卫前置业务
    // store vuex 状态树信息
    // redirect 强制跳转
    // params query 校验参数的合理性
    // req, res
    // console.log('layout middleware auth')
    // redirect('/register')
  },
  data () {
    return {
      // 滚动条距离顶部的值
      scrollTop: 0,
      // 是否为移动端
      mobile: false,
      // 侧边菜单栏 关闭参数
      closeMobileMenu: false,
      // 返回标志
      goBacks: '/'
    }
  },
  mounted () {
    // 机器人
    // window.AlimeDialog({
    //   from: 'eOxESQ9xh6'
    // })
    this.mobileFunction()
    window.onresize = () => {
      // console.log('window',document.body.clientWidth);
      // 判断屏幕的大小 设置为手机端
      this.mobileFunction()
    }
    // 给滚动条绑定滚动事件
    window.addEventListener('scroll', this.handleScroll)

    // 获取路由器对象
    const router = this.$router

    // 获取路由历史记录
    const history = router.history

    console.log('路由历史记录：', history)

  },
  methods: {
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
    // 返回顶部
    toTop () {
      // 实现滚动效果
      const timeTop = setInterval(() => {
        // 每次获取页面被卷去的部分
        const top = document.documentElement.scrollTop
        // 每次滚动多少 （步长值）
        let speed = Math.ceil(top / 10)
        if (speed < 20) {
          speed = 20
        }
        // 不在顶部 每次滚动到的位置
        if (document.documentElement.scrollTop > 0) {
          document.body.scrollTop = document.documentElement.scrollTop = this.scrollTop -= speed
        } else {
          // 回到顶部清除定时器
          clearInterval(timeTop)
        }
      }, 15)
    },
    //回到首页
    goHome () {
      this.$router.push({ name: 'index' })
      // console.log("历史测试")
      // console.log("历史", this.$nuxt.$route)
    },
    // 返回上一页面
    goBack () {
      this.$router.go(-1)
    },
    //获取滚动条滚动的位置
    handleScroll () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    },
    //方法用来设置是移动端  屏幕小于992和通过手机验证方法就是移动端
    mobileFunction () {
      // console.log('document.body.clientWidth',document.body.clientWidth,window.innerWidth);
      // 获取包含滚动条的宽度
      let screenWidth = window?.innerWidth || document?.documentElement.scrollWidth || document.body?.clientWidth
      // console.log('window.innerWidth',screenWidth);
      if (screenWidth < 1050 || this.isMobile()) {
        this.mobile = true
      } else {
        this.mobile = false
        //关闭侧边栏
        this.closeMobileMenu = false
      }
      // if (screenWidth < 768) {
      //   this.mobile = true
      // } else {
      //   this.mobile = false
      // }
    },
  },
  computed: {
    hasPreviousPage () {
      // // 获取路由器对象
      // const router = this.$router

      // // 获取路由历史记录
      // const history = router.history
      // return history.length > 1
      // return this.$route.fullPath !== '/'
      // const matched = this.$router.currentRoute.matched
      // return matched.length > 1
      // return !this.$nuxt.$route.from
      console.log("this.$router.history.length", this.$nuxt.$route)
      if (this.goBacks !== this.$nuxt.$route.fullPath) {
        this.goBacks = this.$nuxt.$route.fullPath
        return true
      } else {
        return false
      }
    }
  },
  watch: {
    // $route(res){
    //   this.closeMobileMenu = false;
    // }
  },
}
</script>

<style lang="less">
#pageId {
  font-family: 'Source Han Serif SC VF';

  .goToTop {
    position: fixed;
    right: 40px;
    bottom: 100px;
    width: 64px;
    height: 64px;
    cursor: pointer;
    color: gray;
    transition: all 1s;
    font-weight: 700;

    img {
      width: 100%;
      height: 100%;
    }
  }


  .ant-back-top {
    // bottom: 170px;
    bottom: 130px;

    right: 50px;
    background-color: rgba(188, 145, 113, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 30px;
    width: 110px;
    border-radius: 4px;
    font-size: 18px;
    z-index: 999;
    font-weight: 700;

    &:hover {
      background-color: rgb(189, 49, 36)
    }
  }

  .goTop {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    font-family: 'Source Han Serif SC VF';
  }


  .goHome {
    font-size: 18px;
    position: fixed;
    right: 50px;
    bottom: 50px;
    height: 30px;
    width: 110px;
    background-color: rgba(188, 145, 113, 1);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    z-index: 999;
    font-family: 'Source Han Serif SC VF';
    font-weight: 700;
    border-radius: 4px;

    &:hover {
      background-color: rgb(189, 49, 36)
    }
  }

  .goBack {
    position: fixed;
    right: 50px;
    bottom: 90px;
    height: 30px;
    width: 110px;
    background-color: rgba(188, 145, 113, 1);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    z-index: 999;
    font-family: 'Source Han Serif SC VF';
    font-size: 18px;
    font-weight: 700;
    border-radius: 4px;

    &:hover {
      background-color: rgb(189, 49, 36)
    }
  }

  // .ant-back-top {
  //   bottom: 230px;
  //   right: 50px;
  //   background-color: rgba(140, 140, 140, 1);
  //   border-radius: 50%;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   color: #fff;
  // }

  // .goTop {
  //   font-size: 20px;
  //   font-weight: 900;
  //   color: #fff;
  //   font-family: 'Source Han Serif SC VF';
  // }

  // .goHome {
  //   position: fixed;
  //   right: 50px;
  //   bottom: 170px;
  //   height: 40px;
  //   width: 40px;
  //   border-radius: 50%;
  //   background-color: rgba(140, 140, 140, 1);
  //   cursor: pointer;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   color: #fff;
  //   z-index: 999;
  //   font-family: 'Source Han Serif SC VF';
  // }

  // .goBack {
  //   position: fixed;
  //   right: 50px;
  //   bottom: 110px;
  //   height: 40px;
  //   width: 40px;
  //   border-radius: 50%;
  //   background-color: rgba(140, 140, 140, 1);
  //   cursor: pointer;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   color: #fff;
  //   z-index: 999;
  //   font-family: 'Source Han Serif SC VF';
  //   font-size: 18px;
  //   font-weight: 900;
  // }

}

#J_xiaomi_dialog {
  font-family: "Source Han Serif SC VF" !important;
  bottom: 130px !important;
  right: 50px !important;
  // z-index:9999 !important;


  .J_weak {
    width: 110px !important;
    height: 30px !important;
    background-color: rgba(188, 145, 113, 1) !important;
    color: white !important;
    line-height: 30px !important;
    border-radius: 4px !important;
    display: flex !important;
    justify-content: center;
    align-items: center;
    font-weight: 700;

    &:hover {
      background-color: rgb(189, 49, 36) !important;
    }

    img {
      // display: none;
      display: block;
      margin-right: 5px;
    }

    .alime-text {
      font-size: 18px !important;
      vertical-align: initial !important;
      margin-left: 0px !important;
      // font-weight: 600 !important;
      font-family: "Source Han Serif SC VF" !important;
    }
  }
}

@media screen and (max-width: 768px) {
  #pageId {

    .ant-back-top,
    .goHome,
    .goBack {
      right: 20px;
    }
  }

  #J_xiaomi_dialog {
    right: 20px !important;
  }
}



// //设置滚动条样式
// ::-webkit-scrollbar {
//   //宽度是对竖向滚动条来设置的
//   width: 6px;
//   //高度是对于横向滚动条设置的
//   height: 6px;
// }
// // 滚动条里面的小方块
// ::-webkit-scrollbar-thumb{
//   background-color: rgba(144,147,153,.7);
//   border-radius: 4px;
//   &:hover{
//     background-color: rgba(144,147,153,.5);
//   }
// }
// // 滚动条里面的轨道
// ::-webkit-scrollbar-track{
//   border-radius: 4px;
//   background: rgba(0,0,0,0.1);
// }</style>

</style>
