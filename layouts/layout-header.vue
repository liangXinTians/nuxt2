<template>
  <!-- <client-only> -->
  <div class="header1">
    <header class="header" v-if="!mobile">
      <div class="pub-content">
        <div class="header-logo">
          <!-- <img @dragstart.prevent src="../assets/images/logo.png" /> -->
          <nuxt-link :to="{ path: '/' }">
            <img loading="lazy" @dragstart.prevent src="../assets/images/logo.png" />
          </nuxt-link>
        </div>
        <!-- pc端 -->
        <div class="header-menus">
          <div class="top-box">

            <a-select :key="refreshKey" :value="$i18n.locale" @change="handleLanguageChange" style="width: 120px">
              <a-select-option v-for="lang in $i18n.locales" :key="lang.code" :value="lang.code">
                {{ lang.name }}
                <img src="../assets/images/logo.png" alt="" style="height: 20px;">
              </a-select-option>
            </a-select>

            <p>{{ $t('home.title') }}</p>
            <!-- <button @click="switchLocale('zh-CN')">中文</button>
            <button @click="switchLocale('en-US')">English</button> -->
          </div>
          <a-menu v-model="current" mode="horizontal" :selectedKeys="selectedKeys">
            <!-- 首页 -->
            <a-menu-item key="home" class="header-item">
              <nuxt-link :to="{ path: '/' }">
                <div class="menu-item-text">
                  <span>HOME</span>
                </div>
              </nuxt-link>
            </a-menu-item>
            <!-- 四个分类 -->
            <a-sub-menu key="product" class="header-item">
              <span slot="title" class="submenu-title-wrapper">
                <div class="header-item" @click="handleClick('/product')">
                  <span>FOR HIM/FOR HER</span>
                </div>
              </span>
              <a-menu-item key="product1">
                <nuxt-link :to="{ path: '/product/1' }">
                  <div class="menu-item-texts">
                    <span>Female sex toys</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="product2">
                <nuxt-link :to="{ path: '/product/2' }">
                  <div class="menu-item-texts">
                    <span>Male sex toys</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="product3">
                <nuxt-link :to="{ path: '/product/3' }">
                  <div class="menu-item-texts">
                    <span>Couple sex toys</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="product4">
                <nuxt-link :to="{ path: '/product/4' }">
                  <div class="menu-item-texts">
                    <span>Bondage And Constraints</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
            </a-sub-menu>
            <!-- video -->
            <a-menu-item key="video" class="header-item">
              <nuxt-link :to="{ path: '/video' }">
                <div class="menu-item-text">
                  <span>VIDEO</span>
                </div>
              </nuxt-link>
            </a-menu-item>
            <!-- product-test -->
            <a-sub-menu key="productTest" class="header-item">
              <span slot="title" class="submenu-title-wrapper">
                <div class="header-item" @click="handleClick('/productTest')">
                  <span>SERVICE</span>
                </div>
              </span>
              <a-menu-item key="productTest1">
                <nuxt-link :to="{ path: '/productTest/1' }">
                  <div class="menu-item-texts">
                    <span>Download Center</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="productTest2">
                <nuxt-link :to="{ path: '/productTest/2' }">
                  <div class="menu-item-texts">
                    <span>Free Sex Toy Testing</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="productTest3">
                <nuxt-link :to="{ path: '/productTest/3' }">
                  <div class="menu-item-texts">
                    <span>To Experience The Product</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="productTest4">
                <nuxt-link :to="{ path: '/xinfuxinyue/4' }">
                  <div class="menu-item-texts">
                    <span>The Comments Section</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
            </a-sub-menu>
            <!-- 公司简介 -->
            <a-menu-item key="companyProfile" class="header-item">
              <nuxt-link :to="{ path: '/companyProfile' }">
                <div class="menu-item-text">
                  <span>ABOUT US</span>
                </div>
              </nuxt-link>
            </a-menu-item>
            <!-- news -->
            <a-menu-item key="article" class="header-item">
              <nuxt-link :to="{ path: '/article' }">
                <div class="menu-item-text">
                  <span>NEWS</span>
                </div>
              </nuxt-link>
            </a-menu-item>
            <!-- 联系我们 -->
            <a-menu-item key="contanctUs" class="header-item">
              <nuxt-link :to="{ path: '/contactUs' }">
                <div class="menu-item-text">
                  <span>CONTACT US</span>
                </div>
              </nuxt-link>
            </a-menu-item>
          </a-menu>
        </div>
      </div>
    </header>
    <header class="mobile-header" ref="mobileNav" v-else>
      <div class="header-logo">
        <nuxt-link :to="{ path: '/' }">
          <img loading="lazy" @dragstart.prevent src="../assets/images/logo.png" />
        </nuxt-link>
      </div>
      <div class="mobile-header-menus">
        <div class="m-header-right" @click="handleMobileMenu">
          菜单栏
        </div>
        <div class="m-header-menu-root" id="mobile-slide-right" v-if="mobile">
          <div class="close-btn-box">
            <a-icon class="close" type="close" @click="handleMobileMenu" />
          </div>
          <a-menu v-model="current" mode="inline">
            <a-menu-item key="home" class="header-item">
              <nuxt-link :to="{ path: '/' }">
                <div class="menu-item-text1">
                  <span>HOME</span>
                </div>
              </nuxt-link>
            </a-menu-item>
            <!-- 四个分类 -->
            <a-sub-menu key="product" class="header-item">
              <span slot="title" class="submenu-title-wrapper">
                <div class="header-item" @click="handleClick('/product')">
                  <span>FOR HIM/FOR HER</span>
                </div>
              </span>
              <a-menu-item key="product1">
                <nuxt-link :to="{ path: '/product/1' }">
                  <div class="menu-item-textss">
                    <span>Female sex toys</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="product2">
                <nuxt-link :to="{ path: '/product/2' }">
                  <div class="menu-item-textss">
                    <span>Male sex toys</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="product3">
                <nuxt-link :to="{ path: '/product/3' }">
                  <div class="menu-item-textss">
                    <span>Couple sex toys</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="product4">
                <nuxt-link :to="{ path: '/product/4' }">
                  <div class="menu-item-textss">
                    <span>Bondage And Constraints</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
            </a-sub-menu>
            <!-- video -->
            <a-menu-item key="video" class="header-item">
              <nuxt-link :to="{ path: '/video' }">
                <div class="menu-item-text1">
                  <span>VIDEO</span>
                </div>
              </nuxt-link>
            </a-menu-item>
            <!-- product-test -->
            <a-sub-menu key="productTest" class="header-item">
              <span slot="title" class="submenu-title-wrapper">
                <div class="header-item" @click="handleClick('/productTest')">
                  <span>SERVICE</span>
                </div>
              </span>
              <a-menu-item key="productTest1">
                <nuxt-link :to="{ path: '/productTest/1' }">
                  <div class="menu-item-textss">
                    <span>Download Center</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="productTest2">
                <nuxt-link :to="{ path: '/productTest/2' }">
                  <div class="menu-item-textss">
                    <span>Free Sex Toy Testing</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="productTest3">
                <nuxt-link :to="{ path: '/productTest/3' }">
                  <div class="menu-item-textss">
                    <span>To Experience The Product</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="productTest4">
                <nuxt-link :to="{ path: '/xinfuxinyue/4' }">
                  <div class="menu-item-textss">
                    <span>The Comments Section</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
            </a-sub-menu>
            <!-- 公司简介 -->
            <a-menu-item key="companyProfile" class="header-item">
              <nuxt-link :to="{ path: '/companyProfile' }">
                <div class="menu-item-text1">
                  <span>ABOUT US</span>
                </div>
              </nuxt-link>
            </a-menu-item>
            <!-- news -->
            <a-menu-item key="article" class="header-item">
              <nuxt-link :to="{ path: '/article' }">
                <div class="menu-item-text1">
                  <span>NEWS</span>
                </div>
              </nuxt-link>
            </a-menu-item>
            <!-- 联系我们 -->
            <a-menu-item key="contanctUs" class="header-item">
              <nuxt-link :to="{ path: '/contactUs' }">
                <div class="menu-item-text1">
                  <span>CONTACT US</span>
                </div>
              </nuxt-link>
            </a-menu-item>
          </a-menu>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "layout-header",
  data () {
    return {
      refreshKey: 0,
      current: [], // 当前选中的菜单项（用于 ant-menu 的 v-model）
      selectedKeys: [], // 存储选中的菜单项（包括子菜单）
      showMobileMenu: this.closeMobileMenu,
      flags: [
        { flag: "success", name: "success-stories" },
        { flag: "research", name: "insight" },
        { flag: "about", name: "shixi-dynamic" },
      ],
      oldScrollTop: 0,
    }
  },
  props: ["mobile", "closeMobileMenu"],
  watch: {
    "$i18n.locale" () {
      this.refreshKey++ // 语言变化时强制刷新组件
    },
    $route (res) {
      console.log("shouye", res)
      this.showMobileMenu = true
      this.handleMobileMenu()
      this.updateCurrentMenu(res.path)
      this.updateSelectedKeys(res.path) // 新增：更新 selectedKeys
      console.log("res", res, this.current)
    },
    showMobileMenu () {
      if (this.showMobileMenu == true) {
        document.getElementsByTagName("body")[0].style.overflow = "hidden"
        let mask = document.createElement("div")
        mask.id = "mask"
        mask.addEventListener("click", this.handleMobileMenu)
        document.getElementsByClassName("mobile-header")[0].appendChild(mask)
        document.getElementById("mobile-slide-right").classList.add("slide-right")
      } else {
        document.getElementsByTagName("body")[0].style.overflow = "auto"
        mask.removeEventListener("click", this.handleMobileMenu)
        document.getElementById("mask")?.remove()
        document.getElementById("mobile-slide-right")?.classList.remove("slide-right")
      }
    },
  },
  mounted () {
    this.updateNavChecked()
    const cookieLang = this.getCookie("user_lang")
    if (
      cookieLang &&
      this.$i18n.locales.find((locale) => locale.code === cookieLang) &&
      cookieLang !== this.$i18n.locale
    ) {
      this.$i18n.setLocale(cookieLang)
      this.refreshKey++
    }
  },
  methods: {
    handleClick (e) {
      this.$router.push(e)
    },
    handleLanguageChange (selectedLang) {
      if (selectedLang === this.$i18n.locale) return
      this.refreshCurrentPage(selectedLang)
    },
    refreshCurrentPage (lang) {
      try {
        this.setCookie("user_lang", lang, 365)
        this.$i18n.setLocale(lang)
        this.refreshKey++
        setTimeout(() => {
          window.location.reload()
        }, 100)
      } catch (error) {
        console.error("Error switching language:", error)
        window.location.reload()
      }
    },
    setCookie (name, value, days) {
      if (typeof document !== "undefined") {
        let expires = ""
        if (days) {
          const date = new Date()
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
          expires = "; expires=" + date.toUTCString()
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/"
      }
    },
    getCookie (name) {
      if (typeof document !== "undefined") {
        const nameEQ = name + "="
        const ca = document.cookie.split(";")
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i]
          while (c.charAt(0) === " ") c = c.substring(1, c.length)
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
        }
      }
      return null
    },
    switchLocale (lang) {
      this.$i18n.setLocale(lang)
      this.setCookie("user_lang", lang, 365)
      this.refreshKey++
    },
    handleMobileMenu () {
      this.showMobileMenu = !this.showMobileMenu
      if (this.showMobileMenu == true) {
        window.removeEventListener("scroll", this.scrolling)
      } else {
        console.log("绑定了")
        window.addEventListener("scroll", this.scrolling)
      }
    },
    // 新增：更新 selectedKeys 的方法
    updateSelectedKeys (path) {
      if (path === "/" || path === "/home") {
        this.selectedKeys = ["home"]
      } else if (path.startsWith("/product")) {
        this.selectedKeys = ["product"] // 选中 "FOR HIM/FOR HER"
      } else if (path.startsWith("/productTest")) {
        this.selectedKeys = ["productTest"] // 选中 "SERVICE"
      } else if (path === "/video") {
        this.selectedKeys = ["video"]
      } else if (path === "/companyProfile") {
        this.selectedKeys = ["companyProfile"]
      } else if (path === "/article") {
        this.selectedKeys = ["article"]
      } else if (path === "/contanctUs") {
        this.selectedKeys = ["contanctUs"]
      } else {
        this.selectedKeys = []
      }
    },
    // 保留原有的 updateCurrentMenu（用于 current）
    updateCurrentMenu (path) {
      if (path === "/") {
        this.current = ["home"]
      } else if (path === "/product" || path === "/productDetail") {
        this.current = ["product"]
      } else if (path === "/product/1") {
        this.current = ["product1"]
      } else if (path === "/product/2") {
        this.current = ["product2"]
      } else if (path === "/product/3") {
        this.current = ["product3"]
      } else if (path === "/product/4") {
        this.current = ["product4"]
      } else if (path === "/productTest" || path === "/productTestDetail") {
        this.current = ["productTest"]
      } else if (path === "/productTest/1") {
        this.current = ["productTest1"]
      } else if (path === "/productTest/2") {
        this.current = ["productTest2"]
      } else if (path === "/productTest/3") {
        this.current = ["productTest3"]
      } else if (path === "/productTest/4") {
        this.current = ["productTest4"]
      } else if (path === "/video") {
        this.current = ["video"]
      } else if (path === "/companyProfile") {
        this.current = ["companyProfile"]
      } else if (path === "/article") {
        this.current = ["article"]
      } else if (path === "/contanctUs") {
        this.current = ["contanctUs"]
      } else if (this.$route.name === "lianyangxinfu") {
        this.current = ["lianyangxinfu"]
      } else {
        let array = path.split("/")
        let pathKey = array[array.length - 1]
        this.current = [pathKey]
        if (!isNaN(pathKey)) {
          this.flags.forEach((item) => {
            if (path.includes(item.flag)) {
              this.current = [item.name]
            }
          })
        }
      }
    },
    updateNavChecked () {
      this.updateCurrentMenu(this.$route.path)
      this.updateSelectedKeys(this.$route.path) // 新增：初始化 selectedKeys
      console.log("updateNavChecked", this.$route, this.current)
    },
  },
  beforeDestroy () {
    window.removeEventListener("scroll", this.scrolling)
  },
}
</script>

