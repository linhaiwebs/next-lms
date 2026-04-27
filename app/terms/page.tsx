import Link from 'next/link'
import { PublicHeader, PublicFooter } from '@/components/public'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '利用規約 | ウド知恵',
  description: 'ウド知恵の利用規約。サービスのご利用条件についてご説明します。',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] font-sans antialiased">
      <PublicHeader />

      <main className="max-w-[800px] mx-auto px-6 py-12 md:py-16">
        <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#191c1d] mb-8">
          利用規約
        </h1>
        <div className="text-sm text-[#44474c] leading-relaxed space-y-6">
          <p>最終更新日：2025年1月1日</p>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">1. サービスの概要</h2>
            <p>
              ウド知恵（以下「本サービス」）は、AI技術を活用した金融教育プラットフォームです。
              株式分析、ポートフォリオ管理、市場分析に関する教育コンテンツを提供します。
              本サービスは教育目的のみであり、投資助言や金融商品の推奨を目的とするものではありません。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">2. 利用資格</h2>
            <p>本サービスをご利用いただくには、以下の条件を満たす必要があります：</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>18歳以上であること</li>
              <li>本規約に同意すること</li>
              <li>正確かつ完全な登録情報を提供すること</li>
              <li>適用される法令を遵守すること</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">3. アカウント管理</h2>
            <p>
              ユーザーは、アカウント情報の正確性を維持する責任を負います。
              アカウントの不正使用が発覚した場合は、事前通知なくアカウントを停止または削除する場合があります。
              パスワードの安全管理はユーザー自身の責任となります。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">4. 禁止事項</h2>
            <p>本サービスの利用にあたり、以下の行為を禁止します：</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>法令または公序良俗に反する行為</li>
              <li>他のユーザーの権利を侵害する行為</li>
              <li>サービスの運営を妨害する行為</li>
              <li>自動化ツールによる不正アクセス</li>
              <li>コンテンツの無断複製・再配布</li>
              <li>虚偽の情報の提供</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">5. 料金および支払い</h2>
            <p>
              有料プランの料金は、登録時に表示されます。サブスクリプションは自動更新され、
              解約されるまで毎月課金されます。解約はいつでも可能であり、解約後は現在の
              課金期間の終了までサービスをご利用いただけます。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">6. 知的財産権</h2>
            <p>
              本サービスに含まれるすべてのコンテンツ（テキスト、画像、動画、ソフトウェア等）の
              知的財産権は当社に帰属します。個人利用以外の目的での複製、配布、改変は禁止されています。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">7. 免責事項</h2>
            <p>
              本サービスは教育目的で提供されており、投資助言、金融アドバイス、または
              証券取引の推奨を構成するものではありません。投資に関する決定はユーザー自身の
              判断と責任で行ってください。過去のパフォーマンスは将来の成果を保証するものではありません。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">8. サービスの変更・終了</h2>
            <p>
              当社は、事前通知することなく、サービスの内容を変更または終了する権利を留保します。
              重大な変更がある場合は、合理的な期間前に通知いたします。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">9. 準拠法および管轄</h2>
            <p>
              本規約は日本法に準拠し、解釈されるものとします。
              本規約に関する紛争は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">10. お問い合わせ</h2>
            <p>
              本利用規約に関するご質問は、<Link href="/contact" className="text-[#006a6a] hover:underline">お問い合わせページ</Link>よりご連絡ください。
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#c4c6cd]">
          <Link href="/" className="text-[#006a6a] hover:underline text-sm">
            ← トップページに戻る
          </Link>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
