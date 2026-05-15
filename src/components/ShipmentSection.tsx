'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimationFrame } from 'framer-motion'
import Image from 'next/image'

const shipmentImages = [
  { src: '/images/kereste-sevkiyat-1.jpg', label: 'Kereste Sevkiyat', fallback: 'from-[#3D2B1F] to-[#5C3D28]' },
  { src: '/images/kereste-sevkiyat-2.jpg', label: 'Kereste Nakliye', fallback: 'from-[#2D2416] to-[#4A3820]' },
  { src: '/images/demir-sevkiyat.jpg', label: 'Demir Sevkiyat', fallback: 'from-[#1C2B3A] to-[#2D3F52]' },
  { src: '/images/kereste-sevkiyat-a.jpg', label: 'Büyük Sevkiyat', fallback: 'from-[#3D2B1F] to-[#5C3D28]' },
  { src: '/images/demir-sevkiyat-a.jpg', label: 'Demir Nakliye', fallback: 'from-[#1C2B3A] to-[#2D3F52]' },
  { src: '/images/plywood-sevkiyat-a.jpg', label: 'Plywood Sevkiyat', fallback: 'from-[#2D2416] to-[#4A3820]' },
  { src: '/images/osb-sevkiyat.jpg', label: 'OSB Sevkiyat', fallback: 'from-[#1E2422] to-[#2E3632]' },
  { src: '/images/cati-kiremit.jpg', label: 'Çatı Malzeme', fallback: 'from-[#2C1810] to-[#4A2815]' },
  { src: '/images/kiremit-sevkiyat-a.jpg', label: 'Kiremit Teslimat', fallback: 'from-[#2C1810] to-[#4A2815]' },
  { src: '/images/kereste-sevkiyat-b.jpg', label: 'Kereste Tır', fallback: 'from-[#3D2B1F] to-[#5C3D28]' },
]

const logisticsStats = [
  { num: '1000+', label: 'Aylık Sevkiyat' },
  { num: '81', label: 'İl Kapsamı' },
  { num: '50+', label: 'Araç Filosu' },
  { num: '24/7', label: 'Operasyon' },
]

function AutoScrollGallery() {
  const trackRef = useRef<HTMLDivElement>(null)
  const xRef = useRef(0)
  const paused = useRef(false)
  const doubled = [...shipmentImages, ...shipmentImages]

  useAnimationFrame(() => {
    if (!trackRef.current || paused.current) return
    xRef.current -= 0.6
    const totalWidth = shipmentImages.length * 340 // card width + gap approx
    if (Math.abs(xRef.current) >= totalWidth) xRef.current = 0
    trackRef.current.style.transform = `translateX(${xRef.current}px)`
  })

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => { paused.current = true }}
      onMouseLeave={() => { paused.current = false }}
    >
      <div ref={trackRef} className="flex gap-4 will-change-transform" style={{ width: 'max-content' }}>
        {doubled.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative flex-shrink-0 w-72 md:w-80 h-52 md:h-60 overflow-hidden group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${img.fallback}`} />
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              onError={() => {}}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="font-label text-xs tracking-widest text-white/70 uppercase">{img.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ShipmentSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sevkiyat" ref={ref} className="bg-brand-black py-16 lg:py-24 overflow-hidden">
      <div className="container-lg mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          {/* Left: Header */}
          <motion.div
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-brand-gold" />
              <span className="section-label">Lojistik & Sevkiyat</span>
            </div>
            <h2
              className="font-display text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 600 }}
            >
              Güçlü Teslimat <br />
              <span className="text-brand-gold">Altyapısı</span>
            </h2>
            <p className="text-brand-muted leading-relaxed text-base max-w-lg">
              Türkiye&apos;nin her köşesine zamanında ve güvenli teslimat. Geniş araç filomuz ve
              deneyimli ekibimizle büyük hacimli sevkiyatları en zor koşullarda bile
              eksiksiz gerçekleştiriyoruz.
            </p>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {logisticsStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.95 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="border border-white/10 p-6 hover:border-brand-gold/50 transition-colors duration-300"
              >
                <div className="font-display text-brand-gold text-4xl font-semibold mb-1">{stat.num}</div>
                <div className="font-label text-white/40 text-xs tracking-widest uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Auto-scroll gallery — full width */}
      <div>
        <AutoScrollGallery />
      </div>

      {/* Features row */}
      <div className="container-lg mt-16">
        <motion.div
          initial={{ y: 15 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid sm:grid-cols-3 gap-8 border-t border-white/10 pt-10"
        >
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: 'Güvenli Ambalaj',
              desc: 'Hasarsız teslimat garantisi için özel ambalaj ve sabitleme sistemleri.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Zamanında Teslimat',
              desc: 'Sipariş takip sistemi ve gecikme garantisiyle planlama güvencesi.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Türkiye'nin Her Noktası",
              desc: "81 ilde kapsamlı teslimat ağı. Uzak ve zorlu bölgeler dahil.",
            },
          ].map((feat) => (
            <div key={feat.title} className="flex gap-4">
              <div className="flex-shrink-0 text-brand-gold mt-0.5">{feat.icon}</div>
              <div>
                <div className="font-label text-white font-semibold text-sm tracking-wider uppercase mb-1">{feat.title}</div>
                <p className="text-brand-muted text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
