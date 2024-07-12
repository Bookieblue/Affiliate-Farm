// components/CategoryForm.tsx
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import { Button } from '../ui/button'
import { useCreateCategory } from '@/services/models/hooks/category/hook'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

interface CategoryFormProps {
  onAddCategory: (category: {
    no: string
    category: string
    programNo: string
    publishedDate: string
  }) => void
  refetch: any
}

const CategoryForm: React.FC<CategoryFormProps> = ({
  onAddCategory,
  refetch,
}) => {
  const [categoryName, setCategoryName] = useState<string>('')
  const [categoryFAQ, setCategoryFAQ] = useState<string>('')

  const handleCategoryNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value)
  }

  const handleFAQChange = (value: string) => {
    setCategoryFAQ(value)
  }

  const { mutate, isPending, isSuccess, data } = useCreateCategory(categoryName)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    mutate()
  }

  useEffect(() => {
    isSuccess && refetch()
  })

  isSuccess && console.log(data)

  return (
    <div className='mt-5'>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            className='block text-cream-50  text-base font-medium mb-2'
            htmlFor='categoryName'
          >
            Category name
          </label>
          <input
            id='categoryName'
            type='text'
            value={categoryName}
            onChange={handleCategoryNameChange}
            className='w-full px-3 py-2 text-gray-10 bg-transparent  border border-gray-20 rounded-md focus:outline-none'
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
          {isPending ? 'Loading...' : 'Add category'}
        </Button>
      </form>
    </div>
  )
}

export default CategoryForm
