'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  'Kereste',
  'İnşaat Demiri',
  'Plywood',
  'OSB Levha',
  'Kalıp Sistemi',
  'Çatı Malzemeleri',
  'Beton Kiremit',
  'Yalıtım',
  'Gaz Beton',
  'Çimento',
]

const doubled = [...categories, ...categories]

function Dot() {
  return (
    <span
      className="inline-block w-1 h-1 rounded-full mx-8 flex-shrink-0 align-middle"
      style={{ background: '#14305c', opacity: 0.3, marginBottom: '2px' }}
    />
  )
}

export default function BrandMarquee() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="bg-[#EFEFED] border-y border-black/[0.07] py-16 overflow-hidden">
      <div className="container-xl mb-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <span className="block w-6 h-px bg-[#14305c]" />
          <span className="label">Ürün Kategorilerimiz</span>
        </motion.div>
      </div>

      {/* Top marquee */}
      <div className="relative flex overflow-hidden select-none mb-4">
        <div className="flex animate-ticker items-center" style={{ willChange: 'transform' }}>
          {doubled.map((cat, i) => (
            <span key={i} className="flex items-center flex-shrink-0">
              <span
                className="uppercase whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                  letterSpacing: '0.06em',
                  color: 'rgba(20,48,92,0.5)',
                }}
              >
                {cat}
              </span>
              <Dot />
            </span>
          ))}
        </div>
      </div>

      {/* Bottom marquee reversed */}
      <div className="relative flex overflow-hidden select-none">
        <div className="flex animate-ticker-rev items-center" style={{ willChange: 'transform' }}>
          {doubled.map((cat, i) => (
            <span key={i} className="flex items-center flex-shrink-0">
              <span
                className="uppercase whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
                  letterSpacing: '-0.02em',
                  color: i % 4 === 0 ? '#14305c' : 'rgba(20,48,92,0.25)',
                }}
              >
                {cat}
              </span>
              <Dot />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
