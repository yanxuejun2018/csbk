<template>
	
	<view >
		<topicInfo :topicInfo=topicInfo></topicInfo>
			<swiperTabHeader :tabBars = "tabBars" scrollItemStyle="width:50%;" scrollStyle="border-bottom:none;"  :tabIndex="tabIndex" @tabtap="tapTab"></swiperTabHeader>
			<!-- 列表 -->
			<view class="topic-detail-list">
				<block v-for="(item,index) in tablist" :key="index">
				
						<template v-if="tabIndex==index">
					<!-- 列表 -->
					<block v-for="(list,listindex) in item.list" :key="listindex">
						<common-list :item="list" :index="listindex"></common-list>
					</block>
					<!-- 上拉加载 -->
					<loadMore :loadtext=item.loadtext></loadMore>
				</template>
					</block>
					
				
					
					
					
			</view>
	</view>
</template>

<script>
	import topicInfo from "../../componets/topic/topic-info.vue";
	import swiperTabHeader from "../../componets/index/swiper-tab-header.vue";
	import commonList from "../../componets/common/common-list.vue";
		import loadMore from "../../componets/common/load-more.vue";
	export default {
		data() {
			return {
					tabIndex: 0,
					tabBars: [
					{ name:"默认",id:"moren" },
					{ name:"最新",id:"zuixin" },
					],
				topicInfo:{
					titlepic:"../../static/demo/topicpic/13.jpeg",
					title:"#忆往事，敬余生#",
					desc:"我是描述",
					totalnum:1000,
					todaynum:1000
				},
				tablist:[
					{
						loadtext:"上拉加载更多",
						list:[
							// 文字
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哈哈",
								sex:0, //0 男 1 女
								age:25,
								isguanzhu:false,
								title:"我是标题",
								titlepic:"",
								video:false,
								share:false,
								path:"深圳 龙岗",
								sharenum:20,
								commentnum:30,
								goodnum:20
							},
							// 图文
							{
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
							},
							// 视频
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哈哈",
								sex:0, //0 男 1 女
								age:25,
								isguanzhu:false,
								title:"我是标题",
								titlepic:"../../static/demo/datapic/13.jpg",
								video:{
									looknum:"20w",
									long:"2:47"
								},
								share:false,
								path:"深圳 龙岗",
								sharenum:20,
								commentnum:30,
								goodnum:20
							},
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							// 文字
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哈哈",
								sex:0, //0 男 1 女
								age:25,
								isguanzhu:false,
								title:"我是标题",
								titlepic:"",
								video:false,
								share:false,
								path:"深圳 龙岗",
								sharenum:20,
								commentnum:30,
								goodnum:20
							},
							// 图文
							{
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
							},
							// 视频
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哈哈",
								sex:0, //0 男 1 女
								age:25,
								isguanzhu:false,
								title:"我是标题",
								titlepic:"../../static/demo/datapic/13.jpg",
								video:{
									looknum:"20w",
									long:"2:47"
								},
								share:false,
								path:"深圳 龙岗",
								sharenum:20,
								commentnum:30,
								goodnum:20
							},
						]
					},
				]
			};
		},
		onReachBottom() {
			this.loadmore();
			
		},
		onPullDownRefresh() {
			this.getdata();
		},
		components:{
			topicInfo,
			swiperTabHeader,
			commonList,
			loadMore
		},
		methods:{
			// 上拉刷新
			getdata(){
				setTimeout(()=> {
					// 获取数据
					let arr=[
						// 文字
						{
							userpic:"../../static/demo/userpic/12.jpg",
							username:"哈哈111111",
							sex:0, //0 男 1 女
							age:25,
							isguanzhu:false,
							title:"我是标题11111",
							titlepic:"",
							video:false,
							share:false,
							path:"深圳 龙岗",
							sharenum:20,
							commentnum:30,
							goodnum:20
						},
						// 图文
						{
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
						},
						// 视频
						{
							userpic:"../../static/demo/userpic/12.jpg",
							username:"哈哈",
							sex:0, //0 男 1 女
							age:25,
							isguanzhu:false,
							title:"我是标题",
							titlepic:"../../static/demo/datapic/13.jpg",
							video:{
								looknum:"20w",
								long:"2:47"
							},
							share:false,
							path:"深圳 龙岗",
							sharenum:20,
							commentnum:30,
							goodnum:20
						},
					];
					// 赋值
					this.tablist[this.tabIndex].list=arr;
					// 关闭下拉刷新
					uni.stopPullDownRefresh();
				}, 2000);
				},
				 tapTab(e) { //点击tab-bar
				let tabIndex = e;
				this.tabIndex = tabIndex;
				},
				// 上拉加载
			loadmore(){
				if(this.tablist[this.tabIndex].loadtext!="上拉加载更多"){ return; }
				// 修改状态
				this.tablist[this.tabIndex].loadtext="加载中...";
				// 获取数据
				setTimeout(()=> {
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
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].loadtext="上拉加载更多";
				}, 1000);
				//this.tablist[this.tabIndex].loadtext="没有更多数据了";
			},
				}
	}
</script>

<style lang="scss">
.topic-list{
	
}
</style>
