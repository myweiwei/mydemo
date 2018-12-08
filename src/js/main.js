import Vue from 'vue/dist/vue.js';
import app from './app.vue'

import '../../dist/mui/css/mui.min.css'
import '../../dist/mui/css/icons-extra.css'
import router from './route.js'
//头部
import { Header } from 'mint-ui'
// 轮播图
import { Swipe, SwipeItem } from 'mint-ui';
//按钮
import { Button} from 'mint-ui';
import { Toast } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css'
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

// import VuePreview from 'vue2-preview';
// Vue.use(VuePreview)

import '../../dist/mui/js/mui.min.js'
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name,Header);
Vue.use(ElementUI);
// 图片查看器
import VuePreview from 'vue-preview';        
Vue.use(VuePreview);
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
var vm =new Vue({
    el:'#app',
    render:c=>c(app),
    router
})
Vue.filter('formateDate',function(value, type){
        
    let dataTime = "";
    let data = new Date();
    data.setTime(value);
    let year = data.getFullYear();
    let month = data.getMonth() + 1;
    let day = data.getDate();
    let hour = data.getHours();
    let minute = data.getMinutes();
    let second = data.getSeconds();
　　　　month < 10 ? (month = "0" + month) : month;
　　　　day < 10 ? (month = "0" + day) : day;
　　　　hour < 10 ? (hour = "0" + hour) : hour;
　　　　minute < 10 ? (minute = "0" + minute) : minute;
　　　　second < 10 ? (second = "0" + second) : second;
    if (type == "YMD") {
         dataTime = year + "-" + month + "-" + day;
     } else if (type == "YMDHMS") {
         dataTime =year +"-" +month +"-" +day +"  " +hour +":" +minute +":" +second;
     } else if (type == "HMS") {
         dataTime = hour + ":" + minute + ":" + second;
     } else if (type == "YM") {
         dataTime = year + "-" + month + "-";
     }
     return dataTime; // 将格式化后的字符串输出到前端显示
 })