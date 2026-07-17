import type { Metadata } from 'next'
import GalleryPageClient from './GalleryClient'

export const metadata: Metadata = {
  title: 'Gallery — Inside Pocket Play Cafe Patna City',
  description:
    'Take a look inside Pocket Play Cafe — the gaming lounge, pool & snooker tables, PS5 setups, and the food that keeps Patna City coming back.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Gallery — Inside Pocket Play Cafe Patna City | Pocket Play Cafe',
    description:
      'The gaming lounge, pool tables, PS5 setups and food at Pocket Play Cafe, Patna City.',
    url: '/gallery',
  },
}

export default function GalleryPage() {
  return <GalleryPageClient />
}
