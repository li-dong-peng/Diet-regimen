	<template>
		<div>
			
			<div class="rili">
				<span id = "data">2016 8 9</span>
				<table border="" cellspacing="" cellpadding="2">
					<tr>
						<th>周一</th>
						<th>周二</th>
						<th>周三</th>
						<th>周四</th>
						<th>周五</th>
						<th>周六</th>
						<th>周日</th>
					</tr>
					<tr>
						<td>28</td>
						<td>29</td>
						<td>30</td>
						<td>1</td>
						<td>2</td>
						<td>3</td>
						<td>4</td>
					</tr>
					<tr>
						<td>5</td>
						<td>6</td>
						<td>7</td>
						<td>8</td>
						<td>9</td>
						<td>10</td>
						<td>11</td>
					</tr>
					<tr>
						<td>12</td>
						<td>13</td>
						<td>14</td>
						<td>15</td>
						<td>16</td>
						<td>17</td>
						<td>18</td>
					</tr>
					<tr>
						<td>19</td>
						<td>20</td>
						<td>21</td>
						<td>22</td>
						<td>23</td>
						<td>24</td>
						<td>25</td>
					</tr>
					<tr>
						<td>26</td>
						<td>27</td>
						<td>28</td>
						<td>29</td>
						<td>30</td>
						<td>1</td>
						<td>1</td>
					</tr>
					<tr>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
					</tr>
				</table>
				
			</div>
			
		
			
			<div class="container">
				
				<div class="bTop">
					<img src="../../images/priImg/zz.png"  class= "c1"alt="" />
					<span id="span2">身体症状</span>
					<img src="../../images/priImg/right.png"  class= "right"alt="" />
				</div>
				
				<div class="bTop">
						<img src="../../images/priImg/hh.png"  class= "c2"alt="" />
						<span id="span1">今日目标</span>
						<img src="../../images/priImg/right.png"  class= "right1"alt="" />
				</div>
				
			</div>
			
			
			
			
			
			
			
			<div class = "footer">
				<p><router-link :to="{path:'/shoppingCar'}"><img src="../../images/priImg/gwc.png"  class= "c3"alt="" /></router-link></p>
				
			</div>
			<foots></foots>
	</div>
	</template>
	
	<script>
	import foots from '../../pages/foots.vue';
	export default{
		data:function(){
			return {
				
			}
		},
		components:{
			foots
		}
	}
	</script>
	
	<style scoped lang="less">
	#data{
		margin-top: 100/75rem;
	}
	table{
		width:660/75rem;
		height:650/75rem;
		margin-left:45/75rem ;
		
	}
	
	.top{
		width:10rem;
		height:740/75rem;
		
	}
	
	
	.rili{
		font-size: 40/75rem;
		width: 10rem;
		height:750/75rem;
		text-align: center;
		
	}
	
	
		
	.container{
		
		height:250/75rem;
		margin-top:80/75rem ;
		position:relative;
	
	}	
	.c1{
		position:absolute;
		left:55/75rem;
		top:85/75rem ;
	}
	.right{
		position:absolute;
		right:55/75rem;
		top:90/75rem ;
	}
	.right1{
		position:absolute;
		right:55/75rem;
		top:180/75rem ;
	}
	.c2{
		position:absolute;
		left:55/75rem;
		top:175/75rem ;
	}
	
	#span1{
		font-size:35/75rem ;
		position:absolute;
		top:180/75rem;
		left:120/75rem;
		
	}
	#span2{
		font-size:35/75rem ;
		position:absolute;
		top:85/75rem;
		left:120/75rem;
		
	}
	.c3{
		margin-left:606/75rem;
		margin-top:70/75rem;
	}
	
	
	</style>