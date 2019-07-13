<template>
	<view class="home-list" >
	<view hover-class="home-list-hover" @tap="clickevent"> 
		
		<view><text class="icon iconfont " 
			:class="['icon-'+item.icon]" v-if="item.icon"></text>{{item.name}}</view>
	<view class="icon iconfont icon-jinru"></view>
	</view>
	</view> 
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		},
		methods:{
				clickevent(){
				switch (this.item.clicktype){
					case "navigateTo":
					if(this.item.url){ uni.navigateTo({ url:this.item.url}); }
						break;
					case "switchTab":
					if(this.item.url){ uni.switchTab({url:this.item.url}) }
						break;
					case "clear":
					uni.showModal({
						title: '提示',
						content: '是否要清除缓存？',
						confirmText: '立刻清除',
						success: res => {
							if(res.confirm){
								uni.clearStorage();
								uni.showToast({
									title: '清除缓存成功！',
								});
							}
						},
					});
						break;
				}
			}
		
	
	}
	}
</script>

<style lang="scss" scoped>
	.home-list-hover{
		background-color: #f4f4f4;
	}
	.home-list{
		padding: 20upx;
		&>view{
				padding: 20upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1upx solid #f4f4f4;
			border-top: 1upx solid #f4f4f4;
			view{
				text{
					margin-right: 10upx;
				}
				&:last-child{
					color: #ccc;
					
				}
				&:first-child{
					color: #333;
				}
			}
		}
	}
</style>
