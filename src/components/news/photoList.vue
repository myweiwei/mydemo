<template>
	<div>
		<template>
			<el-tabs v-model="activeName" @tab-click="handleClick" >
				<el-tab-pane label="猫咪" name="first">
					<router-link to="/home/photoinfo?id=buoumao" class='maomi'>
						<img src='../../images/buoumao.jpg'/>
						<div class='piaofu'>布偶猫，又称“布拉多尔（Ragdoll）”，发源于美国，是一种杂交品种宠物猫。是现存体型最大、体重最重的猫之一。头呈楔形，眼大而圆，被毛丰厚，四肢较长且富有肉感，尾长，身体柔软，毛色有重点色、手套色或双色等等。</div>
					</router-link>
					<router-link to="/home/photoinfo?id=duanmaomao" class='maomi'>
						<img src='../../images/duanmaomao.jpg'/>
						<div class='piaofu'>英国短毛猫，体形圆胖，四肢粗短发达，毛短而密，头大脸圆，温柔平静，对人友善，极易饲养。大而圆的眼睛根据被毛不同而呈现各种颜色。</div>
					</router-link>
				</el-tab-pane>
				<el-tab-pane label="狗狗" name="second">
					<router-link to="/home/photoinfo?id=chaiquan" class='maomi'>
						<img src='../../images/chaiquan.jpg'/>
						<div class='piaofu'>柴犬是体型中等并且又最古老的犬。柴犬能够应付陡峭的丘陵和山脉的斜坡，拥有灵敏的感官，使得柴犬屡次成为上乘的狩猎犬。柴犬性格活泼、好动。对自己喜欢的玩具、会一天到晚的把玩。</div>
					</router-link>
					<router-link to="/home/photoinfo?id=erha" class='maomi'>
						<img src='../../images/erha.jpg'/>
						<div class='piaofu'>西伯利亚雪橇犬是原始的古老犬种，在西伯利亚东北部、格陵兰南部生活。哈士奇名字的由来，是源自其独特的嘶哑声。哈士奇性格多变，有的极端胆小，也有的极端暴力，进入大陆和家庭的哈士奇，都已经没有了这种极端的性格，比较温顺，是一种流行于全球的宠物犬。</div>
					</router-link>
				</el-tab-pane>
				<el-tab-pane label="兔子" name="third">
					<router-link to="/home/photoinfo?id=chuiertu" class='maomi'>
						<img src='../../images/chuiertu.jpg'/>
						<div class='piaofu'>天生性情温驯，毛色有纯色、刺鼠色 、杂色、 铜铁色、橙色宽条纹等。 荷兰垂耳兔的体重大约2～2.5公斤，最恰当的体重大约是1.4公斤。爱干燥，胆小怕惊，喜欢安静，耐寒怕热，昼伏夜行，喜欢穴居，同性好斗。</div>
					</router-link>
					<router-link to="/home/photoinfo?id=bolantu" class='maomi'>
						<img src='../../images/bolantu.jpg'/>
						<div class='piaofu'>体形特征 体重：小于1.6kg 是纯种兔中最娇小的，身圆头短，两只耳朵竖起及靠在一起，长度不过7.6cm，毛短及浓密。
草食，比如红豆幼叶，大豆幼叶，小草幼叶，等等</div>
					</router-link>
				</el-tab-pane>
				<el-tab-pane label="仓鼠类" name="fourth">
					<router-link to="/home/photoinfo?id=huangjincangshu" class='maomi'>
						<img src='../../images/huangjincangshu.jpg'/>
						<div class='piaofu'>黄金仓鼠是中型仓鼠，成年质量从100~125g不等。体长（从鼻子到尾根）120-165mm，尾长13-15mm，后足长19mm，耳长21-22mm，它们明显小于东欧和西亚的普通仓鼠（Cricetus cricetus），比中国和蒙古的罗伯罗夫斯基沙漠仓鼠大。</div>
					</router-link>
					<router-link to="/home/photoinfo?id=naichacangshu" class='maomi'>
						<img src='../../images/naichacangshu.jpg'/>
						<div class='piaofu'>奶茶仓鼠（Milk Tea Hamster，是加卡利亚仓鼠的一种） 奶茶仓鼠的毛色为浅灰色，正如我们日常所饮的珍珠奶茶色，整体色泽比较均匀，背线为稍深的灰色线，不是很明显，也有部分奶茶不显背线（有鼠友称此为极品奶茶）。</div>
					</router-link>
				</el-tab-pane>
				<el-tab-pane label="鸟类" name="fifth">
					<router-link to="/home/photoinfo?id=huameiniao" class='maomi'>
						<img src='../../images/huameiniao.jpg'/>
						<div class='piaofu'>画眉鸟（学名：Garrulax canorus）是雀形目画眉科的鸟类。全长约23厘米。全身大部棕褐色。头顶至上背具黑褐色的纵纹，眼圈白色并向后延伸成狭窄的眉纹。</div>
					</router-link>
					<router-link to="/home/photoinfo?id=yunque" class='maomi'>
						<img src='../../images/yunque.jpg'/>
						<div class='piaofu'>云雀（学名：Alauda arvensis）小型鸣禽，体型及羽色略似麻雀，雄性和雌性的相貌相似。背部花褐色和浅黄色，胸腹部白色至深棕色。外尾羽白色，尾巴棕色。</div>
					</router-link>
				</el-tab-pane>
			</el-tabs>
		</template>
	</div>
  
</template>
<script>
export default{
    data(){
        return {
		
        activeName: 'second'
      
        }
	},
	mounted(){
		
	},
    methods:{
        handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
   
</script>
<style scoped>
    .el-tab-pane img{
		width: 100%;
		height:100%;
	}
	.maomi{
		position: relative;
		width:100%;
		height:200px;
		margin-bottom: 10px;
		display: inline-block;
	}
	.piaofu{
		position:absolute;
		/* display: inline-block; */
		width:100%;
		padding:5px;
		bottom:0;
		left:0;
		background: rgba(0,0,0,0.6);
		color:#fff;
		font-size: 12px;
		max-height: 80px;
		overflow-y: auto;
		
	}
	.el-tabs__item{
		padding:0 5px;
	}
	
</style>
