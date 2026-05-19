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
      <div className="container-xl pt-12 pb-24 lg:pt-16 lg:pb-32">

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

          {/* Harita */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05, duration: 0.9 }}
            className="lg:col-span-5 mb-4"
          >
            <div style={{ position: 'relative', width: '100%', height: '320px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.07)' }}>
              <iframe
                src="https://maps.google.com/maps?q=Kılıçözü+Sanayi+Sitesi+Hizarcılar+Sitesi+Kırşehir&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Doğan Yapı Market Konum - Kırşehir Kılıçözü Sanayi Sitesi"
              />
            </div>
          </motion.div>

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
                  <option>Teleskopik Demir Direk</option>
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
                {info.label === 'Telefon' ? (
                  <div className="flex flex-col gap-1">
                    {info.value.split('\n').map((line) => {
                      const digits = line.replace(/\D/g, '')
                      const tel = digits.startsWith('0') ? '+90' + digits.slice(1) : '+90' + digits
                      return (
                        <a
                          key={line}
                          href={`tel:${tel}`}
                          className="text-sm leading-relaxed hover:text-[#14305c] transition-colors duration-200"
                          style={{ fontFamily: 'var(--font-sans)', color: '#444444' }}
                        >
                          {line}
                        </a>
                      )
                    })}
                  </div>
                ) : (
                  <div className="text-sm leading-relaxed whitespace-pre-line" style={{ fontFamily: 'var(--font-sans)', color: '#444444' }}>
                    {info.value}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
