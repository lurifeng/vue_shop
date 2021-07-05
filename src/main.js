import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入字体图表
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'

import Treetable from 'vue-table-with-tree-grid'

import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
//axios请求拦截
axios.interceptors.request.use(config => {
  // 为请求头对象，添加Token验证的Authorization字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.component('tree-table', Treetable)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
