	<template>
	
	<div id="sirendingzhi">
		<!--头部-->
	<div class="top">
		
		
		<img src="../../images/priImg/top1.png"  class= "topImg1
			" alt="" />
			
		<div class = "left">
		<p>日常记录</p>
		<span id ="hr">|</span>
		</div>
		
		
	<img src="../../images/priImg/top1.png"  class= "topImg2"alt="" />
	
	
		<div class = "right">
		<p><router-link :to="{path:'/symptom'}">症状调理</router-link></p>
		</div>
		
		<p><router-link :to="{path:'/data'}"><img src="../../images/priImg/rl.png" alt=""  class= "topImg3" /></router-link></p>
		
		
		
	
	
	
	</div>
	
	
	
	<!--内容-->
	<div class="container">
		<!--身体健康-->
		<div class="body">
			<div class="bTop">
				<img src="../../images/priImg/zz.png"  class= "c1"alt="" />
				<span id="span1">身体症状</span>
				<img src="../../images/priImg/down.png"  class= "down"alt="" />
			</div>
			<hr />
	
			<div class="bContainer">
				<div class="bCL">
				<label for=""><input type="checkbox" />&nbsp&nbsp嗓子疼</label><br /><br />
				<label for=""><input type="checkbox" />&nbsp&nbsp口腔溃疡</label><br /><br />
				<label for=""><input type="checkbox" />&nbsp&nbsp声音沙哑肿疼</label><br /><br />
				</div>
				
				<div class="bCR">
				<label for=""><input type="checkbox" />&nbsp&nbsp手脚冰冷发麻</label><br /><br />
				<label for=""><input type="checkbox" />&nbsp&nbsp脚脖子疼</label><br /><br />
				<label for=""><input type="checkbox" />&nbsp&nbsp流行性感冒</label><br /><br />
				</div>
			</div>
			
			<input type="text" id = "zidingyi"  placeholder="自定义  +"  />
		</div>
		<!--今日目标-->
		<div class="aim">
			<div class="bTop">
				<img src="../../images/priImg/hh.png"  class= "c2"alt="" />
				<span id="span1">今日目标</span>
				<img src="../../images/priImg/down.png"  class= "down1"alt="" />
			</div>
			<hr />
			<div class="bContainer">
				<div class="bCL">
					<label for=""><input type="checkbox" />&nbsp&nbsp吃早饭</label><br /><br />
					<label for=""><input type="checkbox" />&nbsp&nbsp按时吃药</label><br /><br />
					<label for=""><input type="checkbox" />&nbsp&nbsp排便</label><br /><br />
				</div>
				
				<div class="bCR">
					<label for=""><input type="checkbox" />&nbsp&nbsp早睡早起</label><br /><br />
					<label for=""><input type="checkbox" />&nbsp&nbsp八杯水</label><br /><br />
					<label for=""><input type="checkbox" />&nbsp&nbsp健走3000步</label><br /><br />
					
				</div>
			</div>
			
			<input type="text" id = "zidingyi1"  placeholder="自定义  +"  />
		</div>
		
	</div>
	<div class = "footer">
		<img src="../../images/priImg/gwc.png"  class= "c3"alt="" />
		
	</div>
	
	<foots></foots>
	</div>
	</template>
	
	<script>
	import foots from '../../pages/foots.vue';
	export default{
		name:'sirendingzhi',
		components:{
			foots
		},
		data(){
			return {
				
			}
		}
	}
	</script>
	
	<style scoped lang="less">
	/*头部*/
	.top {
		width:10rem;
		height:295/75rem;
		line-height:150/75rem;
		font-size:40/75rem;
		position:relative;
		
		}
	.topImg1{
		position:absolute;
		top:65/75rem;
		margin-left:60/75rem;
		
		
		
	}
	.topImg2{
		position:absolute;
		margin-left:434/75rem;
		top:65/75rem;
	}
	.topImg3{
		position:absolute;
		left: 300/75rem;
		top:190/75rem;
	}
	.left{
		position:absolute;
		top:16/75rem;                                                    
		left:110/75rem;
	}
	.c1{
		position:absolute;
		left:60/75rem;
		top:70/75rem ;
	}
	.down{
		position:absolute;
		right:20/75rem;
		top:720/75rem ;
	}
	.down1{
		position:absolute;
		right:20/75rem;
		top:320/75rem ;
	}
	.c2{
		position:absolute;
		left:50/75rem;
		margin-top:640/75rem ;
	}
	
	#hr{
		position:absolute;
		left:230/75rem;
		top:0/75rem ;
	}
	.c2{
		position:absolute;
		right:270/75rem;
		top:60/75rem ;	
	}
		
	
	.right{
		position:absolute;
		right:100/75rem;
		top:16/75rem; 
	
	}
	
	.container{
		height:760/75rem ;
		
		
	}
	.body{
		height: 400/75rem;
		font-size: 30/75rem;	
	}
	.aim{
		height:360/75rem;
		
		font-size: 30/75rem;
	}
	
	.bContainer{
		position:relative;
		
	}
	.bCL{
		position:absolute ;
		left:80/75rem;
	}
	.bCL p {
		position:absolute ;
		left:60/75rem ;
		top:0/75rem;
		
	}
	
	.c1{
		margin-top:230/75rem ;
	}
	.bCR{
		position:absolute ;
		right:80/75rem;
		
	}
	
	
	.bContainer .bCL input{
	
		width:25/75rem;
		height:25/75rem;
		margin-left:10/75rem ;
		border: 1px solid ;
		border-radius:50%/75rem ;
		
	}
	 .footer   #zdy{
		margin-left:100/75rem;
		width:220/75rem;
	}
	
	.bContainer .bCR input{
		width:25/75rem;
		height:25/75rem;
	
		
	}
	  /*自定义*/
	#zidingyi{
		position:absolute;
		top:620/75rem;
		border-radius:20/75rem;
		left:270/75rem;
		width:200/75rem ;
		height:40/75rem;
	}
	#zidingyi1{
		position:absolute;
		top:1050/75rem;
		border-radius:20/75rem;
		left:260/75rem;
		width:200/75rem ;
		height:40/75rem;
	}
	.footer{
		
		position:absolute ;
		bottom:100/75rem;
		right: 120/75rem;
	}
	.c3{
		position:absolute ;
		right:-60/75rem;
		top:-120/75rem;
		
	}
	#span1{
		margin-left:120/75rem ;
		margin-top:100/75rem ;
	
	
	
	}
	
	</style>