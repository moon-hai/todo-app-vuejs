import axios from 'axios'
import * as types from '../mutation-types'

const state = {
  flash: false
}

const mutations = {
  [types.ADD_TODO_ITEM](state, payload) {
    state.flash = payload.length !== 0 ? !state.flash : state.flash
  },
  [types.EDIT_TODO_ITEM](state) {
    state.flash = true
  },
  [types.RESET_FLASH](state) {
    state.flash = false
  }
}

const actions = {
  addTodoItem({ commit }, data) {
    return axios.post('/item', data.params)
                .then(response => commit(types.ADD_TODO_ITEM, response.data))
                .catch(err => {
                  throw err
                })
  },
  editTodoItem({ commit }, data) {
    return axios.put(`/item/${data.id}`, data.params)
                .then(response => commit(types.EDIT_TODO_ITEM))
                .catch(err => {
                  throw err
                })
  },
  resetFlash({ commit }) {
    commit(types.RESET_FLASH)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
