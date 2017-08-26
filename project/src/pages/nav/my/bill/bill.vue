<template>
	<div id="bill">
		<div class="wrap">
			<div class="state"></div>

			<div class="itemHead">
				<router-link to="/my">
					<img src="../../../../images/my/icon/left.png" alt="" />
					<span class="back">返回</span>
				</router-link>
				<span class="verify">我的订单</span>
			</div>

			<div class="list">
				<ul>
					<li>
						<a href="#">全部</a>
					</li>
					<li>
						<a href="#">待付款</a>
					</li>
					<li>
						<a href="#">代发货</a>
					</li>
					<li>
						<a href="#">待收货</a>
					</li>
					<li>
						<a href="#">待评价</a>
					</li>
				</ul>

			</div>

			<div class='shop' v-for="(data,index) in information">
				<div class="feel">{{data.name}}</div>
				<router-link to="../../food/detail">
				<div class="things">
					<div class="picture">

						<img :src="data.url">

					</div>
					<div class="left">
						<p>{{data.title}}</p>
						<p>{{data.editing}}</p>
						<p class="return">{{data.term}}</p>
					</div>
					<div class="right">
						<p>{{data.old}}</p>
						<p><del>{{data.newPrice}}</del></p>
						<p>{{data.num}}</p>
					</div>
				</div>
				</router-link>
				<div class="total">
					<span>{{data.total}}</span>
				</div>
				<!-- 收货 -->
				<div class="collect">
					<span>延长收货</span>
					<router-link to="../../close/item">
						<span>查看物流</span>
					</router-link>
					<span class="get">确认收货</span>
				</div>

			</div>

		</div>
	</div>
	</div>

</template>

<script>
	export default {
		name: 'bill',
		data() {
			return {
				information: []
			}
		},
		created() {
			this.$axios.get('/information').then(res => {
				this.information = res.data.many;

			})
		}

	}
</script>

<style scoped lang="less">
	#bill {
		font-size: 32/75rem;
		background: #f1f1f1;
		width: 10rem;
		height: 1334/75rem;
		color: #757575;
		.wrap {
			img {
				width: 150/75rem;
				height: 132/75rem;
				display: inline-block;
				padding-right: 20/75rem;
				padding: 0 20/75rem;
			}
			.state {
				height: 0/75rem;
				line-height: 40/75rem;
				background: #43bf92;
			}
			.itemHead {
				background: #43BF92;
				height: 88/75rem;
				color: #fff;
				font-size: 30/75rem;
			}
			.itemHead img {
				display: inline-block;
				padding-top: 20/75rem;
				margin-left: 20/75rem;
				margin-right: 10/75rem;
				width: 26/75rem;
				height: 40/75rem;
			}
			.back {
				color: #fff;
				display: inline-block;
				vertical-align: top;
				padding-top: 18/75rem;
				font-size: 32/75rem;
				margin-left: -20/75rem;
			}
			.verify {
				font-size: 36/75rem;
				margin-left: 150/75rem;
			}
			.list {
				height: 68/75rem;
				background: #ffffff;
				ul {
					list-style: none;
					li {
						float: left;
						line-height: 68/75rem;
						margin: 0 30/75rem;
						a {
							display: inline-block;
							color: #A8A8A8;
							text-align: center;
							width: 90/75rem;
							font-size: 28/75rem;
						}
					}
					li:nth-child(1) {
						border-bottom: 2/75rem solid #43bf92;
						a {
							color: #43bf92;
						}
					}
				}
			}
			.shop {
				margin-top: 12/75rem;
				.feel {
					height: 70/75rem;
					line-height: 70/75rem;
					font-size: 32/75rem;
					background: #ffffff;
					color: #999999;
					padding: 0 20/75rem;
				}
				.things {
					height: 160/75rem;
					.picture {
						margin-top: 10/75rem;
						float: left;
					}
					.left,
					.right {
						margin-top: 10/75rem;
						float: left;
						width: 270/75rem;
						height: 100%;
						p {
							margin-top: 10/75rem;
						}
					}
					.left {
						p:nth-child(1) {
							font-size: 28/75rem;
							color: #A9A9A9;
						}
						p:nth-child(2) {
							font-size: 22/75rem;
							color: #A9A9A9;
						}
						.return {
							// display: inline-block;
							width: 100/75rem;
							height: 25/75rem;
							border: 2/75rem solid #B94141;
							columns: #B94141;
							font-size: 22/75rem;
							text-align: center;
							line-height: 25/75rem;
							color: #B94141;
							border-radius: 10/75rem;
						}
					}
					.right {
						text-align: right;
						font-size: 22/75rem;
						color: #A9A9A9;
					}
				}
			}
			.total,
			.collect {
				height: 68/75rem;
				background: #ffffff;
				text-align: right;
				line-height: 68/75rem;
				font-size: 22/75rem;
				padding: 0 20/75rem;
				span {
					color: #757575;
				}
			}
			.total {
				clear: both;
			}
			.collect {
				border-top: 2/75rem solid #f1f1f1;
				span {
					display: inline-block;
					width: 118/75rem;
					height: 38/75rem;
					border: 2/75rem solid #6c6c6c;
					text-align: center;
					;
					line-height: 38/75rem;
					border-radius: 10/75rem;
				}
				.get {
					background: #43BF92;
					border: 2/75rem solid #43BF92;
					color: #ffffff;
				}
			}
		}
	}
</style>