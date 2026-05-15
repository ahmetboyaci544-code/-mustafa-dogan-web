'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const references = [
  'Limak Holding', 'Kalyon İnşaat', 'Rönesans Holding', 'Kolin İnşaat',
  'Yenigün İnşaat', 'Emlak Konut GYO', 'Torunlar GYO', 'Alarko Holding',
  'Enka İnşaat', 'Polimeks İnşaat', 'Tepe İnşaat', 'TAV Havalimanları',
  'Yapı Kredi GYO', 'Sur Yapı', 'Doğuş İnşaat', 'Demirören Holding',
]

const featuredRefs = [
  { name: 'Limak Holding', sector: 'İnşaat & Enerji', size: 'Büyük Ölçek' },
  { name: 'Kalyon İnşaat', sector: 'Altyapı & Bina', size: 'Büyük Ölçek' },
  { name: 'Rönesans Holding', sector: 'Genel İnşaat', size: 'Büyük Ölçek' },
  { name: 'Kolin İnşaat', sector: 'Altyapı & Üstyapı', size: 'Büyük Ölçek' },
  { name: 'Enka İnşaat', sector: 'Uluslararası İnşaat', size: 'Büyük Ölçek' },
  { name: 'Emlak Konut', sector: 'Konut Geliştirme', size: 'Büyük Ölçek' },
]

export default function ReferencesSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const doubledRefs = [...references, ...references]

  return (
    <section id="referanslar" ref={ref} className="bg-brand-anthracite py-16 lg:py-24 overflow-hidden">
      <div className="container-lg mb-14">
        <motion.div
          initial={{ y: 15 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-8 h-px bg-brand-gold" />
            <span className="section-label">Referanslarımız</span>
            <span className="block w-8 h-px bg-brand-gold" />
          </div>
          <h2
            className="font-display text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 600 }}
          >
            Güvenilir <span className="text-brand-gold">İş Ortaklarımız</span>
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-base">
            Türkiye&apos;nin önde gelen inşaat ve gayrimenkul firmalarının güvendiği
            malzeme tedarikçisiyiz.
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative py-6 border-y border-white/10">
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -50 + '%'] }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
            className="flex flex-shrink-0 gap-8 items-center"
            style={{ width: 'max-content' }}
          >
            {doubledRefs.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center gap-8 flex-shrink-0"
              >
                <span className="font-label text-white/30 text-xl tracking-[0.2em] uppercase whitespace-nowrap hover:text-white/70 transition-colors cursor-default">
                  {name}
                </span>
                <span className="text-brand-gold/40 text-xl">×</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Marquee Row 2 (reverse) */}
      <div className="relative py-6 border-b border-white/10 mb-16">
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ['-50%', 0] }}
            transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
            className="flex flex-shrink-0 gap-8 items-center"
            style={{ width: 'max-content' }}
          >
            {[...doubledRefs].reverse().map((name, i) => (
              <div
                key={`rev-${name}-${i}`}
                className="flex items-center gap-8 flex-shrink-0"
              >
                <span className="font-label text-white/20 text-lg tracking-[0.2em] uppercase whitespace-nowrap hover:text-white/50 transition-colors cursor-default">
                  {name}
                </span>
                <span className="text-brand-gold/30 text-lg">—</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Featured reference cards */}
      <div className="container-lg">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredRefs.map((ref_, i) => (
            <motion.div
              key={ref_.name}
              initial={{ y: 15 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              className="group border border-white/10 p-6 hover:border-brand-gold/40 transition-all duration-300 hover:bg-white/5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                  <span className="font-display text-brand-gold text-lg font-semibold">
                    {ref_.name.charAt(0)}
                  </span>
                </div>
                <span className="font-label text-[10px] tracking-[0.25em] uppercase text-brand-gold/60 border border-brand-gold/20 px-2 py-1">
                  {ref_.size}
                </span>
              </div>
              <h3 className="font-display text-white text-xl font-semibold mb-1 group-hover:text-brand-gold transition-colors">
                {ref_.name}
              </h3>
              <p className="font-label text-white/40 text-xs tracking-wider uppercase">{ref_.sector}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-10">
          <p className="text-brand-muted/60 text-sm italic">
            ve Türkiye genelinde yüzlerce daha küçük ve orta ölçekli inşaat firması...
          </p>
        </div>
      </div>
    </section>
  )
}
