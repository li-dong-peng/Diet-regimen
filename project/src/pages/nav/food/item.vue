<template>
	<div class="item clearfix">
		<div class="itemHead">
			<router-link :to="{path:'/shoppingCar/close'}">
				<img src="../../../../static/foodImg/arrow.png" alt="" />
				<span class="back">返回</span>
			</router-link>
			<span class="verify">订单详情</span>
		</div>
		<div class="itemAddress">
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
		<div class="itemDate">
			<p>
				<span>订单号：830179046666</span>
				<span>下单时间：2016-12-01</span>
			</p>
		</div>
		<div class="itemCon">
			<img src="../../../../static/foodImg/item.png" alt="" />
			<div class="itemComRight">
				<p>
					<span>精品红豆薏仁粉</span>
					<span>￥98</span>
				</p>
				<p>
					<span>大小：大盒；包装：盒装</span>
					<span>X1</span>
				</p>
			</div>
			<p class="itemNum">数量：<span>1</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价格：<span>￥98</span></p>
		</div>
		<p class="logistics">物流跟踪</p>
		<div class="itemFoot" v-for="itemData in itemList">
			<span class="circle"></span>
			<div class="itemFootCon">
				<p>{{itemData.title}}</p>
				<p>
					<span>{{itemData.itemDa}}</span>
					<span>{{itemData.itemTe}}</span>
				</p>
			</div>
		</div>
		<div class="itemBtn" @click="affirm">确认收货</div>
		<div class="affirm">收货成功</div>
	</div>


</template>
<script>
import $ from 'jquery';
export default {
	name:'item',
	data(){
		return{
			itemList:{}
		}
	},
	created(){
		this.$axios.get('/itemList').then(res =>{
			this.itemList = res.data;
		})
	},
	methods:{
		affirm(event){
			$(event.target).siblings('.affirm').show();
			setTimeout(function(){
				$(event.target).siblings('.affirm').hide();
			},500)
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
.item{
	margin-bottom: 120/75rem;
}
.itemHead{
	background:#43BF92;
	height:88/75rem;
	color:#fff;
	font-size: 30/75rem;
}
.itemHead img{
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
.itemAddress{
	background: #fff;
	padding-top:50/75rem;
	padding-bottom: 30/75rem;
	padding-bottom: 110/75rem;
}
.itemAddress img,.itemAddress div{
	display: inline-block;
	font-size: 30/75rem;
	line-height:50/75rem ;
}
.itemDate{
	background: #f1f1f1;
	font-size: 24/75rem;
	padding:40/75rem 0 15/75rem 20/75rem;
}
.itemDate p span:first-child{
	margin-right: 190/75rem;
}
.itemCon{
	background: #fff;
	padding:20/75rem;
	font-size: 24/75rem;
}
.itemCon div,.itemCon img{
	display: inline-block;
	vertical-align: top;
}
.itemCon img{
	margin-right:40/75rem ;
}
.itemComRight{
	padding-bottom: 30/75rem;
}
.itemComRight p:first-child{
	padding-bottom: 20/75rem;
	font-size: 26/75rem;
	span:first-child{
		margin-right: 300/75rem;
	}
}
.itemComRight p:nth-child(2){
	color:#959595;
	span:first-child{
		margin-right: 230/75rem;
	}
}
.itemNum{
	color:#959595;
	margin-left: 450/75rem;
	span{
		color:#000;
	}
}
.logistics{
	background: #f1f1f1;
	font-size: 26/75rem;
	padding:80/75rem 0 15/75rem 20/75rem;
}
.itemFoot{
	background: #fff;
	padding-left: 20/75rem;
	font-size: 26/75rem;
	border-bottom: 1px solid #ccc;
	.circle{
		vertical-align:middle;
		margin-bottom: 50/75rem;
		display: inline-block;
		width:30/75rem;
		height:30/75rem;
		border: 1px solid #43BF92;
		border-radius: 50%;
		margin-right: 5/75rem;
	}
	.itemFootCon{
		display: inline-block;
		padding:30/75rem 0;
		p:first-child{
			padding-bottom: 20/75rem;
		}
		p:nth-child(2){
			font-size:22/75rem;
			span{
				margin-right: 40/75rem;
			}
		}
	}
}
.itemFoot .circle{
	background:#43BF92;
}
.itemBtn{
	width:510/75rem;
	height:80/75rem;
	background: #43BF92;
	color:#fff;
	text-align: center;
	line-height: 80/75rem;
	font-size: 36/75rem;
	border-radius: 10/75rem;
	margin:56/75rem auto;
}
.affirm{
	width:513/75rem;
	height:76/75rem;
	border-radius: 10/75rem;
	text-align: center;
	line-height: 76/75rem;
	margin:0 auto;
	font-size: 36/75rem;
	background: #69C1A0;
	opacity: 0.8;
	position:absolute;
	top:180/75rem;
	left:118/75rem;
	display: none;
	color:#fff;
}
</style>