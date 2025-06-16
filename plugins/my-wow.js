import Vue from 'vue';

import "wowjs/css/libs/animate.css"
import { WOW } from "wowjs";

window.WOW = WOW
Vue.prototype.$wow = new WOW()

/**
 *
 *data-wow-duration: Change the animation duration  //持续时间
 *data-wow-delay: Delay before the animation starts //延迟时间
 *data-wow-offset: Distance to start the animation (related to the browser bottom) //开始位置
 *data-wow-iteration: Number of times the animation is repeated //重复次数
 */
