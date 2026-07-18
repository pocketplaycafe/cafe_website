'use client'

import { memo, useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useCart } from '../cart/CartContext'

export type MenuCardData = {
  item: string
  price: string
  image?: string
  desc?: string
  badge?: 'bestseller' | 'new' | 'spicy' | 'chef'
  featured?: boolean
}

const BADGE_LABEL: Record<NonNullable<MenuCardData['badge']>, string> = {
  bestseller: 'Bestseller',
  new: 'New',
  spicy: 'Spicy',
  chef: "Chef's Choice",
}

function MenuCardImpl({ data }: { data: MenuCardData }) {
  const reduce = useReducedMotion()
  const { add, inc, dec, qtyOf } = useCart()
  const qty = qtyOf(data.item)
  const [added, setAdded] = useState(false)

  const initials = data.item
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const handleAdd = () => {
    add({ item: data.item, price: data.price, image: data.image })
    if (!reduce) {
      setAdded(true)
      window.setTimeout(() => setAdded(false), 600)
    }
  }

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const }}
      className={cn('menu-card', data.featured && 'menu-card-feat')}
    >
      <div className="menu-card-media">
        {data.badge && (
          <span
            className={cn(
              'menu-badge',
              data.badge === 'spicy' && 'menu-badge-spicy',
              data.badge === 'new' && 'menu-badge-new',
              data.badge === 'chef' && 'menu-badge-chef'
            )}
          >
            {data.badge === 'spicy' && (
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13 2c.5 3-1 4-2.5 5.5S8 11 8 14a5 5 0 0010 0c0-2-1-3.5-2-5 .5 1.5-.5 2.5-1 3 .5-2-1-5-2-10z" />
              </svg>
            )}
            {BADGE_LABEL[data.badge]}
          </span>
        )}

        {data.image ? (
          <Image
            src={data.image}
            alt={`${data.item} at Pocket Play Cafe`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
            decoding="async"
            className="menu-card-img"
          />
        ) : (
          <div className="menu-card-media-empty" aria-hidden="true">
            {initials}
          </div>
        )}

        <span className="menu-card-shimmer" aria-hidden="true" />
      </div>

      <div className="menu-card-body">
        <h3 className="menu-card-name">{data.item}</h3>
        {data.desc && <p className="menu-card-desc">{data.desc}</p>}

        <div className="menu-card-foot">
          <span className="menu-card-price">{data.price}</span>

          {qty === 0 ? (
            <motion.button
              type="button"
              className="menu-add"
              aria-label={`Add ${data.item} to order`}
              onClick={handleAdd}
              whileTap={{ scale: 0.96 }}
            >
              {added ? (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Added
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  </svg>
                  Add
                </>
              )}
            </motion.button>
          ) : (
            <div className="menu-qty" role="group" aria-label={`Quantity of ${data.item}`}>
              <button
                type="button"
                className="menu-qty-btn"
                aria-label={`Decrease ${data.item}`}
                onClick={() => dec(data.item)}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} aria-hidden="true">
                  <path strokeLinecap="round" d="M5 12h14" />
                </svg>
              </button>
              <span className="menu-qty-num tnum" aria-live="polite">
                {qty}
              </span>
              <button
                type="button"
                className="menu-qty-btn"
                aria-label={`Increase ${data.item}`}
                onClick={() => inc(data.item)}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} aria-hidden="true">
                  <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default memo(MenuCardImpl)
