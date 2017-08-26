<template>
	<div id="regist">
		<div class='wrap'>

			<router-link to="/my/account/login">
				<span class="fade">取消</span>
			</router-link>
			<span class="register">登录</span>

			<div class='content'>
				<img class='logo' src="../../../../images/my/logo.png">
				<div class="telDiv">
					<img class='tel' src='../../../../images/my/icon/tel.png'>
					<span class="show" v-show='isShow'></span>
					<input type="" name="" placeholder="手机号" class="telInput"  @blur='test'>
				</div>

				<div class="passDiv">
					<img class='pass' src='../../../../images/my/icon/pass.png'>
					<input type="" name="" placeholder="输入验证码" class='passInput'>
					<span class='getCode'>获取验证码</span>
				</div>

				<div class="btn">
					注册
				</div>
				<div class="forget">
					<div id="box1" @click="bths">

						<div id="box2"></div>
					</div>

					我已阅读并同意<span>《用户协议》</span></div>
			</div>

		</div>
	</div>
</template>

<script>
	// 加jquery
	import $ from "jquery";
	var num = 0;
	export default {
		name: 'regist',
		data() {
			return {
				isShow:false,

			}
		},
		methods: {
			btn(event) {
				num++;
				if(num % 2) {
					$(event.target).css('background', 'green')
						.parents('.shoppingCarCon').siblings().find('.circles')
						.css('background', '#fff')
				} else {
					$(event.target).css('background', '#fff');
				}
			},
			bths(event) {
				++num;
				if(num % 2) {

					$('#box2').css('display', 'block')
				} else {
					$('#box2').css('display', 'none')
				}
			},
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
	#regist {
		.wrap {
			width: (750-120)/75rem;
			margin: 0 auto;
			font-weight: normal;
			span {
				font-size: 36/75rem;
				color: #44BF91;
				margin-top: 60/75rem;
			}
			.register {
				margin-left: 430/75rem;
			}
			.content {
				width: (750-120-80)/75rem;
				margin: 0 auto;
				position: relative;
				.logo {
					margin-left: ((550-183)/2)/75rem;
					margin-top: 110/75rem;
					margin-bottom: 150/75rem;
				}
				.telDiv {
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
					.telInput {
						border: none;
						font-size: 30/75rem;
						// color:#f1f1f1;
						padding-bottom: 9/75rem;
						padding-left: 20/75rem;
					}
					.tel {
						margin-bottom: -5/75rem;
						display: inline-block;
						color: #dbd6d6;
						width: 38/75rem;
						height: 38/75rem;
					}
				}
				.passDiv {
					width: 100%;
					border-bottom: 2/75rem solid #C5EBDD;
					margin-bottom: 105/75rem;
					.passInput {
						border: none;
						font-size: 30/75rem;
						// color:#f1f1f1;
						// padding-bottom: 9/75rem;
						padding-left: 20/75rem;
					}
					.getCode {
						display: inline-block;
						width: 125/75rem;
						height: 50/75rem;
						background: #43BF92;
						text-align: center;
						line-height: 50/75rem;
						color: #ffffff;
						font-size: 22/75rem;
						position: absolute;
						right: 0;
						//添内容 
						margin-top: 50/75rem;
					}
					.pass {
						display: inline-block;
						color: #dbd6d6;
						width: 38/75rem;
						height: 38/75rem;
					}
				}
				.btn {
					width: 100%;
					height: 90/75rem;
					background: #44BF91;
					border-radius: 10/75rem;
					color: #ffffff;
					font-size: 36/75rem;
					text-align: center;
					line-height: 90/75rem;
					margin-bottom: 25/75rem;
				}
				.forget {
					position: absolute;
					font-size: 26/75rem;
					span {
						color: #44BF91;
						font-size: 26/75rem;
					}
					#box1 {
						position: relative;
						width: 24/75rem;
						height: 24/75rem;
						border: 2/75rem solid #44BF91;
						overflow: hidden;
						display: inline-block;
						margin-top: 10/75rem;
					}
					#box2 {
						position: absolute;
						width: 24/75rem;
						height: 24/75rem;
						border-right: 2/75rem solid #43BF92;
						border-bottom: 2/75rem solid #43BF92;
						transform: rotate(50deg);
						top: -10/75rem;
						display: none;
						left: -2/75rem;
					}
				}
			}
		}
	}
</style>