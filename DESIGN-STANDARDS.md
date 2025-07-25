# Fast-GPT-Plus 设计规范

## 设计原则

1. **简洁清晰**：界面设计应简洁直观，避免过度装饰
2. **品牌一致**：保持整站视觉风格统一
3. **用户友好**：确保良好的可读性和可访问性
4. **响应式设计**：适配各种设备和屏幕尺寸

## 颜色规范

### 主色调
- **Primary**: `#6366f1` (Indigo-500) - 主要品牌色
- **Secondary**: `#8b5cf6` (Violet-500) - 辅助色
- **Success**: `#10b981` (Emerald-500) - 成功状态
- **Danger**: `#ef4444` (Red-500) - 危险/错误状态
- **Warning**: `#f59e0b` (Amber-500) - 警告状态

### 背景色
- **主背景**: `#f9fafb` (Gray-50)
- **卡片背景**: `#ffffff` (White)
- **深色背景**: `#111827` (Gray-900) - 仅用于代码块

### 文字颜色
- **主文字**: `#111827` (Gray-900)
- **次要文字**: `#4b5563` (Gray-600)
- **浅色文字**: `#9ca3af` (Gray-400)

## 排版规范

### 字体
- **主字体**: Inter, -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif
- **代码字体**: SF Mono, Monaco, Consolas, monospace

### 字号规模
- **标题1**: `text-4xl` (2.25rem) - 页面主标题
- **标题2**: `text-3xl` (1.875rem) - 章节标题
- **标题3**: `text-2xl` (1.5rem) - 子标题
- **标题4**: `text-xl` (1.25rem) - 小标题
- **正文**: `text-base` (1rem) - 普通文本
- **小字**: `text-sm` (0.875rem) - 辅助文本

### 行高
- **标题**: `leading-tight` (1.25)
- **正文**: `leading-relaxed` (1.625)

## 组件规范

### 按钮
```html
<!-- 主要按钮 -->
<button class="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
  按钮文字
</button>

<!-- 次要按钮 -->
<button class="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors">
  按钮文字
</button>
```

### 卡片
```html
<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
  <!-- 卡片内容 -->
</div>
```

### 渐变背景
- **Hero区域**: `bg-gradient-to-br from-primary-500 to-secondary-600`
- **CTA区域**: 使用 `gradient-mesh` 类

## 间距规范

### 内边距
- **小**: `p-4` (1rem)
- **中**: `p-6` (1.5rem)
- **大**: `p-8` (2rem)

### 外边距
- **段落间距**: `mb-6` (1.5rem)
- **章节间距**: `my-12` (3rem)
- **组件间距**: `space-y-8` (2rem)

## 动效规范

### 过渡效果
- **默认时长**: `duration-200` (200ms)
- **悬停效果**: `hover:shadow-lg hover:-translate-y-1`
- **过渡属性**: `transition-all` 或具体属性如 `transition-colors`

### 滚动动画
- 使用 `scroll-fade` 类实现淡入效果
- 避免过度动画，保持简洁自然

## 响应式断点

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

## 图标使用

- 优先使用 SVG 图标
- 保持图标大小一致：`w-5 h-5` (1.25rem) 或 `w-6 h-6` (1.5rem)
- 图标颜色应与文字颜色协调

## 特殊效果

### 玻璃态效果
```css
.glass-card {
  @apply bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg;
}
```

### 渐变文字
```css
.gradient-text {
  @apply bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent;
}
```

## 最佳实践

1. **避免使用**：
   - 深色/暗黑主题（除非代码块）
   - 过度的动画效果
   - 霓虹灯效果
   - 复杂的背景图案

2. **推荐使用**：
   - 清晰的对比度
   - 适度的阴影
   - 简洁的渐变
   - 统一的圆角（rounded-lg 或 rounded-xl）

3. **性能优化**：
   - 使用 Tailwind 的 JIT 模式
   - 避免内联样式
   - 合理使用动画和过渡效果

## 组件示例

所有组件应遵循以上设计规范，确保整站视觉一致性。如需新增组件，请参考现有组件风格并遵循本规范文档。