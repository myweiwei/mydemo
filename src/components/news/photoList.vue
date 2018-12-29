<template>
	<div>
		<template>
			<router-link to="/home/photoinfo?id=buoumao" class='maomi'>
				<img src='../../images/buoumao.jpg'/>
				<div class='piaofu'>布偶猫，又称“布拉多尔（Ragdoll）”，发源于美国，是一种杂交品种宠物猫。是现存体型最大、体重最重的猫之一。头呈楔形，眼大而圆，被毛丰厚，四肢较长且富有肉感，尾长，身体柔软，毛色有重点色、手套色或双色等等。</div>
			</router-link>
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
	.maomi{
		position: relative;
		width:100%;
		height:200px;
		margin-bottom: 10px;
		display: inline-block;
	}
	.maomi img{
		width:100%;
		height:100%;
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
	
</style>
