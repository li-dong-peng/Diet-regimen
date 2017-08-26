<template>
	<div class='test'>
		
		<div class='top'>
			<router-link :to="{path:'/index'}">
				<img src="../../../../static/pic/leftArrow.png" alt="" />
				<span class="return">返回</span>
			</router-link>
			<span class="feibu">肺部测试</span>
			<img src="../../../../static/pic/share.png" alt="" @click='btn'/>
			
		</div>
		<div class="center">
			<img src="../../../../static/pic/3.png" alt="" />
		</div>
		<div class="footTest">
			<p><span>39453</span>参与了测试</p>
			<router-link :to="{path:'/test/testNext'}">
				<button class='btn'>开始测试</button>
			</router-link>
			
		</div>
		<div class='show'>
			<p>分享成功</p>
		</div>
	</div>
</template>

<script>
	
	export default{
		name:'test',
		data(){
			return{
				
				
			}
		},
		methods:{
			btn:function(){
				document.querySelector(".show").style.display="block";				
				
				setTimeout(function(){
					document.querySelector(".show").style.display="none";
				},1000);
				
			}
		}
	}
	
</script>

<style scoped lang='less'>
	
	.test .top{	
		overflow: hidden;
		width:750/75rem;
		height:88/75rem;
		background: #43bf92;	
	}
	.test .top img:first-child{
		margin-left: 20/75rem;
		padding-top: 20/75rem;
		float:left;
		width:26/75rem;
		height:48/75rem;		
	}
	.test .top img:last-child{
		margin-right: 20/75rem;
		padding-top: 20/75rem;
		float:right;
		width:48/75rem;
		height:48/75rem;		
	}
	.test .top .return{
		font-size: 30/75rem;
		color:#ffffff;
		display: inline-block;
		margin-bottom: 30/75rem;
		margin-left: 14/75rem;
		vertical-align: middle;
	}
	.test .top .feibu{
		font-size: 36/75rem;
		color:#ffffff;
		display: inline-block;
		text-align: center;
		margin-left: 180/75rem;
		margin-bottom:24/75rem;
		vertical-align: middle;
	
	}
	.test .center img{
		margin-top:-20px/75rem;
		height:825/75rem;
	}
	.footTest{
		margin-top: 176/75rem;;
	}
	.footTest span{
		font-size: 26/75rem;
		color:#FF6C6C;
	}
	.footTest p{
		font-size: 26/75rem;
		color:#545454;
		text-align: center;
	}
	.footTest .btn{
		width:600/75rem;
		height:90/75rem;
		background:#43bf92;
		border:2px solid #43bf92;
		font-size:30/75rem;
		color:#ffffff;
		border-radius: 10/75rem;
		margin-left:70/75rem;;

	}
	.show{
		display: none;
		width:350/75rem;
		height:150/75rem;
		/*border:1px solid black;*/
		/*background: black;*/
		border-radius: 15px;
		position:absolute;
		right:180/75rem;
		top:255/75rem;
	}
	.show p{
		color:#43bf92;
		font-size: 60/75rem;
		font-weight:700;
		text-align: center;
	}
	
	
</style>