'use client'
import { AD_FEE, FEATURED_AD } from '@/constant'
import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import MainDialog from '@/components/ui/FormField/MainDialog'
import NestedDialog from '@/components/ui/FormField/NestedDialog'
import FeaturedAdForm from '@/components/forms/featuredAd'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const page = () => {
  const [isMainDialogOpen, setIsMainDialogOpen] = useState(false)
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false)

  const router = useRouter()

  const handleFormSubmit = (values: any) => {
    console.log('Form Submitted:', values)
    // Close main dialog and open success dialog
    setIsMainDialogOpen(false)
    setIsSuccessDialogOpen(true)
    // You can also perform navigation or other actions here
  }
  return (
    <section className='max-container padding-container flex flex-col lg:flex-row gap-10 mb-20 w-full mt-28'>
      <div className='w-full lg:w-[65%] lg:padding-container'>
        <h4 className='text-cream-50 bold-32'>Feature Ad</h4>
        <p className='text-cream-20 regular-16 mt-4'>
          Promote your brand affiliate program on Affiliate farm and attract
          attention of bloggers, content creator, and YouTubers shopping for new
          offers to promote and drive significant credibility and traffic to
          your brand product massively.
        </p>
        <div className='mt-10 bg-gray-20 padding-container py-10'>
          <p className='text-cream-50 medium-20'>
            Get mention everywhere with our featured ad:
          </p>
          <ul>
            {FEATURED_AD.map((feature) => (
              <li className='list-disc ml-5 mb-5 text-cream-20 mt-4 '>
                <span className='text-cream-20 bold-16'>{feature.name}</span>
                <span className='text-cream-20 regular-16'>
                  {feature.description}
                </span>
              </li>
            ))}
          </ul>
          <p className='text-cream-50 medium-16'>
            Maximize your brand's visibility, credibility, and reach by been
            mentioned everywhere on the internet through our featured ads space.
          </p>
        </div>
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
      </div>
      <div className='bg-black-30 w-full lg:w-[30%] h-fit py-5 padding-container rounded-xl border border-gray-20'>
        <p className='text-cream-50 bold-24'>Featured ad fee</p>
        <p className='text-cream-20 regular-16 mt-4'>
          Your brand affiliate program will be displayed throughout our site
          pages for 30 days (a month).
        </p>
        <div className='padding-container'>
          <p className='text-cream-50 font-[800px] text-[24px] mt-4'>
            $24/month
          </p>
          <p className='text-cream-20 regular-16 mt-4'>This plan include</p>
          <ul>
            {AD_FEE.map((fee) => (
              <li className='text-cream-20 flex items-center gap-3 mt-4 regular-16'>
                <ChevronRight className='text-cream-20 size-4' />
                {fee}
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-5 flexCenter w-full'>
          <MainDialog
            title='Buy feature ad space'
            description="By opting into our feature ad plan, you'll maximize your brand's affiliate program visibility, credibility, and reach."
            isOpen={isMainDialogOpen}
            onOpenChange={() => setIsMainDialogOpen(false)}
            onClick={() => setIsMainDialogOpen(true)}
            buttonName='Subscribe now'
          >
            <FeaturedAdForm onSubmit={handleFormSubmit} />
          </MainDialog>
          <NestedDialog
            isOpen={isSuccessDialogOpen}
            onClose={() => setIsSuccessDialogOpen(false)}
            title='Brand Affiliate program on Campaign now'
            description='Your brand will start benefitting from massive exposure and a quickly affiliate program spread though our targeted outreach to content creators.'
          >
            <Button
              className='w-full mt-3'
              onClick={() => {
                router.push('/')
              }}
            >
              Go back now
            </Button>
            <p className='text-center regular-16 text-cream-50 mt-3'>
              Feature ad activated now.
            </p>
          </NestedDialog>
        </div>
      </div>
    </section>
  )
}

export default page
