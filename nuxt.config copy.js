const CompressionPlugin = require("compression-webpack-plugin")
const path = require('path')
/**
 * @type {import("@nuxt/types").NuxtConfig}
 */
export default {
  head: {
    title: '中信养老',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
      { name: 'renderer', content: 'webkit' },
      { name: 'referrer', content: 'never' },
      { hid: 'keywords', name: 'keywords', content: '中信集团养老业务平台，中信养老，中信养老官网，上海中信兴业养老服务发展有限公司，养老院，养老社区，护理院' },
      { hid: 'description', name: 'description', content: '中信养老是中信集团发展养老业务的平台。以“都市型、一站式、医康养”为特色，提供全年龄全场景养老解决方案。目前已经形成“信澜天地、信福&信悦、信养之家”等信字系列产品线，可提供针对退休健康人群的活力公寓、适合高龄自理和高龄照护型长者的养老机构、生活不能自理及认知症长者对应的护理院等多元产品。' }
    ],
    script: [
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  // 公司静态  中信要改成动态
  // target: 'static',

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
    {
      // 引入百度统计
      src: '@/plugins/baidu',
      mode: 'server', // server 服务端渲染  client 客户端渲染
    },
  ],
  // 跨域问题
  proxy: {
    // 公司
    '/api': {
      target: 'http://devsrv.linknology.cn:18888/zhongxin/index.php/',
      pathRewrite: {
        '^/api': ''
      }
    },
    '/file': {
      target: 'http://devsrv.linknology.cn:18888/zhongxin/',
      pathRewrite: {
        '^/file': ''
      }
    },


    // 中信
    // '/api': {
    //   target: 'https://www.senior-living.citic/zhongxin/index.php/',
    //   pathRewrite: {
    //     '^/api': ''
    //   }
    // },
    // '/file': {
    //   target: 'https://www.senior-living.citic/zhongxin/',
    //   pathRewrite: {
    //     '^/file': ''
    //   }
    // }
  },

  publicRuntimeConfig: {
    // 本地
    apiBaseUrl: "/api",
    apiFileUrl: "/file",
    videoUrl: "",

    // 公司dev服务器
    // apiBaseUrl: "http://devsrv.linknology.cn:18888/zhongxin/index.php",
    // apiFileUrl: "http://devsrv.linknology.cn:18888/zhongxin",
    // videoUrl: "/zhongxin",  // 对单独的视频数据进行匹配


    // 中信
    // apiBaseUrl: "/zhongxin/index.php", //中信服务器
    // apiFileUrl: "/zhongxin",
    // videoUrl: ""
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
    // 放到石溪dev的时候要放开
    // base: '/zhongxin'
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
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
    // publicPath:'/zhongxin',
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
