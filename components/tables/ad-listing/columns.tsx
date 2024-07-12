'use client'

import { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { EyeIcon, MoreHorizontal } from 'lucide-react'
import MainDialog from '../../../components/ui/FormField/MainDialog'
import Programs from '@/components/Program'
import Image from 'next/image'
import { AdsResponse } from '@/services/models/hooks/ads/type'
import { convertDate } from '@/lib/helpers/formatDate'
import {
  capitalizeFirstLetter,
  formatCommission,
} from '@/lib/helpers/formatWord'

export interface Ad {
  orderId: string
  program: string
  duration: string
  paymentDate: string
  expiringDate: string
  customer: string
  customerEmail: string
  status: 'Active' | 'Expired'
}

export const columns: ColumnDef<AdsResponse>[] = [
  {
    accessorKey: 'code',
    header: 'ORDER ID',
  },
  {
    accessorKey: 'program',
    header: 'PROGRAM',
    cell: ({ row }) => (
      <span className={cn('text-cream-50 font-bold')}>
        {capitalizeFirstLetter(row.original.program_details.name)}
      </span>
    ),
  },
  {
    accessorKey: 'adPlan',
    header: 'DURATION',
  },
  {
    accessorKey: 'created_at',
    header: 'PAYMENT DATE',
    cell: ({ getValue }) => <span>{convertDate(getValue<string>())}</span>,
  },
  {
    accessorKey: 'expires_at',
    header: 'EXPIRING DATE',
    cell: ({ getValue }) => <span>{convertDate(getValue<string>())}</span>,
  },
  {
    accessorKey: 'customer',
    header: 'CUSTOMER',
    cell: ({ row }) => (
      <>
        <div>{capitalizeFirstLetter(row.original.fullname)}</div>
        <div className='text-xs'>{row.original.email}</div>
      </>
    ),
  },
  {
    accessorKey: 'status',
    header: 'STATUS',
    cell: ({ getValue }) => (
      <span
        className={cn(
          'px-2 py-1 rounded-md text-xs font-semibold',
          getValue<string>() === 'Active'
            ? 'bg-green-200 text-green-800'
            : 'bg-red-200 text-red-800'
        )}
      >
        {getValue<string>()}
      </span>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const [isModalOpen, setModalOpen] = useState(false)
      const details = row.original

      const handleViewDetails = () => {
        setModalOpen(true)
      }

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='h-8 w-8 p-0'>
                <span className='sr-only'>Open menu</span>
                <MoreHorizontal className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleViewDetails}>
                <EyeIcon className='size-4 mr-2' /> View details
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {isModalOpen && (
            <MainDialog
              isOpen={isModalOpen}
              onOpenChange={() => setModalOpen(false)}
              title='Affliate Program'
              description=''
            >
              <div>
                <Programs
                  src={'/jasper.svg'}
                  commission={formatCommission(
                    details.program_details.currency,
                    details.program_details.commissionRate,
                    ''
                  )}
                  name={capitalizeFirstLetter(details.program_details.name)}
                  cookie={`${details.program_details.cookieDuration} days cookie`}
                  payout={`${details.program_details.payoutAmount} Payout`}
                  programDescription={details.program_details.description}
                  programID={details.program_details.code}
                  url={details.program_details.programUrl}
                  linkName={capitalizeFirstLetter(details.program_details.name)}
                  verified={details.program_details.verified}
                />
                <div className='flex gap-7 mt-2'>
                  <div className='flex gap-3'>
                    <Image src='/date.svg' width={20} height={20} alt='icon' />
                    <p className='text-cream-20'>
                      Posted: {convertDate(details.program_details.created_at)}
                    </p>
                  </div>
                  <div className='flex gap-3'>
                    <Image
                      src='/broadcast2.svg'
                      width={20}
                      height={20}
                      alt='icon'
                    />
                    <p className='text-cream-20'>{details.status} AD</p>
                  </div>
                </div>
                <div className='mt-4 text-cream-20'>
                  <p>Publisher:</p>
                  <p className='mt-3'>
                    {details.program_details.publisherName}
                  </p>
                  <p>{details.program_details.publisherEmail}</p>
                </div>
              </div>
            </MainDialog>
          )}
        </>
      )
    },
  },
]
