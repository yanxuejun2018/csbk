import Vue from 'vue'
import App from './App'

import config from "./common/js/config.js"
import lib from "./common/js/lib.js"
Vue.prototype.config;
Vue.prototype.lib;
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	config,
	lib
})
app.$mount()
