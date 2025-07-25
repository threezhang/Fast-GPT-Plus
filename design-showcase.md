---
layout: default
title: 2025设计系统展示
permalink: /design-showcase/
---

# 🎨 2025设计系统展示

> 这是我们全新的设计系统展示页面，包含了所有最新的UI组件和视觉效果。

## 🌟 Aurora Hero 区域

{% include sections/hero-aurora.html 
  badge="2025最新设计"
  title="ChatGPT Plus 充值新体验"
  subtitle="采用最前沿的Aurora背景效果，带来震撼的视觉体验"
  cta_primary_text="体验霓虹按钮"
  cta_primary_url="#buttons"
  cta_secondary_text="查看组件库"
  cta_secondary_url="#components"
  features=site.data.hero_features
%}

## 🎯 新型按钮系统

### 霓虹按钮效果
<div class="flex flex-wrap gap-4 mb-8">
  {% include ui/button.html text="霓虹光效按钮" variant="neon" size="lg" effect="glow" %}
  {% include ui/button.html text="磁性吸附按钮" variant="magnetic" size="lg" %}
  {% include ui/button.html text="极光渐变按钮" variant="aurora" size="lg" effect="shimmer" %}
</div>

### 特效按钮
<div class="flex flex-wrap gap-4 mb-8">
  {% include ui/button.html text="涟漪效果" variant="primary" size="md" effect="ripple" class="ripple" %}
  {% include ui/button.html text="发光效果" variant="secondary" size="md" effect="glow" %}
  {% include ui/button.html text="闪烁效果" variant="outline" size="md" effect="shimmer" %}
</div>

## 📐 Bento Grid 布局

{% capture bento_items %}
[
  {
    "title": "极速充值",
    "content": "<p>通过iOS官方渠道，5分钟内完成充值，体验前所未有的速度。</p>",
    "size": "md",
    "variant": "glow",
    "icon": "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 10V3L4 14h7v7l9-11h-7z'/></svg>"
  },
  {
    "title": "安全保障",
    "content": "<p>官方认证渠道，100%安全可靠，保护您的账号安全。</p>",
    "size": "sm",
    "variant": "glass",
    "icon": "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'/></svg>"
  },
  {
    "title": "价格优势",
    "content": "<p>利用汇率差价，仅需¥158/月，比官方价格节省20%以上。</p>",
    "size": "lg",
    "variant": "aurora",
    "icon": "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/></svg>"
  }
]
{% endcapture %}

<div class="my-12">
  {% include ui/bento-grid.html items=bento_items %}
</div>

## 📝 现代化文档样式

### 标题层级展示

# H1 - 超大渐变标题
## H2 - 带下划线的副标题
### H3 - 清晰的章节标题
#### H4 - 小节标题

### 文本样式

这是一段普通文本，采用了更轻盈的字体weight和更好的行高。文本中可以包含**加粗文本**和*斜体文本*，以及[链接文本](#)。

> 这是一个现代化的引用块，采用了渐变背景和圆角设计，让引用内容更加突出。

### 列表样式

无序列表：
- 使用渐变圆点作为标记
- 更好的间距和排版
- 支持嵌套列表
  - 嵌套项目1
  - 嵌套项目2

有序列表：
1. 使用渐变圆形数字标记
2. 现代化的视觉效果
3. 清晰的层级关系

### 代码展示

行内代码：`const greeting = "Hello, 2025!"`

代码块：
```javascript
// 现代编辑器风格的代码块
function createAwesomeDesign() {
  const design = {
    style: 'modern',
    year: 2025,
    features: ['aurora', 'neon', 'glassmorphism']
  };
  
  return design;
}

// 带有语法高亮和阴影效果
console.log(createAwesomeDesign());
```

### 表格样式

| 功能特性 | 传统设计 | 2025设计 |
|---------|---------|----------|
| 背景效果 | 静态渐变 | Aurora动态背景 |
| 按钮样式 | 扁平设计 | 霓虹光效/磁性效果 |
| 动画效果 | 简单过渡 | 复杂微交互 |
| 色彩系统 | 基础色板 | 霓虹色+极光色 |

## 🎭 动画效果展示

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
  <div class="glass-modern p-6 text-center hover-lift">
    <h3 class="text-lg font-semibold mb-2">悬停上浮</h3>
    <p class="text-gray-600">鼠标悬停查看效果</p>
  </div>
  
  <div class="glass-modern p-6 text-center hover-grow">
    <h3 class="text-lg font-semibold mb-2">悬停放大</h3>
    <p class="text-gray-600">鼠标悬停查看效果</p>
  </div>
  
  <div class="glass-modern p-6 text-center pulse-glow">
    <h3 class="text-lg font-semibold mb-2">脉冲光晕</h3>
    <p class="text-gray-600">持续脉冲动画</p>
  </div>
</div>

## 🌈 色彩系统

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
  <div class="text-center">
    <div class="w-full h-24 bg-neon-cyan rounded-xl mb-2"></div>
    <p class="text-sm font-medium">霓虹青</p>
    <p class="text-xs text-gray-600">#00F5FF</p>
  </div>
  
  <div class="text-center">
    <div class="w-full h-24 bg-neon-pink rounded-xl mb-2"></div>
    <p class="text-sm font-medium">霓虹粉</p>
    <p class="text-xs text-gray-600">#FF006E</p>
  </div>
  
  <div class="text-center">
    <div class="w-full h-24 bg-aurora-start rounded-xl mb-2"></div>
    <p class="text-sm font-medium">极光紫</p>
    <p class="text-xs text-gray-600">#5E3AEE</p>
  </div>
  
  <div class="text-center">
    <div class="w-full h-24 bg-accent-solar rounded-xl mb-2"></div>
    <p class="text-sm font-medium">日光黄</p>
    <p class="text-xs text-gray-600">#FFBE0B</p>
  </div>
</div>

## ✨ 特效组件

### 玻璃拟态卡片
<div class="glass-modern p-8 my-8">
  <h3 class="text-xl font-semibold mb-4">Glassmorphism 2.0</h3>
  <p>这是一个现代玻璃拟态效果的卡片，具有模糊背景、半透明效果和细腻的边框。</p>
</div>

### 发光卡片
<div class="glow-card glass-modern p-8 my-8">
  <h3 class="text-xl font-semibold mb-4">悬停发光效果</h3>
  <p>将鼠标悬停在这个卡片上，可以看到渐变光晕效果。</p>
</div>

### 噪点纹理背景
<div class="noise-bg glass-modern p-8 my-8">
  <h3 class="text-xl font-semibold mb-4">微妙的纹理效果</h3>
  <p>添加了细微的噪点纹理，增加视觉层次感。</p>
</div>

---

<div class="text-center mt-16">
  <p class="text-2xl font-light text-gray-700 mb-6">准备好使用新设计系统了吗？</p>
  {% include ui/button.html text="开始使用" variant="neon" size="lg" href="/" effect="glow" %}
</div>