'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'

export type CartItem = {
  item: string
  price: string // formatted ₹ string, preserved from source
  image?: string
  qty: number
}

export type OrderType = 'dine_in' | 'takeaway'

type CartContextValue = {
  items: CartItem[]
  count: number
  total: number // numeric total in rupees
  totalLabel: string // formatted ₹ string
  add: (item: Omit<CartItem, 'qty'>, qty?: number) => void
  inc: (item: string) => void
  dec: (item: string) => void
  remove: (item: string) => void
  clear: () => void
  qtyOf: (item: string) => number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  orderType: OrderType
  setOrderType: (t: OrderType) => void
  tableNo: string
  setTableNo: (n: string) => void
  whatsappHref: string
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'ppc_cart_v1'

function formatINR(n: number): string {
  return '₹' + Math.round(n).toLocaleString('en-IN')
}

function loadInitial(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
      .filter((it) => it && typeof it.item === 'string' && it.qty > 0)
      .map((it: CartItem) => ({ ...it, qty: Math.max(1, Math.floor(it.qty)) }))
  } catch {
    return []
  }
}

// WhatsApp number for Pocket Play Cafe (from brand config).
const WA_NUMBER = '919599442499'

function parsePrice(price: string): number {
  const n = Number(price.replace(/[^0-9.]/g, ''))
  return Number.isFinite(n) ? n : 0
}

function buildWhatsAppHref(
  items: CartItem[],
  total: number,
  orderType: OrderType,
  tableNo: string
): string {
  const lines: string[] = []
  lines.push('*Pocket Play Cafe — New Order*')
  lines.push('')
  items.forEach((it) => {
    const unit = parsePrice(it.price)
    const line = unit * it.qty
    lines.push(`• ${it.item} x${it.qty} — ₹${Math.round(line).toLocaleString('en-IN')}`)
  })
  lines.push('')
  lines.push(`*Subtotal:* ₹${Math.round(total).toLocaleString('en-IN')}`)
  lines.push(`*Order Type:* ${orderType === 'dine_in' ? 'Dine In' : 'Takeaway'}`)
  if (orderType === 'dine_in' && tableNo.trim()) {
    lines.push(`*Table No:* ${tableNo.trim()}`)
  }
  const text = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${WA_NUMBER}?text=${text}`
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() =>
    typeof window === 'undefined' ? [] : loadInitial()
  )
  const [isOpen, setOpen] = useState(false)
  const [orderType, setOrderType] = useState<OrderType>('dine_in')
  const [tableNo, setTableNo] = useState('')
  const skipPersist = useRef(true)

  // Persist on change. Skip the very first commit so a lazily-restored cart
  // is not overwritten with itself before any user action.
  useEffect(() => {
    if (skipPersist.current) {
      skipPersist.current = false
      return
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* storage unavailable — ignore */
    }
  }, [items])

  const add = (entry: Omit<CartItem, 'qty'>, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((p) => p.item === entry.item)
      if (found) {
        return prev.map((p) =>
          p.item === entry.item ? { ...p, qty: p.qty + qty } : p
        )
      }
      return [...prev, { ...entry, qty }]
    })
  }

  const inc = (item: string) =>
    setItems((prev) =>
      prev.map((p) => (p.item === item ? { ...p, qty: p.qty + 1 } : p))
    )

  const dec = (item: string) =>
    setItems((prev) => {
      const next = prev
        .map((p) => (p.item === item ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
      return next
    })

  const remove = (item: string) =>
    setItems((prev) => prev.filter((p) => p.item !== item))

  const clear = () => setItems([])

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((n, it) => n + it.qty, 0)
    const total = items.reduce((n, it) => n + parsePrice(it.price) * it.qty, 0)
    const qtyMap = new Map(items.map((it) => [it.item, it.qty]))
    return {
      items,
      count,
      total,
      totalLabel: formatINR(total),
      add,
      inc,
      dec,
      remove,
      clear,
      qtyOf: (item: string) => qtyMap.get(item) ?? 0,
      isOpen,
      openCart: () => setOpen(true),
      closeCart: () => setOpen(false),
      orderType,
      setOrderType,
      tableNo,
      setTableNo,
      whatsappHref: buildWhatsAppHref(items, total, orderType, tableNo),
    }
  }, [items, isOpen, orderType, tableNo])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within <CartProvider>')
  return ctx
}
