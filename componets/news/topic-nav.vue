
<template>
	<view class="topic-nav" >
		<view>
			<view>热门分类</view>
			<view @tap="opentopic">更多<text class="icon iconfont icon-jinru"></text></view>
		</view>
		<view class="topic-nav-bottom" >
			<text v-for="(item,index) in nav" :key="index">{{item.name}}</text>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			nav:Array
		},
		methods:{
			opentopic(){
				uni.navigateTo({
					url:"../../pages/topic-nav/topic-nav"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.topic-nav{
		border-bottom: 1upx solid #eee;
		border-top: 1upx solid #eee;
		padding: 20upx;
		view{
				display: flex;
				justify-content: space-between;
				align-items: center;
				&:first-child{
					color: #9E9E9E;
					font-size: 32upx;
					margin-bottom: 10upx;
				}
				
		}
		.topic-nav-bottom{
				display: flex;
				text{
					flex: 1;
					border-radius: 10upx;
					margin: 0 10upx;
					color: #9e9e9e;
					text-align: center;
					background-color: #eee;
				}
		}
	}
</style>
