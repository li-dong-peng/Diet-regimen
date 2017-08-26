<template>
	<div class="details ">
		<div class="detailsHead clearfix">
			<router-link :to="{path:'/food'}">
				<img src="../../../../static/foodImg/arrow.png" alt="" /><p>返回</p>
			</router-link>
			<img src="../../../../static/foodImg/fen.png" alt="" class="fen" @click="share"/>
			<div class="detailsBtn">分享成功</div>
		</div>
		<p class="detailsTitle">
			<span>红豆薏仁粉</span>
			<span>￥98</span>
		</p>
		<!--商品详情-->
		<p class="detailsPro">商品详情</p>
		<div class="detailDet clearfix">
			<img src="../../../../static/foodImg/xq2.png" alt="" />
			<div class="detailByte">
				<h2>不加食品添加剂</h2>
				<p>纯谷物研磨&nbsp;&nbsp;原汁原味</p>
				<p>我们</p>
				<p>只做天然五谷食品</p>
			</div>
		</div>
		<!--产品特点-->
		<div class="detailsTe">
			<p>产品特点</p>
			<div class="detailsCir"></div>
			<div class="detailsCon">
				精选
			</div>
			<div class="detailsContet">
				沂蒙姑娘精选来自沂蒙地区农家种植的优质红小豆进行严格
				的人工挑选拣出色泽鲜艳、颗粒饱满的豆子集中运往沂蒙姑
				娘加工车间进行淘洗、晾干、烘培等一系列加工工艺，确保
				粉材优质。
			</div>
		</div>
		<!--现磨-->
		<div class="detailsRg">
			<div class="detailsCir"></div>
			<div class="detailsCon">
				现磨
			</div>
			<div class="detailsContet">
				沂蒙姑娘所有的谷物粉都是现加工现磨包装发货的，我们杜
				绝存储尘粉囤货不做提前加工以确保粉的营养价值最大化我
				们要做的是给每一位来购买沂蒙姑娘谷物粉的每一个顾客一
				个满意的答卷。
			</div>
		</div>
		<!--美包-->
		<div class="detailsBu">
			<div class="detailsCir"></div>
			<div class="detailsCon">
				美包
			</div>
			<div class="detailsContet">
				沂蒙姑娘精选来自沂蒙地区农家种植的优质红小豆进行严格
				的人工挑选拣出色泽鲜艳、颗粒饱满的豆子集中运往沂蒙姑
				娘加工车间进行淘洗、晾干、烘培等一系列加工工艺，确保
				粉材优质。
			</div>
		</div>
		<!--粉粉-->
		<div class="detailsPink">
			<p>粉粉</p>
			<p>的主要食材</p>
			<img src="../../../../static/foodImg/xq8.png" alt="" />
		</div>
		<!--传统工艺-->
		<div class="detailsCraft">
			<p>传统工艺&nbsp;精细研磨</p>
			<p>TRADITIONAL PROCESS FINE GRINDING</p>
			<div class="detailsCraftLeft">
				<p></p>
				<span>低温烘焙，瞬间熟化工艺</span>
			</div>
			<div class="detailsCraftRight">
				<p></p>
				研磨成粉
			</div>
		</div>
		<div class="detailsCar clearfix">
			 <p>加入购物车</p>
			 <div class="detailsCarTop">
			 	<span>食谱</span>
			 	<p><img src="../../../../static/foodImg/xq11.png" alt="" /></p>
			 </div>
			 <div class="detailsCarBom">
			 	<span>单品</span>
			 	<p><img src="../../../../static/foodImg/xq12.png" alt="" /></p>
			 	<p><img src="../../../../static/foodImg/xq13.png" alt="" /></p>
			 </div>
			 <div class="detailsCarImg">
			 	<img src="../../../../static/foodImg/xq14.png" alt="" />
			 	<img src="../../../../static/foodImg/xq14.png" alt="" />
			 	<img src="../../../../static/foodImg/xq14.png" alt="" />
			 	<router-link :to="{path:'/shoppingCar'}" class="shoppingCar">
			 		<img src="../../../../static/foodImg/car.png" alt=""/>
			 	</router-link>
			 	
			 </div>
		</div>	
	</div>
</template>
<script>
	import $ from 'jquery';
	export default {
		name:'detail',
		data(){
			
			return{
				
			}
		},
		methods:{
			share(event){
				$(event.target).siblings('.detailsBtn').show();
				setTimeout(function(){
					$(event.target).siblings('.detailsBtn').hide();
				},500)
			}	
		},
	}
</script>

<style  scoped lang="less">
*{
	margin: 0;padding: 0;
}

.clearfix:after{
		height:0;
		content:" ";
		display:block;
		overflow:hidden;
		clear:both;
	}
