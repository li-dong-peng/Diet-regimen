<template>
	<div id="family">
		
			<div class="informationNav">
			<img src="../../../../images/my/icon/fanhui.png"/>
			<router-link :to="{path:'/my'}" class="back">返回</router-link>
			家人和朋友
			</div>
			<div class="userServer">
			<p>我们为不同性别,年龄和地区的人设计了不同的定制服务,请认真填写。</p>
			<p><img src="../../../../images/my/cha1.png" /></p>
			<p><input type="file" class="file"/><span class="fileIcon">修改头像</span></p>
		
			
		</div>
			<div class="informationNavContent">
				<ul>
					<li>名字
					<input type="text" placeholder="点击输入"/>
					</li>
					<li>性别
					<input type="button" value="女" />
					<input type="button" value="男"/>
					
					</li>
					
					<li>生日
						<span class="CakeSpan">
							>
						</span>
					<input class="dataInput" type="date"/>
					</li>
					<li>城市
					<span class="citySpan">
						>
					</span>
					</li>
				</ul>
			</div>
			<div class="btn">
					
				<router-link :to="{path:'/my/family/people'}">	
				<button>完成</button>
				</router-link>
			</div>
			<div class="btnSave" >
				保存成功
			</div>
	</div>
</template>
<script>
	import $ from 'jquery';
	export default{
		name:'information',
		data(){
			return {
			}
		},
		  mounted:function(){
		  	var flag=false;
		  	$('.CakeSpan').click(function(){
		  		if($('.dataInput').is(":hidden")){
		  			$('.dataInput').show();
		  		}else{
		  			$('.dataInput').hide();
		  		}
	  		
		  	});
		  	$('files').hide();
		  }
		 
	}
</script>

<style scoped lang="less">
.ilness{
	span{
		margin-left: 590/75rem;
		font-size: 22/75rem;
		color:#C1C1C1;
	}
}
	#family{
		height:1334/75rem;
		background:#f1f1f1;
	
	.informationNav{
		height:88/75rem;
		background:#43bf92;
		font-size: 30/75rem;
		text-align: center;
		line-height: 88/75rem;
		position: relative;
		color: #fff;
		font-family:"微软雅黑";
		overflow:hidden;
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
	.userServer{
		background: #fff;
		height: 290/75rem;
		text-align: center;
		p{
			font-size: 26/75rem;
			width:480/75rem;
			margin: 0 auto;
			color:#f7;
		}
		P:nth-child(2){
			margin-left: 300/75rem;
			margin-top:25/75rem;
		}
		P:nth-child(3){	
		margin-top: 2/75rem;
		margin-left:115/75rem;
		button{
			background: #fff;
			border-radius: 5/75rem;
			color: #999999;
			width: 130/75rem;
			height: 40/75rem;
			line-height: 40/75rem;
			border-radius:8/75rem;
			font-size:26/75rem;
			margin-top: 10/75rem;
			color: #333;
		}
	  }
		P:nth-child(4){
		margin-top: -35px;
		display: none;	
	  }
	}
	.informationNavContent{
		margin-top: 30/75rem;
		font-size: 28/75rem;
		height: 330/75rem;
		background:#FFF;
		ul{
		overflow:hidden;
		position:relative;
		li{
		height: 67/75rem;
		line-height: 67/75rem;
		border-bottom:1/75rem solid #F0F0EE;
		padding-left: 23/75rem;	
		}
	  	li:nth-child(1) input{
	  	display: inline-block;
	  	width: 133/75rem;
  		position:absolute;
		border:none;
		float: right;
		font-size:26/75rem;
		margin-top:20/75rem;
		right:5/75rem;
		}
		li:nth-child(1) input::placeholder{
			color:#CCCCCC;
		}
		li:nth-child(2) input{
		font-size: 22/75rem;
		float: right;
		margin-right:30/75rem;
		margin-top:16/75rem;
		border-radius: 25/75rem;
		background: #fff;
		
		width: 60/75rem;
		border: 1/75rem solid #E7E7E7;		
		}
		li:nth-child(2) input:nth-child(2){
			color: #43bf92;
		}
		
		li:nth-child(3) input{
		font-size: 22/75rem;
		float: right;
		margin-right:30/75rem;
		margin-top:16/75rem;
		border:none;
		display: none;	
		}
		li:nth-child(3) span{
		font-size: 22/75rem;
		float: right;
		margin-right:30/75rem;
		color:#CCCCCC;
		}
		li:nth-child(4) span{
		font-size: 22/75rem;
		float: right;
		margin-right:30/75rem;
		color:#CCCCCC;
		}
	   }
	}
	.btn{
		margin-top:277/75rem;
		margin-left: 136/75rem;
		button{
			width: 500/75rem;
			height: 70/75rem;
			font-size: 36/75rem;
			line-height: 70/75rem;
			text-align: center;
			background:#43BF92;
			color:#fff;
			border-radius: 12/75rem;
		}
	}
	.btnSave{
		height: 200/75rem;
		width: 500/75rem;
		border: 1px solid #000;
		position: absolute;
		top: 500/75rem;
		left:120/75rem;
		text-align: center;
		line-height:200/75rem;
		background: #69C1A0;
		display: none;
	}
}
.file{
	position: absolute;
	background: blck;
	opacity: 0;
	left:300/75rem;
	top: 306/75rem;
	display: inline-block;
	width: 300/75rem;
	z-index: 999;	
}
.fileIcon{
	position: absolute;
	left:305/75rem;	
}
</style>