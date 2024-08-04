'use client'
import React, { useState } from 'react'
import { Form } from '../ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '../ui/button'
import TextInput from '@/components/ui/FormField/TextInput'
import Link from 'next/link'
import TextareaInput from '../ui/FormField/TextareaInput'
import { FEATURED_AD_PLAN } from '@/constant'
import NestedDialog from '../ui/FormField/NestedDialog'
import { useRouter } from 'next/navigation'
import Loader from '@/components/Loader'
import Dropdown from '../ui/FormField/Dropdown'

const Plans = FEATURED_AD_PLAN.map((plan) => ({
  label: plan.name,
  value: plan.value,
}))

// Startup Onboarding Schema
export const OnboardSchema = z.object({
  name: z.string().min(1, 'Your name is required'),
  adPlan: z.string().min(1, 'Select a plan'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Incorrect email address'),
  program_ID: z.string().min(1, 'Program ID is required'),
  support: z.string().min(0),
})

const FeaturedAdForm = ({ onSubmit }: any) => {
  const form = useForm<z.infer<typeof OnboardSchema>>({
    resolver: zodResolver(OnboardSchema),
    defaultValues: {
      name: '',
      adPlan: '',
      email: '',
      program_ID: '',
      support: '',
    },
  })

  const router = useRouter()
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false)

  const handleSubmit = (values: z.infer<typeof OnboardSchema>) => {
    onSubmit(values)
    // setIsSuccessDialogOpen(true)
  }

  return (
    <section>
      {/* <Loader /> */}
      <div className='p-3 bg-gray-20 rounded-xl'>
        <p className='regular-16 text-cream-20'>
          <span className='medium-16 text-cream-50'>Note:</span> You need to
          first get your brand affiliate program ID by clicking on the question
          mark icon on your brand box. Brand program not listed yet?{' '}
          <Link href='/' className='underline text-yellow-50'>
            Get started here.
          </Link>
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='my-5'>
          <div className='flex gap-5 flex-col lg:flex-row'>
            <TextInput
              control={form.control}
              name='program_ID'
              placeholder='eg. 0153'
              label='Affiliate program ID'
            />
            <Controller
              control={form.control}
              name='adPlan'
              render={({ field }) => (
                <Dropdown
                  {...field}
                  label='Feature ad plan'
                  options={Plans}
                  placeholder='Select...'
                />
              )}
            />
          </div>
          <div className='flex gap-5 flex-col lg:flex-row mt-5'>
            <TextInput
              control={form.control}
              name='name'
              placeholder='e.g John Don'
              label='Your Fullname'
            />
            <TextInput
              control={form.control}
              name='email'
              placeholder='eg. yourname@gmail.com'
              label='Email'
            />
          </div>
          <div className='flex gap-5 flex-col lg:flex-row mt-5'>
            <TextareaInput
              control={form.control}
              name='support'
              label='Notes for support'
              placeholder=' '
              className='h-36'
            />
          </div>
          <div className='mt-7 w-full'>
            <Button type='submit' title='Save & proceed' className='w-full'>
              Subscribe for 1 Month
            </Button>
            <NestedDialog
              isOpen={isSuccessDialogOpen}
              onClose={() => setIsSuccessDialogOpen(false)}
              title='Brand Affiliate program on Campaign now'
              description='Your brand will start benefitting from massive exposure and a quickly affiliate program spread though our targeted outreach to content creators.'
            >
              <Button className='w-full mt-3' onClick={() => router.push('/')}>
                Go back now
              </Button>
              <p className='text-center text-cream-50 regular-16'>
                Feature ad activated now.
              </p>
            </NestedDialog>
          </div>
          <p className='mt-10 text-cream-50 text-center'>
            All plans are activated immediate after payment is made.
          </p>
        </form>
      </Form>
    </section>
  )
}

export default FeaturedAdForm
