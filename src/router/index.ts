import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import Login from '../views/login.vue'
import columnDetail from '../views/columnDetail.vue'
import createArticle from '../views/createArticle.vue'
import store from '../store/index'

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
      component: Login,
      meta: { redirectAlreadyLogin: true }
    },
    {
      path: '/column/:id',
      name: 'column',
      component: columnDetail
    },
    {
      path: '/create',
      name: 'create',
      component: createArticle,
      meta: { requiredLogin: true }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: 'login' })
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next('/')
  } else {
    next()
  }
})
export default router
