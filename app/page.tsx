import Link from 'next/link'
import Reveal from './components/Reveal'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import HomeHero from './components/HomeHero'
import HomeStats from './components/HomeStats'
import { brand, games, highlights } from './data'

import {
  Gamepad2,
  Crosshair,
  Trophy,
  Table2,
  LayoutGrid,
  Tv,
  Star,
  Users,
  Clock,
  Wallet,
} from 'lucide-react'

const features = [
  { icon: Gamepad2, t: 'PS4 & PS5', d: 'Console gaming' },
  { icon: Crosshair, t: 'Pro Pool', d: 'Pro tables' },
  { icon: Trophy, t: 'Snooker', d: '2 & 4 players' },
  { icon: Table2, t: 'Table Tennis', d: 'Quick matches' },
  { icon: LayoutGrid, t: 'Carrom', d: 'All ages' },
  { icon: Tv, t: 'Big Screen', d: 'Live viewing' },
]

// Curated preview metadata for the gaming zone cards
const gameMeta: Record<string, { players: string; duration: string }> = {
  pool: { players: '2 Players', duration: 'Per Frame' },
  snooker: { players: '2 – 4 Players', duration: 'Per Frame' },
  ps5: { players: '1 – 4 Players', duration: 'Per Hour' },
}

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* ============ MARQUEE ============ */}
      <div className="bg-pp-deep border-y border-gold/10 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...highlights, ...highlights].map((h, i) => (
            <span
              key={i}
              className="mx-8 text-sm font-display font-bold uppercase tracking-wider text-gold/80"
            >
              {h}
            </span>
          ))}
        </div>
      </div>

      <HomeStats />

      {/* ============ WHY VISIT ============ */}
      <section className="py-20 px-4 sm:px-6 bg-pp-black">
        <div className="container-lux">
          <Reveal className="text-center mb-14">
            <span className="eyebrow">Why Pocket Play</span>
            <h2 className="heading text-3xl sm:text-4xl md:text-5xl">More Than A Cafe</h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((f, i) => (
              <Reveal
                key={f.t}
                delay={i * 60}
                className="group lift p-6 rounded-md bg-pp-card border border-gold/12 text-center hover:border-gold/40 hover:gold-glow"
              >
                <div className="mx-auto mb-4 w-12 h-12 rounded-md grid place-items-center bg-gold/10 text-gold group-hover:bg-gold group-hover:text-pp-black transition-colors duration-300">
                  <f.icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <h3 className="font-display font-bold text-white uppercase tracking-wide text-sm mb-1">
                  {f.t}
                </h3>
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
              className="group inline-flex items-center gap-2 text-gold font-bold uppercase tracking-wide text-sm hover:text-gold-light transition-colors"
            >
              All Games
              <span className="transition-transform duration-300 ease-lux group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {games.slice(0, 3).map((g, i) => {
              const meta = gameMeta[g.key]
              return (
                <Reveal
                  key={g.key}
                  delay={i * 80}
                  className="group relative rounded-md overflow-hidden bg-pp-card border border-gold/12 hover:border-gold/40 transition-colors duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={g.image}
                      alt={g.title}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500 ease-lux"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pp-deep via-pp-deep/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 rounded-md bg-gold/15 text-gold text-[10px] font-bold uppercase tracking-wider mb-2">
                      {g.tag}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide">
                      {g.title}
                    </h3>
                    {meta && (
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-[11px] uppercase tracking-wider text-text-muted">
                        <span className="inline-flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-gold/70" />
                          {meta.players}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-gold/70" />
                          {meta.duration}
                        </span>
                      </div>
                    )}
                    <div className="mt-3 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-sm text-text-body">
                        <Wallet className="w-4 h-4 text-gold/70" />
                        {g.price}
                      </span>
                      <Link
                        href="/game"
                        className="group/cta inline-flex items-center gap-1 text-gold font-bold uppercase tracking-wide text-xs hover:text-gold-light transition-colors"
                      >
                        Details
                        <span className="transition-transform duration-300 ease-lux group-hover/cta:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="py-20 px-4 sm:px-6 bg-pp-black">
        <div className="container-lux">
          <Reveal className="relative overflow-hidden rounded-md border border-gold/20 bg-pp-card p-10 sm:p-16 text-center">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-gold/10 rounded-full blur-[120px]" />
            <div className="absolute inset-0 pattern-gold opacity-30" />
              <div className="relative">
               <h2 className="heading text-3xl sm:text-4xl md:text-5xl mb-4">
                 Game On. Eat Well.
               </h2>
               <p className="text-text-body max-w-lg mx-auto mb-8">
                 Grab your crew, pick a table, and order from a menu built for people who actually play.
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <a
                   href={brand.bookHref}
                   target="_blank"
                   rel="noopener"
                   className="btn btn-primary w-full sm:w-auto"
                 >
                   <span className="cue-dot" aria-hidden="true" />
                   Book a Table
                 </a>
                 <Link href="/cafe" className="btn btn-ghost w-full sm:w-auto">
                   See Full Menu
                 </Link>
               </div>
               <p className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-text-muted">
                 <Star className="w-4 h-4 text-gold" fill="currentColor" />
                 Open daily · 10 AM to 11 PM · Trimurti Chowk
               </p>
             </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  )
}
