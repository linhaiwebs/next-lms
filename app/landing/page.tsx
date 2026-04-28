import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ウド知恵 - AI株式教育プラットフォーム',
  description: 'AIを活用した金融教育プラットフォーム。体系的な金融コースとAI学習アシスタントで、投資の基礎から応用まで段階的に学べます。投資助言ではありません。',
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0e141a] text-white overflow-x-hidden">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-[#0e141a]/90 backdrop-blur-md border-b border-white/10">
        <div className="flex justify-between items-center px-5 py-3">
          <span className="text-lg font-bold tracking-widest text-[#00E676]">ウド知恵</span>
          <Link
            href="/sign-in"
            className="text-xs font-bold tracking-widest uppercase text-[#00E676] border border-[#00E676] px-4 py-1.5 rounded-full hover:bg-[#00E676]/10 transition-colors"
          >
            ログイン
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-5 pt-12 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00E676]/5 to-transparent pointer-events-none" />
        <div className="relative">
          <span className="inline-block font-manrope text-[10px] font-bold tracking-widest uppercase text-[#00E676] mb-4 bg-[#00E676]/10 px-3 py-1 rounded-full">
            🤖 AI搭載
          </span>
          <h1 className="text-3xl font-bold leading-tight mb-4">
            AIで学ぶ
            <br />
            <span className="text-[#00E676]">株式教育</span>
          </h1>
          <p className="text-base text-[#94A3B8] leading-relaxed mb-8">
            AI学習アシスタントと体系的な金融コースで、投資の基礎から応用まで自分のペースで段階的に学習できます。
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/sign-up"
              className="w-full text-center font-bold text-sm tracking-widest uppercase bg-gradient-to-r from-[#00E676] to-[#00C853] text-[#0e141a] py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              今すぐ無料で始める →
            </Link>
            <Link
              href="/"
              className="w-full text-center text-sm text-[#94A3B8] py-2 hover:text-white transition-colors"
            >
              詳しく見る
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
                AI学習サポート
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
            {/* Learning Info */}
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm font-semibold">学習進捗</div>
                <div className="text-xs text-[#94A3B8]">ファンダメンタルズ分析</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-[#00E676]">8/12 完了</div>
                <div className="text-xs text-[#94A3B8]">モジュール進捗</div>
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
                AIが復習すべきポイントを自動検出。理解度に応じて学習パスを最適化します。
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="px-5 mb-12">
        <h2 className="text-xl font-bold mb-6">学習の特長</h2>
        <div className="space-y-4">
          {[
            {
              icon: '🧠',
              title: 'AIアダプティブラーニング',
              desc: '学習進捗に応じてコースの難易度と学習パスを調整し、効率的な学習体験をサポートします。',
              color: '#00E676',
            },
            {
              icon: '📊',
              title: 'マーケットデータ解説',
              desc: 'グローバル金融市場のトレンド変化を学習の参考情報としてお届け。教育目的の市場解説コンテンツを提供します。',
              color: '#b0c6ff',
            },
            {
              icon: '🎯',
              title: '体系的カリキュラム',
              desc: 'ファンダメンタルズ分析からクオンツ戦略まで、40+モジュールで投資知識を体系的に学べます。',
              color: '#ffe37a',
            },
            {
              icon: '🔒',
              title: '安心のセキュリティ',
              desc: '業界標準のデータ暗号化で学習データを保護し、安心してご利用いただけます。',
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
          <div className="text-3xl font-bold mb-1">1,000+</div>
          <div className="text-sm text-[#94A3B8] mb-4">登録受講者</div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { num: '40+', label: '学習モジュール' },
              { num: '92%', label: '満足度（調査）' },
              { num: '24/7', label: 'AI学習サポート' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-lg font-bold text-[#00E676]">{stat.num}</div>
                <div className="text-[10px] text-[#94A3B8]">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-[#94A3B8] mt-3">※ 登録受講者数は2026年3月時点。満足度はサービス内アンケート調査に基づきます。</p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-5 mb-12">
        <div className="bg-[#1a2027] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-[#00E676]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold text-[#00E676]">教育サービスであること</span>
          </div>
          <p className="text-sm text-[#dde3ec] leading-relaxed mb-3">
            ウド知恵は金融知識の習得をサポートする教育プラットフォームです。投資助言や金融商品の推奨は行っておりません。
          </p>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            ※ 投資に関する決定はご自身の判断と責任で行ってください。過去の実績は将来の成果を保証するものではありません。
          </p>
        </div>
      </section>

      {/* Pricing Quick Look */}
      <section className="px-5 mb-12">
        <h2 className="text-xl font-bold mb-6">シンプルな料金プラン</h2>
        <div className="bg-gradient-to-br from-[#1a2027] to-[#0e141a] border border-[#00E676]/30 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#00E676] text-[#0e141a] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-bl-lg">
            おすすめ
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">スタンダード</h3>
            <p className="text-xs text-[#94A3B8]">全コースアクセス ・ AI学習サポート付き</p>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold text-[#00E676]">¥2,980</span>
            <span className="text-sm text-[#94A3B8]">/月</span>
          </div>
          <ul className="space-y-3 mb-6">
            {['AI学習アシスタント', '40+モジュール全アクセス', '月次マーケット解説セッション', '分析フレームワークテンプレート'].map((item, i) => (
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
            スタンダードプランで始める →
          </Link>
          <p className="text-center text-[10px] text-[#94A3B8] mt-3">7日間無料トライアル ・ いつでもキャンセル可 ・ トライアル終了後に自動課金</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-16">
        <div className="bg-gradient-to-br from-[#00E676]/10 to-[#0e141a] border border-[#00E676]/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">学習を始めましょう</h2>
          <p className="text-sm text-[#94A3B8] mb-6">
            多くの学習者とともに、AIで金融知識を身につけていきましょう。
          </p>
          <Link
            href="/sign-up"
            className="inline-block font-bold text-sm tracking-widest uppercase bg-gradient-to-r from-[#00E676] to-[#00C853] text-[#0e141a] px-10 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            無料で始める →
          </Link>
          <div className="mt-4">
            <Link href="/sign-in" className="text-xs text-[#94A3B8] hover:text-white transition-colors">
              アカウントをお持ちですか？今すぐログイン →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-5 py-8">
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold tracking-widest text-[#00E676]">ウド知恵</span>
          <span className="text-[10px] text-[#94A3B8]">© 2026 ウド知恵</span>
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <Link href="/privacy" className="text-xs text-[#94A3B8] hover:text-[#00E676] transition-colors">プライバシーポリシー</Link>
          <Link href="/terms" className="text-xs text-[#94A3B8] hover:text-[#00E676] transition-colors">利用規約</Link>
          <Link href="/contact" className="text-xs text-[#94A3B8] hover:text-[#00E676] transition-colors">お問い合わせ</Link>
        </div>
        <p className="text-[11px] text-[#94A3B8] mt-4 text-center leading-relaxed">
          ※ 本サービスは金融教育を目的としており、投資助言や金融商品の推奨を行うものではありません。投資に関する決定はご自身の判断と責任で行ってください。過去の実績は将来の成果を保証するものではありません。
        </p>
      </footer>
    </div>
  )
}
