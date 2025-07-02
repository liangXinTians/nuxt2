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
            <!-- <a-select 
    :key="refreshKey"
    :value="$i18n.locale"
    @change="lang => $i18n.setLocale(lang)"
    style="width: 120px">
    <a-select-option 
      v-for="lang in $i18n.locales" 
      :key="lang.code" 
      :value="lang.code"
      @click.native="openNewTab(lang.code)">
      {{ lang.name }}
    </a-select-option>
  </a-select> -->
  <a-select 
  :key="refreshKey"
  :value="$i18n.locale"
  @change="handleLanguageChange"
  style="width: 120px">
  <a-select-option 
    v-for="lang in $i18n.locales" 
    :key="lang.code" 
    :value="lang.code">
    {{ lang.name }}
  </a-select-option>
</a-select>
            <div class="top-box1 top-boxs">信澜天地</div>
            <div class="top-box2 top-boxs">信福&信悦</div>

             <p>{{ $t('home.title') }}</p>
             <button @click="switchLocale('zh-CN')">中文</button>
    <button @click="switchLocale('en-US')">English</button>
            <div class="top-box3 top-boxs">信悦88</div>
          </div>
          <a-menu v-model="current" mode="horizontal">
            <!-- 首页--中信养老 -->
            <a-menu-item key="zhongxinyanglao" class="header-item">
              <nuxt-link :to="{ path: '/zhongxinyanglao' }">
                <div class="menu-item-text">
                  <span>中信养老</span>
                </div>
              </nuxt-link>
            </a-menu-item>
            <!-- 信澜天地 -->
            <a-menu-item key="xinlantiandi" class="header-item">
              <nuxt-link :to="{ path: '/xinlantiandi' }">
                <div class="menu-item-text">
                  <span>信澜天地</span>
                </div>
              </nuxt-link>
            </a-menu-item>
            <a-sub-menu key="xinfuxinyue" class="header-item">
              <span slot="title" class="submenu-title-wrapper">
                <div class="header-item">
                  <span>信福&信悦</span>
                </div>
              </span>
              <a-menu-item key="xinyue88">
                <nuxt-link :to="{ path: '/xinfuxinyue/xinyue88' }">
                  <div class="menu-item-texts">
                    <span>信悦88</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="youyouxinfu">
                <nuxt-link :to="{ path: '/xinfuxinyue/youyouxinfu' }">
                  <div class="menu-item-texts">
                    <span>由由信福</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="lianyangxinfu">
                <nuxt-link :to="{ path: '/xinfuxinyue/lianyangxinfu' }">
                  <div class="menu-item-texts">
                    <span>联洋信福（昆仑邸）</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
            </a-sub-menu>
            <!-- 信养之家 -->
            <a-sub-menu key="xinyangzhijia" class="header-item">
              <template #title>
                <div class="header-item">
                  <span>信养之家</span>
                </div>
              </template>
              <a-menu-item key="dachang">
                <nuxt-link :to="{ path: '/xinyangzhijia/dachang' }">
                  <div class="menu-item-texts">
                    <span>宝山大场养老院</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="jinxiu">
                <nuxt-link :to="{ path: '/xinyangzhijia/jinxiu' }">
                  <div class="menu-item-texts">
                    <span>浦东锦绣养老院</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="xinjiangwan">
                <nuxt-link :to="{ path: '/xinyangzhijia/xinjiangwan' }">
                  <div class="menu-item-texts">
                    <span>杨浦新江湾养老院</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="aiqinren">
                <nuxt-link :to="{ path: '/xinyangzhijia/aiqinren' }">
                  <div class="menu-item-texts">
                    <span>爱亲仁护理院</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="zhenyue">
                <nuxt-link :to="{ path: '/xinyangzhijia/zhenyue' }">
                  <div class="menu-item-texts">
                    <span>臻悦护理院</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
            </a-sub-menu>

            <!-- 委托管理 -->
            <!-- <a-menu-item key="weituoguanli" class="header-item">
              <nuxt-link :to="{ path: '/yanglaoshenghuo' }">
                <div class="menu-item-text">
                  <span>委托管理</span>
                </div>
              </nuxt-link>
            </a-menu-item> -->

            <!-- 旅居短住 -->
            <!-- <a-menu-item key="lvjuduanzhu" class="header-item" :disabled="true">
                <nuxt-link to="/">
                  <div class="menu-item-text menu-item-text-disabled">
                    <span>旅居短住</span>
                  </div>
                </nuxt-link>
              </a-menu-item> -->

            <!-- 委托管理 -->
            <a-menu-item key="yifuyun" class="header-item">
              <nuxt-link :to="{ path: '/yifuyun' }">
                <div class="menu-item-text">
                  <span>委托管理</span>
                </div>
              </nuxt-link>
            </a-menu-item>

            <!-- 养老生活 -->
            <a-menu-item key="yanglaoshenghuo" class="header-item">
              <nuxt-link :to="{ path: '/yanglaoshenghuo' }">
                <div class="menu-item-text">
                  <span>养老生活</span>
                </div>
              </nuxt-link>
            </a-menu-item>
            <!-- 党的建设 -->
            <!-- <a-menu-item key="dangdejianshe" class="header-item" :disabled="true">
                <nuxt-link :to="{ path: '/' }">
                  <div class="menu-item-text menu-item-text-disabled">
                    <span>党的建设</span>
                  </div>
                </nuxt-link>
              </a-menu-item> -->
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
            <a-menu-item key="zhongxinyanglao" class="header-item">
              <nuxt-link :to="{ path: '/zhongxinyanglao' }">
                <div class="menu-item-text">
                  <span>中信养老</span>
                </div>
              </nuxt-link>
            </a-menu-item>
            <a-menu-item key="xinlantiandi" class="header-item">
              <nuxt-link :to="{ path: '/xinlantiandi' }">
                <div class="menu-item-text">
                  <span>信澜天地</span>
                </div>
              </nuxt-link>
            </a-menu-item>
            <a-sub-menu key="xinfuxinyue" class="header-item">
              <template #title>
                <div class="header-item">
                  <span>信福&信悦</span>
                </div>
              </template>
              <a-menu-item key="xinyue88">
                <nuxt-link :to="{ path: '/xinfuxinyue/xinyue88' }">
                  <div class="menu-item-texts">
                    <span>信悦88</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="youyouxinfu">
                <nuxt-link :to="{ path: '/xinfuxinyue/youyouxinfu' }">
                  <div class="menu-item-texts">
                    <span>由由信福</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="lianyangxinfu">
                <nuxt-link :to="{ path: '/xinfuxinyue/lianyangxinfu' }">
                  <div class="menu-item-texts">
                    <span>联洋信福（昆仑邸）</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="xinyangzhijia" class="header-item">
              <template #title>
                <div class="header-item">
                  <span>信养之家</span>
                </div>
              </template>
              <a-menu-item key="dachang">
                <nuxt-link :to="{ path: '/xinyangzhijia/dachang' }">
                  <div class="menu-item-texts">
                    <span>宝山大场养老院</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="jinxiu">
                <nuxt-link :to="{ path: '/xinyangzhijia/jinxiu' }">
                  <div class="menu-item-texts">
                    <span>浦东锦绣养老院</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="xinjiangwan">
                <nuxt-link :to="{ path: '/xinyangzhijia/xinjiangwan' }">
                  <div class="menu-item-texts">
                    <span>杨浦新江湾养老院</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="aiqinren">
                <nuxt-link :to="{ path: '/xinyangzhijia/aiqinren' }">
                  <div class="menu-item-texts">
                    <span>爱亲仁护理院</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="zhenyue">
                <nuxt-link :to="{ path: '/xinyangzhijia/zhenyue' }">
                  <div class="menu-item-texts">
                    <span>臻悦护理院</span>
                  </div>
                </nuxt-link>
              </a-menu-item>
            </a-sub-menu>
            <a-menu-item key="yifuyun" class="header-item">
              <nuxt-link :to="{ path: '/yifuyun' }">
                <div class="menu-item-text">
                  <span>委托管理</span>
                </div>
              </nuxt-link>
            </a-menu-item>
            <a-menu-item key="yanglaoshenghuo" class="header-item">
              <nuxt-link :to="{ path: '/yanglaoshenghuo' }">
                <div class="menu-item-text">
                  <span>养老生活</span>
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
      // 这个是存储选中的那个menu值
      current: [],
      // mobile: false,
      showMobileMenu: this.closeMobileMenu,
      // form: this.$form.createForm(this, { name: "coordinated" }),
      // 存储几个受文章影响的标志
      flags: [
        {
          flag: "success",
          name: "success-stories",
        },
        {
          flag: "research",
          name: "insight",
        },
        {
          flag: "about",
          name: "shixi-dynamic",
        },
      ],
      // 滚动之前的高度
      oldScrollTop: 0,
    }
  },
  props: ["mobile", "closeMobileMenu"],
  created () {
    // this.updateNavChecked()
  },
  watch: {
    '$i18n.locale'() {
      this.refreshKey++  // 语言变化时强制刷新组件
    },
    // 监视路由 只有路由改变时才会，页面刷新路由没有改变
    $route (res) {
      console.log("shouye", res)
      this.showMobileMenu = true
      // 路由切换调用
      this.handleMobileMenu()
      // 给首页单独设置 点击图标的时候
      if (
        res.path == "/" ||
        res.path.includes("/news") ||
        this.$route.name == "news-all" ||
        this.$route.name == "reviewYear"
      ) {
        this.current = ["index"]
      } else if (this.$route.name == "zhongxinyanglao") {
        this.current = ["zhongxinyanglao"]
      } else if (
        this.$route.name == "yanglaoshenghuo" ||
        this.$route.name == "yanglaoshenghuo-activities-all"
      ) {
        this.current = ["yanglaoshenghuo"]
      } else if (this.$route.name == "xinlantiandi") {
        this.current = ["xinlantiandi"]
      } else if (res.path.includes("/xinfuxinyue")) {
        this.current = ["xinfuxinyue"]
      } else if (res.path.includes("/xinyangzhijia")) {
        this.current = ["xinyangzhijia"]
      } else if (res.path.includes("/yifuyun")) {
        this.current = ["yifuyun"]
      } else if (
        this.$route.name == "dangdejianshe" ||
        this.$route.name == "dangdejianshe-partyBuildings-all"
      ) {
        this.current = ["dangdejianshe"]
      } else if (this.$route.name == "lianyangxinfu") {
        this.current = ["lianyangxinfu"]
      } else {
        //非首页的时候
        // 对路径进行按'/'切分
        let array = res.path.split("/")
        // 存储路径关键字
        let path = array[array.length - 1]
        // 将其path赋值给数组current
        this.current = [path]
        console.log("path", path)
        // 为stories需要修改
        if (path == "stories") {
          this.current = ["success-stories"]
        }
        if (!isNaN(this.current)) {
          this.flags.forEach((item) => {
            if (this.$route.path.includes(item.flag)) {
              this.current = [item.name]
            }
          })
        }
      }
      console.log("res", res, this.current)
    },
    // 监听是否打开侧边栏
    showMobileMenu () {
      // console.log('xxxxx',this.showMobileMenu);
      // true打开
      if (this.showMobileMenu == true) {
        document.getElementsByTagName("body")[0].style.overflow = "hidden"
        // 创建遮罩层
        let mask = document.createElement("div")
        mask.id = "mask"
        // 添加事件 点击遮罩层关闭侧边栏
        mask.addEventListener("click", this.handleMobileMenu)
        // 添加到移动端上
        document.getElementsByClassName("mobile-header")[0].appendChild(mask)
        // 给移动端添加类 使其滑出
        document
          .getElementById("mobile-slide-right")
          .classList.add("slide-right")
      } else {
        //false关闭
        document.getElementsByTagName("body")[0].style.overflow = "auto"
        // 删除则遮罩层 事件即元素
        mask.removeEventListener("click", this.handleMobileMenu)
        document.getElementById("mask").remove()
        // 删除滑动类
        document
          .getElementById("mobile-slide-right")
          .classList.remove("slide-right")
      }
    },
  },
  mounted () {
    // if (!this.$store) {
    //   console.error('Vuex store is not available')
    //   return
    // }
    this.updateNavChecked()
    // const savedLang = localStorage.getItem('user_lang')
    // if (savedLang) {
    //   this.$i18n.setLocale(savedLang)
    // }
    if (this.$route.query._lang) {
      const targetLang = this.$route.query._lang;
      if (this.$i18n.locales.find(locale => locale.code === targetLang)) {
        this.$i18n.setLocale(targetLang);
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('user_lang', targetLang);
        }
        this.refreshKey++;
        
        // 清理URL参数（可选）
        const cleanQuery = { ...this.$route.query };
        delete cleanQuery._lang;
        delete cleanQuery._t;
        
        if (Object.keys(cleanQuery).length === 0) {
          this.$router.replace({ query: undefined });
        } else {
          this.$router.replace({ query: cleanQuery });
        }
      }
    }

  },
  methods: {
    // 切换语言
    // switchLanguage (lang) {
    //   this.$i18n.setLocale(lang)
    //   localStorage.setItem('user_lang', lang)
    // },
    // openNewTab(lang) {
    //   // 获取当前路径并移除可能存在的语言前缀
    //   const rawPath = this.$route.path.replace(/^\/[a-z]{2}-[A-Z]{2}(\/|$)/, '/')
      
    //   // 构建新语言路径
    //   const newPath = lang !== 'zh-CN' 
    //     ? `/${lang}${rawPath}` 
    //     : rawPath
      
    //   // 生成完整URL
    //   const fullUrl = `${window.location.origin}${newPath}`
      
    //   // 新标签页打开
    //   window.open(fullUrl, '_blank')
      
    //   // 保持当前页面语言状态
    //   localStorage.setItem('user_lang', this.$i18n.locale)
    // },
    handleLanguageChange(selectedLang) {
      // 如果选择的语言和当前语言相同，不做任何操作
      if (selectedLang === this.$i18n.locale) {
        return;
      }
      
      // 调用新标签页打开方法
      this.openNewTab(selectedLang);
    },
    // 修复后的新标签页打开方法
    openNewTab(lang) {
      try {
        // 获取当前完整路径（包括查询参数和hash）
        const currentPath = this.$route.fullPath;
        const currentQuery = this.$route.query;
        const currentHash = this.$route.hash;
        
        // 移除现有的语言前缀（如果存在）
        let cleanPath = currentPath;
        const langPrefixRegex = /^\/(zh-CN|en-US|fr-FR|es-ES|it-IT)(\/|$)/;
        
        if (langPrefixRegex.test(currentPath)) {
          cleanPath = currentPath.replace(langPrefixRegex, '/');
        }
        
        // 构建新的路径
        let newPath;
        if (lang === 'zh-CN') {
          // 默认语言不需要前缀
          newPath = cleanPath;
        } else {
          // 其他语言需要添加前缀
          newPath = `/${lang}${cleanPath === '/' ? '' : cleanPath}`;
        }
        
        // 添加时间戳参数强制刷新
        const separator = newPath.includes('?') ? '&' : '?';
        const timestamp = Date.now();
        const finalUrl = `${window.location.origin}${newPath}${separator}_lang=${lang}&_t=${timestamp}`;
        
        console.log('Opening new tab with URL:', finalUrl);
        
        // 在新标签页中打开
        const newWindow = window.open(finalUrl, '_blank', 'noopener,noreferrer');
        
        if (!newWindow) {
          console.error('Failed to open new tab - popup blocked?');
          // 如果新标签页被阻止，可以提示用户
          this.$message.warning('请允许弹出窗口以打开新标签页');
        }
        
      } catch (error) {
        console.error('Error opening new tab:', error);
      }
    },
    // 当前页面语言切换（保留原功能）
    switchLocale(lang) {
      this.$i18n.setLocale(lang);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('user_lang', lang);
      }
      this.refreshKey++; // 强制刷新select组件
    },
    //点击按钮打开侧边栏
    handleMobileMenu () {
      this.showMobileMenu = !this.showMobileMenu
      if (this.showMobileMenu == true) {
        window.removeEventListener("scroll", this.scrolling)
      } else {
        console.log("绑定了")
        window.addEventListener("scroll", this.scrolling)
      }
    },
    // 解决放在服务刷刷新时最后路径会增加/导致导航栏无法选中的问题
    updateNavChecked () {
      // 当前所在页面
      // 刷新后，当前页面所在的导航栏仍蓝
      if (
        this.$route.name == "index" ||
        this.$route.name == "news-all" ||
        this.$route.name == "reviewYear"
      ) {
        this.current = ["index"]
      } else if (this.$route.name == "zhongxinyanglao") {
        this.current = ["zhongxinyanglao"]
      } else if (
        this.$route.name == "yanglaoshenghuo" ||
        this.$route.name == "yanglaoshenghuo-activities-all"
      ) {
        this.current = ["yanglaoshenghuo"]
      } else if (this.$route.name == "xinlantiandi") {
        this.current = ["xinlantiandi"]
      } else if (this.$route.name == "youyouxinfu") {
        this.current = ["youyouxinfu"]
      } else if (this.$route.name == ("/yifuyun")) {
        this.current = ["yifuyun"]
      } else if (
        this.$route.name == "dangdejianshe" ||
        this.$route.name == "dangdejianshe-partyBuildings-all"
      ) {
        this.current = ["dangdejianshe"]
      } else if (this.$route.name == "lianyangxinfu") {
        this.current = ["lianyangxinfu"]
      } else {
        console.log("this.$route", this.$route)
        // 拆分路径
        let array = this.$route.path.split("/")
        // 取最后一个
        let lastName = array[array.length - 1]
        console.log("array", array, "lastName", lastName)
        // 判断最后一个不为空，为空取倒数第二个
        if (lastName) {
          this.current = [lastName]
          console.log("this.current", this.current)
        } else {
          this.current = [array[array.length - 2]]
          console.log("this.current", this.current)
        }
        // 特殊判断路由
        if (this.current[0] == "stories") {
          this.current = ["success-stories"]
        }
        console.log("this.current", this.current, isNaN(this.current[0]))
        //因为有文章，所有为了绑定导航栏，只有位数字的才能进去
        if (!isNaN(this.current[0])) {
          this.flags.forEach((item) => {
            if (this.$route.path.includes(item.flag)) {
              this.current = [item.name]
            }
          })
        }
      }
      console.log("xxx", this.$route, this.current)
    },

  },
  beforeDestroy () {
    // 记得销毁
    window.removeEventListener("scroll", this.scrolling)
  },
}
</script>

