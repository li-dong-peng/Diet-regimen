<template>
	<div class="newAddress">
		<div class="addressHead">
			<router-link :to="{path:'/close/address'}">
				<img src="../../../../static/foodImg/arrow.png" alt="" />
			</router-link>
			<span class="verify">新增收货地址</span>
		</div>
		<div class="newAddCon clearfix">
			<div class="newAddli">
				<div>姓名</div>
				<input type="text" placeholder="最少两个字，最多12个字"/>
			</div>
			<div class="newAddli">
				<div>电话</div>
				<input type="text" placeholder="最少7位数"/>
			</div>
			<div class="newAddli" @click="provinces">
				<div>省份</div>
				<span>北京</span>
				<span><img src="../../../../static/foodImg/xia.png" alt="" /></span>
			</div>
			<div class="province">
				<p>北京</p>
				<p>河北</p>
				<p>安徽</p>
				<p>河南</p>
			</div>
			<div class="newAddli" @click="citys">
				<div>城市</div>
				<span>北京</span>
				<span><img src="../../../../static/foodImg/xia.png" alt="" /></span>
			</div>
			<div class="city">
				<p>北京</p>
				<p>上海</p>
				<p>广州</p>
				<p>深圳</p>
			</div>
			<div class="newAddli" @click="districts">
				<div>地区</div>
				<span>海淀</span>
				<span><img src="../../../../static/foodImg/xia.png" alt="" /></span>
			</div>
			<div class="district">
				<p>海淀</p>
				<p>朝阳</p>
				<p>房山</p>
				<p>丰台</p>
			</div>
			<div class="newAddli">
				<div>地址</div>
				<input type="text" placeholder="最少两个字，最多12个字"/>
			</div>
			<div class="newAddlo">
				<div>邮编</div>
				<input type="text" placeholder="输入6位数"/>
			</div>
			<div class="save" @click="save">保存并使用</div>
			<div class="Btn">保存成功</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery';
var num = 0;
export default{
	name:'newAddress',
	data(){
		return{
			
		}
	},
	methods:{
		save(event){
			$(event.target).siblings('.Btn').show();
			setTimeout(function(){
				$(event.target).siblings('.Btn').hide();
			},500)
		},
		provinces(event){
			num++;
			if(num % 2){
				$(event.target).siblings('.province').slideDown()
			}else{
				$(event.target).siblings('.province').slideUp()
			}	
		},
		citys(event){
			num++;
			if(num % 2){
				$(event.target).siblings('.city').slideDown()
			}else{
				$(event.target).siblings('.city').slideUp()
			}	
		},
		districts(event){
			num++;
			if(num % 2){
				$(event.target).siblings('.district').slideDown()
			}else{
				$(event.target).siblings('.district').slideUp()
			}	
		}

	}
}
</script>

<style scoped lang="less">
*{
	margin: 0;padding: 0;
}
input{
	border:none;
	font-size: 24/75rem;
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
.verify{
	font-size: 36/75rem;
	margin-left: 220/75rem;
}
.newAddCon{
	font-size: 30/75rem;
	margin-top: 60/75rem;
	margin-left: 20/75rem;
}
.newAddCon .newAddli div,.newAddlo div{
	display: inline-block;
	margin-right: 45/75rem;
}
.newAddli{
	border-bottom: 1px solid #CFCFCF;
	padding-bottom: 35/75rem;
	margin-top: 35/75rem;
}
.newAddli span:nth-child(3){
	display:inline-block;
	margin-left: 500/75rem;
}
.newAddlo{
	padding-top: 35/75rem;
	margin-bottom: 70/75rem;
}
.save{
	width:513/75rem;
	height:76/75rem;
	background: #43BF92;
	border-radius: 10/75rem;
	text-align: center;
	line-height: 76/75rem;
	margin:0 auto;
	font-size: 36/75rem;
	color:#fff;
}
.Btn{
	width:513/75rem;
	height:76/75rem;
	border-radius: 10/75rem;
	text-align: center;
	line-height: 76/75rem;
	margin:0 auto;
	font-size: 36/75rem;
	background: #ccc;
	opacity: 0.5;
	position:absolute;
	top:180/75rem;
	left:118/75rem;
	display: none;
}
.province,.city,.district{
	width:585/75rem;
	position:absolute;
	border: 1px solid #f1f1f1;
	left:110/75rem;
	background: #f1f1f1;
	display: none;
}
.province p,.city p,.district p{
	padding-left: 20/75rem;
	line-height: 80/75rem;
	border-bottom: 1px solid #fff;
}
.province :hover,.city :hover,.district :hover{
	color: #43BF92;
}
</style>