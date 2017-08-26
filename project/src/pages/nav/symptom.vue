	<template>
		<div>
		<div id="sirendingzhi">
			<!--头部-->
			<div class="top">
			<img src="../../images/priImg/top1.png" alt="" class ="c1" />
				<div class = "left">
				<p><router-link :to="{path:'/privates'}">日常记录</router-link></p>
				<span id ="hr">|</span>
				</div>
				<img src="../../images/priImg/top1.png" alt="" class ="c2" />	
				<div class = "right">
				<p>症状调理</p>
				</div>
			</div>
			<hr />
			
			<!--内容-->
			
			<div class="container">
				
				<div class="zou">
					<div class="zLeft">
					<span>根据你的 <b  style = "color:red">痰湿体质</b> 推荐</span><br/>
					<img src="../../images/priImg/tu2.png" alt="" />
					</div>
					
					<div class="zRight">
						<h1>温县铁棍山药</h1><br/>
						<p> 补肾益气 生津逸飞</p><br/>
						<p style="color:red">￥36.50</p>
					</div>
				</div>
				
				
				
				<!--yao-->
				<div class="yao">
					<div class="yLeft">
					<span>根据你的 <b style = "color:red">痰湿体质</b> 推荐</span><br/>
					<img src="../../images/priImg/tu2.png" alt="" />
					</div>
					
					<div class="yRight">
						<h2>茯苓丸</h2><br/>
						<p >除湿健脾 补肾益气</p><br/>
						<p style="color:red">￥98.50</p>
					</div>	
					
				</div>
				<div class="wan">
					<div class="wLeft">
					<span>根据你的 <b  style = "color:red">痰湿体质</b> 推荐</span><br/>
					<img src="../../images/priImg/tu2.png" alt="" />
					</div>
					
					<div class="wRight">
						<h2>五珍粥</h2><br/>
						<p >健脾祛湿 补肾益气</p><br/>
						<p style="color:red">￥222</p>
					</div>	
				</div>	
			</div>
		
			<div class = "footer">
					<p><router-link :to="{path:'/shoppingCar'}"><img src="../../images/priImg/gwc.png"  class= "c3"alt="" /></router-link></p>	
	
			</div>
		</div>
		<foots></foots>
	</div>	
	</template>
	
	<script>
		import foots from '../../pages/foots.vue';
		export default{
			name:'sirendingzhi',
			data(){
				return {
					
				}
			},
			components:{
				foots
			}
		}
	</script>
	
	<style lang="less" scoped>
	/*头部*/
	.top {
		width:10rem;
		height:150/75rem;
		line-height:150/75rem;
		font-size:40/75rem;
		position:relative;
		}
	
	.left{
		position:absolute;
		top:16/75rem;                                                    
		left:110/75rem;
	}
	.c1{
		position:absolute;
		left:60/75rem;
		top:65/75rem ;
	}
	#hr{
		position:absolute;
		left:230/75rem;
		top:0/75rem ;
	}
	.c2{
		position:absolute;
		right:273/75rem;
		top:65/75rem ;	
	}
		
	
	.right{
		position:absolute;
		right:100/75rem;
		top:16/75rem; 
	
	}
	
	
	/*内容*/
	.container{
		
		width:10rem ;
		
		position:relative;
		
		margin: 0 auto ;
		
	}
	
	.zou{
		position: absolute;
		top:0/75rem;
		
	}
	.zLeft{
		font-size:28/75rem;
		position:absolute;
		top:30/75rem;
		left:30/75rem ;
		width:5rem ;
		height:300/75rem;
		
		
	}
	.zRight{
		font-size:28/75rem;
		position:absolute;
		top:70/75rem;
		left:380/75rem;
		width:5rem ;
		height:300/75rem;
	}
	
	
	
	.zou{
		position: absolute;
		top:300/75rem;
		}
	.yLeft{
		font-size:30/75rem;
		position:absolute;
		top:30/75rem;
		left:30/75rem ;
		width:5rem ;
		height:300/75rem;
		
		
	}
	.yRight{
		font-size:28/75rem;
		position:absolute;
		top:70/75rem;
		left:380/75rem;
		width:5rem ;
		height:300/75rem;
	}
	
	
	.wan{
		position: absolute;
		top:600/75rem;
		}
	.wLeft{
		font-size:28/75rem;
		position:absolute;
		top:30/75rem;
		left:30/75rem ;
		width:5rem ;
		height:300/75rem;
		
		
	}
	.wRight{
		font-size:28/75rem;
		position:absolute;
		top:70/75rem;
		left:380/75rem;
		width:5rem ;
		height:300/75rem;
	}
	
	
	
	.footer{
		
		position:absolute ;
		bottom:130/75rem;
		right: 60/75rem;
	}
	
	
	
	
	
	
	
	
	</style>