<style lang="less">
// 背景颜色

.ant-menu {
  background-color: transparent !important;
  color: #fff;
}

.ant-menu-horizontal {
  line-height: 41px;
}

// 字体颜色
.header-item.disabled,
.ant-menu-horizontal>.ant-menu-item-selected a,
.ant-menu-horizontal>.ant-menu-item a {
  // color: #0d0d0d;
  color: #fff;
  // color: #b9000e;
}

.menu-item-text-disabled {
  // color: #fff;
  color: #b9000e;
}

.ant-menu-horizontal>.ant-menu-item-selected a {
  // color: #fff;
  color: #b9000e;
}

// 选中后添加背景颜色
.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-selected,
.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu-selected {
  // color: rgb(254, 252, 252) !important;
  color: #b9000e;
  // background: #b9000e !important;
}

.ant-menu-inline:not(.ant-menu-dark)>.ant-menu-item-selected {
  // color: rgb(254, 252, 252) !important;
  // background: #b9000e !important;
  color: #b9000e;
}

// submenu中的
/* .ant-menu-item-selected {
  background-color: #b9000e !important;
  color: rgb(254, 252, 252) !important;
} */

// .ant-menu-item-selected a:hover {
//   color: #fff;
// }

// .ant-menu-item:not(.ant-menu-item-active) a:hover {
//   color: #ccc;
// }

