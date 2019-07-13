<template>
	<!-- 背景图 -->
	<view class="user-space-head">
		<image :src=getBgImg mode="widthFix" lazy-load @tap.stop="changBgImg"></image>
		<view class="user-space-info">
			<image src="../../static/demo/userpic/11.jpg" mode="widthFix" lazy-load></image>
			<view>{{userinfo.username}}<tagSexAge :sex="userinfo.sex" :age="userinfo.age"></tagSexAge></view>
			<view class="icon iconfont user-space-btn "  @tap.stop="guanzhu" :class="[isguanzhu?'active':'icon-zengjia']" >{{isguanzhu?'已关注':'关注'}}</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from "../../componets/common/tag-sex-age.vue"
	export default {
		props: {
			userinfo:Object
		},
		data() {
			return {
				isguanzhu: this.userinfo.isguanzhu
			}
		},
		components: {
			tagSexAge
		},
		computed:{
			getBgImg(){
				return "../../static/bgimg/"+this.userinfo.bgimg+".jpg";
			}
		},
		methods: {
			// 切换背景
			changBgImg(){
				let no = parseInt(this.userinfo.bgimg);
				this.userinfo.bgimg = no<4 ? ++no : 1;
			},
			//关注
			guanzhu() {
				this.isguanzhu=!this.isguanzhu;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-space-head{
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		height: 500upx;
		overflow: hidden;
		&>image{
			display: block;
			width: 100%;
		}
		
		&>.user-space-info{
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			position: absolute;
			top: 150upx;
			&>image{
				width: 150upx;
				height: 150upx;
				border-radius: 100%;
			}
			&>view{
				&:nth-last-child(2){
					padding: 15upx 0;
					color: #fff;
					font-size: 35upx;
					font-weight: bold;
					text-shadow:  2upx 2upx 10upx #333;
				}
			}
			.user-space-btn{
				background-color: #ffe933;
				color: #333;
				border: 1px solid #ffe933;
				padding:0 15upx;
				border-radius: 10upx;
				font-size: 28upx;
			}
			.active{
		background:none;
		color: #FFFFFF;
		border: 1upx solid #FFFFFF;
	}
			}
		
	}
</style>
