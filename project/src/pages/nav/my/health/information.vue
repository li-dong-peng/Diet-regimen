<template>
	<div id="informationContainer">
			<div class="informationNav">
			<img src="../../../../images/my/icon/fanhui.png"/>
			<router-link :to="{path:'/my/health'}" class="back">返回</router-link>
			基础信息
			</div>
			<div class="informationNavContent">
				<ul>
					<li>名字
					<input type="text" placeholder="点击输入"/>
					</li>
					<li>性别
					<input type="button" value="女" />
					<input type="button" value="男"/>
					
					</li>
					
					<li>生日
						<span class="CakeSpan">
							>
						</span>
					<input class="dataInput" type="date"/>
					</li>
					<li>城市
					<span class="citySpan">
						>
					</span>
					</li>
				</ul>
			</div>
	</div>
</template>
<script>
	import $ from 'jquery';
	export default{
		name:'information',
		data(){
			return {
				
			}
		},
		  mounted:function(){
		  	var flag=false;
		  	$('.CakeSpan').click(function(){
		  		if($('.dataInput').is(":hidden")){
		  			$('.dataInput').show();
		  		}else{
		  			$('.dataInput').hide();
		  		}
	  		
		  	});
		  }
	}
</script>

<style scoped lang="less">
	#informationContainer{
		height:1334/75rem;
		background:#f1f1f1;
	.informationNav{
		height:88/75rem;
		background:#43bf92;
		font-size: 30/75rem;
		text-align: center;
		line-height: 88/75rem;
		position: relative;
		color: #fff;
		font-family:"微软雅黑";
		overflow:hidden;
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
	.informationNavContent{
		margin-top: 30/75rem;
		font-size: 28/75rem;
		height: 272/75rem;
		background:#FFF;
		ul{
		overflow:hidden;
		position:relative;
		li{
		height: 67/75rem;
		line-height: 67/75rem;
		border-bottom:1/75rem solid #F0F0EE;
		padding-left: 23/75rem;	
		}
	  	li:nth-child(1) input{
	  	display: inline-block;
	  	width: 133/75rem;
  		position:absolute;
		border:none;
		float: right;
		font-size:26/75rem;
		margin-top:20/75rem;
		right:5/75rem;
		}
		li:nth-child(1) input::placeholder{
			color:#CCCCCC;
		}
		li:nth-child(2) input{
		font-size: 22/75rem;
		float: right;
		margin-right:30/75rem;
		margin-top:16/75rem;
		border-radius: 25/75rem;
		background: #fff;
		
		width: 60/75rem;
		border: 1/75rem solid #E7E7E7;		
		}
		li:nth-child(2) input:nth-child(2){
			color: #43bf92;
		}
		
		li:nth-child(3) input{
		font-size: 22/75rem;
		float: right;
		margin-right:30/75rem;
		margin-top:16/75rem;
		border:none;
		display: none;	
		}
		li:nth-child(3) span{
		font-size: 22/75rem;
		float: right;
		margin-right:30/75rem;
		color:#CCCCCC;
		}
		li:nth-child(4) span{
		font-size: 22/75rem;
		float: right;
		margin-right:30/75rem;
		color:#CCCCCC;
		}
	   }
	}		
}
</style>