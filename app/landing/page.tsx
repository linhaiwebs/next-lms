import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lumina Finance - AI股票教育 | 免费开始学习',
  description: '用AI重新定义股票教育。10,000+活跃学员的选择，机构级AI算法导师，系统化金融课程，从零基础到专业分析师。',
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0e141a] text-white overflow-x-hidden">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-[#0e141a]/90 backdrop-blur-md border-b border-white/10">
        <div className="flex justify-between items-center px-5 py-3">
          <span className="text-lg font-bold tracking-widest text-[#00E676]">LUMINA</span>
          <Link
            href="/sign-in"
            className="text-xs font-bold tracking-widest uppercase text-[#00E676] border border-[#00E676] px-4 py-1.5 rounded-full hover:bg-[#00E676]/10 transition-colors"
          >
            登录
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-5 pt-12 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00E676]/5 to-transparent pointer-events-none" />
        <div className="relative">
          <span className="inline-block font-manrope text-[10px] font-bold tracking-widest uppercase text-[#00E676] mb-4 bg-[#00E676]/10 px-3 py-1 rounded-full">
            🤖 AI 驱动
          </span>
          <h1 className="text-3xl font-bold leading-tight mb-4">
            用AI重新定义
            <br />
            <span className="text-[#00E676]">股票教育</span>
          </h1>
          <p className="text-base text-[#94A3B8] leading-relaxed mb-8">
            机构级AI算法导师，系统化金融课程。从零基础到专业分析师，智能学习路径为你量身定制。
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/sign-up"
              className="w-full text-center font-bold text-sm tracking-widest uppercase bg-gradient-to-r from-[#00E676] to-[#00C853] text-[#0e141a] py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              立即免费开始 →
            </Link>
            <Link
              href="/"
              className="w-full text-center text-sm text-[#94A3B8] py-2 hover:text-white transition-colors"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Demo Card */}
      <section className="px-5 mb-12">
        <div className="bg-[#1a2027] border border-white/10 rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
              <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#00E676]">
                AI 实时分析
              </span>
            </div>
          </div>
          <div className="p-4">
            {/* Simulated Stock Chart */}
            <div className="relative h-32 mb-4">
              <svg className="w-full h-full" viewBox="0 0 300 120">
                <defs>
                  <linearGradient id="mobileChartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00E676" />
                    <stop offset="100%" stopColor="#00C853" />
                  </linearGradient>
                  <linearGradient id="mobileAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00E676" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#00E676" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,90 Q30,75 60,65 T120,40 T180,55 T240,25 T300,15" fill="none" stroke="url(#mobileChartGrad)" strokeWidth="2.5" />
                <path d="M0,90 Q30,75 60,65 T120,40 T180,55 T240,25 T300,15 L300,120 L0,120 Z" fill="url(#mobileAreaGrad)" />
                <circle cx="300" cy="15" r="4" fill="#00E676" />
                <circle cx="300" cy="15" r="8" fill="#00E676" opacity="0.3">
                  <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            {/* Stock Info */}
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm font-semibold">AAPL</div>
                <div className="text-xs text-[#94A3B8]">Apple Inc.</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-[#00E676]">+2.34%</div>
                <div className="text-xs text-[#94A3B8]">$189.42</div>
              </div>
            </div>
          </div>
          {/* AI Insight */}
          <div className="mx-4 mb-4 p-3 bg-[#00E676]/5 border border-[#00E676]/20 rounded-xl">
            <div className="flex gap-2">
              <svg className="w-4 h-4 text-[#00E676] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="text-xs text-[#00E676]">
                AI检测到科技板块买入信号，波动性聚集指数上升
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="px-5 mb-12">
        <h2 className="text-xl font-bold mb-6">为什么选择我们？</h2>
        <div className="space-y-4">
          {[
            {
              icon: '🧠',
              title: 'AI自适应学习',
              desc: '算法根据您的理解程度动态调整课程难度和学习路径，确保最高效的学习体验。',
              color: '#00E676',
            },
            {
              icon: '📊',
              title: '实时市场分析',
              desc: '7×24小时AI监控全球金融市场，第一时间推送趋势变化和交易机会。',
              color: '#b0c6ff',
            },
            {
              icon: '🎯',
              title: '系统化课程体系',
              desc: '从基本面分析到量化策略，40+模块覆盖完整投资知识链。',
              color: '#ffe37a',
            },
            {
              icon: '🔒',
              title: '机构级安全',
              desc: '银行级数据加密保护您的学习进度和投资策略，安全无忧。',
              color: '#ff8a80',
            },
          ].map((feature, i) => (
            <div key={i} className="bg-[#1a2027] border border-white/5 rounded-xl p-5 flex gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                {feature.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-5 mb-12">
        <div className="bg-gradient-to-br from-[#1a2027] to-[#0e141a] border border-white/10 rounded-2xl p-6 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 text-[#ffe37a]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <div className="text-3xl font-bold mb-1">10,000+</div>
          <div className="text-sm text-[#94A3B8] mb-4">活跃学员</div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { num: '50+', label: 'AI课程' },
              { num: '95%', label: '好评率' },
              { num: '24/7', label: 'AI导师' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-lg font-bold text-[#00E676]">{stat.num}</div>
                <div className="text-[10px] text-[#94A3B8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-5 mb-12">
        <div className="bg-[#1a2027] border-l-2 border-l-[#00E676] border-r border-t border-b border-r-white/5 border-t-white/5 border-b-white/5 rounded-r-xl p-5">
          <p className="text-sm text-[#dde3ec] leading-relaxed mb-4 italic">
            &ldquo;Lumina的AI导师完全改变了我的学习方式。系统化的课程让我从投资新手成长为能独立分析市场的交易者。&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#00E676]/20 flex items-center justify-center">
              <span className="text-xs font-bold text-[#00E676]">YK</span>
            </div>
            <div>
              <div className="text-xs font-semibold">杨凯</div>
              <div className="text-[10px] text-[#94A3B8]">专业分析师学员</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Quick Look */}
      <section className="px-5 mb-12">
        <h2 className="text-xl font-bold mb-6">简单透明的定价</h2>
        <div className="bg-gradient-to-br from-[#1a2027] to-[#0e141a] border border-[#00E676]/30 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#00E676] text-[#0e141a] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-bl-lg">
            最受欢迎
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">专业分析师</h3>
            <p className="text-xs text-[#94A3B8]">全功能访问 · AI驱动</p>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold text-[#00E676]">$85</span>
            <span className="text-sm text-[#94A3B8]">/月</span>
          </div>
          <ul className="space-y-3 mb-6">
            {['AI股票分析引擎', '40+模块全访问', '月度实盘策略直播', '估值建模模板'].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#00E676] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[#dde3ec]">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/sign-up"
            className="block w-full text-center font-bold text-sm tracking-widest uppercase bg-gradient-to-r from-[#00E676] to-[#00C853] text-[#0e141a] py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            立即升级专业版 →
          </Link>
          <p className="text-center text-[10px] text-[#94A3B8] mt-3">7天免费试用 · 随时取消</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-16">
        <div className="bg-gradient-to-br from-[#00E676]/10 to-[#0e141a] border border-[#00E676]/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">准备好开始了吗？</h2>
          <p className="text-sm text-[#94A3B8] mb-6">
            加入10,000+投资者，用AI重新定义您的金融教育之旅。
          </p>
          <Link
            href="/sign-up"
            className="inline-block font-bold text-sm tracking-widest uppercase bg-gradient-to-r from-[#00E676] to-[#00C853] text-[#0e141a] px-10 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            免费开始学习 →
          </Link>
          <div className="mt-4">
            <Link href="/sign-in" className="text-xs text-[#94A3B8] hover:text-white transition-colors">
              已有账户？立即登录 →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-5 py-8">
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold tracking-widest text-[#00E676]">LUMINA</span>
          <span className="text-[10px] text-[#94A3B8]">© 2024 Lumina Financial</span>
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-xs text-[#94A3B8] hover:text-[#00E676] transition-colors">隐私政策</a>
          <a href="#" className="text-xs text-[#94A3B8] hover:text-[#00E676] transition-colors">服务条款</a>
          <a href="#" className="text-xs text-[#94A3B8] hover:text-[#00E676] transition-colors">联系我们</a>
        </div>
      </footer>
    </div>
  )
}
