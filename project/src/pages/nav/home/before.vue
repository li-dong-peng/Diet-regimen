<template>
	<div>
		<router-link :to="{path:'/index'}">
					<img src="../../../../static/pic/before.png" alt="" />
				</router-link>
	</div>
</template>

<script>
	export default {
		name:"before",
		data:function(){
			
			return {
				
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang='less'>
	img{
		width:750/75rem;
		height: 667*2/75rem;
	}
</style>