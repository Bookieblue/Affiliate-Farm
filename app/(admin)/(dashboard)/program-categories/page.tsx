import Categories from '@/components/tables/program-categories/page';
import { Button } from '@/components/ui/button';

import React from 'react'




const page = () => {
  return (
    <section  className='mt-32 padding-container'>
        <div className='flexBetween '>
          <p className=' text-cream-50 bold-20'>Program category</p>
          <Button variant='transparent'>Add new category</Button>
        </div>
        <Categories />
    </section>
  )
}

export default page;