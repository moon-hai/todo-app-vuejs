import Vue from 'vue'
import Vuex from 'vuex'

import todoItems from './modules/todo-items'
import todoItem from './modules/todo-item'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    todoItems,
    todoItem
  }
})
