console.log('ok');
import Vue from 'vue/dist/vue.js';
import app from './app.vue'
import { Header } from 'mint-ui'
import '../../dist/mui/css/mui.min.css'
Vue.component(Header.name,Header);
var vm =new Vue({
    el:'#app',
    render:c=>c(app)
})