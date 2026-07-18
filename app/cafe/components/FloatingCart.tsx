'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useCart } from '../cart/CartContext'

export default function FloatingCart() {
  const reduce = useReducedMotion()
  const { count, total, openCart } = useCart()

  const visible = count > 0
  const totalRounded = Math.round(total)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="menu-floating-wrap"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
          transition={{ type: 'spring', stiffness: 420, damping: 32, mass: 0.8 }}
          role="region"
          aria-label="Cart summary"
        >
          <motion.button
            type="button"
            className="menu-floating"
            onClick={openCart}
            whileTap={{ scale: 0.98 }}
            aria-label={`Review order: ${count} item${count === 1 ? '' : 's'}, total ₹${totalRounded.toLocaleString('en-IN')}`}
          >
            <span className="menu-floating-icon" aria-hidden="true">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l3-8H5.4M7 13L5.4 5M7 13l-2 4h12" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="17" cy="20" r="1" />
              </svg>
              <span className="menu-floating-count-badge tnum">
                {count}
              </span>
            </span>

            <span className="menu-floating-meta">
              <span className="menu-floating-items tnum">
                {count} {count === 1 ? 'Item' : 'Items'}
                <span className="menu-floating-dot" aria-hidden="true">•</span>
                <span className="menu-floating-total tnum">₹{totalRounded.toLocaleString('en-IN')}</span>
              </span>
            </span>

            <span className="menu-floating-cta">
              Review Order
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
