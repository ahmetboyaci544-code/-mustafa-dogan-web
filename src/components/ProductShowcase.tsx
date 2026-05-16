'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

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
    image: '/images/kereste-sevkiyat-1.jpg',
    fallback: 'from-[#2A1F14] to-[#3D2B1F]',
  },
  {
    id: 'demir',
    index: '02',
    category: 'Structural Steel',
    title: 'İnşaat Demiri',
    description:
      'Nervürlü inşaat demiri, profil çelik ve hasır. Yüksek mukavemet standartlarında sertifikalı çelik ürünler.',
    specs: ['Nervürlü Demir', 'İnşaat Profili', 'Hasır Çelik', 'Bağlantı Elemanı'],
    image: '/images/demir-sevkiyat.jpg',
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
    image: '/images/plywood-sevkiyat-a.jpg',
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
    image: '/images/cati-kiremit.jpg',
    fallback: 'from-[#1E100A] to-[#2C1810]',
  },
]

export default function ProductShowcase() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
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
          <p
            className="text-[#6B6B6B] max-w-sm self-end"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, lineHeight: 1.7 }}
          >
            Küçük ölçekli yapılardan büyük şantiye projelerine kadar eksiksiz
            malzeme tedariki, güçlü stok altyapısı ve hızlı lojistik.
          </p>
        </motion.div>
      </div>

      <div className="hr-subtle" />

      {products.map((product, i) => (
        <ProductItem key={product.id} product={product} index={i} />
      ))}
    </section>
  )
}

function ProductItem({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const waMsg = encodeURIComponent(`Merhaba, ${product.title} ürünü hakkında bilgi almak istiyorum.`)
  const waLink = `https://wa.me/${WHATSAPP}?text=${waMsg}`
  const isReversed = index % 2 === 1
  const bgColor = isReversed ? '#FFFFFF' : '#F7F6F3'

  return (
    <div ref={ref}>
      <div className={`grid lg:grid-cols-2 ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>

        {/* Image */}
        <div
          className={`relative overflow-hidden ${isReversed ? 'lg:col-start-2' : ''}`}
          style={{ minHeight: '460px' }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.06 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${product.fallback}`} />
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
          {/* Index watermark */}
          <div
            className="absolute bottom-5 right-5 leading-none pointer-events-none"
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
