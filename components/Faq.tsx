import { FAQ } from '@/constant'
import React from 'react'

const Faq = () => {
  return (
    <section className='padding-container mt-20 lg:w-[80%]'>
        <div>
          <h3 className='font-[600px] text-[34px] text-cream-50'>Frequently asked questions about Travel Affiliate programs</h3>
          <div>
            {FAQ. map((faq, index) =>(
                <div className='' key={index}>
                   <p className='bold-16 text-cream-20 mt-5'>{faq.question}</p>
                   <p className='regular-16 text-cream-20 mt-2'>{faq.answer}</p>
                </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Faq