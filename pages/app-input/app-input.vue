<template>
	<view>
		<uni-nav-bar left-icon="back"  @click-left="back" :statusBar="true" rightText='发布' @click-right="submit" color="#666">
			<view class="nuv-title" @tap="changelook">{{yinsi}} <text class="icon iconfont icon-xialazhankai"></text></view>
		</uni-nav-bar>
	<view class="uni-textarea">
			<textarea value="" v-model="text" placeholder="说一句话吧~" />
	</view>
	
	<!-- 上传多图 -->
	<uploudImages @uploud="uploud"></uploudImages>
	<!-- 弹出公告 -->
	<uniPopup :show="showpopup" position="middle"  mode="fixed" @hidePopup="hidePopup">
		<view class="gonggao">
			<view>
				<image src="../../static/common/addinput.png" mode="widthFix"></image>
			</view>
			<text>1.涉及黄色，政治，广告及骚扰信息</text>
			<text>2.涉及黄色，政治，广告及骚扰信息</text>
			<text>3.涉及黄色，政治，广告及骚扰信息</text>
			<text>4.涉及黄色，政治，广告及骚扰信息</text>
				<button type="default" @tap="hidePopup">朕知道了</button>
		</view>
	</uniPopup>
	</view>
</template>

<script>
	
		import uniNavBar from '../../componets/uni-nav-bar/uni-nav-bar.vue'
			import uploudImages from "../../componets/common/uploader-images.vue";
			import uniPopup from "../../componets/uni-popup/uni-popup.vue"
const changelook = ["所有人可见","仅自己可见"]	
	export default {
		data() {
			return {
				isget:false,
				yinsi:"所有人可见",
				text:"",
				imgageList:[],
				showpopup:true
			
			};
		},
		onBackPress() {
			// 如果有值
			if(!this.text && this.imgageList.length<1){ return; }
			if(!this.isget){
				this.baocun();
				return true;
			}
			}
			
				
		,
		components:{
			uniNavBar,
			uniPopup,
			uploudImages
		},
		methods:{
			// 保存为草稿
			baocun(){
				uni.showModal({
					content: '是否要保存为草稿？',
					cancelText: '不保存',
					confirmText: '保存',
					success: res => {
						if(res.confirm){
							console.log("保存")
						}else{
							console.log("不保存")
						}
						this.isget=true;
						uni.navigateBack({
							delta: 1
						});
					},
				});
			},
			hidePopup(){
				this.showpopup = false;
			},
			uploud(arr){
				this.imgageList=arr;
				console.log(this.imgageList);
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			submit(){
				console.log(1);
			},
			
				changelook(){
				uni.showActionSheet({
					itemList:changelook,
					success:(res)=> {
						this.yinsi  = changelook[res.tapIndex]
					}
				})
			}
			
		}
	}
</script>

<style lang="scss">
.nuv-title{
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center ;
	color: #666;
}
.uni-textarea{
	border: 1upx solid #eee;
}

	.gonggao{
		width: 500upx;
		view{
			display: flex;
			justify-content: center;
			align-items: center;
			image{
				width: 75%;
					margin-bottom: 20upx;
			}
		}
		text{
			display: block;
			text-align: center;
		}
		 button{
	margin-top: 20upx;
	background: #FFE934;
	color: #171606;
}
	}
</style>
