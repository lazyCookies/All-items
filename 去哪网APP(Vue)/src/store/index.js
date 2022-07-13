import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 共有的仓库，存放变量， 可以在任何的组件中使用
    city: localStorage.city || '郑州'
  },
  getters: {
  },
  mutations: {
    changeCity (state, name) {
      state.city = name
    }
  },
  actions: {
    // actions 属性内，接收的都是组件中通过this.$store.dispatch()方法发送的函数， 第一个参数表示当前的上下文环境，第二个参数表示组件传递过来的参数
    // 在actions中，可以进行ajax请求
    selectCity (ctx, name) {
      console.log(ctx, name)
      ctx.commit('changeCity', name) // commit()方法提交到mutations中
    }
  },
  modules: {
  }
})
