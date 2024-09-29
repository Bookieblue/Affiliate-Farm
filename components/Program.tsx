import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ToolTip } from './ui/FormField/ToolTip';
import { ProgramResponse } from '@/services/models/hooks/program/type';
import { formatCommission } from '@/lib/helpers/formatWord';
import { baseURL } from '@/services/api';
import PayoutIcon from './assets-nav-icons/payout';
import ClockIcon from './assets-nav-icons/clock';
import formatUrl from '@/lib/helpers/formatURL';

const Programs: React.FC<ProgramResponse> = ({
  logo,
  logoString,
  commissionRate,
  commissionType,
  name,
  description,
  payoutAmount,
  cookieExpires,
  cookieDuration,
  shortDescription,
  programUrl,
  currency,
  id,
  code,
  promoted = false,
  verified = false,
}) => {
  let googleFavicon;
  if (!logo)
    googleFavicon = `https://www.google.com/s2/favicons?domain=${formatUrl(
      programUrl
    )}&sz=256`;
  else googleFavicon = `${baseURL}${logo?.slice(1)}`;

  return (
    <div className='flex flex-col min-w-[300px] justify-between  gap-4 p-4 relative bg-black-60 rounded-xl border border-gray-20  '>
      <div className=''>
        <div className='flexBetween relative self-stretch w-full flex-[0_0_auto] '>
          <div className='relative w-[60px] h-[60px] rounded-[8px]'>
            <Image
              src={(logoString as string) || googleFavicon}
              unoptimized
              width={60}
              height={60}
              alt='icon'
              className='rounded-[7.2px] w-[60px] h-[60px]'
            />
          </div>
          <div className='flexCenter gap-[7px] relative flex-[0_0_auto]'>
            <div className='flexCenter h-[30px]  gap-2.5 p-2 relative flex-[0_0_auto] bg-gray-20 rounded-lg'>
              <p className='relative w-fit  text-yellow-50 bold-14'>
                {formatCommission(currency, commissionRate)}
              </p>
            </div>
            <p className='relative w-[100px] mt-[-1.00px] regular-14 text-gray-10'>
              {commissionType}
            </p>
          </div>
        </div>
        <div className='flex flex-col items-start mt-5 gap-4 relative self-stretch w-full flex-[0_0_auto] mb-[-11.00px]'>
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
              <PayoutIcon />
              <p className='relative w-fit mt-1  regular-14 text-gray-10'>
                {`$ ${payoutAmount} Payout`}
              </p>
            </div>
            <div className='inline-flex items-center gap-1 relative flex-[0_0_auto]'>
              <ClockIcon />
              <p className='relative w-fit regular-14 text-gray-10'>
                {cookieExpires
                  ? `${cookieDuration} days Cookie`
                  : 'Forever cookies'}
              </p>
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
        </div>
      </div>
      <div className='flexBetween px-0 py-2.5 relative self-stretch w-full flex-[0_0_auto]'>
        <div className='inline-flex items-center gap-1 relative flex-[0_0_auto]'>
          <ToolTip content={code || 'no ID'} key={id} />
        </div>
        <div className='border-b border-yellow-50'>
          <Link
            href={programUrl}
            target='_blank'
            className='text-yellow-50 medium-16 flex gap-1'
          >
            View Program
            <Image src='/arrow-right.svg' width={5} height={5} alt='icon' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Programs;
