'use client'
import { useState, useEffect } from 'react'
import { Category, columns } from './columns'
import { DataTable } from './data-table'
import { Button } from '@/components/ui/button'
import MainDialog from '@/components/ui/FormField/MainDialog'
import CategoryForm from '@/components/forms/CategoryForm'
import { useToast } from '@/components/ui/use-toast'
import { useGetCategories } from '@/services/models/hooks/category/hook'

// Mock function to fetch data (replace with real API call)
async function fetchCategories(): Promise<Category[]> {
  return [
    {
      no: '1',
      category: 'Travel affiliate program',
      programNo: '124 programs',
      publishedDate: 'Aug 4, 2024',
    },
    {
      no: '1',
      category: 'Travel affiliate program',
      programNo: '124 programs',
      publishedDate: 'Aug 4, 2024',
    },
    {
      no: '1',
      category: 'Travel affiliate program',
      programNo: '124 programs',
      publishedDate: 'Aug 4, 2024',
    },
    {
      no: '1',
      category: 'Travel affiliate program',
      programNo: '124 programs',
      publishedDate: 'Aug 4, 2024',
    },
    {
      no: '1',
      category: 'Travel affiliate program',
      programNo: '124 programs',
      publishedDate: 'Aug 4, 2024',
    },
    {
      no: '1',
      category: 'Travel affiliate program',
      programNo: '124 programs',
      publishedDate: 'Aug 4, 2024',
    },
    {
      no: '1',
      category: 'Travel affiliate program',
      programNo: '124 programs',
      publishedDate: 'Aug 4, 2024',
    },
  ]
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isFormOpen, setFormOpen] = useState(false)
  const { toast } = useToast()

  const { data, isSuccess, refetch } = useGetCategories()

  useEffect(() => {
    // Fetch data on component mount
    const getData = async () => {
      const data = await fetchCategories()
      setCategories(data)
    }

    getData()
  }, [])

  const addCategory = (category: Category) => {
    setCategories([...categories, category])
    setFormOpen(false)
    toast({
      title: 'Program added',
      description: 'The new category has been added successfully.',
    })
  }
  return (
    <div className='mt-10 mb-20'>
      <div className='flexBetween mb-10 '>
        <p className=' text-cream-50 bold-20'>Program category</p>
        <Button variant='transparent' onClick={() => setFormOpen(true)}>
          Add New Category
        </Button>
      </div>

      {isFormOpen && (
        <MainDialog
          isOpen={isFormOpen}
          onOpenChange={() => setFormOpen(false)}
          title='Add New Category'
          description='Add new affiliate program category to site'
        >
          <div>
            <CategoryForm onAddCategory={addCategory} refetch={refetch} />
          </div>
        </MainDialog>
      )}

      {isSuccess && <DataTable columns={columns} data={data} />}
    </div>
  )
}

export default Categories
