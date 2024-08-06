import PreviewSubmission from '@/components/PreviewSubmission'
import Link from 'next/link'
import React, { Suspense } from 'react'

const Page = () => {
  return (
    <Suspense>
      <section className=' mt-20 mx-auto max-w-[1700px] padding-container flexCenter flex-col md:w-[60%]'>
        <PreviewSubmission />
        <div className='mt-10'>
          <p className='text-cream-50 meium-20'>Have question?</p>
          <p className='mt-5 text-cream-20 regular-16'>
            Contact us to ask us any question concerning our sponsor program, or
            feedback for us, You can mail us{' '}
            <Link href='/' className='text-yellow-50 underline'>
              support@affiliatefarm.xyz
            </Link>
          </p>
        </div>
      </section>
    </Suspense>
  )
}

export default Page
