'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const words = ['Kereste', 'Demir', 'Plywood', 'Kalıp', 'Çatı', 'İnşaat Malzemeleri']

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const [wordIndex, setWordIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 2200)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-[#09090B]">
      {/* Background Image */}
      <motion.div style={mounted ? { y } : {}} className="absolute inset-0 scale-110">
        <Image
          src="/images/hero-main.jpg"
          alt="Mustafa Doğan Sanayi"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </motion.div>

      {/* Geometric accent lines */}
      {mounted && (
        <>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-[#B8902A] to-transparent origin-left"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.5, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 w-px h-2/3 bg-gradient-to-b from-[#B8902A] to-transparent origin-top"
          />
        </>
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="block w-8 h-px bg-[#B8902A]" />
            <span className="font-[family-name:var(--font-barlow)] text-xs tracking-[0.3em] uppercase text-[#B8902A]">
              Türkiye&apos;nin Güvenilir Tedarikçisi
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-cormorant)] text-white leading-[0.9] mb-2 font-semibold"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
          >
            Mustafa
          </motion.h1>
          <motion.h1
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-cormorant)] text-[#B8902A] leading-[0.9] mb-8 font-semibold"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
          >
            Doğan
          </motion.h1>

          {/* Rotating word */}
          <div className="mb-4 h-10 overflow-hidden">
            <motion.div
              key={wordIndex}
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              exit={{ y: -30 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-[family-name:var(--font-barlow)] text-xl md:text-2xl tracking-[0.2em] uppercase text-white/50"
            >
              {words[wordIndex]}
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="text-white/45 text-base md:text-lg max-w-lg mb-10 leading-relaxed font-light"
          >
            Kırşehir&apos;den Türkiye&apos;nin dört bir yanına; yılların deneyimi, güçlü lojistik ağı
            ve güvenilir hizmet anlayışıyla kaliteli inşaat malzemeleri tedariki sağlıyoruz.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.querySelector('#urunler')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8902A] text-[#09090B] font-[family-name:var(--font-barlow)] font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#D4A832] hover:scale-[1.02]"
            >
              Ürünlerimizi Keşfedin
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => document.querySelector('#iletisim')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-[family-name:var(--font-barlow)] font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:border-[#B8902A] hover:text-[#B8902A]"
            >
              Bize Ulaşın
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/10 py-5">
            {[
              { num: '20+', label: 'Yıl Deneyim' },
              { num: '500+', label: 'Ürün Çeşidi' },
              { num: '81', label: 'İl Teslimat' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 px-4">
                <span className="font-[family-name:var(--font-cormorant)] text-[#B8902A] text-2xl md:text-3xl font-semibold">
                  {stat.num}
                </span>
                <span className="font-[family-name:var(--font-barlow)] text-white/40 text-[10px] tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 right-8 md:right-16 hidden md:flex flex-col items-center gap-2">
        <span className="font-[family-name:var(--font-barlow)] text-white/30 text-xs tracking-[0.3em] uppercase [writing-mode:vertical-lr] rotate-180 mb-3">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-[#B8902A] to-transparent"
        />
      </div>
    </section>
  )
}
