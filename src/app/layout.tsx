import type { Metadata } from 'next'

import { IBM_Plex_Sans, IBM_Plex_Serif } from 'next/font/google'

import './globals.css'

const plexSans = IBM_Plex_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
})

const plexSerif = IBM_Plex_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: '500',
})

export const metadata: Metadata = {
  title: 'Anthony Mattox',
  description:
    'Anthony Mattox: occasional artist, computer programmer, avid home cook, partner at Friends of The Web, co-host of Lucky Paper Radio.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${plexSans.variable} ${plexSerif.variable}`}>
        {children}
      </body>
    </html>
  )
}
