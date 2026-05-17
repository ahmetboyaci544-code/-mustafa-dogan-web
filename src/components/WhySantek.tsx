'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const bigStats = [
  { value: 30, suffix: '+', unit: 'Yıl', label: 'Sektör Deneyimi' },
  { value: 500, suffix: '+', unit: 'Ürün', label: 'Geniş Portföy' },
  { value: 81, suffix: '', unit: 'İl', label: 'Türkiye Geneli' },
]

const pillars = [
  {
    number: '01',
    title: 'Güvenilirlik',
    desc: 'Her sipariş eksiksiz, her teslimat zamanında. Yılların verdiği güçlü iş ahlakı ve müşteri güvencesi.',
  },
  {
    number: '02',
    title: 'Kalite Kontrolü',
    desc: 'Standart üstü ürün kalitesi, sıkı tedarikçi denetimi ve her partide tutarlı malzeme güvencesi.',
  },
  {
    number: '03',
    title: 'Lojistik Gücü',
    desc: "Güçlü araç filosu, geniş depo kapasitesi ve Türkiye'nin her köşesine zamanında ulaşım.",
  },
]

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return <span ref={ref}>{count.toLocaleString('tr-TR')}{suffix}</span>
}

export default function WhySantek() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="neden-biz" ref={ref} className="bg-white">

      <div className="container-xl py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="block w-6 h-px bg-[#14305c]" />
          <span className="label">Neden Biz</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
              letterSpacing: '-0.04em',
              lineHeight: 0.92,
              color: '#111111',
            }}
          >
            Türkiye&apos;nin Güvenilir <br />
            <span style={{ color: '#14305c' }}>Tedarik Ortağı.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="self-end leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, color: '#6B6B6B' }}
          >
            Kırşehir merkezli güçlü altyapımız ve yılların sektör deneyimiyle; bireysel
            projelerden devasa şantiye taleplerine kadar her ölçekte eksiksiz çözüm sunuyoruz.
          </motion.p>
        </div>

        {/* Stat numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-black/[0.08] divide-y sm:divide-y-0 sm:divide-x divide-black/[0.08]">
          {bigStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.8 }}
              className="flex flex-col items-center justify-center py-14 px-8 hover:bg-[#F7F6F3] transition-colors duration-300"
            >
              <div
                className="leading-none mb-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(4rem, 9vw, 7.5rem)',
                  letterSpacing: '-0.05em',
                  color: '#14305c',
                }}
              >
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div
                className="mb-1"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em', color: '#111111' }}
              >
                {stat.unit}
              </div>
              <div className="label" style={{ color: '#6B6B6B', fontSize: '0.58rem' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="hr-subtle" />

      {/* Pillars */}
      <div className="container-xl py-12 lg:py-14">
        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-black/[0.07]">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.8 }}
              className="py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0"
            >
              <span
                className="block mb-6"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.8rem', letterSpacing: '-0.04em', color: 'rgba(20,48,92,0.15)' }}
              >
                {pillar.number}
              </span>
              <h3
                className="mb-4"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem', letterSpacing: '-0.02em', color: '#111111' }}
              >
                {pillar.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.9rem', color: '#6B6B6B', lineHeight: 1.7 }}>
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
