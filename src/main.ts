import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
// routerHistory接受createWebHistory()这个函数的返回值
const app = createApp(App)
app.use(router)
app.mount('#app')
