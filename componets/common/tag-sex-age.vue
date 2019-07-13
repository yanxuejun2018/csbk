<template>
		<text class="icon iconfont" :class="[sex == 0?'icon-nan' :'icon-nv']">{{age}}</text>
</template>

<script>
	export default {
		props:{
			sex:Number,
			age:Number
		}
	}
</script>

<style scoped>
	text{
		display: inline-block;
		line-height: 24upx;
		color: #fff;
		background-color: #007AFF;font-size: 23upx; margin-left: 10upx;
		padding: 5upx 10upx;
		border-radius: 20upx;
		
	}
	.icon-nv{
		background-color: #ff698d !important;
	}
</style>
