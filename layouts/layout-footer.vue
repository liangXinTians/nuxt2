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
              <div class="list-item-title" @click="handleClick('/product')">
                {{ $t('menu.forHimHer') }}
              </div>
              <div class="list-item-content" @click="handleClick('/product/1')">
                {{ $t('menu.femaleToys') }}
              </div>
              <div class="list-item-content" @click="handleClick('/product/2')">
                {{ $t('menu.maleToys') }}
              </div>
              <div class="list-item-content" @click="handleClick('/product/3')">
                {{ $t('menu.coupleToys') }}
              </div>
              <div class="list-item-content" @click="handleClick('/product/4')">
                {{ $t('menu.bondage') }}
              </div>

              <div class="list-item-title"  @click="handleClick('/productTest')">
                {{ $t('menu.service') }}
              </div>
              <div class="list-item-content"   @click="handleClick('/productTest/1')">
                {{ $t('menu.download') }}
              </div>
              <div class="list-item-content"  @click="handleClick('/productTest/2')">
                {{ $t('menu.freeTesting') }}
              </div>
              <div class="list-item-content"  @click="handleClick('/productTest/3')">
                {{ $t('menu.experience') }}
              </div>
              <div class="list-item-content"  @click="handleClick('/productTest/4')">
                {{ $t('menu.comments') }}
              </div>
            </div>
            <div class="list-item">
              <div class="list-item-title" @click="handleClick('/video')">
                {{ $t('menu.video') }}
              </div>
              <div class="list-item-content" @click="handleClick('/video')">
                {{ $t('menu.video') }}
              </div>

              <div class="list-item-title" @click="handleClick('/article')">
                {{ $t('menu.news') }}
              </div>
              <div class="list-item-content" @click="handleClick('/article')">
                {{ $t('menu.news') }}
              </div>
              <div class="list-item-title" @click="handleClick('/companyProfile')">
                {{ $t('menu.about') }}
              </div>
              <div class="list-item-content" @click="handleClick('/companyProfile')">
                {{ $t('menu.about') }}
              </div>
            </div>
            <div class="list-item list-items">
              <div class="list-item-title" @click="handleClick('/contactUs')">
                {{ $t('menu.contact') }}
              </div>
              <div class="list-item-content">
                {{ $t('footer.contact') }}: Wendy
              </div>
              <div class="list-item-content">
                {{ $t('footer.email') }}: info@sexhande.com
              </div>
              <div class="list-item-content">
                {{ $t('footer.phone') }}: +86 133 1656 3803
              </div>
              <div class="list-item-content">
                {{ $t('footer.wechat') }}: 13316563803
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="footer-right">
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
        </div> -->
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-imgs">
          <!-- 为每个图片添加点击跳转链接 -->
          <a :href="socialLinks[0].url" target="_blank" rel="noopener noreferrer" class="social-link">
            <img :src="socialLinks[0].imgSrc" :alt="socialLinks[0].alt" :title="socialLinks[0].title">
          </a>
          <a :href="socialLinks[1].url" target="_blank" rel="noopener noreferrer" class="social-link">
            <img :src="socialLinks[1].imgSrc" :alt="socialLinks[1].alt" :title="socialLinks[1].title">
          </a>
          <a :href="socialLinks[2].url" target="_blank" rel="noopener noreferrer" class="social-link">
            <img :src="socialLinks[2].imgSrc" :alt="socialLinks[2].alt" :title="socialLinks[2].title">
          </a>
          <a :href="socialLinks[3].url" target="_blank" rel="noopener noreferrer" class="social-link">
            <img :src="socialLinks[3].imgSrc" :alt="socialLinks[3].alt" :title="socialLinks[3].title">
          </a>
          <a :href="socialLinks[4].url" target="_blank" rel="noopener noreferrer" class="social-link">
            <img :src="socialLinks[4].imgSrc" :alt="socialLinks[4].alt" :title="socialLinks[4].title">
          </a>
        </div>
        <div class="footer-bottom-text">
          Copyright © 2025 Shenzhen S-hande Technology Co.,LTD All Rights Reserved.
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
      frontEventTarget: null,
      submitForm: {
        name: '',
        phone: '',
        email: '',
        message: '',
        code: ''
      },
      // 社交媒体链接数据
      socialLinks: [
        { 
          imgSrc: require("../assets/images/webapp/web1.png"), 
          alt: "Facebook", 
          title: "Facebook", 
          url: "https://www.facebook.com" 
        },
        { 
          imgSrc: require("../assets/images/webapp/web2.png"), 
          alt: "Twitter", 
          title: "Twitter", 
          url: "https://www.twitter.com" 
        },
        { 
          imgSrc: require("../assets/images/webapp/web3.png"), 
          alt: "Google+", 
          title: "Google+", 
          url: "https://plus.google.com" 
        },
        { 
          imgSrc: require("../assets/images/webapp/web4.png"), 
          alt: "LinkedIn", 
          title: "LinkedIn", 
          url: "https://www.instagram.com/" 
        },
        { 
          imgSrc: require("../assets/images/webapp/web5.png"), 
          alt: "YouTube", 
          title: "YouTube", 
          url: "https://www.youtube.com" 
        }
      ]
    }
  },
  props: ["mobile"],
  mounted () {
    console.log(this.mobile, "this.mobile")
  },
  methods: {
    handleClick(url){
      this.$router.push({ path: url })
    }
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
@social-icon-size: 32px;

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
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;

    // 左侧区域
    .footer-left {
      width: 100%;

      .footer-left-title {
        display: block;
        font-family: @font-bold;
        font-weight: normal;
        font-size: 25px;
        color: @text-color;
        margin: 0;
        padding: 20px 0;
        padding-left: 5%;
      }

      .footer-left-list {
        display: flex;
        justify-content: center;

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
            
            &:hover {
              color: @hover-color;
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
            width: 30%;
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
              
              &:hover {
                background-color: #e0177d;
                transition: background-color 0.3s ease;
              }
            }
          }
        }
      }
    }
  }

  // 底部区域
  .footer-bottom {
    .footer-bottom-imgs {
      margin-top: 50px;
      text-align: center;
      
      .social-link {
        display: inline-block;
        margin: 0 5px;
        transition: transform 0.3s ease, opacity 0.3s ease;
        
        &:hover {
          transform: translateY(-3px);
          opacity: 0.8;
        }
        
        img {
          cursor: pointer;
          width: @social-icon-size;
          height: @social-icon-size;
          object-fit: contain;
        }
      }
    }
    
    .footer-bottom-text {
      margin-top: 10px;
      text-align: center;
    }
  }
}