<style lang="less">
// ===== 通用样式重置 =====
.ant-select-selection {
  background-color: transparent !important;
  border: none !important;
  border-top: 0 !important;
  color: #fff;
  box-shadow: none !important;

  .ant-select-arrow {
    color: #fff !important;
  }

  &:active {
    box-shadow: none !important;
  }
}

//  确保 FOR HIM/FOR HER 选中时变红 
.ant-menu-submenu-selected.header-item span {
  color: #b9000e !important;
}

// 如果使用 .menu-item-text 的子菜单 
.ant-menu-submenu-selected .menu-item-text span {
  color: #b9000e !important;
}

// ===== 菜单基础样式 =====
.ant-menu {
  background-color: transparent !important;
  color: #fff;

  &-horizontal {
    line-height: 41px;
    border: none;
  }

  &-submenu>ul.ant-menu {
    font-family: "Source Han Serif SC VF" !important;
  }

  &-submenu-popup {
    background: rgba(0, 0, 0, .2);
  }
}

// ===== 边框消除（通用） =====
.ant-menu-item-selected,
.ant-menu-horizontal>.ant-menu-item,
.ant-menu-horizontal>.ant-menu-submenu,
.ant-menu-horizontal>.ant-menu-item:hover,
.ant-menu-horizontal>.ant-menu-item-active,
.ant-menu-horizontal>.ant-menu-submeu-open,
.ant-menu-inline>.ant-menu-item,
.ant-menu-inline>.ant-menu-submenu,
.ant-menu-inline>.ant-menu-item:hover,
.ant-menu-inline>.ant-menu-item-active,
.ant-menu-inline>.ant-menu-submeu-open {
  border: none !important;
}

