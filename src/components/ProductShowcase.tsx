'use client'
import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import CatalogModal from '@/components/CatalogModal'

const WHATSAPP = '905468965635'

const products = [
  {
    id: 'kereste',
    index: '01',
    category: 'Timber & Lumber',
    title: 'Kereste',
    description:
      'Her boyut ve kalitede yapısal kereste, lata, kiriş ve özel kesim çözümleri. Projenizin ölçeğine göre kalibre edilmiş ahşap tedariki.',
    specs: ['Yapısal Kereste', 'Lata & Kiriş', 'Özel Kesim', 'Büyük Stok'],
    images: [
      '/images/kereste-sevkiyat-1.jpg',
      '/images/katalog/kereste-katalog-1.jpg',
      '/images/kereste-1.jpg',
      '/images/kereste-2.jpg',
      '/images/kereste-3.jpg',
    ],
    fallback: 'from-[#2A1F14] to-[#3D2B1F]',
  },
  {
    id: 'demir',
    index: '02',
    category: 'Telescopic Systems',
    title: 'Teleskopik Demir Direk',
    description:
      'Kalıp sistemlerinde kullanılan teleskopik demir direkler. Yüksek yük taşıma kapasitesi ve ayarlanabilir boy seçenekleriyle güvenli destek çözümleri.',
    specs: ['Ayarlanabilir Boy', 'Yüksek Mukavemet', 'Kalıp Sistemi', 'Büyük Stok'],
    images: [
      '/images/demir-sevkiyat.jpg',
      '/images/demir-sevkiyat-a.jpg',
      '/images/demir-sevkiyat-b.jpg',
    ],
    fallback: 'from-[#0E1A26] to-[#1C2B3A]',
  },
  {
    id: 'plywood',
    index: '03',
    category: 'Panel Products',
    title: 'Plywood & OSB',
    description:
      'Kalıp plywood, OSB levha ve özel panel çözümleri. Dayanıklı yapı, mükemmel yüzey kalitesiyle uzun ömürlü kullanım.',
    specs: ['Kalıp Plywood', 'OSB Levha', 'Kaplamalı Panel', 'Özel Ebat'],
    images: [
      '/images/plywood-sevkiyat-a.jpg',
      '/images/katalog/plywood-osb-1.jpg',
      '/images/katalog/plywood-osb-2.jpg',
      '/images/katalog/plywood-osb-3.jpg',
      '/images/katalog/plywood-osb-4.jpg',
      '/images/plywood.jpg',
    ],
    fallback: 'from-[#201A0E] to-[#2D2416]',
  },
  {
    id: 'cati',
    index: '04',
    category: 'Roofing Systems',
    title: 'Çatı Sistemleri',
    description:
      'Kiremit, çatı kaplama levhaları, yalıtım ve tüm çatı sistemleri. Güvenli, estetik ve uzun ömürlü çatı çözümleri.',
    specs: ['Beton Kiremit', 'Çatı Levhası', 'İzolasyon', 'Yağmur Oluğu'],
    images: [
      '/images/cati-kiremit.jpg',
      '/images/katalog/kilicoglu-kiremit-1.jpg',
      '/images/katalog/kilicoglu-kiremit-2.jpg',
      '/images/katalog/kilicoglu-kiremit-3.jpg',
      '/images/katalog/ece-kiremit-1.jpg',
      '/images/katalog/ece-kiremit-2.jpg',
      '/images/kiremit-sevkiyat-a.jpg',
    ],
    fallback: 'from-[#1E100A] to-[#2C1810]',
  },
]

export default function ProductShowcase() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [catalogOpen, setCatalogOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = catalogOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [catalogOpen])

  return (
    <>
    <section id="urunler" ref={ref} className="bg-[#F7F6F3]">
      {/* Section header */}
      <div className="container-xl pt-12 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-start justify-between flex-wrap gap-8"
        >
          <div>

            <h2
              className="text-[#111111]"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
                letterSpacing: '-0.04em',
                lineHeight: 0.92,
              }}
            >
              Ana Ürün<br />
              <span style={{ color: '#14305c' }}>Portfolyosu</span>
            </h2>
          </div>
          <div className="flex flex-col gap-5 self-start max-w-sm">
            <p
              className="text-[#6B6B6B]"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, lineHeight: 1.7 }}
            >
              Küçük ölçekli yapılardan büyük şantiye projelerine kadar eksiksiz
              malzeme tedariki, güçlü stok altyapısı ve hızlı lojistik.
            </p>
            <button
              onClick={() => setCatalogOpen(true)}
              className="inline-flex items-center gap-3 group cursor-pointer w-fit px-6 py-3.5 border border-[#14305c] text-[#14305c] hover:bg-[#14305c] hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              <span className="label transition-colors duration-200" style={{ fontFamily: 'var(--font-sans)' }}>
                Ürün Kataloğu
              </span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      <div className="hr-subtle" />

      {products.map((product, i) => (
        <ProductItem key={product.id} product={product} index={i} />
      ))}
    </section>

    <AnimatePresence>
      {catalogOpen && <CatalogModal onClose={() => setCatalogOpen(false)} />}
    </AnimatePresence>
    </>
  )
}

