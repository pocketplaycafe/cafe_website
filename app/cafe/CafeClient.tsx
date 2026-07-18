'use client'

import { useState, useMemo, useEffect } from 'react'
import Reveal from '../components/Reveal'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer'
import { menu } from '../data'

type Cat = { key: string; label: string }

function PreservedScroll() {
  useEffect(() => {
    const keyInput = (e: KeyboardEvent) => {
      if (e.key === 'Meta' || e.key === 'Control') {
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', keyInput)
    return () => window.removeEventListener('keydown', keyInput)
  }, [])
  return null
}

export default function CafePageClient() {
  const [active, setActive] = useState<string>('all')
  const [query, setQuery] = useState('')

  const categories: Cat[] = [
    { key: 'all', label: 'All' },
    ...menu.map((m) => ({ key: m.key, label: m.label })),
  ]

  const q = query.trim().toLowerCase()

  const filteredMenu = useMemo(() => {
    if (q) {
      return menu
        .map((cat) => ({
          ...cat,
          items: cat.items.filter(
            (it) => it.item.toLowerCase().includes(q) || cat.label.toLowerCase().includes(q)
          ),
        }))
        .filter((cat) => cat.items.length > 0)
    }
    if (active === 'all') return menu
    return menu.filter((m) => m.key === active)
  }, [q, active])

  const totalItems = filteredMenu.reduce((n, c) => n + c.items.length, 0)

  return (
    <>
      <section className="relative pt-32 pb-10 px-4 sm:px-6 overflow-hidden">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-gold/10 rounded-full blur-[150px]" />
        <div className="container-lux relative text-center">
          <Reveal>
            <span className="eyebrow">Food & Beverages</span>
            <h1 className="heading text-4xl sm:text-5xl md:text-6xl mb-4">The Menu</h1>
            <p className="text-text-body max-w-xl mx-auto">
              Freshly prepared, made to order, and priced for everyday cravings. Search or filter to find your fix.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6">
        <div className="container-lux">
          {/* Search */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search burgers, pizza, momos, shakes..."
                className="w-full pl-12 pr-12 py-4 rounded-md bg-pp-hover border border-transparent text-white placeholder-text-muted text-sm focus:outline-none focus:border-gold/60 transition-colors"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  aria-label="Clear"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-white"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              )}
            </div>
            {q && (
              <p className="text-xs text-text-muted mt-3 text-center">
                {totalItems} item{totalItems !== 1 ? 's' : ''} found for &quot;{query}&quot;
              </p>
            )}
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => {
                  setActive(c.key)
                  setQuery('')
                }}
                 className={`px-4 py-2 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wide border transition-colors duration-200 ${
                  active === c.key && !q
                    ? 'bg-gold text-pp-black border-transparent'
                    : 'border-gold/20 text-text-body hover:text-white hover:border-gold/40'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Menu */}
          {totalItems > 0 ? (
            <div className="space-y-12">
              {filteredMenu.map((cat) => (
                <div key={cat.key}>
                  <h2 className="heading text-xl sm:text-2xl text-gold mb-5 flex items-center gap-3">
                    <span className="w-8 h-px bg-gold/50" />
                    {cat.label}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.items.map((it) => (
                      <div
                        key={it.item}
                        className="group relative overflow-hidden rounded-md bg-pp-card border border-gold/12 hover:gold-glow hover:-translate-y-0.5 transition-[transform,background-color,box-shadow,border-color] duration-300"
                      >
                        <div className="aspect-[4/3] overflow-hidden bg-pp-hover/40">
                          {it.image ? (
                            <img
                              src={it.image}
                              alt={`${it.item} — ${cat.label} at Pocket Play Cafe`}
                              loading="lazy"
                               className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-[transform,opacity] duration-500"
                            />
                          ) : (
                            <div className="w-full h-full pattern-gold flex items-center justify-center">
                              <span className="font-display font-bold text-gold/25 text-4xl tracking-wider">
                                {cat.label
                                  .split(' ')
                                  .map((w) => w[0])
                                  .join('')
                                  .slice(0, 2)}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center justify-between gap-3 p-4">
                          <span className="font-display font-semibold text-white uppercase tracking-wide text-sm sm:text-base">
                            {it.item}
                          </span>
                          <span className="font-display font-bold text-gold text-base sm:text-lg shrink-0">
                            {it.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="heading text-xl text-text-body">No items found</p>
              <p className="text-text-muted text-sm mt-2">Try a different search term</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  )
}

export { PreservedScroll }
