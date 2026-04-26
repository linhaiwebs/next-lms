import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lumina Finance - AI驱动的金融教育平台',
  description: '机构级AI算法导师，系统化金融课程。从股票分析到量化策略，智能学习路径为您量身定制。',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#F8F9FA] border-b border-[#E1E4E8]">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto w-full px-6 md:px-16 py-4">
          <Link href="/" className="text-2xl font-bold tracking-widest text-[#1A2B3C]">
            LUMINA FINANCE
          </Link>
          <nav className="hidden md:flex gap-8 items-center font-serif font-medium tracking-tight">
            <a className="text-[#5F6368] hover:text-[#008080] transition-colors duration-300 cursor-pointer" href="#courses">课程</a>
            <a className="text-[#5F6368] hover:text-[#008080] transition-colors duration-300 cursor-pointer" href="#features">AI 功能</a>
            <a className="text-[#5F6368] hover:text-[#008080] transition-colors duration-300 cursor-pointer" href="#pricing">定价</a>
            <a className="text-[#5F6368] hover:text-[#008080] transition-colors duration-300 cursor-pointer" href="#about">关于</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/sign-in"
              className="font-serif font-medium tracking-tight text-[#1A2B3C] hover:text-[#008080] transition-colors duration-300"
            >
              登录
            </Link>
            <Link
              href="/sign-up"
              className="hidden md:inline-block font-manrope text-xs font-bold tracking-widest uppercase bg-[#1A2B3C] text-white px-6 py-2 rounded hover:opacity-90 transition-opacity"
            >
              开始学习
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 min-h-[600px]">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[#191c1d]">
            高精度AI驱动，
            <br />
            掌握全球市场。
          </h1>
          <p className="text-lg text-[#44474c] max-w-lg leading-relaxed">
            借助先进算法导师和机构级精选课程，提升您的金融知识。系统化的学习环境，助您真正精通市场。
          </p>
          <div className="flex gap-4 pt-2">
            <Link
              href="/sign-up"
              className="font-manrope text-xs font-bold tracking-widest uppercase bg-[#1A2B3C] text-white px-8 py-3 rounded hover:opacity-90 transition-opacity"
            >
              查看课程
            </Link>
            <Link
              href="/landing"
              className="font-manrope text-xs font-bold tracking-widest uppercase border border-[#74777d] text-[#191c1d] px-8 py-3 rounded hover:bg-[#f3f4f5] transition-colors"
            >
              了解更多
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative h-[350px] md:h-[500px]">
          <div className="absolute inset-0 bg-white border border-[#c4c6cd] rounded-lg overflow-hidden shadow-sm">
            <div className="w-full h-full bg-gradient-to-br from-[#1A2B3C] via-[#0d1b2a] to-[#006a6a] flex items-center justify-center relative">
              {/* Decorative grid lines */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(0,106,106,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,106,106,0.3) 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
              </div>
              {/* Simulated chart */}
              <svg className="w-3/4 h-1/2 opacity-60" viewBox="0 0 400 150">
                <defs>
                  <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#006a6a" />
                    <stop offset="50%" stopColor="#76d6d5" />
                    <stop offset="100%" stopColor="#af8c47" />
                  </linearGradient>
                  <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#006a6a" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#006a6a" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,120 Q50,100 80,80 T160,60 T240,30 T320,50 T400,20" fill="none" stroke="url(#chartGrad)" strokeWidth="2" />
                <path d="M0,120 Q50,100 80,80 T160,60 T240,30 T320,50 T400,20 L400,150 L0,150 Z" fill="url(#areaGrad)" />
                <circle cx="240" cy="30" r="4" fill="#76d6d5" />
                <circle cx="240" cy="30" r="8" fill="#76d6d5" opacity="0.3" />
              </svg>
              {/* AI Overlay Panel */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-xl border border-white/20 p-4 md:p-6 rounded-lg">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#1a2b3c] block mb-1">
                      AI 洞察
                    </span>
                    <span className="text-sm text-[#191c1d] font-medium">
                      算法趋势检测已激活。科技板块发现波动性聚集现象。
                    </span>
                  </div>
                  <svg className="w-6 h-6 text-[#006a6a] flex-shrink-0 ml-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,13 L9,13 L9,3 L3,3 L3,13 Z M3,21 L9,21 L9,15 L3,15 L3,21 Z M11,21 L17,21 L17,9 L11,9 L11,21 Z M19,3 L19,21 L21,21 L21,3 L19,3 Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Curriculum Section */}
      <section id="courses" className="bg-white border-y border-[#e1e3e4]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
          <div className="mb-8 flex justify-between items-end border-b border-[#c4c6cd] pb-4">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#191c1d]">核心课程</h2>
            <Link
              href="/search"
              className="font-manrope text-xs font-bold tracking-widest uppercase text-[#006a6a] flex items-center hover:opacity-80 transition-opacity"
            >
              查看全部课程
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Course Card 1 */}
            <div className="bg-[#f8f9fa] border border-[#c4c6cd] rounded-lg p-6 hover:border-[#006a6a] transition-colors group cursor-pointer h-full flex flex-col">
              <div className="mb-4">
                <svg className="w-8 h-8 text-[#1a2b3c] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
                <h3 className="font-serif text-xl font-semibold text-[#191c1d]">股票分析与估值</h3>
              </div>
              <p className="text-sm text-[#44474c] flex-grow mb-6">
                利用自然语言处理掌握基本面分析、现金流折现模型和市场心理指标。
              </p>
              <div className="flex justify-between items-center border-t border-[#c4c6cd] pt-4 mt-auto">
                <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#74777d]">12 个模块</span>
                <svg className="w-5 h-5 text-[#74777d] group-hover:text-[#006a6a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            {/* Course Card 2 - Featured */}
            <div className="bg-[#f8f9fa] border border-[#c4c6cd] border-t-2 border-t-[#af8c47] rounded-lg p-6 hover:border-[#006a6a] transition-colors group cursor-pointer h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#392700] text-[#af8c47] font-manrope text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded">
                精选
              </div>
              <div className="mb-4">
                <svg className="w-8 h-8 text-[#1a2b3c] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 1.286-.483 2.463-1.278 3.364l-6.747 7.486L5.5 9.739A5.235 5.235 0 014.25 6.375 5.256 5.256 0 019.5 1.125c1.56 0 2.955.68 3.922 1.755A5.223 5.223 0 0117.25 1.125a5.256 5.256 0 015.25 5.25z" />
                </svg>
                <h3 className="font-serif text-xl font-semibold text-[#191c1d]">数字资产与区块链</h3>
              </div>
              <p className="text-sm text-[#44474c] flex-grow mb-6">
                利用独家AI模型深入探索区块链架构、代币经济学和链上数据分析。
              </p>
              <div className="flex justify-between items-center border-t border-[#c4c6cd] pt-4 mt-auto">
                <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#74777d]">8 个模块</span>
                <svg className="w-5 h-5 text-[#74777d] group-hover:text-[#006a6a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            {/* Course Card 3 */}
            <div className="bg-[#f8f9fa] border border-[#c4c6cd] rounded-lg p-6 hover:border-[#006a6a] transition-colors group cursor-pointer h-full flex flex-col">
              <div className="mb-4">
                <svg className="w-8 h-8 text-[#1a2b3c] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <h3 className="font-serif text-xl font-semibold text-[#191c1d]">宏观经济分析</h3>
              </div>
              <p className="text-sm text-[#44474c] flex-grow mb-6">
                理解全球金融政策、利率走势，以及地缘政治对整体市场结构的影响。
              </p>
              <div className="flex justify-between items-center border-t border-[#c4c6cd] pt-4 mt-auto">
                <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#74777d]">15 个模块</span>
                <svg className="w-5 h-5 text-[#74777d] group-hover:text-[#006a6a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section id="features" className="max-w-[1200px] mx-auto px-6 md:px-16 py-16 md:py-20">
        <div className="text-center mb-12">
          <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#006a6a] block mb-3">
            智能引擎
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#191c1d] mb-4">
            重新定义金融教育
          </h2>
          <p className="text-lg text-[#44474c] max-w-2xl mx-auto">
            我们的平台不只是课程——它是一个持续适应市场变化的AI驱动学习系统。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              ),
              title: '自适应学习引擎',
              desc: 'AI根据您的理解水平动态调整课程难度和学习路径。',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              ),
              title: '实时市场洞察',
              desc: '算法驱动的趋势检测，实时监控全球金融市场动态。',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              ),
              title: 'AI智能导师',
              desc: '7×24小时AI导师为您解答疑问，提供个性化学习建议。',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              ),
              title: '机构级安全',
              desc: '银行级数据加密，确保您的学习进度和交易策略安全。',
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white border border-[#c4c6cd] rounded-lg p-6 hover:border-[#006a6a] transition-colors group"
            >
              <div className="text-[#1a2b3c] mb-4 group-hover:text-[#006a6a] transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#191c1d] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#44474c]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#edeeef]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#191c1d] mb-4">
              结构化智能，为您量身优化
            </h2>
            <p className="text-lg text-[#44474c] max-w-2xl mx-auto">
              选择适合您分析目标的方案，获取机构级财务分析和系统化教育框架。
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Free Plan */}
            <div className="bg-white border border-[#c4c6cd] rounded-lg p-8 flex flex-col h-full hover:border-[#74777d] transition-colors">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-semibold text-[#191c1d] mb-2">入门学徒</h3>
                <p className="text-sm text-[#44474c] h-12">基础投资者必备框架。</p>
              </div>
              <div className="mb-8">
                <span className="font-serif text-5xl font-bold text-[#191c1d]">$0</span>
                <span className="text-sm text-[#44474c]">/ 月</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['精选每周市场摘要', '5个入门模块访问权限', '公开社区论坛浏览权限'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#006a6a] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#191c1d]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/sign-up"
                className="w-full py-4 border border-[#041627] text-[#041627] font-manrope text-xs font-bold tracking-widest uppercase rounded text-center hover:bg-[#f3f4f5] transition-colors block"
              >
                开始基础学习
              </Link>
            </div>
            {/* Pro Plan - Featured */}
            <div className="bg-white border border-[#041627] rounded-lg p-8 flex flex-col h-full relative shadow-[inset_0_4px_0_0_rgba(175,140,71,1)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#041627] text-white px-4 py-1 rounded-full font-manrope text-[10px] font-bold tracking-widest uppercase">
                推荐
              </div>
              <div className="mb-6 mt-2">
                <h3 className="font-serif text-2xl font-semibold text-[#191c1d] mb-2">专业分析师</h3>
                <p className="text-sm text-[#44474c] h-12">主动投资的高级工具和AI整合。</p>
              </div>
              <div className="mb-8">
                <span className="font-serif text-5xl font-bold text-[#191c1d]">$85</span>
                <span className="text-sm text-[#44474c]">/ 月</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  'AI驱动股票分析引擎',
                  '每月实盘策略直播',
                  '全部课程访问权限（40+模块）',
                  '独有估值建模模板',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#041627] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm text-[#191c1d] ${i === 0 ? 'font-semibold' : ''}`}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/sign-up"
                className="w-full py-4 bg-[#041627] text-white font-manrope text-xs font-bold tracking-widest uppercase rounded text-center hover:opacity-90 transition-opacity shadow-sm block"
              >
                升级专业版
              </Link>
            </div>
            {/* Enterprise Plan */}
            <div className="bg-white border border-[#c4c6cd] rounded-lg p-8 flex flex-col h-full hover:border-[#74777d] transition-colors bg-gradient-to-b from-[#f3f4f5] to-transparent">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-semibold text-[#191c1d] mb-2">机构投资者</h3>
                <p className="text-sm text-[#44474c] h-12">家族办公室和基金定制基础设施。</p>
              </div>
              <div className="mb-8">
                <span className="font-serif text-2xl font-semibold text-[#191c1d]">定制方案</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  '私密社区访问和社交网络',
                  '专属AI导师实例（数据隔离）',
                  '量化模型API访问',
                  '专属培训和优先支持',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#74777d] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#191c1d]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/sign-up"
                className="w-full py-4 border border-[#74777d] text-[#191c1d] font-manrope text-xs font-bold tracking-widest uppercase rounded text-center hover:border-[#041627] hover:text-[#041627] transition-colors block"
              >
                联系合作伙伴
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About / Team Section */}
      <section id="about" className="max-w-[1200px] mx-auto px-6 md:px-16 py-16 md:py-20">
        <div className="text-center mb-12">
          <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#006a6a] block mb-3">
            核心团队
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#191c1d] mb-4">
            设计经济学与人工智能交汇的智慧
          </h2>
          <p className="text-base text-[#44474c] max-w-2xl mx-auto">
            来自全球顶级机构的团队，致力于重新定义金融教育。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Elias Vance 博士',
              role: '首席执行官',
              desc: '前全球机构量化策略负责人，开创性适应型风险建模框架。',
              featured: false,
            },
            {
              name: 'Sarah Chen',
              role: '首席AI架构师',
              desc: 'Lumina预测课程引擎的幕后架构师，机器学习应用于宏观经济学的博士。',
              featured: true,
            },
            {
              name: 'Marcus Thorne',
              role: '教育总监',
              desc: '将复杂的机构策略翻译为可访问的结构化教育框架。',
              featured: false,
            },
          ].map((person, i) => (
            <div
              key={i}
              className={`flex flex-col bg-white border ${
                person.featured ? 'border-t-2 border-t-[#392700] border-x border-b border-[#e1e3e4] shadow-sm' : 'border-[#e1e3e4]'
              } p-6 rounded-lg group hover:border-[#006a6a] transition-colors duration-300`}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border border-[#c4c6cd] bg-[#edeeef] flex items-center justify-center">
                <svg className="w-10 h-10 text-[#c4c6cd]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#041627] mb-1">{person.name}</h3>
              <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#006a6a] mb-4">
                {person.role}
              </span>
              <p className="text-sm text-[#44474c] border-t border-[#e1e3e4] pt-4 mt-auto">{person.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1A2B3C]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-16 md:py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            开始您的AI金融教育之旅
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-xl mx-auto mb-8">
            加入数千名正在使用AI驱动的学习系统掌握金融市场的投资者。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="inline-block font-manrope text-xs font-bold tracking-widest uppercase bg-[#006a6a] text-white px-8 py-3 rounded hover:opacity-90 transition-opacity"
            >
              免费注册
            </Link>
            <Link
              href="/landing"
              className="inline-block font-manrope text-xs font-bold tracking-widest uppercase border border-[#94A3B8] text-white px-8 py-3 rounded hover:bg-white/10 transition-colors"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A2B3C] border-t border-[#2D3748]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-center md:text-left">
            <div className="md:col-span-2">
              <div className="text-xl font-bold text-white mb-4 tracking-widest">LUMINA FINANCE</div>
              <p className="text-sm text-[#94A3B8] max-w-sm mb-6">
                全球经济信息的智慧档案。利用人工智能和系统化学习，赋能下一代投资者。
              </p>
              <div className="text-xs text-[#94A3B8]">© 2024 Lumina Financial. 全球经济信息智慧档案。</div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#CBD5E1] mb-2 opacity-50">
                平台
              </span>
              <a className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-all" href="#courses">课程体系</a>
              <a className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-all" href="#pricing">企业定价</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#CBD5E1] mb-2 opacity-50">
                公司
              </span>
              <a className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-all" href="#about">投资者信息</a>
              <a className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-all" href="#">隐私架构</a>
              <a className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-all" href="#">联系我们</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
