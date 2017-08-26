<template>
	<div id="healthContent">
		
		<div class="nav">健康信息
		<img src="../../../../images/my/icon/fanhui.png"/>
			<router-link :to="{path:'/my'}" class="back">返回</router-link>
		</div>
		<div class="healthHead">
			<img src="../../../../images/my/wo2.png">	
		</div>
		<div class="information">
			基础信息
			
<router-link :to="{path:'/my/health/information'}">
	<span> > </span>
</router-link>
			
		</div>
		<div class="examination">
			体检/慢性病管理
			<router-link :to="{path:'/my/health/examination'}">
	<span> > </span>
</router-link>
		</div>
		<div class="tests">
			健康测试
		</div>
		<div class="noTests">
			我的体质：尚未测试
			<router-link :to="{path:'/my/health/noTests'}">
	<span> > </span>
</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		name:'health',
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped lang="less">
#healthContent{
	height: 1334/75rem;
	background:#f1f1f1 ;
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
	.healthHead{
	 height: 233/75rem;
	 img{
	 	padding-top:((233/75)-(113/75))/2rem;
	 	margin:0 auto;
	 }
	}
.information,.examination{
	height: 70/75rem;
	padding-left: 25/75rem;
	padding-top: 23/75rem;
	background: #FFF;
	border: none;
	line-height:70/75rem ;
	border-bottom: 1/75rem solid #FFF6D9;
	span{
		float: right;
		font-size: 45/75rem;
		padding-right: 81/75rem;
		color:#F0F0EE;
	}
 }
 .tests{
 	text-align: center;
 	height: 112/75rem;
 	line-height: 112/75rem;
 	font-size: 40/75rem;
 	font-weight:lighter;
 }
 .noTests{
 	height: 76/75rem;
 	line-height:76/75rem;
 	background:#fff;
 	padding-left: 25/75rem;
 	span{
 		float: right;
		font-size: 45/75rem;
		padding-right: 81/75rem;
		color:#F0F0EE;
 	}
 }
}
</style>