## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 项目说明

## 静态打包问题

静态打包的时候，报错：nuxt.config.js is not in cwd，
解决方案：在 node_modules 找到@nuxt 对应目录下的 cwd: rootDir，
把它替换为 cwd: upath . normalize ( rootDir )，
<https://blog.csdn.net/aguai888/article/details/125407680>

## node 版本 16.20.2

## 打包

公司服务器静态打包 generate，传 dist 文件
客户服务器动态打包 build,传.nuxt 文件
