<template>
	<view class="user-list animated fadeInLeft fadeIn" >
		
				<image :src="item.userpic" mode="widthFix" lazy-load></image>
				
					<view>
						<text class="text">{{item.username}}</text>
						<view style="display: inline-block;"><tagAexAge :age="item.age" :sex="item.sex"></tagAexAge></view>
					</view>
				<text  class="icon iconfont" 
				:class="[item.isguanzhu?'icon-xuanze-yixuan':'icon-zengjia1']"></text>
			
			
				</view>
</template>

<script>
		import tagAexAge from "../common/tag-sex-age.vue";
	export default {
		props:{
			item:Object,
			index:Number
		},
		components:{
			tagAexAge
		},
		onLoad() {
		
				
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.user-list{
		display: flex;
		padding: 20upx 50upx 20upx 0;
		border-bottom: 1upx solid #eee;
		image{
			width: 100upx;
			height: 100upx;
			border-radius: 100%;
			margin-right: 20upx;
			flex-shrink: 0;
			
		}
		view{
			flex: 1;
			display: flex;
			flex-direction: column;
			.text{
				font-size: 35upx;
				color: #000;
			}
			
			
		}
		
		
	}
	
	
	.icon-zengjia1,.icon-xuanze-yixuan{
				font-size: 40upx !important;
				color: #F8791B !important;
			}
</style>
