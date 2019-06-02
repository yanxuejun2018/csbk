<template>
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar  :statusBar="true" :fixed="true"  @click-right="openAdd" color="#666">
			<!-- 左边 -->
			<block slot="left">
				<view class="nav-left">
					<view class="icon iconfont icon-qiandao"></view>
				</view>
			</block>
			<!-- 中间 -->
			<view class="nav-tap-bar">
				<block v-for="(item,index) in tabBars" :key="item.id">
					<view :class="{'active':tabIndex == index}" @tap="changTap(index)">{{item.name}}<text class="nav-tap-bar-line" v-show="(tabIndex == index)"></text></view>
				</block>
			</view>
			<!-- 右边 -->
				<block slot="right">
						<view class="nav-right">
							<view class="icon iconfont icon-bianji1"></view>
						</view>
				</block>
		</uni-nav-bar>
	
			<!-- 列表 -->
			<block v-for="(item,index) in list" :key= "index">
				<commonList :item=item :index=index></commonList>
			</block>
			
	</view>
</template>

<script>
		import uniNavBar from '../../componets/uni-nav-bar/uni-nav-bar.vue';
		import commonList from "../../componets/common/common-list.vue";
	export default {
		data() {
			return {
				tabIndex:0,
				tabBars: [{
					name: '关注',
					id:"guanzhu"
				}, {
					name: '话题',
					id:"topic"
					}
				],
				list:[
					//图文
					{
						userpic:"../../static/demo/userpic/12.jpg",
						username:"昵称",
						sex:1,//0男1女
						age:22,
						isguanzhu:true,
						title:"我的标题",
						titlepic:"../../static/demo/datapic/13.jpg",
						video:false,
						share:false,
						path:"武汉市洪山区",
						sharenum:20,
						commentnum:21,
						goodnum:211
						
					},
					//文字
					{
						userpic:"../../static/demo/userpic/12.jpg",
						username:"昵称",
						sex:0,//0男1女
						age:22,
						isguanzhu:false,
						title:"我的标题",
						titlepic:"",
						video:false,
						share:false,
						path:"武汉市洪山区",
						sharenum:20,
						commentnum:21,
						goodnum:211
						
					},
					//视频
					{
						userpic:"../../static/demo/userpic/12.jpg",
						username:"昵称",
						sex:0,//0男1女
						age:22,
						isguanzhu:false,
						title:"我的标题",
						titlepic:"../../static/demo/datapic/13.jpg",
						video:{
							looknum:"20w",
							long:"2:11"
						},
						share:false,
						path:"武汉市洪山区",
						sharenum:20,
						commentnum:21,
						goodnum:211
						
					},
					//分享
					{
						userpic:"../../static/demo/userpic/12.jpg",
						username:"昵称",
						sex:0,//0男1女
						age:22,
						isguanzhu:false,
						title:"我的标题",
						titlepic:"",
						video:false,
						share:{
							title:"标题",
							titlepic:"../../static/demo/datapic/14.jpg"
						},
						path:"武汉市洪山区",
						sharenum:20,
						commentnum:21,
						goodnum:211
						
					}
				]
			};
		}
		,
		components:{
			uniNavBar,
			commonList
		},
		methods:{
			//打开发布页面
			openAdd(){
				uni.navigateTo({
					url:"../app-input/app-input"
				})
			},
			changTap(index){
				this.tabIndex = index;
			},
			
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
@mixin nav{
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.nav-left{
	@include nav;
	width: 50%;
	view{
		font-size: 40upx;
		color: #ff9619;
	}
}
.nav-right{
	@include nav;
	margin-left: 16upx;
	view{
		font-size: 40upx;
		
	}
}
.nav-tap-bar{
	height: 100%;
	@include nav;
	position: relative;
	margin-left: -20upx;
	.active{
		color: #333;
	}
	view{
		font-size: 32upx;
		font-weight: bold;
		padding: 0 15upx;
			display: flex;
			justify-content: center;
			align-items: center;
		color: $color;
		.nav-tap-bar-line{
			position: absolute;
			border-bottom: 5upx solid #FFE933;
			border-top: 5upx solid #FFE933;
			width: 70upx;
			bottom:12upx;
		
			border-radius: 20upx;
		}
	}
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
