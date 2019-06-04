<template>
	<view>
		<!-- 自定义导航栏 -->
		<newsNavBar :tabBars=tabBars :tabIndex=tabIndex @changTap="changTap"></newsNavBar>
	
			
				<view class="uni-tab-bar">
			<swiper class="swiper-box" :duration="300"  :style="{height:swiperHeight+'px'}" :current="tabIndex" @change="tabChange">
				<!-- 关注 -->
				<swiper-item >
					<scroll-view class="list" scroll-y @scrolltolower="loadmove()" >
					<!-- 列表 -->
					<block v-for="(item,index) in guanzhu.list" :key= "index">
						<commonList :item=item :index=index></commonList>
					</block>
					<!-- 上拉加载 -->
						<loadMore :loadtext=guanzhu.loadtext></loadMore>
					</scroll-view>
				</swiper-item>
				<!-- 话题 -->
				<swiper-item >
					<scroll-view class="list" scroll-y  >
						<!-- 搜索框 -->
					<view class="search-input">
						<input class="uni-input" placeholder-style="display: flex;justify-content: center;font-size: 27upx;" placeholder-class="icon iconfont icon-sousuo" placeholder="搜索内容"/>
					</view>
						
						<!-- 轮播图 -->
						<swiper :indicator-dots="true" :autoplay="true" indicator-active-color="#fff" circular indicator-color="#666" :interval="3000" :duration="1000" class="topic-swiper">
							<swiper-item  v-for="(item,index) in topic.swiper" :key="index">
								<image :src="item.src" mode="widthFix" lazy-load></image>
							</swiper-item>
						</swiper>
						<!-- 热门分类 -->
						<topicNav :nav=topic.nav></topicNav>
							<!-- 最近更新 -->
							<view class="topic-new">
						<view>最近更新</view>
						<block v-for="(item,index) in topic.list" :key="index">
							<topicList :item=item :index=index></topicList>
						</block>
					</view>
					</scroll-view>
				</swiper-item>
			</swiper>
			</view>
	</view>
</template>

<script>
		import commonList from "../../componets/common/common-list.vue";
		import newsNavBar from "../../componets/news/news-nav-bar.vue";
		import loadMore from "../../componets/common/load-more.vue";
		import topicNav from "../../componets/news/topic-nav.vue";
		import topicList from "../../componets/news/topic-list.vue";
	export default {
		data() {
			return {
			swiperHeight:0,
				tabIndex:1,
				tabBars: [{
					name: '关注',
					id:"guanzhu"
				}, {
					name: '话题',
					id:"topic"
					}
				],
				guanzhu:{
						loadtext:"上拉加载更多",
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
				}
				,
				topic:{
					swiper:[
							{ src:"../../static/demo/banner2.jpg" },
						{ src:"../../static/demo/banner2.jpg" },
						{ src:"../../static/demo/banner2.jpg" },
					],
					nav:[
						{name:"最新"},
						{name:"游戏"},
						{name:"打卡"},
						{name:"情感"},
						{name:"故事"},
						{name:"喜爱"},
					],
					list:[
						{
							titlepic:"../../static/demo/topicpic/13.jpeg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10
						},
						{
							titlepic:"../../static/demo/topicpic/13.jpeg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10
						},
						{
							titlepic:"../../static/demo/topicpic/13.jpeg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10
						},
						{
							titlepic:"../../static/demo/topicpic/13.jpeg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10
						},
						{
							titlepic:"../../static/demo/topicpic/13.jpeg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10
						},
						{
							titlepic:"../../static/demo/topicpic/13.jpeg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10
						}
					]
				}
					
			
			};
		}
		,
		onLoad() {
			uni.getSystemInfo({
				success:(res)=> {
					this.swiperHeight = res.windowHeight-uni.upx2px(100);
				
				}
			})
		},
		components:{
			commonList,
			newsNavBar,
			loadMore,
			topicNav,
			topicList
		},
		methods:{
			//滑动切换
			tabChange(e){
			this.tabIndex =	e.detail.current;
			},
			//点击切换
			changTap(index){
				this.tabIndex = index;
			},
			loadmove(){
				if (this.guanzhu.loadtext != "上拉加载更多") {
					return;
				}
				this.guanzhu.loadtext=  "加载中...";
				setInterval(()=>{
					//获取完成
					let obj={
						userpic:"../../static/demo/userpic/12.jpg",
						username:"哈哈",
						sex:0, //0 男 1 女
						age:25,
						isguanzhu:false,
						title:"我是标题",
						titlepic:"../../static/demo/datapic/13.jpg",
						video:false,
						share:false,
						path:"深圳 龙岗",
						sharenum:20,
						commentnum:30,
						goodnum:20
					};
					this.guanzhu.list.push(obj);
					this.guanzhu.loadtext= "上拉加载更多";
				},1000);
				//this.guanzhu.loadtext= "没有更多数据了";
				
			}
			
		}
		
		
	}
</script>

<style lang="scss" scoped>
.search-input{
	padding: 20upx;
	input{
		border-radius: 10upx;
		background-color: #f4f4f4;
	}
}	

.topic-swiper{
	padding:0 20upx 20upx 20upx;
	image{
		width: 100%;
		border-radius: 10upx;
	}
		
}
.topic-new{
		padding: 20upx;
	view{
			&:first-child{
				padding-bottom: 5upx;
				font-size: 32upx;
				color: #4d4d4d;
			}
	}
	
}
</style>
