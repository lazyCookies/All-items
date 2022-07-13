// 入口的JS文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import rem from './assets/js/rem'
import '@/assets/css/reset.css'
import '@/assets/icon/iconfont.css'

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

import Axios from 'axios'
Vue.prototype.Axios = Axios
Vue.use(rem)
Vue.use(ViewUI)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
