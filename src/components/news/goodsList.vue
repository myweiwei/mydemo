<template>
    <div class="container">
        <div class='list'>
            <router-link to="/home/goodsInfo">
                <img src="../../images/buoumao.jpg" alt="">
                <span class='money'><span style='font-size:15px;'>￥</span>4499</span>
                <div class='info'>家养纯种英短蓝猫宠物猫咪活体渐层美短银虎斑萌宠可爱喵喵</div>
                <div><a href="#" class='shop'>喵喵旗舰店</a></div>
            </router-link>
        </div>
        <div class='list'>
            <img src="../../images/buoumao.jpg" alt="">
            <span class='money'><span style='font-size:15px;'>￥</span>4499</span>
            <div class='info'>家养纯种英短蓝猫宠物猫咪活体渐层美短银虎斑萌宠可爱喵喵</div>
            <div><a href="#" class='shop'>喵喵旗舰店</a></div>
        </div>
        <div class='list'>
            <img src="../../images/buoumao.jpg" alt="">
            <span class='money'><span style='font-size:15px;'>￥</span>4499</span>
            <div class='info'>家养纯种英短蓝猫宠物猫咪活体渐层美短银虎斑萌宠可爱喵喵</div>
            <div><a href="#" class='shop'>喵喵旗舰店</a></div>
        </div>
        
        <div class='list'>
            <img src="../../images/buoumao.jpg" alt="">
            <span class='money'><span style='font-size:15px;'>￥</span>4499</span>
            <div class='info'>家养纯种英短蓝猫宠物猫咪活体渐层美短银虎斑萌宠可爱喵喵</div>
            <div><a href="#" class='shop'>喵喵旗舰店</a></div>
        </div>
        <div class='list'>
            <img src="../../images/buoumao.jpg" alt="">
            <span class='money'><span style='font-size:15px;'>￥</span>4499</span>
            <div class='info'>家养纯种英短蓝猫宠物猫咪活体渐层美短银虎斑萌宠可爱喵喵</div>
            <div><a href="#" class='shop'>喵喵旗舰店</a></div>
        </div>
       
    </div>
</template>
<style scoped>
    .container{
        display: flex;
        flex-wrap:wrap;
        padding:5px;
    }
    .container .list {
        border:1px solid #dad5d5;
        box-shadow: 0 0 3px #dad5d5;
        height:200px;
        width:49%;
        padding:5px;
        margin:1px;
        
    }
    
    .container .list img{
        width:95%;
        height:60%;
        display:block;
        margin:0px auto;
       
    }
    .list .info{
        font-size: 12px;
        line-height:12px;
        color:#000; 

    }
    .list .shop{
        text-decoration: underline;
        color:#999;
        font-size: 12px;
    }
    .list .money{
        color:#ff0036;
        font-size: 17px;
        font-weight: 400;
        width:100%;
    }
</style>