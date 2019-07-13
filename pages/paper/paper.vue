<template>
		<view class="paper-body" >
			<paperLeftPopus :show=show @addfriend=addfriend @clear=clear @hide=hide></paperLeftPopus>
			<block v-for="(item,index) in list" :key="index">
				<paperList :item="item" :index="index"></paperList>
			</block>
			<!-- 上拉加载 -->
			<loadMore :loadtext=loadtext></loadMore>
			
		</view>
</template>

<script>
	import paperList from "../../componets/paper/paper-list.vue"
		import uniBadge from "../../componets/uni-badge/uni-badge.vue";
			import loadMore from "../../componets/common/load-more.vue";
			import paperLeftPopus from "../../componets/paper/paper-left-popus.vue";
	export default {
		data() {
			return {
				show:false,
					loadtext:"上拉加载更多",
				list:[
					{
						userpic:"../../static/demo/userpic/12.jpg",
						username:"昵称",
						time:"12:11",
						data:"备1注",
						noreadnum:"10"
					},
					{
						userpic:"../../static/demo/userpic/12.jpg",
						username:"昵称",
						time:"12:11",
						data:"备注",
						noreadnum:"0"
					},
					{
						userpic:"../../static/demo/userpic/12.jpg",
						username:"昵称",
						time:"12:11",
						data:"备注",
						noreadnum:"211"
					},
					{
						userpic:"../../static/demo/userpic/12.jpg",
						username:"昵称",
						time:"12:11",
						data:"备注",
						noreadnum:"21"
					},
					{
						userpic:"../../static/demo/userpic/12.jpg",
						username:"昵称",
						time:"12:11",
						data:"备注",
						noreadnum:"11"
					},
					{
						userpic:"../../static/demo/userpic/12.jpg",
						username:"昵称",
						time:"12:11",
						data:"备注",
						noreadnum:"21"
					},
					{
						userpic:"../../static/demo/userpic/12.jpg",
						username:"昵称",
						time:"12:11",
						data:"备注",
						noreadnum:"11"
					},
					{
						userpic:"../../static/demo/userpic/12.jpg",
						username:"昵称",
						time:"12:11",
						data:"备注",
						noreadnum:"21"
					},
					{
						userpic:"../../static/demo/userpic/12.jpg",
						username:"昵称",
						time:"12:11",
						data:"备注",
						noreadnum:"0"
					},
					{
						userpic:"../../static/demo/userpic/12.jpg",
						username:"昵称",
						time:"12:11",
						data:"备注",
						noreadnum:"0"
					}
				]
			};
		},
		components:{
		uniBadge,
		paperList,
		loadMore,
		paperLeftPopus
		},
		//监听下拉刷新
		onPullDownRefresh() {
			this.getdata();
		},
		//页面滚动事件
		onReachBottom() {
			this.loadmore();
		},
		//监听导航按钮
		
		onNavigationBarButtonTap(e) {
		if(e.index == 1){
			this.show = true;
		}
		else	if(e.index == 0){
			uni.navigateTo({
				url: '../user-list/user-list'
				
			});
		}
		},
		methods:{
			hide(){
				this.show = false;
			},
			clear(){
				this.show = false;
			},
			addfriend(){
				this.show = false;
			},
			//获取数据
			getdata(){
				setInterval(()=>{
					let arr =[
						{
							userpic:"../../static/demo/userpic/12.jpg",
							username:"昵称1",
							time:"12:11",
							data:"备注",
							noreadnum:"211"
						},
						{
							userpic:"../../static/demo/userpic/12.jpg",
							username:"昵称2",
							time:"12:11",
							data:"备注",
							noreadnum:"211"
						}
					]
					//赋值
					this.list = arr;
					//关闭下拉刷新
					uni.stopPullDownRefresh();
					
				},2000);
				
			},
			//上拉加载
			loadmore(){
				if(this.loadtext != "上拉加载更多"){
					return;
				}
				this.loadtext= "加载中...";
				setInterval(()=>{
					let arr =
						{
							userpic:"../../static/demo/userpic/12.jpg",
							username:"昵称1",
							time:"12:11",
							data:"备注",
							noreadnum:"211"
						}
					
					//赋值
					this.list.push(arr);
					
					
				},2000);
			}
			
		}
	}
</script>

<style lang="scss">
.paper-body{
		padding: 0 20upx;
		
		.paper-list{
			border-bottom: 1upx solid #eee;
			padding: 20upx 0;
			display: flex;
			image{
				width: 100upx;
				height: 100upx;
				border-radius: 100%;
				flex-shrink: 0;
				margin-right: 15upx;
			}
			.list{
				flex: 1;
				display: flex;
				flex-direction: column;
				view{
					display: flex;
					justify-content: space-between;
					align-items: center;
					&:first-child{
						font-size: 35upx;
						text{
								color: #CBCBCB;
						}
					}
					&:last-child{
						
						color: #999;
					}
				}
				
			}
		}
		
	}
</style>
