import { brand } from '../data'

const links = [
  { href: '/', label: 'Home' },
  { href: '/game', label: 'Gaming' },
  { href: '/cafe', label: 'Menu' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const popular = [
  'Chicken Burger',
  'Veg Pizza',
  'Chicken Momos',
  'Cold Coffee',
  'Garlic Bread',
  'Oreo Shake',
]

export default function Footer() {
  return (
    <footer className="bg-pp-deep border-t border-gold/10 py-16 px-4 sm:px-6">
      <div className="container-lux">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-md overflow-hidden border border-gold/30">
                <img src="/logo.jpeg" alt="Pocket Play Cafe" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white block tracking-wider uppercase leading-none">
                  Pocket Play
                </span>
                <span className="block text-[10px] font-medium tracking-[0.25em] text-gold uppercase">
                  Cafe
                </span>
              </div>
            </div>
            <p className="text-sm text-text-body leading-relaxed max-w-sm mb-5">
              Where great food meets great games. A premium gaming lounge & cafe in Bihar
              Sharif — Pool, Snooker, PS4 & PS5, and a kitchen that never misses.
            </p>
            <a
              href={brand.phoneHref}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-bold"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {brand.phone}
            </a>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-text-body hover:text-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">Popular Items</h4>
            <ul className="space-y-3">
              {popular.map((p) => (
                <li key={p}>
                  <a href="/cafe" className="text-sm text-text-body hover:text-gold transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">&copy; {new Date().getFullYear()} Pocket Play Cafe. All rights reserved.</p>
          <p className="text-xs text-text-muted uppercase tracking-widest">{brand.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
