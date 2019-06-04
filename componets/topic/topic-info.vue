<template>
	<view>
		<!-- 模糊背景 -->
		<view class="topic-detail">
			<image  :src="topicInfo.titlepic" mode="aspectFill" lazy-load></image>
		</view>
		<!-- 话题信息 -->
		<view class="topic-info">
			<view class="topic-info-t">
				<image :src="topicInfo.titlepic" mode="widthFix" lazy-load></image>
				<text>{{topicInfo.title}}</text>
			</view>
			<view class="topic-info-w">
				<text>动态 {{topicInfo.totalnum}}</text>
				<text>今日 {{topicInfo.todaynum}} </text>
			</view>
			<view class="topic-info-b">
				{{topicInfo.desc}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			topicInfo:Object
		}
	}
</script>

<style lang="scss">
.topic-detail{
	width: 100%;
	height: 300upx;
	position: relative;
	overflow: hidden;
	image{
		position: absolute;
		filter: blur(10px);
		width: 100%;
	}
}
.topic-info{
	padding: 0 20upx;
	.topic-info-t{
		position: relative;
		display: flex;
		image{
			width: 150upx;
			height: 150upx;
			border-radius: 20upx;
			position: absolute;
			top: -75upx;
		}
		text{
			flex: 1;
			font-size: 35upx;
			display: block;
			margin-left: 170upx;
		}
	}
	.topic-info-w{
		padding: 35upx 0 15upx 0;
		text{
			color: #cdcdcd;
			
		}
	}
	.topic-info-b{
		font-size: 32upx;
		color: #a3a3a3;
		padding-bottom: 10upx;
	}
}
</style>
