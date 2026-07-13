import Link from 'next/link'
import Reveal from './components/Reveal'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import { brand, highlights, games } from './data'

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/gallery/g1.jpeg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/gallery/vid1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-pp-black/85 via-pp-black/70 to-pp-black" />
        <div className="absolute inset-0 pattern-gold opacity-40" />
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-gold/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -right-24 w-[480px] h-[480px] bg-gold/10 rounded-full blur-[150px]" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md glass mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse-gold" />
            <span className="text-xs font-medium text-text-body uppercase tracking-[0.2em]">
              Now Open · Patna City
            </span>
          </div>

          <h1 className="font-display font-bold uppercase tracking-[0.05em] leading-[0.92] text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 animate-lift">
            <span className="text-white">Pocket</span>
            <span className="block text-gold">Play Cafe</span>
          </h1>

          <p className="font-display uppercase tracking-[0.35em] text-text-body text-sm sm:text-base md:text-lg mb-6 animate-lift">
            Good Food <span className="text-gold">•</span> Good Mood
          </p>

          <p className="text-text-body text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed animate-lift">
            A premium gaming lounge where great food meets great games. Pool, Snooker, PS4 & PS5,
            and a kitchen built for cravings — all under one roof.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-lift">
            <Link
              href="/cafe"
              className="press w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-pp-black font-bold uppercase tracking-wide rounded-md px-9 py-4 gold-glow-lg hover:bg-gold-light"
            >
              Explore Menu
            </Link>
            <Link
              href="/game"
              className="press w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gold/40 text-gold font-bold uppercase tracking-wide rounded-md px-9 py-4 hover:bg-gold/10 hover:gold-glow"
            >
              View Games
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7 animate-lift">
            <a
              href={brand.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="press w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-[#FC8019]/50 text-[#FC8019] font-bold uppercase tracking-wide text-sm px-7 py-3 hover:bg-[#FC8019] hover:text-white"
            >
              Order on Swiggy
            </a>
            <a
              href={brand.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="press w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-[#E23744]/50 text-[#E23744] font-bold uppercase tracking-wide text-sm px-7 py-3 hover:bg-[#E23744] hover:text-white"
            >
              Order on Zomato
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 sm:gap-14 mt-16">
            <div className="text-center">
              <div className="font-display font-bold text-3xl text-gold">7+</div>
              <div className="text-[10px] uppercase tracking-wider text-text-muted mt-1">Experiences</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="font-display font-bold text-3xl text-gold">50+</div>
              <div className="text-[10px] uppercase tracking-wider text-text-muted mt-1">Menu Items</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="font-display font-bold text-3xl text-gold">PS5</div>
              <div className="text-[10px] uppercase tracking-wider text-text-muted mt-1">Next-Gen</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="bg-pp-deep border-y border-gold/10 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...highlights, ...highlights].map((h, i) => (
            <span key={i} className="mx-8 text-sm font-display font-bold uppercase tracking-wider text-gold/80">
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* ============ WHY VISIT ============ */}
      <section className="py-20 px-4 sm:px-6 bg-pp-black">
        <div className="container-lux">
          <Reveal className="text-center mb-14">
            <span className="eyebrow">Why Pocket Play</span>
            <h2 className="heading text-3xl sm:text-4xl md:text-5xl">More Than A Cafe</h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { t: 'PS4 & PS5', d: 'Next-gen gaming' },
              { t: 'Pro Pool', d: 'Pro tables' },
              { t: 'Snooker', d: '2 & 4 players' },
              { t: 'Table Tennis', d: 'Quick matches' },
              { t: 'Carrom', d: 'All ages' },
              { t: 'Big Screen', d: 'Live viewing' },
            ].map((f, i) => (
              <Reveal
                key={f.t}
                delay={i * 60}
                className="group lift p-6 rounded-md bg-pp-card border border-gold/12 text-center hover:gold-glow"
              >
                <h3 className="font-display font-bold text-white uppercase tracking-wide text-sm mb-1">{f.t}</h3>
                <p className="text-xs text-text-muted">{f.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GAMING PREVIEW ============ */}
      <section className="py-20 px-4 sm:px-6 bg-pp-deep">
        <div className="container-lux">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="eyebrow">Level Up</span>
              <h2 className="heading text-3xl sm:text-4xl md:text-5xl">The Gaming Zone</h2>
            </div>
            <Link
              href="/game"
              className="text-gold font-bold uppercase tracking-wide text-sm hover:text-gold-light transition-colors"
            >
              All Games →
            </Link>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {games.slice(0, 3).map((g, i) => (
              <Reveal
                key={g.key}
                delay={i * 80}
                className="group relative rounded-md overflow-hidden bg-pp-card border border-gold/12"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={g.image}
                    alt={g.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500 ease-lux"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pp-deep via-pp-deep/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 rounded-md bg-gold/15 text-gold text-[10px] font-bold uppercase tracking-wider mb-2">
                    {g.tag}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide">{g.title}</h3>
                  <p className="text-sm text-text-body mt-1">{g.price}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="py-20 px-4 sm:px-6 bg-pp-black">
        <div className="container-lux">
          <Reveal className="relative overflow-hidden rounded-md border border-gold/20 bg-pp-card p-10 sm:p-16 text-center">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-gold/10 rounded-full blur-[120px]" />
            <h2 className="heading text-3xl sm:text-4xl md:text-5xl mb-4">Hungry To Play?</h2>
            <p className="text-text-body max-w-lg mx-auto mb-8">
              Book a table, rally your friends, and order from a menu made for gamers.
            </p>
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
                href="/cafe"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gold/40 text-gold font-bold uppercase tracking-wide rounded-md px-9 py-4 transition-all duration-300 hover:bg-gold/10 hover:gold-glow"
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
