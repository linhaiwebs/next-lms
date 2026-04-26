import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | Lumina Finance',
  description: 'Lumina Financeのプライバシーポリシー。お客様の個人情報の取り扱いについてご説明します。',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] font-sans antialiased">
      <header className="sticky top-0 z-50 w-full bg-[#F8F9FA] border-b border-[#E1E4E8]">
        <div className="flex justify-between items-center max-w-[800px] mx-auto w-full px-6 py-4">
          <Link href="/" className="text-xl font-bold tracking-widest text-[#1A2B3C]">
            LUMINA FINANCE
          </Link>
          <Link
            href="/sign-in"
            className="font-serif font-medium tracking-tight text-[#1A2B3C] hover:text-[#008080] transition-colors duration-300"
          >
            ログイン
          </Link>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-6 py-12 md:py-16">
        <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#191c1d] mb-8">
          プライバシーポリシー
        </h1>
        <div className="text-sm text-[#44474c] leading-relaxed space-y-6">
          <p>最終更新日：2025年1月1日</p>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">1. はじめに</h2>
            <p>
              Lumina Finance（以下「当社」）は、お客様のプライバシーを尊重し、個人情報の保護に努めています。
              本プライバシーポリシーは、当社が収集する個人情報の種類、その利用目的、および保護措置について説明します。
              本サービスをご利用いただくことで、本ポリシーに同意したものとみなされます。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">2. 収集する情報</h2>
            <p>当社は以下の情報を収集する場合があります：</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>アカウント登録時に提供される情報（氏名、メールアドレス等）</li>
              <li>サービス利用時に自動的に収集される情報（IPアドレス、ブラウザ情報、利用ログ等）</li>
              <li>学習進捗やコース完了状況に関するデータ</li>
              <li>お問い合わせやフィードバックで提供された情報</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">3. 情報の利用目的</h2>
            <p>収集した情報は以下の目的で利用します：</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>サービスの提供および改善</li>
              <li>パーソナライズされた学習体験の提供</li>
              <li>アカウント管理および認証</li>
              <li>お客様への重要なお知らせの送信</li>
              <li>サービスの安全性とセキュリティの維持</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">4. 情報の保護</h2>
            <p>
              当社は、お客様の個人情報を保護するため、業界標準の暗号化技術（SSL/TLS）を利用し、
              安全なサーバー環境でデータを管理しています。また、従業員のアクセス権限を最小限に制限し、
              定期的なセキュリティ監査を実施しています。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">5. 第三者への開示</h2>
            <p>
              当社は、以下の場合を除き、お客様の個人情報を第三者に開示することはありません：
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>お客様の同意がある場合</li>
              <li>法令に基づく要請がある場合</li>
              <li>サービス提供に必要な業務委託先（決済代行業者等）に対する場合</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">6. Cookieの使用</h2>
            <p>
              当社のサービスは、ユーザー体験の向上と分析のためにCookieを使用しています。
              ブラウザの設定によりCookieを無効にすることができますが、その場合、一部の機能が正常に動作しない可能性があります。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">7. お客様の権利</h2>
            <p>お客様は以下の権利を有します：</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>保有する個人情報の開示請求</li>
              <li>個人情報の訂正または削除の請求</li>
              <li>データポータビリティの権利</li>
              <li>マーケティング通信の受信拒否</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">8. ポリシーの変更</h2>
            <p>
              当社は、必要に応じて本ポリシーを更新する場合があります。重要な変更がある場合は、
              サービス内での通知またはメールにてお知らせします。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-3">9. お問い合わせ</h2>
            <p>
              本プライバシーポリシーに関するご質問は、<Link href="/contact" className="text-[#006a6a] hover:underline">お問い合わせページ</Link>よりご連絡ください。
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#c4c6cd]">
          <Link href="/" className="text-[#006a6a] hover:underline text-sm">
            ← トップページに戻る
          </Link>
        </div>
      </main>

      <footer className="bg-[#1A2B3C] border-t border-[#2D3748]">
        <div className="max-w-[800px] mx-auto px-6 py-8 text-center">
          <div className="text-xs text-[#94A3B8]">© 2025 Lumina Finance. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
