import Link from 'next/link'
import type { Metadata } from 'next'
import { PublicHeader, PublicFooter } from '@/components/public'

export const metadata: Metadata = {
  title: 'ウド知恵 - AI金融教育プラットフォーム',
  description: 'AI学習アシスタントと体系的な金融コース。株式分析の基礎から応用まで、自分のペースで段階的に学べる学習パス。投資助言ではありません。',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] font-sans antialiased">
      <PublicHeader />

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-16 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#006a6a] bg-[#006a6a]/10 px-3 py-1 rounded-full w-fit">
            AI搭載金融教育
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[#191c1d]">
            AIで学ぶ、
            <br />
            金融知識の習得。
          </h1>
          <p className="text-lg text-[#44474c] max-w-lg leading-relaxed">
            AI学習アシスタントと体系的なコースで、金融知識を段階的に身につけましょう。自分のペースで効率的に学べる環境を提供します。
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/sign-up"
              className="font-manrope text-xs font-bold tracking-widest uppercase bg-[#1A2B3C] text-white px-8 py-3 rounded hover:opacity-90 transition-opacity"
            >
              無料で始める
            </Link>
            <Link
              href="/courses"
              className="font-manrope text-xs font-bold tracking-widest uppercase border border-[#74777d] text-[#191c1d] px-8 py-3 rounded hover:bg-[#f3f4f5] transition-colors"
            >
              コースを見る
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[420px]">
          <div className="absolute inset-0 bg-white border border-[#c4c6cd] rounded-lg overflow-hidden shadow-sm">
            <div className="w-full h-full bg-gradient-to-br from-[#1A2B3C] via-[#0d1b2a] to-[#006a6a] flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(rgba(0,106,106,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,106,106,0.3) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
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
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-xl border border-white/20 p-4 md:p-6 rounded-lg">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#1a2b3c] block mb-1">AI学習サポート</span>
                    <span className="text-sm text-[#191c1d] font-medium">学習進捗に応じて復習ポイントを自動検出。理解度に合わせた学習パスを提案。</span>
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

      {/* Navigation Cards */}
      <section className="bg-white border-y border-[#e1e3e4]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-[#191c1d] mb-8">ウド知恵でできること</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'コース一覧',
                desc: '初心者から上級者まで、40以上のモジュールで体系的に学べる金融コース。',
                href: '/courses',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
              },
              {
                title: 'AI機能',
                desc: 'アダプティブラーニング、AI学習アシスタントなど、学習を加速する機能。',
                href: '/features',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
              },
              {
                title: '学習の流れ',
                desc: '登録から学習開始まで、スムーズに始められるステップバイステップガイド。',
                href: '/guide',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
              },
              {
                title: '料金プラン',
                desc: '無料プランからスタンダードまで、学習スタイルに合わせて選べる料金体系。',
                href: '/pricing',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <Link
                key={i}
                href={card.href}
                className="group bg-[#f8f9fa] border border-[#e1e3e4] rounded-lg p-6 hover:border-[#006a6a] hover:shadow-sm transition-all duration-200 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-[#edeeef] flex items-center justify-center text-[#1a2b3c] group-hover:text-[#006a6a] group-hover:bg-[#006a6a]/10 transition-colors mb-4">
                  {card.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#191c1d] mb-2">{card.title}</h3>
                <p className="text-sm text-[#44474c] leading-relaxed flex-grow">{card.desc}</p>
                <span className="text-sm text-[#006a6a] font-medium mt-4 group-hover:underline">詳しく見る →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: '40+', label: '学習モジュール' },
            { num: '1,000+', label: '登録受講者' },
            { num: '92%', label: '学習満足度（アンケート調査）' },
            { num: '24/7', label: 'AI学習サポート' },
          ].map((stat, i) => (
            <div key={i} className="text-center py-6">
              <div className="text-3xl md:text-4xl font-bold text-[#006a6a] mb-1">{stat.num}</div>
              <div className="text-sm text-[#5F6368]">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#74777d] mt-2">※ 登録受講者数は2026年3月時点。満足度はサービス内アンケート調査に基づきます。</p>
      </section>

      {/* Course Preview */}
      <section className="bg-white border-y border-[#e1e3e4]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#006a6a] block mb-2">人気コース</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-[#191c1d]">学習を始めるならここから</h2>
            </div>
            <Link href="/courses" className="hidden md:flex font-manrope text-xs font-bold tracking-widest uppercase text-[#006a6a] items-center gap-1 hover:opacity-80 transition-opacity">
              全コースを見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '株式投資の基礎', level: '入門', modules: 8, desc: '投資の基本概念からポートフォリオ構築の基礎まで、初心者向けの包括的コース。' },
              { title: 'ファンダメンタルズ分析', level: '中級', modules: 12, desc: '財務諸表の読み方、企業価値評価の手法、業界分析のフレームワークを学習。' },
              { title: 'テクニカル分析入門', level: '中級', modules: 10, desc: 'チャートパターン、テクニカル指標、トレンド分析の基本を体系的に習得。' },
            ].map((course, i) => (
              <div key={i} className="bg-[#f8f9fa] border border-[#e1e3e4] rounded-lg p-6 hover:border-[#006a6a] transition-colors group cursor-pointer flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#006a6a] bg-[#006a6a]/10 px-2 py-0.5 rounded">{course.level}</span>
                  <span className="text-xs text-[#5F6368]">{course.modules}モジュール</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#191c1d] mb-2 group-hover:text-[#006a6a] transition-colors">{course.title}</h3>
                <p className="text-sm text-[#44474c] leading-relaxed flex-grow">{course.desc}</p>
                <span className="text-sm text-[#006a6a] font-medium mt-4 group-hover:underline">コース詳細 →</span>
              </div>
            ))}
          </div>
          <Link href="/courses" className="md:hidden flex justify-center mt-6 font-manrope text-xs font-bold tracking-widest uppercase text-[#006a6a] hover:opacity-80">
            全コースを見る →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1A2B3C]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-16 md:py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            AI金融教育の旅を始めましょう
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-xl mx-auto mb-8">
            AIを活用した学習システムで金融知識を学んでいる多くの学習者に参加しましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="inline-block font-manrope text-xs font-bold tracking-widest uppercase bg-[#006a6a] text-white px-8 py-3 rounded hover:opacity-90 transition-opacity"
            >
              無料登録
            </Link>
            <Link
              href="/guide"
              className="inline-block font-manrope text-xs font-bold tracking-widest uppercase border border-[#94A3B8] text-white px-8 py-3 rounded hover:bg-white/10 transition-colors"
            >
              学習の流れを見る
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
