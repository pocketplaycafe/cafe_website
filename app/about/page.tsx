import Link from 'next/link'
import Reveal from '../components/Reveal'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer'
import { brand, highlights } from '../data'

export const metadata = { title: 'About' }

const info = [
  { icon: 'M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', title: 'Location', desc: 'Trimurti Chowk, Opp. Mangal Talab, Near Baal Leela, 1st Floor' },
  { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Hours', desc: 'Open Daily · 10:00 AM – 11:00 PM' },
  { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', title: 'Call Us', desc: '+91 95994 42499' },
  { icon: 'M11.48 3.5a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.683.321 1.022l-4.201 3.601a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.2-3.6a.562.562 0 01.321-1.022l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z', title: 'Vibe', desc: 'Family-friendly · Perfect for hangouts' },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute -top-10 left-0 w-[420px] h-[420px] bg-gold/10 rounded-full blur-[150px]" />
        <div className="container-lux relative">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h1 className="heading text-4xl sm:text-5xl md:text-6xl mb-4">Where Food Meets Fun</h1>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
            <Reveal className="relative">
              <div className="rounded-md overflow-hidden border border-gold/15 card-shadow">
                <img src="/gallery/g3.jpeg" alt="Pocket Play Cafe interior" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-pp-black/50 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-3 sm:-right-5 glass rounded-md p-5 gold-glow">
                <div className="font-display font-bold text-4xl text-gold">50+</div>
                <div className="text-[10px] uppercase tracking-wider text-text-body mt-1">Menu Items</div>
              </div>
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-gold/30" />
            </Reveal>

            <Reveal delay={120}>
              <p className="text-text-body leading-relaxed mb-5">
                Welcome to <span className="text-white font-semibold">Pocket Play Cafe</span> — your
                neighbourhood&apos;s favourite hangout in Patna City. We bring the thrill of gaming
                together with the joy of great food under one roof.
              </p>
              <p className="text-text-body leading-relaxed mb-8">
                Whether you&apos;re sinking balls on our pool table, showing off your snooker skills,
                or just chilling with friends over burgers, momos and shakes — there&apos;s something
                for everyone. Everything is made fresh, with love, at prices that won&apos;t break the bank.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {info.map((it) => (
                  <div key={it.title} className="flex items-start gap-3 p-4 rounded-md bg-pp-card border border-gold/12">
                    <span className="w-10 h-10 shrink-0 rounded-md bg-gold/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={it.icon} />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-display font-bold text-sm text-white uppercase tracking-wide">{it.title}</h4>
                      <p className="text-xs text-text-body mt-1 leading-relaxed">{it.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-pp-deep">
        <div className="container-lux">
          <Reveal className="mb-10 text-center">
            <span className="eyebrow">Why Visit</span>
            <h2 className="heading text-3xl sm:text-4xl">The Full Experience</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <Reveal
                key={h}
                delay={i * 50}
                className="p-5 rounded-md bg-pp-card border border-gold/12 hover:gold-glow hover:-translate-y-1 transition-all duration-300"
              >
                <span className="block w-1.5 h-1.5 rounded-full bg-gold mb-3" />
                <h3 className="font-display font-bold text-white uppercase tracking-wide text-sm">{h}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6">
        <div className="container-lux">
          <Reveal className="text-center border border-gold/20 bg-pp-card rounded-md p-10 sm:p-14">
            <h2 className="heading text-3xl sm:text-4xl mb-4">Come Hang With Us</h2>
            <p className="text-text-body max-w-lg mx-auto mb-8">Find us at Trimurti Chowk, or book a table in a tap.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={brand.phoneHref}
                target="_blank"
                rel="noopener"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-pp-black font-bold uppercase tracking-wide rounded-md px-9 py-4 transition-all duration-300 gold-glow-lg hover:bg-gold-light"
              >
                Book a Table
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gold/40 text-gold font-bold uppercase tracking-wide rounded-md px-9 py-4 transition-all duration-300 hover:bg-gold/10 hover:gold-glow"
              >
                Get Directions
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  )
}