// 清除浮动
.clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}

// ========== 移动端适配 ==========

// 中等屏幕适配 (776px及以下)
@media (max-width: 776px) {
  .layout-footer {
    padding: 25px 30px 15px 30px;

    .footer-content {
      .footer-left {
        .footer-left-title {
          font-size: 22px;
          padding: 15px 0;
          padding-left: 0;
          // text-align: center;
        }

        .footer-left-list {
          flex-wrap: wrap;
          justify-content: flex-start;
          // align-items: flex-start;

          .list-item {
            width: 45%;
            margin-bottom: 20px;

            .list-item-title {
              font-size: 16px;
              margin: 10px 0 5px 0;
              padding-bottom: 10px;

              &::after {
                width: 60px;
                // left: 50%;
                // transform: translateX(-50%);
              }
            }

            .list-item-content {
              font-size: 14px;
              line-height: 26px;
              // text-align: center;
              text-align: left;
            }

            // 联系我们部分在平板上保持较宽
            &.list-items {
              width: 90%;
              text-align: left;
            }
          }
        }
      }
    }

    .footer-bottom {
      .footer-bottom-imgs {
        margin-top: 30px;

        .social-link {
          margin: 0 8px;

          img {
            width: 28px;
            height: 28px;
          }
        }
      }

      .footer-bottom-text {
        font-size: 12px;
        padding: 0 10px;
        line-height: 1.4;
      }
    }
  }
}

// 小屏幕适配
@media (max-width: 500px) {
  .layout-footer {
    padding: 20px 15px 15px 15px;

    .footer-content {
      .footer-left {
        .footer-left-title {
          font-size: 20px;
          padding: 12px 0;
          text-align: center;
        }

        .footer-left-list {
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .list-item {
            width: 100%;
            margin-bottom: 25px;
            text-align: center;

            .list-item-title {
              font-size: 15px;
              margin: 8px 0 8px 0;
              padding-bottom: 8px;
              text-align: center;

              &::after {
                width: 40px;
                height: 1.5px;
                left: 50%;
                transform: translateX(-50%);
              }
            }

            .list-item-content {
              font-size: 13px;
              line-height: 24px;
              margin-bottom: 2px;
              text-align: center;
            }

          }
        }
      }
    }

    .footer-bottom {
      .footer-bottom-imgs {
        margin-top: 25px;

        .social-link {
          margin: 0 6px;

          img {
            width: 24px;
            height: 24px;
          }
        }
      }

      .footer-bottom-text {
        font-size: 10px;
        margin-top: 15px;
        line-height: 1.5;
        word-break: keep-all;
      }
    }
  }
}

// 超小屏幕适配 (360px及以下)
@media (max-width: 360px) {
  .layout-footer {
    padding: 15px 10px;

    .footer-content {
      .footer-left {
        .footer-left-title {
          font-size: 18px;
          padding: 10px 0;
        }

        .footer-left-list {
          .list-item {
            margin-bottom: 20px;

            .list-item-title {
              font-size: 14px;
              margin: 6px 0;
              padding-bottom: 6px;

              &::after {
                width: 30px;
              }
            }

            .list-item-content {
              font-size: 12px;
              line-height: 22px;
            }

          }
        }
      }
    }

    .footer-bottom {
      .footer-bottom-imgs {
        margin-top: 20px;

        .social-link {
          margin: 0 4px;

          img {
            width: 22px;
            height: 22px;
          }
        }
      }

      .footer-bottom-text {
        font-size: 9px;
        margin-top: 12px;
        padding: 0 5px;
      }
    }
  }
}
</style>