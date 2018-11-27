import Vue from 'vue/dist/vue.js';
import vueRouter from 'vue-router'
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import ShopcarContainer from '../components/tabbar/ShopcarContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import MemeberContainer from '../components/tabbar/MemberContainer.vue'
import newsList from '../components/news/newsList.vue'
import newsInfo from '../components/news/newsInfo.vue'
Vue.use(vueRouter);
var router=new vueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemeberContainer},
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer },
        { path: '/home/newsList', component: newsList },
        { path:'/home/newsInfo/',component:newsInfo}
    ],
    linkActiveClass: 'mui-active'
})
export default router