// 选中后下边框消除
.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-selected:after {
  border: none;
}

// 鼠标经过时下边框消除
.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-active:after,
.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item:hover:after {
  border: 0px;
}

.ant-menu-horizontal>.ant-menu-item:after {
  border: none;
}

// 鼠标放上时的效果
.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item:hover {
  color: transparent !important;
}

.ant-menu-horizontal>.ant-menu-item-active {
  border: none !important;
}

// 行高
.header1 .header .pub-content .header-menus .ant-menu-horizontal .menu-item-text {
  padding: 10px 0 !important;
}

// /*设置子菜单展开样式*/
// .ant-menu-submenu > .ant-menu {
//   border-radius: 0;
//   background-color: #fff;
//   box-sizing: border-box;
//   margin: 0;
//   font-size: 14px;
//   font-variant: tabular-nums;
//   font-feature-settings: "tnum", "tnum";
//   /*color: rgba(0, 0, 0, 0.65);*/
//   line-height: 0;
//   list-style: none;
//   outline: none;
//   // box-shadow: 0 5px 8px rgb(0 0 0 / 15%);
// }
// 消除长边框------?????
.ant-menu-item-selected,
.ant-menu-horizontal>.ant-menu-item,
.ant-menu-horizontal>.ant-menu-submenu,
.ant-menu-horizontal>.ant-menu-item:hover,
.ant-menu-horizontal>.ant-menu-item-active,
// .ant-menu-horizontal > .ant-menu-submenu:hover,
// .ant-menu-horizontal > .ant-menu-submenu-active,
.ant-menu-horizontal>.ant-menu-submeu-open {
  border: none !important;
}

