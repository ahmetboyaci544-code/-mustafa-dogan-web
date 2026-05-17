'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const WHATSAPP_NUMBER = '905468965635'

const products = [
  {
    id: 'kereste',
    title: 'Kereste',
    subtitle: 'Timber & Lumber',
    desc: 'Her boyut ve kalitede yapısal kereste, lata, kiriş ve özel kesim çözümleri. İnşaat projeleriniz için güvenilir ahşap tedariki.',
    image: '/images/kereste-sevkiyat-1.jpg',
    fallbackGradient: 'from-[#3D2B1F] to-[#5C3D28]',
    items: ['Yapısal Kereste', 'Lata & Çıta', 'Kiriş', 'Özel Kesim'],
  },
  {
    id: 'demir',
    title: 'Teleskopik Demir Direk',
    subtitle: 'Telescopic Systems',
    desc: 'Kalıp sistemlerinde kullanılan teleskopik demir direkler. Yüksek yük taşıma kapasitesi ve ayarlanabilir boy seçenekleriyle güvenli destek çözümleri.',
    image: '/images/demir-sevkiyat.jpg',
    fallbackGradient: 'from-[#1C2B3A] to-[#2D3F52]',
    items: ['Ayarlanabilir Boy', 'Yüksek Mukavemet', 'Kalıp Sistemi', 'Büyük Stok'],
  },
  {
    id: 'plywood',
    title: 'Plywood & OSB',
    subtitle: 'Panel Products',
    desc: 'Kalıp plywood, OSB ve özel panel çözümleri. Dayanıklı yapı, mükemmel yüzey kalitesiyle uzun ömürlü kullanım.',
    image: '/images/plywood-sevkiyat-a.jpg',
    fallbackGradient: 'from-[#2D2416] to-[#4A3820]',
    items: ['Kalıp Plywood', 'OSB Levha', 'Kaplamalı Plywood', 'Özel Ebat'],
  },
  {
    id: 'kalip',
    title: 'Kalıp Sistemleri',
    subtitle: 'Formwork Systems',
    desc: 'Modern kalıp sistemleri, kalıp kiralama ve teknik destek. Verimliliği artıran akıllı çözümlerle inşaat hızınızı yükseltin.',
    image: '/images/hero-main.jpg',
    fallbackGradient: 'from-[#1A1A2E] to-[#2A2A42]',
    items: ['Kolon Kalıbı', 'Perde Kalıbı', 'Döşeme Kalıbı', 'Kiralama Hizmeti'],
  },
  {
    id: 'cati',
    title: 'Çatı Malzemeleri',
    subtitle: 'Roofing Systems',
    desc: 'Kiremit, çatı kaplama levhaları, yalıtım malzemeleri ve tüm çatı sistemleri. Güvenli ve estetik çatı çözümleri.',
    image: '/images/cati-kiremit.jpg',
    fallbackGradient: 'from-[#2C1810] to-[#4A2815]',
    items: ['Beton Kiremit', 'Çatı Levhası', 'İzolasyon', 'Yağmur Oluğu'],
  },
  {
    id: 'diger',
    title: 'Diğer Malzemeler',
    subtitle: 'Construction Materials',
    desc: 'Çimento, gaz beton, pimapen pencere, plastik parke ve yüzlerce çeşit yapı malzemesi. Tek çatı altında kapsamlı çözüm.',
    image: '/images/insaat-malzemeleri.jpg',
    fallbackGradient: 'from-[#1E2422] to-[#2E3632]',
    items: ['Çimento', 'Gaz Beton', 'Su Tankerleri', 'Yalıtım'],
  },
]

type Product = typeof products[0]

const cardVariants = {
  hidden: { y: 30 },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const waMessage = encodeURIComponent(
    `Merhaba, ${product.title} ürünü hakkında fiyat ve detay bilgisi almak istiyorum.`
  )
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="bg-brand-anthracite w-full max-w-lg overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${product.fallbackGradient}`} />
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover opacity-70"
              onError={() => {}}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-anthracite via-black/10 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-brand-gold bg-black/50 backdrop-blur-sm px-3 py-1">
                {product.subtitle}
              </span>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-display text-white text-2xl font-semibold mb-2">{product.title}</h3>
            <p className="text-brand-muted text-sm leading-relaxed mb-5">{product.desc}</p>

            {/* Items */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {product.items.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                  <span className="text-brand-silver/70 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 px-6 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp ile Bilgi Al
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function ProductsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <>
      <section id="urunler" ref={ref} className="bg-brand-charcoal py-16 lg:py-24">
        <div className="container-lg">
          {/* Header */}
          <motion.div
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="block w-8 h-px bg-brand-gold" />
              <span className="section-label">Ürünlerimiz</span>
              <span className="block w-8 h-px bg-brand-gold" />
            </div>
            <h2
              className="font-display text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 600 }}
            >
              Ana Ürün Kategorilerimiz
            </h2>
            <p className="text-brand-muted max-w-2xl mx-auto text-base">
              Geniş ürün yelpazemiz ve güçlü stok altyapımızla, küçük ölçekli yapılardan büyük şantiye projelerine
              kadar her aşamada eksiksiz ve güvenilir malzeme tedariki sağlıyoruz.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="group relative overflow-hidden bg-brand-anthracite cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Background Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.fallbackGradient}`} />
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    onError={() => {}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-anthracite via-black/20 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="font-label text-[10px] tracking-[0.3em] uppercase text-brand-gold bg-black/40 backdrop-blur-sm px-3 py-1">
                      {product.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-white text-2xl font-semibold mb-2 group-hover:text-brand-gold transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-4">
                    {product.desc}
                  </p>

                  {/* Items list */}
                  <div className="grid grid-cols-2 gap-1">
                    {product.items.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-brand-gold flex-shrink-0" />
                        <span className="text-brand-silver/60 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom arrow */}
                  <div className="mt-6 flex items-center gap-2 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-label text-xs tracking-widest uppercase">Detaylar</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Hover border accent */}
                <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ y: 15 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-14"
          >
            <button
              onClick={() => document.querySelector('#iletisim')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline"
            >
              Teklif Alın
            </button>
          </motion.div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  )
}
