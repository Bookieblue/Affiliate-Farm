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
import ActionsCell from './CellAction'

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
    cell: ActionsCell,
  },
]
