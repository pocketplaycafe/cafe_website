import { redirect } from 'next/navigation'

export const metadata = {
  alternates: { canonical: '/about' },
}

export default function ContactPage() {
  redirect('/about')
}
