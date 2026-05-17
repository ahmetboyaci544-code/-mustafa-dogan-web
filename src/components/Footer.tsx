'use client'
import Image from 'next/image'

const footerLinks = [
  {
    title: 'Ürünler',
    links: [
      { label: 'Kereste', href: '#urunler' },
      { label: 'Teleskopik Demir Direk', href: '#urunler' },
      { label: 'Plywood & OSB', href: '#urunler' },
      { label: 'Kalıp Sistemleri', href: '#urunler' },
      { label: 'Çatı Malzemeleri', href: '#urunler' },
    ],
  },
  {
    title: 'Şirket',
    links: [
      { label: 'Neden Biz', href: '#neden-biz' },
      { label: 'Sevkiyat', href: '#sevkiyat' },
      { label: 'İletişim', href: '#iletisim' },
    ],
  },
]

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#14305c' }}>
      <div className="container-xl pt-16 pb-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9 flex-shrink-0 bg-white/10 rounded-sm overflow-hidden">
                <Image src="/images/logo.jpg" alt="Mustafa Doğan" fill className="object-contain" />
              </div>
              <div>
                <div
                  className="leading-none"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '-0.02em', color: '#FFFFFF' }}
                >
                  Mustafa Doğan
                </div>
                <div
                  className="mt-1"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}
                >
                  İnşaat Malzemeleri
                </div>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed max-w-xs mb-6"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, color: 'rgba(255,255,255,0.55)' }}
            >
              Yılların deneyimi ve güçlü lojistik altyapısıyla Türkiye&apos;nin
              güvenilir inşaat malzemeleri tedarikçisi.
            </p>

            <div className="flex gap-3 flex-wrap">
              {['Kırşehir', 'Türkiye Geneli', '7/24 Destek'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5"
                  style={{
                    border: '1px solid rgba(255,255,255,0.15)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <div
                className="mb-5"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.625rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 500, color: 'rgba(255,255,255,0.4)' }}
              >
                {group.title}
              </div>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                      className="text-sm transition-colors duration-200 cursor-pointer"
                      style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.55)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hr-dark mb-8" />

        <div className="grid lg:grid-cols-4 gap-10 items-center">
          <p
            className="text-xs lg:col-span-3"
            style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.3)' }}
          >
            © {year} Mustafa Doğan İnşaat Malzemeleri. Tüm hakları saklıdır.
          </p>
          <a
            href={`https://wa.me/905418397273?text=${encodeURIComponent('Merhaba, web sitesi hakkında bilgi alabilir miyim?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center flex-wrap gap-x-2 gap-y-1 transition-opacity duration-200"
            style={{ opacity: 0.35 }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.35')}
          >
            <span className="text-xs text-white" style={{ fontFamily: 'var(--font-sans)' }}>Bu Web Sitesi</span>
            <Image src="/images/sab-logo.png" alt="SAB Design" width={52} height={18} className="object-contain brightness-0 invert" />
            <span className="text-xs text-white" style={{ fontFamily: 'var(--font-sans)' }}>tarafından tasarlanmıştır.</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
