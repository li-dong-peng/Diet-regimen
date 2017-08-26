<template>
	<div id="wode">
		<div class="wrap">
			<div class="nav">我</div>
			<div class="health">
				<img src="../../images/my/wo2.png"> 小明
				<router-link :to="{path:'/my/health'}"><span>健康信息<img src='../../images/my/icon/kuo.png'></span></router-link>
				<!-- <span><router-link :to="{path:'/my/health'}">健康信息</router-link></span> -->
			</div>
			<div class='information'>
				<img src='../../images/my/icon/xiaoxi.png'> 消息
			</div>
			<div class='friend'>
				<img src='../../images/my/icon/jiaren.png'>
				<router-link :to="{path:'/my/family'}"><span>家人和朋友
				 </span></router-link>
			</div>
			
			<div class='collect'>
				<img src='../../images/my/icon/shoucang.png'> 我的收藏
			</div>
			<router-link to="./my/bill/bill">
				<div class='menu'>
					<img src='../../images/my/icon/menu.png'> 我的订单
				</div>
			</router-link>
			<router-link to="./my/account/login">
				<div class='account'>
					<img src='../../images/my/icon/zhanghao.png'> 账号和其他
				</div>
			</router-link>
			<div class='online'>
				<img src='../../images/my/icon/online.png'> 在线客服
			</div>
			<div class='help'>
				<img src='../../images/my/icon/help.png'> 帮助和反馈
			</div>
			<div class='set'>
				<img src='../../images/my/icon/shezhi.png'> 设置
			</div>
		</div>
		<foots></foots>
	</div>

</template>

<script>
	import foots from '../../pages/foots.vue';
	export default {
		name: 'wode',
		data() {
			return {

			}
		},
		components:{
			foots
		}

	}
</script>

<style scoped lang="less">
	#wode {
		font-size: 32/75rem;
		background: #f1f1f1;
		width: 10rem;
		height: 1334/75rem;
		color: #757575;
		.wrap {
			img {
				display: inline-block;
				padding-right: 20/75rem;
			}
			
			.nav {
				height: 80/75rem;
				line-height: 80/75rem;
				text-align: center;
				background: #43bf92;
				font-size: 36/75rem;
				color: #ffffff;
			}
			.health {
				height: 115/75rem;
				margin-top: 45/75rem;
				margin-bottom: 40/75rem;
				background: #ffffff;
				padding: 10/75rem 20/75rem;
				span {
					color: #757575;
				}
				img {
					width: 115/75rem;
					height: 115/75rem;
					// margin-top:10/75rem;
					vertical-align: middle;
				}
				span {
					margin-left: 300/75rem;
					img {
						width: 18px;
						height: 28px;
						display: inline-block;
						margin-left: 20px;
						margin-top: -2/75rem;
					}
				}
			}
			.friend {
				span {
					color: #757575;
				}
			}
			.information,
			.friend {
				height: 76/75rem;
				background: #ffffff;
				margin-bottom: 30/75rem;
				line-height: 76/75rem;
				padding: 0 20/75rem;
			}
			.collect,
			.menu,
			.account,
			.online,
			.help,
			.set {
				height: 76/75rem;
				background: #ffffff;
				margin-bottom: 2/75rem;
				line-height: 76/75rem;
				padding: 0 20/75rem;
				color: #757575;
			}
			// .account{
			// }
		}
	}
</style>