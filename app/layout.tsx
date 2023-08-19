// import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aingstudios App',
  description: 'Generated by aingstudios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
