import type { Metadata, Viewport } from 'next'
import { Oswald, Lato } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
  weight: ['300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: {
    default: 'Pocket Play Cafe — Good Food • Good Mood',
    template: '%s | Pocket Play Cafe',
  },
  description:
    'A premium gaming lounge & cafe in Bihar Sharif. PS4 & PS5, Pool, Snooker, Table Tennis, Carrom and a full kitchen of burgers, pizza, momos, shakes & more.',
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
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
    <html lang="en" className={`${oswald.variable} ${lato.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-pp-black text-white font-body antialiased overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
