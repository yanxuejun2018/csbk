<template>
	<view class="index-list animated rotateIn">
		<view class="index-list1">
			<view>
				<image :src="item.userpic" mode="widthFix" lazy-load></image>{{item.username}}</view>
			
			<view v-show="!isguanzhu">
				<view class="icon iconfont icon-zengjia" @tap="guanzhu">关注</view>
			
			</view>
		</view>
		<view class="index-list2" @tap="opendetail()">{{item.title}}</view>
		<view class="index-list3"  @tap="opendetail()">
			<image :src="item.titlepic" mode="widthFix" lazy-load></image>
			<template v-if="item.type === 'video'">
				
				<view class="index-list-pay icon iconfont icon-bofang">
					
				</view>
				<view class="index-list-payinfo">
					{{item.playnum}}次播放 {{item.long}}
				</view>
			</template>
			
		</view>
		<view class="index-list4">
			<view >
				<view class="icon iconfont icon-icon_xiaolian-mian " :class="{'active':(infonum.index == 1)}" @tap="caozuo('ding')"></view>{{infonum.dingnum}}
				<view class="icon iconfont icon-kulian" :class="{'active':(infonum.index == 2)}" @tap="caozuo('cai')"></view>{{infonum.cainum}}
			</view>
			<view>
				<view><text class="icon iconfont icon-pinglun1"></text>{{item.commentnum}}</view>
				<view><text class="icon iconfont icon-zhuanfa"></text>{{item.sharenum}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isguanzhu :this.item.guanzhu,
				infonum:this.item.infonum
			};
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
			},
			caozuo(type){
				switch (type){
					case "ding":
					if(this.infonum.index == 1){
						return;
					}
						this.infonum.dingnum ++;
					if(this.infonum.index == 2){
						this.infonum.cainum--;
					}
				this.infonum.index = 1;
					
						break;
					case "cai":
					if(this.infonum.index == 2){
						return;
					}
					this.infonum.cainum ++;
					if(this.infonum.index == 1){
						this.infonum.dingnum --;
					}
					this.infonum.index = 2;
					default:
						break;
				}
			},
			//进入详情页
			opendetail(){
				console.log(1);
			}
		}
	}
</script>

<style lang="scss" scoped>
@mixin disflex {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
@mixin flexCenter {
	display: flex;
	align-items: center;
}
@mixin pcenect {
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	position: absolute;
}
$colorE:#eee;
$colorf:#fff;
.index-list {
	padding: 20upx;
	border-bottom: 1upx solid $colorE;
	.index-list1 {
		@include disflex;
		view {
			&:first-child {
				@include flexCenter;
				color: #999999;
				image{
					width: 85upx;
					height: 85upx;
					border-radius: 100%;
					margin-right: 10upx;
				}
				
			}
			&:last-child {
				padding: 0 10upx;
					background-color: $colorE;
					border-radius: 5upx;
				@include flexCenter;
				
			}
		}
	}
	.index-list2 {
		padding-top: 15upx;
		font-size: 32upx;
		color: #333;
	}
	.index-list3 {
		position: relative;
		padding-top: 15upx;
		image{
			width: 100%;
			border-radius: 20upx;
		}
		.index-list-pay{
			color: $colorf;
			font-size: 120upx;
			@include pcenect();
		}
		.index-list-payinfo{
			position: absolute;
			bottom: 25upx;
			right: 8upx;
			font-size: 22upx;
			padding: 0 12upx;
			border-radius: 40upx;
		color: $colorf;
			background: #333;
			opacity: .7;
		}
	}
	.index-list4 {
		padding: 15upx 0;
		@include disflex;
		color: #ccc;
		.active{
			color: #c5f61c;
			
		}
		view {
			view{
				display: flex;
				align-items: center;
					margin:0 4upx 0 10upx;
			}
			&:first-child {
				@include flexCenter;
			}
			&:last-child {
				@include flexCenter;
			}
		}
	}
}
</style>