// ===== 下边框消除 =====
.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-selected:after,
.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-active:after,
.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item:hover:after,
.ant-menu-horizontal>.ant-menu-item:after,
.ant-menu-inline:not(.ant-menu-dark)>.ant-menu-item-selected:after,
.ant-menu-inline:not(.ant-menu-dark)>.ant-menu-item-active:after,
.ant-menu-inline:not(.ant-menu-dark)>.ant-menu-item:hover:after,
.ant-menu-inline>.ant-menu-item:after {
  border: none;
}

// ===== 水平菜单样式 =====
.ant-menu-horizontal {

  // 字体设置
  >.ant-menu-item:hover,
  >.ant-menu-submenu:hover,
  >.ant-menu-item-active,
  >.ant-menu-submenu-active,
  >.ant-menu-item-open,
  >.ant-menu-submenu-open,
  >.ant-menu-item-selected,
  >.ant-menu-submenu-selected {
    font-family: "Source Han Serif SC VF" !important;
  }

  // 基础样式
  >.ant-menu-item {
    vertical-align: baseline;
    color: #fff;

    >a {
      color: #fff;

      &:hover {
        color: #b9000e;
      }
    }
  }

  // 选中状态
  >.ant-menu-item-selected {
    color: #b9000e;

    >a {
      color: #b9000e;
    }
  }

  // hover效果
  >.ant-menu-item:hover {
    color: transparent !important;
  }

  // submenu样式
  >.ant-menu-submenu {
    >.ant-menu-submenu-title:hover {
      color: #b9000e;
    }
  }
}

