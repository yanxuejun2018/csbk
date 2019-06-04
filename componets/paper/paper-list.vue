<template>
	<view class="paper-list">
		<image :src="item.userpic" mode="widthFix" lazy-load></image>
		<view class="list">
			<view>{{item.username}}<text>{{item.time}}</text></view>
			<view>{{item.data}}
			<template v-if="item.noreadnum >0">
			<uniBadge :text="item.noreadnum" type="error"></uniBadge>
			</template></view>
		</view>
	</view>
</template>

<script>
	import uniBadge from "../uni-badge/uni-badge.vue";
	export default {
		data() {
			return {
			
			}
		},
		props:{
				item:Object,
			index:Number
		},
		components:{
			uniBadge
		}
	}
</script>

<style lang="scss" scoped>
	.paper-list{
		border-bottom: 1upx solid #eee;
		padding: 20upx 0;
		display: flex;
		image{
			width: 100upx;
			height: 100upx;
			border-radius: 100%;
			flex-shrink: 0;
			margin-right: 10upx;
		}
		.list{
			flex: 1;
			display: flex;
			flex-direction: column;
			view{
				display: flex;
				justify-content: space-between;
				&:first-child{
					
					font-size: 35upx;
					text{
						font-size: 28upx;
							color: #CBCBCB;
					}
				}
				&:last-child{
					color: #999;
					line-height: 2;
				}
			}
			
		}
	}
	
	
	
</style>
