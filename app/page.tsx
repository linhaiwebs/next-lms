import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lumina Finance - AI搭載金融教育プラットフォーム',
  description: '機関レベルのAIアルゴリズムチューター、体系的な金融コース。株式分析からクオンツ戦略まで、インテリジェント学習パスをカスタマイズ。',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#F8F9FA] border-b border-[#E1E4E8]">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto w-full px-6 md:px-16 py-4">
          <Link href="/" className="text-2xl font-bold tracking-widest text-[#1A2B3C]">
            LUMINA FINANCE
          </Link>
          <nav className="hidden md:flex gap-8 items-center font-serif font-medium tracking-tight">
            <a className="text-[#5F6368] hover:text-[#008080] transition-colors duration-300 cursor-pointer" href="#courses">コース</a>
            <a className="text-[#5F6368] hover:text-[#008080] transition-colors duration-300 cursor-pointer" href="#features">AI機能</a>
            <a className="text-[#5F6368] hover:text-[#008080] transition-colors duration-300 cursor-pointer" href="#pricing">料金</a>
            <a className="text-[#5F6368] hover:text-[#008080] transition-colors duration-300 cursor-pointer" href="#about">概要</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/sign-in"
              className="font-serif font-medium tracking-tight text-[#1A2B3C] hover:text-[#008080] transition-colors duration-300"
            >
              ログイン
            </Link>
            <Link
              href="/sign-up"
              className="hidden md:inline-block font-manrope text-xs font-bold tracking-widest uppercase bg-[#1A2B3C] text-white px-6 py-2 rounded hover:opacity-90 transition-opacity"
            >
              学習を始める
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 min-h-[600px]">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[#191c1d]">
            高精度AI搭載、
            <br />
            グローバル市場を掌握。
          </h1>
          <p className="text-lg text-[#44474c] max-w-lg leading-relaxed">
            先進的なアルゴリズムチューターと機関レベルの厳選コースで、金融知識を向上させましょう。体系的な学習環境で、市場を真にマスターできます。
          </p>
          <div className="flex gap-4 pt-2">
            <Link
              href="/sign-up"
              className="font-manrope text-xs font-bold tracking-widest uppercase bg-[#1A2B3C] text-white px-8 py-3 rounded hover:opacity-90 transition-opacity"
            >
              コースを見る
            </Link>
            <Link
              href="/landing"
              className="font-manrope text-xs font-bold tracking-widest uppercase border border-[#74777d] text-[#191c1d] px-8 py-3 rounded hover:bg-[#f3f4f5] transition-colors"
            >
              詳しく見る
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative h-[350px] md:h-[500px]">
          <div className="absolute inset-0 bg-white border border-[#c4c6cd] rounded-lg overflow-hidden shadow-sm">
            <div className="w-full h-full bg-gradient-to-br from-[#1A2B3C] via-[#0d1b2a] to-[#006a6a] flex items-center justify-center relative">
              {/* Decorative grid lines */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(0,106,106,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,106,106,0.3) 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
              </div>
              {/* Simulated chart */}
              <svg className="w-3/4 h-1/2 opacity-60" viewBox="0 0 400 150">
                <defs>
                  <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#006a6a" />
                    <stop offset="50%" stopColor="#76d6d5" />
                    <stop offset="100%" stopColor="#af8c47" />
                  </linearGradient>
                  <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#006a6a" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#006a6a" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,120 Q50,100 80,80 T160,60 T240,30 T320,50 T400,20" fill="none" stroke="url(#chartGrad)" strokeWidth="2" />
                <path d="M0,120 Q50,100 80,80 T160,60 T240,30 T320,50 T400,20 L400,150 L0,150 Z" fill="url(#areaGrad)" />
                <circle cx="240" cy="30" r="4" fill="#76d6d5" />
                <circle cx="240" cy="30" r="8" fill="#76d6d5" opacity="0.3" />
              </svg>
              {/* AI Overlay Panel */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-xl border border-white/20 p-4 md:p-6 rounded-lg">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#1a2b3c] block mb-1">
                      AIインサイト
                    </span>
                    <span className="text-sm text-[#191c1d] font-medium">
                      アルゴリズムトレンド検出が有効化。テクノロジーセクターにボラティリティ集積現象を検出。
                    </span>
                  </div>
                  <svg className="w-6 h-6 text-[#006a6a] flex-shrink-0 ml-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,13 L9,13 L9,3 L3,3 L3,13 Z M3,21 L9,21 L9,15 L3,15 L3,21 Z M11,21 L17,21 L17,9 L11,9 L11,21 Z M19,3 L19,21 L21,21 L21,3 L19,3 Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Curriculum Section */}
      <section id="courses" className="bg-white border-y border-[#e1e3e4]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
          <div className="mb-8 flex justify-between items-end border-b border-[#c4c6cd] pb-4">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#191c1d]">コアカリキュラム</h2>
            <Link
              href="/search"
              className="font-manrope text-xs font-bold tracking-widest uppercase text-[#006a6a] flex items-center hover:opacity-80 transition-opacity"
            >
              全コースを見る
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Course Card 1 */}
            <div className="bg-[#f8f9fa] border border-[#c4c6cd] rounded-lg p-6 hover:border-[#006a6a] transition-colors group cursor-pointer h-full flex flex-col">
              <div className="mb-4">
                <svg className="w-8 h-8 text-[#1a2b3c] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
                <h3 className="font-serif text-xl font-semibold text-[#191c1d]">株式分析とバリュエーション</h3>
              </div>
              <p className="text-sm text-[#44474c] flex-grow mb-6">
                自然言語処理を活用し、ファンダメンタルズ分析、DCFモデル、市場心理指標を習得。
              </p>
              <div className="flex justify-between items-center border-t border-[#c4c6cd] pt-4 mt-auto">
                <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#74777d]">12 モジュール</span>
                <svg className="w-5 h-5 text-[#74777d] group-hover:text-[#006a6a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            {/* Course Card 2 - Featured */}
            <div className="bg-[#f8f9fa] border border-[#c4c6cd] border-t-2 border-t-[#af8c47] rounded-lg p-6 hover:border-[#006a6a] transition-colors group cursor-pointer h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#392700] text-[#af8c47] font-manrope text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded">
                厳選
              </div>
              <div className="mb-4">
                <svg className="w-8 h-8 text-[#1a2b3c] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 1.286-.483 2.463-1.278 3.364l-6.747 7.486L5.5 9.739A5.235 5.235 0 014.25 6.375 5.256 5.256 0 019.5 1.125c1.56 0 2.955.68 3.922 1.755A5.223 5.223 0 0117.25 1.125a5.256 5.256 0 015.25 5.25z" />
                </svg>
                <h3 className="font-serif text-xl font-semibold text-[#191c1d]">デジタル資産とブロックチェーン</h3>
              </div>
              <p className="text-sm text-[#44474c] flex-grow mb-6">
                独自のAIモデルでブロックチェーンアーキテクチャ、トケノミクス、オンチェーンデータ分析を深く探求。
              </p>
              <div className="flex justify-between items-center border-t border-[#c4c6cd] pt-4 mt-auto">
                <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#74777d]">8 モジュール</span>
                <svg className="w-5 h-5 text-[#74777d] group-hover:text-[#006a6a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            {/* Course Card 3 */}
            <div className="bg-[#f8f9fa] border border-[#c4c6cd] rounded-lg p-6 hover:border-[#006a6a] transition-colors group cursor-pointer h-full flex flex-col">
              <div className="mb-4">
                <svg className="w-8 h-8 text-[#1a2b3c] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <h3 className="font-serif text-xl font-semibold text-[#191c1d]">マクロ経済分析</h3>
              </div>
              <p className="text-sm text-[#44474c] flex-grow mb-6">
                グローバル金融政策、金利動向、地政学が市場構造に与える影響を理解。
              </p>
              <div className="flex justify-between items-center border-t border-[#c4c6cd] pt-4 mt-auto">
                <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#74777d]">15 モジュール</span>
                <svg className="w-5 h-5 text-[#74777d] group-hover:text-[#006a6a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section id="features" className="max-w-[1200px] mx-auto px-6 md:px-16 py-16 md:py-20">
        <div className="text-center mb-12">
          <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#006a6a] block mb-3">
            インテリジェントエンジン
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#191c1d] mb-4">
            金融教育を再定義
          </h2>
          <p className="text-lg text-[#44474c] max-w-2xl mx-auto">
            当プラットフォームは単なるコースではありません。市場変化に継続的に適応するAI搭載学習システムです。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              ),
              title: 'アダプティブラーニングエンジン',
              desc: 'AIがあなたの理解度に応じてコースの難易度と学習パスを動的に調整。',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              ),
              title: 'リアルタイム市場インサイト',
              desc: 'アルゴリズム駆動のトレンド検出で、グローバル金融市場の動向をリアルタイムで監視。',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              ),
              title: 'AIインテリジェントチューター',
              desc: '24時間365日、AIチューターが質問に回答し、パーソナライズされた学習アドバイスを提供。',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              ),
              title: '機関レベルのセキュリティ',
              desc: 'バンクレベルのデータ暗号化で、学習進捗とトレード戦略を安全に保護。',
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white border border-[#c4c6cd] rounded-lg p-6 hover:border-[#006a6a] transition-colors group"
            >
              <div className="text-[#1a2b3c] mb-4 group-hover:text-[#006a6a] transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#191c1d] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#44474c]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#edeeef]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#191c1d] mb-4">
              最適化された構造型プラン
            </h2>
            <p className="text-lg text-[#44474c] max-w-2xl mx-auto">
              分析目標に合ったプランを選択し、機関レベルの財務分析と体系的な教育フレームワークにアクセス。
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Free Plan */}
            <div className="bg-white border border-[#c4c6cd] rounded-lg p-8 flex flex-col h-full hover:border-[#74777d] transition-colors">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-semibold text-[#191c1d] mb-2">エントリー</h3>
                <p className="text-sm text-[#44474c] h-12">基礎的な投資家に必須のフレームワーク。</p>
              </div>
              <div className="mb-8">
                <span className="font-serif text-5xl font-bold text-[#191c1d]">$0</span>
                <span className="text-sm text-[#44474c]">/ 月</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['厳選ウィークリー市場サマリー', '5つの入門モジュールアクセス', '公開コミュニティフォーラム閲覧'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#006a6a] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#191c1d]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/sign-up"
                className="w-full py-4 border border-[#041627] text-[#041627] font-manrope text-xs font-bold tracking-widest uppercase rounded text-center hover:bg-[#f3f4f5] transition-colors block"
              >
                基礎学習を開始
              </Link>
            </div>
            {/* Pro Plan - Featured */}
            <div className="bg-white border border-[#041627] rounded-lg p-8 flex flex-col h-full relative shadow-[inset_0_4px_0_0_rgba(175,140,71,1)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#041627] text-white px-4 py-1 rounded-full font-manrope text-[10px] font-bold tracking-widest uppercase">
                おすすめ
              </div>
              <div className="mb-6 mt-2">
                <h3 className="font-serif text-2xl font-semibold text-[#191c1d] mb-2">プロアナリスト</h3>
                <p className="text-sm text-[#44474c] h-12">アクティブ投資のための高度ツールとAI統合。</p>
              </div>
              <div className="mb-8">
                <span className="font-serif text-5xl font-bold text-[#191c1d]">$85</span>
                <span className="text-sm text-[#44474c]">/ 月</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  'AI駆動株式分析エンジン',
                  '月次リアルトレード戦略ライブ',
                  '全コースアクセス（40+モジュール）',
                  '独自バリュエーションモデリングテンプレート',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#041627] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm text-[#191c1d] ${i === 0 ? 'font-semibold' : ''}`}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/sign-up"
                className="w-full py-4 bg-[#041627] text-white font-manrope text-xs font-bold tracking-widest uppercase rounded text-center hover:opacity-90 transition-opacity shadow-sm block"
              >
                プロ版にアップグレード
              </Link>
            </div>
            {/* Enterprise Plan */}
            <div className="bg-white border border-[#c4c6cd] rounded-lg p-8 flex flex-col h-full hover:border-[#74777d] transition-colors bg-gradient-to-b from-[#f3f4f5] to-transparent">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-semibold text-[#191c1d] mb-2">機関投資家</h3>
                <p className="text-sm text-[#44474c] h-12">ファミリーオフィスとファンド向けカスタムインフラ。</p>
              </div>
              <div className="mb-8">
                <span className="font-serif text-2xl font-semibold text-[#191c1d]">カスタムプラン</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  'プライベートコミュニティアクセスとネットワーキング',
                  '専用AIチューターインスタンス（データ分離）',
                  'クオンツモデルAPIアクセス',
                  '専用トレーニングと優先サポート',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#74777d] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#191c1d]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/sign-up"
                className="w-full py-4 border border-[#74777d] text-[#191c1d] font-manrope text-xs font-bold tracking-widest uppercase rounded text-center hover:border-[#041627] hover:text-[#041627] transition-colors block"
              >
                パートナーに相談
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-[1200px] mx-auto px-6 md:px-16 py-16 md:py-20">
        <div className="text-center mb-12">
          <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#006a6a] block mb-3">
            ミッション
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#191c1d] mb-4">
            AIと金融の交差点で未来を設計する
          </h2>
          <p className="text-base text-[#44474c] max-w-2xl mx-auto">
            私たちはAI技術と金融教育の融合により、誰もがプロレベルの市場分析力を持てる世界を目指しています。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'テクノロジー',
              desc: '最先端のAIアルゴリズムと自然言語処理により、市場データをリアルタイムで分析・解釈。',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              ),
            },
            {
              title: '教育',
              desc: '体系的なカリキュラムとアダプティブラーニングで、初心者からプロまで確実なスキルアップを実現。',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              ),
            },
            {
              title: 'コミュニティ',
              desc: 'グローバルな投資家コミュニティと知識共有により、継続的な成長とネットワーキングを支援。',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col bg-white border border-[#e1e3e4] p-6 rounded-lg group hover:border-[#006a6a] transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full overflow-hidden mb-6 border border-[#c4c6cd] bg-[#edeeef] flex items-center justify-center text-[#1a2b3c] group-hover:text-[#006a6a] transition-colors">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#041627] mb-1">{item.title}</h3>
              <p className="text-sm text-[#44474c] border-t border-[#e1e3e4] pt-4 mt-auto">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1A2B3C]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-16 md:py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            AI金融教育の旅を始めましょう
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-xl mx-auto mb-8">
            AI駆動の学習システムで金融市场をマスターしている数千人の投資家に加入しましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="inline-block font-manrope text-xs font-bold tracking-widest uppercase bg-[#006a6a] text-white px-8 py-3 rounded hover:opacity-90 transition-opacity"
            >
              無料登録
            </Link>
            <Link
              href="/landing"
              className="inline-block font-manrope text-xs font-bold tracking-widest uppercase border border-[#94A3B8] text-white px-8 py-3 rounded hover:bg-white/10 transition-colors"
            >
              詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A2B3C] border-t border-[#2D3748]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-center md:text-left">
            <div className="md:col-span-2">
              <div className="text-xl font-bold text-white mb-4 tracking-widest">LUMINA FINANCE</div>
              <p className="text-sm text-[#94A3B8] max-w-sm mb-6">
                グローバル経済情報のインテリジェントアーカイブ。AIと体系的学習で、次世代の投資家をエンパワー。
              </p>
              <div className="text-xs text-[#94A3B8]">© 2025 Lumina Finance. All rights reserved.</div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#CBD5E1] mb-2 opacity-50">
                プラットフォーム
              </span>
              <a className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-all" href="#courses">コース体系</a>
              <a className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-all" href="#pricing">料金プラン</a>
              <a className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-all" href="#features">AI機能</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-manrope text-[10px] font-bold tracking-widest uppercase text-[#CBD5E1] mb-2 opacity-50">
                法務情報
              </span>
              <Link className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-all" href="/privacy">プライバシーポリシー</Link>
              <Link className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-all" href="/terms">利用規約</Link>
              <Link className="text-sm text-[#94A3B8] hover:text-[#76d6d5] transition-all" href="/contact">お問い合わせ</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
