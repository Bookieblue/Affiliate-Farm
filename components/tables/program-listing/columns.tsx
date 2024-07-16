'use client'

import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { DeleteIcon, Edit2Icon, EyeIcon, MoreHorizontal } from 'lucide-react'
import MainDialog from '../../../components/ui/FormField/MainDialog'
import { ProgramResponse } from '@/services/models/hooks/program/type'
import { convertDate } from '@/lib/helpers/formatDate'
import {
  capitalizeFirstLetter,
  formatCommission,
} from '@/lib/helpers/formatWord'
import CellAction from './CellAction'

export interface Ad {
  program: string
  commission: string
  category: string
  publishedDate: string
  publisher: string
  publisherEmail: string
}

interface ColumnsProps {
  onDeleteRow: (row: ProgramResponse) => void
  onEditCategory: (row: ProgramResponse, newCategory: string) => void
}

export const createColumns = ({
  onDeleteRow,
  onEditCategory,
}: ColumnsProps): ColumnDef<ProgramResponse>[] => [
  {
    id: 'select',
    header: ({ table }) => (
      <input
        type='checkbox'
        className='custom-checkbox'
        checked={table.getIsAllPageRowsSelected()}
        onChange={table.getToggleAllPageRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <input
        type='checkbox'
        className='custom-checkbox'
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  },
  {
    accessorKey: 'name',
    header: 'PROGRAM',
    cell: ({ getValue }) => (
      <div>
        <div>{capitalizeFirstLetter(getValue<string>())}</div>
      </div>
    ),
  },
  {
    accessorKey: 'commission',
    header: 'COMMISSION',
    cell: ({ row }) => {
      const { commissionRate, commissionType, currency } = row.original
      return (
        <div>{formatCommission(currency, commissionRate, commissionType)}</div>
      )
    },
  },
  {
    accessorKey: 'niche_details',
    header: 'CATEGORY',
    cell: ({ row }) => (
      <div>
        <div>
          {row.original.niche_details
            ? capitalizeFirstLetter(row.original.niche_details?.name)
            : ''}
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'created_at',
    header: 'PUBLISHED DATE',
    cell: ({ getValue }) => <div>{convertDate(getValue<string>())}</div>,
  },
  {
    accessorKey: 'publisher',
    header: 'PUBLISHER',
    cell: ({ getValue, row }) => (
      <div>
        <div>{getValue<string>()}</div>
        <div className='text-xs text-cream-20'>
          <p>{row.original.publisherName}</p>
          <p>{row.original.publisherEmail}</p>
        </div>
      </div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => (
      <CellAction
        onDeleteRow={onDeleteRow}
        onEditCategory={onEditCategory}
        row={row}
      />
    ),
  },
]
