<template>
	<div id="btnSpecialty">
		<div class="nav">
			专业版体质测试
			<img src="../../../../../images/my/icon/x.png"/>
			<router-link :to="{path:'/my/health/noTests'}" class="back">放弃</router-link>
		</div>
		
		<div class="btnSpecialtyRadio">
			<ul>
				<li>1.出行坐飞机起飞降落时感到耳痛、头痛。</li><br />
				<li><label>A.没有<input type="radio" name="trip" value="A" checked /></label></li>
				<li><label>B.有,但程度浅<input type="radio" name="trip" value="B"/></label></li><br />
				<li><label>C.有,程度深<input type="radio" name="trip" value="C"/></label></li>
				<li><label>D.有<input type="radio" name="trip" value="D"/></label></li>
			</ul>
			<ul v-for="(data,index) in lis" :key="index" class="lis">
				<li>{{data.id}}.{{data.name}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
	name:"btnSpecialty",
	mounted(){
	},
	data(){
	return {
	  	lis:[
	  	{
	  		id:2,
	  		name:'您面色晦暗或容易出现雀斑吗?'
	  	},
	  	{
	  		id:3,
	  		name:'您容易有黑眼圈吗?'
	  	},
	  	{
	  		id:4,
	  		name:'您面部潮红或偏红吗?'
	  	},
	  	{
	  		id:5,
	  		name:'您口唇颜色偏暗吗?'
	  	},
	  	{
	  		id:6,
	  		name:'您油脂分泌多吗?'
	  	},
	  	{
	  		id:7,
	  		name:'您容易生痔疮吗?'
	  	},
	  	{
	  		id:8,
	  		name:'您的皮肤在不知不觉中会出现青紫斑吗?'
	  	},
	  	{
	  		id:9,
	  		name:'您容易疲乏吗?'
	  	},
	  	{
	  		id:10,
	  		name:'您容易精神紧张吗、焦虑不安吗？'
	  	}
	  ]
	}
  }
}	
</script>

<style scoped lang="less">
	#btnSpecialty{
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
	top:32/75rem;
	}
		.back{
	position: absolute;
	left:55/75rem;
	color:#fff;
	}
  }
  .btnSpecialtyRadio{
  	padding-left: 70/75rem;
  	color:#7A7A7A;
  	font-size: 26/75rem;
  	
  		ul:nth-child(1){
  		padding-top: 50/75rem;
  		height: 130/75rem;
  		color: #333;
  		border-bottom: 1/75rem solid #7A7A7A;
  		overflow:hidden;
  		
  		input{
  			display: none;
  		}
  		li{
  			float: left; 
		
  		}
  		li:nth-child(1){
  			margin-left:-30/75rem ;
  		}
  		li:nth-child(3){
  			color:#43BF92;
  		}
  		li:nth-child(4){
  			position: absolute;
  			right:106/75rem;
  		}	
  		li:nth-child(7){
  			position: absolute;
  			right:214/75rem;
  		}
  }
 }
 .lis{
 	li{
 		height: 100/75rem;
 		border-bottom: 1/75rem solid #7A7A7A;
 		line-height: 100/75rem;
 		color: #333333;
 	}
 }
 
}
</style>