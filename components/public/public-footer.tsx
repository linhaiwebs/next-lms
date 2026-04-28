import Link from 'next/link'

export function PublicFooter() {
  return (
    <footer className="bg-[#1A2B3C] border-t border-[#2D3748]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-left">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl font-bold text-white mb-4 tracking-widest">ウド知恵</div>
            <p className="text-sm text-[#94A3B8] mb-6 leading-relaxed">
              AIと体系的学習で、金融知識の習得をサポートする教育プラットフォーム。
            </p>
            <div className="text-xs text-[#94A3B8]">© 2026 ウド知恵. All rights reserved.</div>
          </div>

          {/* Platform */}
          <div>
            <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#CBD5E1] mb-4 block opacity-60">
              プラットフォーム
            </span>
            <div className="flex flex-col gap-3">
              <Link className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-colors" href="/courses">コース一覧</Link>
              <Link className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-colors" href="/features">AI機能</Link>
              <Link className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-colors" href="/pricing">料金プラン</Link>
              <Link className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-colors" href="/guide">学習の流れ</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#CBD5E1] mb-4 block opacity-60">
              サポート
            </span>
            <div className="flex flex-col gap-3">
              <Link className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-colors" href="/faq">よくある質問</Link>
              <Link className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-colors" href="/contact">お問い合わせ</Link>
              <Link className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-colors" href="/about">運営会社</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#CBD5E1] mb-4 block opacity-60">
              法務情報
            </span>
            <div className="flex flex-col gap-3">
              <Link className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-colors" href="/privacy">プライバシーポリシー</Link>
              <Link className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-colors" href="/terms">利用規約</Link>
              <Link className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-colors" href="/terms#commercial">特定商取引法</Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-[#2D3748]">
          <p className="text-xs text-[#94A3B8] leading-relaxed max-w-4xl">
            ※ 本サービスは金融教育を目的としており、投資助言や金融商品の推奨を行うものではありません。投資に関する決定はご自身の判断と責任で行ってください。過去の実績は将来の成果を保証するものではありません。株式投資にはリスクが伴います。
          </p>
        </div>
      </div>
    </footer>
  )
}
