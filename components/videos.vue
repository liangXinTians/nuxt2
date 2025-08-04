<template>
    <div class="indexk3" style="background:url();">
        <div class="indexk44">
            <ul>
                <li v-for="(video, index) in videoList" :key="index">
                    <video 
                        src="" 
                        controls="controls" 
                        :poster="video.poster" 
                        class="video-item"
                    ></video>
                    <p class="xianzhi1">{{ video.title }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoGallery',
    data() {
        return {
            videoList: [
                {
                    poster: require('@/assets/images/yifuyun/7.png'),
                    title: 'Factory penis【S206-2】with belt sex toys dildo huge shop vibrating dildos vibrator for women'
                },
                {
                    poster: require('@/assets/images/yifuyun/7.png'),
                    title: 'Banana Adult Penty Vibrator【S-219】Sex Toy Women Silicone G Spot Vibrator Penis Ring'
                },
                {
                    poster: require('@/assets/images/yifuyun/7.png'),
                    title: 'Factory penis with belt【S-305】sex toys dildo huge dildos vibrator for women'
                }
            ],
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
    padding: 40px 0 30px;

    .slideBox {
        width: 1000px;
        height: 600px;
        position: relative;
        margin: 0 auto;

        .hd {
            height: 15px;
            overflow: hidden;
            position: absolute;
            right: 5px;
            bottom: 5px;
            z-index: 1;

            ul {
                overflow: hidden;
                zoom: 1;
                float: left;

                li {
                    float: left;
                    margin-right: 2px;
                    width: 15px;
                    height: 15px;
                    line-height: 14px;
                    text-align: center;
                    background: #fff;
                    cursor: pointer;

                    &.on {
                        background: #f00;
                        color: #fff;
                    }
                }
            }
        }

        .bd {
            position: relative;
            height: 100%;
            z-index: 0;

            li {
                zoom: 1;
                vertical-align: middle;
            }

            img {
                width: 1000px;
                height: 600px;
                display: block;
            }
        }

        .prev, .next {
            position: absolute;
            top: 30%;
            margin-top: -25px;
            display: block;
            width: 100px;
            height: 203px;
            filter: alpha(opacity=50);
            opacity: 0.5;

            &:hover {
                filter: alpha(opacity=100);
                opacity: 1;
            }
        }

        .prev {
            left: -20%;
        }

        .next {
            right: -20%;
        }

        .prevStop, .nextStop {
            display: none;
        }
    }
}

.indexk44 {
    width: 100%;
    margin: 0 auto;
    height: auto;
    overflow: hidden;

    ul {
        li {
            width: 32.3%;
            margin: 0 0.5%;
            float: left;
            margin-bottom: 1rem;
            background: #fff;
            overflow: hidden;
            position: relative;

            .video-item {
                object-fit: fill;
                width: 100%;
                display: block;
                float: left;
            }

            img {
                max-width: 100%;
                margin: 0 auto;
                display: block;
                transform: scale(1);
                transition: all 0.5s ease 0s;
                -webkit-transform: scale(1);
                -webkit-transform: all 0.5s ease 0s;

                &:hover {
                    transform: scale(1.1);
                    transition: all 0.5s ease 0s;
                    -webkit-transform: scale(1.1);
                    -webkit-transform: all 0.5s ease 0s;
                }
            }

            p {
                color: #fff;
                text-align: center;
                position: relative;
                z-index: 990;
                line-height: 25px;
                padding: 5px;
                background: #773369;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-bottom: 0 !important;
            }
        }
    }
}
</style>