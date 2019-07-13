<template>
	<view class="body">
		<view class="user-set-userinfo-list">
			<text>头像</text>
			<view @tap="changeimg">
				<image :src="userpic" mode="aspectFill" lazy-load></image>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list">
			<text>昵称</text>
			<view>
				<input type="text" v-model="username" />
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list">
			<text>性别</text>
			<view @tap="changeOne('sex')">
			<view>{{sex}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list">
			<text>生日</text>
			<picker mode="date" :value="birthday" :start="startDate" :end="endDate" @change="bindDateChange" >
			<view >
		<view>{{birthday}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
			</picker>
		</view>
		<view class="user-set-userinfo-list">
			<text>职业</text>
			<view @tap="changeOne('job')">
		<view>{{job}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list">
			<text>情感</text>
			<view @tap="changeOne('qg')">
		<view>{{qg}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list">
			<text>家乡</text>
			<view @tap="showMulLinkageThreePicker">
		<view>{{pickerText}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
			<button class="user-set-btn" 
		type="primary" @tap="submit">完成</button>
			<mpvue-city-picker themeColor="#007AFF" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	let sex=['不限','男','女'];
	let qg=['秘密','未婚','已婚'];
	let job=['秘密','IT','老师'];
	import mpvueCityPicker from "../../componets/mpvue-citypicker/mpvueCityPicker.vue"
	export default {
		data() {
			return {
				userpic:"../../static/demo/userpic/11.jpg",
				username:"哈哈哈",
				sex:"不限",
				qg:"未婚",
				job:"IT",
				birthday:"1997-08-07",
				cityPickerValueDefault: [0, 0, 1],
				pickerText: '湖北省-荆州市-监利县',
			};
		},
	computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		components:{
			mpvueCityPicker
		},
		methods:{
			// 三级联动
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				this.pickerText = e.label;
			},
			
			// 修改生日
			bindDateChange(e) {
				this.birthday = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
			
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			// 修改头像
			changeimg(){
				uni.chooseImage({
					count:1,
					sizeType:['compressed'],
					success: (res) => {
						this.userpic=res.tempFilePaths;
					}
				})
			},
			// 单列选择
			changeOne(val){
				let arr=[];
				switch (val){
					case 'sex':
					arr=sex;
						break;
					case 'qg':
					arr=qg;
						break;
					case 'job':
					arr=job;
						break;
				}
				uni.showActionSheet({
					itemList: arr,
					success: res => {
						switch (val){
							case 'sex':
							this.sex=arr[res.tapIndex];
								break;
							case 'qg':
							this.qg=arr[res.tapIndex];
								break;
							case 'job':
							this.job=arr[res.tapIndex];
								break;
						}
					},
				});
			}
		}
	}
</script>

<style lang="scss">
@import "../../common/css/form.css";
.user-set-userinfo-list{
	padding: 20upx;
	display: flex;
	align-items: center;
	justify-content: space-between;
		border-bottom: 1upx solid #F4F4F4;
	view{
		display: flex;
		
		&:last-child{
			image{
					width: 80upx;
	height: 80upx;
	border-radius: 100%;
			}
			&>input{
				text-align: right;
			}
			view{
				margin-left: 20upx;
			color: #9B9B9B;
			}
		}
		
		
	}
	&>text{
		&:first-of-type{
			font-size: 32upx;
			font-weight: bold;
			color: #9B9B9B;
		}
	}
}
</style>
