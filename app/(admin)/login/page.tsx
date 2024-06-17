import LoginForm from '@/components/forms/login'
import React from 'react'

const page = () => {
  return (
    <section className='flexCenter max-container padding-container '>
      <div className='w-fit p-6 bg-gray-40 border border-gray-20 rounded-lg mt-20'>
      <h3 className='text-cream-50 font-bold text-[34px]'>Sign in as Administrator</h3>
        <p className='text-gray-10 regular-16'>Let’s start managing Affiliate Farm from here.</p>
        <LoginForm />
      </div>
    </section>
  )
}

export default page