'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/courses', label: 'コース' },
  { href: '/features', label: '機能' },
  { href: '/pricing', label: '料金' },
  { href: '/guide', label: '学習の流れ' },
  { href: '/about', label: '概要' },
  { href: '/faq', label: 'FAQ' },
]

export function PublicHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F8F9FA]/95 backdrop-blur-md border-b border-[#E1E4E8]">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto w-full px-6 md:px-16 py-4">
        <Link href="/" className="text-2xl font-bold tracking-widest text-[#1A2B3C]">
          ウド知恵
        </Link>
        <nav className="hidden lg:flex gap-6 items-center font-medium text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#5F6368] hover:text-[#006a6a] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/sign-in"
            className="hidden md:inline-block font-medium text-sm text-[#1A2B3C] hover:text-[#006a6a] transition-colors duration-200"
          >
            ログイン
          </Link>
          <Link
            href="/sign-up"
            className="hidden md:inline-block font-manrope text-xs font-bold tracking-widest uppercase bg-[#1A2B3C] text-white px-5 py-2 rounded hover:opacity-90 transition-opacity"
          >
            無料で始める
          </Link>
          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-[#1A2B3C] hover:text-[#006a6a]"
            aria-label="メニュー"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[#E1E4E8] bg-[#F8F9FA]">
          <nav className="flex flex-col max-w-[1200px] mx-auto px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 text-sm text-[#5F6368] hover:text-[#006a6a] transition-colors border-b border-[#e1e3e4] last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-4">
              <Link
                href="/sign-in"
                className="flex-1 text-center py-2.5 text-sm font-medium border border-[#c4c6cd] rounded hover:border-[#006a6a] transition-colors"
              >
                ログイン
              </Link>
              <Link
                href="/sign-up"
                className="flex-1 text-center py-2.5 text-sm font-bold bg-[#1A2B3C] text-white rounded hover:opacity-90 transition-opacity"
              >
                無料で始める
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
