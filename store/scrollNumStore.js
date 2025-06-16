export const state = () => ({
    // 这里是全局数据保存的地方
    aaa: {}
})
// 修改state里面的函数必须用到mutations里面的函数
export const mutations = {
    setScrollNums(state, data) {
        state.aaa = data
    }
}
