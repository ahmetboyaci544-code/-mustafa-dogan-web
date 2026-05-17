'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface CatalogImage {
  src: string
  label: string
}

const categories: { id: string; label: string; images: CatalogImage[] }[] = [
  { id: 'tumu', label: 'Tümü', images: [] },
  {
    id: 'kereste',
    label: 'Kereste',
    images: [
      { src: '/images/katalog/kereste-katalog-1.jpg', label: 'Kereste' },
    ],
  },
  {
    id: 'plywood-osb',
    label: 'Plywood & OSB',
    images: [
      { src: '/images/katalog/plywood-osb-1.jpg', label: 'Plywood & OSB' },
      { src: '/images/katalog/plywood-osb-2.jpg', label: 'Plywood & OSB' },
      { src: '/images/katalog/plywood-osb-3.jpg', label: 'Plywood & OSB' },
      { src: '/images/katalog/plywood-osb-4.jpg', label: 'Plywood & OSB' },
    ],
  },
  {
    id: 'kilicoglu-kiremit',
    label: 'Kılıçoğlu Megaron Kiremit',
    images: [
      { src: '/images/katalog/kilicoglu-kiremit-1.jpg', label: 'Kılıçoğlu Megaron Kiremit' },
      { src: '/images/katalog/kilicoglu-kiremit-2.jpg', label: 'Kılıçoğlu Megaron Kiremit' },
      { src: '/images/katalog/kilicoglu-kiremit-3.jpg', label: 'Kılıçoğlu Megaron Kiremit' },
      { src: '/images/katalog/kilicoglu-kiremit-4.jpg', label: 'Kılıçoğlu Megaron Kiremit' },
    ],
  },
  {
    id: 'ece-kiremit',
    label: 'ECE Kiremit',
    images: [
      { src: '/images/katalog/ece-kiremit-1.jpg', label: 'ECE Kiremit' },
      { src: '/images/katalog/ece-kiremit-2.jpg', label: 'ECE Kiremit' },
    ],
  },
  {
    id: 'bims',
    label: 'Bims Blok',
    images: [
      { src: '/images/katalog/bims-blok-1.jpg', label: '10–25\'lik Bims Blok' },
    ],
  },
  {
    id: 'su-deposu',
    label: 'Su Depoları',
    images: [
      { src: '/images/katalog/su-deposu-1.jpg', label: 'Akro & Yelkenci Su Deposu' },
      { src: '/images/katalog/su-deposu-2.jpg', label: 'Akro & Yelkenci Su Deposu' },
      { src: '/images/katalog/su-deposu-3.jpg', label: 'Akro & Yelkenci Su Deposu' },
      { src: '/images/katalog/su-deposu-4.jpg', label: 'Akro & Yelkenci Su Deposu' },
      { src: '/images/katalog/su-deposu-5.jpg', label: 'Akro & Yelkenci Su Deposu' },
    ],
  },
]

categories[0].images = categories.slice(1).flatMap((c) => c.images)

export default function CatalogModal({ onClose }: { onClose: () => void }) {
  const [activeCategory, setActiveCategory] = useState('tumu')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const activeCat = categories.find((c) => c.id === activeCategory)!
  const images = activeCat.images

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightbox !== null) setLightbox(null)
        else onClose()
      }
      if (lightbox !== null) {
        if (e.key === 'ArrowRight') setLightbox((lightbox + 1) % images.length)
        if (e.key === 'ArrowLeft') setLightbox((lightbox - 1 + images.length) % images.length)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox, images.length, onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: '#0D0D0D' }}
    >
      {/* Header */}
      <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          {lightbox !== null && (
            <button
              onClick={() => setLightbox(null)}
              className="flex items-center gap-2 cursor-pointer mr-2 transition-colors"
              style={{ color: 'rgba(255,255,255,0.4)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: '#FFFFFF', letterSpacing: '-0.02em' }}>
            {lightbox !== null ? images[lightbox].label : 'Ürün Kataloğu'}
          </span>
          {lightbox === null && (
            <span className="label" style={{ color: 'rgba(255,255,255,0.3)' }}>{images.length} ürün</span>
          )}
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 flex items-center justify-center cursor-pointer transition-colors"
          style={{ color: 'rgba(255,255,255,0.4)' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
          aria-label="Kapat"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {lightbox === null ? (
        <>
          {/* Category tabs */}
          <div className="flex-shrink-0 flex items-center gap-2 px-6 py-3 border-b border-white/[0.06] overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex-shrink-0 px-4 py-2 cursor-pointer transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: activeCategory === cat.id ? '#FFFFFF' : 'rgba(255,255,255,0.35)',
                  background: activeCategory === cat.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                  borderBottom: activeCategory === cat.id ? '1px solid rgba(255,255,255,0.5)' : '1px solid transparent',
                }}
                onMouseEnter={e => { if (activeCategory !== cat.id) e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
                onMouseLeave={e => { if (activeCategory !== cat.id) e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3"
              >
                {images.map((img, i) => (
                  <motion.div
                    key={img.src + i}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                    className="relative aspect-square cursor-pointer overflow-hidden group"
                    onClick={() => setLightbox(i)}
                  >
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    />
                    {/* Label overlay */}
                    <div
                      className="absolute inset-x-0 bottom-0 pt-8 pb-3 px-3"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)' }}
                    >
                      <span
                        className="block truncate"
                        style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)' }}
                      >
                        {img.label}
                      </span>
                    </div>
                    {/* Hover zoom icon */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                      style={{ background: 'rgba(0,0,0,0.2)' }}
                    >
                      <svg className="w-6 h-6 text-white drop-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </>
      ) : (
        /* Lightbox */
        <div className="flex-1 relative">
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-12">
            <div className="relative w-full h-full">
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].label}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>

          <button
            onClick={() => setLightbox((lightbox - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center cursor-pointer transition-colors"
            style={{ background: 'rgba(255,255,255,0.08)' }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.18)')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)')}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => setLightbox((lightbox + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center cursor-pointer transition-colors"
            style={{ background: 'rgba(255,255,255,0.08)' }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.18)')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)')}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5"
            style={{ background: 'rgba(0,0,0,0.5)', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em' }}
          >
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </motion.div>
  )
}
