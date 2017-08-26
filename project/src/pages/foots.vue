<template>
		<div id="foots">
			<ul>
				<!--<li v-for="(lis,index) in list" :key="lis.index" >						
					<router-link :to="{path:'/'+lis.path}">						
						<div class='back' v-bind:style="{background:'url('+lis.url+') no-repeat' }"> </div>
						<p>{{lis.title}}</p>
					</router-link>
				</li>-->
				
				<router-link :to="{path:'/index'}">
					<li><div class='icon'></div><p class='p1'>首页</p></li>
				</router-link>
				<router-link :to="{path:'/food'}">
					<li><div class='icon2'></div><p class='p2'>食疗方</p></li>
				</router-link>
				<router-link :to="{path:'/privates'}">
					<li><div class='icon3'></div><p class='p3'>私人订制</p></li>
				</router-link>
				<router-link :to="{path:'/my'}">
					<li><div class='icon4'></div><p class='p4'>我的</p></li>
				</router-link>

			</ul>
		</div>
</template>
<script>
	import $ from "jquery"
	export default {
		name:"foots",
		data:function(){
			
			return {
				
				
			}
		}
	}
</script>

<style scoped lang="less">


.icon {
  background: url('../../static/pic/foot6.png');
  background-size: 100% 100%;
}
.router-link-active .icon{
  background: url('../../static/pic/foot2.png');
  background-size: 100% 100%;
}

.router-link-active .p1{
  color: #43bf92;
}

.icon2 {
  background: url('../../static/pic/foot1.png');
  background-size: 100% 100%;
}
.router-link-active .icon2{
  background: url('../../static/pic/foot7.png');
  background-size: 100% 100%;
}
.router-link-active .p2 {
  color: #43bf92;
}

.icon3 {
  background: url('../../static/pic/foot3.png');
  background-size: 100% 100%;
}
.router-link-active .icon3{
  background: url('../../static/pic/foot8.png');
  background-size: 100% 100%;
}
.router-link-active .p3{
  color: #43bf92;
}
.icon4 {
  background: url('../../static/pic/foot4.png');
  background-size: 100% 100%;
}
.router-link-active .icon4{
  background: url('../../static/pic/foot5.png');
  background-size: 100% 100%;
}
.router-link-active .p4 {
  color: #43bf92;
}



	#foots{
	margin-top:500/75rem;
	font-size: 38/75rem;
	position: fixed;
	bottom:0/75rem;
	
	}
	.active{
		background:url('../../static/pic/foot6.png') no-repeat ;
	}
	.none{
		background:url('../../static/pic/foot2.png') no-repeat ;
	}
	ul{
		list-style: none;
		overflow: hidden;
		height:118/75rem;
		width:750/75rem;
		background: #ffffff;
		border-top: 1px solid #6c6c6c;		
	}
	li{
		text-align: center;
		float: left;
		width:187.5/75rem;	
		height:118/75rem;
	}

	ul li div{
		background:url('../../static/pic/foot6.png') no-repeat;
		width:48/75rem;
		height:48/75rem;
		margin-left: 70/75rem;
		margin-top: 20/75rem;
	}
	p{
		font-size: 22/75rem;
		color:#999999;
		margin-top: 10/75rem;		
	}
</style>