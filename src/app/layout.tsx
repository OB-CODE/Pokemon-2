"use client"
import './globals.css'
// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { store } from './store'
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

// can't use metadata on client side

// export const metadata: Metadata = {
//   title: 'Pokemon 2',
//   description: 'Next.JS application',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>{children}</body>
      </Provider>,
    </html>
  )
}
