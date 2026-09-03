<script setup>
// 关于页：静态内容页，练习长文案排版
import HeroSection from '../components/HeroSection.vue'

const milestones = [
  { year: '创立', text: '柚香科技成立，聚焦智能饮品设备领域' },
  { year: '研发', text: '自研 CO2 恒压供气与泄压安全技术' },
  { year: '合规', text: '产品通过 3C 认证，达到 QB/T 8136-2025 行业标准' },
  { year: '今天', text: '服务家庭用户与商用客户，持续迭代产品体验' }
]
</script>

<template>
  <div>
    <HeroSection title="关于我们" subtitle="以工程严谨性做消费品，以用户体验做每个细节" />

    <section class="about container">
      <div class="about-intro">
        <p>
          柚香科技有限公司是一家专注于气泡水机及商用制冷设备的科技企业。
          我们相信好的产品来自对质量的偏执：从钣金件、注塑件到气动元件与线束，
          每一个零部件都经过完整的全链路验证。
        </p>
      </div>

      <h2 class="section-title">发展历程</h2>
      <ul class="timeline">
        <li v-for="m in milestones" :key="m.year" class="timeline-item">
          <span class="timeline-year">{{ m.year }}</span>
          <span class="timeline-text">{{ m.text }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.about {
  padding: 0 24px 80px;
}

.about-intro {
  max-width: 720px;
  font-size: 16px;
  color: var(--color-text);
  margin-bottom: 48px;
}

.section-title {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 24px;
}

.timeline {
  list-style: none;
}

.timeline-item {
  display: flex;
  gap: 24px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.timeline-year {
  min-width: 56px;
  font-weight: 500;
  color: var(--color-primary);
}

.timeline-text {
  color: var(--color-text-muted);
}
</style>
