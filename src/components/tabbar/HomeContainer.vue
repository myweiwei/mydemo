<template>
    <div>
        
        <!-- 轮播图区域 -->
        <!-- <mt-swipe :auto="4000" class='swipe'>
            <mt-swipe-item class='swipe-item'><img src="../../images/miao.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item class='swipe-item'><img src="../../images/miao1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item class='swipe-item'><img src="../../images/miao2.jpg" alt=""></mt-swipe-item>
        </mt-swipe> -->
        <lunbotu></lunbotu>
        <!-- 六宫格区域 -->
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newsList">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/photoList">
		                    <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/goodsList">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
		</div>
    </div>
    
</template>
<script>
    import lunbotu from '../news/lunbotu.vue'
    export default{
        data(){
            return {

            }
        },
        methods:{
           
        },
        components:{
            lunbotu:lunbotu
        }
    }
</script>
<style  scoped>
    
    .mui-grid-view.mui-grid-9{
        border:none;
        background: #fff;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:none;
    }
    .mui-content>.mui-table-view:first-child{
        margin-top: 0;
    }
    .mui-table-view-cell img{
        width:50px;
        height: 50px;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size: 13px;
    }
    a{
        cursor: pointer;
    }
    
</style>