'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import SearchBar from './SearchBar'

const EASE = [0.25, 0.1, 0.25, 1] as const

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

function makeItem(reduce: boolean): Variants {
  if (reduce) return { hidden: {}, show: {} }
  return {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE } },
  }
}

export default function Hero({
  query,
  onQuery,
}: {
  query: string
  onQuery: (v: string) => void
}) {
  const reduce = useReducedMotion() ?? false
  const item = makeItem(reduce)

  return (
    <header className="menu-hero text-center">
      <div className="container-lux">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="eyebrow">
            Food &amp; Beverages
          </motion.span>
          <motion.h1 variants={item} className="menu-hero-title mt-3">
            The Menu
          </motion.h1>
          <motion.p variants={item} className="menu-hero-sub mt-4">
            Freshly prepared dishes made with premium ingredients — built for cravings,
            priced for everyday.
          </motion.p>
          <motion.div variants={item} className="mt-8">
            <SearchBar query={query} onChange={onQuery} />
          </motion.div>
        </motion.div>
      </div>
    </header>
  )
}
