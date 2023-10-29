import type { Metadata } from 'next'
import { Cookie } from 'next/font/google'
import './globals.css'

const inter = Cookie({weight: "400", subsets: ["latin"]})

export const metadata: Metadata = {
  title: 'Gaby birthday'}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="img/icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
