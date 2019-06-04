<template>
		<view class="topic-list" @tap="opendeail">
				<image :src="item.titlepic" mode="widthFix" lazy-load></image>
			<view class="topic-list-bottom">
				<text>{{item.title}}</text>
				<text>{{item.desc}}</text>
					<text>动态 {{item.totalnum}} 今日{{item.todaynum}}</text>
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
			item:Object,
			index:Number
		},
		methods:{
			opendeail(){
				uni.navigateTo({
					url:"../../pages/topic-detail/topic-detail"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.topic-list{
		display: flex;
		padding: 20upx 0;
		border-bottom: 1upx solid #eee;
		image{
			width: 150upx;
			height: 150upx;
			margin-right: 20upx;
			border-radius: 10upx;
		}
		.topic-list-bottom{
				display: flex;
				flex-direction: column;
			text{
				color: #ddd;
				&:first-child{
					font-size: 32upx;
					color: #333;
				}
			}
			
		}
	}
</style>