function ProductItem({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [slide, setSlide] = useState(0)
  const [hovered, setHovered] = useState(false)

  const total = product.images.length
  const prev = useCallback(() => setSlide((s) => (s - 1 + total) % total), [total])
  const next = useCallback(() => setSlide((s) => (s + 1) % total), [total])

  useEffect(() => {
    if (hovered) return
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [hovered, next])

  const waMsg = encodeURIComponent(`Merhaba, ${product.title} ürünü hakkında bilgi almak istiyorum.`)
  const waLink = `https://wa.me/${WHATSAPP}?text=${waMsg}`
  const isReversed = index % 2 === 1
  const bgColor = isReversed ? '#FFFFFF' : '#F7F6F3'

  return (
    <div ref={ref}>
      <div className={`grid lg:grid-cols-2 ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>

        {/* Image Slider */}
        <div
          className={`relative overflow-hidden ${isReversed ? 'lg:col-start-2' : ''}`}
          style={{ minHeight: '460px' }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={slide}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.fallback}`} />
              <Image
                src={product.images[slide]}
                alt={`${product.title} ${slide + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          {total > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition-all duration-200"
                style={{ background: 'rgba(0,0,0,0.35)', color: '#fff' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.65)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.35)')}
                aria-label="Önceki"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition-all duration-200"
                style={{ background: 'rgba(0,0,0,0.35)', color: '#fff' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.65)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.35)')}
                aria-label="Sonraki"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dot indicators */}
          {total > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === slide ? '20px' : '6px',
                    height: '6px',
                    borderRadius: '3px',
                    background: i === slide ? '#ffffff' : 'rgba(255,255,255,0.45)',
                  }}
                  aria-label={`Görsel ${i + 1}`}
                />
              ))}
            </div>
          )}

          {/* Index watermark */}
          <div
            className="absolute bottom-5 right-5 leading-none pointer-events-none z-10"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(4rem, 9vw, 7rem)',
              letterSpacing: '-0.06em',
              color: 'rgba(255,255,255,0.12)',
            }}
          >
            {product.index}
          </div>
        </div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`flex flex-col justify-center py-14 lg:py-0 ${
            isReversed
              ? 'px-6 sm:px-12 lg:pl-16 xl:pl-24 lg:pr-8 xl:pr-12 lg:col-start-1'
              : 'px-6 sm:px-12 lg:pl-16 xl:pl-24 lg:pr-12'
          }`}
          style={{ background: bgColor }}
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-7">
            <span className="label" style={{ color: '#14305c' }}>{product.index}</span>
            <span className="block w-5 h-px" style={{ background: 'rgba(20,48,92,0.3)' }} />
            <span className="label" style={{ color: '#6B6B6B' }}>{product.category}</span>
          </div>

          {/* Title */}
          <h2
            className="mb-5"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
              letterSpacing: '-0.04em',
              lineHeight: 0.92,
              color: '#111111',
            }}
          >
            {product.title}
          </h2>

          {/* Desc */}
          <p
            className="leading-relaxed mb-8 max-w-md"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, color: '#6B6B6B' }}
          >
            {product.description}
          </p>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 mb-10">
            {product.specs.map((spec) => (
              <div key={spec} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#14305c', opacity: 0.5 }} />
                <span className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: '#444444' }}>{spec}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group cursor-pointer w-fit px-6 py-3.5 border border-[#14305c] text-[#14305c] hover:bg-[#14305c] hover:text-white transition-all duration-200"
          >
            <span className="label transition-colors duration-200" style={{ fontFamily: 'var(--font-sans)' }}>
              Fiyat Teklifi Al
            </span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
      <div className="hr-subtle" />
    </div>
  )
}
