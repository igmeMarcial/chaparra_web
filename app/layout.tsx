import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'munichaparra',
  description: 'Pagina Oficial de la Municipalidad de chapparra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body >
        <Navbar/>
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>

    </html>
  )
}
