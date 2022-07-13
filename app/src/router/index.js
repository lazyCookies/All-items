import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/pages/home/index.vue'
import city from '@/pages/city/index.vue'
// 1. 先去引入路由显示的组件
// 2. 定义路由的配置、每个路由都需要映射到一个组件。
// 3. 需要一个路由的视图容器
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
