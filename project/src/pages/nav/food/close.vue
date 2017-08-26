<template>
	<div class="indent clearfix">
		<div class="indentHead">
			<router-link :to="{path:'/shoppingCar'}">
				<img src="../../../../static/foodImg/arrow.png" alt="" />
				<span class="back">返回</span>
			</router-link>
			<span class="verify">确认订单</span>
		</div>
		<div class="indentAddress">
			<img src="../../../../static/foodImg/zuobiao.png"/>
			<div class="address">
				<p>
					<span>姓名：王炎</span>
					<span>15181321992</span>
				</p>
				<p>地址：北京市海淀区西三旗桥东金燕龙大厦</p>
			</div>
			<img src="../../../../static/foodImg/right.png" alt="" />
		</div>
		<router-link :to="{path:'/close/item'}">
			<div class="indentCon">
				<img src="../../../../static/foodImg/huang.png" alt="" />
				<div class="indentConcon">
					<p>
						东北有机红谷黄小米
						<span>￥45.00</span>
					</p>
					<p>2016秋收新东北有机红谷黄小米粒<span>x1</span></p>
					<p>2750g(5.5斤）特产杂粮小米包邮</p>
				</div>
			</div>
		</router-link>
		
		<div class="Delivery">
			<p>
				<span>配送方式</span>
				<span>免运费</span>
			</p>
			<p>快递发货</p>
		</div>
		<div class="message">
			买家留言：
			<span>无</span>
		</div>
		<div class="total">
			合计
			<span>￥45.00</span>
		</div>
		<div class="price">
			商品金额
			<span>￥45.00</span>
		</div>
		<div class="freight">
			运费
			<span>+￥0.00</span>
		</div>
		<router-link :to="{path:'/close/address'}">
			<div class="pay">
				合计：
				<span>￥45.00</span>
				<span>去支付</span>
			</div>
		</router-link>
	</div>
</template>

<script>
export default{
	name:'close',
	data(){
		return{
			
		}
	}
}
</script>

<style scoped lang="less">
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
.indent{
	margin-bottom: 120/75rem;
}
.indentHead{
	background:#43BF92;
	height:88/75rem;
	color:#fff;
	font-size: 30/75rem;
}
.indentHead img{
	display: inline-block;
	padding-top:20/75rem;
	margin-left: 20/75rem;
	margin-right: 10/75rem;
}
.back{
	color:#fff;
	display: inline-block;
	vertical-align:top;
	padding-top:18/75rem;
	font-size: 30/75rem;
}
.verify{
	font-size: 36/75rem;
	margin-left: 150/75rem;
}
.indentAddress{
	margin:50/75rem 0;
	border-bottom: 1px solid #7E7E7E;
	padding-bottom: 30/75rem;
}
.indentAddress img,.indentAddress div{
	display: inline-block;
	font-size: 30/75rem;
	line-height:50/75rem ;
}
.indentCon{
	font-size: 22/75rem;
	margin-bottom: 70/75rem;
	color:#333;
}
.indentCon img,.indentCon .indentConcon{
	display: inline-block;
}
.indentCon img{
	margin:0 20/75rem;
	vertical-align:top;
}
.indentConcon p:first-child{
	font-size:28/75rem;
	margin-bottom:20/75rem;
}
.indentConcon p:first-child span{
	font-size:22/75rem;
	color:#DE2626;
	margin-left: 150/75rem;
}
.indentConcon p:nth-child(2){
	margin-bottom: 20/75rem;
}
.indentConcon p:nth-child(2) span{
	margin-left:100/75rem;
}
.Delivery{
	margin-left: 20/75rem;
	margin-bottom: 138/75rem;
}
.Delivery p:first-child span:first-child{
	margin-right: 460/75rem;
	font-size: 30/75rem;
}
.Delivery p:first-child span:nth-child(2){
	font-size: 28/75rem;
}
.Delivery p:nth-child(2){
	font-size: 24/75rem;
	margin-left: 603/75rem;
}
.message{
	margin-left: 20/75rem;
	font-size: 30/75rem;
	margin-bottom: 40/75rem;
}
.message span{
	color:#ccc;
}
.total{
	margin-left: 20/75rem;
	font-size: 30/75rem;
	margin-bottom: 145/75rem;
}
.total span{
	color:#E45C5C;
	margin-left: 525/75rem;
}
.price{
	margin-left: 20/75rem;
	font-size: 30/75rem;
	margin-bottom: 30/75rem;
}
.price span{
	margin-left: 465/75rem;
}
.freight{
	margin-left: 20/75rem;
	font-size: 30/75rem;
	margin-bottom: 20/75rem;
}
.freight span{
	margin-left: 515/75rem;
}
.pay{
	font-size: 30/75rem;
	margin-left: 353/75rem;
	position:fixed;
	bottom:0;
}
.pay span:first-child{
	color:#E45C5C;
}
.pay span:nth-child(2){
	display: inline-block;
	width: 180/75rem;
	height:70/75rem;
	text-align: center;
	background:#FF3545 ;
	line-height: 70/75rem;
	color:#fff;
	font-size: 36/75rem;
}
</style>