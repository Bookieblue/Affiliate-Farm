import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import Provider from '@/services/models/Provider'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Affiliate Farm',
  description: 'Affiliate Farm official website.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Suspense fallback={<p>Loading...</p>}>
          <Provider>{children}</Provider>
        </Suspense>
      </body>
    </html>
  )
}
