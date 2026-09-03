<script setup>
// 导航栏组件：演示 props（外部传入数据）和 v-for 列表渲染
defineProps({
  brand: { type: String, default: '柚香科技' }
})

const links = [
  { to: '/', label: '首页' },
  { to: '/about', label: '关于我们' },
  { to: '/contact', label: '联系我们' }
]
</script>

<template>
  <header class="navbar">
    <div class="container navbar-inner">
      <router-link to="/" class="brand">{{ brand }}</router-link>
      <nav class="nav-links">
        <!-- router-link 是路由导航专用标签，渲染成 <a> 但不刷新页面 -->
        <router-link v-for="link in links" :key="link.to" :to="link.to" class="nav-link">
          {{ link.label }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* scoped：样式只作用于本组件，不会污染其他组件 */
.navbar {
  background: var(--color-surface);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 10;
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.brand {
  font-size: 20px;
  font-weight: 500;
  color: var(--color-primary);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-link {
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 15px;
}

/* 当前页面对应的导航项高亮 */
.nav-link.router-link-active {
  color: var(--color-primary);
  font-weight: 500;
}
</style>
