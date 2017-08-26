<template>
	<div id="forget">
		<div class="wrap">
			<div class="state"></div>

			<div class="itemHead">
				<router-link to="/my/account/login">
					<img src="../../../../images/my/icon/left.png" alt="" />
					<span class="back">返回</span>
				</router-link>
				<span class="verify">找回密码</span>
			</div>

			<div class='content'>
				<div class="telDiv">
					<span class="show" v-show='isShow'></span>
					<input type="" name="" placeholder="请输入注册手机号" class="telInput"@blur='test'>
				</div>
				<div class="passDiv">
					
					<input type="" name="" placeholder="输入验证码" class='passInput' >
					<span class='getCode'>获取验证码</span>
				</div>
				<router-link to="./reset">
				<div class="btn">下一步</div>
				</router-link>	
			</div>

		</div>
	</div>

</template>

<script>
import $ from 'jquery';
	export default{
		name:'forget',
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
#forget{
	font-size:32/75rem;
	// background: #f1f1f1;
	width:10rem;
	height: 1334/75rem;
	color:#757575;

	.wrap{
	
		img{display: inline-block;padding-right: 20/75rem;}
		.state{
			height: 0/75rem;
			line-height: 40/75rem;
			background: #43bf92;

		}
		.nav{
			height: 80/75rem;
			line-height: 80/75rem;
			text-align: center;
			background: #43bf92;
			font-size: 36/75rem;
			color: #ffffff;
			margin-bottom: 105/75rem;

		}
		.itemHead{
			margin-bottom: 105/75rem;
			background:#43BF92;
			height:88/75rem;
			color:#fff;
			font-size: 30/75rem;
		}
		.itemHead img{
			display: inline-block;
			padding-top:20/75rem;
			margin-left: 20/75rem;
			margin-right: 10/75rem;
			width: 26/75rem;
			height: 40/75rem;

		}
		.back{
			color:#fff;
			display: inline-block;
			vertical-align:top;
			padding-top:18/75rem;
			font-size: 32/75rem;
			margin-left: -20/75rem;
		}
		.verify{
			font-size: 36/75rem;
			margin-left: 150/75rem;

		}
		.content{
		width: (750-120-80)/75rem;
		margin: 0 auto;
		position: relative;
			.telDiv{
				width: 100%;
				border-bottom: 2/75rem solid #C5EBDD;
				margin-bottom: 65/75rem;
				position: relative;
				.show{
					position: absolute;
					// display: inline-block;
					color:#ffa500;
					left: 30%;
					top:-50/75rem;
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
						// color:#f1f1f1;
						padding-bottom: 9/75rem;padding-left:20/75rem; 

					}
					

					
			}
			.passDiv{
				width: 100%;
				border-bottom: 2/75rem solid #C5EBDD;
				position: relative;
				margin-bottom:125/75rem ;
					.passInput{ 
						border:none; 
						
						font-size:30/75rem;
						// color:#f1f1f1;
						padding-bottom: 9/75rem;padding-left:20/75rem; 
						
					}
					.getCode{
						display: inline-block;
						width:125/75rem ;
						height:50/75rem ;
						background: #43BF92;
						text-align: center;
						line-height: 50/75rem;
						color: #ffffff;
						font-size: 22/75rem;
						position: absolute;
						right: 0;
					}
				
				
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
			}



	}
}

</style>