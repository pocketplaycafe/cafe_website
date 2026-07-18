import type { Metadata } from 'next'
import CafePageClient from './CafeClient'

export const metadata: Metadata = {
  title: 'Menu & Food Prices — Pocket Play Cafe Patna',
  description:
    'Explore the Pocket Play Cafe menu: burgers, pizza, momos, pasta, fries, garlic bread, sandwiches, cold coffee, shakes & mojitos in Patna City. Freshly made, priced for everyday cravings.',
  keywords: [
    'Pocket Play Cafe menu',
    'burger cafe Patna City',
    'pizza Patna',
    'momos Patna City',
    'cold coffee Patna',
    'best cafe food Patna',
  ],
  alternates: { canonical: '/cafe' },
  openGraph: {
    title: 'Menu & Food Prices — Pocket Play Cafe Patna | Pocket Play Cafe',
    description:
      'Burgers, pizza, momos, pasta, coffee & shakes at Pocket Play Cafe, Patna City. Freshly made, great prices.',
    url: '/cafe',
  },
}

export default function CafePage() {
  return <CafePageClient />
}
