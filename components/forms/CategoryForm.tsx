// components/CategoryForm.tsx
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import { Button } from '../ui/button'
import { useCreateCategory, useDeleteCategory } from '@/services/models/hooks/category/hook'
import { CategoryResponse } from '@/services/models/hooks/category/type'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

interface CategoryFormProps {
  refetch: () => void
  category?: CategoryResponse // Category data for editing
  isEdit?: boolean 
  onDelete?: () => void // Callback function for deleting
}

const CategoryForm: React.FC<CategoryFormProps> = ({
  refetch,
  category,
  isEdit = false,
  onDelete
}) => {
  const [categoryName, setCategoryName] = useState<string>(category?.name || '')
  const [categoryFAQ, setCategoryFAQ] = useState<string>(category?.faq || '')

  const handleCategoryNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value)
  }

  const handleFAQChange = (value: string) => {
    setCategoryFAQ(value)
  }

  const { mutate: createCategory, isPending: isCreating, isSuccess: isCreatingSuccess, data: createdData } = useCreateCategory()
  const { mutate: deleteCategory, isPending: isDeleting } = useDeleteCategory()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (isEdit && category) {
      // Logic for updating the category
      // Call an API or function to update category
      createCategory({ name: categoryName, faq: categoryFAQ }) // Adjust to the actual update logic
    } else {
      // Logic for creating a new category
      createCategory({ name: categoryName, faq: categoryFAQ })
    }
  }

  const handleDelete = () => {
    if (category && onDelete) {
      // deleteCategory(category.id) 
      onDelete()
    }
  }

  useEffect(() => {
    if (isCreatingSuccess) {
      refetch()
    }
  }, [isCreatingSuccess, refetch])

  useEffect(() => {
    if (isCreatingSuccess) console.log(createdData)
  }, [isCreatingSuccess, createdData])

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
          {isCreating ? 'Loading...' : isEdit ? 'Update Category' : 'Add Category'}
        </Button>
        {isEdit && (
          <Button
            className='w-full mt-2'
            variant='transparent'
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting...' : 'Delete Category'}
          </Button>
        )}
      </form>
    </div>
  )
}

export default CategoryForm
