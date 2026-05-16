'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface FormData {
  name: string
  company: string
  phone: string
  email: string
  product: string
  message: string
}

const contactInfo = [
  {
    label: 'Adres',
    value: 'Kırşehir Kılıçözü Sanayi Sitesi\nHizarcılar Sitesi 5. Blok Sk. No:5\n40100 Kırşehir Merkez / Kırşehir',
  },
  {
    label: 'Telefon',
    value: '0386 252 64 44 (Ofis)\n0546 896 56 35 – Mehmet Ali Doğan\n0546 896 56 35 – Mustafa Doğan',
  },
  { label: 'E-Posta', value: 'doganyapitasarim@outlook.com.tr' },
  { label: 'Çalışma Saatleri', value: 'Pazartesi – Cumartesi\n08:00 – 18:00' },
]

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState<FormData>({ name: '', company: '', phone: '', email: '', product: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-white border border-black/[0.1] text-[#111111] placeholder-[#9B9B9B] px-4 py-3.5 text-sm focus:outline-none focus:border-[#14305c]/50 transition-colors duration-200'

  return (
    <section id="iletisim" ref={ref} className="bg-[#F7F6F3]">
      <div className="container-xl py-24 lg:py-32">

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-6 h-px bg-[#14305c]" />
            <span className="label">İletişim</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
              letterSpacing: '-0.04em',
              lineHeight: 0.92,
              color: '#111111',
            }}
          >
            Teklif Alın.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.9 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-start py-16">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 16 }}
                  className="w-12 h-12 flex items-center justify-center mb-6"
                  style={{ background: '#14305c' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3
                  className="mb-2"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.8rem', letterSpacing: '-0.03em', color: '#111111' }}
                >
                  Mesajınız Alındı
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', color: '#6B6B6B' }}>
                  En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-3">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Ad Soyad *" required className={inputClass} style={{ fontFamily: 'var(--font-sans)' }} />
                <input name="company" value={form.company} onChange={handleChange} placeholder="Firma Adı" className={inputClass} style={{ fontFamily: 'var(--font-sans)' }} />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Telefon *" required type="tel" className={inputClass} style={{ fontFamily: 'var(--font-sans)' }} />
                <input name="email" value={form.email} onChange={handleChange} placeholder="E-Posta" type="email" className={inputClass} style={{ fontFamily: 'var(--font-sans)' }} />
                <select name="product" value={form.product} onChange={handleChange} className={`${inputClass} sm:col-span-2`} style={{ fontFamily: 'var(--font-sans)' }}>
                  <option value="">Ürün Kategorisi Seçin</option>
                  <option>Kereste</option>
                  <option>İnşaat Demiri</option>
                  <option>Plywood & OSB</option>
                  <option>Kalıp Sistemleri</option>
                  <option>Çatı Malzemeleri</option>
                  <option>Diğer</option>
                </select>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Proje detayları ve ihtiyacınız..."
                  rows={5}
                  className={`${inputClass} sm:col-span-2 resize-none`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
                <div className="sm:col-span-2">
                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-50">
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Gönderiliyor...
                      </>
                    ) : 'Teklif İste'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.9 }}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((info) => (
              <div key={info.label} className="border-b border-black/[0.07] pb-7">
                <div className="label mb-3" style={{ color: '#6B6B6B' }}>{info.label}</div>
                <div className="text-sm leading-relaxed whitespace-pre-line" style={{ fontFamily: 'var(--font-sans)', color: '#444444' }}>
                  {info.value}
                </div>
              </div>
            ))}

            <a
              href="tel:+905468965635"
              className="flex items-center gap-4 group cursor-pointer pt-2"
            >
              <div
                className="w-10 h-10 flex items-center justify-center flex-shrink-0 group-hover:opacity-80 transition-opacity duration-200"
                style={{ background: '#14305c' }}
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="label mb-1" style={{ color: '#6B6B6B', fontSize: '0.58rem' }}>Hemen Ara</div>
                <div className="text-sm font-medium" style={{ fontFamily: 'var(--font-sans)', color: '#111111' }}>+90 546 896 56 35</div>
              </div>
              <svg
                className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform duration-200"
                style={{ color: '#14305c' }}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
