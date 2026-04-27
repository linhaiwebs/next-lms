import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { jaJP } from '@clerk/localizations'
import { ToastProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ウド知恵 - AI金融教育プラットフォーム',
  description: 'AIを活用した金融教育プラットフォーム。体系的な金融コースとAI学習アシスタントで、投資の基礎から応用まで段階的に学べます。',
}

// @clerk/localizations type mismatch with @clerk/nextjs - runtime is compatible
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jaJPLocalization = jaJP as any

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider localization={jaJPLocalization} afterSignOutUrl="/sign-in">
      <html lang="ja">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
