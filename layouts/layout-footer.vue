<template>
  <!-- <client-only> -->
  <div>
    <footer class="layout-footer">

    </footer>
  </div>
  <!-- </client-only> -->
</template>

<script>
export default {
  name: "layout-footer",
  data () {
    return {
      // 保存前一个dom对象
      frontEventTarget: null,
    }
  },
  props: ["mobile"],
  mounted () {
    console.log(this.mobile, "this.mobile")
  },
  methods: {

  },

}
</script>

<style scoped lang="less">
// 底部footer
.layout-footer {
  font-family: "Source Han Serif SC VF";
  background: rgb(237, 237, 237);
  // height: 680px;
  width: 100%;
  box-sizing: border-box;
  border-top: 5px solid #ba000e;
  padding-top: 33px;
  z-index: 999;
}
</style>
