import Link from 'next/link'
import Reveal from '../components/Reveal'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer'
import { brand, games } from '../data'

export const metadata = {
  title: 'Gaming Zone — PS5, Pool & Snooker in Patna City',
  description:
    'Play PS4 & PS5, professional Pool and Snooker, Table Tennis, Carrom and Big Screen gaming at Pocket Play Cafe, the top gaming lounge in Patna City.',
  alternates: { canonical: '/game' },
  openGraph: {
    title: 'Gaming Zone — PS5, Pool & Snooker in Patna City | Pocket Play Cafe',
    description:
      'Play PS4 & PS5, Pool, Snooker, Table Tennis and more at Patna City’s top gaming lounge.',
    url: '/game',
  },
}

export default function GamePage() {
  const featured = games.filter((g) => g.featured)
  const rest = games.filter((g) => !g.featured)

  return (
    <>
      <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute -top-10 right-0 w-[480px] h-[480px] bg-gold/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-20 left-0 w-[360px] h-[360px] bg-gold/5 rounded-full blur-[130px]" />
        <div className="container-lux relative">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">The Gaming Zone</span>
            <h1 className="heading text-4xl sm:text-5xl md:text-6xl mb-4">Play. Compete. Repeat.</h1>
            <p className="text-text-body leading-relaxed">
              From a professional pool table to next-gen consoles, Pocket Play Cafe is built for
              players. Grab your crew, pick a game, and let the good times roll.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured: Pool & Snooker */}
      <section className="pb-10 px-4 sm:px-6">
        <div className="container-lux">
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((g, i) => (
              <Reveal
                key={g.key}
                delay={i * 80}
                className="group relative rounded-md overflow-hidden bg-pp-card border border-gold/12 card-shadow"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={g.image}
                    alt={g.title}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pp-black via-pp-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <span className="inline-block px-3 py-1 rounded-md bg-gold/15 text-gold text-[10px] font-bold uppercase tracking-wider mb-3">
                    {g.tag}
                  </span>
                  <h2 className="heading text-3xl text-white mb-2">{g.title}</h2>
                  <p className="text-sm text-text-body mb-5 max-w-md">{g.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="font-display font-bold text-xl text-gold">{g.price}</div>
                    <a
                      href={brand.phoneHref}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2 bg-gold text-pp-black font-bold uppercase text-xs tracking-wide rounded-md px-5 py-2.5 transition-all duration-300 hover:bg-gold-light"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the games */}
      <section className="py-12 px-4 sm:px-6 bg-pp-deep">
        <div className="container-lux">
          <Reveal className="mb-10">
            <span className="eyebrow">Also Available</span>
            <h2 className="heading text-2xl sm:text-3xl">More To Play</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((g, i) => (
              <Reveal
                key={g.key}
                delay={i * 60}
                className="group relative rounded-md overflow-hidden bg-pp-card border border-gold/12 hover:gold-glow hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={g.image}
                    alt={g.title}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pp-black via-pp-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-gold/15 text-gold text-[10px] font-bold uppercase tracking-wider mb-2">
                    {g.tag}
                  </span>
                  <h3 className="heading text-xl text-white">{g.title}</h3>
                  <p className="text-xs text-text-body mt-1">{g.price}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6">
        <div className="container-lux">
          <Reveal className="text-center border border-gold/20 bg-pp-card rounded-md p-10 sm:p-14">
            <h2 className="heading text-3xl sm:text-4xl mb-4">Ready For A Match?</h2>
            <p className="text-text-body max-w-lg mx-auto mb-8">
              Tables and consoles are on a first-come basis — but you can lock yours in with a quick call.
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
                Order Food
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
