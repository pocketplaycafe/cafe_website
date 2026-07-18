'use client'

import CountUp from './CountUp'
import Reveal from './Reveal'

const stats = [
  { to: 7, suffix: '+', label: 'Gaming Experiences' },
  { to: 50, suffix: '+', label: 'Menu Items' },
  { to: 2, suffix: '', label: 'Current-Gen Consoles' },
  { to: 12, suffix: 'k+', label: 'Happy Guests' },
]

export default function HomeStats() {
  return (
    <section className="border-y border-gold/10 bg-pp-deep">
      <div className="container-lux">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className={`relative py-12 px-4 text-center ${
                i < stats.length - 1 ? 'lg:border-r lg:border-gold/10' : ''
              } ${i % 2 === 0 ? 'border-r border-gold/10 lg:border-r' : ''}`}
            >
              <div className="font-display font-bold text-4xl sm:text-5xl text-gold tnum">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="text-[11px] uppercase tracking-wider text-text-muted mt-2">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
