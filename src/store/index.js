import Vue from 'vue'
import Vuex from 'vuex'

import todoItems from './modules/todo-items'
import message from './modules/message'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    todoItems,
    message
  }
})
