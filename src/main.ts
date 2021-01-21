import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/home.vue'
import Login from './views/login.vue'
import columnDetail from './views/columnDetail.vue'
import App from './App.vue'
// routerHistory接受createWebHistory()这个函数的返回值
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/column/:id',
      name: 'column',
      component: columnDetail
    }
  ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
