'use client'

import { useEffect, useRef, ReactNode } from 'react'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  clip = false,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  clip?: boolean
  as?: 'div' | 'section' | 'li' | 'article'
}) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined
  return (
    <Tag
      ref={ref as never}
      className={`${clip ? 'reveal-clip' : 'reveal'} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  )
}
