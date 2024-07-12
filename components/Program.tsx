import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ToolTip } from './ui/FormField/ToolTip'

interface ProgramsProps {
  src: string
  commission: string
  name: string
  productDescription: string
  payout: string
  cookie: string
  programDescription: string
  url: string
  programID: string
  promoted?: boolean
  adsOn?: boolean
  verifiedIconSrc: string
  programIDIcon?: boolean
  linkName: string
  verified: boolean
}

const Programs: React.FC<ProgramsProps> = ({
  src,
  commission,
  name,
  productDescription,
  payout,
  cookie,
  programDescription,
  url,
  programID,
  promoted = false,
  adsOn = false,
  verifiedIconSrc,
  programIDIcon = true,
  linkName,
  verified = false,
}) => {
  return (
    <div className="flex flex-col max-w-[400px] w-fit h-fit items-center gap-4 p-4 relative bg-black-60 rounded-xl border border-gray-20  ">
      <div className="flexBetween relative self-stretch w-full flex-[0_0_auto] ">
        <div className="relative w-[60px] h-[60px] rounded-[7.2px]">
          <Image
            src={src}
            width={60}
            height={60}
            alt='icon'
            className='rounded-[7.2px]'
          />
        </div>
        <div className='flexCenter gap-[7px] relative flex-[0_0_auto]'>
          <div className='flexCenter h-[30px]  gap-2.5 p-2 relative flex-[0_0_auto] bg-gray-20 rounded-lg'>
            <p className='relative w-fit  text-yellow-50 bold-14'>
              {commission}
            </p>
          </div>
          <p className='relative w-[100px] mt-[-1.00px] regular-14 text-gray-10'>
            One-time sale commission
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
                    src={verifiedIconSrc}
                    width={24}
                    height={24}
                  />
                )}
              </div>
            </div>
          </div>
          <p className='relative self-stretch regular-14 text-gray-10'>
            {productDescription}
          </p>
        </div>
        <div className='flexBetween relative self-stretch w-full flex-[0_0_auto]'>
          <div className='inline-flex items-center gap-1 relative flex-[0_0_auto]'>
            <Image src='./payout.svg' width={20} height={5} alt='icon' />
            <p className='relative w-fit mt-[-1.00px]  regular-14 text-gray-10'>
              {payout}
            </p>
          </div>
          <div className='inline-flex items-center gap-1 relative flex-[0_0_auto]'>
            <Image src='./time.svg' width={20} height={5} alt='icon' />
            <p className='relative w-fit regular-14 text-gray-10'>{cookie}</p>
          </div>
        </div>
        <div className='flex flex-col items-start gap-0.5 relative self-stretch w-full flex-[0_0_auto]'>
          <div className='flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]'>
            <p className='grow shrink basis-0 text-gray-10 regular-16'>
              <span className='text-cream-20 medium-14'>Program:</span>{' '}
              {programDescription}
            </p>
          </div>
        </div>
        <div className='flexBetween px-0 py-2.5 relative self-stretch w-full flex-[0_0_auto]'>
          <div className='inline-flex items-center gap-1 relative flex-[0_0_auto]'>
            {programIDIcon && <ToolTip content={programID} key={programID} />}
            {adsOn && (
              <p className='relative w-fit regular-14 text-gray-10'>Ads On</p>
            )}
          </div>
          <div>
            <Link
              href={url}
              className='text-yellow-50 medium-16 underline flex gap-1'
            >
              {linkName}
              <Image src='/arrow-right.svg' width={5} height={5} alt='icon' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programs
