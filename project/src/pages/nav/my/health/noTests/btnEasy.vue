<template>
	<div id="btnEasy">
		<div class="nav">
			简易版体质测试
			<img src="../../../../../images/my/icon/x.png"/>
			<router-link :to="{path:'/my/health/noTests'}" class="back">放弃</router-link>
		</div>
		
		<div class="btnEasyRadio">
			
			<ul class="trip">
				<li>1.出行坐飞机起飞降落时感到耳痛、头痛</li>
				<li><label>A.没有<input type="radio" name="trip" value="A"/></label></li>
				<li><label>B.有,但程度浅<input type="radio" name="trip" value="B"/></label></li>
				<li><label>C.有,程度深<input type="radio" name="trip" value="C"/></label></li>
				<li><label>D.有<input type="radio" name="trip" value="D"/></label></li>		
			</ul>
			
			<ul class="eye">
				<li>2.您容易有黑眼圈吗？</li>
				<li><label>A.没有<input type="radio" name="eye" value="A"/></label></li>
				<li><label>B.有,但程度浅<input type="radio" name="eye" value="B"/></label></li>
				<li><label>C.有,程度深<input type="radio" name="eye" value="C"/></label></li>
				<li><label>D.有<input type="radio" name="eye" value="D"/></label></li>		
			</ul>
			
			<ul class="spirit">
				<li>3.您容易精神紧张、焦虑不安吗？</li>
				<li><label>A.没有<input type="radio" name="spirit" value="A"/></label></li>
				<li><label>B.有,但程度浅<input type="radio" name="spirit" value="B"/></label></li>
				<li><label>C.有,程度深<input type="radio" name="spirit" value="C"/></label></li>
				<li><label>D.有<input type="radio" name="spirit" value="D"/></label></li>		
			</ul>
			
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default{
		name:'btnEasy',
		data(){
			return {
				
			}
		},
		mounted(){
			$('.btnEasyRadio .trip label').click(function(){
				if($(this).find('input:radio').attr('checked',true)){
					console.log($('input:radio:checked').val());
				}
				
			});	
	}
}
</script>

<style scoped lang="less">
#btnEasy{
    height: 1334/75rem;
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
	top:32/75rem;
	bottom: 15/75rem;
	}
	.back{
	position: absolute;
	left:55/75rem;
	color:#fff;
	}
  }
  .btnEasyRadio{
  	padding-left: 70/75rem;
  	color:#7A7A7A;
  	font-size: 26/75rem;
  	ul{
  		border-bottom: 1/75rem solid #7A7A7A;
  		padding-top: 50/75rem;
  		height: 360/75rem;
  		li{
  			margin-top: 18/75rem;
  		}
  		 li:nth-child(2){
  		 padding-top: 70/75rem;
  	}
  	label:hover{
  		color:#43BF92 ;
  	}
   } 
   ul:last-child{
   	border: none;
   }
  	input{
  		display: none;
  	}
  }
}	
</style>