<template>
	<view>
		<!-- 列表 -->
			<view class="comment-list  animated rotateIn">
				<view class="comment-list-l">
					<image :src="item.userpic" mode="widthFix" lazy-load></image>
				</view>
				<view class="comment-list-r">
					<view class="comment-list-r-one">
						<view>{{item.username}}：<text class="icon iconfont" :class="[item.sex == 0?'icon-nan' :'icon-nv']">{{item.age}}</text></view>
						<view v-show="!isguanzhu" class="icon iconfont icon-zengjia" @tap="guanzhu">关注</view>
					</view>
					<view>{{item.title}}</view>
					<view>
						<!-- 图片 -->
						<image v-if="item.titlepic" :src="item.titlepic" mode="widthFix" lazy-load></image>
						<!-- 视频 -->
						<template v-if="item.video">
							<view class="common-list-play icon iconfont icon-bofang">
								
							</view>
							<view class="common-list-playinfo">
								{{item.video.looknum}} 次播放 {{item.video.long}}
							</view>
						</template>
						<!-- 分享 -->
						<view class="common-list-share" v-if="item.share">
							<image :src="item.share.titlepic" mode="widthFix" lazy-load></image>
							<view class="">{{item.share.title}}</view>
						</view>
						
					</view>
					<view class="comment-list-r-three">
						<view>
							{{item.path}}
						</view>
						<view >
							<text class="icon iconfont icon-zhuanfa">{{item.sharenum}}</text>
							<text class="icon iconfont icon-pinglun1">{{item.commentnum}}</text>
							<text class="icon iconfont icon-dianzan1">{{item.goodnum}}</text>
						</view>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isguanzhu:this.item.isguanzhu
			}
		},
		props:{
			item:Object,
			index:Number
		},
		methods:{
				guanzhu(){
				this.isguanzhu = true;
				uni.showToast({
					title:"关注成功"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
		$color:#969696;
	@mixin cenect($left,$right){
		position: absolute;
		left: $left;
		top: $right;
		transform: translate(-$left,-$right);
	}
	.comment-list{
		display: flex;
		padding: 20upx;
		.comment-list-l{
			flex-shrink:0;
			image{
				width: 90upx;
				height: 90upx;
				border-radius: 100%;
			}
		}
		.comment-list-r{
				flex: 1;
				margin-left: 15upx;
				border-bottom: 1upx solid #EEEEEE;
				padding-bottom: 10upx;
			view{
			
				&:nth-child(2){
					font-size: 32upx;
					padding: 12upx 0;
				}
				&:nth-child(3){
					position: relative;
					.common-list-play{
						color: #FFFFFF;
						font-size: 100upx;
						@include cenect(50%,50%);
					}
					.common-list-playinfo{
					position: absolute;
						right: 10upx;
						bottom: 20upx;
						color: #FFFFFF;
						background: #333;
						font-size: 24upx;
						opacity: .8;
						border-radius: 20upx;
						padding: 0 20upx;
					}
					.common-list-share{
						width: 100%;
						padding: 10upx;
						border-radius: 10upx;
						box-sizing: border-box;
						background-color: #EEEEEE;
						display: flex;
						image{
							width: 200upx;
							height: 150upx;
							object-fit: cover;
							margin-right: 10upx;
						}
					}
					image{
						width: 100%;
						border-radius: 10upx;
					}
				}
			}
			.comment-list-r-one{
			display: flex;
			justify-content: space-between;
			align-items: center;
			view{
				&:nth-child(1){
					font-size: 32upx;
						color: #999999;
					}
				&:nth-child(2){
					background-color: #EEEEEE;
					padding: 0 10upx;
					font-size: 26upx;
					text-align: center;
				}
				text{
					display: inline-block;
					line-height: 24upx;
					color: #fff;
					background-color: #007AFF;font-size: 23upx; margin-left: 10upx;
					padding: 5upx 10upx;
					border-radius: 20upx;
				}
			}
			}
			
			.comment-list-r-three{
				display: flex;
				color: #BBBBBB;
				align-items: center;
				justify-content: space-between;
				text{
					margin-left: 10upx;
					padding-left: 5upx;
				}
			}
		}
		
	}
</style>
