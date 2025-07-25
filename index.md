---
layout: default
permalink: /
---

<!-- Hero Section with Aurora Effect -->
{% include sections/hero-aurora.html 
  badge="野卡最佳替代方案"
  title="ChatGPT Plus 快速充值指南"
  subtitle="通过iOS官方渠道，5分钟完成充值<br>安全、稳定、便捷的充值解决方案"
  cta_primary_text="立即充值 ¥158/月"
  cta_primary_url="https://go.fastgptplus.com"
  cta_secondary_text="查看教程"
  cta_secondary_url="/quick-start/"
  features=site.data.hero_features
%}

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
                
                {% include ui/card.html title="开始之前的准备" content=checklist_content variant="glass" hover=true class="scroll-fade" %}
            </div>
        </div>

        <!-- Main Content Area -->
        <div class="lg:col-span-2 space-y-8">
            <!-- Step by Step Guide -->
            {% capture steps_content %}
            <h2 class="text-2xl font-semibold mb-8 flex items-center">
                <img src="{{ site.baseurl }}/assets/icons/process-flow.png" class="h-8 mr-4" alt="Process">
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
                <img src="{{ site.baseurl }}/assets/icons/success-check.png" class="w-16 h-16 mx-auto mb-4" alt="Success">
                <p class="text-gray-800 font-medium">充值成功后，5分钟内生效！</p>
            </div>
            {% endcapture %}
            
            {% include ui/card.html content=steps_content variant="glass" padding="lg" class="scroll-fade glow-card" %}

            <!-- Features Bento Grid -->
            {% capture bento_features %}
            [
              {
                "title": "极速充值",
                "content": "<p>通过iOS官方渠道充值，5分钟内完成，无需等待。</p>",
                "size": "sm",
                "variant": "glow",
                "icon": "<img src='{{ site.baseurl }}/assets/icons/lightning-bolt.png' class='w-6 h-6' alt='Speed'>"
              },
              {
                "title": "安全可靠",
                "content": "<p>官方认可渠道，不会触发风控，您的账号100%安全。</p>",
                "size": "sm",
                "variant": "glass",
                "icon": "<img src='{{ site.baseurl }}/assets/icons/shield-security.png' class='w-6 h-6' alt='Security'>"
              },
              {
                "title": "价格优惠",
                "content": "<p>利用汇率差价，仅需¥158/月，比官方价格节省20%以上。</p>",
                "size": "sm",
                "variant": "aurora",
                "icon": "<svg class='w-6 h-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6' stroke-linecap='round' stroke-linejoin='round'/></svg>"
              },
              {
                "title": "专业客服",
                "content": "<p>7×24小时客服支持，微信：laozhangdaichong</p>",
                "size": "sm",
                "variant": "glow",
                "icon": "<svg class='w-6 h-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129' stroke-linecap='round' stroke-linejoin='round'/></svg>"
              }
            ]
            {% endcapture %}
            
            <div class="my-8">
              {% include ui/bento-grid.html items=bento_features gap="gap-4" %}
            </div>

            <!-- FAQ Section -->
            {% include components/faq-accordion.html class="my-8" %}
        </div>
    </div>
</div>