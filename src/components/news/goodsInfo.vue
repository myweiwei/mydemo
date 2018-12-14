<template>
	<div>
		<transition 
		@before-enter='beforeEnter'
		@enter='enter'
		@after-enter='afterEnter'
		>
			<div class='ball' v-show='showFlag'></div>
		</transition>
		
    	<div class="mui-content">
			<div class="mui-card">
				<lunbotu></lunbotu>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">待售种公种母宠物猫带正规证书包纯种血统</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<span>市场价<del>￥2500</del></span>
						<span>销售价<span style='color:red'>￥2300</span></span>
						<br><br>
						<div class="form-group">
							<label for="count" style='float:left'>购买数量:</label>
							<div class="mui-numbox">
								<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
								<input class="mui-input-numbox" type="number" id='count' value='1'/>
								<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
							</div>
							<!-- <input type="number" onkeyup="this.value=this.value.replace(/\D/g,'')" class="form-control" id="count" placeholder="请输入数量"> -->
						</div>
					</div>
				</div>
				<div class="mui-card-footer">
					<mt-button type="primary" size='normal' style='font-size:15px;' @click='buy()'>立即购买</mt-button>
					<mt-button type="danger" size='normal' style='font-size:15px;' @click='addCar()'>加入购物车</mt-button>
					
				</div>
			</div>
			
		</div>
	</div>
</template>
<script>
	import lunbotu from '../news/lunbotu.vue'
	import { Toast } from 'mint-ui';
	import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
	import mui from '../../../dist/mui/js/mui.min.js'
	
	export default{
		data(){
			return {
				showFlag:false,
				
			}
		},
		created(){
				
		},
		methods:{
			buy:function(){
				Toast('买买买');
			},
			addCar:function(){
				// Toast({
				// 	message: '操作成功',
				// 	iconClass: 'glyphicon glyphicon-ok'
				// });
				this.showFlag=!this.showFlag;
				
				var count1=document.getElementById('count').value;
				//this.$emit('count',count1);
				this.$store.commit('addCar',count1);
			},
			beforeEnter:function(el){
				
				el.style.transform='translate(0,0)';
			},
			enter:function(el,done){
				el.offsetWidth;
				var rectObject = el.getBoundingClientRect();
				var rectObject1 = document.getElementById('badge').getBoundingClientRect();
				var x=rectObject1.x-rectObject.x;
				var y=rectObject1.y-rectObject.y;
				el.style.transform='translate('+x+'px,'+y+'px)';
				el.style.transition='all 0.5s';
				done();
			},
			afterEnter:function(){
				this.showFlag=!this.showFlag;
			}
		},
		mounted(){
			mui('.mui-numbox').numbox();
		},
		components:{
			lunbotu:lunbotu
		}
	}
</script>
<style scoped>
	html,body{
	height:100%;
		overflow: hidden;
	}
	.form-group{
		align-items: center;
    	display: flex;
	}   
	.mui-card-footer, .mui-card-header{
		justify-content: space-around;
	}
	.ball{
		width:15px;
		height: 15px;
		border-radius: 50%;
		background: red;
		position:absolute;
		top:398px;
		left:138px;
		z-index: 100;
		/* transform:translate(65px,127px); */
		
	}
</style>