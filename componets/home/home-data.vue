<template>
	<view class="home-data">
		<view  v-for="(home,index) in homedata" :key=index>
			<text>{{home.num}}</text>
		{{home.name}}
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			homedata:Array
		}
	}
</script>

<style lang="scss" scoped>
	.home-data{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20upx 40upx;
		&>view{
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			color: #989898;
			text{
				font-size: 32upx;
				color: #333;
			}
		}
	}
</style>
