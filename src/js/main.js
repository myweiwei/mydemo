import Vue from 'vue/dist/vue.js';
import app from './app.vue'

import '../../dist/mui/css/mui.min.css'
import '../../dist/mui/css/icons-extra.css'
import router from './route.js'
//头部
import { Header } from 'mint-ui'
// 轮播图
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name,Header);
var vm =new Vue({
    el:'#app',
    render:c=>c(app),
    router
})