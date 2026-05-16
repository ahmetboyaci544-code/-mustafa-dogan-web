import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mustafa Doğan İnşaat Malzemeleri | Kereste, Demir, Plywood, Kalıp, Çatı',
  description:
    "Türkiye'nin güvenilir inşaat malzemeleri tedarikçisi. Kereste, demir, plywood, kalıp sistemi ve çatı malzemelerinde yılların deneyimi.",
  keywords: 'inşaat malzemeleri, kereste, demir, plywood, kalıp sistemi, çatı malzemeleri, Mustafa Doğan',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${interTight.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
