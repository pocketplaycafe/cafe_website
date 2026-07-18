import type { Metadata, Viewport } from 'next'
import { Oswald, Outfit } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Script from 'next/script'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pocketplaycafe.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Pocket Play Cafe — Best Gaming Lounge & Cafe in Patna City',
    template: '%s | Pocket Play Cafe',
  },
  description:
    'Patna City’s premium gaming lounge & cafe. PS4 & PS5, Pool, Snooker, Table Tennis, Carrom and a full kitchen of burgers, pizza, momos, shakes & more.',
  keywords: [
    'gaming cafe Patna City',
    'PS5 gaming lounge Patna',
    'pool table cafe Patna',
    'snooker cafe Bihar Sharif',
    'best burger cafe Patna City',
    'cafe with games Patna',
    'family restaurant Patna City',
    'Pocket Play Cafe',
  ],
  authors: [{ name: 'Pocket Play Cafe' }],
  applicationName: 'Pocket Play Cafe',
  category: 'Restaurant & Gaming',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: baseUrl,
    siteName: 'Pocket Play Cafe',
    title: 'Pocket Play Cafe — Best Gaming Lounge & Cafe in Patna City',
    description:
      'Patna City’s premium gaming lounge & cafe. PS4 & PS5, Pool, Snooker, Table Tennis, Carrom and a full kitchen of burgers, pizza, momos, shakes & more.',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Pocket Play Cafe — Gaming Lounge & Cafe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pocket Play Cafe — Best Gaming Lounge & Cafe in Patna City',
    description:
      'Patna City’s premium gaming lounge & cafe. PS4 & PS5, Pool, Snooker, Table Tennis, Carrom and a full kitchen of burgers, pizza, momos, shakes & more.',
    images: ['/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Pocket Play Cafe',
  description:
    'A premium gaming lounge & cafe in Patna City offering PS4 & PS5, Pool, Snooker, Table Tennis, Carrom and a full kitchen.',
  url: baseUrl,
  telephone: '+91 95994 42499',
  image: `${baseUrl}/logo.jpeg`,
  priceRange: '₹',
  servesCuisine: ['Burgers', 'Pizza', 'Momos', 'Pasta', 'Coffee', 'Shakes'],
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      '1st Floor, above Grand Biryani, Dira Par, Trimurti Chowk, Opposite Mangal Talab, Near Baal Leela',
    addressLocality: 'Patna City',
    addressRegion: 'Bihar',
    postalCode: '800008',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.6098,
    longitude: 85.1792,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '10:00',
      closes: '23:00',
    },
  ],
  acceptsReservations: true,
  sameAs: [],
}

export const viewport: Viewport = {
  themeColor: '#0F0F0F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-pp-black text-white font-body antialiased overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
