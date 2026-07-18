'use client'

import { useEffect, useRef, useState } from 'react'
import { useCart } from '../cart/CartContext'

export default function StickyCategories({
  categories,
  active,
  onSelect,
}: {
  categories: { key: string; label: string }[]
  active: string
  onSelect: (key: string) => void
}) {
  const { count, openCart } = useCart()
  const innerRef = useRef<HTMLDivElement>(null)
  const [spy, setSpy] = useState(active)

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const sections = categories
      .filter((c) => c.key !== 'all')
      .map((c) => document.getElementById(`cat-${c.key}`))
      .filter((el): el is HTMLElement => Boolean(el))
    if (sections.length === 0) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setSpy(visible[0].target.id.replace('cat-', ''))
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [categories])

  // Keep the active chip in view.
  useEffect(() => {
    const el = innerRef.current?.querySelector<HTMLElement>(`[data-key="${active}"]`)
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [active])

  const handle = (key: string) => {
    onSelect(key)
    if (key !== 'all') {
      const el = document.getElementById(`cat-${key}`)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav className="menu-sticky" aria-label="Menu categories">
      <div className="menu-sticky-inner container-lux" ref={innerRef}>
        {categories.map((c) => (
          <button
            key={c.key}
            type="button"
            data-key={c.key}
            className="menu-sticky-btn"
            aria-current={active === c.key || (c.key !== 'all' && spy === c.key)}
            onClick={() => handle(c.key)}
          >
            {c.label}
          </button>
        ))}

        {count > 0 && (
          <button type="button" className="menu-sticky-cart" onClick={openCart} aria-label="Open cart">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l3-8H5.4M7 13L5.4 5M7 13l-2 4h12" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="17" cy="20" r="1" />
            </svg>
            <span className="tnum">{count}</span>
          </button>
        )}
      </div>
    </nav>
  )
}
