// 页面切换时，滚动条回到顶部
/*
官方给出文档说，通过创建app文件夹，然后在其下创建router.scrollBehavior.js文件用来overwrite掉
nuxt.config.js中的scrollBehavior (to, from, savedPosition) {return { x: 0, y: 0 } } 这个方法
*/
export default function (to, from, savedPosition) {
  // 登记几个不需要调到顶部的路径，只要to和from中包含这个就不要跳到顶部
  /**
   * 1./shixi-research/research
   * 2./about-us/about
   */
  // 给footer增加了toTop的params参数，点底部的就是要调到抬头的
  if(to.params.toTop){
    return {x:0,y:0}
  }
  // 判断路径的
  if(
    to.fullPath.includes("/shixi-research/research")&&from.fullPath.includes("/shixi-research/research")||
    to.fullPath.includes("/about-us/about")&&from.fullPath.includes("/about-us/about")
    ){
      // 文章之间跳转要调到最顶处，文章跳转至不是本目录下的页面要跳到最顶处
      if(
        isNaN(to.fullPath.slice(-1))== false&&isNaN(from.fullPath.slice(-1))==false||
        isNaN(to.fullPath.slice(-1))== true &&isNaN(from.fullPath.slice(-1))==false ||
        isNaN(to.fullPath.slice(-1))== false&&isNaN(from.fullPath.slice(-1))==true
        ){
        return { x: 0, y: 0 }
      }
      // 都不是不做操作
      return
  }
  return { x: 0, y: 0 }
}
