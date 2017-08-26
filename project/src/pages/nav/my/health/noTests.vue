<template>
	<div id="noTests">
		<div class="nav">
			测试
			<img src="../../../../images/my/icon/fanhui.png"/>
			<router-link :to="{path:'/my/health'}" class="back">返回</router-link>
		</div>
		
		<div class="noTestsContent">
			<div class="noTestsText">
				测试说明
			</div>
			<p class="noTestClass">本测试分为简易版和专业版,简易版可以快速测试你的身体状况,专业版可以更专业的了解你的身体状况。</p>
		</div>
		<div class="noTestbtn">
			<button class="btnEasy"><router-link :to="{path:'/my/health/noTests/btnEasy'}">简易版</router-link></button>
			<button class="btnSpecialty"><router-link :to="{path:'/my/health/noTests/btnSpecialty'}">专业版</router-link></button>
			
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default{
		name:'noTests',
		data(){
			return {
				
			}
		},
		mounted(){
			$('.noTestbtn button').click(function(){
				$(this).css({background:'#2a9469'});

			});
			
		}
	}
</script>

<style scoped lang="less">
    #noTests{
    height: 1334/75rem;
	font-size: 30/75rem;
	.nav{
	height: 88/75rem;
	line-height: 88/75rem;
	text-align:center;
	background: #43bf92;
	color: #ffffff;	
	position:relative;
	img{
	padding-left: 23/75rem;
	position: absolute;
	bottom: 15/75rem;
	}
		.back{
	position: absolute;
	left:55/75rem;
	color:#fff;
	}
  }		
.noTestsContent{
	width: 712/75rem;
	height: 631/75rem;
	border: 1/75rem solid #43bf92;
	margin: 20/75rem auto;	
	background: #fff;
	.noTestsText{
		padding-top: 65/75rem;
		padding-bottom:75/75rem;
		color:#595959;	
		text-align: center;
		font-size: 36/75rem;
	}
	.noTestClass{
		color:#7A7A7A;
		font-size:28/75rem;
	}
  }
.noTestbtn{
	margin-top:190/75rem;
	
	button{
		display: inline-block;
		width: 300/75rem;
		height: 90/75rem;
		font-size: 30/75rem;
		background: #43BF92;
		border-radius: 12/75rem;
		color: #FFF;
		float: left;
		border: none;
		a{
			color:#FFF;
		}
	}	
	button:nth-child(1){
		position: absolute;
		left:50/75rem;	
	}
	button:nth-child(2){
		position:absolute;
		right:50/75rem;
	}
 } 
}
</style>