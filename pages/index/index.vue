<template>
	<view>
			<swiperTabHeader :tabBars = "tabBars" :tabIndex="tabIndex" @tabtap="tapTab"></swiperTabHeader>
			<view class="uni-tab-bar">
		<swiper class="swiper-box" :duration="300" :style="{height:swiperHeight+'px'}" :current="tabIndex" @change="tabChange">
			<swiper-item v-for="(tab,index) in newsList" :key="index">
				<scroll-view class="list" scroll-y  @scrolltolower="loadmove(index)">
					<template v-if="tab.list.length >0">
						<block v-for="(newsitem,index2) in tab.list" :key="index2">
							<indexList :item=newsitem ></indexList>
						</block>
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
import indexList from "../../componets/index/index-list.vue";
import swiperTabHeader from "../../componets/index/swiper-tab-header.vue";
import loadMore from "../../componets/common/load-more.vue";
import noThing from "../../componets/common/no-thing.vue"
export default {
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
						userpic:"../../static/demo/userpic/12.jpg",//头像
						username:"昵称",
						isguanzhu:false,
						title:"我是标题",
						type:"img", //img图文  video视频
						titlepic:"../../static/demo/datapic/11.jpg",//封面图
						infonum:{
							index:0,//0代表没有操作 1代表操作顶 2 踩
							dingnum:11,//顶
							cainum:11,//踩
						},
						commentnum:10,//评论
						sharenum:10//转发
						
					};
					this.newsList[index].list.push(obj);
					this.newsList[index].loadtext= "上拉加载更多";
				},1000);
				//this.newsList[index].loadtext= "没有更多数据了";
				
			}
			
			
	},
	data() {
		return {
				swiperHeight:573,
				tabIndex: 0,
				tabBars: [{
				name: '关注',
				id: 'guanzhu'
			}, {
				name: '推荐',
				id: 'tuijian'
			}, {
				name: '体育',
				id: 'tiyu'
			}, {
				name: '热点',
				id: 'redian'
			}, {
				name: '财经',
				id: 'caijing'
			}, {
				name: '娱乐',
				id: 'yule'
			}, {
				name: '军事',
				id: 'junshi'
			}, {
				name: '历史',
				id: 'lishi'
			}, {
				name: '本地',
				id: 'bendi'
			}],
			newsList:[
				{
					loadtext:"上拉加载更多",
					list:[
						
						{
							userpic:"../../static/demo/userpic/12.jpg",//头像
							username:"昵称",
							isguanzhu:false,
							title:"我是标题",
							type:"img", //img图文  video视频
							titlepic:"../../static/demo/datapic/11.jpg",//封面图
							infonum:{
								index:0,//0代表没有操作 1代表操作顶 2 踩
								dingnum:11,//顶
								cainum:11,//踩
							},
							commentnum:10,//评论
							sharenum:10//转发
							
						},
						{
							userpic:"../../static/demo/userpic/12.jpg",//头像
							username:"昵称2",
							isguanzhu:true,
							title:"我是标题2",
							type:"video", //img图文  video视频
							titlepic:"../../static/demo/datapic/11.jpg",//封面图
							playnum:"20w",//播放次数
							long:"2:17",//时长
							infonum:{
								index:0,//0代表没有操作 1代表操作顶 2 踩
								dingnum:11,//顶
								cainum:11,//踩
							},
							commentnum:10,//评论
							sharenum:10//转发
							
						}
					]
				},
				{
					loadtext:"上拉加载更多",
					list:[
						{
							userpic:"../../static/demo/userpic/12.jpg",//头像
							username:"昵称",
							isguanzhu:false,
							title:"我是标题",
							type:"img", //img图文  video视频
							titlepic:"../../static/demo/datapic/11.jpg",//封面图
							infonum:{
								index:0,//0代表没有操作 1代表操作顶 2 踩
								dingnum:11,//顶
								cainum:11,//踩
							},
							commentnum:10,//评论
							sharenum:10//转发
							
						}
					]
				},
				{
					loadtext:"上拉加载更多",
					list:[
						{
							userpic:"../../static/demo/userpic/12.jpg",//头像
							username:"昵称",
							isguanzhu:false,
							title:"我是标题",
							type:"img", //img图文  video视频
							titlepic:"../../static/demo/datapic/11.jpg",//封面图
							infonum:{
								index:0,//0代表没有操作 1代表操作顶 2 踩
								dingnum:11,//顶
								cainum:11,//踩
							},
							commentnum:10,//评论
							sharenum:10//转发
							
						},
						{
							userpic:"../../static/demo/userpic/12.jpg",//头像
							username:"昵称",
							isguanzhu:false,
							title:"我是标题",
							type:"img", //img图文  video视频
							titlepic:"../../static/demo/datapic/11.jpg",//封面图
							infonum:{
								index:0,//0代表没有操作 1代表操作顶 2 踩
								dingnum:11,//顶
								cainum:11,//踩
							},
							commentnum:10,//评论
							sharenum:10//转发
							
						},
						{
							userpic:"../../static/demo/userpic/12.jpg",//头像
							username:"昵称",
							isguanzhu:false,
							title:"我是标题",
							type:"img", //img图文  video视频
							titlepic:"../../static/demo/datapic/11.jpg",//封面图
							infonum:{
								index:0,//0代表没有操作 1代表操作顶 2 踩
								dingnum:11,//顶
								cainum:11,//踩
							},
							commentnum:10,//评论
							sharenum:10//转发
							
						}
					]
				},
				{
					loadtext:"上拉加载更多",
					list:[
						{
							userpic:"../../static/demo/userpic/12.jpg",//头像
							username:"昵称",
							isguanzhu:false,
							title:"我是标题",
							type:"img", //img图文  video视频
							titlepic:"../../static/demo/datapic/11.jpg",//封面图
							infonum:{
								index:0,//0代表没有操作 1代表操作顶 2 踩
								dingnum:11,//顶
								cainum:11,//踩
							},
							commentnum:10,//评论
							sharenum:10//转发
							
						}
					]
				},
				{
					loadtext:"上拉加载更多",
					list:[
						{
							userpic:"../../static/demo/userpic/12.jpg",//头像
							username:"昵称",
							isguanzhu:false,
							title:"我是标题",
							type:"img", //img图文  video视频
							titlepic:"../../static/demo/datapic/11.jpg",//封面图
							infonum:{
								index:0,//0代表没有操作 1代表操作顶 2 踩
								dingnum:11,//顶
								cainum:11,//踩
							},
							commentnum:10,//评论
							sharenum:10//转发
							
						},
						{
							userpic:"../../static/demo/userpic/12.jpg",//头像
							username:"昵称",
							isguanzhu:false,
							title:"我是标题",
							type:"img", //img图文  video视频
							titlepic:"../../static/demo/datapic/11.jpg",//封面图
							infonum:{
								index:0,//0代表没有操作 1代表操作顶 2 踩
								dingnum:11,//顶
								cainum:11,//踩
							},
							commentnum:10,//评论
							sharenum:10//转发
							
						}
					]
				},
				{
					loadtext:"上拉加载更多",
					list:[
						{
							userpic:"../../static/demo/userpic/12.jpg",//头像
							username:"昵称",
							isguanzhu:false,
							title:"我是标题",
							type:"img", //img图文  video视频
							titlepic:"../../static/demo/datapic/11.jpg",//封面图
							infonum:{
								index:0,//0代表没有操作 1代表操作顶 2 踩
								dingnum:11,//顶
								cainum:11,//踩
							},
							commentnum:10,//评论
							sharenum:10//转发
							
						},
						{
							userpic:"../../static/demo/userpic/12.jpg",//头像
							username:"昵称",
							isguanzhu:false,
							title:"我是标题",
							type:"img", //img图文  video视频
							titlepic:"../../static/demo/datapic/11.jpg",//封面图
							infonum:{
								index:0,//0代表没有操作 1代表操作顶 2 踩
								dingnum:11,//顶
								cainum:11,//踩
							},
							commentnum:10,//评论
							sharenum:10//转发
							
						}
					]
				},
				{
					loadtext:"上拉加载更多",
					list:[
						{
							userpic:"../../static/demo/userpic/12.jpg",//头像
							username:"昵称",
							isguanzhu:false,
							title:"我是标题",
							type:"img", //img图文  video视频
							titlepic:"../../static/demo/datapic/11.jpg",//封面图
							infonum:{
								index:0,//0代表没有操作 1代表操作顶 2 踩
								dingnum:11,//顶
								cainum:11,//踩
							},
							commentnum:10,//评论
							sharenum:10//转发
							
						}
					]
				},
				{
					loadtext:"上拉加载更多",
					list:[
						{
							userpic:"../../static/demo/userpic/12.jpg",//头像
							username:"昵称",
							isguanzhu:false,
							title:"我是标题",
							type:"img", //img图文  video视频
							titlepic:"../../static/demo/datapic/11.jpg",//封面图
							infonum:{
								index:0,//0代表没有操作 1代表操作顶 2 踩
								dingnum:11,//顶
								cainum:11,//踩
							},
							commentnum:10,//评论
							sharenum:10//转发
							
						}
					]
				},
				{
					loadtext:"上拉加载更多",
					list:[
					]
				}
			]
		
		};
	},
	onLoad() {
		uni.getSystemInfo({
			success:(res)=> {
				this.swiperHeight = res.windowHeight-uni.upx2px(100);
			}
		})
	},
	onNavigationBarSearchInputClicked() {
		uni.navigateTo({
			url:"../search/search",
			animationType:"slide-in-left",
			animationDuration:500
		})
	},
	onNavigationBarButtonTap(e) {
			if(e.index == 1){
				uni.navigateTo({
					url:"../app-input/app-input"
				})
			}
	}
	,
	components:{
		indexList,
		swiperTabHeader,
		loadMore,
		noThing
	}
};
</script>

<style lang="scss" scoped>

</style>
