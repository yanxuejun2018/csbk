<template>
	<view>
			<view class="user-chat-time">{{item.gettime}}</view>
		<view class="user-chat-list" :class="{'user-chat-me':item.isme}">
			<image v-if="!item.isme" :src="item.userpic" mode="widthFix" lazy-load></image>
			<view class="user-chat-list-body">
				<text v-if="item.type ==='text' ">{{item.data}}</text>
				<image v-if="item.type ==='img' " :src="item.data" mode="widthFix" lazy-load></image>
			</view>
			<image v-if="item.isme" :src="item.userpic" mode="widthFix" lazy-load></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style lang="scss">
	.user-chat-list{
		padding: 20upx 0;
		display: flex;
		image{
			width: 100upx;
			height: 100upx;
			border-radius: 100%;
			flex-shrink: 0;
		}
		.user-chat-list-body{
			position: relative;
			background-color: #F4F4F4;
			padding: 25upx;
			border-radius: 20upx;
			margin-left: 20upx;
			margin-right: 100upx;
			&:after{
				position: absolute;
				left: -30upx;
				right: 0;
				content: '';
				width: 0;
				height: 0;
				top: 30upx;
				border: 16upx solid #F4F4F4;
				border-color: transparent #F4F4F4 transparent transparent;
			}
		}
	}

.user-chat-me{
	justify-content: flex-end;
	.user-chat-list-body{
		margin-right: 20upx;
		margin-left: 100upx;
		&:after{
			position: absolute;
			right: -30upx;
			left: auto;
			content: '';
			width: 0;
			height: 0;
			top: 30upx;
			border: 16upx solid #F4F4F4;
			border-color: transparent transparent transparent #F4F4F4;
		}
	}
}

.user-chat-list-body{
	image{
		max-width: 150upx;
		max-height: 200upx;
		border-radius: 0upx;
	}
}
.user-chat-time{
	display: flex;
	justify-content: center;
	padding: 50upx 0;
	color: #a2a2a2;
	font-size: 24upx;
}
</style>
