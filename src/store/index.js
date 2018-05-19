import Vue from 'vue'
import Vuex from 'vuex'

// modules
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    auth
  }
})
