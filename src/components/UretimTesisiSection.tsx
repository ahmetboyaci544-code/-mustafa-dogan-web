'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type Item = { src: string; type: 'image' | 'video'; label: string }

const items: Item[] = [
  { src: '/images/uretimtesisi/uretim-alani-a.jpeg', type: 'image', label: 'Üretim Alanı' },
  { src: '/images/uretimtesisi/merkez-ofis-1.jpeg',  type: 'image', label: 'Merkez Ofis' },
  { src: '/images/uretimtesisi/uretim-alani-1.mp4',  type: 'video', label: 'Üretim Alanı' },
  { src: '/images/uretimtesisi/satis-ofisi-1.jpeg',  type: 'image', label: '2. Satış Ofisi' },
  { src: '/images/uretimtesisi/uretim-alani-b.jpg',  type: 'image', label: 'Üretim Alanı' },
  { src: '/images/uretimtesisi/merkez-ofis-2.jpeg',  type: 'image', label: 'Merkez Ofis' },
  { src: '/images/uretimtesisi/uretim-alani-2.mp4',  type: 'video', label: 'Üretim Alanı' },
  { src: '/images/uretimtesisi/satis-ofisi-2.jpeg',  type: 'image', label: '2. Satış Ofisi' },
]

const CARD_W = 380
const GAP = 16

function CarouselCard({ item, onClick }: { item: Item; onClick: () => void }) {
  return (
    <div
      className="group relative flex-shrink-0 cursor-zoom-in overflow-hidden"
      style={{ width: CARD_W, height: 260 }}
      onClick={onClick}
    >
      {item.type === 'image' ? (
        <Image
          src={item.src}
          alt={item.label}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={`${CARD_W}px`}
          draggable={false}
        />
      ) : (
        <video
          src={item.src}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {/* gradient + label */}
      <div
        className="absolute inset-0 flex items-end p-4 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            fontSize: '0.65rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.92)',
          }}
        >
          {item.label}
        </span>
      </div>

      {/* hover border */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/30 transition-colors duration-300 pointer-events-none" />
    </div>
  )
}

export default function UretimTesisiSection() {
  const [paused, setPaused] = useState(false)
  const [selected, setSelected] = useState<Item | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  // close lightbox on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const doubled = [...items, ...items]

  return (
    <section className="bg-[#F4F4F2] py-24 overflow-hidden">
      <style>{`
        @keyframes uretim-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - ${GAP / 2}px)); }
        }
      `}</style>

      {/* Header */}
      <div className="container-xl mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-6 h-px bg-[#14305c]" />
          <span className="label">Üretim Tesisimiz</span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            letterSpacing: '-0.04em',
            lineHeight: 0.94,
            color: '#111111',
          }}
        >
          Tesislerimiz &amp;<br />
          <span style={{ color: '#14305c' }}>Çalışma Alanlarımız</span>
        </h2>
      </div>

      {/* Scrolling carousel */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{
            gap: GAP,
            animation: `uretim-scroll 38s linear infinite`,
            animationPlayState: paused ? 'paused' : 'running',
            width: 'max-content',
          }}
        >
          {doubled.map((item, i) => (
            <CarouselCard key={i} item={item} onClick={() => setSelected(item)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(10px)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-10 right-0 flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
              >
                Kapat &times;
              </button>

              {selected.type === 'image' ? (
                <div className="relative w-full" style={{ maxHeight: '80vh' }}>
                  <Image
                    src={selected.src}
                    alt={selected.label}
                    width={1400}
                    height={900}
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: '80vh' }}
                    priority
                  />
                </div>
              ) : (
                <video
                  src={selected.src}
                  className="w-full"
                  style={{ maxHeight: '80vh' }}
                  controls
                  autoPlay
                  playsInline
                />
              )}

              {/* Caption */}
              <div className="mt-4 text-center">
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    fontSize: '0.65rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  {selected.label}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
