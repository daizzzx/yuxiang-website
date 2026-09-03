import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 路由表：URL 路径 -> 页面组件 的映射
// 懒加载写法 (() => import(...))：页面按需加载，首屏更快
const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue') }
]

export default createRouter({
  // hash 模式：网址里带 #（如 xxx.com/#/about）。
  // 为什么不用 history 模式？GitHub Pages 是纯静态托管，
  // history 模式下刷新 /about 这种路径会 404（服务器上没这个文件）。
  // hash 模式 # 后面的部分不发往服务器，刷新永远安全。
  // 以后迁到公司服务器 + Nginx 配好规则后，可以换回 history 模式（网址更干净）。
  history: createWebHashHistory(),
  routes
})
