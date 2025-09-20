// ssr部署 pm2配置 pm2打开
module.exports = {
  apps: [
    {
      name: 'zhongxin-official-website',  //名称可以自定义
      exec_mode: 'cluster',
      instances: 'max',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}
