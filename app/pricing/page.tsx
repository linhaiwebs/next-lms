import Link from 'next/link'
import type { Metadata } from 'next'
import { PublicHeader, PublicFooter } from '@/components/public'

export const metadata: Metadata = {
  title: '料金プラン | ウド知恵',
  description: '無料プランからスタンダードまで、学習スタイルに合わせて選べる料金体系。7日間無料トライアル付き。',
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] font-sans antialiased">
      <PublicHeader />

      {/* Hero */}
      <section className="bg-[#1A2B3C] text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
          <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#76d6d5] block mb-3">料金プラン</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">シンプルな料金体系</h1>
          <p className="text-base text-[#94A3B8] max-w-2xl leading-relaxed">
            学習スタイルに合わせてプランを選べます。どのプランも7日間の無料トライアル付き。いつでもキャンセル可能です。
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Free Plan */}
          <div className="bg-white border border-[#e1e3e4] rounded-lg p-8 flex flex-col">
            <h3 className="font-serif text-xl font-semibold text-[#191c1d] mb-1">フリー</h3>
            <p className="text-sm text-[#5F6368] mb-6">まずは試してみたい方に</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#191c1d]">¥0</span>
              <span className="text-sm text-[#5F6368]">/月</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                '入門コース3本まで',
                '基本の演習問題',
                '用語集へのアクセス',
                '進捗ダッシュボード',
                'コミュニティ参加',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[#44474c]">
                  <svg className="w-4 h-4 text-[#74777d] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className="block w-full py-3 border border-[#c4c6cd] text-[#191c1d] text-center font-manrope text-xs font-bold tracking-widest uppercase rounded hover:border-[#041627] transition-colors"
            >
              無料で始める
            </Link>
          </div>

          {/* Standard Plan */}
          <div className="bg-white border-2 border-[#006a6a] rounded-lg p-8 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#006a6a] text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full">
              おすすめ
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#191c1d] mb-1">スタンダード</h3>
            <p className="text-sm text-[#5F6368] mb-6">本格的に学習したい方に</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#006a6a]">¥2,980</span>
              <span className="text-sm text-[#5F6368]">/月</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                '全コースアクセス（40+モジュール）',
                'AI学習アシスタント',
                '全演習問題・ケーススタディ',
                '月次マーケット解説セッション',
                '分析フレームワークテンプレート',
                '進捗証明書の発行',
                '学習ノート機能',
                '優先サポート',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[#44474c]">
                  <svg className="w-4 h-4 text-[#006a6a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className="block w-full py-3 bg-[#006a6a] text-white text-center font-manrope text-xs font-bold tracking-widest uppercase rounded hover:opacity-90 transition-opacity"
            >
              7日間無料トライアル
            </Link>
          </div>

          {/* Professional Plan */}
          <div className="bg-white border border-[#e1e3e4] rounded-lg p-8 flex flex-col">
            <h3 className="font-serif text-xl font-semibold text-[#191c1d] mb-1">プロフェッショナル</h3>
            <p className="text-sm text-[#5F6368] mb-6">より深く専門的に学ぶ方に</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#af8c47]">¥5,980</span>
              <span className="text-sm text-[#5F6368]">/月</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                'スタンダードの全機能',
                '上級コースへの先行アクセス',
                '1対1の学習相談（月2回）',
                '企業価値評価ツール',
                '詳細な学習分析レポート',
                'API連携機能',
                '専任サポート担当',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[#44474c]">
                  <svg className="w-4 h-4 text-[#af8c47] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className="block w-full py-3 border border-[#af8c47] text-[#af8c47] text-center font-manrope text-xs font-bold tracking-widest uppercase rounded hover:bg-[#af8c47]/10 transition-colors"
            >
              7日間無料トライアル
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white border-y border-[#e1e3e4]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#191c1d] mb-8">プラン比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e1e3e4]">
                  <th className="text-left py-3 pr-4 font-medium text-[#5F6368]">機能</th>
                  <th className="text-center py-3 px-4 font-medium text-[#5F6368]">フリー</th>
                  <th className="text-center py-3 px-4 font-medium text-[#006a6a]">スタンダード</th>
                  <th className="text-center py-3 px-4 font-medium text-[#af8c47]">プロフェッショナル</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'コース数', free: '3本', standard: '全40+本', pro: '全40+本 + 先行アクセス' },
                  { feature: 'AI学習アシスタント', free: '—', standard: '○', pro: '○' },
                  { feature: '演習問題', free: '基本', standard: '全問題', pro: '全問題' },
                  { feature: 'ケーススタディ', free: '—', standard: '○', pro: '○' },
                  { feature: '進捗ダッシュボード', free: '○', standard: '○', pro: '○ + 詳細レポート' },
                  { feature: '月次セッション', free: '—', standard: '○', pro: '○ + 1対1相談' },
                  { feature: '分析テンプレート', free: '—', standard: '○', pro: '○ + 評価ツール' },
                  { feature: '証明書発行', free: '—', standard: '○', pro: '○' },
                  { feature: 'サポート', free: 'コミュニティ', standard: '優先', pro: '専任担当' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[#f0f0f0]">
                    <td className="py-3 pr-4 text-[#191c1d]">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-[#5F6368]">{row.free}</td>
                    <td className="py-3 px-4 text-center text-[#191c1d]">{row.standard}</td>
                    <td className="py-3 px-4 text-center text-[#191c1d]">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
        <h2 className="font-serif text-2xl font-semibold text-[#191c1d] mb-8">料金に関するよくある質問</h2>
        <div className="space-y-6 max-w-2xl">
          {[
            { q: '無料トライアル中に解約した場合、料金はかかりますか？', a: 'いいえ、7日間の無料トライアル期間中に解約すれば一切料金はかかりません。トライアル終了後に自動的に課金が開始されます。' },
            { q: 'プランの変更はいつでもできますか？', a: 'はい、いつでもプランのアップグレード・ダウングレードが可能です。アップグレードは即時反映、ダウングレードは次回請求サイクルから反映されます。' },
            { q: '支払い方法は何がありますか？', a: 'クレジットカード（Visa、Mastercard、American Express）、デビットカードに対応しています。' },
            { q: '返金ポリシーはありますか？', a: 'ご利用開始後14日以内であれば、理由を問わず全額返金に対応します。お問い合わせページよりご連絡ください。' },
          ].map((faq, i) => (
            <div key={i} className="border-b border-[#e1e3e4] pb-6">
              <h3 className="font-medium text-[#191c1d] mb-2">{faq.q}</h3>
              <p className="text-sm text-[#44474c] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/faq" className="text-sm text-[#006a6a] font-medium hover:underline">その他のFAQを見る →</Link>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
