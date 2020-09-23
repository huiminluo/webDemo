<template>
	<view class="content">
		<image class="logo"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="">
			
		</view>
		<view>
			<button @tap="doSkinme('theme1')">皮肤1</button>
			<button @tap="doSkinme('theme2')">皮肤2</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
			}
		},
		onLoad() {

		},
		methods: {
			doSkinme(theme){
				window.document.documentElement.setAttribute('data-theme', theme);
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
	}
</style>
<style lang="scss">
	.logo {
		@include login_content(theme)
	}
	.title {
		@include bg_color(theme)
		@include ft_color(theme)
	}
</style>
