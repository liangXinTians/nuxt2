<template>
  <div>
    <footer class="layout-footer">
      <div class="footer-content">
        <div class="footer-left">
          <div class="footer-left-title">
            About S-HANDE
          </div>
          <div class="footer-left-list">
            <div class="list-item">
              <div class="list-item-title">
                标题
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>

              <div class="list-item-title">
                标题
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>
            </div>
            <div class="list-item">
              <div class="list-item-title">
                标题
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>

              <div class="list-item-title">
                标题
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>
            </div>
            <div class="list-item list-items">
              <div class="list-item-title">
                标题
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>
            </div>
          </div>
        </div>
        <div class="footer-right">
          22
        </div>
      </div>
      <div class="footer-bottom">
        <div>

        </div>
      </div>
    </footer>

  </div>
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
  // font-family: "Source Han Serif SC VF";
  background: #4D4D4D;
  height: auto;
  width: 100%;
  box-sizing: border-box;
  // padding-top: 33px;
  padding: 30px 50px 20px 50px;
  color: #fff;

  // z-index: 999;
  .footer-content {
    display: flex;
    justify-content: space-between;

    .footer-left {
      width: 50%;

      .footer-left-title {
        display: block;
        font-family: 'ProximaNova-Extrabld';
        font-weight: normal;
        font-size: 25px;
        color: #fff;
        margin: 0;
        padding: 20px 0;
      }

      .footer-left-list {
        display: flex;

        .list-item {
          width: 30%;

          .list-item-title {
            line-height: 30px;
            margin: 13px 0 3px 0;
            font-weight: bold;
            position: relative;
            /* 添加定位上下文 */
            padding-bottom: 15px;
            /* 增加底部间距 */
            display: block;
            /* 改为块级元素 */

            &::after {
              content: '';
              position: absolute;
              bottom: 5px;
              /* 控制下划线位置 */
              left: 0;
              // transform: translateX(-50%);
              width: 100px;
              /* 固定宽度 */
              height: 2px;
              /* 下划线高度 */
              background: #fff;
            }
          }

          .list-item-content {
            color: #ccc;
            font-weight: normal;
            line-height: 30px;
          }
        }

        .list-items {
          width: 40%;
        }
      }
    }

    .footer-right {
      width: 50%;
    }
  }

  .footer-bottom {
    margin: 0 auto;
  }


}
</style>
