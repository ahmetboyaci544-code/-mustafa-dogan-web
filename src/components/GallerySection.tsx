'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const galleryItems = [
  { src: '/images/kereste-sevkiyat-1.jpg', alt: 'Kereste Sevkiyat', label: 'Kereste Sevkiyatı' },
  { src: '/images/demir-sevkiyat.jpg', alt: 'Demir Sevkiyat', label: 'Demir Sevkiyatı' },
  { src: '/images/cati-kiremit.jpg', alt: 'Çatı Kiremit', label: 'Çatı Kiremit Ürünleri' },
  { src: '/images/mermer-panel-1.jpg', alt: 'Mermer Panel', label: 'Mermer Görünümlü Panel' },
  { src: '/images/kereste-sevkiyat-2.jpg', alt: 'Kereste Nakliye', label: 'Kereste Nakliye' },
  { src: '/images/mermer-panel-2.jpg', alt: 'Duvar Paneli', label: 'Duvar Paneli' },
  { src: '/images/corum-kiremit.jpg', alt: 'Kiremit Ürünleri', label: 'Çorum Kiremit' },
  { src: '/images/mermer-panel-3.jpg', alt: 'Panel Çeşitleri', label: 'Panel Çeşitleri' },
  { src: '/images/plastik-parke.png', alt: 'Plastik Parke', label: 'Plastik Parke' },
]

const pageVariants = {
  enter: (dir: number) => ({
    rotateY: dir > 0 ? 90 : -90,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir: number) => ({
    rotateY: dir > 0 ? -90 : 90,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.4, ease: [0.55, 0, 0.45, 1] },
  }),
}

export default function GallerySection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const navigate = (dir: number) => {
    setDirection(dir)
    setIndex((prev) => (prev + dir + galleryItems.length) % galleryItems.length)
  }

  const current = galleryItems[index]

  return (
    <section id="galeri" ref={ref} className="bg-brand-black py-16 lg:py-24">
      <div className="container-lg">
        {/* Header */}
        <motion.div
          initial={{ y: 15 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-8 h-px bg-brand-gold" />
            <span className="section-label">Galeri</span>
            <span className="block w-8 h-px bg-brand-gold" />
          </div>
          <h2
            className="font-display text-white leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 600 }}
          >
            Ürün & Teslimat <span className="text-brand-gold">Kataloğu</span>
          </h2>
        </motion.div>

        {/* Catalog Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Book Container */}
          <div
            className="relative bg-[#1a1209] rounded-sm shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden"
            style={{ perspective: '1400px' }}
          >
            {/* Catalog spine decoration */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#0a0a0a] via-[#1a1209] to-transparent z-10" />
            <div className="absolute left-6 top-0 bottom-0 w-px bg-brand-gold/20 z-10" />

            {/* Top bar */}
            <div className="relative z-10 flex items-center justify-between px-10 py-3 bg-brand-charcoal/80 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span className="font-label text-brand-gold text-[10px] tracking-[0.3em] uppercase">
                  Mustafa Doğan — Ürün Kataloğu
                </span>
              </div>
              <span className="font-label text-white/30 text-[10px] tracking-widest">
                {String(index + 1).padStart(2, '0')} / {String(galleryItems.length).padStart(2, '0')}
              </span>
            </div>

            {/* Page area */}
            <div className="relative" style={{ perspective: '1400px' }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{ transformOrigin: direction > 0 ? 'left center' : 'right center' }}
                  className="relative aspect-[16/9] w-full"
                >
                  {/* Fallback bg */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-anthracite to-brand-charcoal" />
                  <Image
                    src={current.src}
                    alt={current.alt}
                    fill
                    className="object-cover"
                    onError={() => {}}
                  />
                  {/* Page shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/10" />

                  {/* Bottom label */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="font-display text-white text-lg font-semibold">{current.label}</p>
                  </div>

                  {/* Page corner fold effect */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                    <div
                      className="absolute bottom-0 right-0 w-0 h-0"
                      style={{
                        borderStyle: 'solid',
                        borderWidth: '0 0 48px 48px',
                        borderColor: 'transparent transparent #0a0705 transparent',
                        filter: 'drop-shadow(-2px -2px 3px rgba(184,144,42,0.15))',
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom bar */}
            <div className="relative z-10 flex items-center justify-between px-10 py-4 bg-brand-charcoal/60 border-t border-white/5">
              {/* Dot indicators */}
              <div className="flex items-center gap-1.5">
                {galleryItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
                    className={`transition-all duration-300 rounded-full ${
                      i === index
                        ? 'w-5 h-1.5 bg-brand-gold'
                        : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center gap-2 font-label text-[10px] tracking-widest uppercase text-white/40 hover:text-brand-gold transition-colors duration-200 group"
                >
                  <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                  Önceki
                </button>
                <div className="w-px h-4 bg-white/10" />
                <button
                  onClick={() => navigate(1)}
                  className="flex items-center gap-2 font-label text-[10px] tracking-widest uppercase text-white/40 hover:text-brand-gold transition-colors duration-200 group"
                >
                  Sonraki
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-1 scrollbar-hide">
            {galleryItems.map((item, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
                className={`relative flex-shrink-0 w-20 h-14 overflow-hidden transition-all duration-300 ${
                  i === index ? 'ring-2 ring-brand-gold' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <div className="absolute inset-0 bg-brand-anthracite" />
                <Image src={item.src} alt={item.alt} fill className="object-cover" onError={() => {}} />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
