'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const deliveryStats = [
  { value: '1.000+', label: 'Aylık Sevkiyat' },
  { value: '81', label: 'İl Kapsamı' },
  { value: '50+', label: 'Araç Filosu' },
  { value: '24/7', label: 'Operasyon' },
]

const features = [
  'Güvenli ambalaj ve sabitleme sistemleri',
  'Sipariş takip ve teslimat bildirimi',
  "Türkiye'nin uzak noktalarına dahil teslim",
  'Büyük hacimli ve ağır yük taşımacılığı',
]

const galleryImages = [
  '/images/demir-sevkiyat.jpg',
  '/images/demir-sevkiyat-a.jpg',
  '/images/demir-sevkiyat-b.jpg',
  '/images/kereste-sevkiyat-1.jpg',
  '/images/kereste-sevkiyat-2.jpg',
  '/images/kereste-sevkiyat-a.jpg',
  '/images/kereste-sevkiyat-b.jpg',
  '/images/kereste-sevkiyat-c.jpg',
  '/images/kereste-sevkiyat-d.jpg',
  '/images/kereste-sevkiyat-e.jpg',
  '/images/kereste-sevkiyat-f.jpg',
  '/images/kereste-sevkiyat-g.jpg',
  '/images/kereste-sevkiyat-h.jpg',
  '/images/kereste-sevkiyat-i.jpg',
  '/images/kereste-sevkiyat-j.jpg',
  '/images/kereste-sevkiyat-k.jpg',
  '/images/kereste-sevkiyat-m.jpg',
  '/images/kereste-sevkiyat-n.jpg',
  '/images/kereste-sevkiyat-o.jpg',
  '/images/plywood-sevkiyat-a.jpg',
  '/images/plywood-sevkiyat-b.jpg',
  '/images/osb-sevkiyat.jpg',
  '/images/kiremit-sevkiyat-a.jpg',
  '/images/kiremit-sevkiyat-b.jpg',
  '/images/beton-sevkiyat-a.jpg',
]

