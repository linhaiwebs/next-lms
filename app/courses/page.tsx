import Link from 'next/link'
import type { Metadata } from 'next'
import { PublicHeader, PublicFooter } from '@/components/public'

export const metadata: Metadata = {
  title: 'コース一覧 | ウド知恵',
  description: '初心者から上級者まで、株式投資・ファンダメンタルズ分析・テクニカル分析など、体系的に学べる金融教育コース一覧。',
}

const categories = [
  {
    title: '入門',
    label: '基礎を学ぶ',
    color: '#006a6a',
    courses: [
      { title: '株式投資の基礎', modules: 8, duration: '約16時間', desc: '投資の基本概念、リスク管理の基礎、ポートフォリオ構築の入門知識を体系的に学びます。' },
      { title: '金融市場の仕組み', modules: 6, duration: '約12時間', desc: '株式市場、債券市場、為替市場の仕組みと相互関係を理解するためのコース。' },
      { title: '投資のリテラシー', modules: 5, duration: '約10時間', desc: '金融商品の基礎知識、詐欺の見分け方、適切な情報収集の方法を学習。' },
    ],
  },
  {
    title: '中級',
    label: '分析力を養う',
    color: '#1A2B3C',
    courses: [
      { title: 'ファンダメンタルズ分析', modules: 12, duration: '約24時間', desc: '財務諸表の読み方、企業価値評価の手法、業界分析のフレームワークを習得。' },
      { title: 'テクニカル分析入門', modules: 10, duration: '約20時間', desc: 'チャートパターン、テクニカル指標、トレンド分析の基本を体系的に学びます。' },
      { title: 'マクロ経済と市場', modules: 8, duration: '約16時間', desc: 'GDP、インフレ、金利政策などのマクロ経済指標が市場に与える影響を理解。' },
      { title: 'ポートフォリオ構築', modules: 7, duration: '約14時間', desc: '分散投資の理論、資産配分の考え方、リスク・リターンのバランスを学習。' },
    ],
  },
  {
    title: '上級',
    label: '専門性を深める',
    color: '#af8c47',
    courses: [
      { title: 'デリバティブ入門', modules: 8, duration: '約16時間', desc: 'オプション、先物、スワップなどデリバティブ商品の基本構造と活用方法を学習。' },
      { title: 'クオンツ分析基礎', modules: 10, duration: '約20時間', desc: '量的分析の手法、バックテスト、統計的アプローチによる市場分析の基礎。' },
      { title: '企業価値評価の実践', modules: 9, duration: '約18時間', desc: 'DCF法、類似企業比較法など、実務的な企業価値評価手法をケーススタディで学習。' },
    ],
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] font-sans antialiased">
      <PublicHeader />

      {/* Hero */}
      <section className="bg-[#1A2B3C] text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
          <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#76d6d5] block mb-3">コース一覧</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">体系的なカリキュラムで学ぶ</h1>
          <p className="text-base text-[#94A3B8] max-w-2xl leading-relaxed">
            入門から上級まで、段階的に金融知識を深められる40以上の学習モジュール。各コースはAI学習アシスタントと連動し、自分のペースで効率的に学べます。
          </p>
        </div>
      </section>

      {/* Learning Path */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-16 py-8">
        <div className="flex items-center gap-4 overflow-x-auto pb-2">
          <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#5F6368] flex-shrink-0">学習パス：</span>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-sm font-medium text-[#006a6a] bg-[#006a6a]/10 px-3 py-1 rounded-full">入門</span>
            <svg className="w-4 h-4 text-[#c4c6cd]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-sm font-medium text-[#1A2B3C] bg-[#1A2B3C]/10 px-3 py-1 rounded-full">中級</span>
            <svg className="w-4 h-4 text-[#c4c6cd]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-sm font-medium text-[#af8c47] bg-[#af8c47]/10 px-3 py-1 rounded-full">上級</span>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      {categories.map((category, ci) => (
        <section key={ci} className={ci % 2 === 0 ? 'bg-white border-y border-[#e1e3e4]' : ''}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-10 md:py-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-manrope text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: category.color, backgroundColor: `${category.color}15` }}>
                {category.title}
              </span>
              <span className="text-sm text-[#5F6368]">{category.label}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.courses.map((course, i) => (
                <div key={i} className="bg-[#f8f9fa] border border-[#e1e3e4] rounded-lg p-6 hover:border-[#006a6a] transition-colors group flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-[#5F6368]">{course.modules}モジュール</span>
                    <span className="text-[#c4c6cd]">·</span>
                    <span className="text-xs text-[#5F6368]">{course.duration}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#191c1d] mb-2 group-hover:text-[#006a6a] transition-colors">{course.title}</h3>
                  <p className="text-sm text-[#44474c] leading-relaxed flex-grow">{course.desc}</p>
                  <Link href="/sign-up" className="text-sm text-[#006a6a] font-medium mt-4 group-hover:underline">このコースを学ぶ →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* AI Learning */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
        <div className="bg-gradient-to-br from-[#1A2B3C] to-[#0d1b2a] rounded-lg p-8 md:p-12 text-white text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">AIが学習をサポート</h2>
          <p className="text-sm text-[#94A3B8] max-w-xl mx-auto mb-6 leading-relaxed">
            すべてのコースにAI学習アシスタントが付き、理解度に応じて学習ペースや内容を自動調整。わからない点はいつでも質問できます。
          </p>
          <Link
            href="/features"
            className="inline-block font-manrope text-xs font-bold tracking-widest uppercase bg-[#006a6a] text-white px-6 py-2.5 rounded hover:opacity-90 transition-opacity"
          >
            AI機能について詳しく
          </Link>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
