import { brand } from '../data'
import { MessageCircle, Star, MapPin, Clock, Phone } from 'lucide-react'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'

const links = [
  { href: '/', label: 'Home' },
  { href: '/game', label: 'Gaming' },
  { href: '/cafe', label: 'Menu' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
]

const popular = [
  'Chicken Burger',
  'Veg Pizza',
  'Chicken Momos',
  'Cold Coffee',
  'Garlic Bread',
  'Oreo Shake',
]

const socials = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: MessageCircle, href: brand.phoneHref, label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="bg-pp-deep border-t border-gold/10 pt-16 pb-8 px-4 sm:px-6">
      <div className="container-lux">
        {/* ===== Merged About + Brand + Contact top section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand / Owner / Motto */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-md overflow-hidden border border-gold/30 shrink-0">
                <img src="/logo.jpeg" alt="Pocket Play Cafe" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white block tracking-wider uppercase leading-none">
                  Pocket Play
                </span>
                <span className="block text-[11px] font-medium tracking-[0.25em] text-gold uppercase">
                  Cafe
                </span>
              </div>
            </div>

            <p className="text-sm text-text-body leading-relaxed max-w-md mb-6">
              Where great food meets great games. A premium gaming lounge & cafe in Patna
              City — Pool, Snooker, PS4 & PS5, and a kitchen that never misses.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <a
                href={brand.maps}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md bg-pp-card border border-gold/12 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-gold hover:text-gold-light hover:border-gold/40 transition-colors"
              >
                <Star className="w-4 h-4" fill="currentColor" />
                4.8 Google Rating
              </a>
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 grid place-items-center rounded-md bg-pp-card border border-gold/12 text-text-body hover:text-gold hover:border-gold/40 transition-colors"
                  >
                    <s.icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
                  </a>
                ))}
              </div>
            </div>

            <p className="text-xs text-gold/80 uppercase tracking-[0.3em] font-display font-bold">
              {brand.tagline}
            </p>
          </div>

          {/* Quick Links */}
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

          {/* Popular Items */}
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

        {/* ===== About + Contact detail row ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {/* About blurb */}
          <div className="rounded-md bg-pp-card border border-gold/12 p-5">
            <h4 className="font-display font-bold text-sm text-gold uppercase tracking-wider mb-3">About Us</h4>
            <p className="text-xs text-text-body leading-relaxed">
              Pocket Play Cafe is {brand.name} — your neighbourhood’s favourite hangout in Patna City,
              bringing the thrill of gaming together with the joy of great food under one roof.
              Owned & run by {brand.owner}.
            </p>
          </div>

          {/* Contact — Address */}
          <div className="rounded-md bg-pp-card border border-gold/12 p-5">
            <h4 className="font-display font-bold text-sm text-gold uppercase tracking-wider mb-3">Visit Us</h4>
            <p className="text-xs text-text-body leading-relaxed inline-flex gap-2">
              <MapPin className="w-4 h-4 text-gold/70 shrink-0 mt-0.5" />
              {brand.address}
            </p>
            <a
              href={brand.maps}
              target="_blank"
              rel="noopener"
              className="inline-block mt-3 text-gold text-xs font-bold uppercase tracking-wide hover:text-gold-light transition-colors"
            >
              Open in Maps →
            </a>
          </div>

          {/* Contact — Hours & Phone */}
          <div className="rounded-md bg-pp-card border border-gold/12 p-5">
            <h4 className="font-display font-bold text-sm text-gold uppercase tracking-wider mb-3">Reach Us</h4>
            <div className="flex justify-between items-center text-xs mb-3">
              <span className="inline-flex items-center gap-2 text-text-body">
                <Clock className="w-4 h-4 text-gold/70" />
                Monday – Sunday
              </span>
              <span className="text-white font-semibold">10 AM – 11 PM</span>
            </div>
            <a
              href={brand.phoneHref}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 text-gold font-display font-bold text-sm hover:text-gold-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              {brand.phone}
            </a>
          </div>
        </div>

        {/* ===== Bottom bar ===== */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p className="text-xs text-text-muted uppercase tracking-widest">{brand.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
