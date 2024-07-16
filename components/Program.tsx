import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ToolTip } from './ui/FormField/ToolTip'
import { ProgramResponse } from '@/services/models/hooks/program/type'
import { formatCommission } from '@/lib/helpers/formatWord'
import { baseURL } from '@/services/api'

interface ProgramsProps {
  logo: string
  commissionRate: number
  name: string
  description: string
  payoutAmount: number
  cookieDuration: number
  shortDescription: string
  programUrl: string
  id: number
  currency: string
  promoted?: boolean
  linkName: string
  verified?: boolean
}

const Programs: React.FC<ProgramsProps> = ({
  logo,
  commissionRate,
  name,
  description,
  payoutAmount,
  cookieDuration,
  shortDescription,
  programUrl,
  currency,
  id,
  promoted = false,
  linkName,
  verified = false,
}) => {
  return (
    <div className='flex flex-col max-w-[400px] w-fit h-fit items-center gap-4 p-4 relative bg-black-60 rounded-xl border border-gray-20  '>
      <div className='flexBetween relative self-stretch w-full flex-[0_0_auto] '>
        <div className='relative w-[60px] h-[60px] rounded-[7.2px]'>
          <Image
            src={`${baseURL}${logo.slice(1)}`}
            width={60}
            height={60}
            alt='icon'
            className='rounded-[7.2px]'
          />
        </div>
        <div className='flexCenter gap-[7px] relative flex-[0_0_auto]'>
          <div className='flexCenter h-[30px]  gap-2.5 p-2 relative flex-[0_0_auto] bg-gray-20 rounded-lg'>
            <p className='relative w-fit  text-yellow-50 bold-14'>
              {commissionRate}
            </p>
          </div>
          <p className='relative w-[100px] mt-[-1.00px] regular-14 text-gray-10'>
            {commissionType}
          </p>
        </div>
      </div>
      <div className='flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto] mb-[-11.00px]'>
        <div className='inline-flex justify-start flex-col gap-1 relative self-stretch w-full flex-[0_0_auto]'>
          <div className='inline-flex items-center gap-2 relative flex-[0_0_auto]'>
            <p className='relative w-fit text-cream-50 bold-24'>{name}</p>
            <div className='inline-flex items-center relative flex-[0_0_auto]'>
              <div className='inline-flex items-center gap-2.5 relative flex-[0_0_auto]'>
                {promoted && (
                  <p className='relative w-fit regular-14 text-gray-10'>
                    Promoted
                  </p>
                )}
                {verified && (
                  <Image
                    className='relative w-6 h-6 object-cover'
                    alt='Verified Icon'
                    src='/verified.svg'
                    width={24}
                    height={24}
                  />
                )}
              </div>
            </div>
          </div>
          <p className='relative self-stretch regular-14 text-gray-10'>
            {shortDescription}
          </p>
        </div>
        <div className='flexBetween relative self-stretch w-full flex-[0_0_auto]'>
          <div className='inline-flex items-center gap-1 relative flex-[0_0_auto]'>
            <Image src='./payout.svg' width={20} height={5} alt='icon' />
            <p className='relative w-fit mt-[-1.00px]  regular-14 text-gray-10'>
              {`$ ${payoutAmount}`}
            </p>
          </div>
          <div className='inline-flex items-center gap-1 relative flex-[0_0_auto]'>
            <Image src='./time.svg' width={20} height={5} alt='icon' />
            <p className='relative w-fit regular-14 text-gray-10'>{`${cookieDuration} days cookie`}</p>
          </div>
        </div>
        <div className='flex flex-col items-start gap-0.5 relative self-stretch w-full flex-[0_0_auto]'>
          <div className='flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]'>
            <p className='grow shrink basis-0 text-gray-10 regular-16'>
              <span className='text-cream-20 medium-14'>Program:</span>{' '}
              {description}
            </p>
          </div>
        </div>
        <div className='flexBetween px-0 py-2.5 relative self-stretch w-full flex-[0_0_auto]'>
          <div className='inline-flex items-center gap-1 relative flex-[0_0_auto]'>
            <ToolTip content={id} key={id} />
          </div>
          <div>
            <Link
              href={programUrl}
              className='text-yellow-50 medium-16 underline flex gap-1'
            >
              {name}
              <Image src='/arrow-right.svg' width={5} height={5} alt='icon' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programs