function getLabel(src: string) {
  const name = src.split('/').pop()?.replace(/\.[^.]+$/, '') ?? ''
  const words = name.split('-').filter(w => !/^[a-z]$|^\d+$/.test(w))
  return words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

const half = Math.ceil(galleryImages.length / 2)
const rowA = [...galleryImages.slice(0, half), ...galleryImages.slice(0, half)]
const rowB = [...galleryImages.slice(half), ...galleryImages.slice(half)]

function GalleryModal({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selected !== null) setSelected(null)
        else onClose()
      }
      if (e.key === 'ArrowRight' && selected !== null)
        setSelected((selected + 1) % galleryImages.length)
      if (e.key === 'ArrowLeft' && selected !== null)
        setSelected((selected - 1 + galleryImages.length) % galleryImages.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selected, onClose])

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
          {selected !== null && (
            <button
              onClick={() => setSelected(null)}
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
            {selected !== null
              ? `${selected + 1} / ${galleryImages.length}`
              : 'Sevkiyat Galerisi'}
          </span>
          {selected === null && (
            <span className="label" style={{ color: 'rgba(255,255,255,0.3)' }}>{galleryImages.length} fotoğraf</span>
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

      {selected === null ? (
        /* Grid View */
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.025, duration: 0.35 }}
                className="relative aspect-[4/3] cursor-pointer overflow-hidden group"
                onClick={() => setSelected(i)}
              >
                <Image
                  src={img}
                  alt={`Sevkiyat ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }} />
                <span
                  className="absolute bottom-2 left-2.5 right-2.5 truncate"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase' }}
                >
                  {getLabel(img)}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        /* Lightbox View */
        <div className="flex-1 relative">
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-12">
            <div className="relative w-full h-full">
              <Image
                src={galleryImages[selected]}
                alt={`Sevkiyat ${selected + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>

          {/* Prev */}
          <button
            onClick={() => setSelected((selected - 1 + galleryImages.length) % galleryImages.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center cursor-pointer transition-colors"
            style={{ background: 'rgba(255,255,255,0.08)' }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.18)')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)')}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={() => setSelected((selected + 1) % galleryImages.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center cursor-pointer transition-colors"
            style={{ background: 'rgba(255,255,255,0.08)' }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.18)')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)')}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5"
            style={{ background: 'rgba(0,0,0,0.5)', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em' }}
          >
            {selected + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default function DeliverySection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [galleryOpen, setGalleryOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = galleryOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [galleryOpen])

  return (
    <>
      <section id="sevkiyat" ref={ref} className="bg-[#EFEFED] overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px]">

          {/* Left: Content */}
          <div className="flex flex-col justify-center px-6 sm:px-12 lg:pl-16 xl:pl-24 lg:pr-12 py-20 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="block w-6 h-px bg-[#14305c]" />
                <span className="label">Sevkiyat</span>
              </div>

              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                  letterSpacing: '-0.04em',
                  lineHeight: 0.94,
                  color: '#111111',
                }}
              >
                Zamanında,<br />
                <span style={{ color: '#14305c' }}>Eksiksiz Teslimat.</span>
              </h2>

              <p
                className="leading-relaxed mb-10 max-w-md"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, color: '#6B6B6B' }}
              >
                Güçlü araç filomuz ve deneyimli lojistik ekibimizle büyük hacimli
                sevkiyatları en zor koşullarda bile zamanında gerçekleştiriyoruz.
              </p>

              <div className="space-y-3 mb-12">
                {features.map((feat, i) => (
                  <motion.div
                    key={feat}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.7 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#14305c', opacity: 0.5 }} />
                    <span className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: '#6B6B6B' }}>{feat}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {deliveryStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.09, duration: 0.7 }}
                    className="border border-black/[0.08] bg-white p-5 hover:border-[#14305c]/30 transition-colors duration-300"
                  >
                    <div
                      className="mb-1"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.9rem', letterSpacing: '-0.04em', color: '#14305c' }}
                    >
                      {stat.value}
                    </div>
                    <div className="label" style={{ color: '#6B6B6B', fontSize: '0.58rem' }}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Gallery Button */}
              <motion.button
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55, duration: 0.7 }}
                onClick={() => setGalleryOpen(true)}
                className="inline-flex items-center gap-3 group cursor-pointer w-fit px-6 py-3.5 border border-[#14305c] text-[#14305c] hover:bg-[#14305c] hover:text-white transition-all duration-200"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="label" style={{ fontFamily: 'var(--font-sans)' }}>Sevkiyat Galerisi</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Scrolling Gallery */}
          <div
            className="relative min-h-[420px] lg:min-h-0 overflow-hidden flex flex-col justify-center gap-2 py-2"
            style={{ background: '#111111' }}
          >
            {/* Gradient fade left */}
            <div
              className="absolute top-0 left-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, #111111 0%, transparent 100%)' }}
            />
            {/* Gradient fade right */}
            <div
              className="absolute top-0 right-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, #111111 0%, transparent 100%)' }}
            />

            {/* Row A — scroll left */}
            <div className="overflow-hidden relative">
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 38, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
                className="flex gap-2 pr-2 w-max"
              >
                {rowA.map((img, i) => (
                  <div key={i} className="relative flex-shrink-0 h-[180px] w-[240px] overflow-hidden">
                    <Image src={img} alt="" fill className="object-cover" sizes="240px" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
                    <span
                      className="absolute bottom-2.5 left-3 right-3 truncate"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase' }}
                    >
                      {getLabel(img)}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row B — scroll right */}
            <div className="overflow-hidden relative">
              <motion.div
                animate={{ x: ['-50%', '0%'] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
                className="flex gap-2 pr-2 w-max"
              >
                {rowB.map((img, i) => (
                  <div key={i} className="relative flex-shrink-0 h-[180px] w-[240px] overflow-hidden">
                    <Image src={img} alt="" fill className="object-cover" sizes="240px" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
                    <span
                      className="absolute bottom-2.5 left-3 right-3 truncate"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase' }}
                    >
                      {getLabel(img)}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {galleryOpen && <GalleryModal onClose={() => setGalleryOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
