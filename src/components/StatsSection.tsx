'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Stat {
  end: number
  suffix: string
  label: string
  sublabel: string
}

const stats: Stat[] = [
  { end: 20, suffix: '+', label: 'Yıllık Deneyim', sublabel: 'Sektörde köklü geçmiş' },
  { end: 500, suffix: '+', label: 'Ürün Çeşidi', sublabel: 'Geniş ürün portföyü' },
  { end: 81, suffix: '', label: 'İl Kapsamı', sublabel: "Türkiye'nin tamamı" },
  { end: 5000, suffix: '+', label: 'Tamamlanan Proje', sublabel: 'Başarılı iş birliği' },
]

function Counter({ end, suffix, duration = 2 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = 0
    const startTime = performance.now()
    const step = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / (duration * 1000)
      const progress = Math.min(elapsed, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(end)
    }
    requestAnimationFrame(step)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString('tr-TR')}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-brand-cream py-16 lg:py-24 relative overflow-hidden">
      {/* Background geometric */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-lg relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 15 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-8 h-px bg-brand-gold" />
            <span className="section-label text-brand-gold">Rakamlarla Biz</span>
            <span className="block w-8 h-px bg-brand-gold" />
          </div>
          <h2
            className="font-display text-brand-black leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 600 }}
          >
            Sektörün Güçlü <span className="text-brand-gold">Adı</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brand-silver/30">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="bg-brand-cream p-8 lg:p-10 text-center group hover:bg-brand-charcoal transition-colors duration-500"
            >
              <div
                className="font-display text-brand-gold group-hover:text-brand-gold transition-colors mb-3"
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 600, lineHeight: 1 }}
              >
                <Counter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="font-label text-brand-black group-hover:text-white text-sm tracking-widest uppercase font-semibold mb-1 transition-colors duration-500">
                {stat.label}
              </div>
              <div className="font-sans text-brand-gray group-hover:text-white/40 text-xs transition-colors duration-500">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ y: 15 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 grid sm:grid-cols-3 gap-8 border-t border-brand-silver/50 pt-10"
        >
          {[
            { year: 'Kuruluş', desc: 'Mustafa Doğan tarafından küçük bir malzeme bayii olarak kuruldu.' },
            { year: 'Büyüme', desc: 'Ürün yelpazesi genişledi, depo kapasitesi artırıldı, yeni ortaklıklar kuruldu.' },
            { year: 'Bugün', desc: "Türkiye'nin güvenilir inşaat malzemeleri tedarikçisi olarak sektörde lider konumda." },
          ].map((item) => (
            <div key={item.year} className="flex gap-4 items-start">
              <div>
                <div className="font-label text-brand-gold text-sm tracking-widest uppercase font-semibold mb-1">{item.year}</div>
                <p className="text-brand-steel text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
