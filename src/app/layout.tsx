import type { Metadata } from 'next'
import { Inter, Pacifico } from 'next/font/google'
import './globals.css'

const inter = Pacifico({weight: "400", subsets: ["latin"]})

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
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
