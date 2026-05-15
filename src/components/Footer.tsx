'use client'
import Image from 'next/image'

const footerLinks = [
  {
    title: 'Ürünler',
    links: [
      { label: 'Kereste', href: '#urunler' },
      { label: 'İnşaat Demiri', href: '#urunler' },
      { label: 'Plywood & OSB', href: '#urunler' },
      { label: 'Kalıp Sistemleri', href: '#urunler' },
      { label: 'Çatı Malzemeleri', href: '#urunler' },
    ],
  },
  {
    title: 'Şirket',
    links: [
      { label: 'Hakkımızda', href: '#hakkimizda' },
      { label: 'Sevkiyat & Lojistik', href: '#sevkiyat' },
      { label: 'Referanslar', href: '#referanslar' },
      { label: 'Galeri', href: '#galeri' },
      { label: 'İletişim', href: '#iletisim' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-black border-t border-white/5">
      <div className="container-lg pt-16 pb-8">
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10">
                <Image src="/images/logo.jpg" alt="Logo" fill className="object-contain" onError={() => {}} />
              </div>
              <div>
                <div className="font-display text-white font-semibold text-lg leading-none">Mustafa Doğan</div>
                <div className="font-label text-brand-gold text-xs tracking-[0.25em] uppercase mt-0.5">İnşaat Malzemeleri</div>
              </div>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed max-w-xs mb-6">
              Yılların deneyimi ve güçlü lojistik altyapısıyla Türkiye&apos;nin güvenilir
              inşaat malzemeleri tedarikçisi. Her projede en kaliteli çözüm.
            </p>
            <div className="flex gap-3">
              {['📍 Türkiye Geneli', '📞 7/24 Destek'].map((tag) => (
                <span key={tag} className="font-label text-[10px] tracking-widest text-brand-muted/50 border border-white/10 px-3 py-1.5 uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <div className="font-label text-brand-gold text-xs tracking-[0.3em] uppercase mb-5">
                {group.title}
              </div>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="text-brand-muted hover:text-white text-sm transition-colors duration-200 animated-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gold divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-white/5" />
          <div className="w-6 h-6 border border-brand-gold/30 rotate-45 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-brand-gold rotate-45" />
          </div>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-muted/50 text-xs">
            © {year} Mustafa Doğan İnşaat Malzemeleri. Tüm hakları saklıdır.
          </p>
          <a
            href={`https://wa.me/905418397273?text=${encodeURIComponent('Merhaba, web sitesi hakkında bilgi alabilir miyim?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-200"
          >
            <span className="text-brand-muted/70 text-xs">Bu site</span>
            <Image src="/images/sab-logo.png" alt="SAB Design" width={60} height={20} className="object-contain" />
            <span className="text-brand-muted/70 text-xs">tarafından tasarlanmıştır.</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
