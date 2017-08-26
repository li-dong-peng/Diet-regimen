<template>
	<div id="mother">	
		<div class="nav">
			家人和朋友
		<img src="../../../../images/my/icon/fanhui.png"/>
			<router-link :to="{path:'/my/family/people'}" class="back">返回</router-link>
		</div>
		
		<div class="motherIcon">
			<img src="../../../../images/my//cha1.png"/>
		</div>
		
		<div class="motherTest">
			<ul>
				<li>尚未测试<span> <router-link :to="{path:'/my/health/noTests'}"> > </router-link></span></li>
				<li>慢性病<span><router-link :to="{path:'/my/family/people/father/disease'}"> > </router-link></span></li>	
				
				
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
#mother{
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
  .motherIcon{
  	height:335/75rem; 	
  	img{
	margin:160/75rem auto;
	}
 }
 .motherTest{
 	ul{
 		margin-top: -100/75rem;
 		
 	}
 	li{
 	background:#fff;
 	height: 80/75rem;
 	line-height: 80/75rem;
 	width: 710/75rem;
 	border-radius: 10/75rem;
 	margin:30/75rem auto ;
 	span{
 		position: absolute;
 		right: 30/75rem;
	
 	}
  }
 }
} 
</style>