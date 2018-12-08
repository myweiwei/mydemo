<template>
    <mt-swipe :auto="4000" class='swipe'>
        <mt-swipe-item class='swipe-item'><img src="../../images/miao.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item class='swipe-item'><img src="../../images/miao1.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item class='swipe-item'><img src="../../images/miao2.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
</template>
<style scoped>
    .swipe{
        height:200px;
    }
    .swipe-item img{
        width:100%;
        height:100%
    }
    .swipe-item:nth-child(1){
        background: red;
    }
    .swipe-item:nth-child(2){
        background: blue;
    }
    .swipe-item:nth-child(3){
        background: yellow;
    }
</style>