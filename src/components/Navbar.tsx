'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
  { href: '#urunler', label: 'Ürünler' },
  { href: '#neden-biz', label: 'Neden Biz' },
  { href: '#sevkiyat', label: 'Sevkiyat' },
  { href: '#iletisim', label: 'İletişim' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-black/[0.07] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-24 lg:h-28">

            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center gap-4 cursor-pointer"
            >
              <div className="relative w-14 h-14 flex-shrink-0 overflow-hidden">
                <Image src="/images/doganlar-logo.png" alt="Mustafa Doğan" fill className="object-contain" />
              </div>
              <div className="hidden xs:block">
                <div
                  className="leading-none"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.03em', color: scrolled ? '#111111' : '#F5F5F5' }}
                >
                  Mustafa Doğan
                </div>
                <div
                  className="mt-1.5"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: scrolled ? '#9B9B9B' : 'rgba(255,255,255,0.7)' }}
                >
                  Doğan Yapı Tasarım
                </div>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="cursor-pointer transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '0.85rem', letterSpacing: '0.04em', color: scrolled ? '#555555' : 'rgba(255,255,255,0.65)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = scrolled ? '#111111' : '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? '#555555' : 'rgba(255,255,255,0.65)')}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/doganyapitasarim.00"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center justify-center w-9 h-9 cursor-pointer transition-opacity duration-200"
                style={{ color: scrolled ? '#555555' : 'rgba(255,255,255,0.7)' }}
                onMouseEnter={e => (e.currentTarget.style.color = scrolled ? '#111111' : '#FFFFFF')}
                onMouseLeave={e => (e.currentTarget.style.color = scrolled ? '#555555' : 'rgba(255,255,255,0.7)')}
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href={`https://wa.me/905468965635?text=${encodeURIComponent('Merhaba, teklif almak istiyorum.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={scrolled ? 'hidden md:flex btn-primary' : 'hidden md:flex btn-gold'}
                style={{ fontSize: '0.75rem', padding: '0.95rem 2rem' }}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Teklif Al
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] cursor-pointer"
                aria-label="Menüyü aç"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`block w-7 h-px origin-center ${scrolled ? 'bg-[#111111]' : 'bg-white'}`}
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`block w-7 h-px ${scrolled ? 'bg-[#111111]' : 'bg-white'}`}
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`block w-7 h-px origin-center ${scrolled ? 'bg-[#111111]' : 'bg-white'}`}
                />
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col lg:hidden"
          >
            <div className="flex items-center justify-between h-24 px-6 border-b border-black/[0.07]">
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: '#111111', letterSpacing: '-0.03em' }}>
                Mustafa Doğan
              </span>
              <button onClick={() => setMenuOpen(false)} className="w-9 h-9 flex items-center justify-center text-[#6B6B6B] hover:text-[#111111] transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left py-5 border-b border-black/[0.06] text-[#111111]/50 hover:text-[#111111] transition-colors duration-200 cursor-pointer"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem, 6vw, 3rem)', letterSpacing: '-0.03em' }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <div className="px-8 pb-12">
              <a href="tel:+905468965635" className="btn-primary w-full justify-center">Hemen Ara</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
