<script setup>
// ============================================================
// 练习目标：给产品卡片加"点击查看详情"交互（模态框弹窗）
// 用到 6 个知识点，正好覆盖你基础清单里的环节：
//   1. ref()      → 响应式状态（变量）
//   2. @click     → 事件绑定（DOM 与事件）
//   3. v-if       → 条件渲染（有详情才显示弹窗）
//   4. v-for      → 数组渲染（产品列表 & 规格列表）
//   5. onMounted  → 生命周期（组件挂载完成后做什么）
//   6. {{ }}      → 模板插值（把 JS 数据显示到页面）
// 每行都有注释，先照着敲一遍，再看"为什么"。
// ============================================================

// ① import 从 vue 里"取工具"：ref 是响应式状态的开关，
//    onMounted / onUnmounted 是生命周期钩子（见第 ④ 步）
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from '../components/HeroSection.vue'

// 产品数据：每个产品新增了 specs（规格参数）数组，
// 这是为了演示 v-for 渲染"嵌套数组"，学完列表渲染就明白了
const products = [
  {
    name: '家用气泡水机',

    tag: '家用系列',
    desc: '一键气泡，新鲜口感，符合 QB/T 8136-2025 行业标准',
    specs: [
      { label: '气瓶容量', value: '60g CO2 气弹' },
      { label: '适用水温', value: '1-15°C' },
      { label: '出水速度', value: '约 3 秒/杯' },
      { label: '颜色', value: '象牙白' }
    ]
  },
  {
    name: '商用气泡水工作站',
    tag: '商用系列',
    desc: '大容量 CO2 供气系统，稳定输出，适配餐饮连锁场景',
    specs: [
      { label: '供气方式', value: '外接 CO2 气瓶' },
      { label: '出水量', value: '≥ 20L/h' },
      { label: '适用场景', value: '餐饮连锁 / 办公茶水间' }
    ]
  },
  {
    name: '智能温控模块',
    tag: '核心部件',
    desc: '1-15°C 精准水温控制，让每一杯气泡水都恰到好处',
    specs: [
      { label: '温控精度', value: '±0.5°C' },
      { label: '通讯方式', value: 'RS485 / 蓝牙' },
      { label: '适配机型', value: '全系气泡水机' }
    ]
  }
]

// ② 核心状态：记录"当前打开详情的是哪个产品"
//    ref(null) 表示初始值是 null，即"没有弹窗打开"
//    点击"查看详情"时把产品对象塞进来 → 弹窗出现
//    点击关闭时重新赋为 null → 弹窗消失
//    注意：模板里直接用 activeProduct，但 JS 里必须写 activeProduct.value，
//    因为 ref 像一个"带抽屉的盒子"，.value 才是里面的真数据
const activeProduct = ref(null)

// ③ 关闭函数：把 activeProduct 清空
function closeDetail() {
  activeProduct.value = null
}

