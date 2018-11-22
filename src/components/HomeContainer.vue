<template>
    <div>
        <mt-swipe :auto="4000" class='swipe'>
            <mt-swipe-item class='swipe-item'>1</mt-swipe-item>
            <mt-swipe-item class='swipe-item'>2</mt-swipe-item>
            <mt-swipe-item class='swipe-item'>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<style  scoped>
    .swipe{
        height:200px;
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