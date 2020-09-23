import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.windowHeight=document.body.clientHeight
const app = new Vue({
    ...App
})
app.$mount()
