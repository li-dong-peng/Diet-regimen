<template>
	<div id="people">
		<div class="nav">
			家人和朋友
			<img src="../../../../images/my/icon/fanhui.png"/>
			<router-link :to="{path:'/my/family'}" class="back">返回</router-link>
		</div>
		<div class="icon">
			<ul>
				<li><img src="../../../../images/my/get1.png" /><span>爸爸</span><span><router-link :to="{path:'/my/family/people/father'}">平和质</router-link></span><span>></span></li>
				<li><img src="../../../../images/my/get2.png" /><span>妈妈</span><span><router-link :to="{path:'/my/family/people/mother'}">尚未测试</router-link></span><span>></span></li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	#people{
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
  .icon{
  	margin-top:30/75rem;
  	background: #FFF;
  	height:200/75rem;
  	li{
  		height: 100/75rem;
  		line-height: 100/75rem;
  		border-bottom:1/75rem solid #F0EFEF;
  		padding-left: 40/75rem;
  		
  		img{
  			display: inline;
  			vertical-align: middle;
  		}
  	span:nth-child(2){
  		padding-left: 30/75rem;
  		
  	 }
  	 span:nth-child(3){
  		padding-left: 360/75rem;
  		
  	 }
  	 span:nth-child(4){
  		position: absolute;
  		right:30/75rem;
  		
  	 }
  	}
  	a{
  		color:black;
  	}
  }
}
</style>