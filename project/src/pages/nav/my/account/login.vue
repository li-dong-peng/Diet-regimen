<template>
	<div id="login">
		<div class='wrap'>
		<router-link to="/my">
		<span class="fade">取消</span>
		</router-link>
		<router-link to="./regist">
			<span class="register">快速注册</span>
		</router-link>	
		<div class='content'>
			<img  class='logo'src="../../../../images/my/logo.png">
			<div class="telDiv">
				<img  class='tel'src='../../../../images/my/icon/tel.png'>
				<span class="show" v-show='isShow'></span>
				<input type="" name="" placeholder="手机号" class="telInput" @blur='test'>
			</div>
			<div class="passDiv">
				<img  class='pass'src='../../../../images/my/icon/pass.png'>
				<input type="" name="" placeholder="密码" class='passInput'>
			</div>
			<div class="btn">
				登录
			</div>
			<router-link to="./forget">
			<p class="forget">忘记密码？</p>
			</router-link>
		</div>
		
		</div>
	</div>
</template>

<script>
import $ from 'jquery';
	export default{
		name:'login',
		data(){
			return {
				isShow:false,
			}
		},
		methods:{
			test:function(){

		var reg=/^1[34578]\d{9}$/g;
		
		if(!reg.test($('input').val())){
			$('.show').text("错误,请重输");
			this.isShow = !this.isShow;
		
		}else{
			this.isShow = !this.isShow;
		
		}

			}
		}

	}
</script>

<style scoped lang="less">
#login{
	.wrap{
		width: (750-120)/75rem;
		margin: 0 auto;
		font-weight: normal;
	span{font-size:36/75rem ;color: #44BF91;margin-top: 60/75rem;}
	
	.register{
		margin-left: 390/75rem;}
	.content{
		width: (750-120-80)/75rem;
		margin: 0 auto;
		position: relative;
		
		.logo{
			margin-left: ((550-183)/2)/75rem;
			margin-top: 110/75rem;
			margin-bottom: 150/75rem;
		}
		.telDiv{
			width: 100%;
			border-bottom: 2/75rem solid #C5EBDD;
			position: relative;
				.show{
					position: absolute;
					// display: inline-block;
					color:#ffa500;
					left: 30%;
					top:-100/75rem;
					width: 250/75rem;
					height: 50/75rem;
					text-align: center;
					line-height: 50/75rem;
					border: 1/75rem solid black;
					// display: none;
				}
				.telInput{ 
					border:none; 
					
					font-size:30/75rem;
					// color: #f1f1f1;
					padding-bottom: 9/75rem;padding-left:20/75rem; 
				}
				

				.tel{margin-bottom:-5/75rem;display: inline-block;color: #f1f1f1;width: 38/75rem;height: 38/75rem;}
			
		}
		.passDiv{
			width: 100%;
			border-bottom: 2/75rem solid #C5EBDD;
			margin-bottom: 105/75rem;
			.passInput{ 
					border:none; 
					
					font-size:30/75rem;
					// color: #f1f1f1;
					padding-bottom: 9/75rem;padding-left:20/75rem; 
					
				}
			
			.pass{display: inline-block;color: #f1f1f1;width: 38/75rem;height: 38/75rem;}
		}
		
		.btn{width: 100%;
		height: 90/75rem;
		background: #44BF91;
		border-radius: 10/75rem;
		color: #ffffff;
		font-size: 36/75rem;
		text-align: center;
		line-height: 90/75rem;
		margin-bottom: 25/75rem;
	}
		.forget{position: absolute;
			right: 0;
			font-size: 36/75rem;
			color:#000;
		}

	}
	


	}
}
</style>