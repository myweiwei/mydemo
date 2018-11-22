console.log('ok');
import Vue from 'vue/dist/vue.js';
import app from './app.vue'
import { Header } from 'mint-ui'
import '../../dist/mui/css/mui.min.css'
import '../../dist/mui/css/icons-extra.css'
import router from './route.js'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name,Header);
var vm =new Vue({
    el:'#app',
    render:c=>c(app),
    router
})