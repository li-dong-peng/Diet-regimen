<template>
	<div class="case">
	
		<div class='top'>
			<router-link :to="{path:'/index'}">
				<img src="../../../../static/pic/leftArrow.png" alt="" />
				<span class="return">返回</span>
			</router-link>		
		</div>
		<div class="content">
			<div class="title">
				<p>八大零食安全<span>隐患</span>，你中 了几个？</p>
			</div>
			<div class="author">
				<p>作者：王焱</p>
				<img src="../../../../static/pic/01.png" alt="" />
				<p>你是重度零食依赖者吗？无论看书看片，心情好的时候，还是心情 不好的时候，无论忙的时候还是闲的时候，嘴巴可都没闲过！吃吃 喝喝本是人生常态，要不我们为什么活着！课时如今呢零食里的添加剂越来越多，即使很多标榜‘安全’的零食，也存在很多隐患。一定要擦亮眼睛呀！</p>
			</div>
			<div class="detail">
				<p>1.乳饮料</p>
				<p>其实没啥蛋白质。乳饮料≠奶！依据国家标准奶中的蛋白质含量不得低于2.5g／100ml，而乳饮料或乳酸菌饮料蛋白质含量不得低于1g／100ml。乳饮料不能代替奶。有些乳饮料中含有乳酸菌，可以滋润肠道，但每天不宜多喝，不能代替水。所以喝牛奶相关的饮料，一定要看配料表，配料表的成分都是由大到小排的，如果乳饮料第一位是水，我觉得吧，就当水喝吧。别指望有多少蛋白质。</p>
				<p>2.果汁</p>
				<p>主要是含糖量过高。现在很多维生素果汁饮料含糖量普遍较高，一些饮料含糖量为7.5g／100g，那么一瓶300ml的饮品仅含糖量贡献的热量就有90千卡，建议每天不要超过1瓶。果汁中的VC含量不能代替新鲜水果或鲜榨果汁，在生产过程中会加入人工VC。</p>
				<p>3.冰品</p>
				<p>细菌总数很可能超标。吃冰品不能贪多，用餐前两小时、睡前、剧烈运动大量流汗之后，会刺激肠胃黏膜引起痉挛、溃疡等疾病。女生大姨妈期间禁止食用！冰品细菌容易超标，选择品牌很重要。自己做也要注意密封冷冻。</p>
				<p>4.薯片</p>
				<p>大家都知道薯片会增肥，因为它的脂肪含量、盐分较高。整包都吃下去的时候，你的血压会升高。老也吃薯片，吃得过多会导致肥胖、高血压、糖尿病等。油炸食品会致癌，长期摄入会像吸烟一样长期积累毒素，能戒掉还是戒掉吧。不能戒，也要少吃点。</p>
			</div>
			<div class="footer">
				<p>为你推荐</p>
				<div class="footer1">
					<span>食谱</span>
					<img src="../../../../static/pic/2222.png" alt="" />
				</div>
				<div class="footer2">
					<span>单品</span>
					<img src="../../../../static/pic/333.png" alt="" /><img src="../../../../static/pic/tianjia.png" alt="" />
					<img src="../../../../static/pic/444.png" alt="" /><img src="....//../../static/pic/tianjia.png" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang='less'>
	
	.case .top{	
		overflow: hidden;
		width:750/75rem;
		height:88/75rem;
		background: #43bf92;	
	}
	.case .top img{
		margin-left: 20/75rem;
		padding-top: 20/75rem;
		float:left;
		width:26/75rem;
		height:48/75rem;		
	}
	.case .top span{
		font-size: 30/75rem;
		color:#ffffff;
		display: inline-block;
		margin-bottom: 30/75rem;
		margin-left: 14/75rem;
		vertical-align: middle;
	}
	.case .content{
		margin:40/75rem 20/75rem;
	}
	.case .content .title{
		width:670/75rem;
		border-bottom: 1px solid #999999;
	}
	.case .content .title p{
		color:#43bf92;
		font-size: 50/75rem;
		text-align: center;
		margin-left: 40/75rem;
		padding-bottom: 34/75rem;
		line-height: 110/75rem;
	}
	.case .content .title span{
		color:#c53336;
		font-size: 66/75rem;
	}
	.case .content .author p:nth-child(1){
		font-size: 22/75rem;
		color:#6c6c6c;
	}
	.case .content .author img{
		width: 336/75rem;
		height:222/75rem;
		margin:26/75rem auto;
	}
	.case .content .author p:nth-of-type(2){
		font-size: 22/75rem;
		color:#43bf92;
		margin-bottom: 54/75rem;
	}
	.case .content .detail p{
		margin-bottom: 22/75rem;
		line-height: 38/75rem;
	}
	.case .content .detail p:nth-child(1),p:nth-child(3),p:nth-child(5),p:nth-child(7){
		font-size: 28/75rem;
		color:#43bf92;
	}
	.case .content .detail p:nth-child(2),p:nth-child(4),p:nth-child(6),p:nth-child(8){
		font-size: 22/75rem;
		color:#000000;
	}
	.case .content .footer p:nth-child(1){
		font-size: 32/75rem;
		color:#000000;
	}
	.case .content .footer .footer1,.footer2{
		margin-left:36/75rem;
		margin-top: 44/75rem;
	}
	.case .content .footer .footer1 span{
		color:#000000;
		font-size: 22/75rem;
		margin-right:48/75rem;
		
	}
	.case .content .footer .footer1 img{
		width: 290/75rem;
		height: 110/75rem;
		display: inline-block;
		vertical-align: middle;
	}
	.case .content .footer .footer2 span{
		color:#000000;
		font-size: 22/75rem;
		margin-right:48/75rem;
	}
	.case .content .footer .footer2 img:nth-of-type(1),img:nth-of-type(3){
		width: 100/75rem;
		height: 100/75rem;
		display: inline-block;
		vertical-align: middle;
		margin-right: 64/75rem;
	}
	.case .content .footer .footer2{
		position: relative;
	}
	.case .content .footer .footer2 img:nth-of-type(2){
		position: absolute;
		left:230/75rem;
		top:-21/75rem;
	}
	.case .content .footer .footer2 img:nth-of-type(4){
		position: absolute;
		right:230/75rem;
		top:-21/75rem;
	}
</style>