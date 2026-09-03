<script setup>
// Hero 区组件：页面首屏大标题，演示 props 定制文案
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' }
})
</script>

<template>
  <section class="hero">
    <div class="container">
      <h1 class="hero-title">{{ title }}</h1>
      <p v-if="subtitle" class="hero-subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(180deg, var(--color-accent) 0%, var(--color-bg) 100%);
  padding: 96px 0 72px;
  text-align: center;
}

.hero-title {
  font-size: 40px;
  font-weight: 500;
  color: var(--color-primary-dark);
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 17px;
  color: var(--color-text-muted);
  max-width: 560px;
  margin: 0 auto;
}
</style>
