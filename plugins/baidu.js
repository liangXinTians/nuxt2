// export default () => {
//     window._hmt = window._hmt || []
//     const hm = document.createElement('script')
//     hm.src = 'https://hm.baidu.com/hm.js?fd51d0d952c93773e4b04f613a93b85f'
//     const s = document.getElementsByTagName('script')[0]
//     s.parentNode.insertBefore(hm, s)
// }
/** 百度统计代码嵌入 */
export default ({app: {router}, store}) => {
    /* 每次路由变更时进行pv统计 */
    router.afterEach((to, from) => {
		/* 告诉增加一个PV */
		try {
			window._hmt = window._hmt || []
			window._hmt.push(['_trackPageview', to.fullPath])
		} catch (e) {
			
		}
    })
}
