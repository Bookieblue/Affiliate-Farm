import DemoPage from '@/components/tables/ad-listing/page'

import React from 'react'




const page = () => {
  return (
    <section  className='mt-32 padding-container'>
        <div className='flexBetween '>
          <p className=' text-cream-50 bold-20'>All Ads listing</p>
        </div>
        <DemoPage />
    </section>
  )
}

export default page;