.clearfix{
	zoom:1;			/*IE低版本浏览器不支持after伪类所以要加这一句*/
}
.details{
	background: #F0EFEF;
	margin-bottom:120/75rem;
}
.detailsHead{
	width: 750/75rem;
	height: 378/75rem;
	background: url('../../../../static/foodImg/xq1.png') 0 bottom;
}
.detailsHead img:first-child{
	display: inline-block;
	width:30/75rem;
	height:40/75rem;
	margin:15/75rem 10/75rem;
}
.fen{
	width:48/75rem;
	height:48/75rem;
	position:absolute;
	right:20/75rem;
	top:20/75rem;
}
.detailsHead p{
	font-size: 30/75rem;
	position:absolute;
	top:22/75rem;
	left:60/75rem;
	color:rgba(255,255,255,0.8)
}
.detailsBtn{
	width:300/75rem;
	height:60/75rem;
	border-radius: 10/75rem;
	color:#888;
	font-size: 38/75rem;
	background: rgba(255,255,255,0.5);
	text-align: center;
	margin:0 auto;
	padding-top:5/75rem;
	display: none;
}
.detailsTitle{
	margin-top:-30/75rem;
	margin-bottom: 50/75rem;
}
.detailsTitle span:first-child{
	font-size: 40/75rem;
	margin-right: 400/75rem;
	margin-left: 10/75rem;
}
.detailsTitle span:nth-child(2){
	font-size: 40/75rem;
	color:#EA1212;
}
.detailsPro{
	text-align: center;
	font-size: 26/75rem;
	padding-bottom: 20/75rem;
}
.detailDet{
	position:relative;
	margin-bottom:50/75rem;
}
.detailByte{
	text-align: center;
	position:absolute;
	top:80/75rem;
	left:220/75rem;
}
.detailByte h2{
	font-size: 41/75rem;
	margin-bottom: 20/75rem;
	color:#fff;
}
.detailByte p{
	font-size: 28/75rem;
	color:rgba(255,255,255,0.6);
	line-height:50/75rem;
}
.detailsTe{
	min-height: 500/75rem;
	background: url('../../../../static/foodImg/xq3.png') no-repeat 250/75rem 50/75rem;
}
.detailsTe p{
	text-align: center;
	font-size: 36/75rem;
	margin-bottom: 30/75rem;	
}
.detailsTe .detailsCir{
	width:160/75rem;
	height:160/75rem;
	border-radius: 50%;
	background: url('../../../../static/foodImg/xq5.png')no-repeat 0 -50/75rem;
	margin-left: 300/75rem;
	margin-top:150/75rem;
}
.detailsTe .detailsCon,.detailsRg .detailsCon,.detailsBu .detailsCon{
	font-family: "华文行楷";
	width:50/75rem;
	margin-top:-160/75rem;
	margin-left: 160/75rem;
	font-size: 68/75rem;
	margin-bottom: 30/75rem;
}
.detailsTe .detailsContet,.detailsRg .detailsContet,.detailsBu .detailsContet{
	width:530/75rem;
	font-size: 20/75rem;
	margin:0 auto;
	line-height: 40/75rem;
}
.detailsRg{
	background: url('../../../../static/foodImg/xq4.png') no-repeat 0 50/75rem;
	padding-top:178/75rem;
}
.detailsRg .detailsCir{
	width:160/75rem;
	height:160/75rem;
	border-radius: 50%;
	background: url('../../../../static/foodImg/xq6.png')no-repeat -50/75rem -20/75rem;
	margin-left: 300/75rem;
	margin-top:50/75rem;
}
.detailsBu{
	padding-top:98/75rem;
	background:url('../../../../static/foodImg/xq3.png') no-repeat right 40/75rem;
}
.detailsBu .detailsCir{
	width:160/75rem;
	height:160/75rem;
	border-radius: 50%;
	background: url('../../../../static/foodImg/xq7.png')no-repeat;
	margin-left: 300/75rem;
	margin-top:50/75rem;
}
.detailsPink{
	background: url('../../../../static/foodImg/xq4.png') no-repeat;
	text-align: center;
	padding-top:86/75rem;
	position:relative;
	padding-bottom:300/75rem;
}
.detailsPink p:first-child{
	font-size: 32/75rem;
	font-weight: bold;
	line-height: 60/75rem;
}
.detailsPink p:nth-child(2){
	font-size: 26/75rem;
}
.detailsPink img{
	position:absolute;
	top:140/75rem;
	left:20/75rem;
}
.detailsCraft{
	background:url('../../../../static/foodImg/xq3.png') no-repeat right 20/75rem;
	padding-top: 160/75rem;
	text-align:center;
}
.detailsCraft p:first-child{
	font-size: 44/75rem;
	font-family: "宋体";
}
.detailsCraft p:nth-child(2){
	font-size: 12/75rem;
	margin-bottom: 50/75rem;
	font-family: "宋体";
}
.detailsCraftLeft p{
	width:235/75rem;
	height:235/75rem;
	border-radius:50%;
	background:url('../../../../static/foodImg/xq10.png') -50/75rem;
}
.detailsCraftLeft,.detailsCraftRight{
	display: inline-block;
	text-align: center;
	font-size: 23/75rem;
	margin-right: 40/75rem;
	padding-bottom: 150/75rem;
}
.detailsCraftRight p{
	width:235/75rem;
	height:235/75rem;
	border-radius:50%;
	background:url('../../../../static/foodImg/xq9.png') -50/75rem;
}
.detailsCar{
	background: #fff;
	position:relative;
}
.detailsCar p{
	font-size: 26/75rem;
	padding-top: 30/75rem;
}
.detailsCarTop span,.detailsCarTop p,.detailsCarBom p,.detailsCarBom span{
	display: inline-block;
}
.detailsCarTop span{
	font-size: 20/75rem;
	vertical-align:top;
	margin-top:100/75rem;
	margin-left: 30/75rem;
	margin-right:40/75rem;
}
.detailsCarBom span{
	font-size: 20/75rem;
	margin-left: 30/75rem;
	margin-right:40/75rem;
	vertical-align:top;
	margin-top:76/75rem
}
.detailsCarBom img{
	width:100/75rem;
	height:100/75rem;
}
.detailsCarBom p{
	width:100/75rem;
	height:100/75rem;
	margin-right:95/75rem;
}
.detailsCarImg img:first-child{
	position:absolute;
	left:410/75rem;
	top:80/75rem;
}
.detailsCarImg img:nth-child(2){
	position:absolute;
	left:220/75rem;
	top:290/75rem;
}
.detailsCarImg img:nth-child(3){
	position:absolute;
	left:430/75rem;
	top:290/75rem;
}
.detailsCarImg .shoppingCar{
	position:absolute;
	left:100/75rem;
	top:100/75rem;
}
</style>