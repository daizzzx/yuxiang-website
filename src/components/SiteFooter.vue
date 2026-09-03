<script setup>
// 页脚组件：结构简单，只负责展示静态版权信息
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span>© {{ year }} 柚香科技有限公司</span>
      <span class="footer-slogan">Yuxiang Tech · 智能饮品解决方案</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-primary-dark);
  color: rgba(255, 255, 255, 0.85);
  padding: 24px 0;
  font-size: 14px;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