// 二级菜单样式
.ant-menu-item-selected>a {
  color: #fff;
}

.ant-menu-horizontal>.ant-menu-item>a:hover,
.ant-menu-item:not(.ant-menu-item-selected)>a:hover,
.ant-menu-submenu:not(.ant-menu-submenu-selected)>.ant-menu-submenu-title:hover {
  color: #b9000e;
}

.ant-menu-item.ant-menu-item-selected>a:hover {
  // color: #ccc;
}

.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background: rgba(0, 0, 0, .0);
  color: #b9000e;
}

.ant-menu-horizontal>.ant-menu-item {
  vertical-align: baseline;
}

.ant-menu-submenu>ul.ant-menu {
  font-family: "Source Han Serif SC VF" !important;
}

.ant-menu-horizontal>.ant-menu-item:hover,
.ant-menu-horizontal>.ant-menu-submenu:hover,
.ant-menu-horizontal>.ant-menu-item-active,
.ant-menu-horizontal>.ant-menu-submenu-active,
.ant-menu-horizontal>.ant-menu-item-open,
.ant-menu-horizontal>.ant-menu-submenu-open,
.ant-menu-horizontal>.ant-menu-item-selected,
.ant-menu-horizontal>.ant-menu-submenu-selected {
  font-family: "Source Han Serif SC VF" !important;
}

