// 入口的JS文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import rem from './assets/js/rem'
import '@/assets/css/reset.css' /* @表示src的文件夹 */
import '@/assets/icon/iconfont.css' /* @表示src的文件夹 */

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

import Axios from 'axios'
Vue.prototype.Axios = Axios // 把axios的方法挂载在Vue的原型对象上
Vue.use(rem)
Vue.use(ViewUI)
Vue.config.productionTip = false
/* elementUI Ant iView Vant */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
