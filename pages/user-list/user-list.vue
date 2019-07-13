<template>
	<view class="user-body">
		<swiperTabHeader :tabBars = "tabBars" scrollItemStyle="width:33%;" scrollStyle="border-bottom:none;"  :tabIndex="tabIndex" @tabtap="tapTab"></swiperTabHeader>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :duration="300" :style="{height:swiperHeight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(tab,index) in newsList" :key="index">
					<scroll-view class="list" scroll-y  @scrolltolower="loadmove(index)">
						<template v-if="tab.list.length >0">
							<block v-for="(newsitem,index2) in tab.list" :key="index2">
								<!-- 好友列表 -->
								<userList :item=newsitem :index=index2></userList>
							</block>
							<!-- 下拉加载 -->
							<loadMore :loadtext=tab.loadtext></loadMore>
						</template>
						
						<template v-else>
							<!-- 无内容默认 -->
							<noThing></noThing>
						</template>
						
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
import swiperTabHeader from "../../componets/index/swiper-tab-header.vue";
import loadMore from "../../componets/common/load-more.vue";
import noThing from "../../componets/common/no-thing.vue";
import userList from "../../componets/user-list/user-list.vue";

	export default {
		data() {
			return {
				swiperHeight:573,
				tabIndex: 0,
				tabBars: [
				{ name:"互关",id:"huguan", num:10},
				{ name:"关注",id:"guanzhu",num:20 },
				{ name:"粉丝",id:"feisi" ,num:30}
				],
				newsList:[
					{
						loadtext:"上拉加载更多",
				list:[
					{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					age:12,
					sex:1,
					isguanzhu:false
					},
						{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					age:12,
					sex:0,
					isguanzhu:false
					},
					{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					age:12,
					sex:1,
					isguanzhu:false
					},
					{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					age:12,
					sex:0,
					isguanzhu:false
					},
					{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					age:12,
					sex:0,
					isguanzhu:false
					},
					{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					age:12,
					sex:1,
					isguanzhu:false
					},
						{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					age:12,
					sex:0,
					isguanzhu:false
					},
					{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					age:12,
					sex:1,
					isguanzhu:false
					},
					{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					age:12,
					sex:0,
					isguanzhu:false
					},
					{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					age:12,
					sex:0,
					isguanzhu:false
					}
				]
				},
				{
						loadtext:"上拉加载更多",
				list:[
					{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					age:12,
					sex:0,
					isguanzhu:true
					}
				]
				},
				{
						loadtext:"上拉加载更多",
				list:[
					{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					age:12,
					sex:0,
					isguanzhu:false
					},
					{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					age:12,
					sex:1,
					isguanzhu:false
					},
					{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					age:12,
					sex:0,
					isguanzhu:false
					},
					{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					age:12,
					sex:0,
					isguanzhu:false
					}
				]
				}
				]
			};
		},
		methods:{
			 tapTab(e) { //点击tab-bar
			let tabIndex = e;
			this.tabIndex = tabIndex;
			},
			tabChange(e){
			this.tabIndex =	e.detail.current;
			},
			loadmove(index){
				if (this.newsList[index].loadtext != "上拉加载更多") {
					return;
				}
				this.newsList[index].loadtext= "加载中...";
				setInterval(()=>{
					let obj =	{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					age:12,
					sex:0,
					isguanzhu:false
						
					};
					this.newsList[index].list.push(obj);
					this.newsList[index].loadtext= "上拉加载更多";
				},1000);
				//this.newsList[index].loadtext= "没有更多数据了";
				
			}
		},
		components:{
			swiperTabHeader,
			userList,
			loadMore,
			noThing
		},
			//监听原生标题栏点击事件
		onNavigationBarButtonTap(e) {
			if(e.index == 0){
				uni.navigateBack({
					delta:1
				})
			}
		},
		
	}
</script>

<style lang="scss">
	.user-body{
		padding: 0 20upx;
	}

		
</style>
