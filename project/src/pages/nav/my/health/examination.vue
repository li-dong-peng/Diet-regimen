<template>
	<div id="examination">
		<div class="nav">
			选择慢性病
			<img src="../../../../images/my/icon/fanhui.png"/>
			<router-link :to="{path:'/my/health'}" class="back">返回</router-link>
		</div>
			<div class="examinationContent">
				<ul >
					<li @touchstart="hover" v-for="(data,index) in examination" :key="index">{{data.name}}</li>
				</ul>
			</div>
			<div class="choose">
				选择成功
			</div>
			<div class="examinationSelect">
				您选择的疾病是：<span></span>
			</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default{
		name:'examination',
		data(){
			return {
				examination:{}
			}
		},
		methods:{
		hover(event){
		 //使用jq来获取元素的当前对象。
	    $(event.target).css({background:'#43BF92'}).siblings().css({background:'#fff'});
	  
	    $('.choose').fadeIn(500).fadeOut(1500); 
	    var str=$(event.target).html();
	    $('.examinationSelect span').text(str);
	  }
	},
		created(){
			this.$axios.get('/examination').then(res=>{
				this.examination=res.data.xingxi;
			});
		}
	}
</script>

<style scoped lang="less">

	#examination{
	
	height: 1334/75rem;
	background:#f1f1f1 ;
	font-size: 30/75rem;
	.nav{
	height: 88/75rem;
	line-height: 88/75rem;
	text-align:center;
	background: #43bf92;
	color: #ffffff;	
	position:relative;
	img{
	padding-left: 23/75rem;
	position: absolute;
	bottom: 15/75rem;
	}
		.back{
	position: absolute;
	left:55/75rem;
	color:#fff;
	}
  }		
	.examinationContent{
		ul{
		li{
		height: 67/75rem;
		line-height: 67/75rem;
		border-bottom:3/75rem solid #F0F0EE;
		padding-left: 23/75rem;
		background: #fff;
		color: #838383;
			}
			li:nth-child(1){
				border-top:2/75rem solid #fff;
			}	
		}

	}
	.choose{
		width: 500/75rem;
		height: 150/75rem;
		background:#43BF92;
		position: absolute;
		top:300/75rem;
		left:108/75rem;
		border:none;
		box-shadow: 0 0 5/75rem #43BF92;
		color: #fff;
		font-size: 36/75rem;
		text-align: center;
		line-height:150/75rem;
		display: none;
	}
	.examinationSelect{
		padding-left: 20/75rem;
		color:#545454;
		font-size: 36/75rem;
	}
}
</style>