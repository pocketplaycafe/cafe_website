import Link from 'next/link'
import Reveal from '../components/Reveal'
import ScrollReveal from '../components/ScrollReveal'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer'
import { brand, highlights } from '../data'

export const metadata = {
  title: 'About & Contact — Pocket Play Cafe Patna City',
  description:
    'Meet the team behind Pocket Play Cafe — Patna City’s premium gaming lounge & cafe. Owned by ' +
    brand.owner +
    '. Find our address, hours and book a table at Trimurti Chowk.',
  keywords: [
    'about Pocket Play Cafe',
    'Pocket Play Cafe owner',
    'contact Pocket Play Cafe',
    'gaming cafe Patna City address',
    'book table Patna',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About & Contact — Pocket Play Cafe Patna City | Pocket Play Cafe',
    description:
      'Patna City’s premium gaming lounge & cafe, owned by ' +
      brand.owner +
      '. Address, hours and table booking at Trimurti Chowk.',
    url: '/about',
  },
}

const info = [
  { icon: 'M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', title: 'Location', desc: 'Trimurti Chowk, Opp. Mangal Talab, Near Baal Leela, 1st Floor' },
  { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Hours', desc: 'Open Daily · 10:00 AM – 11:00 PM' },
  { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', title: 'Call Us', desc: '+91 95994 42499' },
  { icon: 'M11.48 3.5a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.683.321 1.022l-4.201 3.601a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.2-3.6a.562.562 0 01.321-1.022l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z', title: 'Vibe', desc: 'Family-friendly · Perfect for hangouts' },
];

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pocket Play Cafe, Trimurti Chowk, Patna City'
)}&output=embed`

export default function AboutPage() {
  return (
    <>
      {/* ============ MERGED HERO: BRAND + OWNER + MOTTO ============ */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute -top-10 left-0 w-[420px] h-[420px] bg-gold/10 rounded-full blur-[150px]" />
        <div className="container-lux relative">
          <Reveal className="text-center max-w-3xl mx-auto">
            {/* Logo + Brand */}
        <div className="inline-flex items-center gap-4 mb-6 lift">
          <div className="w-16 h-16 rounded-md overflow-hidden border border-gold/30 shrink-0">
            <img src="/logo.jpeg" alt="Pocket Play Cafe" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="text-left">
            <span className="font-display font-bold text-2xl text-white block tracking-wider uppercase leading-none">
              Pocket Play
            </span>
            <span className="block text-[11px] font-medium tracking-[0.25em] text-gold uppercase">
              Cafe
            </span>
          </div>
        </div>

            <span className="eyebrow">Our Story &amp; Contact</span>
            <h1 className="heading text-4xl sm:text-5xl md:text-6xl mb-4">Play Hard. Eat Properly.</h1>

            {/* Owner — Hero Card */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-md bg-pp-card border border-gold/12 px-6 sm:px-8 py-5 my-8 text-left max-w-2xl mx-auto">
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-medium tracking-[0.2em] text-gold/60 uppercase block mb-1">Meet the Owner</span>
                <span className="block font-display font-bold text-lg sm:text-xl text-gold uppercase tracking-wide">
                  {brand.owner}
                </span>
                <span className="block text-xs text-text-muted uppercase tracking-wider mt-0.5">
                  {brand.ownerTitle}
                </span>
                <span className="block text-[11px] text-text-body/60 italic mt-2 max-w-xs leading-relaxed">
                  "Building a space where gaming and great food come together."
                </span>
              </div>
              <div className="relative w-28 h-28 shrink-0">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <clipPath id="heroOwnerBlob" clipPathUnits="objectBoundingBox">
                      <path d="M0.5,0 C0.65,0,0.78,0.08,0.86,0.2 C0.94,0.32,1,0.46,0.98,0.6 C0.96,0.74,0.88,0.86,0.76,0.93 C0.64,1,0.5,1,0.36,0.96 C0.22,0.92,0.1,0.84,0.04,0.72 C-0.02,0.6,0,0.46,0.06,0.34 C0.12,0.22,0.22,0.12,0.34,0.05 C0.46,-0.02,0.35,0,0.5,0Z" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="absolute inset-0 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border border-gold/30" />
                <img
                  src="/owner/1f5ef596-f0df-4f80-9aae-d8d18650cbf9.jpeg"
                  alt={brand.owner}
                  className="w-full h-full object-cover"
                  style={{ clipPath: 'url(#heroOwnerBlob)' }}
                />
              </div>
            </div>
            <p className="text-xs text-gold/80 uppercase tracking-[0.3em] font-display font-bold mt-5">
              {brand.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ ABOUT DETAIL ============ */}
      <section className="py-16 px-4 sm:px-6 bg-pp-deep">
        <div className="container-lux">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <span className="eyebrow">About Us</span>
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                containerClassName="mb-5"
              >
                More Than A Cafe
              </ScrollReveal>
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={3}
                blurStrength={6}
                containerClassName="mb-5 scroll-reveal-body"
                textClassName="!text-base !font-normal !leading-relaxed !text-text-body"
              >
                Sink a frame of pool, run a snooker drill, or just sit with friends over burgers,
                momos and shakes. Everything on the menu is made fresh, and priced so you can stay
                for more than one round.
              </ScrollReveal>
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={3}
                blurStrength={6}
                containerClassName="mb-8 scroll-reveal-body"
                textClassName="!text-base !font-normal !leading-relaxed !text-text-body"
              >
                Run by {brand.owner}, Pocket Play Cafe is Patna City&apos;s go-to spot for gamers,
                families and friend groups who want a place that&apos;s actually worth the visit.
              </ScrollReveal>

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

      {/* ============ MEET THE OWNER ============ */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container-lux">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="eyebrow">Behind the Cafe</span>
              <h2 className="heading text-3xl sm:text-4xl mb-5">Meet The Owner</h2>
              <p className="text-text-body leading-relaxed mb-4">
                Pocket Play Cafe was born from one belief — Patna City deserved a place where
                you could actually unwind, not just eat and leave. {brand.owner} set out to
                build exactly that: a lounge where the food is as serious as the games.
              </p>
              <p className="text-text-body leading-relaxed">
                From curating the menu to picking every console and cue stick, everything
                here is personal. Drop by and you&apos;ll likely find Sunny at the counter,
                making sure every guest leaves with a story to tell.
              </p>
            </Reveal>
            <Reveal delay={120} className="relative flex justify-center">
              <div className="absolute w-72 h-72 bg-gold/5 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-[80px]" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <clipPath id="ownerSectionBlob" clipPathUnits="objectBoundingBox">
                      <path d="M0.5,0 C0.7,0,0.85,0.12,0.92,0.28 C0.99,0.44,1,0.62,0.95,0.78 C0.9,0.94,0.78,1,0.62,0.97 C0.46,0.94,0.28,0.9,0.16,0.78 C0.04,0.66,-0.02,0.5,0.02,0.35 C0.06,0.2,0.18,0.08,0.34,0.02 C0.5,-0.04,0.3,0,0.5,0Z" />
                    </clipPath>
                  </defs>
                </svg>
                <div
                  className="absolute inset-0 border-2 border-gold/30"
                  style={{ clipPath: 'url(#ownerSectionBlob)' }}
                />
                <div
                  className="absolute inset-[3px] overflow-hidden"
                  style={{ clipPath: 'url(#ownerSectionBlob)' }}
                >
                  <img
                    src="/owner/1f5ef596-f0df-4f80-9aae-d8d18650cbf9.jpeg"
                    alt={brand.owner}
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CONTACT DETAIL ============ */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container-lux">
          <Reveal className="mb-10 text-center">
            <span className="eyebrow">Find Us</span>
            <h2 className="heading text-3xl sm:text-4xl">Visit &amp; Contact</h2>
          </Reveal>

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
                  href={brand.bookHref}
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
              href={brand.bookHref}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 bg-gold text-pp-black font-bold uppercase tracking-wide rounded-md px-9 py-4 transition-[transform,background-color,box-shadow,border-color] duration-300 gold-glow-lg hover:bg-gold-light"
            >
              Message on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ WHY VISIT ============ */}
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
                className="p-5 rounded-md bg-pp-card border border-gold/12 hover:gold-glow hover:-translate-y-1 transition-[transform,background-color,box-shadow,border-color] duration-300"
              >
                <span className="block w-1.5 h-1.5 rounded-full bg-gold mb-3" />
                <h3 className="font-display font-bold text-white uppercase tracking-wide text-sm">{h}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container-lux">
          <Reveal className="text-center border border-gold/20 bg-pp-card rounded-md p-10 sm:p-14">
            <h2 className="heading text-3xl sm:text-4xl mb-4">See You At Trimurti Chowk</h2>
            <p className="text-text-body max-w-lg mx-auto mb-8">We&apos;re open every day from 10 AM. Book a table or just walk in.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={brand.bookHref}
                target="_blank"
                rel="noopener"
                className="press lift w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-pp-black font-bold uppercase tracking-wide rounded-md px-9 py-4 transition-[transform,background-color,box-shadow,border-color] duration-300 gold-glow-lg hover:bg-gold-light"
              >
                Book a Table
              </a>
              <Link
                href="/cafe"
                className="press lift w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gold/40 text-gold font-bold uppercase tracking-wide rounded-md px-9 py-4 transition-[transform,background-color,box-shadow,border-color] duration-300 hover:bg-gold/10 hover:gold-glow"
              >
                See Full Menu
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
