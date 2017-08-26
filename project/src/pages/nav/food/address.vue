	<template>
		<div class="address">
			<div class="addressHead">
				<router-link :to="{path:'/shoppingCar/close'}">
					<img src="../../../../static/foodImg/arrow.png" alt="" />
					<span class="back">返回</span>
				</router-link>
				<span class="verify">收货地址</span>
			</div>
			<div class="addressMinute" v-for="addData in address">
				<p>
					<span class="addName">{{addData.addressName}}</span>
					<span>{{addData.addressTel}}</span>
				</p>
				<p>{{addData.address}}</p>
				<p>
					<span class="circle" @click="Hit"></span>
					<span>设为默认地址</span>
					<span>删除</span>
					<span>编辑</span>
				</p>
			</div>
			<router-link :to="{path:'/address/newAddress'}">
				<div class="newAdd">新增地址</div>
			</router-link>
			
		</div>
	</template>
	
	<script>
	import $ from 'jquery';
	var num = 0;
	export default{
		name:'address',
		data(){
			return{
				address:{}
			}
		},
		created(){
			this.$axios.get('/address').then(res =>{
					this.address = res.data;
				})
		},
		methods:{
			Hit(event){
				num++;
				if(num % 2){
					$(event.target).css('background','green')
					.parents('.addressMinute').siblings().find('.circle')
					.css('background','#fff')
				}else{
					$(event.target).css('background','#fff');
				}
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
	.addressHead{
		background:#43BF92;
		height:88/75rem;
		color:#fff;
		font-size: 30/75rem;
	}
	.addressHead img{
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
	.addressMinute{
		font-size:25/75rem;
		margin-top:70/75rem;
		line-height: 60/75rem;
		padding-left: 20/75rem;
		border-bottom: 1px solid #919191;
	}
	.addName{
		margin-right: 50/75rem;
	}
	.addressMinute p:nth-child(3){
		.circle{
			vertical-align:middle;
			display: inline-block;
			width:30/75rem;
			height:30/75rem;
			border: 1px solid #43BF92;
			border-radius: 50%;
			margin-right: 5/75rem;
			/*background:#43BF92;*/
		}
		span:nth-child(2){
			color:#43BF92;
			font-size: 26/75rem;
			margin-right: 370/75rem;
		}
		
	}
	.addressMinute:nth-child(2) p:nth-child(3) span:first-child{
		background: green;
	}
	.newAdd{
		width:512/75rem;
		height:77/75rem;
		font-size: 36/75rem;
		background: #43BF92;
		text-align: center;
		line-height: 77/75rem;
		border-radius: 10/75rem;
		margin:20/75rem auto;
		color:#fff;
	}
	</style>