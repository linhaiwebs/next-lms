import Link from 'next/link'
import type { Metadata } from 'next'
import { PublicHeader, PublicFooter } from '@/components/public'

export const metadata: Metadata = {
  title: 'AI機能 | ウド知恵',
  description: 'アダプティブラーニング、AI学習アシスタント、進捗ダッシュボードなど、ウド知恵の学習を支えるAI機能をご紹介。投資助言ではありません。',
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] font-sans antialiased">
      <PublicHeader />

      {/* Hero */}
      <section className="bg-[#1A2B3C] text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
          <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#76d6d5] block mb-3">AI機能</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">学習を加速するAIテクノロジー</h1>
          <p className="text-base text-[#94A3B8] max-w-2xl leading-relaxed">
            ウド知恵はAI技術を教育に活用し、一人ひとりの学習者に最適な学習体験を提供します。アダプティブラーニングから学習サポートまで、多彩な機能で学びを支えます。
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-[#191c1d] mb-8">コア機能</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'AIアダプティブラーニング',
              desc: '学習進捗と理解度をAIが分析し、コースの難易度や学習パスを自動調整。無理なく効率的に学べるよう、一人ひとりに最適な学習体験を提供します。',
              details: ['理解度に応じた自動難易度調整', '弱点分野の自動検出と復習提案', '学習ペースの最適化', 'カスタマイズされた学習プラン'],
              icon: '🧠',
            },
            {
              title: 'AI学習アシスタント',
              desc: 'AIアシスタントが学習中の疑問にお答えします。金融用語の解説から計算問題のヒントまで、学習を妨げないタイミングでサポート。',
              details: ['AIによる自動応答', '金融専門用語の即時解説', '段階的なヒント提供', 'コンテキストを理解した回答'],
              icon: '🤖',
            },
            {
              title: '進捗ダッシュボード',
              desc: '学習の進捗状況、完了率、理解度スコアを視覚的に把握。目標設定から振り返りまで、データに基づいた学習管理をサポートします。',
              details: ['視覚的な進捗トラッキング', '理解度スコアの可視化', '学習目標の設定と管理', '週次・月次の学習レポート'],
              icon: '📊',
            },
            {
              title: 'マーケットデータ解説',
              desc: '市場データを参考情報として活用した学習コンテンツで、実践的な知識を習得。実際の市場動向を題材とした演習問題やケーススタディを提供します。',
              details: ['市場データを活用した学習', '実践的なケーススタディ', '市場動向を題材とした演習', 'ニュース解説型コンテンツ'],
              icon: '📈',
            },
          ].map((feature, i) => (
            <div key={i} className="bg-white border border-[#e1e3e4] rounded-lg p-8 hover:border-[#006a6a] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{feature.icon}</span>
                <h3 className="font-serif text-xl font-semibold text-[#191c1d]">{feature.title}</h3>
              </div>
              <p className="text-sm text-[#44474c] leading-relaxed mb-4">{feature.desc}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-[#44474c]">
                    <svg className="w-4 h-4 text-[#006a6a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Tools */}
      <section className="bg-white border-y border-[#e1e3e4]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-[#191c1d] mb-8">学習ツール</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '動画レッスン', desc: 'プロの講師による解説動画。各モジュール5〜15分で、スキマ時間に学習可能。', icon: '🎬' },
              { title: 'インタラクティブ演習', desc: '理解度を確認する演習問題。即座にフィードバックが得られ、定着度を向上。', icon: '✏️' },
              { title: 'ケーススタディ', desc: '実際の市場データを用いた分析演習。実践的なスキルを安全な環境で習得。', icon: '📋' },
              { title: '用語集', desc: '金融・投資に関する専門用語をいつでも検索可能。学習中に即座に確認。', icon: '📖' },
              { title: '学習ノート', desc: 'オンラインでメモを取り、重要ポイントを整理。AIが重要キーワードをハイライト。', icon: '📝' },
              { title: '進捗証明書', desc: 'コース完了時に証明書を発行。学習成果を可視化し、モチベーション維持に貢献。', icon: '🏆' },
            ].map((tool, i) => (
              <div key={i} className="bg-[#f8f9fa] border border-[#e1e3e4] rounded-lg p-6">
                <span className="text-2xl mb-3 block">{tool.icon}</span>
                <h3 className="font-semibold text-[#191c1d] mb-2">{tool.title}</h3>
                <p className="text-sm text-[#44474c] leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
        <div className="bg-[#f8f9fa] border border-[#e1e3e4] rounded-lg p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-full bg-[#006a6a]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[#006a6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-[#191c1d] mb-2">安心のセキュリティ</h3>
              <p className="text-sm text-[#44474c] leading-relaxed mb-4">
                業界標準のSSL/TLS暗号化でデータを保護。学習データや個人情報は安全なサーバー環境で管理され、従業員のアクセス権限は最小限に制限されています。
              </p>
              <div className="flex flex-wrap gap-4">
                {['SSL/TLS暗号化', 'アクセス権限制御', 'プライバシー保護'].map((item, i) => (
                  <span key={i} className="text-xs text-[#006a6a] bg-[#006a6a]/10 px-3 py-1 rounded-full">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2B3C]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">AIの力で学習体験を変えましょう</h2>
          <p className="text-sm text-[#94A3B8] max-w-lg mx-auto mb-6">無料プランですぐに始められます。AI学習アシスタントと体系的なコースで、効率的に金融知識を身につけましょう。</p>
          <Link
            href="/sign-up"
            className="inline-block font-manrope text-xs font-bold tracking-widest uppercase bg-[#006a6a] text-white px-8 py-3 rounded hover:opacity-90 transition-opacity"
          >
            無料で始める
          </Link>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
