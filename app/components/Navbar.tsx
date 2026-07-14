'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
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
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null)
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map())
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = useCallback(
    (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href)),
    [pathname]
  )

  const updateIndicator = useCallback(() => {
    const active = navLinks.find((l) => isActive(l.href))
    const el = active ? linkRefs.current.get(active.href) : null
    if (el && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      setIndicator({
        left: elRect.left - navRect.left,
        width: elRect.width,
      })
    } else {
      setIndicator(null)
    }
  }, [isActive])

  useEffect(() => {
    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [updateIndicator])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const setLinkRef = useCallback(
    (href: string) => (el: HTMLAnchorElement | null) => {
      if (el) linkRefs.current.set(href, el)
      else linkRefs.current.delete(href)
    },
    []
  )

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-pp-deep/85 backdrop-blur-xl border-b border-gold/12 shadow-[0_8px_30px_rgba(0,0,0,0.45)]'
            : 'bg-gradient-to-b from-black/40 to-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="/" className="press flex items-center gap-3 group shrink-0">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gold/30 group-hover:border-gold/60 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              <div ref={navRef} className="relative hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    ref={setLinkRef(link.href)}
                    href={link.href}
                    className={`group/link relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isActive(link.href) ? 'text-gold' : 'text-text-body hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-px left-1/2 -translate-x-1/2 h-px bg-gold/60 transition-all duration-300 ${
                        isActive(link.href)
                          ? 'w-4/5 opacity-100'
                          : 'w-0 opacity-0 group-hover/link:w-3/5 group-hover/link:opacity-100'
                      }`}
                    />
                  </a>
                ))}
                {indicator && (
                  <span
                    className="absolute -bottom-0.5 h-px bg-gold shadow-[0_0_6px_rgba(212,175,55,0.5)] transition-all duration-300 ease-drawer"
                    style={{ left: indicator.left, width: indicator.width }}
                  />
                )}
              </div>

              <a
                href="https://wa.me/919599442499"
                target="_blank"
                rel="noopener"
                className="press hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 rounded-md bg-gold text-pp-black font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-gold-light transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              >
                Book a Table
              </a>

              <button
                onClick={() => setMenuOpen(true)}
                className="tap lg:hidden w-10 h-10 rounded-md bg-pp-card border border-gold/15 flex items-center justify-center hover:bg-pp-hover transition-all duration-200"
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
        className={`fixed inset-0 z-[60] bg-pp-deep/98 backdrop-blur-2xl flex flex-col transition-all duration-500 ease-drawer ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 sm:h-20 border-b border-gold/10">
          <span className="font-display font-bold text-lg tracking-widest text-white uppercase flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            Navigation
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="tap w-10 h-10 rounded-md bg-pp-card border border-gold/15 flex items-center justify-center hover:bg-pp-hover transition-all duration-200"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2 px-8 sm:px-12 lg:px-16">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`group relative font-display font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider py-4 transition-colors duration-300 ${
                isActive(link.href) ? 'text-gold' : 'text-text-muted hover:text-gold'
              }`}
            >
              <span
                className={`inline-block transition-all duration-500 ease-drawer ${
                  menuOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
              >
                {link.label}
              </span>
              <span
                className={`absolute left-0 bottom-0 h-px transition-all duration-500 ease-drawer ${
                  isActive(link.href)
                    ? 'w-full bg-gradient-to-r from-gold to-transparent'
                    : 'w-0 bg-gold/40 group-hover:w-2/3'
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 60 + 200}ms` : '0ms' }}
              />
            </a>
          ))}
        </div>
        <div className="px-8 sm:px-12 lg:px-16 pb-10">
          <a
            href="https://wa.me/919599442499"
            target="_blank"
            className="press group flex items-center justify-center gap-3 py-4 rounded-md bg-gold text-pp-black font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book a Table
          </a>
        </div>
      </div>
    </>
  )
}
