'use client'

import { useState, useEffect, useRef } from 'react'
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
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  // Slide the gold underline to the active link
  useEffect(() => {
    const active = navLinks.find((l) => isActive(l.href))
    const el = active ? linkRefs.current[active.href] : null
    if (el) {
      setIndicator({ left: el.offsetLeft + 16, width: el.offsetWidth - 32 })
    } else {
      setIndicator(null)
    }
    const onResize = () => {
      const a = navLinks.find((l) => isActive(l.href))
      const node = a ? linkRefs.current[a.href] : null
      if (node) setIndicator({ left: node.offsetLeft + 16, width: node.offsetWidth - 32 })
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [pathname])

  // Mobile drawer: lock scroll + close on Esc
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const linkClass = (href: string) =>
    `relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
      isActive(href) ? 'text-gold' : 'text-text-body hover:text-white'
    }`

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500 ${
          scrolled
            ? 'bg-pp-deep/80 backdrop-blur-xl border-b border-gold/12 shadow-[0_8px_30px_rgba(0,0,0,0.45)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="/" className="press flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/30 group-hover:gold-glow transition-[box-shadow] duration-300">
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
              <div className="relative hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    ref={(el) => {
                      linkRefs.current[link.href] = el
                    }}
                    href={link.href}
                    className={linkClass(link.href)}
                  >
                    {link.label}
                  </a>
                ))}
                {indicator && (
                  <span
                    className="absolute -bottom-0.5 h-px bg-gold transition-[left,width] duration-300 ease-drawer"
                    style={{ left: indicator.left, width: indicator.width }}
                  />
                )}
              </div>

              <a
                href="https://wa.me/919599442499"
                target="_blank"
                rel="noopener"
                className="press hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gold text-pp-black font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-gold-light gold-glow-lg"
              >
                Book a Table
              </a>

              <button
                onClick={() => setMenuOpen(true)}
                className="tap lg:hidden w-10 h-10 rounded-md bg-pp-card border border-gold/15 flex items-center justify-center hover:bg-pp-hover"
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
        className={`fixed inset-0 z-[60] bg-pp-deep/96 backdrop-blur-2xl flex flex-col transition-transform duration-500 ease-drawer ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-gold/10">
          <span className="font-display font-bold text-lg text-white tracking-wider uppercase">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="tap w-10 h-10 rounded-md bg-pp-card border border-gold/15 flex items-center justify-center hover:bg-pp-hover"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-1 px-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${i * 55}ms` : '0ms' }}
              className={`font-display font-bold text-3xl uppercase tracking-wider py-3 border-b border-white/5 transition-[opacity,transform] duration-300 ${
                isActive(link.href) ? 'text-gold' : 'text-text-body hover:text-gold'
              } ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="px-6 pb-8">
          <a
            href="https://wa.me/919599442499"
            target="_blank"
            className="press flex items-center justify-center gap-2 py-3.5 rounded-md bg-gold text-pp-black font-bold uppercase tracking-wide"
          >
            Book a Table
          </a>
        </div>
      </div>
    </>
  )
}
