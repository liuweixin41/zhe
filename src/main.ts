import { createApp } from 'vue'
import axios from 'axios'
import router from './router/index'
import store from './store/index'

import App from './App.vue'

axios.defaults.baseURL = 'http://localhost:7001/api/'
// routerHistory接受createWebHistory()这个函数的返回值
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
