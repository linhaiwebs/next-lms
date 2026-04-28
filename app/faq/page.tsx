'use client'

import Link from 'next/link'
import { useState } from 'react'
import { PublicHeader, PublicFooter } from '@/components/public'

const faqData = [
  {
    category: 'サービス全般',
    items: [
      { q: 'ウド知恵はどんなサービスですか？', a: 'ウド知恵は、AI技術を活用した金融教育プラットフォームです。株式投資、ファンダメンタルズ分析、テクニカル分析など、体系的な金融コースをオンラインで提供しています。AI学習アシスタントが一人ひとりの学習ペースに合わせてサポートします。' },
      { q: '投資助言サービスですか？', a: 'いいえ、ウド知恵は教育サービスであり、投資助言や金融商品の推奨を行うものではありません。特定の銘柄の売買推奨や投資戦略の提案は行っておりません。金融知識の習得をサポートすることに専念しています。' },
      { q: '初心者でも利用できますか？', a: 'はい、初心者向けのコースを多数ご用意しています。「株式投資の基礎」や「金融市場の仕組み」などの入門コースから始めることができます。AIが学習レベルに応じて最適なコースを提案します。' },
      { q: 'スマートフォンからも利用できますか？', a: 'はい、スマートフォン、タブレット、PCのいずれでもご利用いただけます。ブラウザベースのサービスで、いつでもどこでも学習できます。' },
    ],
  },
  {
    category: 'コース・学習',
    items: [
      { q: 'どのようなコースがありますか？', a: '入門・中級・上級の3レベルで、株式投資の基礎、ファンダメンタルズ分析、テクニカル分析、ポートフォリオ構築、デリバティブ、クオンツ分析など、40以上の学習モジュールを提供しています。各コースには動画レッスン、演習問題、ケーススタディが含まれます。' },
      { q: 'コースの完了目安時間は？', a: 'コースにより異なりますが、1モジュールあたり約2時間が目安です。入門コースは8モジュール（約16時間）、中級コースは7〜12モジュール（約14〜24時間）となっています。自分のペースで進められます。' },
      { q: 'AI学習アシスタントとは何ですか？', a: 'AI学習アシスタントは、学習中の疑問に対応するAIチャット機能です。金融用語の解説、計算問題のヒント、学習内容の補足説明などを提供します。スタンダードプラン以上でご利用いただけます。' },
      { q: 'コースの途中でやめても大丈夫ですか？', a: 'はい、いつでも学習を一時停止できます。再開時は前回の位置から続きを学習でき、AIが復習すべきポイントを自動で提案します。' },
      { q: '複数のコースを同時に受講できますか？', a: 'はい、フリープランでは同時受講は3コースまで、スタンダード以上のプランでは制限なく複数コースを並行して受講できます。' },
    ],
  },
  {
    category: '料金・支払い',
    items: [
      { q: '無料プランと有料プランの違いは？', a: 'フリープランは入門コース3本までアクセス可能で、基本の演習問題と用語集がご利用いただけます。スタンダードプランは全コースアクセス、AI学習アシスタント、ケーススタディ、月次セッションなどが含まれます。詳しくは料金ページをご覧ください。' },
      { q: '無料トライアルはありますか？', a: 'はい、スタンダードプラン・プロフェッショナルプランともに7日間の無料トライアルがあります。トライアル期間中に解約すれば料金はかかりません。' },
      { q: '支払い方法は？', a: 'クレジットカード（Visa、Mastercard、American Express）とデビットカードに対応しています。' },
      { q: '解約方法を教えてください', a: 'アカウント設定の「サブスクリプション管理」からいつでも解約可能です。解約後は現在の課金期間の終了までサービスをご利用いただけます。' },
      { q: '返金は可能ですか？', a: 'ご利用開始後14日以内であれば、理由を問わず全額返金に対応いたします。お問い合わせページよりご連絡ください。' },
    ],
  },
  {
    category: '技術・セキュリティ',
    items: [
      { q: '個人情報は安全ですか？', a: 'はい、業界標準のSSL/TLS暗号化でデータを保護しています。個人情報は安全なサーバー環境で管理され、従業員のアクセス権限は最小限に制限されています。詳しくはプライバシーポリシーをご覧ください。' },
      { q: '学習データはどのように使われますか？', a: '学習データは、学習体験の向上とパーソナライズにのみ利用されます。第三者に販売・共有することはありません。' },
      { q: '推奨ブラウザを教えてください', a: 'Google Chrome、Safari、Firefox、Edgeの最新版に対応しています。JavaScriptを有効にしてご利用ください。' },
    ],
  },
]

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#e1e3e4]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left hover:text-[#006a6a] transition-colors"
      >
        <span className="font-medium text-sm pr-4">{q}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-4 text-sm text-[#44474c] leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] font-sans antialiased">
      <PublicHeader />

      {/* Hero */}
      <section className="bg-[#1A2B3C] text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
          <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#76d6d5] block mb-3">FAQ</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">よくある質問</h1>
          <p className="text-base text-[#94A3B8] max-w-2xl leading-relaxed">
            ウド知恵についてよくいただくご質問にお答えします。下記にないご質問は、お問い合わせページよりご連絡ください。
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="max-w-[900px] mx-auto px-6 md:px-16 py-12 md:py-16">
        {faqData.map((section, si) => (
          <div key={si} className="mb-12 last:mb-0">
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#006a6a] text-white text-xs flex items-center justify-center">{si + 1}</span>
              {section.category}
            </h2>
            <div className="bg-white border border-[#e1e3e4] rounded-lg px-6">
              {section.items.map((item, i) => (
                <AccordionItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="bg-white border-y border-[#e1e3e4]">
        <div className="max-w-[900px] mx-auto px-6 md:px-16 py-12 text-center">
          <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">お探しの回答が見つかりませんか？</h2>
          <p className="text-sm text-[#44474c] mb-6">お問い合わせフォームよりご質問をお寄せください。通常1〜2営業日以内にご回答いたします。</p>
          <Link
            href="/contact"
            className="inline-block font-manrope text-xs font-bold tracking-widest uppercase bg-[#1A2B3C] text-white px-8 py-3 rounded hover:opacity-90 transition-opacity"
          >
            お問い合わせ
          </Link>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
