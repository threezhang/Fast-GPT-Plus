#!/bin/bash

# 测试构建脚本 - 验证迁移是否成功

echo "🔍 检查项目迁移状态..."

# 检查必要文件
echo "📁 检查必要文件..."
files=(
    "package.json"
    "tailwind.config.js"
    "postcss.config.js"
    ".github/workflows/build-and-deploy.yml"
    "_components/ui/button.html"
    "_components/ui/card.html"
    "_components/layout/header.html"
    "_components/layout/footer.html"
    "src/styles/input.css"
    "assets/js/motion-simple.js"
)

missing_files=0
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✅ $file"
    else
        echo "  ❌ $file (缺失)"
        missing_files=$((missing_files + 1))
    fi
done

if [ $missing_files -gt 0 ]; then
    echo "❌ 发现 $missing_files 个缺失文件"
    exit 1
fi

echo ""
echo "✅ 所有必要文件都已创建"
echo ""
echo "📝 项目迁移检查完成！"
echo ""
echo "下一步操作："
echo "1. 运行 npm install 安装依赖"
echo "2. 运行 ./build.sh 进行构建测试"
echo "3. 推送到 GitHub 自动部署"