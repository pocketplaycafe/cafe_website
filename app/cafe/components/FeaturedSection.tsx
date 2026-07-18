'use client'

import MenuCard, { type MenuCardData } from './MenuCard'

export default function FeaturedSection({ items }: { items: MenuCardData[] }) {
  if (items.length === 0) return null
  return (
    <section aria-labelledby="featured" className="scroll-mt-24">
      <div className="flex items-center gap-3">
        <span className="menu-badge" style={{ position: 'static' }}>
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2c.6 3.3-1.3 4.6-2.8 6S6.7 12 7 15a5 5 0 0010 0c0-1.8-.9-3.2-1.9-4.4.6 1.5-.3 2.4-.9 2.9.6-2.4-1-5-2.2-9.5z" />
          </svg>
          Chef&apos;s Recommendation
        </span>
      </div>
      <div className="menu-divider" />
      <div className="menu-grid-feat">
        {items.map((it) => (
          <MenuCard key={it.item} data={{ ...it, featured: true }} />
        ))}
      </div>
    </section>
  )
}
