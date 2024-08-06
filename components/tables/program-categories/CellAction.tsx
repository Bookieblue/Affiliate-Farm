import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { EyeIcon, MoreHorizontal } from 'lucide-react'
import MainDialog from '../../../components/ui/FormField/MainDialog'
import CategoryForm from '@/components/forms/CategoryForm'
import React, { useState } from 'react'

const ActionsCell: React.FC<any> = ({ row }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const details = row.original

  const handleViewDetails = () => {
    setModalOpen(true)
  }

  const handleDeleteCategory = () => {
    // Implement your delete logic here
    console.log('Delete category logic here')
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
          <div>
              <CategoryForm
              refetch={() => { /* Implement refetch logic here */ }}
              category={details} // Pass the current category details
              isEdit={true} // Set to true for editing mode
              onDelete={handleDeleteCategory} // Pass delete callback
            />
          </div>
        </MainDialog>
      )}
    </>
  )
}

export default ActionsCell