// ④ 加分项：按键盘 Esc 键也能关弹窗（真实产品里很常见的体验细节）
//    步骤：组件挂载完成 → 给 window 注册键盘监听 → 弹窗开着时按 Esc 就关闭
//    onUnmounted 负责"组件销毁时移除监听"，防止页面切换后监听残留（内存泄漏）
function onKeydown(e) {
  if (e.key === 'Escape') closeDetail()
}
onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div>
    <HeroSection
      title="让每一杯水都有仪式感"
      subtitle="柚香科技专注于智能气泡水机的研发与制造，为家庭与商业客户提供高品质饮品解决方案"
    />

    <section class="products container">
      <h2 class="section-title">产品与方案</h2>
      <div class="product-grid">
        <!-- v-for="p in products"：遍历数组，每项渲染一张卡片 -->
        <!-- :key="p.name"：给每张卡片一个唯一身份证，列表重排时 Vue 靠它高效更新 -->
        <article v-for="p in products" :key="p.name" class="product-card">
          <span class="product-tag">{{ p.tag }}</span>
          <h3 class="product-name">{{ p.name }}</h3>
          <p class="product-desc">{{ p.desc }}</p>
          <!-- @click="activeProduct = p"：点击按钮，把当前产品对象存入状态 -->
          <!-- 这是"事件绑定"的最小用法：用户操作 → 改数据 → 页面自动更新 -->
          <button class="detail-btn" @click="activeProduct = p">了解更多</button>
        </article>
      </div>
    </section>

    <!-- ======== 详情弹窗（模态框） ======== -->
    <!-- v-if="activeProduct"：只有状态不为 null 才渲染整块弹窗 -->
    <!--   这就是"条件渲染"：数据决定元素存不存在 -->
    <!-- @click.self="closeDetail"：只点在遮罩层本身才关闭，点弹窗内部不会误关 -->
    <!--   .self 是事件修饰符，避免"点里面也触发外面" -->
    <div v-show="activeProduct" class="modal-mask" @click.self="closeDetail">
      <div class="modal-card">
        <button class="modal-close" @click="closeDetail">×</button>

        <span class="product-tag">{{ activeProduct?.tag }}</span>
        <h3 class="modal-title">{{ activeProduct?.name }}</h3>
        <p class="modal-desc">{{ activeProduct?.desc }}</p>

        <table class="modal-specs">
          <tr v-for="s in activeProduct?.specs" :key="s.label">
            <td class="spec-label">{{ s.label }}</td>
            <td>{{ s.value }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.products {
  padding: 64px 24px 80px;
}

.section-title {
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 32px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.product-card {
  background: var(--color-surface);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: var(--border-radius);
  padding: 28px;
  display: flex;            /* 卡片内部改成纵向布局 */
  flex-direction: column;   /* 名字/描述在上，按钮沉底对齐 */
  transition: transform 0.2s ease, box-shadow 0.2s ease; /* 悬停动效过渡 */
}

.product-card:hover {
  transform: translateY(-4px);              /* 鼠标悬停：卡片微微上浮 */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08); /* 加一层柔和阴影，更有"可点击感" */
}

.product-tag {
  display: inline-block;
  font-size: 13px;
  color: var(--color-primary);
  background: var(--color-accent);
  border-radius: 999px;
  padding: 4px 12px;
  margin-bottom: 14px;
  align-self: flex-start; /* 标签不要被拉伸，宽度自适应内容 */
}

.product-name {
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 8px;
}

.product-desc {
  font-size: 14px;
  color: var(--color-text-muted);
  margin-bottom: 20px;
  flex: 1; /* 占满剩余空间：让三张卡片的按钮对齐到同一水平线 */
}

/* 详情按钮 */
.detail-btn {
  align-self: flex-start;
  padding: 8px 20px;
  font-size: 14px;
  color: #fff;
  background: var(--color-primary);
  border: none;
  border-radius: 999px;
  cursor: pointer; /* 鼠标变成小手，暗示可点击 */
  transition: background 0.2s ease;
}

.detail-btn:hover {
  background: var(--color-primary-dark);
}

/* ======== 弹窗样式 ======== */
/* 遮罩层：fixed 铺满全屏，半透明深色，盖在页面最上层（z-index） */
.modal-mask {
  position: fixed;
  inset: 0;               /* 上下左右都是 0 = 铺满整个视口 */
  background: rgba(0, 0, 0, 0.5);
  display: flex;          /* flex 居中大法：让弹窗卡片水平垂直居中 */
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 24px;
}

/* 弹窗卡片本体 */
.modal-card {
  position: relative;
  width: 100%;
  max-width: 420px;
  background: var(--color-surface);
  border-radius: var(--border-radius);
  padding: 32px;
}

/* 右上角关闭按钮 */
.modal-close {
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 24px;
  line-height: 1;
  color: var(--color-text-muted);
  background: none;
  border: none;
  cursor: pointer;
}

.modal-title {
  font-size: 22px;
  font-weight: 600;
  margin: 8px 0 8px;
}

.modal-desc {
  font-size: 14px;
  color: var(--color-text-muted);
  margin-bottom: 20px;
}

/* 规格表：占满宽度，每行上下留白 */
.modal-specs {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.modal-specs tr {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.modal-specs td {
  padding: 10px 0;
}

.spec-label {
  color: var(--color-text-muted);
  width: 40%; /* 固定左列宽度，右列对齐更整齐 */
}
</style>
