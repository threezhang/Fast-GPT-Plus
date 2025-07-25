---
layout: default
title: 快速开始 - ChatGPT Plus 充值教程
permalink: /quick-start/
---

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Hero Section -->
    <div class="text-center mb-12 scroll-fade">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            ⚡ 快速开始充值 ChatGPT Plus
        </h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
            最简单、最快速的充值方式，5分钟搞定 ChatGPT Plus 订阅
        </p>
    </div>

    <!-- Steps Timeline -->
    <div class="relative mb-16">
        <!-- Timeline Line -->
        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        
        <!-- Step 1 -->
        <div class="relative flex items-start mb-12 scroll-fade">
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-neon">
                1
            </div>
            <div class="ml-8 flex-1">
                <h3 class="text-2xl font-semibold mb-3">访问充值页面</h3>
                <p class="text-gray-700 mb-4">
                    打开浏览器，访问我们的充值网站：
                </p>
                {% include ui/button.html 
                  text="go.fastgptplus.com" 
                  variant="neon" 
                  size="lg" 
                  href="https://go.fastgptplus.com"
                  class="mb-4"
                  effect="glow"
                  icon='<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-linecap="round" stroke-linejoin="round"/></svg>'
                  iconPosition="right" %}
                <div class="glass-modern p-4 border-l-4 border-neon-cyan rounded-xl">
                    <p class="text-sm text-gray-700">
                        <span class="text-neon-cyan font-semibold">💡 提示：</span>这是我们的官方充值网站，安全可靠，支持支付宝/微信支付
                    </p>
                </div>
            </div>
        </div>

        <!-- Step 2 -->
        <div class="relative flex items-start mb-12 scroll-fade">
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-aurora-start to-aurora-end text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-aurora">
                2
            </div>
            <div class="ml-8 flex-1">
                <h3 class="text-2xl font-semibold mb-3">选择充值套餐</h3>
                {% capture pricing_content %}
                <div class="glass-modern glow-card p-6 rounded-2xl">
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <h4 class="text-xl font-semibold text-gray-800">ChatGPT Plus 月度订阅</h4>
                            <p class="text-gray-600">官方 iOS 渠道充值</p>
                        </div>
                        <div class="text-right">
                            <p class="text-3xl font-bold text-gradient-animated">¥158</p>
                            <p class="text-sm text-gray-600">/月</p>
                        </div>
                    </div>
                    <ul class="space-y-2 text-sm text-gray-700">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            无限制使用 GPT-4
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            优先访问新功能
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            更快的响应速度
                        </li>
                    </ul>
                </div>
                {% endcapture %}
                {% include ui/card.html content=pricing_content variant="glass" padding="sm" %}
                <p class="text-gray-700 mt-4">
                    选择月度套餐，点击"立即购买"按钮
                </p>
            </div>
        </div>

        <!-- Step 3 -->
        <div class="relative flex items-start mb-12 scroll-fade">
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-neon-green to-success text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-neon">
                3
            </div>
            <div class="ml-8 flex-1">
                <h3 class="text-2xl font-semibold mb-3">完成支付</h3>
                <div class="grid md:grid-cols-2 gap-4 mb-4">
                    <div class="bg-white border-2 border-gray-200 rounded-xl p-4 text-center hover:border-primary-500 transition">
                        <div class="h-8 flex items-center justify-center mb-2 text-blue-600">
                            <span class="text-2xl font-bold">支付宝</span>
                        </div>
                        <p class="font-medium">支付宝扫码</p>
                    </div>
                    <div class="bg-white border-2 border-gray-200 rounded-xl p-4 text-center hover:border-green-500 transition">
                        <div class="h-8 flex items-center justify-center mb-2 text-green-600">
                            <span class="text-2xl font-bold">微信</span>
                        </div>
                        <p class="font-medium">微信扫码</p>
                    </div>
                </div>
                <p class="text-gray-700">
                    使用支付宝或微信扫描二维码，完成支付
                </p>
            </div>
        </div>

        <!-- Step 4 -->
        <div class="relative flex items-start scroll-fade">
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent-neon to-accent-aurora text-white rounded-full flex items-center justify-center font-bold text-xl z-10 animate-glow-pulse">
                ✓
            </div>
            <div class="ml-8 flex-1">
                <h3 class="text-2xl font-semibold mb-3">充值成功</h3>
                <p class="text-gray-700 mb-4">
                    支付成功后，填写您的 ChatGPT 账号邮箱，系统会在 5 分钟内完成充值
                </p>
                <div class="glass-modern p-4 border-l-4 border-neon-green rounded-xl">
                    <p class="text-sm text-gray-700">
                        <span class="text-neon-green font-semibold">✅ 成功：</span>充值成功后，您会收到邮件通知，即可登录 ChatGPT 使用 Plus 功能
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- FAQ Section -->
    {% include components/faq-accordion.html class="mb-12" %}

    <!-- CTA Section -->
    <div class="text-center">
        {% include ui/button.html 
          text="立即开始充值" 
          variant="aurora" 
          size="lg" 
          href="https://go.fastgptplus.com"
          class="hover-lift"
          effect="ripple"
          icon='<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round"/></svg>' %}
        
        <p class="text-gray-600 mt-4">
            需要帮助？联系客服微信：laozhangdaichong
        </p>
    </div>
</div>