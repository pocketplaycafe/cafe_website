'use client'

import { motion, useReducedMotion } from 'framer-motion'
import MenuCard, { type MenuCardData } from './MenuCard'

export default function CategorySection({
  id,
  label,
  description,
  items,
  featured,
}: {
  id: string
  label: string
  description?: string
  items: MenuCardData[]
  featured?: boolean
}) {
  const reduce = useReducedMotion()

  return (
    <motion.section
      id={`cat-${id}`}
      aria-labelledby={`cat-${label}`}
      className="scroll-mt-24"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
    >
      <h2 id={`cat-${label}`} className="menu-cat-head">
        {label}
      </h2>
      {description && <p className="menu-cat-desc">{description}</p>}
      <div className="menu-divider" />
      <div className={featured ? 'menu-grid-feat' : 'menu-grid'}>
        {items.map((it) => (
          <MenuCard key={it.item} data={it} />
        ))}
      </div>
    </motion.section>
  )
}
