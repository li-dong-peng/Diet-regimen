<template>
	
	<div id="index">
		<!--轮播图-->
		<div class="block">
		    <el-carousel  >
		    <el-carousel-item v-for="(item,index) in sliders" :key="item.index">
		    <img :src="item.src" >
		    </el-carousel-item>
		    </el-carousel>
	  	</div>
	  	<!--中间两张图片-->
	  	<div class='centers'>
	  		<div class='center' v-for="(center,index) in centers" :key="center.index" >
	  			<router-link :to="{path:'/'+center.path}"><img :src="center.src" alt="" /></router-link>
	  			<p>{{center.title}}</p>
	  		</div>	
	  	</div>
	  	<!--下部内容部分-->
	  	<div class="footers">
	  		<div class="footer" v-for="(footer,index) in footers" :key="footer.index">
	  			<router-link :to="{path:'/'+footer.path}">
	  				<p class='firstP'>{{footer.title}}</p>
		  			<div class='pic'>
		  				<img :src="footer.src" alt="" />
		  			</div>
	  			
		  			<div class='contents'>
			  			<p>{{footer.content}}</p>
			  			<p><span>{{footer.num}}</span>次阅读</p>
		  			</div>
	  			</router-link>	  			
	  		</div>
	  		
	  	</div>
	  	
		<foots></foots>
	</div>
</template>

<script>
	import foots from '../../pages/foots.vue';
	export default{
		name:'index',
		components:{
			foots
		},
		data(){
			return {
				sliders:[
					{src:require("../../../static/pic/banner.png")},
					{src:require("../../../static/pic/banner.png")},
					{src:require("../../../static/pic/banner.png")}
				],
				centers:[
					{
						src:require("../../../static/pic/mryc.png"),
						title:'每日一测',
						path:'test'
					},
					{
						src:require("../../../static/pic/right.png"),
						title:'每日食谱',
						path:'recipe'
					}
				],
				footers:{}
				
			}
		},
		created(){
			this.$axios.get('/home').then(res =>{
				console.log(res.data)
				this.footers = res.data.footers;
			})
		}
		      
		
	}
</script>

<style scoped lang='less'>
	/*轮播图样式*/
	/*.el-carousel__item h3 {
    color: #475669;
    font-size: 14/75rem;
    opacity: 0.75;
    line-height: 150/75rem;
    margin: 0;
  }*/

 	/*el-carousel,el-carousel__item{
 		width:750/75rem;
		height:340/75rem;
 	}
	.el-carousel__item img{
		width:750/75rem;
		height:340/75rem;
	}*/
 
  /*.el-carousel__button{
  	width:20/75rem;
  	height:20/75rem;
  	border-radius: 10/75rem;
  }*/
 el-carousel  img{
 	width:667/75rem;
 }
  /*每日一测 每日食谱*/
 .centers{
 	margin-top: 34/75rem;	
 }
 .centers .center{
 	margin-left:35/75rem;
 	display:inline-block;
 	text-align: center;
 }
 .centers .center p{
 	font-size:20/75rem;
 	margin-top:10/75rem;
 }
 /*详情*/
 .footers{
 	width:750/75rem;
 	
 }
 .footers .footer .firstP{
 	font-size:30/75rem;
 	color:#000000;
 }
 .footers .footer {
 	height:230/75rem;
 	margin-top:20/75rem;
 	border-bottom: 1px solid #ccc;
 	margin-bottom: 20/75rem;
 	margin:35/75rem 20/75rem 25/75rem 20/75rem;	
 }
 
 .footers .footer .contents{
 	display: inline-block;
 	width:470/75rem;
 	height:140/75rem;
 	vertical-align:top;
 	margin-top:20/75rem;
 	
 }
 
 .footers .footer .pic {
 	margin-top:20/75rem;
	display: inline-block;
	width:215/75rem;
 }
 .footers .footer .pic img{
 	width:215/75rem;
 	height:140/75rem;	
 }
 
 .footers .footer  .contents p:nth-of-type(1){
 	font-size:26/75rem;
 	color: #757575;		
 }
 .footers .footer .contents p:nth-of-type(2){
 	font-size:24/75rem;
 	text-align: right;
 	color: #757575;
 	vertical-align:bottom;
 	margin-top:40/75rem;
 }
 .footers .footer .contents p:nth-of-type(2) span{
 	color:#c53336;
 }
</style>