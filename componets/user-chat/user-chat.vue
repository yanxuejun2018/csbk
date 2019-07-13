<template>
	<view class="user-chat-bottom">
		<input type="text"  placeholder="文明发言" v-model="text" />
		<text class="icon iconfont icon-fabu" @tap="submit"></text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:""
			}
		},
		props:{
			
		},
		methods:{
			submit(){
				this.$emit("submit",this.text);
				this.text ="";
			}
		},
	}
</script>

<style lang="scss" scoped>
	.user-chat-bottom{
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 120upx;
		padding:10upx 20upx;
		background-color: #FFFFFF;
		border-top: 1upx solid #CCCCCC;
		input{
			flex: 1;
			padding: 10upx;
			margin-left: 20upx;
			border-radius: 10upx;
			background-color: #F7F7F7;
		}
		text{
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 45upx;
			width: 80upx;
		}
	}
</style>
