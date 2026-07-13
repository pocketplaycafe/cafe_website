'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/game', label: 'Gaming' },
  { href: '/cafe', label: 'Menu' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const linkClass = (href: string) =>
    `relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
      isActive(href) ? 'text-gold gold-glow' : 'text-text-body hover:text-white'
    }`

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-pp-deep/90 backdrop-blur-xl border-b border-gold/10' : ''
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="#hero" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 rounded-md overflow-hidden border border-gold/30 group-hover:gold-glow transition-all duration-300">
                <img src="/logo.jpeg" alt="Pocket Play Cafe" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-display font-bold text-base sm:text-lg leading-none text-white tracking-wider uppercase">
                  Pocket Play
                </span>
                <span className="block text-[10px] font-medium tracking-[0.25em] text-gold uppercase">
                  Cafe
                </span>
              </div>
            </a>

            <div className="flex items-center gap-6 lg:gap-8">
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className={linkClass(link.href)}>
                    {link.label}
                    {isActive(link.href) && (
                      <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gold" />
                    )}
                  </a>
                ))}
              </div>

              <a
                href="https://wa.me/919599442499"
                target="_blank"
                rel="noopener"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gold text-pp-black font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-gold-light transition-all duration-300 gold-glow-lg"
              >
                Book a Table
              </a>

              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden w-10 h-10 rounded-md bg-pp-card border border-gold/15 flex items-center justify-center hover:bg-pp-hover transition-colors"
                aria-label="Open menu"
              >
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-pp-deep/98 backdrop-blur-xl flex flex-col transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-gold/10">
          <span className="font-display font-bold text-lg text-white tracking-wider uppercase">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 rounded-md bg-pp-card border border-gold/15 flex items-center justify-center"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-1 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-display font-bold text-3xl uppercase tracking-wider py-3 border-b border-white/5 transition-colors ${
                isActive(link.href) ? 'text-gold' : 'text-text-body hover:text-gold'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="px-6 pb-8">
          <a
            href="https://wa.me/919599442499"
            target="_blank"
            className="flex items-center justify-center gap-2 py-3.5 rounded-md bg-gold text-pp-black font-bold uppercase tracking-wide"
          >
            Book a Table
          </a>
        </div>
      </div>
    </>
  )
}
