import type { Metadata } from 'next'
import './globals.css'
import Provider from '@/services/models/Provider'
import { Suspense } from 'react'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
          <Provider>
            <ToastContainer
              position='top-right'
              pauseOnFocusLoss={false}
              pauseOnHover={false}
              theme='dark'
            />
            {children}
          </Provider>
        </Suspense>
      </body>
    </html>
  )
}
