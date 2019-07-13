<template>
	<view style="padding: 20upx;">
	<view class="user-set-about-t">
		<image src="../../static/common/addinput.png" mode="widthFix" lazy-load></image>
		<view>version 1.0.0</view>
	</view>
	<block v-for="(item,index) in list" :key=index>
		<homeListItem :item="item"
			:index="index"></homeListItem>
	</block>
	</view>
</template>

<script>
	import homeListItem from "../../componets/home/home-list.vue"
	export default {
		data() {
			return {
				list:[
					{ icon:"",name:"新版本检测",clicktype:"",url:"" },
					{ icon:"",name:"仿糗事百科用户协议",clicktype:"",url:"" },
				]
			};
		},
		components:{
			homeListItem
		}
	}
</script>

<style lang="scss">
.user-set-about-t{
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20upx 0;
	flex-direction: column;
	&>image{
		width: 60%;
		margin-top: 30px;
		margin-bottom: 20upx;
	}
	view{
		color: #ccc;
	}
}
</style>
