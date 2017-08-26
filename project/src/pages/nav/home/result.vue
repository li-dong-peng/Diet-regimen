<template>
	<div class='result'>
		
		<div class='top'>
			<router-link :to="{path:'/index'}">
				<img src="../../../../static/pic/close.png" alt="" />
				<span class="close">关闭</span>
			</router-link>
			<span class="feibu">肺部测试</span>
			<img src="../../../../static/pic/share.png" alt="" />
		</div>
		<div class="testResult">
			<p>测试结果</p>
			<p>高度危险！您目前属于高危阶段，需要引起重视，建议 在医生指导下定期复查或体检。在体检时建议加做胸部 低剂量螺旋CT。做到有效预防，定期筛查。</p>
			<p>———— 结果仅供参考  ————</p>
		</div>
		<div class="cutline"></div>		
		<div class="menu">
			<p>为你推荐：</p>
			<div class="list">
				<div class="first">
				<img src="../../../../static/pic/1.png" alt="" />
				<p>黑木耳</p>
			</div>
			<div class="second">
				<img src="../../../../static/pic/2.png" alt="" />
				<p>清肺汤</p>
			</div>
			<div class="third">
				<img src="../../../../static/pic/1.png" alt="" />
				<p>黑木耳</p>
			</div>
				
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		name:'result',
		data:function(){
			return {
				
			}
		}
	}
</script>

<style scoped lang='less'>
	
	.result .top{	
		overflow: hidden;
		width:750/75rem;
		height:88/75rem;
		background: #43bf92;	
	}
	.result .top img:first-child{
		margin-left: 20/75rem;
		padding-top: 30/75rem;
		float:left;
		width:30/75rem;
		height:30/75rem;		
	}
	.result .top img:last-child{
		margin-right: 20/75rem;
		padding-top: 20/75rem;
		float:right;
		width:48/75rem;
		height:48/75rem;		
	}
	.result .top .close{
		font-size: 30/75rem;
		color:#ffffff;
		display: inline-block;
		margin-bottom: 30/75rem;
		margin-left: 14/75rem;
		vertical-align: middle;
	}
	.result .top .feibu{
		font-size: 36/75rem;
		color:#ffffff;
		display: inline-block;
		/*text-align: center;*/
		margin-left: 180/75rem;
		margin-bottom:24/75rem;
		vertical-align: middle;
	}
	.result .testResult{
		margin-top: 108/75rem;
		margin-left: 20/75rem;
		margin-right: 20/75rem;
		
	}
	.result .testResult p{
		color:#5b5a5a;
		
	}
	.result .testResult p:nth-child(1){
		font-size: 30/75rem;
		text-align: center;
	}
	.result .testResult p:nth-child(2){
		font-size: 22/75rem;
		text-align: left;
		margin:46/75rem 94/75rem;
		line-height: 38/75rem;
	}
	.result .testResult p:nth-child(3){
		color:#CCCCCC;
		font-size: 20/75rem;
		text-align: center;
		margin-top: 166/75rem;
	}
	.result .cutline{
		border: 14px solid #f1f1f1;
		margin-top: 132/75rem;
	}
	.result .menu{
		margin-top: 28/75rem;
		margin-left: 20/75rem;
		margin-right: 20/75rem;
	}
	.result .menu p:first-child{
		font-size: 28/75rem;
	}
	.result .menu .list {
		margin:16/75rem 28/75rem;	
	}
	.result .menu .list .first,.second,.third{
		width:300/75rem;
		display: inline-block;
	}
	.result .menu .list img{
		width:300/75rem;
		height:130/75rem;
		
	}
	.result .menu .list p{
		font-size: 22/75rem;
		color:#5b5a5a;
		text-align: center;
	}
	
</style>