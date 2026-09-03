import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'

// 应用启动三步曲：创建应用 -> 挂载路由 -> 挂载到 index.html 的 #app 节点
createApp(App).use(router).mount('#app')
