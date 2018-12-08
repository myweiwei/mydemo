<template>
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
			
			<div class="mui-card">
				<div class="mui-card-header">详细信息</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>Posted on Nov 6, 2018</p>
						<p style="color: #333;">1.我们的猫咪均使用进口的疫苗及驱虫保证每只猫咪都很健康 2.我们的种猫都是从各国引进的纯种名猫后代 3.我们猫舍有非常干净，居住在干净的别墅，有猫咪玩耍区，各种爬架，猫别墅。 4.我们有专业的医师团队，专业负责整个猫舍的幼猫疫苗和疾病治疗 5.出售的幼猫接到家之后有任何问题，包退换。 6.支持接到猫咪到就近医院做血液检测，如不纯种，全额退款！！！ 7.购买本猫舍的猫咪，都会给您发送一份猫咪饲养注意事项，方便您饲养猫咪！</p>
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

			}
		},
		created(){
				
		},
		methods:{
			buy:function(){
				Toast('买买买');
			},
			addCar:function(){
				Toast({
					message: '操作成功',
					iconClass: 'glyphicon glyphicon-ok'
				});
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
	.form-group{
		align-items: center;
    	display: flex;
	}   
	.mui-card-footer, .mui-card-header{
		justify-content: space-around;
	}
</style>