import Link from 'next/link'
import type { Metadata } from 'next'
import { PublicHeader, PublicFooter } from '@/components/public'

export const metadata: Metadata = {
  title: '運営会社 | ウド知恵',
  description: 'ウド知恵の運営会社情報、ミッション、チーム紹介。AIと金融教育の融合で、誰もが金融知識を身につけられる学習環境を目指しています。',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] font-sans antialiased">
      <PublicHeader />

      {/* Hero */}
      <section className="bg-[#1A2B3C] text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
          <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#76d6d5] block mb-3">運営会社</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">金融教育を、すべての人に</h1>
          <p className="text-base text-[#94A3B8] max-w-2xl leading-relaxed">
            ウド知恵は、AI技術と金融教育の融合により、誰もが金融知識を身につけられる学習環境を目指しています。
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#006a6a] block mb-3">ミッション</span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#191c1d] mb-4">知識の格差を、テクノロジーで埋める</h2>
            <p className="text-sm text-[#44474c] leading-relaxed mb-4">
              金融リテラシーの格差は、社会の不平等を拡大させる一因となっています。専門的な金融知識は、これまで一部の専門家や機関に独占されてきました。
            </p>
            <p className="text-sm text-[#44474c] leading-relaxed">
              私たちはAI技術を活用することで、高品質な金融教育をより多くの人に届けます。一人ひとりの学習ペースと理解度に合わせたパーソナライズされた学習体験で、金融知識の習得をサポートします。
            </p>
          </div>
          <div className="bg-white border border-[#e1e3e4] rounded-lg p-8">
            <div className="space-y-6">
              {[
                { label: 'アクセシビリティ', desc: '場所や時間を問わず、誰もが学べる環境を提供' },
                { label: 'パーソナライズ', desc: 'AIにより一人ひとりに最適な学習体験を実現' },
                { label: '実践重視', desc: '実際の市場データを題材としたケーススタディで実践力を育成' },
                { label: '継続サポート', desc: '学習の途中で挫折しないよう、AIが伴走' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#006a6a]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-[#006a6a]">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#191c1d] mb-0.5">{item.label}</h3>
                    <p className="text-sm text-[#44474c]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white border-y border-[#e1e3e4]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
          <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#006a6a] block mb-3">バリュー</span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#191c1d] mb-8">私たちの大切にしていること</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '教育であること',
                desc: '私たちは教育プラットフォームです。投資助言や金融商品の推奨ではなく、知識とスキルの習得をサポートすることに専念します。',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                  </svg>
                ),
              },
              {
                title: '透明性',
                desc: '料金体系はシンプルに。サービス内容は明確に。隠れた費用や不透明な条件は設けません。学習者が安心して利用できる環境を重視します。',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: '継続的な改善',
                desc: '学習者のフィードバックをもとに、常にサービスを改善します。AI技術の進化を取り入れ、より良い学習体験を追求し続けます。',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                  </svg>
                ),
              },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#edeeef] flex items-center justify-center text-[#1a2b3c] mb-4">
                  {value.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#191c1d] mb-2">{value.title}</h3>
                <p className="text-sm text-[#44474c] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
        <h2 className="font-serif text-2xl font-semibold text-[#191c1d] mb-8">会社概要</h2>
        <div className="bg-white border border-[#e1e3e4] rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {[
                { label: 'サービス名', value: 'ウド知恵' },
                { label: '運営', value: 'ウド知恵株式会社' },
                { label: '設立', value: '2024年' },
                { label: '所在地', value: '東京都' },
                { label: '事業内容', value: 'AI搭載金融教育プラットフォームの運営' },
                { label: '連絡先', value: 'support@udochie.jp' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-[#f0f0f0] last:border-0">
                  <td className="py-4 px-6 bg-[#f8f9fa] font-medium text-[#191c1d] w-1/4">{row.label}</td>
                  <td className="py-4 px-6 text-[#44474c]">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2B3C]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">一緒に金融教育の未来を創りましょう</h2>
          <p className="text-sm text-[#94A3B8] max-w-lg mx-auto mb-6">まずは無料プランで始めてみませんか。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up" className="inline-block font-manrope text-xs font-bold tracking-widest uppercase bg-[#006a6a] text-white px-8 py-3 rounded hover:opacity-90 transition-opacity">無料で始める</Link>
            <Link href="/contact" className="inline-block font-manrope text-xs font-bold tracking-widest uppercase border border-[#94A3B8] text-white px-8 py-3 rounded hover:bg-white/10 transition-colors">お問い合わせ</Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
