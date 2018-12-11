import * as types from '../mutation-types.js'
import axios from 'axios'

const state = {
  items: [],
  todoList: [],
  flash: false
}

const getters = {
  filterTodoItems(state) {
    return function(query) {
      const regex = new RegExp(`${query}`, 'gi')
      return query ? state.todoList.filter(item => item.name.match(regex)) : state.todoList
    }
  }
}

const mutations = {
  [types.FETCH_ALL_ITEMS](state, payload) {
    state.items = payload
    state.todoList = payload
  },
  [types.TOGGLE_STATUS_ITEM](state, payload) {
    state.flash = true
    const index = state.items.findIndex(item => item.id === payload.id)
    state.items[index].status = payload.status

  },
  [types.REMOVE_ITEM](state, todoId) {
    state.flash = true
    state.items = state.items.filter(item => item.id !== todoId)
    state.todoList = state.items
  },
  [types.GET_ALL_ITEMS](state) {
    state.todoList = state.items
  },
  [types.GET_PENDING_ITEMS](state) {
    state.todoList = state.items.filter(item => item.status === false)
  },
  [types.GET_COMPLETED_ITEMS](state) {
    state.todoList = state.items.filter(item => item.status === true)
  },
  [types.RESET_FLASH](state) {
    state.flash = false
  }
}

const actions = {
  fetchAllItems({ commit }) {
    return axios.get('/item')
                .then(response => commit(types.FETCH_ALL_ITEMS, response.data))
                .catch(err => {
                  throw err
                })
  },
  getAllItems({ commit }) {
    commit(types.GET_ALL_ITEMS)
  },
  getPendingItems({ commit }) {
    commit(types.GET_PENDING_ITEMS)
  },
  getCompletedItems({ commit }) {
    commit(types.GET_COMPLETED_ITEMS)
  },
  toggleStatusItem({ commit }, data) {
    return axios.put(`/item/${data.id}`, { status: data.status })
                .then(response => commit(types.TOGGLE_STATUS_ITEM, response.data))
                .catch(err => {
                  throw err
                })
  },
  removeToDoItem({ commit }, todoId) {
    return axios.delete(`/item/${todoId}`)
                .then(response => commit(types.REMOVE_ITEM, todoId))
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
  getters,
  mutations,
  actions
}
