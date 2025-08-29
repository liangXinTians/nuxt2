const CompressionPlugin = require("compression-webpack-plugin")
const path = require('path')
/**
 * @type {import("@nuxt/types").NuxtConfig}
 */
export default {
  head: {
    title: '前台标题',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
      { name: 'renderer', content: 'webkit' },
      { name: 'referrer', content: 'never' },
      { hid: 'keywords', name: 'keywords', content: '' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // 动态打包
  target: 'server',
  server: {
    port: 3000,   //自定义前端端口号
    host: "0.0.0.0",    //允许任意ip访问
    timing: false
  },

  css: [
    'assets/style/public-class.less',//这一引入的是全局less
    'assets/style/transition.less',//这里引入了全路由都可以用的页面切换动效
    'assets/style/animate.min.css',
    'assets/style/antd.min.css',
    'cn-fontsource-source-han-serif-sc-vf-regular/font.css',//字体
  ],
  plugins: [
    {
      // 引入数字滚动插件
      src: '@/plugins/vue-count-to',
      ssr: true
    },

    {
      // 引入antd 局部加载
      src: '@/plugins/antd-ui',
      ssr: true
    },
    {
      src: '@/plugins/api',
      ssr: true
    },
  ],
  // 跨域问题
  proxy: {
    // 公司
    '/api': {
      target: 'https://www.amozici.com/prod-api/front/',
      pathRewrite: {
        '^/api': ''
      }
    },
    '/file': {
      target: 'https://www.amozici.com/prod-api/',
      pathRewrite: {
        '^/file': ''
      }
    }
  },
  publicRuntimeConfig: {
    // 本地
    apiBaseUrl: "/api",
    apiFileUrl: "/file",
    videoUrl: "",

    // 服务器
    // apiBaseUrl: "https://www.amozici.com/prod-api/front/",
    // apiFileUrl: "https://www.amozici.com/prod-api/",
    // videoUrl: "https://www.amozici.com/prod-api/",

  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  generate: {
  },
  router: {
    // base: process.env.NODE_ENV === 'production'? '/': '/',
    // base: ''
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',

    [
      'nuxt-i18n',
      {
        locales: [
          // { code: 'zh-CN', name: '中文', iso: 'zh-CN', file: 'zh-CN.js' },
          // { code: 'en-US', name: 'English', iso: 'en-US', file: 'en-US.js' },
          // { code: 'fr-FR', name: 'Français', iso: 'fr-FR', file: 'fr-FR.js' },
          // { code: 'es-ES', name: 'Español', iso: 'es-ES', file: 'es-ES.js' },
          // { code: 'it-IT', name: 'Italiano', iso: 'it-IT', file: 'it-IT.js' }
          { code: 'en', name: 'English', iso: 'en', file: 'en-US.js' },
          { code: 'fr', name: 'Français', iso: 'fr', file: 'fr-FR.js' },
          { code: 'es', name: 'Español', iso: 'es', file: 'es-ES.js' },
          { code: 'it', name: 'Italiano', iso: 'it', file: 'it-IT.js' }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en',
        strategy: 'no_prefix',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'user_lang',
          cookieDomain: null,
          cookieSecure: false,
          cookieCrossOrigin: false,
          redirectOn: 'no',              // 完全禁用重定向
          alwaysRedirect: false,
          fallbackLocale: 'en'
        },
        vueI18nLoader: true,
        vueI18n: {
          fallbackLocale: 'en',
          silentTranslationWarn: true
        },
        parsePages: false,
        baseUrl: 'http://192.168.100.165:3000/'
      }
    ]
  ],
  axios: {
    //是否可以跨域
    proxy: true,
    csrf: false,
  },
  build: {
    //打包分析项目大小的
    // analyze: true,
    // babel是处理js兼容性的
    babel: {
      plugins: [
        [
          "@babel/plugin-proposal-private-methods",
          {
            "loose": true
          },
        ]
      ],
      comments: true
    },
    // publicPath:'',
    // 开启css source map  true 为开发模式，false为生产模式
    cssSourceMap: false,
    //两个参数，第一个webpack的配置对象，第二个构建环境对象
    extend (config, { isDev, isClient }) {
      config.resolve.alias['@ant-design/icons/lib/dist$'] = path.resolve('./assets/antd-icons.js') // 引入需要的图标，resolve 为 path.resolve

      // 压缩图片
      config.module.rules.push({
        test: /\.(ico)$/, // 添加对 .ico 文件的处理
        loader: 'url-loader',
        options: {
          limit: 1000, // 文件大小小于 1KB 会被转为 base64
          name: 'img/[name].[hash:7].[ext]'
        }
      })
    },
    // 自定义打包文件名
    filenames: {
      //给chunk定义 名+hahs+.ext  .ext是原文件后缀名
      chunk: `[name].${Date.now()}.js`
    },
    // html.minify 默认就开启了js和css压缩 需要安装 已下都是默认属性
    loaders: {
      fontUrl: {
        limit: 8192
      },
      cssModules: {
        // localIdentName: '[local]_[hash:base64:5]'
        localIdentName: '[local]'
      },
      less: {
        // 启动内联javascript
        javascriptEnabled: true,
        // 配置了一个全局变量,放在所有less文件之后，与globalVars相反
        modifyVars: {
          'primary-color': '#0739a4',
        },
      }
    },
    //terser: true, // 是否开启 js 代码压缩
    optimizeCSS: true, // 是否分割 css样式
    optimization: { // 分割代码
      minimize: true,//开启压缩
      splitChunks: {
        chunks: 'all',//所有chunks
        maxSize: 20000, //生成 chunk 的最小体积（以 bytes 为单位）
        cacheGroups: {
          //标题名即cacheGroup
          vendors: {
            chunks: 'initial',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            name: 'chunk-vendors',
          },
          antd: { // antd 组件库分割
            test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
            name: 'chunk-antd',
            priority: 20,
          },
          antdIcon: { // antd 图标库分割
            test: /[\\/]node_modules[\\/]@ant-design[\\/]/,
            name: 'chunk-antdIcon',
            priority: 15,
          }
        },
      },
    },

    // 优化css的
    postcss: {
      postcssOptions: {
        plugins: {
          'postcss-preset-env': {
            stage: 3,
            auoprtefixer: { grid: true }
          },
          'cssnano': {
            preset: 'default'
          },
        }
      },
    },
    // 压缩js 将console都删除
    terser: {
      terserOptions: {
        compress: {
          // 删除console
          drop_console: true
        }
      }
    },
  },
}
