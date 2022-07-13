import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/pages/home/index.vue'
import city from '@/pages/city/index.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/city', name: 'city', component: city }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
