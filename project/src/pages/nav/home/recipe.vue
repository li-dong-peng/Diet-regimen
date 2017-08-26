<template>
	<div class='recipe'>
		
		<div class='top'>
			<router-link :to="{path:'/index'}">
				<img src="../../../../static/pic/leftArrow.png" alt="" />
				<span class="return">返回</span>
			</router-link>
			<span class="menu">每日食谱</span>
		</div>
		<div class="father">
			<p class='bb'>爸爸</p>
			<div class="first">
				<img src="../../../../static/pic/breakfast1.png" alt="" /><span><p>早餐</p></span>
			</div>
			<div class="second">
				<img src="../../../../static/pic/breakfast2.png" alt="" /><span><p>午餐</p></span>
			</div>
			<div class="third">
				<img src="../../../../static/pic/breakfast3.png" alt="" /><span><p>晚餐</p></span>
			</div>
			
			
			
		</div>
		<div class="mother">
			<p class='mm'>妈妈</p>
			<div class="first">
				<img src="../../../../static/pic/breakfast1.png" alt="" /><span><p>早餐</p></span>
			</div>
			<div class="second">
				<img src="../../../../static/pic/breakfast2.png" alt="" /><span><p>午餐</p></span>
			</div>
			<div class="third">
				<img src="../../../../static/pic/breakfast3.png" alt="" /><span><p>晚餐</p></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'recipe',
		data:function(){
			return {
				
			}
		}
	}
</script>

<style scoped lang="less">
	
	.recipe .top{	
		overflow: hidden;
		width:750/75rem;
		height:88/75rem;
		background: #43bf92;	
	}
	.recipe .top img{
		margin-left: 20/75rem;
		padding-top: 20/75rem;
		float:left;
		width:26/75rem;
		height:48/75rem;		
	}
	.recipe .top .return{
		font-size: 30/75rem;
		color:#ffffff;
		display: inline-block;
		margin-bottom: 30/75rem;
		margin-left: 14/75rem;
		vertical-align: middle;
	}
	.recipe .top .menu{
		font-size: 36/75rem;
		color:#ffffff;
		display: inline-block;
		margin-left: 180/75rem;
		margin-bottom:24/75rem;
		vertical-align: middle;
	}
	.father,.mother{
		margin:10/75rem 52/75rem;
		
	}
	.father p,.mother p{
		color:#ffffff;
	}
	.father .bb,.mother .mm{
		width: 120/75rem;
		height: 50/75rem;
		border: 1px solid #43bf92;
		border-radius: 10/75rem;
		background: #43bf92;
		font-size: 28/75rem;		
		text-align: center;
		line-height: 50/75rem;
	}
	.father div,.mother div{
		height:150/75rem;
		width:650/75rem;
		/*overflow: hidden;*/ 	
		position: relative;
		
	}
	.father div img,.mother div img{
		height:150/75rem;
		width:650/75rem;
		
	}
	.father div span,.mother div span{
		display: block;
		width:100%;
		height:100%;
		position: absolute;
		top:0;
		left:0;	
		 opacity: 0.5;
		 /*z-index:100;*/ 
		 background:black; 
	}
	.father div span p,.mother div span p{
		text-align:center;
		font-size:40/75rem;
		margin-top: 50/75rem;
		
	}
	.father .first,.mother .first{
		margin-top: 10/75rem;
	}
	.father .second,.third {
		margin-top: 24/75rem;
	}
	.mother .second,.third {
		margin-top: 24/75rem;
	}
</style>