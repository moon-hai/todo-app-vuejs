import * as types from '../mutation-types'

const state = {
  isDisplay: false
}

const mutations = {
  [types.SET_MESSAGE](state) {
    state.isDisplay = true
  },
  [types.RESET_MESSAGE](state) {
    state.isDisplay = false
  }
}

const actions = {
  setMsg({ commit }) {
    commit(types.SET_MESSAGE)
    setTimeout(() => {
      commit(types.RESET_MESSAGE)
    }, 2000);
  },
  resetMsg({ commit }) {
    commit(types.RESET_MESSAGE)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
