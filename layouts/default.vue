<template>
  <div id="pageId" class="eltabs">
    <layout-header :mobile="mobile" :closeMobileMenu="closeMobileMenu" />
    <Nuxt />
    <layout-footer :mobile="mobile" />
    <!-- 回到顶部 -->
    <a-back-top>
      <a-icon type="up" class="goTop" />
    </a-back-top>


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

    }
  },
  mounted () {

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



  .ant-back-top {
    // bottom: 170px;
    bottom: 50px;

    right: 50px;
    background-color: #FF1C8E;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 40px;
    width: 40px;
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

}
</style>
