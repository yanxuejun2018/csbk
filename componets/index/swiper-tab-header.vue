<template>
		<view class="uni-tab-bar">
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :style="scrollStyle">
		<block v-for="(tab,index) in tabBars" :key="tab.id" >
						<view :style="scrollItemStyle"  class="swiper-tab-list" :data-current="index" :class="{'active':tabIndex == index}" @click="tapTab">{{tab.name}} {{tab.num?tab.num:''}}
						<text class="swiper-tab-line"></text>
						</view>
																				
		</block>
		</scroll-view>
	</view>
</template>

<script>
export default {
	props:{
		tabBars:Array,
		tabIndex:Number,
		scrollItemStyle:{
			type:String,
			default:""
		},
		scrollStyle:{
			type:String,
			default:""
		}
		
		
	},
	data() {
		return {
			
		}
	},
	methods:{
		 tapTab(e) { //点击tab-bar
		let tabIndex = parseInt(e.target.dataset.current);
		this.$emit('tabtap',tabIndex);
		}
	}
}
</script>

<style lang="scss" scoped>
	.uni-tab-bar{
		.swiper-tab-list{
			color: #969696;
			font-weight: bold;
			
		}
		.uni-swiper-tab{
			border-bottom: 1upx solid #eee;
		}
		.active{
			color: #343434;
			.swiper-tab-line{
				width: 70upx;
				display: block;
				margin: 0 auto;
				border-top: 6upx solid #fede33;
				border-bottom: 6upx solid #fede33;
				border-radius: 20upx;
			}
		}
		
		
	}
</style>
