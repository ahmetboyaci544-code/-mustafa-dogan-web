'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const stats = [
  { value: '30+', label: 'Yıl Deneyim' },
  { value: '500+', label: 'Ürün Çeşidi' },
  { value: '81', label: 'İl Kapsamı' },
]

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  useEffect(() => { setMounted(true) }, [])

  return (
    <section ref={ref} className="relative h-screen min-h-[680px] flex items-center overflow-hidden">

      {/* Background */}
      <motion.div
        style={mounted ? { y: bgY } : {}}
        className="absolute inset-0 scale-[1.12]"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '70% center' }}
        >
          <source src="/videos/download.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-[#0D0D0D]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#0D0D0D]/40" />
      </motion.div>

      {/* Accent lines */}
      {mounted && (
        <>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 w-1/4 h-px bg-gradient-to-r from-[#14305c] to-transparent origin-left"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.6, duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 w-px h-1/2 bg-gradient-to-b from-[#14305c] to-transparent origin-top"
          />
        </>
      )}

      {/* Content */}
      <motion.div
        style={mounted ? { y: contentY } : {}}
        className="relative z-10 container-xl w-full"
      >
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mt-2 mb-3"
          >
            <span className="block w-7 h-px bg-white" />
            <span className="label" style={{ color: '#FFFFFF' }}>Kırşehir — Türkiye Geneli İnşaat Malzemeleri ve Yapı Tasarım Ürünleri</span>
          </motion.div>

          {/* Main headline */}
          <div className="overflow-hidden mb-0 pb-4">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#F5F5F5]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, fontSize: 'clamp(3.8rem, 9vw, 9.5rem)' }}
            >
              Mustafa
            </motion.h1>
          </div>
          <div style={{ display: 'inline-block' }}>
            <div className="overflow-hidden mb-0 pb-4">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.52, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, fontSize: 'clamp(3.8rem, 9vw, 9.5rem)', color: '#14305c' }}
              >
                Doğan Yapı
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 1.0 }}
              className="flex justify-end"
            >
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: '0.9rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
                Tasarım
              </span>
            </motion.div>
          </div>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="text-[#A1A1A1] text-base md:text-lg font-light max-w-md mt-1 mb-2 leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Yirmi yılı aşkın tecrübemiz, güçlü lojistik ağımız ve geniş ürün portfolyomuzla
            Türkiye&apos;nin her köşesine güvenilir inşaat malzemesi tedariki.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.querySelector('#urunler')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold cursor-pointer"
            >
              Ürünleri Keşfet
              <svg className="arrow-right" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => document.querySelector('#iletisim')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost cursor-pointer"
            >
              Teklif Al
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.9 }}
        className="absolute bottom-0 left-0 right-0 border-t border-white/[0.07] bg-[#0D0D0D]/60 backdrop-blur-md"
      >
        <div className="container-xl">
          <div className="grid grid-cols-3 divide-x divide-white/[0.07]">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center py-5 gap-1">
                <span
                  className="text-[#14305c] leading-none"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '-0.04em' }}
                >
                  {stat.value}
                </span>
                <span className="label" style={{ color: '#A1A1A1', fontSize: '0.58rem' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      {mounted && (
        <div className="absolute right-8 md:right-12 bottom-28 hidden md:flex flex-col items-center gap-3">
          <span
            className="label"
            style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', color: '#A1A1A1', opacity: 0.4, fontSize: '0.58rem' }}
          >
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-px h-14 bg-gradient-to-b from-[#14305c]/60 to-transparent"
          />
        </div>
      )}
    </section>
  )
}
