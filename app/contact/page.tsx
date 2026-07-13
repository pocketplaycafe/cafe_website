import Link from 'next/link'
import Reveal from '../components/Reveal'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer'
import { brand } from '../data'

export const metadata = { title: 'Contact' }

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pocket Play Cafe, Trimurti Chowk, Patna City'
)}&output=embed`

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute -top-10 right-0 w-[460px] h-[460px] bg-gold/10 rounded-full blur-[150px]" />
        <div className="container-lux relative">
          <Reveal>
            <span className="eyebrow">Find Us</span>
            <h1 className="heading text-4xl sm:text-5xl md:text-6xl mb-4">Visit Pocket Play</h1>
            <p className="text-text-body max-w-xl">
              We&apos;re right above Grand Biryani at Trimurti Chowk. Walk in, or book ahead — the table&apos;s
              always warmer with friends.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6">
        <div className="container-lux">
          <div className="grid lg:grid-cols-5 gap-6">
            <Reveal className="lg:col-span-3 rounded-md overflow-hidden border border-gold/15 card-shadow h-[360px] sm:h-[460px]">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(.9) contrast(1.05)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pocket Play Cafe location"
              />
            </Reveal>

            <div className="lg:col-span-2 flex flex-col gap-4">
              <Reveal className="p-6 rounded-md bg-pp-card border border-gold/12 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-md bg-gold/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <h3 className="heading text-lg text-white">Address</h3>
                </div>
                <p className="text-sm text-text-body leading-relaxed">{brand.address}</p>
                <a
                  href={brand.maps}
                  target="_blank"
                  rel="noopener"
                  className="inline-block mt-4 text-gold text-sm font-bold uppercase tracking-wide hover:text-gold-light transition-colors"
                >
                  Open in Maps →
                </a>
              </Reveal>

              <Reveal delay={80} className="p-6 rounded-md bg-pp-card border border-gold/12 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-md bg-gold/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <h3 className="heading text-lg text-white">Hours</h3>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-body">Monday – Sunday</span>
                  <span className="text-white font-semibold">10 AM – 11 PM</span>
                </div>
              </Reveal>

              <Reveal delay={160} className="p-6 rounded-md bg-pp-card border border-gold/12 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-md bg-gold/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <h3 className="heading text-lg text-white">Call / WhatsApp</h3>
                </div>
                <a
                  href={brand.phoneHref}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-gold font-display font-bold text-lg hover:text-gold-light transition-colors"
                >
                  {brand.phone}
                </a>
              </Reveal>
            </div>
          </div>

          <Reveal className="mt-6 rounded-md bg-pp-card border border-gold/15 p-8 text-center">
            <h3 className="heading text-2xl text-white mb-3">Book A Table</h3>
            <p className="text-text-body max-w-md mx-auto mb-6">
              Tap to message us on WhatsApp — quickest way to reserve your spot.
            </p>
            <a
              href={brand.phoneHref}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 bg-gold text-pp-black font-bold uppercase tracking-wide rounded-md px-9 py-4 transition-all duration-300 gold-glow-lg hover:bg-gold-light"
            >
              Message on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  )
}
