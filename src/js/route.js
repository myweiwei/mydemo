import Vue from 'vue/dist/vue.js';
import vueRouter from 'vue-router'
import HomeContainer from '../components/HomeContainer.vue'
import ShopcarContainer from '../components/ShopcarContainer.vue'
import SearchContainer from '../components/SearchContainer.vue'
import MemeberContainer from '../components/MemberContainer.vue'
Vue.use(vueRouter);
var router=new vueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemeberContainer},
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer }
    ],
    linkActiveClass: 'mui-active'
})
export default router