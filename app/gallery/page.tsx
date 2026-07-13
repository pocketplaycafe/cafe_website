'use client'

import { useState, useEffect, useCallback } from 'react'
import Reveal from '../components/Reveal'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer'
import { ParallaxScrollSecond } from '@/components/ui/parallax-scroll'
import { galleryImages } from '../data'

export default function GalleryPage() {
  const [open, setOpen] = useState<number | null>(null)

  const close = useCallback(() => setOpen(null), [])
  const prev = useCallback(
    () => setOpen((o) => (o === null ? o : (o - 1 + galleryImages.length) % galleryImages.length)),
    []
  )
  const next = useCallback(
    () => setOpen((o) => (o === null ? o : (o + 1) % galleryImages.length)),
    []
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open === null) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close, prev, next])

  return (
    <>
      <section className="relative pt-32 pb-10 px-4 sm:px-6 overflow-hidden">
        <div className="absolute -top-10 right-0 w-[460px] h-[460px] bg-gold/10 rounded-full blur-[150px]" />
        <div className="container-lux relative text-center">
          <Reveal>
            <span className="eyebrow">Captured Moments</span>
            <h1 className="heading text-4xl sm:text-5xl md:text-6xl mb-4">The Gallery</h1>
            <p className="text-text-body max-w-xl mx-auto">
              A peek into the lounge — the tables, the plates, and the good moods.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 bg-pp-deep">
        <div className="container-lux">
          <Reveal className="text-center mb-12">
            <span className="eyebrow">Scroll The Vibe</span>
            <h2 className="heading text-3xl sm:text-4xl">A Closer Look</h2>
            <p className="text-text-body max-w-xl mx-auto mt-3">
              Scroll to let the moments drift — tap any photo to view it full screen.
            </p>
          </Reveal>
        </div>
        <ParallaxScrollSecond images={galleryImages} onSelect={setOpen} />
      </section>

      {/* Lightbox */}
      <div
        className={`fixed inset-0 z-[70] bg-pp-deep/97 backdrop-blur-xl flex items-center justify-center p-4 transition-opacity duration-300 ${
          open === null ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
      >
        <button onClick={close} aria-label="Close" className="absolute top-5 right-5 w-12 h-12 rounded-md bg-pp-card border border-gold/20 flex items-center justify-center hover:bg-pp-hover transition-colors z-10">
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <button onClick={prev} aria-label="Previous" className="absolute left-4 sm:left-8 w-12 h-12 rounded-md bg-pp-card border border-gold/20 flex items-center justify-center hover:bg-pp-hover transition-colors">
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={next} aria-label="Next" className="absolute right-4 sm:right-8 w-12 h-12 rounded-md bg-pp-card border border-gold/20 flex items-center justify-center hover:bg-pp-hover transition-colors">
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {open !== null && (
          <img
            src={galleryImages[open]}
            alt="Pocket Play Cafe"
            className="max-w-full max-h-[85vh] rounded-md object-contain card-shadow"
          />
        )}
      </div>

      <Footer />
      <BackToTop />
    </>
  )
}