/* 初始字体颜色 */
.ant-menu-submenu-title,
.a-sub-menu-item {
  // color: #0d0d0d;
  /* 设置初始字体颜色 */
  // color: #fff;
  font-size: 15px;
}

/* 鼠标经过时的颜色 */
.ant-menu-submenu.ant-menu-submenu-selected>.ant-menu-submenu-title:hover,
.a-sub-menu-item:hover {
  // color: #ccc;
  color: #b9000e;
  /* 设置鼠标经过时的颜色 */
}

.ant-menu-submenu-popup {
  background: rgba(0, 0, 0, .2);
}

.nuxt-link-exact-active {
  color: #b9000e !important;
}

.ant-menu-item {
  color: #fff !important;
}

// 头部导航部分
.header1 {
  width: 100%;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, .2);
  z-index: 100;
  color: #fff;
  font-family: "Source Han Serif SC VF";

  // pc端nav
  .header {
    z-index: 999;
    width: 100%;
    height: 90px;
    line-height: 90px;

    box-sizing: border-box;
    z-index: 100;

    .pub-content {
      height: 100%;
      margin: 0 auto;
      // 设置宽度
      // max-width: var(--contentWidth);
      clear: both;
      display: flex;
      justify-content: space-between;

      // pc端logo部分
      .header-logo {
        width: 300px;
        height: 90px;
        margin-left: 50px;

        // background-color: blue;
        img {
          // margin-top: -7px;
          width: 300px;
          height: 45px;
        }
      }

      // pc端的头部
      .header-menus {
        // width: 720px;
        // width: 520px;
        width: 615px;
        height: 90px;
        // margin-right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .top-box {
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          height: 40px;
          margin-right: 25px;

          .top-boxs {
            margin-left: 20px;
          }
        }

        // 导航栏选项水平属性
        .ant-menu-horizontal {
          border: none;

          // 内部每一列的属性
          .menu-item-text {

            text-align: center;
            padding: 0 0 13px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            span {
              font-family: "Source Han Serif SC VF";
              display: block;
              line-height: initial;
              font-size: 15px;
            }
          }
        }
      }
    }
  }

  // 移动端nav
  .mobile-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99999999;
    background: white;
    box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.2);
    height: 76px;
    display: flex;
    justify-content: space-between;
    // line-height: 76px;
    align-items: center;
    transition: transform 0.5s;
    padding: 0 20px;
    box-sizing: border-box;

    .header-logo {
      // width: 120px;
      height: 35px;

      a {
        display: inline-block;
        height: 35px;
      }

      img {
        /*width: 100%;*/
        height: 100%;
      }
    }

    .mobile-header-menus {
      flex-shrink: 0;

      /* .m-header-right {
        font-size: 34px;
        cursor: pointer;
      } */
      .m-header-right {
        font-size: 16px;
        color: #000;
        padding: 5px 10px;
        border: 1px solid #ccc;
        box-shadow: 0.125rem 0.125rem 10px rgba(72, 72, 72, 0.1);
        cursor: pointer;
      }

      .m-header-menu-root {
        background: white;
        position: fixed;
        // overflow: scroll;
        scroll-behavior: inherit;
        -webkit-overflow-scrolling: touch;
        // width: 100%;
        min-height: 100vh;
        transition: right 0.5s;
        top: 0;
        right: -330px;
        bottom: 0;
        z-index: 999;
        width: 330px;
        max-width: 100%;
        padding: 10px 0;

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
          }
        }
      }

      // 右边栏移动的类
      .m-header-menu-root.slide-right {
        overflow-y: auto;
        right: 0;
      }
    }
  }

  .mobile-header.header-scroll-up {
    transform: translateY(-100%);
  }

  .mobile-header.header-scroll-down {
    transform: translateY(0);
  }
}

