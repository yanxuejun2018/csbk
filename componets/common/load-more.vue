<template>
		<!-- 上拉加载 -->
	<view class="load-more">
		{{loadtext}}
	</view>
</template>

<script>
	export default {
		props:{
			loadtext:String
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.load-more{
		text-align: center;
		color: #aaa;
		padding: 15upx;
	}
</style>
