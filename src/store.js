import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from "./store/state"
import mutations from "./store/mutation"
import actions from "./store/action"
export default new Vuex.Store({
  state,
  mutations,
  actions
})
