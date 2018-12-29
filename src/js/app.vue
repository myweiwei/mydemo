<template>
    <div class='app-container'>
        <!-- 头部 -->
        <!-- <mt-header title="My Project" fixed>
           <mt-button icon="back">返回</mt-button>
        </mt-header> -->
        <mt-header title="My Project" fixed>
        <span slot="left" id='houtui'>
            <mt-button icon="back" @click='goback()'>返回</mt-button>
        </span>
       
        </mt-header>
        <transition>
            <router-view @count='getCount'></router-view>
        </transition>
        <!-- 底部 -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class='mui-tab-item1' to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class='mui-tab-item1' to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class='mui-tab-item1' to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id='badge' >{{$store.state.carcount}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class='mui-tab-item1' to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
		</nav>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {
                count:0
            }
        },
        mounted(){
            document.getElementById('houtui').style.display='none';
        },
        methods:{
            goback:function(){
                this.$router.go(-1);
            },
            getCount:function(data){
                this.count+=parseInt(data);
            }
        } ,
        watch:{
            '$route.path':function(newVal){
               if(newVal==='/home'){
                   document.getElementById('houtui').style.display='none';
               }
               else{
                   document.getElementById('houtui').style.display='block';
               }
            }
        }
    }
</script>
<style scoped>
    .mint-header.is-fixed{
        z-index: 5;
    }
    .app-container{
        padding-top: 40px;
        overflow-x: hidden;
        padding-bottom: 50px;
    }
    h1{
        padding:0;margin:0!important;
    }
    .v-enter{
        transform:translateX(100%);
        opacity:0
    }
    .v-leave-to{
        transform:translateX(-100%);
        position: absolute;
        /* 防止动画时向下飘 */
    }
    .v-enter-active,.v-leave-active{
        transition: all 0.5s ease;
    }

    /* 改类名，解决由于muijs,tabbar无法切换问题 */
    .mui-bar-tab .mui-tab-item1{
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item1 .mui-icon{
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label{
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .mui-bar-tab .mui-tab-item1.mui-active{
        color:#007aff;
    }
</style>