// 遮罩层样式
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

// 下边是移动端侧边栏menus样式

// 字体颜色
.ant-menu-inline.ant-menu-item-selected a,
.ant-menu-inline>.ant-menu-item a,
.ant-menu-inline>.ant-menu-item a:hover {
  color: #0d0d0d;
}

.ant-menu-inline>.ant-menu-item-selected a {
  color: #fff;
}

// 选中后添加背景颜色
.ant-menu-inline:not(.ant-menu-dark)>.ant-menu-item-selected {
  color: rgb(254, 252, 252) !important;
  background: #b9000e !important;
}

// 选中后下边框消除
.ant-menu-inline:not(.ant-menu-dark)>.ant-menu-item-selected:after {
  border: none;
}

// 鼠标经过时下边框消除
.ant-menu-inline:not(.ant-menu-dark)>.ant-menu-item-active:after,
.ant-menu-inline:not(.ant-menu-dark)>.ant-menu-item:hover:after {
  border: 0px solid pink;
}

.ant-menu-inline>.ant-menu-item:after {
  border: none;
}

// 鼠标放上时的效果
.ant-menu-inline:not(.ant-menu-dark)>.ant-menu-item:hover {
  color: transparent !important;
}

.ant-menu-inline>.ant-menu-item-active {
  border: none !important;
}