// 非水平菜单选中状态
.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-selected,
.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu-selected {
  color: #b9000e;
}

.ant-menu-inline:not(.ant-menu-dark)>.ant-menu-item-selected {
  color: #b9000e;
}

.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background: rgba(0, 0, 0, .0);
  color: #b9000e;
}

// ===== 内联菜单样式 =====
.ant-menu-inline {

  // 字体设置
  >.ant-menu-item:hover,
  >.ant-menu-submenu:hover,
  >.ant-menu-item-active,
  >.ant-menu-submenu-active,
  >.ant-menu-item-open,
  >.ant-menu-submenu-open,
  >.ant-menu-item-selected,
  >.ant-menu-submenu-selected {
    font-family: "Source Han Serif SC VF";
  }

  // 基础样式
  >.ant-menu-item {
    vertical-align: baseline;

    a {
      color: #0d0d0d;

      &:hover {
        color: #0d0d0d;
      }
    }
  }

  // 选中状态
  >.ant-menu-item-selected {
    color: rgb(254, 252, 252) !important;
    background: #b9000e !important;

    a {
      color: #fff;
    }
  }

  // hover效果
  >.ant-menu-item:hover {
    color: transparent !important;
  }

  // 活动状态
  >.ant-menu-item-active {
    border: none !important;
  }
}

