<template>
	<div class="shoppingCar clearfix">
		<div class="shoppingCarHead">
			<router-link :to="{path:'/food'}">
				<img src="../../../../static/foodImg/x.png" alt="" />
				<span class="shut">关闭</span>
			</router-link>
			<span>购物车</span>
			<span>编辑</span>
		</div>
		<div class="shoppingCarCon" v-for="CarData in cars">
			<div class="CarConLeft">
				<span @click="btn" class="circles"></span>
				<img :src="CarData.url" alt="" />	
			</div>
			<div class="CarConRight">
				<p>
					<span>{{CarData.title}}</span>
					<span>{{CarData.editing}}</span>
				</p>
				<p>
					<span>{{CarData.price}}</span>
					<span>{{CarData.num}}</span>
				</p>
			</div>
		</div>
		<div class="shoppingCarFoot">
			<div class="carFootLeft">
				<span class="circle" @click="bths"></span>
				<span class="all">全选</span>
				<p>
					<span>合计:</span>
					<span>￥0</span>
					<span>不含运费</span>
				</p>
			</div>
			<router-link :to="{path:'/shoppingCar/close'}">
				<div class="carFootRight">
					结算&nbsp;&nbsp;(0)
				</div>
			</router-link>
			
		</div>
	</div>
</template>

<script>
import $ from 'jquery';
var num = 0;
export default {
	name:'shoppingCar',
	data(){
		return{
			cars:{}
		}
	},
	created(){
		this.$axios.get('/car').then(res =>{
				this.cars = res.data.car;
			})
	},
	methods:{
		btn(event){
			num++;
			if(num % 2){
				$(event.target).css('background','green');
			}else{
				$(event.target).css('background','#fff');
			}
		},
		bths(event){
			num++;
			if(num % 2){
				$(event.target).css('background','#43BF92');
				$('.circles').css('background','#43BF92')
			}else{
				$(event.target).css('background','#fff')
				$('.circles').css('background','#fff')
			}
		}
	}
	
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
.shoppingCar{
	background: #f1f1f1;
}
.shoppingCarHead{
	height:88/75rem;
	background:#43BF92;
	font-size:30/75rem;
	color: #fff;
	margin-bottom: 30/75rem;
}
.shoppingCarHead img{
	display: inline-block;
	padding-top:30/75rem;
	padding-left: 20/75rem;
}
.shoppingCarHead .shut{
	display: inline-block;
	padding-right: -80/75rem;
	color:#fff;
}
.shoppingCarHead span:nth-child(2){
	font-size:36/75rem;
	margin-right: 205/75rem;
}
.shoppingCarCon{
	background: #fff;
	margin-bottom: 30/75rem;
}
.CarConLeft .circles{
	display: inline-block;
	width:30/75rem;
	height:30/75rem;
	border: 1px solid #43BF92;
	border-radius: 50%;
	margin-bottom: 75/75rem;
	margin-left: 20/75rem;
}
.CarConLeft img{display: inline-block;}
.CarConRight,.CarConLeft{
	display: inline-block;
	padding-top:20/75rem;
}
.CarConRight p{
	font-size: 28/75rem;
	padding-bottom:110/75rem;
}
.CarConRight p:first-child span:first-child{
	margin-right: 130/75rem;	
}
.CarConRight p:first-child span:nth-child(2),.CarConRight p:nth-child(2) span:nth-child(2){
	font-size: 20/75rem;
}
.CarConRight p:nth-child(2) span:first-child{
	color:#E56B6B;
	margin-right: 320/75rem;
}

.shoppingCarFoot{
	background:#fff;
	font-size: 30/75rem;
	position:fixed;
	bottom:0/75rem;
}
.carFootLeft,.carFootRight{
	display: inline-block;
}
.circle{
	display: inline-block;
	width:30/75rem;
	height:30/75rem;
	border: 1px solid #43BF92;
	border-radius: 50%;
	margin-top: 30/75rem;
	margin-left: 20/75rem;
	margin-right: 20/75rem;
}
.carFootLeft .all{
	padding-top:20/75rem;
	margin-right: 200/75rem;
}
.carFootLeft p{
	display:inline-block;
}
.carFootLeft p span:first-child{
	font-size: 26/75rem;
	margin-right:25/75rem;
}
.carFootLeft p span:nth-child(2){
	font-size: 16/75rem;
	color:#43BF92;
	margin-right:15/75rem;
}
.carFootLeft p span:nth-child(3){
	font-size: 16/75rem;
}
.carFootRight{
	width:184/75rem;
	height:100/75rem;
	background:#43BF92;
	text-align: center;
	line-height: 100/75rem;
	color:#fff;
}
</style>