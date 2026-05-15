import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
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
    <html lang="tr" className={`${cormorant.variable} ${inter.variable} ${barlow.variable}`}>
      <body style={{ backgroundColor: '#09090B', color: '#FAFAFA', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
