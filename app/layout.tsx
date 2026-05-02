import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Back Bashing — Deep Tissue Massage Done Proper | By Rafael',
  description:
    'One-off, one-day-only deep tissue massage event with Rafael. Only 5 spots available. Book your appointment for 24th May 2026 in Manchester.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Permanent+Marker&family=Rubik:wght@300;400;500;600;700;800&family=Caveat+Brush&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
