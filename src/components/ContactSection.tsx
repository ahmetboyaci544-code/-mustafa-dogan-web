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

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState<FormData>({
    name: '', company: '', phone: '', email: '', product: '', message: '',
  })
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
    'w-full bg-white border border-brand-silver/50 text-brand-black placeholder-brand-muted px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors duration-200 font-sans'

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Adres',
      value: 'Kırşehir Kılıçözü Sanayi Sitesi\nHizarcılar Sitesi 5. Blok Sk. No:5\n40100 Kırşehir Merkez / Kırşehir',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Telefon',
      value: '0386 252 64 44 (Ofis)\n0546 896 56 35 – Mehmet Ali Doğan\n0546 896 56 35 – Mustafa Doğan',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'E-Posta',
      value: 'info@mustafadogan.com.tr\nsatis@mustafadogan.com.tr',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Çalışma Saatleri',
      value: 'Pazartesi – Cumartesi\n08:00 – 18:00',
    },
  ]

  return (
    <section id="iletisim" ref={ref} className="bg-brand-cream py-16 lg:py-24">
      <div className="container-lg">
        {/* Header */}
        <motion.div
          initial={{ y: 15 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-8 h-px bg-brand-gold" />
            <span className="section-label text-brand-gold">İletişim</span>
            <span className="block w-8 h-px bg-brand-gold" />
          </div>
          <h2
            className="font-display text-brand-black leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 600 }}
          >
            Teklif Alın
          </h2>
          <p className="text-brand-steel max-w-lg mx-auto text-base">
            Projeniz için en uygun malzeme ve fiyat bilgisi almak üzere bizimle iletişime geçin.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ x: -20 }}
            animate={inView ? { x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-16 h-16 bg-brand-gold flex items-center justify-center mb-6"
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="font-display text-brand-black text-2xl font-semibold mb-2">
                  Mesajınız Alındı
                </h3>
                <p className="text-brand-steel">En kısa sürede sizinle iletişime geçeceğiz.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Ad Soyad *" required className={inputClass} />
                <input name="company" value={form.company} onChange={handleChange} placeholder="Firma Adı" className={inputClass} />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Telefon *" required type="tel" className={inputClass} />
                <input name="email" value={form.email} onChange={handleChange} placeholder="E-Posta" type="email" className={inputClass} />
                <select name="product" value={form.product} onChange={handleChange} className={`${inputClass} sm:col-span-2`}>
                  <option value="">Ürün Kategorisi Seçin</option>
                  <option>Kereste</option>
                  <option>İnşaat Demiri</option>
                  <option>Plywood & OSB</option>
                  <option>Kalıp Sistemleri</option>
                  <option>Çatı Malzemeleri</option>
                  <option>Diğer Malzemeler</option>
                </select>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Mesajınız ve projeniz hakkında bilgi verin..."
                  rows={5}
                  className={`${inputClass} sm:col-span-2 resize-none`}
                />
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Gönderiliyor...
                      </>
                    ) : (
                      'Teklif İste'
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 20 }}
            animate={inView ? { x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-brand-charcoal p-8 flex-1">
              <h3 className="font-display text-white text-xl font-semibold mb-6">
                İletişim Bilgileri
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex gap-4">
                    <div className="flex-shrink-0 text-brand-gold mt-0.5">{info.icon}</div>
                    <div>
                      <div className="font-label text-white/40 text-xs tracking-widest uppercase mb-1">{info.label}</div>
                      <div className="text-white/80 text-sm whitespace-pre-line leading-relaxed">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick call CTA */}
            <a
              href="tel:+905468965635"
              className="flex items-center gap-4 p-5 border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-brand-gold flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="font-label text-brand-black text-xs tracking-widest uppercase mb-0.5">Hemen Ara</div>
                <div className="font-sans text-brand-black font-semibold">+90 546 896 56 35</div>
              </div>
              <svg className="w-5 h-5 text-brand-gold ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
