import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-playfair',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Jason Xu Resume',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  )
}
