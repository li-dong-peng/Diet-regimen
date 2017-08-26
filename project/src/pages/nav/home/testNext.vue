<template>
	<div class='testNext'>
		
		<div class='top'>
			<router-link :to="{path:'/test'}">
				<img src="../../../../static/pic/leftArrow.png" alt="" />
				<span class="return">返回</span>
			</router-link>
			<span class="feibu">肺部测试</span>
			<img src="../../../../static/pic/share.png" alt="" />
		</div>
		<div class="question">
			<div class="title">
				<p>1/2</p>
				<p>你一天吸烟的频率？</p>
			</div>
			<div class="selector">
				<p>很少</p>
				<p>较多</p>
				<p>经常</p>
				<p>从不</p>
			</div>
			<router-link :to="{path:'/test/testNext/result'}">
				<button class="btn">提交</button>	
			</router-link>
				
		</div>
	</div>
</template>

<script>
	export default {
		name:'testNext',
		data:function(){
			return {
				
			}
		}
	}
</script>

<style scoped lang='less'>
	
	.testNext .top{	
		overflow: hidden;
		width:750/75rem;
		height:88/75rem;
		background: #43bf92;	
	}
	.testNext .top img:first-child{
		margin-left: 20/75rem;
		padding-top: 20/75rem;
		float:left;
		width:26/75rem;
		height:48/75rem;		
	}
	.testNext .top img:last-child{
		margin-right: 20/75rem;
		padding-top: 20/75rem;
		float:right;
		width:48/75rem;
		height:48/75rem;		
	}
	.testNext .top .return{
		font-size: 30/75rem;
		color:#ffffff;
		display: inline-block;
		margin-bottom: 30/75rem;
		margin-left: 14/75rem;
		vertical-align: middle;
	}
	.testNext .top .feibu{
		font-size: 36/75rem;
		color:#ffffff;
		display: inline-block;
		/*text-align: center;*/
		margin-left: 180/75rem;
		margin-bottom:24/75rem;
		vertical-align: middle;
	}
	.testNext .question{
		margin-left: 20/75rem;
		margin-right: 20/75rem;
		margin-top: 84/75rem;
	}
	.testNext .question p{
		font-size: 28/75rem;
		color: #818181;		
	}
	.testNext .question .title p{
		margin-bottom: 40/75rem;
		margin-left: 24/75rem;
	}
	.testNext .question .selector p{
		margin-bottom: 24/75rem;
		margin-left: 68/75rem;
		width:570/75rem;
		height: 76/75rem;
		text-align: center;
		border: 1px solid #b7b5b5;
		border-radius: 30/75rem;
		line-height: 76/75rem;
	}
	.testNext .question .btn{
		width:600/75rem;
		height: 90/75rem;
		background: #43bf92;
		font-size: 38/75rem;
		color:#ffffff;
		border-radius: 15/75rem;
		text-align: center;
		margin-left: 58/75rem;
		margin-top: 146/75rem;
	}
	.testNext .question .selector p:hover{
		background:#43bf92;
	}
</style>