import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../pages/Dashboard'
import TodoForm from '../pages/TodoForm'
import Error404 from '../pages/Error404'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    { path: '/', name: 'dashboard', component: Dashboard },
    { path: '/add', name: 'add-todo-form', component: TodoForm },
    { path: '/edit/:id', name: 'edit-todo-form', component: TodoForm },
    { path: '/404', name: 'error-404', component: Error404 },
    { path: '*', redirect: '/404' }
  ]
})

export default router
