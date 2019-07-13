<template>
	<view>
		<template v-if="!islogin">
			
			<view class="weilogin">登录糗事百科，体验更多功能</view>
			<!-- 第三方登录 -->
			<otherLogin></otherLogin>
			<!-- 账号密码登录 -->
			<view class="loginpwd" @tap="openLogin">
				账号密码登录<text class="icon iconfont icon-jinru"></text>
			</view>
		</template>
		
		<!-- 登录 -->
		<template v-else>
		<homeInfo :homeinfo=homeinfo></homeInfo>
		</template>
		
		<!-- 数据 -->
		<homeData :homedata=homedata></homeData>
	
		<!-- 广告位 -->
		<view  class="home-adv">
			<image src="../../static/demo/demo20.jpg" mode="widthFix" lazy-load></image>
		</view>
		<!-- 功能列表 -->
		<block v-for="(item,index) in list" :key="index">
			<homeList :item=item :index=index></homeList>
		</block>
		
	</view>
</template>

<script>
	import homeList from "../../componets/home/home-list.vue"
	import homeInfo from "../../componets/home/home-info.vue"
	import otherLogin from "../../componets/home/other-login.vue"
	import homeData from "../../componets/home/home-data.vue"
	export default {
		data() {
			return {
				islogin:true,
				homeinfo:{
					userpic:"../../static/demo/userpic/11.jpg",
					username:"昵称",
					totalnum:0,
					todaynum:0,
				},
				homedata:[
					{ name:"糗事", num:0 },
					{ name:"动态", num:0 },
					{ name:"评论", num:0 },
					{ name:"收藏", num:0 },
				],
				list:[
					{ icon:"liulan",name:"浏览历史",clicktype:"",url:""},
					{ icon:"huiyuanvip",name:"糗百认证",clicktype:"",url:"" },
					{ icon:"keyboard",name:"审核糗事",clicktype:"",url:"" }
				]
			}
		},
		components:{
			homeList,
			homeInfo,
			otherLogin,
			homeData
		},
		onNavigationBarButtonTap(e) {
			
			if(e.index == 0){
			uni.navigateTo({
				url:"../user-set/user-set"
			})
			}
		},
		methods:{
			openLogin(){
				uni.navigateTo({
					url: '../login/login'
				});
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.weilogin{
		text-align: center;
	}
	

	
	.loginpwd{
		text-align: center;
	}
	.home-adv{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20upx;
		&>imgage{
			border-radius: 20upx;
			height: 150upx;
		}
	}
	


	
	
	
</style>
