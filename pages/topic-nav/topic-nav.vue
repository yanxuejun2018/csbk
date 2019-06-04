<template>
	<view>
		<swiperTabHeader :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tapTab"></swiperTabHeader>
		<view class="uni-tab-bar">
		<swiper class="swiper-box" :duration="300" :style="{height:swiperHeight+'px'}" :current="tabIndex" @change="tabChange">
			<swiper-item v-for="(tab,index) in newsList" :key="index">
				<scroll-view class="list" scroll-y  @scrolltolower="loadmove(index)">
					<template v-if="tab.list.length >0">
					<!-- 话题列表 -->
					<view class="topic-view">
						<block v-for="(newsitem,index2) in tab.list" :key="index2">
						<topicList :item=newsitem :index=index2></topicList>
						</block>
						</view>
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
	import topicList from "../../componets/news/topic-list.vue";
	export default {
		data() {
			return {
					swiperHeight:0,
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
						},
						{
							loadtext:"上拉加载更多",
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
						},
						{
							loadtext:"上拉加载更多",
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
						},
						{
							loadtext:"上拉加载更多",
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
						},
						{
							loadtext:"上拉加载更多",
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
						},
						{
							loadtext:"上拉加载更多",
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
						},
						{
							loadtext:"上拉加载更多",
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
						},
						{
							loadtext:"上拉加载更多",
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
						},
						{
							loadtext:"上拉加载更多",
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
								}
								
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
		components:{
			swiperTabHeader,
			loadMore,
			noThing,
			topicList
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
						titlepic:"../../static/demo/topicpic/13.jpeg",
						title:"话题名称",
						desc:"我是话题描述",
						totalnum:50,
						todaynum:10
						
					};
					this.newsList[index].list.push(obj);
					this.newsList[index].loadtext= "上拉加载更多";
				},1000);
				//this.newsList[index].loadtext= "没有更多数据了";
				
			}
		}
	}
</script>

<style lang="scss">
.topic-view{
	padding: 0 20upx;
}
</style>
