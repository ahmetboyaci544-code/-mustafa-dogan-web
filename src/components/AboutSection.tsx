'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const fadeUp = {
  hidden: { y: 20 },
  visible: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const values = [
  { icon: '◆', title: 'Güvenilirlik', desc: 'Her teslimat, her ürün — sözümüz güvencenizdir.' },
  { icon: '◆', title: 'Kalite', desc: 'Standart üstü malzemeler, sıkı kalite kontrol süreçleri.' },
  { icon: '◆', title: 'Lojistik Gücü', desc: "Türkiye'nin her köşesine zamanında ve güvenli teslimat." },
  { icon: '◆', title: 'Deneyim', desc: 'Sektörde yılların verdiği derin bilgi ve network.' },
]

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="hakkimizda" ref={ref} className="bg-brand-cream text-brand-black py-16 lg:py-24">
      <div className="container-lg">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Image Stack */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative pt-16"
          >
            {/* Main image */}
            <motion.div variants={fadeUp} className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/patron.jpg"
                alt="Mustafa Doğan"
                fill
                className="object-cover object-top"
              />
            </motion.div>


{/* Gold accent corner */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute top-12 -left-4 w-16 h-16 border-t-2 border-l-2 border-brand-gold"
            />

            {/* Values grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 mt-16">
              {values.map((v) => (
                <div key={v.title} className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-brand-gold text-[8px]">{v.icon}</span>
                    <span className="font-label text-xs tracking-widest uppercase text-brand-black font-semibold">
                      {v.title}
                    </span>
                  </div>
                  <p className="text-brand-gray text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-brand-gold" />
              <span className="section-label text-brand-gold">Hakkımızda</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-brand-black leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 600 }}
            >
              Kırşehir&apos;de İnşaat Malzemelerinde <br />
              <span className="text-brand-gold">Güvenin Köklü Adresi</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-brand-steel text-base leading-relaxed mb-4">
              Kırşehir merkezli güçlü yapısı ve yıllara dayanan sektör deneyimiyle Mustafa Doğan İnşaat Malzemeleri,
              Türkiye genelinde güvenilir inşaat malzemesi tedariki sağlayan öncü firmalardan biridir. Özellikle
              Kırşehir inşaat malzemeleri sektöründe kaliteli ürün, hızlı teslimat ve güçlü stok altyapısıyla fark yaratmaktadır.
            </motion.p>
            <motion.p variants={fadeUp} className="text-brand-steel text-base leading-relaxed mb-4">
              Kereste, demir, plywood, kalıp sistemleri, çatı malzemeleri ve birçok yapı ürününden oluşan geniş ürün
              yelpazemizle; bireysel projelerden büyük ölçekli şantiyelere kadar profesyonel çözümler sunuyoruz.
              Kırşehir&apos;de inşaat malzemesi denildiğinde akla gelen firmalardan biri olmanın sorumluluğuyla,
              her projeye güvenilir hizmet anlayışıyla yaklaşmaktayız.
            </motion.p>
            <motion.p variants={fadeUp} className="text-brand-steel text-base leading-relaxed mb-4">
              Modern lojistik ağımız sayesinde Kırşehir başta olmak üzere Türkiye&apos;nin dört bir yanına hızlı ve
              eksiksiz sevkiyat sağlıyor; kaliteyi zamanında teslim ediyoruz. Dayanıklı ürünler, güçlü tedarik ağı
              ve müşteri memnuniyeti odaklı hizmet anlayışımızla sektörde sağlam bir yer edinmeye devam ediyoruz.
            </motion.p>
            <motion.p variants={fadeUp} className="text-brand-steel text-base leading-relaxed font-semibold mb-10">
              Mustafa Doğan İnşaat Malzemeleri — Kırşehir&apos;de güvenilir yapı malzemesi tedarikinin güçlü adı.
            </motion.p>

            {/* Founders */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 mb-10">
              {[
                { name: 'Mustafa Doğan', title: 'Kurucu & Sahip', initial: 'MD' },
                { name: 'Mehmet Ali Doğan', title: 'Ortak', initial: 'MA' },
              ].map((person) => (
                <div key={person.name} className="flex items-center gap-3 p-4 bg-white border border-brand-silver/40">
                  <div className="w-11 h-11 bg-brand-charcoal flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-brand-gold text-sm font-semibold">{person.initial}</span>
                  </div>
                  <div>
                    <div className="font-sans text-brand-black text-sm font-semibold">{person.name}</div>
                    <div className="font-label text-brand-gray text-xs tracking-wider uppercase">{person.title}</div>
                  </div>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
