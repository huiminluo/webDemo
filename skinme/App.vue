<script>
	export default {
		onLaunch: function() {
			window.document.documentElement.setAttribute('data-theme', 'theme1');
			// document.getElementsByTagName('uni-page-wrapper').offsetParent.clientHeight=this.windowHeight+'px'
			console.log(document.getElementsByTagName('uni-page-wrapper'))
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */ 
</style>
<style lang="scss">
	// page{
	// 	@include bg_img(theme)
	// }
	
	// @include 指令可以将混入（mixin）引入到文档中。
	uni-page-wrapper{
		@include bg_img(theme)
	}
</style>
