<template>
		<view class="paper-body" >
			<block v-for="(item,index) in list" :key="index">
				<paperList :item=item :index=index></paperList>
			</block>
		
		</view>
</template>

<script>
	import paperList from "../../componets/paper/paper-list.vue"
		import uniBadge from "../../componets/uni-badge/uni-badge.vue";
	export default {
		data() {
			return {
				list:[
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
						noreadnum:"211"
					}
				]
			};
		},
		components:{
		uniBadge,
		paperList
		},
		methods:{
			
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
