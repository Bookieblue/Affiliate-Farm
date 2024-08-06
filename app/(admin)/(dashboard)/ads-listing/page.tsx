import DemoPage from '@/components/tables/ad-listing/page'

import React, { Suspense } from 'react'

const Page = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <section className='mt-32 padding-container'>
        <DemoPage />
      </section>
    </Suspense>
  )
}

export default Page
