<template>
    <div>
        <div class="mui-card">
			
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class='container' >
                        <div><img src="../../images/buoumao.jpg" alt=""></div>
                        <div style='margin-left:2%'>
                            <span class=''>待售种公种母宠物猫带正规证书包纯种血统</span>
                            <span class='danjia'>￥<span v-text='$store.state.danjia'></span></span>
                            <div class="mui-numbox" >
								<button class="mui-btn mui-btn-numbox-minus" type="button"  @click='del()'>-</button>
								<input class="mui-input-numbox" type="number" id='count' value='0'/>
								<button class="mui-btn mui-btn-numbox-plus" type="button" @click='add()'>+</button>
							</div>
                        </div>
                    </div>
				</div>
			</div>
			
		</div>
        <div class="mui-card">
			<div class="mui-card-header">总计</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class='zongji'>已勾选商品<span class='count' v-text='$store.state.carcount'></span>件，总计<span class='money' v-text='$store.getters.zongjia'></span>元</div>
                    <!-- <input type="text" v-model='$store.state.carcount'> -->
                </div>
			</div>
		</div>
    </div>
</template>
<script>
import mui from '../../../dist/mui/js/mui.min.js'
    export default({
        data(){
            return {

            }
        },
        mounted(){
            mui('.mui-numbox').numbox();
            mui('.mui-numbox').numbox().setValue(this.$store.state.carcount);
            console.log(this.$store.state.carcount);
        },
        created(){
            //mui('.mui-numbox').numbox().setValue(this.$store.state.carcount);
        },
        methods:{
            
            add:function(){
                this.$store.commit('addCar',0);
            },
            del:function(){
                this.$store.commit('delCar');
            }

        }

    })
</script>
<style scoped>
    .container{
        display: flex;
        justify-content:space-around;
    }
    .container img{
        width:90px;
        height:90px;
    }
    .container span{
        font-size:12px;
        font-weight: bold;
    }
    .zongji{
        font-size:12px;
    }
    .count,.money{
        color:red;
        font-size:15px
    }
    .danjia{
        color:red;
    }
</style>