// menu-item-text样式
.menu-item-text {
  // text-align: center;
  padding: 0 0 13px 0;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;

  span {
    font-family: "Source Han Serif SC VF";
    display: block;
    line-height: initial;
    font-size: 15px;
    color: #fff; // 默认白色
  }

  // 选中状态下的span颜色
  .ant-menu-item-selected & span,
  .ant-menu-submenu-selected & span {
    color: #b9000e !important;
  }

  // hover状态下的span颜色
  .ant-menu-item:hover & span,
  .ant-menu-submenu:hover & span {
    color: #b9000e !important;
  }
}

.menu-item-texts {
  text-align: center;
  padding: 0 0 13px 0;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;

  span {
    font-family: "Source Han Serif SC VF";
    display: block;
    line-height: initial;
    font-size: 15px;
    color: #fff; // 默认白色
  }

  // 选中状态下的 span 颜色（红色）
  .ant-menu-item-selected & span,
  .ant-menu-submenu-selected & span {
    color: #b9000e !important;
  }
}

// 仅当前悬停的 <a-menu-item> 下的 span 变红
.ant-menu-item:hover .menu-item-texts span {
  color: #b9000e !important;
}

// 禁用状态
.header-item.disabled,
.menu-item-text-disabled {
  color: #b9000e;
}

// ===== submenu样式 =====
.ant-menu-submenu-title,
.a-sub-menu-item {
  font-size: 15px;
}

.ant-menu-submenu.ant-menu-submenu-selected>.ant-menu-submenu-title:hover,
.a-sub-menu-item:hover {
  color: #b9000e;
}

.ant-menu-submenu-selected {
  background-color: transparent !important;
  border: none !important;
  border-top: 0 !important;
  color: inherit !important;
}

// hover下拉框时上面的颜色
.ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
.ant-menu-submenu-active {
  color: #0d0d0d;
}

// 二级菜单样式
.ant-menu-item-selected>a {
  color: #fff;
}

.ant-menu-item:not(.ant-menu-item-selected)>a:hover,
.ant-menu-submenu:not(.ant-menu-submenu-selected)>.ant-menu-submenu-title:hover {
  color: #b9000e;
}

// ===== 通用菜单项样式 =====
.ant-menu-item {
  color: #fff !important;
}

.nuxt-link-exact-active {
  color: #b9000e !important;
}

