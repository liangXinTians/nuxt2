<template>
  <!-- <client-only> -->
  <div>
    <footer class="layout-footer">
      <div class="footer-left"></div>
      <div class="footer-right"></div>
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
  background: #4D4D4D;
  // height: 680px;
  width: 100%;
  box-sizing: border-box;
  padding-top: 33px;
  z-index: 999;
}
</style>
