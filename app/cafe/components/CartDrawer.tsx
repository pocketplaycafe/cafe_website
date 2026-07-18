'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useCart } from '../cart/CartContext'

function parsePrice(price: string): number {
  const n = Number(price.replace(/[^0-9.]/g, ''))
  return Number.isFinite(n) ? n : 0
}

export default function CartDrawer() {
  const reduce = useReducedMotion()
  const {
    items,
    isOpen,
    closeCart,
    inc,
    dec,
    remove,
    totalLabel,
    count,
    orderType,
    setOrderType,
    tableNo,
    setTableNo,
    whatsappHref,
  } = useCart()

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeCart()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, closeCart])

  // Lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="menu-drawer-root" role="dialog" aria-modal="true" aria-label="Your order">
          <motion.div
            className="menu-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
          />

          <motion.aside
            className="menu-drawer"
            initial={reduce ? { opacity: 0 } : { x: '100%', y: 0 }}
            animate={reduce ? { opacity: 1 } : { x: 0, y: 0 }}
            exit={reduce ? { opacity: 0 } : { x: '100%', y: 0 }}
            transition={{ type: 'spring', stiffness: 360, damping: 38 }}
          >
            <header className="menu-drawer-head">
              <div>
                <h2 className="menu-drawer-title">Your Order</h2>
                <p className="menu-drawer-sub">
                  {count} {count === 1 ? 'item' : 'items'}
                </p>
              </div>
              <button
                type="button"
                className="menu-drawer-close"
                onClick={closeCart}
                aria-label="Close cart"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </header>

            <div className="menu-drawer-body">
              {count === 0 ? (
                <div className="menu-drawer-empty">
                  <span className="menu-drawer-empty-icon" aria-hidden="true">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l3-8H5.4M7 13L5.4 5M7 13l-2 4h12" />
                      <circle cx="9" cy="20" r="1" />
                      <circle cx="17" cy="20" r="1" />
                    </svg>
                  </span>
                  <p className="menu-drawer-empty-title">Your cart is empty.</p>
                  <p className="menu-drawer-empty-sub">
                    Add delicious food to get started.
                  </p>
                </div>
              ) : (
                <ul className="menu-drawer-list">
                  <AnimatePresence initial={false}>
                    {items.map((it) => {
                      const line = parsePrice(it.price) * it.qty
                      return (
                        <motion.li
                          key={it.item}
                          className="menu-drawer-item"
                          layout={!reduce}
                          initial={reduce ? false : { opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                          transition={{ duration: 0.22 }}
                        >
                          <div className="menu-drawer-thumb">
                            {it.image ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={it.image} alt="" loading="lazy" decoding="async" />
                            ) : (
                              <span aria-hidden="true">
                                {it.item.slice(0, 1).toUpperCase()}
                              </span>
                            )}
                          </div>

                          <div className="menu-drawer-info">
                            <p className="menu-drawer-name">{it.item}</p>
                            <p className="menu-drawer-price tnum">{it.price}</p>
                            <div className="menu-qty menu-qty-sm" role="group" aria-label={`Quantity of ${it.item}`}>
                              <button
                                type="button"
                                className="menu-qty-btn"
                                aria-label={`Decrease ${it.item}`}
                                onClick={() => dec(it.item)}
                              >
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} aria-hidden="true">
                                  <path strokeLinecap="round" d="M5 12h14" />
                                </svg>
                              </button>
                              <span className="menu-qty-num tnum" aria-live="polite">{it.qty}</span>
                              <button
                                type="button"
                                className="menu-qty-btn"
                                aria-label={`Increase ${it.item}`}
                                onClick={() => inc(it.item)}
                              >
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} aria-hidden="true">
                                  <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                                </svg>
                              </button>
                            </div>
                          </div>

                          <div className="menu-drawer-line">
                            <span className="menu-drawer-line-total tnum">₹{Math.round(line).toLocaleString('en-IN')}</span>
                            <button
                              type="button"
                              className="menu-drawer-remove"
                              aria-label={`Remove ${it.item}`}
                              onClick={() => remove(it.item)}
                            >
                              Remove
                            </button>
                          </div>
                        </motion.li>
                      )
                    })}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {count > 0 && (
              <footer className="menu-drawer-foot">
                <div className="menu-order-type" role="radiogroup" aria-label="Order type">
                  <button
                    type="button"
                    role="radio"
                    aria-checked={orderType === 'dine_in'}
                    className="menu-order-option"
                    data-active={orderType === 'dine_in'}
                    onClick={() => setOrderType('dine_in')}
                  >
                    <span className="menu-order-radio" aria-hidden="true" />
                    Dine In
                  </button>
                  <button
                    type="button"
                    role="radio"
                    aria-checked={orderType === 'takeaway'}
                    className="menu-order-option"
                    data-active={orderType === 'takeaway'}
                    onClick={() => setOrderType('takeaway')}
                  >
                    <span className="menu-order-radio" aria-hidden="true" />
                    Takeaway
                  </button>
                </div>

                {orderType === 'dine_in' && (
                  <div className="menu-table-field">
                    <label htmlFor="table-no" className="menu-table-label">Table Number</label>
                    <input
                      id="table-no"
                      type="text"
                      inputMode="numeric"
                      className="menu-table-input tnum"
                      placeholder="e.g. 12"
                      value={tableNo}
                      onChange={(e) => setTableNo(e.target.value)}
                    />
                  </div>
                )}

                <div className="menu-drawer-row menu-drawer-row-total">
                  <span>Subtotal</span>
                  <span className="tnum">{totalLabel}</span>
                </div>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-checkout"
                >
                  Send Order on WhatsApp
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  </a>
              </footer>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  )
}
