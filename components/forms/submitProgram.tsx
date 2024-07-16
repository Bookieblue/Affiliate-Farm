'use client'
import React, { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../ui/button'
import TextInput from '../ui/FormField/TextInput'
import Dropdown from '../ui/FormField/Dropdown'
import TextareaInput from '../ui/FormField/TextareaInput'
import { RadioGroupForm } from '../ui/FormField/RadioButton'
import Image from 'next/image'
import {
  AFFLIATE_TYPE,
  COMMISSION_TYPE,
  PAYMENT_METHOD,
  ALL_LEVELS,
  AFFILIATE_CATEGORY,
} from '@/constant'
import { useRouter } from 'next/navigation'
import { useGetCategories } from '@/services/models/hooks/category/hook'
import { capitalizeFirstLetter } from '@/lib/helpers/formatWord'

const SubmitProgramSchema = z.object({
  publisherEmail: z
    .string()
    .min(1, 'Email is required')
    .email('Incorrect email address'),
  name: z.string().min(1, 'Brand name is required'),
  payoutAmount: z.string().min(1, 'Payout fee is required'),
  cookieDuration: z.string().min(1, 'Cookie duration is required'),
  publisherName: z.string().min(1, 'Publisher name is required'),
  affiliateType: z.string().min(1, 'Affiliate type is required'),
  niche: z.string().min(1, 'Brand niche is required'),
  commissionType: z.string().min(1, 'Commission Type is required'),
  paymentMethod: z.string().min(1, 'Payment Method is required'),
  cookieExpires: z.string().min(1, 'Cookie expiration is required'),
  programUrl: z.string().url('Invalid URL'),
  shortDescription: z.string().min(1, 'Product description is required'),
  description: z.string().min(1, 'Program description is required'),
  affiliateLevel: z.string().min(1, 'Affiliates Levels are required'),
  commissionRate: z.string().min(1, 'Commission rate is required'),
  logo: z.string().min(1, 'Logo is required'),
})

const SubmitProgramForm = () => {
  const router = useRouter()
  const methods = useForm({
    resolver: zodResolver(SubmitProgramSchema),
    defaultValues: {
      name: '',
      payoutAmount: '',
      publisherEmail: '',
      cookieDuration: '',
      publisherName: '',
      affiliateType: '',
      commissionType: '',
      paymentMethod: '',
      cookieExpires: '',
      programUrl: '',
      shortDescription: '',
      description: '',
      affiliateLevel: '',
      commissionRate: '',
      logo: '',
      niche: '',
    },
  })

  const { data, isSuccess } = useGetCategories()
  useEffect(() => {
    const storedFormData = localStorage.getItem('formData')
    if (storedFormData) {
      methods.reset(JSON.parse(storedFormData))
    }
  }, [methods])

  const Affiliates = AFFLIATE_TYPE.map((affiliate) => {
    return {
      label: affiliate.name,
      value: affiliate.name,
    }
  })

  const Category = isSuccess
    ? data.map((category) => ({
        label: `${capitalizeFirstLetter(category.name)} affiliate program`,
        value: category.code,
      }))
    : [{ label: 'Others', value: 'others' }]

  const Commissions = COMMISSION_TYPE.map((commission) => ({
    label: commission.name,
    value: commission.name,
  }))

  const Levels = ALL_LEVELS.map((level) => ({
    label: level.name,
    value: level.name,
  }))

  const Payments = PAYMENT_METHOD.map((payment) => ({
    label: payment.name,
    value: payment.name,
  }))

  const [rate, setRate] = useState<number | string>('')
  const [currency, setCurrency] = useState<string>('%') // Default to %
  const [logo, setLogo] = useState<string | ArrayBuffer | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogo(reader.result)
        methods.setValue('logo', reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (values: z.infer<typeof SubmitProgramSchema>) => {
    if (!logo) {
      methods.setError('logo', { type: 'manual', message: 'Logo is required' })
      return
    }

    const combinedRate =
      currency === '%' ? `${rate}${currency}` : `${currency}${rate}`
    const formData = { ...values, commission_rate: combinedRate }

    // Store formData in local storage
    localStorage.setItem('formData', JSON.stringify(formData))

    // Redirect to preview-submission page
    router.push('/preview-submission')
  }

  return (
    <div className='bg-gray-40 p-6 h-fit rounded-lg'>
      <p className='bold-24 text-cream-50 mb-3'>
        Submit brand affiliate program
      </p>
      <p className='regular-16 text-cream-20'>
        Get your brand exposed to massive traffic from Affiliate Farm.
      </p>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleSubmit)}
          className='mt-10 space-y-6'
        >
          <div className='flex flex-col '>
            <label className='text-white mb-2'>Brand Logo</label>
            <div className='flex items-center'>
              <div className='w-24 h-24 border border-gray-20 rounded-lg overflow-hidden flex items-center justify-center bg-none'>
                {logo ? (
                  <Image
                    src={logo as string}
                    width={20}
                    height={30}
                    alt='Logo Preview'
                    className='w-full h-full object-cover'
                  />
                ) : (
                  <Image
                    src='/logo-preview.svg'
                    width={20}
                    height={30}
                    alt=''
                    className='w-full h-full object-cover'
                  />
                )}
              </div>
              <label className='ml-4 bg-transparent border mt-10 border-gray-20 text-cream-50 px-4 py-2 rounded-lg cursor-pointer'>
                Upload Favicon
                <input
                  type='file'
                  className='hidden'
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            {methods.formState.errors.logo && (
              <p className='text-red-500 mt-2 text-sm'>
                {methods.formState.errors.logo.message}
              </p>
            )}
          </div>
          <div className='flex gap-10 flex-col lg:flex-row'>
            <TextInput
              control={methods.control}
              name='name'
              label='Brand Name'
              placeholder='eg. Jasper AI'
            />
            <Dropdown
              control={methods.control}
              name='niche'
              label='Brand Niche'
              options={Category}
              placeholder='Select...'
            />
          </div>
          <div className='flex gap-10 flex-col lg:flex-row'>
            <div className='w-full'>
              <label className='text-cream-50 regular-16'>
                Commission Rate
              </label>
              <div className='flex items-center overflow-hidden mt-2'>
                <select
                  className='px-3 py-2 bg-gray-20 text-cream-50 outline-none'
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value='%'>%</option>
                  <option value='$'>$</option>
                  <option value='€'>€</option>
                  <option value='£'>£</option>
                </select>
                <input
                  type='number'
                  className='w-full px-3 py-2 bg-transparent border border-gray-20 rounded-md text-cream-50 placeholder-gray-10 outline-none'
                  placeholder='eg. 25'
                  value={rate}
                  onChange={(e) => {
                    const value = Number(e.target.value)
                    if (!isNaN(value) && value > 0) {
                      setRate(value)
                      const combinedRate =
                        currency === '%'
                          ? `${value}${currency}`
                          : `${currency}${value}`
                      methods.setValue('commissionRate', combinedRate) // Update the form value with combined rate and currency
                    } else {
                      setRate('')
                      methods.setValue('commissionRate', '') // Clear the form value
                    }
                  }}
                />
              </div>
              {methods.formState.errors.commissionRate && (
                <p className='text-red-500 mt-2 text-sm'>
                  {methods.formState.errors.commissionRate.message}
                </p>
              )}
            </div>
            <Dropdown
              control={methods.control}
              name='commissionType'
              label='Commission Type'
              options={Commissions}
              placeholder='Select...'
            />
          </div>
          <div className='flex gap-10 flex-col lg:flex-row'>
            <TextInput
              control={methods.control}
              name='payoutAmount'
              label='Payout Fee'
              placeholder='eg $50'
            />
            <Dropdown
              control={methods.control}
              name='paymentMethod'
              label='Payment Method'
              options={Payments}
              placeholder='Select...'
            />
          </div>
          <div>
            <RadioGroupForm
              control={methods.control}
              label='Cookie expired?'
              name='cookieExpires'
            />
          </div>
          <div className='lg:w-[40%] flex-col lg:flex-row'>
            <TextInput
              control={methods.control}
              name='cookieDuration'
              label='Cookie Duration (days)'
              placeholder='eg. 60'
            />
          </div>
          <div className='flex gap-10 flex-col lg:flex-row'>
            <TextInput
              control={methods.control}
              name='programUrl'
              label='Affiliate Program URL'
              placeholder='eg. https://jasper-ai/affiliate-program'
            />
            <TextInput
              control={methods.control}
              name='shortDescription'
              label='Short Product Description'
              placeholder='eg. Content writing tool'
            />
          </div>
          <div>
            <TextareaInput
              control={methods.control}
              name='description'
              label='Program Description'
              placeholder='eg. With Jasper, users can start creating massive blogs, ebooks, music, etc., contents with AI.'
              className='h-40 text-cream-20'
            />
          </div>
          <div className='flex gap-10 flex-col lg:flex-row'>
            <Dropdown
              control={methods.control}
              name='affiliateType'
              label='Affiliate Type'
              options={Affiliates}
              placeholder='Select...'
            />
            <Dropdown
              control={methods.control}
              name='affiliateLevel'
              label='Affiliates Levels'
              options={Levels}
              placeholder='Select...'
            />
          </div>
          <div className='flex gap-10 flex-col lg:flex-row'>
            <TextInput
              control={methods.control}
              name='publisherName'
              label='Publisher Name'
              placeholder='eg. John Don'
            />
            <TextInput
              control={methods.control}
              name='publisherEmail'
              label='Publisher Email'
              placeholder='eg. yourname@gmail.com'
            />
          </div>
          <Button type='submit' className='w-full'>
            Proceed
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}

export default SubmitProgramForm
