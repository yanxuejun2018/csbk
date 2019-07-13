<template>
	<view>
		<!-- 列表 -->
			<view class="comment-list  animated slideInLeft">
				<view class="comment-list-l">
					<image :src="item.userpic" mode="widthFix" lazy-load></image>
				</view>
				<view class="comment-list-r">
					<view>
						<view class="comment-list-r-one">
							<view>{{item.username}}：<tagSexAge :sex=item.sex :age=item.age></tagSexAge></view>
							<view v-show="!isguanzhu" class="icon iconfont icon-zengjia" @tap="guanzhu">关注</view>
						</view>
						<view class="common-list-r-time">26天前</view>
					</view>
					
					<view>{{item.title}}</view>
					<view>
						<!-- 图片 -->
						<block v-for="(pic,index) in item.morepic" :key=index>
								<image  :src="pic" mode="widthFix" lazy-load @tap="imgdetail(index)"></image>
						</block>
					
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
	import tagSexAge from "../common/tag-sex-age.vue"
	export default {
		data() {
			return {
				isguanzhu:this.item.isguanzhu
			}
		},
		props:{
			item:Object
		},
		methods:{
				guanzhu(){
				this.isguanzhu = true;
				uni.showToast({
					title:"关注成功"
				})
			},
			imgdetail(index){
					uni.previewImage({
					current:index,
					urls:this.item.morepic
				})
			}
		},
		components:{
		tagSexAge
		}
	}
</script>

<style lang="scss" scoped>
	@import "./../../common/css/list.scss";

	.comment-list-r{
		border-bottom: 0 !important;
	}
	.comment-list{
		border-bottom: 1upx solid #eee;
	}
	.common-list-r-time{
	padding: 15upx 0;
	color: #CCCCCC!important;
	font-size: 25upx;
	background: #FFFFFF!important;
}

</style>
