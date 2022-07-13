import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    selectCity (ctx, name) {
      console.log(ctx, name)
      ctx.commit('changeCity', name)
    }
  },
  modules: {
  }
})
