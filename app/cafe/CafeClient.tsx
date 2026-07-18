'use client'

import { useMemo, useState } from 'react'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer'
import { menu } from '../data'
import Hero from './components/Hero'
import StickyCategories from './components/StickyCategories'
import FeaturedSection from './components/FeaturedSection'
import CategorySection from './components/CategorySection'
import FloatingCart from './components/FloatingCart'
import CartDrawer from './components/CartDrawer'
import { CartProvider } from './cart/CartContext'
import type { MenuCardData } from './components/MenuCard'
import EmptyState from './components/EmptyState'

// Short, realistic one-liners keyed by item name so cards have a description
// without inflating the source data. Falls back to empty (no desc) if unknown.
const DESCRIPTIONS: Record<string, string> = {
  'Veg Burger': 'Crisp veg patty, fresh veggies, soft toasted bun.',
  'Chicken Burger': 'Juicy chicken patty with house mayo and lettuce.',
  'Veg Cheese Burger': 'Melted cheese over a crisp veg patty.',
  'Chicken Cheese Burger': 'Cheesy, grilled chicken patty — a crowd favourite.',
  'Veg Pizza': 'Loaded veg pizza with a stone-baked crust.',
  'Non-Veg Pizza': 'Spiced chicken and veggies on a crisp base.',
  'Paneer Pizza': 'Charred paneer cubes with a tangy tomato base.',
  'Veg Momos': 'Steamed veggie dumplings with dipping sauce.',
  'Chicken Momos': 'Juicy chicken dumplings, served with a spicy dip.',
  'Cold Coffee': 'Chilled, creamy coffee — the classic reset.',
  'Chocolate Shake': 'Thick, rich chocolate in every sip.',
  'Virgin Mojito': 'Mint, lime and soda — light and refreshing.',
  'Leg': 'Smoky grilled chicken leg, prepared fresh.',
  'Fries': 'Golden, crispy fries with a light salt finish.',
  'Red Sauce Pasta': 'Tangy tomato pasta with herbs.',
  'White Sauce Pasta': 'Creamy béchamel pasta, comfort in a bowl.',
}

const FEATURED = new Set([
  'Veg Cheese Burger',
  'Non-Veg Pizza',
  'Chicken Momos',
  'Cold Coffee',
  'Chocolate Shake',
])

const BESTSELLERS = new Set(['Veg Burger', 'Veg Pizza', 'Cold Coffee', 'Chicken Momos'])
const NEW = new Set(['Paneer Pizza', 'Corn Cheese Garlic Bread'])
const SPICY = new Set(['Chicken Burger', 'Schezwan Burger', 'Crispy Momos', 'Chicken Fried Momos'])
const CHEF = new Set(['Non-Veg Pizza', 'Chicken Momos', 'Veg Cheese Burger'])

function enrich(raw: { item: string; price: string; image?: string }): MenuCardData {
  let badge: MenuCardData['badge']
  if (SPICY.has(raw.item)) badge = 'spicy'
  else if (NEW.has(raw.item)) badge = 'new'
  else if (CHEF.has(raw.item)) badge = 'chef'
  else if (BESTSELLERS.has(raw.item)) badge = 'bestseller'

  return {
    item: raw.item,
    price: raw.price,
    image: raw.image,
    desc: DESCRIPTIONS[raw.item],
    badge,
    featured: FEATURED.has(raw.item),
  }
}

export default function CafePageClient() {
  const [active, setActive] = useState<string>('all')
  const [query, setQuery] = useState('')

  const categories = useMemo(
    () => [{ key: 'all', label: 'All' }, ...menu.map((m) => ({ key: m.key, label: m.label }))],
    []
  )

  const q = query.trim().toLowerCase()

  const enriched = useMemo(
    () => menu.map((cat) => ({ ...cat, items: cat.items.map(enrich) })),
    []
  )

  const filtered = useMemo(() => {
    if (q) {
      return enriched
        .map((cat) => ({
          ...cat,
          items: cat.items.filter(
            (it) => it.item.toLowerCase().includes(q) || cat.label.toLowerCase().includes(q)
          ),
        }))
        .filter((cat) => cat.items.length > 0)
    }
    if (active === 'all') return enriched
    return enriched.filter((m) => m.key === active)
  }, [q, active, enriched])

  const featuredItems = useMemo(
    () => enriched.flatMap((c) => c.items).filter((it) => it.featured),
    [enriched]
  )

  const totalItems = filtered.reduce((n, c) => n + c.items.length, 0)

  const handleCategory = (key: string) => {
    setActive(key)
    setQuery('')
  }

  return (
    <CartProvider>
      <div className="menu-page min-h-screen flex flex-col">
        <Hero query={query} onQuery={setQuery} />

        <StickyCategories categories={categories} active={active} onSelect={handleCategory} />

        <main className="flex-1 px-4 sm:px-6 py-12">
          <div className="container-lux space-y-20">
            {q === '' && active === 'all' && featuredItems.length > 0 && (
              <FeaturedSection items={featuredItems} />
            )}

            {totalItems > 0 ? (
              filtered.map((cat) => (
                <CategorySection
                  key={cat.key}
                  id={cat.key}
                  label={cat.label}
                  description={
                    cat.key === 'all' ? undefined : `${cat.items.length} dishes prepared fresh to order.`
                  }
                  items={cat.items}
                />
              ))
            ) : (
              <EmptyState query={query} />
            )}
          </div>
        </main>

        <div className="h-[100px]" aria-hidden="true" />
        <Footer />
        <BackToTop />
        <FloatingCart />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
