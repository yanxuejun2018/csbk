<template>
	<view>
		搜索页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		//监听原生标题栏点击事件
		onNavigationBarButtonTap(e) {
			if(e.index == 0){
				uni.navigateBack({
					delta:1
				})
			}
		},
		//变化
		onNavigationBarSearchInputChanged(e) {
			console.log(e)
		},
		//手机点击搜索
		onNavigationBarSearchInputConfirmed() {
			
		}
	}
</script>

<style lang="scss">

</style>
