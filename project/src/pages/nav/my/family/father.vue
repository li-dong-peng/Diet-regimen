<template>
	<div id="father">	
		<div class="nav">
			姓名	
		<img src="../../../../images/my/icon/fanhui.png"/>
			<router-link :to="{path:'/my/family/people'}" class="back">返回</router-link>
		</div>
		
		<div class="fatherIcon">
			<img src="../../../../images/my//cha1.png"/>
		</div>
		
		<div class="lis">
			<ul>
				<li><img src="../../../../images/my/icon/tel.png"/>显示体质<span>测试于XXX前></span></li>
				<li>显示体质简介</li>
				<li>重新测试体质</li>
				<li>慢性病<span><router-link :to="{path:'/my/family/people/father/disease'}">已选择X项></router-link></span></li>
				
			</ul>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped lang="less">
#father{
    height: 1334/75rem;
	font-size: 30/75rem;
	background:#F1F1F1;
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
	top:32/75rem;
	bottom: 15/75rem;
	}
	.back{
	position: absolute;
	left:55/75rem;
	color:#fff;
	}
  }
	.fatherIcon{
		height: 260/75rem;
		background: #fff;
		text-align: center;
		img{
			display: inline-block;
			margin:68/75rem auto;
		}
	}
	.lis{
		height: 405/75rem;
		margin-top:20/75rem;
		background: #fff;
		li{
			padding-left: 20/75rem;
			height:100/75rem;
			line-height: 100/75rem;
			border-bottom: 1/75rem solid #838383;
			a{
			color:#6C6C6C;
			}
		}
		li:nth-child(1){
		img{
		display: inline-block;	
	   }
		span{
			position: absolute;
			right:40/75rem;
			color:#999999;
		 }
	}
	li:nth-child(4){
	span{
	position:absolute ;
	right:40/75rem;
	color:#999999;
	}
	 }
	}
} 
</style>