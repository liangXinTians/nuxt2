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
                FOR HIM/FOR HER
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>
              <div class="list-item-content">
                Male sex toys
              </div>
              <div class="list-item-content">
                Couple sex toys
              </div>
              <div class="list-item-content">
                Bondage And Constraints
              </div>

              <div class="list-item-title">
                SERVICE
              </div>
              <div class="list-item-content">
                Download Center
              </div>
              <div class="list-item-content">
                Free Sex Toy Testing
              </div>
              <div class="list-item-content">
                To Experience The Product
              </div>
              <div class="list-item-content">
                The Comments Section
              </div>
            </div>
            <div class="list-item">
              <div class="list-item-title">
                Video
              </div>
              <div class="list-item-content">
                Video
              </div>

              <div class="list-item-title">
                News
              </div>
              <div class="list-item-content">
                News
              </div>
              <div class="list-item-title">
                ABOUT US
              </div>
              <div class="list-item-content">
                About Us
              </div>
              <!-- <div class="list-item-content">
                Female sex toys
              </div>
              <div class="list-item-content">
                Female sex toys
              </div>
              <div class="list-item-content">
                Female sex toys
              </div> -->
            </div>
            <div class="list-item list-items">
              <div class="list-item-title">
                Contact Us
              </div>
              <div class="list-item-content">
                Contact : Wendy
              </div>
              <div class="list-item-content">
                E-mail: info@sexhande.com
              </div>
              <div class="list-item-content">
                Phone: +86 133 1656 3803
              </div>
              <div class="list-item-content">
                Wechat: 13316563803
              </div>
            </div>
          </div>
        </div>
        <div class="footer-right">
          <div class="submit-form">
            <div class="submit-form-title">Message</div>
            <div class="submit-form-content">Welcome to leave message here, We will reply winth 24h</div>
            <form action="/?message/" method="post">
              <div class="foot-gp clearfix">
                <div class="row">
                  <div class="col-md-6">
                    <div class="foot-gp-input clearfix">
                      <input type="text" v-model="submitForm.name" name="Name" class="post_" placeholder="Name" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="foot-gp-input clearfix">
                      <input type="text" v-model="submitForm.phone" name="Phone" class="post_" placeholder="Phone" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="foot-gp clearfix">
                <div class="foot-gp-input clearfix">
                  <input type="text" v-model="submitForm.email" name="Email" id="email" class="post_"
                    placeholder="E-mail" />
                </div>
              </div>
              <div class="foot-gp clearfix">
                <div class="foot-gp-input clearfix">
                  <textarea v-model="submitForm.message" name="Message" class="post_" placeholder="Message"></textarea>
                </div>
              </div>
              <div class="foot-gp clearfix">
                <div class="row">
                  <div class="col-md-6">
                    <div class="foot-gp-input clearfix">
                      <input v-model="submitForm.code" type="text" name="checkcode" id="username" class="post_"
                        placeholder="Verification code" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="foot-gp-input clearfix">
                      <img title="点击刷新" src="/core/code.php"
                        onclick="this.src='/core/code.php?'+Math.round(Math.random()*10);" style=" height:34px;" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="foot-gp clearfix">
                <div class="foot-gp-btm clearfix">
                  <input type="submit" name="s" value="Submit" />
                </div>
              </div>
            </form>
          </div>
          <div></div>
        </div>
      </div>
      <div class="footer-bottom">
        <div>
          Copyright © 2020 Shenzhen S-hande Technology Co.,LTD All Rights Reserved.
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

      submitForm: {
        name: '',
        phone: '',
        email: '',
        message: '',
        code: ''
      }
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
// 定义变量
@footer-bg: #4D4D4D;
@text-color: #fff;
@hover-color: #FF1C8E;
@input-bg: #a7a7a7;
@button-bg: #ff1c8e;
@font-bold: 'ProximaNova-Extrabld';

// 底部footer样式
.layout-footer {
  background: @footer-bg;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 30px 50px 20px 50px;
  color: @text-color;

  // 内容区域
  .footer-content {
    display: flex;
    justify-content: space-between;

    // 左侧区域
    .footer-left {
      width: 50%;

      .footer-left-title {
        display: block;
        font-family: @font-bold;
        font-weight: normal;
        font-size: 25px;
        color: @text-color;
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
            padding-bottom: 15px;
            display: block;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            &::after {
              content: '';
              position: absolute;
              bottom: 5px;
              left: 0;
              width: 100px;
              height: 2px;
              background: @text-color;
            }
          }

          .list-item-content {
            color: #ccc;
            font-weight: normal;
            line-height: 30px;
            cursor: pointer;

            &:hover {
              color: @hover-color;
            }
          }

          // 特殊宽度项
          &.list-items {
            width: 40%;
          }
        }
      }
    }

    // 右侧表单区域
    .footer-right {
      width: 50%;

      .submit-form {
        width: 100%;

        .submit-form-title {
          display: block;
          font-family: @font-bold;
          font-weight: normal;
          font-size: 25px;
          color: @text-color;
          margin: 0;
          padding: 20px 0;
        }

        .submit-form-content {
          line-height: 30px;
          margin: 13px 0 3px 0;
          font-weight: bold;
          padding-bottom: 15px;
        }

        // 表单元素
        .foot-gp {
          margin-bottom: 10px;

          &-input {

            input,
            textarea {
              display: block;
              width: 100%;
              border: none;
              color: #000;
              font-size: 12px;
              background-color: @input-bg;
              text-indent: 10px;

              // 移除焦点样式
              &:focus {
                outline: none;
                box-shadow: none;
                background-color: @input-bg;
              }
            }

            input {
              height: 34px;
              line-height: 34px;
              padding: 0 5px;
            }

            textarea {
              padding: 0.75rem 0;
            }
          }

          .row {
            margin-left: -4px;
            margin-right: -4px;

            .col-md-6 {
              width: 50%;
              float: left;
              padding-left: 4px;
              padding-right: 4px;
            }
          }

          // 输入框样式
          &-input {

            input,
            textarea {
              display: block;
              width: 100%;
              border: none;
              color: #000;
              font-size: 12px;
              background-color: @input-bg;
              text-indent: 10px;
            }

            input {
              height: 34px;
              line-height: 34px;
              padding: 0 5px;
            }

            textarea {
              padding: 0.75rem 0;
            }
          }

          // 提交按钮
          &-btm {
            input {
              display: block;
              width: 100%;
              height: 42px;
              line-height: 42px;
              color: @text-color;
              background-color: @button-bg;
              text-transform: uppercase;
              border: none;
              cursor: pointer;
              font-size: 16px;
              text-align: center;
            }
          }
        }
      }
    }
  }

  // 底部区域
  .footer-bottom {
    margin: 0 auto;
    div{
      text-align: center;
      margin-top: 50px;
    }

  }
}

// 清除浮动（兼容旧代码）
.clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}
</style>
