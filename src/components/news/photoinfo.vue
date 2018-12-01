<template>
    <div class='temp'>
        <div id='buoumao'>
            <h5 class='title'>布偶猫，又称布拉多尔（Ragdoll）</h5>
            <div class='time'>
                <span>发表时间：2018-12-1 14:56:02</span>
                <span>点击：0次</span> 
            </div>
            <hr> 
            <ul class='imgList'>
                <!-- <li><img src="../../images/buoumao/buoumao1.jpg" alt=""></li>
                <li><img src="../../images/buoumao/buoumao2.jpg" alt=""></li>
                <li><img src="../../images/buoumao/buoumao3.jpg" alt=""></li>
                <li><img src="../../images/buoumao/buoumao4.jpg" alt=""></li> -->
                 <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)">   
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

        <div id='chaiquan'>
            <h5 class='title'>柴犬是体型中等并且又最古老的犬</h5>
            <div class='time'>
                <span>发表时间：2018-12-1 15:36:02</span>
                <span>点击：1次</span> 
            </div>
            <hr> 
            <ul class='imgList'>
                <li><img src="../../images/chaiquan/chaiquan1.jpg" alt=""></li>
                <li><img src="../../images/chaiquan/chaiquan2.jpg" alt=""></li>
                <li><img src="../../images/chaiquan/chaiquan3.jpg" alt=""></li>
                <li><img src="../../images/chaiquan/chaiquan4.jpg" alt=""></li>
            </ul>
            <p>
                柴犬是体型中等并且又最古老的犬。柴犬能够应付陡峭的丘陵和山脉的斜坡，拥有灵敏的感官，使得柴犬屡次成为上乘的狩猎犬。柴犬性格活泼、好动。对自己喜欢的玩具、会一天到晚的把玩。其对外有极强警惕性，能为户主看家护院。其特别是对大型同类，并且不服输。草丛中的耗子、鸟都会是它的猎物及玩具。柴犬是日本国宝，常见的赤色柴犬价格都在6000元到30000元之间。
            </p>
            <comments></comments>
        </div>
        <div id='erha'>
            <h5 class='title'>西伯利亚雪橇犬</h5>
            <div class='time'>
                <span>发表时间：2018-12-1 15:40:02</span>
                <span>点击：0次</span> 
            </div>
            <hr> 
            <ul class='imgList'>
                <li><img src="../../images/hashiqi/hashiqi1.jpg" alt=""></li>
                <li><img src="../../images/hashiqi/hashiqi2.jpg" alt=""></li>
                <li><img src="../../images/hashiqi/hashiqi3.jpg" alt=""></li>
                <li><img src="../../images/hashiqi/hashiqi4.jpg" alt=""></li>
            </ul>
            <p>
                西伯利亚雪橇犬是原始的古老犬种，在西伯利亚东北部、格陵兰南部生活。哈士奇名字的由来，是源自其独特的嘶哑声。哈士奇性格多变，有的极端胆小，也有的极端暴力，进入大陆和家庭的哈士奇，都已经没有了这种极端的性格，比较温顺，是一种流行于全球的宠物犬。与金毛犬、拉布拉多并列为三大无攻击型犬类。被世界各地广泛饲养，并在全球范围内，有大量该犬种的赛事。
            </p>
            <comments></comments>
        </div>

        <div id='chuiertu'>
            <h5 class='title'>垂耳兔</h5>
            <div class='time'>
                <span>发表时间：2018-12-1 15:53:02</span>
                <span>点击：0次</span> 
            </div>
            <hr> 
            <ul class='imgList'>
                <li><img src="../../images/chuiertu/chuiertu1.jpg" alt=""></li>
                <li><img src="../../images/chuiertu/chuiertu2.jpg" alt=""></li>
                <li><img src="../../images/chuiertu/chuiertu3.jpg" alt=""></li>
                <li><img src="../../images/chuiertu/chuiertu4.jpg" alt=""></li>
            </ul>
            <p>
                垂耳兔是20世纪70年代发现的，在1980年美国兔子繁殖者协会（ARBA）展会中，才获得公认的新品种。这类品种的兔子的耳朵下垂，从外观来看有短毛、中毛、长毛之分，脸型也有所区别。成年体重2.5kg，体长40cm左右。个体的大小、毛色，体长等与其他兔子各不相同。欧洲有多种垂耳兔，“垂耳兔”是它们的通称。
            </p>
            <comments></comments>
        </div>
        <div id='bolantu'>
            <h5 class='title'>波兰兔</h5>
            <div class='time'>
                <span>发表时间：2018-12-1 15:53:02</span>
                <span>点击：0次</span> 
            </div>
            <hr> 
            <ul class='imgList'>
                <li><img src="../../images/bolantu/bolantu1.jpg" alt=""></li>
                <li><img src="../../images/bolantu/bolantu2.jpg" alt=""></li>
                <li><img src="../../images/bolantu/bolantu3.jpg" alt=""></li>
                <li><img src="../../images/bolantu/bolantu4.jpg" alt=""></li>
            </ul>
            <p>
                体形特征 体重：小于1.6kg 是纯种兔中最娇小的，身圆头短，两只耳朵竖起及靠在一起，长度不过7.6cm，毛短及浓密。草食，比如红豆幼叶，大豆幼叶，小草幼叶，等等
            </p>
            <comments></comments>
        </div>

        <div id='huangjincangshu'>
            <h5 class='title'>黄金仓鼠</h5>
            <div class='time'>
                <span>发表时间：2018-12-1 18:10:02</span>
                <span>点击：0次</span> 
            </div>
            <hr> 
            <ul class='imgList'>
                <li><img src="../../images/huangjincangshu/huangjincangshu1.jpg" alt=""></li>
                <li><img src="../../images/huangjincangshu/huangjincangshu2.jpg" alt=""></li>
                <li><img src="../../images/huangjincangshu/huangjincangshu3.jpg" alt=""></li>
                <li><img src="../../images/huangjincangshu/huangjincangshu4.jpg" alt=""></li>
            </ul>
            <p>黄金仓鼠（学名：Mesocricetus auratus）：又名叙利亚仓鼠。在生物分类学上是中仓鼠属的中型仓鼠。和许多仓鼠一样，黄金仓鼠有一个钝的口鼻部，相对较小的眼睛，大耳朵和一条短的约1.5厘米的尾巴。毛发金黄，背部中央颜色较深，耳朵下方可见黑色条纹，有些前额上可能有一片黑色的部分，面部两侧各有一条黑色条纹从颊囊延伸到脖子上。 [1] 温带陆生夜行性杂食性动物，以作物和昆虫为食，主要存在于一年生作物的可耕地中。野生寿命平均1~2年，圈养寿命平均2~4年。
            </p>
            <comments></comments>
        </div>
        <div id='naichacangshu'>
            <h5 class='title'>奶茶仓鼠</h5>
            <div class='time'>
                <span>发表时间：2018-12-1 18:12:02</span>
                <span>点击：0次</span> 
            </div>
            <hr> 
            <ul class='imgList'>
                <li><img src="../../images/naichacangshu/naichacangshu1.jpg" alt=""></li>
                <li><img src="../../images/naichacangshu/naichacangshu2.jpg" alt=""></li>
                <li><img src="../../images/naichacangshu/naichacangshu3.jpg" alt=""></li>
                <li><img src="../../images/naichacangshu/naichacangshu4.jpg" alt=""></li>

            </ul>
            <p>
               奶茶仓鼠（Milk Tea Hamster，是加卡利亚仓鼠的一种） 奶茶仓鼠的毛色为浅灰色，正如我们日常所饮的珍珠奶茶色，整体色泽比较均匀，背线为稍深的灰色线，不是很明显，也有部分奶茶不显背线（有鼠友称此为极品奶茶）。
            </p>
            <comments></comments>
        </div>

        <div id='huameiniao'>
            <h5 class='title'>画眉鸟</h5>
            <div class='time'>
                <span>发表时间：2018-12-1 18:27:02</span>
                <span>点击：0次</span> 
            </div>
            <hr> 
            <ul class='imgList'>
                <li><img src="../../images/huameiniao/huameiniao1.jpg" alt=""></li>
                <li><img src="../../images/huameiniao/huameiniao2.jpg" alt=""></li>
                <li><img src="../../images/huameiniao/huameiniao3.jpg" alt=""></li>
                <li><img src="../../images/huameiniao/huameiniao4.jpg" alt=""></li>
            </ul>
            <p>画眉鸟（学名：Garrulax canorus）是雀形目画眉科的鸟类。全长约23厘米。全身大部棕褐色。头顶至上背具黑褐色的纵纹，眼圈白色并向后延伸成狭窄的眉纹。栖息于山丘的灌丛和村落附近的灌丛或竹林中，机敏而胆怯，常在林下的草丛中觅食，不善作远距离飞翔。雄鸟在繁殖期常单独藏匿在杂草及树枝间极善鸣啭，声音十分洪亮，歌声悠扬婉转，非常动听，是有名的笼鸟。杂食性，主要取食昆虫，特别在繁殖季节嗜食昆虫；兼食草籽、野果。
            </p>
            <comments></comments>
        </div>
        <div id='yunque'>
            <h5 class='title'>云雀</h5>
            <div class='time'>
                <span>发表时间：2018-12-1 18:30:02</span>
                <span>点击：0次</span> 
            </div>
            <hr> 
            <ul class='imgList'>
                <li><img src="../../images/yunque/yunque1.jpg" alt=""></li>
                <li><img src="../../images/yunque/yunque2.jpg" alt=""></li>
                <li><img src="../../images/yunque/yunque3.jpg" alt=""></li>
                <li><img src="../../images/yunque/yunque4.jpg" alt=""></li>

            </ul>
            <p>
               云雀（学名：Alauda arvensis）小型鸣禽，体型及羽色略似麻雀，雄性和雌性的相貌相似。背部花褐色和浅黄色，胸腹部白色至深棕色。外尾羽白色，尾巴棕色。后脑勺具羽冠，适应于地栖生活，腿、脚强健有力，后趾具1长而直的爪；跗跖后缘具盾状鳞；以植物种子、昆虫等为食，常集群活动；繁殖期雄鸟鸣啭洪亮动听，是鸣禽中少数能在飞行中歌唱的鸟类之一。求偶炫耀飞行复杂，能“悬停”于空中；在地面以草茎、根编碗状巢，每窝产卵3-5枚，孵化期10-12天。生活在草原、荒漠、半荒漠等地。云雀是丹麦、法国的国鸟。
            </p>
            <comments></comments>
            
        </div>
        
    </div>

</template>
<script>
import $ from 'jquery';
import comments from '../subcomponents/comment.vue';
    export default{
        data(){
            return{
                list:[]
            }
        },
        mounted(){
            var show=this.$route.query.id;
            $('#'+show).show();
            $('#show').siblings().hide();
            this.list=[
                {src: 'http://localhost:8080/src/images/buoumao/buoumao1.jpg'},
                {src: 'http://localhost:8080/src/images/buoumao/buoumao2.jpg'},
                {src: 'http://localhost:8080/src/images/buoumao/buoumao3.jpg'}
            ]
            for(var i=0;i<this.list.length;i++){
                this.list[i].w=600;
                this.list[i].h=400;
                this.list[i].msrc=this.list[i].src;
            }
            console.log(this.list);
        },
        components:{
            comments
        }
    }

</script>
<style scoped>
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
    .imgList{
        margin-top:5px;
        width:100%;
        height: 175px;
        clear: both;
        padding:0;
    }
    .imgList li{
        list-style: none;
        float: left;
        padding:5px;
    }
    .imgList img{
        width:80px;
        height:80px;
    }
    p{
        color: #000;
        font-size: 12px;
    }
</style>