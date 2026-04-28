import Link from 'next/link'
import type { Metadata } from 'next'
import { PublicHeader, PublicFooter } from '@/components/public'

export const metadata: Metadata = {
  title: '学習の流れ | ウド知恵',
  description: 'ウド知恵での学習の始め方から修了までの流れをガイド。無料登録からコース選択、AI学習アシスタントの活用まで詳しく解説。',
}

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] font-sans antialiased">
      <PublicHeader />

      {/* Hero */}
      <section className="bg-[#1A2B3C] text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
          <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#76d6d5] block mb-3">学習の流れ</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">4ステップで始める学習</h1>
          <p className="text-base text-[#94A3B8] max-w-2xl leading-relaxed">
            ウド知恵なら、登録から学習開始までスムーズ。AIがあなたの学習をサポートする流れをご紹介します。
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
        <div className="space-y-12">
          {[
            {
              step: 1,
              title: 'アカウントを作成',
              desc: 'メールアドレスだけで無料登録完了。クレジットカード不要で、すぐに学習を始められます。',
              details: [
                'メールアドレスとパスワードを入力',
                'メール認証でアカウント有効化',
                '学習経験と興味分野を設定（AIが最適なコースを提案）',
                '完了！すぐに学習開始',
              ],
            },
            {
              step: 2,
              title: 'コースを選ぶ',
              desc: 'AIがあなたに最適なコースを提案。自分のレベルや興味に合わせて自由に選ぶこともできます。',
              details: [
                'AIによるパーソナライズされたコース推奨',
                '入門・中級・上級のレベル別検索',
                'コース概要とカリキュラムを事前確認',
                '複数コースの並行学習も可能',
              ],
            },
            {
              step: 3,
              title: 'AIと一緒に学ぶ',
              desc: '動画レッスン、演習問題、ケーススタディを通じて学習。AIアシスタントがいつでも質問に対応します。',
              details: [
                '5〜15分の動画レッスンでスキマ時間に学習',
                'インタラクティブな演習で理解度を確認',
                'わからないことはAIアシスタントに即座に質問',
                '理解度に応じてAIが学習ペースを自動調整',
              ],
            },
            {
              step: 4,
              title: '成果を確認・次へ進む',
              desc: '進捗ダッシュボードで学習成果を可視化。コース完了時には証明書が発行され、次のステップへ進めます。',
              details: [
                'リアルタイムの進捗と理解度スコアを確認',
                'コース完了時に進捗証明書を発行',
                'AIが次におすすめのコースを提案',
                '学習レポートで振り返り',
              ],
            },
          ].map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#006a6a] flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                {i < 3 && (
                  <div className="hidden md:block w-0.5 h-full bg-[#006a6a]/20 mx-auto mt-4" />
                )}
              </div>
              <div className="flex-grow">
                <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-2">{step.title}</h2>
                <p className="text-sm text-[#44474c] leading-relaxed mb-4">{step.desc}</p>
                <div className="bg-white border border-[#e1e3e4] rounded-lg p-6">
                  <ul className="space-y-3">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[#44474c]">
                        <svg className="w-4 h-4 text-[#006a6a] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white border-y border-[#e1e3e4]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#191c1d] mb-8">1日の学習イメージ</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { time: '朝10分', title: '復習タイム', desc: '前回の学習内容をAIがピックアップして復習。忘却曲線に基づき、最適なタイミングでおさらい。' },
              { time: '昼15分', title: '動画レッスン', desc: '新しいトピックの動画レッスンを視聴。短いセッションで集中して学習。' },
              { time: '夕10分', title: '演習問題', desc: '理解度を確認する演習問題に挑戦。間違えた問題はAIが解説付きで復習プランに追加。' },
              { time: '夜5分', title: '振り返り', desc: '1日の学習レポートを確認。進捗と理解度スコアを見て、翌日の学習計画を立てる。' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#006a6a] bg-[#006a6a]/10 px-3 py-1 rounded-full">{item.time}</span>
                <h3 className="font-semibold text-[#191c1d] mt-3 mb-2">{item.title}</h3>
                <p className="text-sm text-[#44474c] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#5F6368] mt-8">※ 1日40分の学習でも、月に約20時間の学習時間を確保できます</p>
        </div>
      </section>

      {/* Support */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
        <div className="bg-[#f8f9fa] border border-[#e1e3e4] rounded-lg p-8 md:p-10 text-center">
          <h2 className="font-serif text-2xl font-semibold text-[#191c1d] mb-3">学習に不安がありますか？</h2>
          <p className="text-sm text-[#44474c] max-w-lg mx-auto mb-6 leading-relaxed">
            AIアシスタントが学習をサポート。さらに、コミュニティで他の学習者と交流したり、FAQで疑問を解消したりできます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/faq" className="text-sm text-[#006a6a] font-medium hover:underline">よくある質問を見る</Link>
            <span className="hidden sm:inline text-[#c4c6cd]">|</span>
            <Link href="/contact" className="text-sm text-[#006a6a] font-medium hover:underline">お問い合わせ</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2B3C]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">今日から学習を始めましょう</h2>
          <p className="text-sm text-[#94A3B8] max-w-lg mx-auto mb-6">無料プランで登録するだけ。AIがあなたの学習をサポートします。</p>
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
