# Fast-GPT-Plus Tailwind CSS + shadcn/ui + Motion 迁移指南

## 🎉 迁移完成！

项目已成功从原有的 CSS 系统迁移到现代化的技术栈：

- **Tailwind CSS**: 实用优先的 CSS 框架
- **shadcn/ui 风格组件**: 可复用的 UI 组件系统
- **Motion 动画**: 流畅的动画效果（使用简化版实现）
- **Alpine.js**: 轻量级交互框架

## 📁 新的项目结构

```
Fast-GPT-Plus/
├── .github/
│   └── workflows/
│       └── build-and-deploy.yml    # GitHub Actions 自动构建部署
├── _components/                     # 可复用组件
│   ├── ui/
│   │   ├── button.html             # 按钮组件
│   │   ├── card.html               # 卡片组件
│   │   └── dialog.html             # 对话框组件
│   └── layout/
│       ├── header.html             # 页头组件
│       └── footer.html             # 页脚组件
├── src/
│   └── styles/
│       └── input.css               # Tailwind CSS 入口文件
├── assets/
│   ├── css/
│   │   └── main.css                # 编译后的 CSS（自动生成）
│   └── js/
│       └── motion-simple.js        # 动画系统
├── package.json                     # npm 依赖配置
├── tailwind.config.js              # Tailwind 配置
├── postcss.config.js               # PostCSS 配置
└── build.sh                        # 本地构建脚本
```

## 🚀 快速开始

### 1. 安装依赖

```bash
# 安装 npm 依赖
npm install

# 安装 Ruby 依赖（如果需要）
bundle install
```

### 2. 开发模式

```bash
# 启动 Tailwind CSS 监听模式
npm run dev

# 在另一个终端启动 Jekyll 服务器
bundle exec jekyll serve --livereload
```

### 3. 构建生产版本

```bash
# 使用构建脚本
./build.sh

# 或手动构建
npm run build
```

## 📦 组件使用示例

### 按钮组件

```liquid
{% include ui/button.html 
  text="点击我" 
  variant="primary" 
  size="md" 
  href="/link"
  icon='<svg>...</svg>' %}
```

### 卡片组件

```liquid
{% include ui/card.html 
  title="卡片标题" 
  content="卡片内容"
  variant="glass"
  hover=true %}
```

### 对话框组件

```liquid
{% include ui/dialog.html 
  id="myDialog" 
  title="对话框标题" 
  content="对话框内容" %}
```

## 🎨 保留的特性

1. **玻璃拟态效果**: 通过 Tailwind 插件实现
2. **渐变背景**: 自定义 utilities
3. **动画效果**: 使用简化的 Motion 系统
4. **响应式设计**: Tailwind 的响应式工具类

## 🔧 自定义配置

### Tailwind 配置

编辑 `tailwind.config.js` 来自定义：
- 颜色主题
- 字体
- 动画
- 自定义插件

### 添加新组件

1. 在 `_components/ui/` 创建新组件
2. 使用 Liquid 模板语法
3. 支持参数传递
4. 使用 Tailwind 类

## 📝 注意事项

1. **构建输出**: `assets/css/main.css` 已添加到 `.gitignore`
2. **CDN 移除**: 不再使用 Tailwind CDN，改为构建时编译
3. **性能优化**: PurgeCSS 自动移除未使用的样式
4. **浏览器兼容**: 支持现代浏览器，IE 不支持

## 🚀 GitHub Pages 部署

推送代码后会自动触发 GitHub Actions：

1. 构建 Tailwind CSS
2. 构建 Jekyll 站点
3. 部署到 GitHub Pages

## 🛠️ 故障排除

### npm 依赖问题
```bash
rm -rf node_modules package-lock.json
npm install
```

### Jekyll 构建问题
```bash
bundle update
bundle exec jekyll clean
```

### Tailwind 不工作
确保在 HTML 中使用的类名在 `tailwind.config.js` 的 `content` 配置中被扫描到。

## 📚 参考资源

- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Alpine.js 文档](https://alpinejs.dev)
- [Jekyll 文档](https://jekyllrb.com/docs/)
- [GitHub Actions 文档](https://docs.github.com/actions)