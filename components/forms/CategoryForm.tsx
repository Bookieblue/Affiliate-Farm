// components/CategoryForm.tsx
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import { Button } from '../ui/button'
import {
  useCreateCategory,
  useDeleteCategory,
  useUpdateCategory,
} from '@/services/models/hooks/category/hook'
import { CategoryResponse } from '@/services/models/hooks/category/type'

import { toast } from 'react-toastify'
import { AxiosError } from 'axios'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

interface CategoryFormProps {
  refetch: () => void
  category?: CategoryResponse // Category data for editing
  isEdit?: boolean
  onAddCategory?: any
}

const CategoryForm: React.FC<CategoryFormProps> = ({
  refetch,
  category,
  isEdit = false,
}) => {
  const [categoryName, setCategoryName] = useState<string>(category?.name || '')
  const [categoryFAQ, setCategoryFAQ] = useState<string>(category?.faq || '')

  const [formError, setFormError] = useState<string>()

  const handleCategoryNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value)
  }

  const handleFAQChange = (value: string) => {
    setCategoryFAQ(value)
  }

  const {
    mutate: createCategory,
    isPending: isCreating,
    isSuccess: isCreatingSuccess,
  } = useCreateCategory()

  const {
    mutate: deleteCategory,
    isPending: isDeleting,
    isSuccess: isDeleteSuccess,
  } = useDeleteCategory()

  const {
    mutate: updateCategory,
    isSuccess: updateSuccess,
    isPending: updatePending,
    isError: isUpdateError,
    error: updateError,
  } = useUpdateCategory()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (isEdit && category) {
      const data = { name: categoryName, faq: categoryFAQ }
      updateCategory({ categoryCode: category.code, data })
    } else {
      // Logic for creating a new category
      createCategory({ name: categoryName, faq: categoryFAQ })
    }
  }

  const handleDelete = () => {
    if (category) {
      deleteCategory([category.code])
    }
  }

  useEffect(() => {
    if (isCreatingSuccess || updateSuccess || isDeleteSuccess) {
      refetch()
      toast.success('Action completed successfully!')
    }

    if (isUpdateError) {
      const respError = updateError as AxiosError
      const errMsg = respError?.response?.data as string

      if (errMsg) toast.error(errMsg)
    }
  }, [
    isCreatingSuccess,
    isDeleteSuccess,
    refetch,
    updateSuccess,
    isUpdateError,
    updateError,
  ])

  return (
    <div className='mt-5'>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            className='block text-cream-50 text-base font-medium mb-2'
            htmlFor='categoryName'
          >
            Category name
          </label>
          <input
            id='categoryName'
            type='text'
            value={categoryName}
            onChange={handleCategoryNameChange}
            className='w-full px-3 py-2 text-gray-10 bg-transparent border border-gray-20 rounded-md focus:outline-none'
          />
          {formError && <p>{formError}</p>}
        </div>
        <div className='mb-4'>
          <label
            className='block text-base text-cream-50 font-medium mb-2'
            htmlFor='categoryFAQ'
          >
            Category FAQ
          </label>
          <ReactQuill
            value={categoryFAQ}
            onChange={handleFAQChange}
            className='bg-transparent text-gray-10 rounded-md '
          />
        </div>
        <Button className='w-full'>
          {isCreating || updatePending
            ? 'Loading...'
            : isEdit
            ? 'Update Category'
            : 'Add Category'}
        </Button>
        {isEdit && (
          <Button
            className='w-full mt-2'
            variant='transparent'
            onClick={handleDelete}
            disabled={isDeleting}
            type='button'
          >
            {isDeleting ? 'Deleting...' : 'Delete Category'}
          </Button>
        )}
      </form>
    </div>
  )
}

export default CategoryForm
