import SideNav from '@/components/SideBar'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'
import OtherAffliate from '@/components/OtherAffliate'
import Faq from '@/components/Faq'

export const metadata: Metadata = {
  title: 'Affiliate Farm',
  description: 'Affiliate Farm official website.',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='hide-scrollbar w-full'>
          <Navbar />
          <div className='min-h-screen max-container w-full lg:grid-cols-[250px,1fr] grid '>
            <div className='row-span-1 col-span-1 hidden lg:block '>
              <SideNav />
            </div>
            <div className='row-span-1 col-span-1 '>
              {children}
              <OtherAffliate />
              <Faq />
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
