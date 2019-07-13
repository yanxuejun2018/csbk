<template>
	<view>
		<!-- 聊天列表 -->
		<scroll-view id="scrollview" scroll-y :scroll-top="scrollTop" 
		:scroll-with-animation="true"
		:style="{height:style.contentH+'px'}">
			<block v-for="(item,index) in list" :key=index>
				<view class="chat-item">
			<userChatList :item=item :index=index></userChatList>
			</view>
			</block>
		</scroll-view>
		
		
		<!-- 聊天输入框 -->
		<userChat  @submit="submit"></userChat>
	</view>
</template>

<script>
	import userChat from "../../componets/user-chat/user-chat.vue";
	import  time from "../../common/js/time.js";
	import userChatList from "../../componets/user-chat-list/user-chat-list.vue"
	export default {
		data() {
			return {
				scrollTop:0,
				style:{
					contentH:0,
					itemH:0
				},
					list:[
						{
							isme:false,
							userpic:"../../static/demo/userpic/15.jpg",
							type:"text",
							data:"哈哈哈",
							time:"1554970014",
							gettime:""
						},
						{
							isme:true,
							userpic:"../../static/demo/userpic/10.jpg",
							type:"img",
							data:"../../static/demo/3.jpg",
							time:"1554970011",
							gettime:""
							
							
						}
					]
			};
		},
		onReady() {
			this.getdata();
			this.initdata();
			 this.pageToBottom(true);
		},
		methods:{
			// 初始化参数
			initdata(){
				try {
					const res = uni.getSystemInfoSync();
					this.style.contentH=res.windowHeight - uni.upx2px(120);
				} catch (e) { }
			},
			getdata(){
				for (let i =0;i<this.list.length;i++) {
				let s = this.list[i].time;
				this.list[i].gettime = time.gettime.gettime(s)
				}
			
			},
			pageToBottom(isfirst = false){
				let q=uni.createSelectorQuery().in(this);
				let itemH = q.selectAll('.chat-item');
				this.$nextTick(()=>{
					itemH.fields({
						size:true
					},data => {
						if (data) {
							if (isfirst) {
								for (let i = 0; i < data.length; i++) {
									this.style.itemH += data[i].height;
								}
							}else{
								this.style.itemH += data[data.length-1].height;
							}
							this.scrollTop = (this.style.itemH > this.style.contentH) ? this.style.itemH : 0;
						}
					}).exec();
				})
			},
			submit(daa){
				let now=new Date().getTime();
			let obj= {
					isme:true,
				userpic:"../../static/demo/userpic/10.jpg",
				type:"text",
				data:daa,
				time:now,
				gettime:time.gettime.getChatTime(now,this.list[this.list.length-1].time)
				
					
					
				};
				this.list.push(obj);
				 this.pageToBottom();
				
			}
		},
		components:{
			userChat,
			userChatList
		}
	}
</script>

<style lang="scss">
	.user-chat-list{
		padding: 20upx 0;
		display: flex;
		image{
			width: 100upx;
			height: 100upx;
			border-radius: 100%;
			flex-shrink: 0;
		}
		.user-chat-list-body{
			position: relative;
			background-color: #F4F4F4;
			padding: 25upx;
			border-radius: 20upx;
			margin-left: 20upx;
			margin-right: 100upx;
			&:after{
				position: absolute;
				left: -30upx;
				right: 0;
				content: '';
				width: 0;
				height: 0;
				top: 30upx;
				border: 16upx solid #F4F4F4;
				border-color: transparent #F4F4F4 transparent transparent;
			}
		}
	}

.user-chat-me{
	justify-content: flex-end;
	.user-chat-list-body{
		margin-right: 20upx;
		margin-left: 100upx;
		&:after{
			position: absolute;
			right: -30upx;
			left: auto;
			content: '';
			width: 0;
			height: 0;
			top: 30upx;
			border: 16upx solid #F4F4F4;
			border-color: transparent transparent transparent #F4F4F4;
		}
	}
}

.user-chat-list-body{
	image{
		max-width: 150upx;
		max-height: 200upx;
		border-radius: 0upx;
	}
}
.user-chat-time{
	display: flex;
	justify-content: center;
	padding: 50upx 0;
	color: #a2a2a2;
	font-size: 24upx;
}
</style>
