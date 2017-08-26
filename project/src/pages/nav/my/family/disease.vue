<template>
	<div id="disease">
		<div class="nav">
			选择慢性病
		<img src="../../../../images/my/icon/fanhui.png"/>
			<router-link :to="{path:'/my/family/people/father'}" class="back">返回</router-link>
		</div>
		
		<div class="lis">
			<ul v-for="(data,index) in lis" :key="index">
				<li>{{data.name}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default{
		name:"disease",
		data(){
			return {
				lis:[
				{
				name:'减重'
				},
				{
				name:'通风'
				},
				{
				name:'血糖升高'
				},
				{
				name:'脂肪肝'
				},
				{
				name:'慢性胃炎'
				},
				{
				name:'慢性支气管炎'
				},
				{
				name:'血脂升高'
				},
				{
				name:'血压升高'
				}
			  ]
			
			}
		},
		mounted(){
			this.last();
		},
		methods:{
			last(){
				console.log(11)
		$('#disease ul li').eq($("#disease ul li").length-1).css({'border-bottom':'none'});
		  }
		}
	}
</script>

<style scoped lang="less">
#disease{
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
  .lis{
  	margin-top: 20/75rem;
  	background: #fff;
  	padding-left: 20/75rem;
  	li{
  		height:75/75rem;
  		line-height: 75/75rem;
  		border-bottom:1px solid #757575;
  	}	
  } 
}
</style>