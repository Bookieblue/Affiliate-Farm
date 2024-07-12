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
import CategoryForm from '@/components/forms/CategoryForm'
import { CategoryResponse } from '@/services/models/hooks/category/type'
import { convertDate } from '@/lib/helpers/formatDate'
import { capitalizeFirstLetter } from '@/lib/helpers/formatWord'

export interface Category {
  no: string
  category: string
  programNo: string
  publishedDate: string
}

export const columns: ColumnDef<CategoryResponse>[] = [
  //TODO come back to change this later
  {
    accessorKey: 'code',
    header: 'CODE',
  },
  {
    accessorKey: 'name',
    header: 'CATEGORY',
    cell: ({ getValue }) => (
      <span className={cn('text-cream-50 font-bold')}>
        {capitalizeFirstLetter(getValue<string>())}
      </span>
    ),
  },
  {
    accessorKey: 'program_no',
    header: 'PROGRAM NO',
  },
  {
    accessorKey: 'created_at',
    header: 'PUBLISHED DATE',
    cell: ({ getValue }) => <span>{convertDate(getValue<string>())}</span>,
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
                <EyeIcon className='size-4 mr-2' /> View Category
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
              <div></div>
            </MainDialog>
          )}
        </>
      )
    },
  },
]
