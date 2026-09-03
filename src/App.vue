<script setup>
// App.vue 是根组件：负责整体布局（导航栏 + 页面内容 + 页脚）
// router-view 是路由出口，URL 变化时这里渲染对应的页面
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="app-shell">
    <NavBar />
    <main class="page-main">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>
