'use client'

import Link from 'next/link'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { brand } from '../data'

const trust = [
  'Air-Conditioned Lounge',
  'Family Friendly',
  'Free Parking',
  'Online Ordering',
  'Now Open · Patna City',
]

const EASE_LUX: [number, number, number, number] = [0.23, 1, 0.32, 1]

export default function HomeHero() {
  const reduced = useReducedMotion()

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  }
  const item: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE_LUX },
    },
  }

  return (
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

      {/* Layered cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-pp-black/85 via-pp-black/70 to-pp-black" />
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-gold/10 rounded-full blur-[140px]" />
      <div className="absolute -bottom-32 -right-24 w-[480px] h-[480px] bg-gold/10 rounded-full blur-[150px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-pp-black/85 via-pp-black/70 to-pp-black" />
      <div className="absolute inset-0 pattern-gold opacity-40" />
      <div className="absolute inset-0 noise opacity-[0.05] mix-blend-soft-light" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24 pb-16"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse-gold" />
          <span className="text-xs font-medium text-text-body uppercase tracking-[0.2em]">
            Now Open · Patna City
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-bold uppercase tracking-[0.05em] leading-[0.92] text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-6"
        >
          <span className="text-white">Pocket</span>
          <span className="block text-gold">Play Cafe</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="font-display uppercase tracking-[0.35em] text-text-body text-sm sm:text-base md:text-lg mb-6"
        >
          Good Food <span className="text-gold">•</span> Good Mood
        </motion.p>

        <motion.p
          variants={item}
          className="text-text-body text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed"
        >
          A premium gaming lounge where great food meets great games. Pool, Snooker, PS4 & PS5,
          and a kitchen built for cravings — all under one roof.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/cafe" className="btn btn-primary w-full sm:w-auto">
            <span className="cue-dot" aria-hidden="true" />
            Explore Menu
          </Link>
          <Link href="/game" className="btn btn-ghost w-full sm:w-auto">
            View Games
          </Link>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7"
        >
          <a
            href={brand.swiggy}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-swiggy btn-sm w-full sm:w-auto"
          >
            Order on Swiggy
          </a>
          <a
            href={brand.zomato}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-zomato btn-sm w-full sm:w-auto"
          >
            Order on Zomato
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.ul
          variants={item}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-12 text-xs font-medium uppercase tracking-[0.18em] text-text-muted"
        >
          {trust.map((t, i) => (
            <li key={t} className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/70" />
              {t}
              {i < trust.length - 1 && <span className="hidden sm:inline text-white/15 ml-4">/</span>}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  )
}
