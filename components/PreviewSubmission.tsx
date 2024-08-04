'use client'
import React, { useState, useEffect, useContext } from 'react'
import { ChevronLeft } from 'lucide-react'
import Programs from './Program'
import { Button } from './ui/button'
import Link from 'next/link'
import NestedDialog from './ui/FormField/NestedDialog'
import { useRouter } from 'next/navigation'
import { useCreateProgram } from '@/services/models/hooks/program/hook'
import { AffiliateFormContext } from '@/lib/context/AffiliateFormContext'

const PreviewSubmission = () => {
  const router = useRouter()
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false)
  const [formData, setFormData] = useState<Record<string, any>>({})

  const context = useContext(AffiliateFormContext)

  useEffect(() => {
    if (context?.formData) setFormData(context.formData)
  }, [context])

  const { data, mutate, isSuccess, isPending } = useCreateProgram(formData)

  useEffect(() => {
    if (isSuccess) setIsSuccessDialogOpen(true)
  }, [isSuccess])

  const handleFormSubmit = () => {
    mutate()
  }

  return (
    <div className='bg-gray-40 p-3 r lg:p-6 h-fit rounded-lg'>
      <div className='flex items-center mb-3 gap-2'>
        <Link href='/submit-program-form'>
          <ChevronLeft className='6 text-cream-50' />
        </Link>
        <p className='bold-24 text-cream-50'>Preview submission</p>
      </div>
      <p className='text-cream-20 regular-16 ml-1'>
        Get your brand exposed to massive traffic from Affiliate Farm.
      </p>
      <div className='flexCenter w-full'>
        <div className=' rounded-xl mt-7'>
          <Programs
            logo={formData.logo || ''}
            commissionRate={formData.commissionRate || 0}
            commissionType={formData.commissionType || ''}
            name={formData.name || ''}
            description={formData.description || ''}
            payoutAmount={formData.payoutAmount || 0}
            cookieDuration={formData.cookieDuration || 0}
            shortDescription={formData.shortDescription || ''}
            programUrl={formData.programUrl || ''}
            id={formData.id || 0} // Assuming you have an id field in formData
            currency={formData.currency || ''}
            verified={false}
          />
        </div>
      </div>
      <div className='regular-14 break-all w-full lg:regular-16 grid grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
        <div>
          <p className='text-cream-50'>Affiliate Niche</p>
          <p className='text-cream-20'>{formData.niche}</p>
        </div>
        <div>
          <p className='text-cream-50'>Affiliate Type</p>
          <p className='text-cream-20'>{formData.affiliateType}</p>
        </div>
        <div>
          <p className='text-cream-50'>Payment Method</p>
          <p className='text-cream-20'>{formData.paymentMethod}</p>
        </div>
        <div>
          <p className='text-cream-50'>Affiliate Level</p>
          <p className='text-cream-20'>{formData.affiliateLevel}</p>
        </div>
        <div>
          <p className='text-cream-50'>Publisher Name</p>
          <p className='text-cream-20'>{formData.publisherName}</p>
        </div>
        <div>
          <p className='text-cream-50'>Publisher Email</p>
          <p className='text-cream-20'>{formData.publisherEmail}</p>
        </div>
      </div>
      <Button className='w-full mt-10' onClick={handleFormSubmit}>
        {isPending ? 'Loading...' : 'Submit Affiliate Program'}
      </Button>
      <NestedDialog
        isOpen={isSuccessDialogOpen}
        onClose={() => setIsSuccessDialogOpen(false)}
        title='Affiliate program submitted'
        description='Your brand will start benefitting from massive exposure and a quick affiliate program spread through our targeted outreach to content creators'
      >
        <Button
          className='w-full mt-3'
          onClick={() => router.push('/featured-ad')}
        >
          Promote Affiliate Program
        </Button>
        <Button
          variant='outline'
          className='w-full bg-[#C2BDB9]'
          onClick={() => router.push('/')}
        >
          Go To Homepage
        </Button>
      </NestedDialog>
    </div>
  )
}

export default PreviewSubmission
