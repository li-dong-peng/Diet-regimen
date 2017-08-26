<template>
	<div id="reset">
		<div class="wrap">
			<div class="state"></div>

			<div class="itemHead">
				<router-link to="/my/account/forget">
					<img src="../../../../images/my/icon/left.png" alt="" />
					<span class="back">返回</span>
				</router-link>
				<span class="verify">重置密码</span>
			</div>
			<div class='content'>
				<div class="telDiv">

					<input type="" name="" placeholder="请输入新密码" class="telInput newpass " @blur="on">
				</div>
				<div class="telDiv">

					<input type="" name="" placeholder="确认密码" class="telInput newpassed" @blur="key">
				</div>
				<div class="passDiv ">

					<input type="" name="" placeholder="验证码" class='passInput' @blur="modalshow">
					<span class='getCode'>1234</span>
					<div class="prompt"></div>
				</div>
				<span class="change" @click="greet">换一张看不清</span>

				<div class="btn" @click='finish'>完成</div>
			</div>

		</div>
	</div>

</template>

<script>
	import $ from "jquery";
	// var show=true;

	export default {
		name: 'reset',
		data() {
			return {

			}
		},
		methods: {
			greet: function() {
				var str = "";

				for(var i = 0; i < 4; i++) {
					str += Math.floor(Math.random() * 10);

				}

				$(".getCode").html(str);

			},
			modalshow: function() {
				if($(".passInput").val() != $(".getCode").html()) {
					// this.show=!this.show;
					$('.prompt').css('display', 'block');
					$('.prompt').html("验证码输入错误");

				} else {
					$('.prompt').css('display', 'none');
				}

			},
			on: function() {
				if($('.newpass').val().match(/[\u4e00-\u9fa5]+/ig)) {
					$('.prompt').css('display', 'none');
				} else {
					$('.prompt').html("密码是数字和字母的组合");
					$('.prompt').css('display', 'block');
				}
			},
			key: function() {
				if($('.newpass').val() !== $('.newpassed').val()) {
					$('.prompt').html("俩次密码输入不一致");
					$('.prompt').css('display', 'block');
				} else {
					$('.prompt').css('display', 'none');
				}
			},
			finish: function() {
				if($('.newpass').val()) {
					if(($('.newpass').val() == $('.newpassed').val()) && ($(".passInput").val() == $(".getCode").html())) {
						$('.prompt').html("重置密码成功");
						$('.prompt').css('display', 'block');
						$('.newpass').val('')
						$('.newpassed').val('')
						$(".passInput").val('')

					}
				} else {
					$('.prompt').html("请输入新密码");
					$('.prompt').css('display', 'block');

				}
			}

		}

	}
</script>

<style scoped lang="less">
	#reset {
		font-size: 32/75rem;
		width: 10rem;
		height: 1334/75rem;
		color: #757575;
		.wrap {
			img {
				display: inline-block;
				padding-right: 20/75rem;
			}
			.state {
				height: 0/75rem;
				line-height: 40/75rem;
				background: #43bf92;
			}
			.itemHead {
				margin-bottom: 105/75rem;
				background: #43BF92;
				height: 88/75rem;
				color: #fff;
				font-size: 30/75rem;
			}
			.itemHead img {
				display: inline-block;
				padding-top: 20/75rem;
				margin-left: 20/75rem;
				margin-right: 10/75rem;
				width: 26/75rem;
				height: 40/75rem;
			}
			.back {
				color: #fff;
				display: inline-block;
				vertical-align: top;
				padding-top: 18/75rem;
				font-size: 32/75rem;
				margin-left: -20/75rem;
			}
			.verify {
				font-size: 36/75rem;
				margin-left: 150/75rem;
			}
			.content {
				width: (750-120-80)/75rem;
				margin: 0 auto;
				position: relative;
				.telDiv {
					width: 100%;
					border-bottom: 2/75rem solid #C5EBDD;
					margin-bottom: 65/75rem;
					.telInput {
						border: none;
						font-size: 30/75rem;
						padding-bottom: 9/75rem;
						padding-left: 20/75rem;
					}
				}
				.passDiv {
					width: 300/75rem;
					border-bottom: 2/75rem solid #C5EBDD;
					position: relative;
					margin-bottom: 125/75rem;
					display: inline-block;
					.passInput {
						border: none;
						width: 155/75rem;
						font-size: 30/75rem;
						padding-bottom: 9/75rem;
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
					}
					.prompt {
						position: absolute;
						bottom: -100/75rem;
						left: 15%;
						background: #44BF91;
						border-radius: 10/75rem;
						color: #ffffff;
						font-size: 36/75rem;
						text-align: center;
						background-color: orange;
						width: 150%;
						height: 60/75rem;
						display: none;
					}
				}
				.change {
					font-size: 22/75rem;
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
			}
		}
	}
</style>