<template>
	<view>
		<!-- 操作菜单 -->
		<view class="paper-left-popup-mask" v-show="show" @tap="hidepopup"></view>
		<view class="papar-left-popup" v-show="show">
			<view hover-class="papar-left-popup-h" @tap="addfriend"> <text class="icon iconfont icon-sousuo"></text>加好友</view>
			<view hover-class="papar-left-popup-h" @tap="clear"><text class="icon iconfont icon-qingchu"></text>清除缓存</view>
		</view>
	</view>
</template>

<script>
	export default {
		
		props:{
			show:Boolean
		},
		
		methods:{
				addfriend(){
					console.log("加好友");
					this.$emit("addfriend");
			},
			clear(){
				console.log("清除缓存");
				this.$emit("clear");
			},
			hidepopup(){
				this.$emit("hide");
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.papar-left-popup{
		position: fixed;
		right: 0;
		top: 10upx;
		background-color: #fff;
		z-index: 2000;
		width: 55%;
		box-shadow: 1upx 1upx 20upx 2upx #ccc;
		view{
			padding: 20upx;
			font-size: 35upx;
			text{
				margin-right: 10upx;
				font-weight: bold;
			}
		}
	}
	.papar-left-popup-h{
		background: #eee;
	}
	.paper-left-popup-mask{
		position: fixed;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
		z-index: 1999;
	}
</style>
