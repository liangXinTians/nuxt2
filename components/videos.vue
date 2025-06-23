<template>

<div class="indexk3"
                            style="background:url();">
                            <!-- <div class="biaoti bai">S-HANDE Video
                                <div class="biaoti2"></div>
                                <a href=""
                                    class="more3">More</a>
                            </div> -->
                            <div class="indexk44">
                                <ul>
                                    <li><video
                                            src=""
                                            controls="controls"
                                            poster="@/assets/images/yifuyun/7.png"
                                            style="object-fit:fill; width: 100%;display: block;
    float: left;"></video>
                                        <p class="xianzhi1">Factory
                                            penis【S206-2】with belt sex toys
                                            dildo huge shop vibrating dildos
                                            vibrator for women</p>
                                    </li>
                                    <li><video
                                            src=""
                                            controls="controls"
                                            poster="@/assets/images/yifuyun/7.png"
                                            style="object-fit:fill; width: 100%;display: block;
    float: left;"></video>
                                        <p class="xianzhi1">Banana Adult Penty
                                            Vibrator【S-219】Sex Toy Women
                                            Silicone G Spot Vibrator Penis
                                            Ring</p>
                                    </li>
                                    <li><video
                                            src=""
                                            controls="controls"
                                            poster="@/assets/images/yifuyun/7.png"
                                            style="object-fit:fill; width: 100%;display: block;
    float: left;"></video>
                                        <p class="xianzhi1">Factory penis with
                                            belt【S-305】sex toys dildo huge
                                            dildos vibrator for women</p>
                                    </li>

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
.indexk3 {
    background: url(https://www.sexhande.com/template/en/pic/title.png);
    background-size: cover;
    width: 100%;
    margin: 0 auto;
    height: auto;
    padding-bottom: 30px;
    padding-top: 40px;
}

.indexk3 .slideBox {
    width: 1000px;
    height: 600px;
    position: relative;
    margin: 0 auto;
}

.indexk3 .slideBox .hd {
    height: 15px;
    overflow: hidden;
    position: absolute;
    right: 5px;
    bottom: 5px;
    z-index: 1;
}

.indexk3 .slideBox .hd ul {
    overflow: hidden;
    zoom: 1;
    float: left;
}

.indexk3 .slideBox .hd ul li {
    float: left;
    margin-right: 2px;
    width: 15px;
    height: 15px;
    line-height: 14px;
    text-align: center;
    background: #fff;
    cursor: pointer;
}

.indexk3 .slideBox .hd ul li.on {
    background: #f00;
    color: #fff;
}

.indexk3 .slideBox .bd {
    position: relative;
    height: 100%;
    z-index: 0;
}

.indexk3 .slideBox .bd li {
    zoom: 1;
    vertical-align: middle;
}

.indexk3 .slideBox .bd img {
    width: 1000px;
    height: 600px;
    display: block;
}

.indexk3 .slideBox .prev {
    position: absolute;
    left: -20%;
    top: 30%;
    margin-top: -25px;
    display: block;
    width: 100px;
    height: 203px;
    // background: url(../images/l1.png) no-repeat;
    filter: alpha(opacity=50);
    opacity: 0.5;
}

.indexk3 .slideBox .next {
    position: absolute;
    right: -20%;
    top: 30%;
    margin-top: -25px;
    display: block;
    width: 100px;
    height: 203px;
    // background: url(../images/l2.png) no-repeat;
    filter: alpha(opacity=50);
    opacity: 0.5;
}

.indexk3 .slideBox .prev:hover,
.indexk3 .slideBox .next:hover {
    filter: alpha(opacity=100);
    opacity: 1;
}

.indexk3 .slideBox .prevStop {
    display: none;
}

.indexk3 .slideBox .nextStop {
    display: none;
}

.indexk44 {
    width: 100%;
    margin: 0 auto;
    height: auto;
    overflow: hidden;
}

.indexk44 ul li {
    width: 32.3%;
    margin: 0 0.5%;
    float: left;
    margin-bottom: 1rem;
    background: #fff;
    overflow: hidden;
    position: relative;
}

.indexk44 ul li img {
    max-width: 100%;
    margin: 0 auto;
    display: block;
    transform: scale(1);
    transition: all 0.5s ease 0s;
    -webkit-transform: scale(1);
    -webkit-transform: all 0.5s ease 0s;
}

.indexk44 ul li p {
    color: #fff;
    text-align: center;
    position: relative;
    z-index: 990;
    line-height: 25px;
    padding: 5px 5px;
    background: #773369;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.indexk44 ul li:hover img {
    transform: scale(1.1);
    transition: all 0.5s ease 0s;
    -webkit-transform: scale(1.1);
    -webkit-transform: all 0.5s ease 0s;
}
.xianzhi1{
  margin-bottom: 0 !important;
}
</style>