<template>
	<view class="other-login">
		<block v-for="(item,index) in providerList" :key="index">
			<view  @tap="tologin(item)">
				<text class="icon iconfont" :class="['icon-'+item.icon]"></text>
			</view>
			
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				providerList: []
			}
		},
		onReady() {
			this.getLoginAuth();
		},
		methods:{
			// 获取当前登录渠道
			getLoginAuth(){
				uni.getProvider({
					service: 'oauth',
					success: (result) => {
						this.providerList = result.provider.map((value) => {
							let providerName = '';
							let icon='';
							switch (value) {
								case 'weixin':
									providerName = '微信登录';
									icon='weixin';
									break;
								case 'qq':
									providerName = 'QQ登录';
									icon='QQ';
									break;
								case 'sinaweibo':
									providerName = '新浪微博登录';
									icon='xinlangweibo';
									break;
								case 'alipay':
									providerName = '支付宝登录';
									icon='';
									break;
							}
							return {
								name: providerName,
								icon:icon,
								id: value
							}
						});
						
					},
					fail: (error) => {
						console.log('获取登录通道失败', error);
					}
				});
			},
			// 登录
			tologin(provider) {
				console.log(provider.id)
				uni.login({
					provider: provider.id,
					success: (res) => {
						console.log(JSON.stringify(res))
						console.log('login success:', res);
						
						uni.getUserInfo({
						  provider:provider.id,
						  success: (infoRes)=> {
							console.log(JSON.stringify(infoRes.userInfo))
						  }
						});
						
						// 更新保存在 store 中的登录状态
						console.log('登录成功，保存到本地存储，修改当前用户登录状态')
					},
					fail: (err) => {
						console.log('login fail:', err);
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.other-login{
		padding: 20upx 80upx;
		display: flex;
		
		
		align-items: center;
		&>view{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			&>text{
				display: inline-block;
				width: 100upx;
				height: 100upx;
				border-radius: 100%;
				font-size: 55upx;
				color: #fff;
				text-align: center;
				line-height: 100upx;
					background-color: #2bd19b;
				
			}
			&:nth-child(2){
			
				&>text{
						background-color: #fc7729;
				}
			}
			&:nth-child(3){
			
				&>text{
						background-color: #2caefc;
				}
			}
		}
	}
</style>
