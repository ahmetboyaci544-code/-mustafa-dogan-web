'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const scrollToContact = () => {
    document.querySelector('#iletisim')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="overflow-hidden relative" style={{ background: '#0D0D0D' }}>

      {/* Accent line top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{ background: 'rgba(255,255,255,0.1)' }}
      />

      {/* Logo sağ taraf */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-end pr-12 lg:pr-24 pointer-events-none select-none" aria-hidden>
        <div className="relative w-[280px] h-[280px] lg:w-[420px] lg:h-[420px] opacity-30">
          <Image src="/images/doganlar-logo.png" alt="" fill className="object-contain brightness-0 invert" />
        </div>
      </div>

      <div className="container-xl py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="block w-6 h-px" style={{ background: 'rgba(255,255,255,0.35)' }} />
            <span className="label" style={{ color: 'rgba(255,255,255,0.45)' }}>İş Birliği</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.6rem, 6vw, 5.5rem)',
              letterSpacing: '-0.04em',
              lineHeight: 0.92,
              color: '#FFFFFF',
            }}
          >
            Projeniz için en iyi <br />
            <span style={{ color: '#FFFFFF' }}>malzemeyi birlikte seçelim.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="leading-relaxed mb-12 max-w-lg"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, color: 'rgba(255,255,255,0.5)' }}
          >
            Büyük veya küçük fark etmez — her proje için doğru ürünü, doğru fiyatla
            ve en hızlı teslimatla temin ediyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToContact}
              className="cursor-pointer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
                padding: '0.9rem 2.25rem', background: '#FFFFFF', color: '#0D0D0D',
                fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.65rem',
                letterSpacing: '0.22em', textTransform: 'uppercase', transition: 'background 0.22s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#E8E8E8')}
              onMouseLeave={e => (e.currentTarget.style.background = '#FFFFFF')}
            >
              Teklif Al
              <svg className="arrow-right" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a
              href={`https://wa.me/905468965635?text=${encodeURIComponent('Merhaba, inşaat malzemeleri hakkında bilgi almak istiyorum.')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
                padding: '0.9rem 2.25rem', border: '1px solid rgba(255,255,255,0.25)', color: '#FFFFFF',
                fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '0.65rem',
                letterSpacing: '0.22em', textTransform: 'uppercase', transition: 'border-color 0.22s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}
            >
              WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
