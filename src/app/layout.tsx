import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { Providers } from '@/app/ReduxToolkit/provider'

type InterFontType = ReturnType<typeof Inter>
const inter: InterFontType = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Airbnb',
    default: 'Airbnb'
  },
  description:
    'Discover unique stays, vacation rentals, beach houses, and more on Airbnb. Find the perfect accommodation for your next getaway.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
