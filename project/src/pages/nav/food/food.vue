<template>
<div class="food clearfix">
	<div class="foodTop">
		<!--头部-->
	<div id="food">
		<div class="foodHead">食疗坊</div>
		<div class="foodSearch">
			<input type="text" placeholder="搜索食谱"/>
		</div>
		<!-- 图标   -->
		<div class="foodList">
			<ul>
				<li v-for="data in foodLists"> 
					<div>
						<img :src="data.img" alt="" />
						{{data.title}}
					</div>
				</li>
			</ul>
		</div>
		<!-- 导航 -->
		<div class="nav"> 
			<ul>
				<li>排毒</li>
				<li>抗皱</li>
				<li>祛斑</li>
				<li>美白</li>
				<li>护发</li>
				<li>润肤</li>
				<li>祛痘</li>
			</ul>
		</div>
	</div>
	<!--内容区域-->
		<div class="content clearfix" v-for="con in content">
			<router-link :to="{path:'/food/'+con.path}">
				<div class="conLeft">
					<img :src="con.url" alt="" />
				</div>
				<div class="conRight">
					<h2>{{con.title}}</h2>
					<p>{{con.cont}}</p>
					<p>
						<span>{{con.price}}</span>
						<span>{{con.people}}</span>
						<span>. . .</span>
					</p>
				</div>
			</router-link>
		</div>
		<!--购物车图标-->
		<router-link :to="{path:'/shoppingCar'}">
			<div class="car">
				<img src="../../../../static/foodImg/car.png" alt="" />
			</div>
		</router-link>	
</div>
<foots></foots>
</div>
</template>
<script>
	import foots from '../../../pages/foots.vue';
	
	export default{
		name:'food',
		components:{
			foots
		},
		data(){
			return {
				foodLists:{},
				content:{}
			}
		},
		created(){
			this.$axios.get('/food').then(res =>{
				this.foodLists = res.data.list;
				this.content = res.data.content;
			});
		}
	}
</script>
<style scoped lang="less">
.food{
	background: #F1F1F1;
	position:relative;
}

.foodTop{
	background: #fff;
	margin-bottom: 20/75rem;
}
*{
	margin: 0;padding: 0;
}
.bd{
	height: 20/75rem;
	background: #f1f1f1;
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

.foodHead{
	width:10rem;
	height:80/75rem;
	text-align: center;
	line-height: 80/75rem;
	background:#43BF92;
	color:#fff;
	font-size:36/75rem;
}
.foodSearch{
	padding-top:20/75rem;
	padding-left:15/75rem;
}
.foodSearch input{
	display:block;
	width:710/75rem;
	font-size:28/75rem;
	height: 60/75rem;
	text-align: center;
	border-radius: 5px;
	border:1px solid #ccc;
	background: #e7e7e7 url('../../../../static/foodImg/sousuo.png') no-repeat 650/75rem center;
}
.foodTop .foodList{
	margin: 0 auto;
}
.foodTop .foodList ul li div{
	width:120/75rem;
	height:110/75rem;
}
.foodTop .foodList ul li{
	list-style: none;
	display: inline-block;
	font-size:28/75rem;
	text-align: center;
	margin:10/75rem 10/75rem;
	font-size: 26/75rem;
}
.foodTop .foodList ul{
	margin-left: 20/75rem;
}
.foodTop .foodList ul li img{
	margin:0 auto;
}
.nav{
	width:680/75rem;
	margin-left:30/75rem ;
	border-top: 1px solid #ccc;
	margin-bottom:20/75rem;
}
.nav ul{
	line-height: 60/75rem;
}
.nav ul li{
	list-style: none;
	display: inline-block;
	font-size: 36/75rem;
	margin: 0 3/75rem;
}
.nav ul li:nth-child(2){
	color:#69C1A0;
}
.content{
	margin-bottom: 20/75rem;
	background: #fff;
}
.content div{
	float: left;
}
.content .conLeft{
	margin: 20/75rem 20/75rem;
}
.content .conRight{
	margin-top:20/75rem;
	width:400/75rem;
}
.content .conRight p{
	font-size: 26/75rem;
	line-height: 50/75rem;
	color:#999;
}
.content .conRight h2{
	margin-bottom:10/75rem;
	color:#333;
	font-size: 36/75rem;
}
.content .conRight p span{
	 margin-right: 60/75rem;
}
.content .conRight p span:first-child{
	color:#F15656;
}
.car{
	position:fixed;
	bottom:150/75rem;
	right:50/75rem;
}


</style>