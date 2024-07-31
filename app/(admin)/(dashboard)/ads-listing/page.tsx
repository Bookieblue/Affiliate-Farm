import DemoPage from '@/components/tables/ad-listing/page'

import React, { Suspense } from 'react'

const Page = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <section className='mt-32 padding-container'>
        <div className='flexBetween '>
          <p className=' text-cream-50 bold-20'>All Ads listing</p>
        </div>
        <DemoPage />
      </section>
    </Suspense>
  )
}

export default Page
