import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import Script from 'next/script'
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

const siteUrl = 'https://doğankereste.com.tr'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Doğan Yapı Market | Kırşehir Kereste, İnşaat Malzemeleri, Yapı Market',
    template: '%s | Doğan Yapı Market Kırşehir',
  },
  description:
    "Kırşehir'in güvenilir yapı marketi Doğan Yapı'da kereste, OSB, MDF, plywood, çatı malzemeleri, hırdavat ve inşaat malzemeleri. 30 yılı aşkın deneyim, toptan ve perakende satış. Kırşehir Kılıçözü Sanayi Sitesi. ☎ 0386 252 64 44",
  keywords: [
    'doğan yapı', 'doğan yapı market', 'doğan yapı kırşehir', 'doğan yapı market kırşehir',
    'doğan kereste', 'doğan kerestecilik', 'doğan orman ürünleri',
    'mustafa doğan kırşehir', 'mustafa doğan yapı market', 'mustafa doğan kereste',
    'kırşehir yapı market', 'kırşehir keresteci', 'kırşehir kereste', 'kırşehir inşaat malzemeleri',
    'kırşehir nalbur', 'kırşehir yapı malzemeleri', 'kırşehir ahşap ürünler',
    'kırşehir osb', 'kırşehir mdf', 'kırşehir sunta', 'kırşehir plywood',
    'kırşehir parke', 'kırşehir laminat parke', 'kırşehir kapı', 'kırşehir oda kapısı',
    'kırşehir çelik kapı', 'kırşehir mutfak dolabı malzemeleri', 'kırşehir mobilya malzemeleri',
    'kırşehir boya', 'kırşehir boya malzemeleri', 'kırşehir silikon', 'kırşehir hırdavat',
    'kırşehir vida', 'kırşehir matkap', 'kırşehir el aletleri', 'kırşehir yapı dekorasyon',
    'kırşehir tadilat malzemeleri', 'kırşehir çatı malzemeleri', 'kırşehir izolasyon malzemeleri',
    'kırşehir alçıpan', 'kırşehir seramik yapıştırıcı', 'kırşehir fayans malzemeleri',
    'kırşehir bahçe malzemeleri', 'kırşehir marangoz malzemeleri', 'kırşehir kereste fiyatları',
    'kırşehir yapı market fiyatları', 'kırşehir toptan kereste', 'kırşehir inşaat ürünleri',
    'kırşehir yapı çözümleri', 'kırşehir ahşap yapı malzemeleri', 'kırşehir inşaat marketi',
    'kırşehir dekorasyon ürünleri', 'kırşehir mobilya kerestesi', 'kırşehir çam kereste',
    'kırşehir meşe kereste', 'kırşehir tahta', 'kırşehir ahşap panel', 'kırşehir pvc ürünleri',
    'kırşehir duşakabin', 'kırşehir lavabo bataryası', 'kırşehir banyo dolabı',
    'kırşehir mutfak ekipmanları', 'kırşehir inşaat ekipmanları', 'kırşehir yapı ve dekorasyon',
    'kırşehir ev tadilat ürünleri', 'kırşehir yapı ihtiyaçları', 'kırşehir yapı market kampanya',
    'kırşehir uygun fiyat kereste', 'kırşehir kaliteli kereste', 'kırşehir yapı market iletişim',
    'kırşehir yapı market adres', 'kırşehir yapı market telefon', 'kırşehir merkez yapı market',
    'kırşehir merkez keresteci', 'kırşehir sanayi kereste', 'kırşehir marangoz kerestesi',
    'kırşehir yapı market online', 'kırşehir nalbur ürünleri', 'kırşehir yapı market tavsiye',
    'kırşehir en yakın yapı market', 'kırşehir en iyi keresteci', 'kırşehir ahşap dekorasyon',
    'kırşehir yapı market ürünleri', 'kırşehir yapı market indirim', 'kırşehir yapı market toptan satış',
    'kırşehir yapı market perakende satış', 'kırşehir yapı market kereste bölümü',
    'kırşehir ahşap kesim', 'kırşehir kereste kesim hizmeti', 'kırşehir mobilyalık kereste',
    'kırşehir inşaat kerestesi', 'kırşehir doğrama malzemeleri', 'kırşehir yapı market ahşap ürünleri',
    'kırşehir tamirat malzemeleri', 'kırşehir ev yenileme ürünleri', 'kırşehir yapı market hizmetleri',
    'kırşehir yapı market katalog', 'kırşehir yapı market bahçe ürünleri', 'kırşehir yapı market boya bölümü',
    'kırşehir yapı market hırdavat bölümü', 'kırşehir yapı market marangoz ürünleri',
    'doğan yapı iletişim', 'doğan yapı adres', 'doğan yapı telefon', 'doğan yapı ürünleri',
    'doğan yapı kereste ürünleri', 'doğan yapı hırdavat', 'doğan yapı boya', 'doğan yapı dekorasyon',
    'doğan yapı inşaat malzemeleri', 'doğan yapı nalbur', 'doğan yapı ahşap ürünleri',
    'doğan yapı osb mdf sunta', 'doğan yapı parke', 'doğan yapı kapı', 'doğan yapı çelik kapı',
    'doğan yapı banyo ürünleri', 'doğan yapı mutfak ürünleri', 'doğan yapı tadilat ürünleri',
    'doğan yapı bahçe ürünleri', 'doğan yapı uygun fiyat', 'doğan yapı kaliteli ürün',
    'doğan yapı toptan satış', 'doğan yapı perakende satış',
  ],
  authors: [{ name: 'Doğan Yapı Market', url: siteUrl }],
  creator: 'Doğan Yapı Market',
  publisher: 'Doğan Yapı Market',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteUrl,
    siteName: 'Doğan Yapı Market',
    title: 'Doğan Yapı Market | Kırşehir Kereste, İnşaat Malzemeleri, Yapı Market',
    description:
      "Kırşehir'in güvenilir yapı marketi. Kereste, OSB, MDF, plywood, çatı malzemeleri, hırdavat ve daha fazlası. 30 yılı aşkın deneyim. ☎ 0386 252 64 44",
    images: [
      {
        url: '/images/hero-main.jpg',
        width: 1200,
        height: 630,
        alt: 'Doğan Yapı Market Kırşehir - Kereste ve İnşaat Malzemeleri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doğan Yapı Market | Kırşehir Kereste & İnşaat Malzemeleri',
    description:
      "Kırşehir'in güvenilir yapı marketi. Kereste, OSB, MDF, plywood ve daha fazlası. ☎ 0386 252 64 44",
    images: ['/images/hero-main.jpg'],
  },
  category: 'İnşaat Malzemeleri',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HardwareStore',
  name: 'Doğan Yapı Market',
  alternateName: [
    'Mustafa Doğan İnşaat Malzemeleri',
    'Doğan Kerestecilik',
    'Doğan Orman Ürünleri',
    'Mustafa Doğan Yapı Market',
  ],
  description:
    "Kırşehir'de 30 yılı aşkın deneyimiyle kereste, OSB, MDF, plywood, çatı malzemeleri, hırdavat ve inşaat malzemeleri satışı. Toptan ve perakende.",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.jpg`,
  image: [
    `${siteUrl}/images/hero-main.jpg`,
    `${siteUrl}/images/dukkan-dis.jpg`,
    `${siteUrl}/images/sanayi-dis.jpg`,
  ],
  telephone: ['+903862526444', '+905468965635'],
  email: 'doganyapitasarim@outlook.com.tr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kılıçözü Sanayi Sitesi, Hizarcılar Sitesi 5. Blok Sk. No:5',
    addressLocality: 'Kırşehir Merkez',
    addressRegion: 'Kırşehir',
    postalCode: '40100',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.1459,
    longitude: 34.1614,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  priceRange: '₺₺',
  currenciesAccepted: 'TRY',
  paymentAccepted: 'Nakit, Kredi Kartı',
  areaServed: [
    { '@type': 'City', name: 'Kırşehir' },
    { '@type': 'Country', name: 'Türkiye' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'İnşaat ve Yapı Malzemeleri',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Kereste', description: 'Çam, meşe ve mobilyalık kereste çeşitleri' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'OSB', description: 'Kırşehir OSB levha satışı' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'MDF', description: 'Kırşehir MDF levha satışı' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Plywood', description: 'Kırşehir plywood satışı' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Çatı Malzemeleri', description: 'Kiremit ve çatı kaplama ürünleri' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Teleskopik Demir Direk', description: 'İnşaat kalıp sistemleri' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Hırdavat', description: 'Vida, matkap, el aletleri' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Nalbur Ürünleri', description: 'Kırşehir nalbur ve yapı malzemeleri' } },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${interTight.variable} ${inter.variable}`}>
      <body>
        <Script
          id="json-ld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
