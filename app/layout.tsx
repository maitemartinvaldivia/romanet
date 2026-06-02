import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from './providers'
import './globals.css'

const quicksand = Quicksand({ 
  subsets: ["latin"],
  variable: '--font-quicksand',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RomaNET - United Against Discrimination',
  description: 'RomaNET is a European project created to fight hate speech and hate crimes against Roma communities, encompassing AI in the creation of positive counter narratives.',
  generator: 'v0.app',
  keywords: ['Roma', 'hate speech', 'discrimination', 'EU project', 'counter-narratives', 'AI'],
  icons: {
    icon: '/romanet/logos/RomaNet Logo (1).png',
    apple: '/romanet/logos/RomaNet Logo (1).png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={`${quicksand.variable} font-sans antialiased`}>
        <Providers>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </Providers>
      </body>
    </html>
  )
}
