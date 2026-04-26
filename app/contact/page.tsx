import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ | Lumina Finance',
  description: 'Lumina Financeへのお問い合わせ。ご質問やフィードバックをお待ちしております。',
}

export default function ContactPage() {
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
        <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#191c1d] mb-4">
          お問い合わせ
        </h1>
        <p className="text-lg text-[#44474c] mb-12">
          ご質問、フィードバック、またはパートナーシップについてのお問い合わせをお待ちしております。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-[#c4c6cd] rounded-lg p-6 hover:border-[#006a6a] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#edeeef] flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#1a2b3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#191c1d] mb-2">メール</h3>
            <p className="text-sm text-[#44474c] mb-3">一般的なお問い合わせ</p>
            <span className="text-sm text-[#006a6a] font-medium">support@luminafinance.com</span>
          </div>

          <div className="bg-white border border-[#c4c6cd] rounded-lg p-6 hover:border-[#006a6a] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#edeeef] flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#1a2b3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#191c1d] mb-2">パートナーシップ</h3>
            <p className="text-sm text-[#44474c] mb-3">企業・機関向けのお問い合わせ</p>
            <span className="text-sm text-[#006a6a] font-medium">partnership@luminafinance.com</span>
          </div>
        </div>

        <div className="bg-white border border-[#c4c6cd] rounded-lg p-8">
          <h2 className="font-serif text-xl font-semibold text-[#191c1d] mb-6">メッセージを送る</h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#191c1d] mb-1.5">お名前</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-[#c4c6cd] rounded bg-white text-sm focus:outline-none focus:border-[#006a6a] transition-colors"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#191c1d] mb-1.5">メールアドレス</label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 border border-[#c4c6cd] rounded bg-white text-sm focus:outline-none focus:border-[#006a6a] transition-colors"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#191c1d] mb-1.5">お問い合わせ種別</label>
              <select className="w-full px-4 py-2.5 border border-[#c4c6cd] rounded bg-white text-sm focus:outline-none focus:border-[#006a6a] transition-colors">
                <option>一般的なお問い合わせ</option>
                <option>テクニカルサポート</option>
                <option>料金・プランについて</option>
                <option>パートナーシップ</option>
                <option>その他</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#191c1d] mb-1.5">メッセージ</label>
              <textarea
                rows={5}
                className="w-full px-4 py-2.5 border border-[#c4c6cd] rounded bg-white text-sm focus:outline-none focus:border-[#006a6a] transition-colors resize-none"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>
            <button
              type="submit"
              className="font-manrope text-xs font-bold tracking-widest uppercase bg-[#1A2B3C] text-white px-8 py-3 rounded hover:opacity-90 transition-opacity"
            >
              送信する
            </button>
          </form>
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