// ===== 头部导航样式 =====
.header1 {
  width: 100%;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, .4);
  z-index: 100;
  color: #fff;
  font-family: "Source Han Serif SC VF";

  // PC端导航
  .header {
    z-index: 999;
    width: 100%;
    height: 100px;
    line-height: 100px;
    box-sizing: border-box;

    .pub-content {
      height: 100%;
      margin: 0 auto;
      clear: both;
      display: flex;
      justify-content: space-between;

      // logo部分
      .header-logo {
        width: 100px !important;
        height: 100px !important;
        margin-left: 50px;

        img {
          width: 100px;
          height: 100px;
        }
      }

      // 菜单部分
      .header-menus {
        width: 900px !important;
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .top-box {
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          height: 50px;
          line-height: 50px;
          margin-right: 25px;

          .top-boxs {
            margin-left: 20px;
          }
        }

        .ant-menu-horizontal {
          display: flex;
          justify-content: flex-end;
          border: none;

          .menu-item-text {
            padding: 10px 0 !important;
          }
        }
      }
    }
  }

  // 移动端导航
  // .mobile-header {
  //   position: fixed;
  //   top: 0;
  //   width: 100%;
  //   z-index: 99999999;
  //   color: #000 !important;
  //   background: white;
  //   box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.2);
  //   height: 76px;
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   transition: transform 0.5s;
  //   padding: 0 20px;
  //   box-sizing: border-box;

  //   .ant-menu {
  //     color: #000 !important;
  //   }

  //   .ant-select-selection {
  //     // background-color: transparent !important;
  //     // border: none !important;
  //     // border-top: 0 !important;
  //     color: #000 !important;
  //     // box-shadow: none !important;

  //     .ant-select-arrow {
  //       color: #000 !important;
  //     }

  //     &:active {
  //       // box-shadow: none !important;
  //     }
  //   }

  //   .menu-item-text1 {
  //     padding: 0 !important;
  //     display: flex !important;
  //     flex-direction: row !important;
  //     /* 改为水平布局 */
  //     justify-content: flex-start !important;
  //     align-items: center !important;
  //     height: 40px;
  //     /* 设置固定高度 */

  //     span {
  //       font-family: "Source Han Serif SC VF";
  //       display: block;
  //       line-height: normal !important;
  //       /* 使用normal而不是initial */
  //       font-size: 15px;
  //       color: #000;
  //       margin: 0;
  //       /* 移除默认margin */
  //     }

  //     /* 选中状态下的span颜色 */
  //     .ant-menu-item-selected & span {
  //       color: #b9000e !important;
  //     }

  //     /* hover状态下的span颜色 */
  //     .ant-menu-item:hover & span {
  //       color: #b9000e !important;
  //     }
  //   }

  //   .menu-item-textss {
  //     padding: 0 !important;
  //     display: flex;
  //     align-items: center;
  //     // height: 40px;

  //     span {
  //       font-family: "Source Han Serif SC VF";
  //       display: block;
  //       line-height: normal !important;
  //       font-size: 15px;
  //       color: #000;
  //       margin: 0;
  //     }
  //   }

  //   /* 只有当前选中的子菜单项变红，其他保持黑色 */
  //   .ant-menu-item-selected .menu-item-textss span {
  //     color: #b9000e !important;
  //   }

  //   /* 子菜单项hover效果 */
  //   .ant-menu-item:hover .menu-item-textss span {
  //     color: #b9000e !important;
  //   }

  //   /* 父级菜单标题样式 */
  //   .ant-menu-submenu-title {
  //     display: flex !important;
  //     align-items: center !important;
  //     // height: 40px !important;
  //     line-height: normal !important;

  //     .submenu-title-wrapper {
  //       display: flex;
  //       align-items: center;
  //       width: 100%;

  //       .header-item {
  //         display: flex;
  //         align-items: center;
  //         height: 100%;

  //         span {
  //           font-family: "Source Han Serif SC VF";
  //           font-size: 15px;
  //           color: #000;
  //           line-height: normal;
  //         }
  //       }
  //     }
  //   }

  //   /* 确保选中的父级菜单标题变红 */
  //   .ant-menu-submenu-selected .ant-menu-submenu-title span {
  //     color: #b9000e !important;
  //   }

  //   /* 父级菜单hover效果 */
  //   .ant-menu-submenu:hover .ant-menu-submenu-title span {
  //     color: #b9000e !important;
  //   }

  //   /* 修复整个菜单项的高度和对齐 */
  //   .ant-menu-item,
  //   .ant-menu-submenu {
  //     // height: 40px !important;
  //     // line-height: 40px !important;
  //     display: flex !important;
  //     align-items: center !important;
  //   }

  //   /* 确保链接也垂直居中 */
  //   .ant-menu-item>a,
  //   .ant-menu-submenu>.ant-menu-submenu-title {
  //     display: flex !important;
  //     align-items: center !important;
  //     // height: 100% !important;
  //     line-height: normal !important;
  //     width: 100%;
  //   }

  //   /* 移除不必要的内边距 */
  //   .ant-menu-item,
  //   .ant-menu-submenu-title {
  //     padding-top: 0 !important;
  //     padding-bottom: 0 !important;
  //   }

  //   .header-logo {
  //     height: 35px;

  //     a {
  //       display: inline-block;
  //       height: 35px;
  //     }

  //     img {
  //       height: 100%;
  //     }
  //   }

  //   .mobile-header-menus {
  //     flex-shrink: 0;
  //     color: #000 !important;

  //     .m-header-right {
  //       font-size: 16px;
  //       color: #000 !important;
  //       padding: 5px 10px;
  //       border: 1px solid #ccc;
  //       box-shadow: 0.125rem 0.125rem 10px rgba(72, 72, 72, 0.1);
  //       cursor: pointer;
  //     }

  //     .m-header-menu-root {
  //       color: #000 !important;
  //       background: white;
  //       position: fixed;
  //       scroll-behavior: inherit;
  //       -webkit-overflow-scrolling: touch;
  //       min-height: 100vh;
  //       transition: right 0.5s;
  //       top: 0;
  //       right: -330px;
  //       bottom: 0;
  //       z-index: 999;
  //       width: 330px;
  //       max-width: 100%;
  //       padding: 10px 0;

  //       .close-btn-box {
  //         text-align: right;
  //         padding-right: 20px;

  //         .close {
  //           font-size: 34px;
  //         }
  //       }

  //       .m-menu-box {
  //         font-size: 16px;

  //         .ant-menu {
  //           font-size: 16px;
  //           color: #000 !important;
  //         }
  //       }

  //       &.slide-right {
  //         overflow-y: auto;
  //         right: 0;
  //       }
  //     }
  //   }

  //   &.header-scroll-up {
  //     transform: translateY(-100%);
  //   }

  //   &.header-scroll-down {
  //     transform: translateY(0);
  //   }
  // }

  // 移动端导航完整样式
  .mobile-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99999999;
    color: #000 !important;
    background: white;
    box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.2);
    height: 76px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.5s;
    padding: 0 20px;
    box-sizing: border-box;

    .ant-menu {
      color: #000 !important;
      border: none !important;
    }

    .ant-select-selection {
      color: #000 !important;

      .ant-select-arrow {
        color: #000 !important;
      }
    }

    // 一级菜单项样式（HOME、VIDEO等）
    .menu-item-text1 {
      padding: 10px 0 !important; // 保持一些padding
      display: flex !important;
      flex-direction: column !important; // 保持列布局
      justify-content: center !important;
      align-items: flex-start !important; // 左对齐
      min-height: 40px; // 最小高度而不是固定高度

      span {
        font-family: "Source Han Serif SC VF";
        display: block;
        line-height: 1.2 !important; // 使用相对行高
        font-size: 15px;
        color: #000;
      }

      // 选中状态下的span颜色
      .ant-menu-item-selected & span {
        color: #b9000e !important;
      }

      // hover状态下的span颜色
      .ant-menu-item:hover & span {
        color: #b9000e !important;
      }
    }

    // 子菜单项样式
    .menu-item-textss {
      padding: 10px 0 !important; // 保持一些padding
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start; // 左对齐
      min-height: 40px;

      span {
        font-family: "Source Han Serif SC VF";
        display: block;
        line-height: 1.2 !important;
        font-size: 15px;
        color: #000;
      }
    }

    // 默认状态：所有子菜单项保持黑色
    .menu-item-textss span {
      color: #000 !important;
    }

    // 只有当前选中的子菜单项变红
    .ant-menu-item-selected .menu-item-textss span {
      color: #b9000e !important;
    }

    // 子菜单项hover效果
    .ant-menu-item:hover .menu-item-textss span {
      color: #b9000e !important;
    }

    // 确保子菜单能正常展开和收起
    .ant-menu-submenu-title {
      padding: 10px 16px !important; // 保持原有的padding
      padding-left: 24px !important; // 确保左边距
      height: auto !important; // 自动高度
      line-height: 1.2 !important;
      display: flex !important;
      align-items: center !important;
      margin: 0 !important; // 确保没有负边距

      .submenu-title-wrapper {
        width: 100%;
        margin: 0 !important; // 确保wrapper没有负边距

        .header-item {
          display: flex;
          align-items: center;
          margin: 0 !important; // 确保没有负边距

          span {
            font-family: "Source Han Serif SC VF";
            font-size: 15px;
            color: #000;
            line-height: 1.2;
          }
        }
      }
    }

    // 确保选中的父级菜单标题不会影响子项
    .ant-menu-submenu-selected .ant-menu-submenu-title span {
      color: #b9000e !important;
    }

    // 但是子菜单项默认保持黑色，不受父级选中状态影响
    .ant-menu-submenu-selected .ant-menu .ant-menu-item:not(.ant-menu-item-selected) .menu-item-textss span {
      color: #000 !important;
    }

    // 父级菜单hover效果
    .ant-menu-submenu:hover .ant-menu-submenu-title span {
      color: #b9000e !important;
    }

    // 菜单项基础样式 - 不强制固定高度
    .ant-menu-item {
      height: auto !important; // 自动高度
      line-height: 1.2 !important;
      padding: 0 16px !important; // 保持水平padding
      margin: 0 !important;
    }

    .ant-menu-submenu {
      .ant-menu-submenu-title {
        height: auto !important;
        line-height: 1.2 !important;
        padding-left: 24px !important; // 确保左边距一致
        margin: 0 !important;
      }
    }

    // 确保链接正常显示
    .ant-menu-item>a {
      display: block !important;
      width: 100%;
      color: #000;
      text-decoration: none;
      padding: 0; // 移除链接的padding，由父元素控制
    }

    // 子菜单内容区域
    .ant-menu-inline .ant-menu-item {
      padding-left: 32px !important; // 子菜单项缩进
    }

    .header-logo {
      height: 35px;

      a {
        display: inline-block;
        height: 35px;
      }

      img {
        height: 100%;
      }
    }

    .mobile-header-menus {
      flex-shrink: 0;
      color: #000 !important;

      .m-header-right {
        font-size: 16px;
        color: #000 !important;
        padding: 5px 10px;
        border: 1px solid #ccc;
        box-shadow: 0.125rem 0.125rem 10px rgba(72, 72, 72, 0.1);
        cursor: pointer;
      }

      .m-header-menu-root {
        color: #000 !important;
        background: white;
        position: fixed;
        scroll-behavior: inherit;
        -webkit-overflow-scrolling: touch;
        min-height: 100vh;
        transition: right 0.5s;
        top: 0;
        right: -330px;
        bottom: 0;
        z-index: 999;
        width: 330px;
        max-width: 100%;
        padding: 10px 0;
        overflow-y: auto; // 确保可以滚动

        .close-btn-box {
          text-align: right;
          padding-right: 20px;

          .close {
            font-size: 34px;
          }
        }

        .m-menu-box {
          font-size: 16px;

          .ant-menu {
            font-size: 16px;
            color: #000 !important;
            background: transparent !important;
          }
        }

        // 菜单展开时的样式
        &.slide-right {
          overflow-y: auto;
          right: 0;
        }

        // 确保子菜单可以正常展开
        .ant-menu-submenu {
          .ant-menu {
            background: transparent !important;

            .ant-menu-item {
              padding-left: 48px !important; // 子菜单项更多缩进
            }
          }
        }
      }
    }

    // 滚动相关的样式
    &.header-scroll-up {
      transform: translateY(-100%);
    }

    &.header-scroll-down {
      transform: translateY(0);
    }
  }

  // Ant Design菜单组件的一些重置样式（针对移动端）
  .mobile-header {

    // 确保内联菜单的基础样式
    .ant-menu-inline {
      border: none !important;
      padding: 0 !important; // 确保菜单容器没有额外padding

      .ant-menu-item {
        border: none !important;
        margin: 0 !important;
        padding-left: 24px !important; // 一级菜单项的左边距

        &:after {
          display: none !important; // 隐藏边框
        }
      }

      .ant-menu-submenu {
        border: none !important;
        margin: 0 !important;

        .ant-menu-submenu-title {
          border: none !important;
          margin: 0 !important;
          padding-left: 24px !important; // 子菜单标题的左边距

          &:after {
            display: none !important;
          }
        }

        // 子菜单内部项目的缩进
        .ant-menu {
          .ant-menu-item {
            padding-left: 48px !important; // 子菜单项更多缩进
          }
        }
      }
    }

    // 子菜单展开/收起的动画
    .ant-menu-submenu-inline>.ant-menu {
      background: transparent !important;
    }

    // 确保选中状态正确显示 - 只有真正选中的项目变红
    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
      background: transparent !important;

      // 只有选中的项目变红
      &.ant-menu-item-selected .menu-item-text1 span,
      &.ant-menu-item-selected .menu-item-textss span {
        color: #b9000e !important;
      }
    }

    // 明确指定：未选中的子菜单项保持黑色
    .ant-menu-submenu .ant-menu .ant-menu-item:not(.ant-menu-item-selected) {
      .menu-item-textss span {
        color: #000 !important;
      }
    }
  }

}

// ===== 遮罩层样式 =====
#mask {
  height: 100vh;
  opacity: 0.65;
  background: #000;
  display: block;
  position: fixed;
  width: 100vw;
  z-index: 990;
  left: 0;
  top: 0;
}

// ===== 响应式样式 =====
@media screen and (max-width: 419px) {
  .header1 {
    .mobile-header {
      .header-logo {
        >a {
          display: flex;
          align-items: center;
        }
      }

      .mobile-header-menus {
        margin-left: 10px;

        .m-header-right {
          font-size: 4.4vw;
          padding: 5px;
        }
      }
    }
  }
}
</style>