// 文档页面增强脚本

document.addEventListener('DOMContentLoaded', function() {
    // 1. 为代码块添加复制功能
    const codeBlocks = document.querySelectorAll('.markdown-content pre');
    
    codeBlocks.forEach(block => {
        // 创建复制按钮
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-code-button';
        copyBtn.textContent = '复制';
        
        // 设置相对定位
        block.style.position = 'relative';
        
        // 添加按钮到代码块
        block.appendChild(copyBtn);
        
        // 复制功能
        copyBtn.addEventListener('click', async () => {
            const code = block.querySelector('code');
            const text = code.textContent || code.innerText;
            
            try {
                await navigator.clipboard.writeText(text);
                copyBtn.textContent = '已复制!';
                copyBtn.classList.add('bg-green-700');
                
                setTimeout(() => {
                    copyBtn.textContent = '复制';
                    copyBtn.classList.remove('bg-green-700');
                }, 2000);
            } catch (err) {
                console.error('复制失败:', err);
                copyBtn.textContent = '复制失败';
            }
        });
    });
    
    // 2. 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 100; // 导航栏高度补偿
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 3. 为标题添加锚点链接
    const headings = document.querySelectorAll('.markdown-content h2, .markdown-content h3, .markdown-content h4');
    
    headings.forEach(heading => {
        if (heading.id) {
            const anchor = document.createElement('a');
            anchor.className = 'heading-anchor';
            anchor.href = '#' + heading.id;
            anchor.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>';
            anchor.style.cssText = 'position: absolute; left: -1.5rem; top: 50%; transform: translateY(-50%); opacity: 0; transition: opacity 0.2s;';
            
            heading.style.position = 'relative';
            heading.appendChild(anchor);
            
            // 悬停显示锚点
            heading.addEventListener('mouseenter', () => {
                anchor.style.opacity = '0.5';
            });
            
            heading.addEventListener('mouseleave', () => {
                anchor.style.opacity = '0';
            });
        }
    });
    
    // 4. 代码块语言标识
    document.querySelectorAll('.markdown-content pre code').forEach(code => {
        const className = code.className;
        const match = className.match(/language-(\w+)/);
        if (match) {
            const lang = match[1];
            code.parentElement.setAttribute('data-lang', lang);
        }
    });
    
    // 5. 外部链接在新标签页打开
    document.querySelectorAll('.markdown-content a').forEach(link => {
        if (link.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
            
            // 添加外部链接图标
            const icon = document.createElement('svg');
            icon.className = 'inline-block w-4 h-4 ml-1';
            icon.innerHTML = '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>';
            link.appendChild(icon);
        }
    });
    
    // 6. 图片点击放大
    const images = document.querySelectorAll('.markdown-content img');
    
    images.forEach(img => {
        img.style.cursor = 'zoom-in';
        
        img.addEventListener('click', () => {
            // 创建遮罩层
            const overlay = document.createElement('div');
            overlay.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.9); z-index: 1000; display: flex; align-items: center; justify-content: center; cursor: zoom-out; padding: 2rem;';
            
            // 创建放大的图片
            const bigImg = document.createElement('img');
            bigImg.src = img.src;
            bigImg.style.cssText = 'max-width: 90%; max-height: 90%; object-fit: contain; box-shadow: 0 0 3rem rgba(0,0,0,0.5);';
            
            overlay.appendChild(bigImg);
            document.body.appendChild(overlay);
            
            // 点击关闭
            overlay.addEventListener('click', () => {
                overlay.remove();
            });
            
            // ESC键关闭
            const handleEsc = (e) => {
                if (e.key === 'Escape') {
                    overlay.remove();
                    document.removeEventListener('keydown', handleEsc);
                }
            };
            document.addEventListener('keydown', handleEsc);
        });
    });
});