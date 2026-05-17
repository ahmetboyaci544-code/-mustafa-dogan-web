'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { value: '32+', label: 'Yıl Tecrübe' },
  { value: '15.000 m²', label: 'Üretim Tesisi' },
  { value: '30', label: 'Kişilik Ekip' },
  { value: '120 m³', label: 'Günlük Kapasite' },
]

export default function BizKimizSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="biz-kimiz" ref={ref} className="bg-white overflow-hidden">
      <div className="container-xl py-24 lg:py-32">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-6 h-px bg-[#14305c]" />
            <span className="label">Biz Kimiz</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              letterSpacing: '-0.04em',
              lineHeight: 0.94,
              color: '#111111',
            }}
          >
            Emekle Büyüyen,<br />
            <span style={{ color: '#14305c' }}>Güvenle Sürdürülen.</span>
          </h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[400px]"
          >
            <div className="relative h-full overflow-hidden">
              <Image
                src="/images/bizkimizgorsel.jpg"
                alt="Mustafa Doğan - Doğan Yapı Tasarım Kurucusu"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Subtle overlay gradient */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(20,48,92,0.18) 0%, transparent 60%)' }}
              />
            </div>

            {/* Floating name card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute bottom-6 left-6 right-6 p-5"
              style={{ background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)' }}
            >
              <div
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.03em', color: '#111111' }}
              >
                Mustafa Doğan
              </div>
              <div
                className="mt-1"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#14305c' }}
              >
                Kurucu — Doğan Yapı Tasarım
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Biography */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col justify-start"
          >
            {/* Bio text */}
            <div className="space-y-5 mb-12">
              <p
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '1rem', lineHeight: 1.85, color: '#4A4A4A' }}
              >
                Mustafa Doğan, yapı ve kereste sektöründe <strong style={{ fontWeight: 600, color: '#111111' }}>32 yılı aşkın tecrübesiyle</strong> faaliyet gösteren DOĞAN YAPI TASARIM'ın kurucusudur. İş hayatına yalnızca tek bir hızar makinesiyle başlayan Mustafa Doğan, ilk yıllarda günde 14 saat çalışarak günlük 10–15 m³ üretim kapasitesiyle hizmet vermiştir.
              </p>
              <p
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '1rem', lineHeight: 1.85, color: '#4A4A4A' }}
              >
                Azim, disiplin ve kaliteli üretim anlayışı sayesinde küçük bir atölyeden güçlü bir üretim tesisine dönüşen firma, bugün sektörün güvenilir markalarından biri haline gelmiştir.
              </p>
              <p
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '1rem', lineHeight: 1.85, color: '#4A4A4A' }}
              >
                Bugün DOĞAN YAPI TASARIM, <strong style={{ fontWeight: 600, color: '#111111' }}>15.000 m² alana sahip</strong> depo ve üretim tesisinde, 30 kişilik profesyonel ekibiyle günlük 120 m³ üretim kapasitesine ulaşmıştır. Türkiye'nin dört bir yanına kereste sevkiyatı gerçekleştiren firma; kaliteli ürün, hızlı teslimat ve güvenilir ticaret anlayışıyla geniş bir müşteri ağına sahiptir.
              </p>
              <p
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '1rem', lineHeight: 1.85, color: '#4A4A4A' }}
              >
                Mustafa Doğan'ın en büyük hedefi her zaman müşteri memnuniyeti olmuş, yıllar içerisinde bu güveni ve memnuniyeti sağlamayı başarmıştır. DOĞAN YAPI TASARIM bugün; <strong style={{ fontWeight: 600, color: '#111111' }}>kaliteye, emeğe ve güvene dayalı büyümenin</strong> güçlü bir temsilcisi olarak faaliyetlerini sürdürmektedir.
              </p>
            </div>

            {/* Divider */}
            <div className="w-12 h-px bg-[#14305c] mb-12" />

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.09, duration: 0.7 }}
                  className="border border-black/[0.08] bg-[#F9F9F7] p-5 hover:border-[#14305c]/30 transition-colors duration-300"
                >
                  <div
                    className="mb-1"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.7rem', letterSpacing: '-0.04em', color: '#14305c' }}
                  >
                    {stat.value}
                  </div>
                  <div className="label" style={{ color: '#6B6B6B', fontSize: '0.58rem' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
