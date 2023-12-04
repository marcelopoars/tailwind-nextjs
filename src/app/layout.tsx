import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from './components'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${inter.className}`}>
        <div className="grid grid-cols-app min-h-screen ">
          <Sidebar />
          <main className="p-8 pb-12">{children}</main>
        </div>
      </body>
    </html>
  )
}
