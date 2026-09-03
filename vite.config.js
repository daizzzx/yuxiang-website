import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Vite 配置：告诉构建工具如何处理 .vue 文件、开发服务器跑在哪个端口
export default defineConfig({
  plugins: [vue()],
  // base：官网在线上的"起始路径"。
  // GitHub Pages 的免费网址形如 https://用户名.github.io/yuxiang-website/，
  // 仓库在用户名后面挂着，所以所有资源都要以 /yuxiang-website/ 开头去找。
  // 本地开发不受影响，只有构建产物会用到。注意：仓库名必须叫 yuxiang-website！
  base: '/yuxiang-website/',
  server: {
    port: 5173,
    host: true
  }
})
