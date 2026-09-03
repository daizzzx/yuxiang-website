<script setup>
// 联系页：演示 v-model 双向绑定 + 表单提交事件（响应式核心概念）
import { reactive } from 'vue'
import HeroSection from '../components/HeroSection.vue'

const form = reactive({ name: '', email: '', message: '' })

function submitForm() {
  // 目前只做演示：真实项目里这里用 fetch 把数据发给后端接口
  alert(`感谢留言，${form.name}！我们会在 1 个工作日内回复您。`)
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<template>
  <div>
    <HeroSection title="联系我们" subtitle="商务合作、产品咨询或售后支持，欢迎留言" />

    <section class="contact container">
      <form class="contact-form" @submit.prevent="submitForm">
        <label class="form-label">
          姓名
          <input v-model.trim="form.name" type="text" required placeholder="您的称呼" />
        </label>
        <label class="form-label">
          邮箱
          <input v-model.trim="form.email" type="email" required placeholder="name@example.com" />
        </label>
        <label class="form-label">
          留言内容
          <textarea v-model="form.message" rows="5" required placeholder="想了解的产品或合作方向"></textarea>
        </label>
        <button type="submit" class="submit-btn">提交留言</button>
      </form>

      <aside class="contact-info">
        <h3>其他联系方式</h3>
        <p>商务合作：bd@yuxiang.tech</p>
        <p>售后支持：support@yuxiang.tech</p>
        <p>工作时间：周一至周五 9:00 - 18:00</p>
      </aside>
    </section>
  </div>
</template>

<style scoped>
.contact {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 48px;
  padding: 0 24px 80px;
}

.contact-form {
  background: var(--color-surface);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: var(--border-radius);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
}

.form-label input,
.form-label textarea {
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
}

.form-label input:focus,
.form-label textarea:focus {
  outline: 2px solid var(--color-primary);
  border-color: var(--color-primary);
}

.submit-btn {
  align-self: flex-start;
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 15px;
  cursor: pointer;
}

.submit-btn:hover {
  background: var(--color-primary-dark);
}

.contact-info {
  font-size: 14px;
  color: var(--color-text-muted);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-info h3 {
  font-size: 16px;
  color: var(--color-text);
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .contact {
    grid-template-columns: 1fr;
  }
}
</style>
