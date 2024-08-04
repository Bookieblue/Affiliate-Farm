import LoginForm from '@/components/forms/login'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <section className='flexCenter mt-20 max-container padding-container '>
        <div className='w-fit p-6 bg-gray-40 border border-gray-20 rounded-lg mt-20'>
          <h3 className='text-cream-50 font-bold text-[34px]'>
            Sign in as Administrator
          </h3>
          <p className='text-gray-10 regular-16'>
            Let’s start managing Affiliate Farm from here.
          </p>
          <LoginForm />
        </div>
      </section>
    </Suspense>
  )
}

export default page
