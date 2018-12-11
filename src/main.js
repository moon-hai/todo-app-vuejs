import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://5c0b385e26902800135f6d1b.mockapi.io/api/v1'
axios.defaults.headers.common['Accept'] = 'application/json'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
