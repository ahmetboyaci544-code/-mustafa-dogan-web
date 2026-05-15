'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#urunler', label: 'Ürünler' },
  { href: '#sevkiyat', label: 'Sevkiyat' },
  { href: '#referanslar', label: 'Referanslar' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#iletisim', label: 'İletişim' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -96 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-charcoal/95 backdrop-blur-md border-b border-white/5 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="container-lg">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center gap-4 group"
            >
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Mustafa Doğan Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-display text-white font-semibold text-xl leading-none tracking-wide">
                  Mustafa Doğan
                </div>
                <div className="font-label text-brand-gold text-sm tracking-[0.25em] uppercase mt-1">
                  İnşaat Malzemeleri
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-label text-sm tracking-wider uppercase text-white/70 hover:text-white transition-colors duration-200 animated-underline"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+905468965635"
                className="hidden md:flex items-center gap-2 font-label text-sm tracking-wider text-brand-charcoal bg-brand-gold hover:bg-brand-amber transition-colors duration-200 px-5 py-2.5 rounded font-semibold shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hemen Ara
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                aria-label="Menü"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-px bg-white origin-center transition-all"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-6 h-px bg-white"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-px bg-white origin-center transition-all"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-brand-black lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between h-20 px-6">
              <div className="font-display text-white font-semibold text-xl">Mustafa Doğan</div>
              <button onClick={() => setMenuOpen(false)} className="text-white/60 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-4 border-b border-white/10 font-display text-3xl text-white/80 hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <div className="px-8 pb-12">
              <a href="tel:+905468965635" className="btn-primary w-full justify-center">
                Hemen Ara
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
