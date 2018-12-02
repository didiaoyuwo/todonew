import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from '@/vuex/actions'
import * as getters from '@/vuex/getters'

Vue.use(Vuex)

const state = {
  todoList: []
}

const mutations = {
  EDITTODE (state, data) {
    this.state.todoList = data
  }
}

export default new Vuex.Store({
  getters,
  mutations,
  actions,
  state
})
