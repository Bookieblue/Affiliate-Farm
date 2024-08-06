import { useState } from 'react'
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
import { convertDate } from '@/lib/helpers/formatDate'
import { capitalizeFirstLetter } from '@/lib/helpers/formatWord'
import { ProgramResponse } from '@/services/models/hooks/program/type'

interface RowInterface {
  row: {
    original: {
      program_details: ProgramResponse
      status: any
    }
  }
}

const ActionsCell: React.FC<RowInterface> = ({ row }) => {
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
          <div className='mx-10'>
            <Programs {...details.program_details} />
            <div className='flex gap-7 mt-2'>
              <div className='flex gap-3'>
                <Image src='/date.svg' width={20} height={20} alt='icon' />
                <p className='text-cream-20'>
                  Posted:{' '}
                  {convertDate(details.program_details.created_at || '')}
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
              <p className='mt-3'>{details.program_details.publisherName}</p>
              <p>{details.program_details.publisherEmail}</p>
            </div>
          </div>
        </MainDialog>
      )}
    </>
  )
}

export default ActionsCell
