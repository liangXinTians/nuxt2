<template>

  <div class="baibg" style="padding-top: 3rem;">
                            <!-- <div class="biaoti">S-HANDE For You
                                <div class="biaoti2"></div>
                                <a href="/?Her-Him/" class="more5">More</a>
                            </div> -->
                            <div class="indexk1">
                                <ul>
                                    <li><a href="/Female-sex-toys/"><img
                                                src="@/assets/images/yifuyun/5.png"
                                                alt="Female sex toys"><span></span><p>Female
                                                sex toys</p><em></em></a></li>
                                    <li><a href="/?Male-sex-toys/"><img
                                                src="@/assets/images/yifuyun/6.png"
                                                alt="Male sex toys"><span></span><p>Male
                                                sex toys</p><em></em></a></li>
                                    <li><a href="/?Couple-sex-toy-19/"><img
                                                src="@/assets/images/yifuyun/7.png"
                                                alt="Couple sex toys"><span></span><p>Couple
                                                sex toys</p><em></em></a></li>
                                    <li><a
                                            href="/?Bondage-And-Constraints/"><img
                                                src="@/assets/images/yifuyun/8.png"
                                                alt="Bondage And Constraints"><span></span><p>Bondage
                                                And
                                                Constraints</p><em></em></a></li>

                                </ul>
                            </div>
                        </div>
</template>

<script>
export default {
  name: 'FourImagesWithCenterText',
  data() {
    return {
      images: [
        {
          url: require('@/assets/images/yifuyun/5.png'),
          alt: '图片1',
          caption: '文字1'
        },
        {
          url: require('@/assets/images/yifuyun/6.png'),
          alt: '图片2',
          caption: '文字2'
        },
        {
          url: require('@/assets/images/yifuyun/7.png'),
          alt: '图片3',
          caption: '文字3'
        },
        {
          url: require('@/assets/images/yifuyun/8.png'),
          alt: '图片4',
          caption: '文字4'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.indexk1 {
    width: 100%;
    margin: 0 auto;
    height: auto;
    overflow: hidden;
    margin-bottom: 4rem;
}

.indexk1 ul li {
    float: left;
    width: 25%;
    position: relative;
    text-align: center;
}

.indexk1 ul li img {
    width: 100%;
    display: block;
}

.indexk1 ul li p {
    position: absolute;
    z-index: 99;
    line-height: 100%;
    vertical-align: middle;
    top: 45%;
    left: 0;
    right: 0;
    font-weight: bold;
    font-size: 18px;
    transition: all 0.5s ease 0s;
    -webkit-transform: all 0.5s ease 0s;
    color: #fff;
}

.indexk1 ul li span {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    display: block;
    opacity: 0;
    transition: all 0.5s ease 0s;
    -webkit-transform: all 0.5s ease 0s;
}

.indexk1 ul li:hover span {
    opacity: 1;
    transition: all 0.5s ease 0s;
    -webkit-transform: all 0.5s ease 0s;
}

.indexk1 ul li:hover p {
    top: 35%;
    transition: all 0.5s ease 0s;
    -webkit-transform: all 0.5s ease 0s;
}

.indexk1 ul li em {
    content: '';
    width: 0;
    height: 1px;
    position: absolute;
    margin: 0 auto;
    top: 50%;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 1;
    transition: width 0.5s linear;
}

.indexk1 ul li:hover em {
    width: 70%;
}



// 定义变量
@transition-duration: 0.3s;
@hover-darken: rgba(0, 0, 0, 0.5);
@text-color: #fff;
@underline-color: #fff;

.four-images-container {
  width: 100%;
  padding: 20px 0;
  
  .image-grid {
    display: flex;
    justify-content: space-between;
    
    .image-item {
      flex: 1;
      position: relative;
      
      .image-wrapper {
        position: relative;
        width: 100%;
        padding-bottom: 100%; /* 1:1 比例 */
        overflow: hidden;
        
        .image-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all @transition-duration ease;
        }
        
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          transition: background @transition-duration ease;
        }
        
        .image-caption {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: @text-color;
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          width: 90%;
          opacity: 1;
          transition: all @transition-duration ease;
          z-index: 2;
          
          &::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 2px;
            background: @underline-color;
            transition: width @transition-duration ease;
          }
        }
        
        &:hover {
          .image-content {
            transform: scale(1.05);
          }
          
          .image-overlay {
            background: @hover-darken;
          }
          
          .image-caption {
            transform: translate(-50%, -60%);
            
            &::after {
              width: 80%;
            }
          }
        }
      }
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .four-images-container {
    .image-grid {
      flex-wrap: wrap;
      
      .image-item {
        flex: 0 0 calc(50% - 8px);
        margin-bottom: 15px;
        
        &:nth-child(n+3) {
          margin-bottom: 0;
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .four-images-container {
    .image-grid {
      flex-direction: column;
      
      .image-item {
        flex: 1;
        margin-bottom: 15px;
        
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>