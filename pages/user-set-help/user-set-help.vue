<template>
	<view>
		
		<uni-collapse>
			<block v-for="(item,index) in list" :key="index">
				<uni-collapse-item :title="item.title" :show-animation="true" :contentdata="item.content"></uni-collapse-item>
			</block>
		</uni-collapse>
		<view class="body">
			<button class="user-set-btn" 
			type="primary">意见反馈</button>
		</view>
	</view>
</template>

<script>
	import uniCollapse from "../../componets/uni-collapse/uni-collapse.vue"
	import uniCollapseItem from "../../componets/uni-collapse-item/uni-collapse-item.vue"
	export default {
		data() {
			return {
				list:[
					{
						title:"客服什么时候上线？",
						content:"123"
					},
					{
						title:"忘记账号/昵称/密码怎么办？",
						content:"111111111"
					},
					{
						title:"怎么搜索/查找/关注/取关用户？",
						content:"222222"
					}
				]
			};
		},
		components:{
			uniCollapse,
			uniCollapseItem
		}
	}
</script>

<style lang="scss">
@import "../../common/css/form.css";
</style>