// hover下拉框时上面的颜色
.ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
.ant-menu-submenu-active {
  color: #0d0d0d;
}

// 行高
.header1 .header .pub-content .header-menus .ant-menu-horizontal .menu-item-text {
  padding: 10px 0 !important;
}


// 消除长边框------?????
.ant-menu-item-selected,
.ant-menu-inline>.ant-menu-item,
.ant-menu-inline>.ant-menu-submenu,
.ant-menu-inline>.ant-menu-item:hover,
.ant-menu-inline>.ant-menu-item-active,
// .ant-menu-horizontal > .ant-menu-submenu:hover,
// .ant-menu-horizontal > .ant-menu-submenu-active,
.ant-menu-inline>.ant-menu-submeu-open {
  border: none !important;
}

.ant-menu-inline>.ant-menu-item {
  vertical-align: baseline;
}

.ant-menu-inline>.ant-menu-item:hover,
.ant-menu-inline>.ant-menu-submenu:hover,
.ant-menu-inline>.ant-menu-item-active,
.ant-menu-inline>.ant-menu-submenu-active,
.ant-menu-inline>.ant-menu-item-open,
.ant-menu-inline>.ant-menu-submenu-open,
.ant-menu-inline>.ant-menu-item-selected,
.ant-menu-inline>.ant-menu-submenu-selected {
  font-family: "Source Han Serif SC VF";
}

.ant-menu-submenu-selected {
  color: #b9000e;
}

@media screen and (max-width: 419px) {
  .header1 {
    .mobile-header {
      .header-logo {
        >a {
          display: flex;
          align-items: center;
        }

        // img {
        //   height: auto;
        // }
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
