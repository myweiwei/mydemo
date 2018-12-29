<template>
    <div class='temp'>
        <div id='buoumao'>
            <h5 class='title'>布偶猫，又称布拉多尔（Ragdoll）</h5>
            <div class='time'>
                <span>发表时间：2018-12-1 14:56:02</span>
                <span>点击：0次</span> 
            </div>
            <hr> 
            <ul class='imgList1'>
                 <li><vue-preview :slides='buoulist' ></vue-preview> </li>  
            </ul>
           
            <p>
                布偶猫，又称“布拉多尔（Ragdoll）”，发源于美国，是一种杂交品种宠物猫。是现存体型最大、体重最重的猫之一。头呈楔形，眼大而圆，被毛丰厚，四肢较长且富有肉感，尾长，身体柔软，毛色有重点色、手套色或双色等等。布偶猫较为温顺好静，对人友善。其美丽优雅又非常类似于狗的性格（Puppy cat）而又被称为"仙女猫"，"小狗猫"。特殊的外貌和温和的性格是布偶猫最大的特点之一。
            </p>
            <comments></comments>
        </div>
        <div id='duanmaomao'>
            <h5 class='title'>英国短毛猫</h5>
            <div class='time'>
                <span>发表时间：2018-12-1 15:32:02</span>
                <span>点击：1次</span> 
            </div>
            <hr> 
            <ul class='imgList'>
                <li><img src="../../images/duanmaomao/duanmaomao1.jpg" alt=""></li>
                <li><img src="../../images/duanmaomao/duanmaomao2.jpg" alt=""></li>
                <li><img src="../../images/duanmaomao/duanmaomao3.jpg" alt=""></li>
                <li><img src="../../images/duanmaomao/duanmaomao4.jpg" alt=""></li>
            </ul>
            <p>
                英国短毛猫，体形圆胖，四肢粗短发达，毛短而密，头大脸圆，温柔平静，对人友善，极易饲养。大而圆的眼睛根据被毛不同而呈现各种颜色。作为一个古老的猫品种，其历史可追溯至古罗马时期的家猫，由于拥有悠久的育种历史，可以称得上是猫家族中的典范。英国短毛猫除了拥有固定而聚，代表性的遗传特征之外，又具有丰富的变异性，如背毛色眼睛颜色等。更重要的是，有了广泛的配种历史后，这种猫拥有了更健康的身体和更温驯的性格。
            </p>
            <comments></comments>
        </div>

       
        
    </div>

</template>
<script>
import $ from 'jquery';
import comments from '../subcomponents/comment.vue';
import '../../css/global.css'
    export default{
        data(){
            return{
                buoulist:[],
                duanmaolist:[]
            }
        },
        mounted(){
            var show=this.$route.query.id;
            $('#'+show).show();
            $('#show').siblings().hide();
            this.buoulist=[
                {src: '../../src/images/buoumao/buoumao1.jpg'},
                {src: '../../src/images/buoumao/buoumao2.jpg'},
                {src: '../../src/images/buoumao/buoumao3.jpg'},
                {src: '../../src/images/buoumao/buoumao4.jpg'}
            ]
            for(var i=0;i<this.buoulist.length;i++){
                this.buoulist[i].w=600;
                this.buoulist[i].h=400;
                this.buoulist[i].msrc=this.buoulist[i].src;
            }
            
          
        },
        components:{
            comments
        }
    }

</script>
<style>
    .temp>div{
        display: none;
        padding:5px 10px;

    }
    .title{
        text-align: center;
        width:100%;
        display: inline-block;
        color:#12a4ff;
        font-family:'宋体';
        font-weight: bold;
        padding:5px 0;
    }
    .time{
        display: flex;
        justify-content:space-between;
        font-size: 12px;
        color:#a7a7ac;
        
    }
    hr{
       background:#cfcfcf;
       padding:0;
    }
    .imgList,.imgList1{
        margin-top:5px;
        width:100%;
        clear: both;
        padding:0;
    }
    .imgList{
        height:200px;
    }
    .imgList1 li{
        list-style: none;
        padding:20px;
    }
    .imgList li{
        list-style: none;
        padding:5px;
        float: left;
    }
    .imgList img,.imgList1 img{
        width:80px;
        height:80px;
    }
    p{
        color: #000;
        font-size: 12px;
    }
    figure{
        display: inline;
        margin:0;
    }
</style>