<template>
	<div class="home-info" @tap="toUserSpace">
		<image :src="homeinfo.userpic" mode="widthFix" lazy-load></image>
		<view class="">
			<view>{{homeinfo.username}}</view>
			<view>总访客 {{homeinfo.totalnum}} 今日 {{homeinfo.todaynum}}</view>
		</view>
		<view class="icon iconfont icon-jinru"></view>
	</div>
</template>

<script>
	export default {
		props:{
			homeinfo:Object
		},
		methods: {
			toUserSpace() {
				uni.navigateTo({
					url: '../../pages/user-space/user-space'
					
				});
			}
		},
	}
</script>

<style lang="scss" scoped>
	.home-info{
		padding: 20upx;
		
		display: flex;
		align-items: center;
		view{
			&:nth-child(2){
				flex: 1;
				view{
					&:nth-child(1){
						font-size: 32upx;
					}
					&:nth-child(2){
						color: #bbb;
					}
				}
			}
			&:nth-child(1){
				height: 100%;
				width: 70upx;
			}
			
			
		}
		image{
			flex-shrink: 0;
			width: 100upx;
			height: 100upx;
			border-radius: 100%;
			margin-right: 15upx;
		}
	}
</style>
