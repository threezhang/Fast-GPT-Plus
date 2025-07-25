---
layout: default
permalink: /
---

<!-- Hero Section -->
<section class="hero-bg relative overflow-hidden py-20 text-white">
    <div class="absolute inset-0 opacity-20">
        <img src="{{ site.baseurl }}/assets/icons/hero-illustration.svg" class="w-full h-full object-cover" alt="Background pattern">
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
             x-data 
             x-motion="{ animate: { opacity: [0, 1], scale: [0.8, 1] }, duration: 0.6 }">
            <svg class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-sm font-medium">野卡最佳替代方案</span>
        </div>
        
        <h1 class="text-4xl md:text-6xl font-light mb-6 tracking-tight"
            x-data 
            x-motion="{ animate: { opacity: [0, 1], y: [30, 0] }, duration: 0.8, delay: 0.1 }">
            ChatGPT Plus<br>
            <span class="font-semibold">快速充值指南</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 opacity-90 font-light max-w-3xl mx-auto"
           x-data 
           x-motion="{ animate: { opacity: [0, 1], y: [30, 0] }, duration: 0.8, delay: 0.2 }">
            通过iOS官方渠道，5分钟完成充值<br>
            安全、稳定、便捷的充值解决方案
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center"
             x-data 
             x-motion="{ animate: { opacity: [0, 1], y: [30, 0] }, duration: 0.8, delay: 0.3 }">
            {% include ui/button.html 
              text="立即充值 ¥158/月" 
              variant="primary" 
              size="lg" 
              href="https://go.fastgptplus.com"
              class="glass-button hover-lift"
              icon='<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round"/></svg>' %}
            
            {% include ui/button.html 
              text="查看教程" 
              variant="outline" 
              size="lg" 
              href="{{ site.baseurl }}/quick-start/"
              class="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              icon='<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke-linecap="round" stroke-linejoin="round"/></svg>' %}
        </div>
        
        <!-- Trust badges -->
        <div class="mt-12 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div class="flex items-center space-x-2" x-data x-motion="{ animate: { opacity: [0, 1], x: [-20, 0] }, duration: 0.6, delay: 0.4 }">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>100,000+ 用户信赖</span>
            </div>
            <div class="flex items-center space-x-2" x-data x-motion="{ animate: { opacity: [0, 1], x: [-20, 0] }, duration: 0.6, delay: 0.5 }">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>5分钟快速到账</span>
            </div>
            <div class="flex items-center space-x-2" x-data x-motion="{ animate: { opacity: [0, 1], x: [-20, 0] }, duration: 0.6, delay: 0.6 }">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>安全官方渠道</span>
            </div>
        </div>
    </div>
</section>

<!-- Main Content -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Sidebar -->
        <div class="lg:col-span-1">
            <div class="sticky top-24">
                {% capture checklist_content %}
                <div class="space-y-4">
                    <div class="flex items-start">
                        <div class="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                            <p class="font-medium text-gray-800">ChatGPT账号</p>
                            <p class="text-sm text-gray-600 mt-1">需要邮箱地址</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                            <p class="font-medium text-gray-800">支付方式</p>
                            <p class="text-sm text-gray-600 mt-1">支付宝或微信</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                            <p class="font-medium text-gray-800">时间准备</p>
                            <p class="text-sm text-gray-600 mt-1">仅需5分钟</p>
                        </div>
                    </div>
                </div>
                
                <div class="mt-8 pt-8 border-t border-gray-100">
                    <h3 class="text-lg font-medium mb-6 flex items-center">
                        <svg class="w-5 h-5 mr-3 text-danger" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="15" y1="9" x2="9" y2="15"/>
                            <line x1="9" y1="9" x2="15" y2="15"/>
                        </svg>
                        无需准备
                    </h3>
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <div class="w-2 h-2 bg-danger rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <div>
                                <p class="font-medium text-gray-800">国际信用卡</p>
                                <p class="text-sm text-gray-600 mt-1">无需VISA/MasterCard</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="w-2 h-2 bg-danger rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <div>
                                <p class="font-medium text-gray-800">账号密码</p>
                                <p class="text-sm text-gray-600 mt-1">仅需提供邮箱</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="w-2 h-2 bg-danger rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <div>
                                <p class="font-medium text-gray-800">虚拟卡</p>
                                <p class="text-sm text-gray-600 mt-1">使用iOS官方渠道</p>
                            </div>
                        </div>
                    </div>
                </div>
                {% endcapture %}
                
                {% include ui/card.html 
                  title="开始之前的准备" 
                  icon='<svg class="w-5 h-5 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>'
                  content=checklist_content
                  variant="glass"
                  hover=true
                  class="scroll-fade" %}
            </div>
        </div>

        <!-- Main Content Area -->
        <div class="lg:col-span-2 space-y-8">
            <!-- Step by Step Guide -->
            {% capture steps_content %}
            <h2 class="text-2xl font-semibold mb-8 flex items-center">
                <img src="{{ site.baseurl }}/assets/icons/process-flow.svg" class="h-8 mr-4" alt="Process">
                三步完成ChatGPT Plus充值
            </h2>
            
            <!-- Step 1 -->
            <div class="mb-10">
                <div class="flex items-start">
                    <div class="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                        1
                    </div>
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold mb-3">访问充值页面</h3>
                        <p class="text-gray-700 mb-4">
                            打开 <a href="https://go.fastgptplus.com" class="text-primary-600 hover:text-primary-700 font-medium underline">go.fastgptplus.com</a>
                        </p>
                        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-primary-500 p-4 rounded-r-lg">
                            <p class="text-sm flex items-start">
                                <svg class="w-4 h-4 mr-2 text-primary-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                                </svg>
                                <span>这是我们的自助充值系统，安全快捷</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Step 2 -->
            <div class="mb-10">
                <div class="flex items-start">
                    <div class="bg-gradient-to-br from-secondary-500 to-secondary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                        2
                    </div>
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold mb-3">支付充值费用</h3>
                        <div class="bg-gray-50 p-6 rounded-xl mb-4">
                            <div class="flex items-center justify-between mb-4">
                                <span class="text-lg font-medium text-gray-700">充值价格</span>
                                <div class="text-right">
                                    <span class="text-3xl font-bold gradient-text">¥158</span>
                                    <span class="text-gray-600 text-sm">/月</span>
                                </div>
                            </div>
                            <p class="text-gray-600 text-sm">比官方便宜20%，支持支付宝/微信支付</p>
                        </div>
                        <p class="text-gray-700">使用支付宝或微信扫码支付即可。</p>
                    </div>
                </div>
            </div>
            
            <!-- Step 3 -->
            <div class="mb-8">
                <div class="flex items-start">
                    <div class="bg-gradient-to-br from-success to-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                        3
                    </div>
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold mb-3">提供账号信息</h3>
                        <ul class="space-y-3 text-gray-700">
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                </svg>
                                <span>输入您的ChatGPT账号邮箱</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                </svg>
                                <span>确认信息无误</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                </svg>
                                <span>点击提交，等待充值完成</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- Success indicator -->
            <div class="bg-gradient-to-r from-success/10 to-green-50 rounded-xl p-6 text-center">
                <img src="{{ site.baseurl }}/assets/icons/success-check.svg" class="w-16 h-16 mx-auto mb-4" alt="Success">
                <p class="text-gray-800 font-medium">充值成功后，5分钟内生效！</p>
            </div>
            {% endcapture %}
            
            {% include ui/card.html 
              content=steps_content
              variant="glass"
              padding="lg"
              class="scroll-fade" %}

            <!-- Features Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                {% capture speed_content %}
                <div class="flex items-start">
                    <div class="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-3 mr-4">
                        <img src="{{ site.baseurl }}/assets/icons/lightning-bolt.svg" class="w-8 h-8" alt="Speed">
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold mb-2">极速充值</h3>
                        <p class="text-gray-600">通过iOS官方渠道充值，5分钟内完成，无需等待。</p>
                    </div>
                </div>
                {% endcapture %}
                
                {% capture security_content %}
                <div class="flex items-start">
                    <div class="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-3 mr-4">
                        <img src="{{ site.baseurl }}/assets/icons/shield-security.svg" class="w-8 h-8" alt="Security">
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold mb-2">安全可靠</h3>
                        <p class="text-gray-600">官方认可渠道，不会触发风控，您的账号100%安全。</p>
                    </div>
                </div>
                {% endcapture %}
                
                {% capture price_content %}
                <div class="flex items-start">
                    <div class="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-3 mr-4">
                        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="url(#price-gradient)" stroke-width="2">
                            <defs>
                                <linearGradient id="price-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#a855f7"/>
                                    <stop offset="100%" style="stop-color:#ec4899"/>
                                </linearGradient>
                            </defs>
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold mb-2">价格优惠</h3>
                        <p class="text-gray-600">利用汇率差价，仅需¥158/月，比官方价格节省20%以上。</p>
                    </div>
                </div>
                {% endcapture %}
                
                {% capture support_content %}
                <div class="flex items-start">
                    <div class="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-xl p-3 mr-4">
                        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2">
                            <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold mb-2">专业客服</h3>
                        <p class="text-gray-600">7×24小时客服支持，微信：laozhangdaichong</p>
                    </div>
                </div>
                {% endcapture %}
                
                {% include ui/card.html content=speed_content hover=true class="scroll-fade" padding="md" %}
                {% include ui/card.html content=security_content hover=true class="scroll-fade" padding="md" %}
                {% include ui/card.html content=price_content hover=true class="scroll-fade" padding="md" %}
                {% include ui/card.html content=support_content hover=true class="scroll-fade" padding="md" %}
            </div>

            <!-- FAQ Section -->
            {% capture faq_content %}
            <h2 class="text-2xl font-semibold mb-8">常见问题</h2>
            
            <div class="space-y-6">
                <div class="border-b border-gray-100 pb-6">
                    <h4 class="font-semibold mb-3 text-lg">充值后多久生效？</h4>
                    <p class="text-gray-600">一般5分钟内生效。系统会自动处理订单，确保您能快速使用ChatGPT Plus。</p>
                </div>
                
                <div class="border-b border-gray-100 pb-6">
                    <h4 class="font-semibold mb-3 text-lg">需要提供密码吗？</h4>
                    <p class="text-gray-600">不需要！我们只需要您的邮箱地址，绝不索要密码。</p>
                </div>
                
                <div class="border-b border-gray-100 pb-6">
                    <h4 class="font-semibold mb-3 text-lg">支持退款吗？</h4>
                    <p class="text-gray-600">支持。如果充值失败，我们承诺100%退款。</p>
                </div>
                
                <div>
                    <h4 class="font-semibold mb-3 text-lg">和野卡有什么区别？</h4>
                    <p class="text-gray-600">野卡已经停服。我们使用iOS官方充值渠道，更安全稳定，不会跑路。</p>
                </div>
            </div>
            
            <div class="mt-8 text-center">
                <a href="{{ site.baseurl }}/faq/" class="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center group">
                    查看更多常见问题
                    <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
            {% endcapture %}
            
            {% include ui/card.html 
              content=faq_content
              variant="glass"
              padding="lg"
              class="scroll-fade" %}
        </div>
    </div>
</div>