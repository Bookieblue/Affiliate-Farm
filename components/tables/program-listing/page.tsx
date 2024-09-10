'use client'
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { DataTable } from './data-table'
import { createColumns } from './columns'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  updateProgram,
  useDeleteProgram,
  useGetPrograms,
  useUpdatebulkProgramCatgory,
  useUpdateProgram,
} from '@/services/models/hooks/program/hook'
import { ProgramResponse } from '@/services/models/hooks/program/type'
import SelectInput from '@/components/ui/FormField/SelectInput'
import { toast } from 'react-toastify'
import NestedDialog from '@/components/ui/FormField/NestedDialog'
import { capitalizeFirstLetter } from '@/lib/helpers/formatWord'
import { useGetCategories } from '@/services/models/hooks/category/hook'

//the dropdown option to either delete or update the page
const mutateOption = [
  { value: 'edit', label: 'Edit Category' },
  { value: 'delete', label: 'Delete Programs' },
]

const AdsPage = () => {
  const [data, setData] = useState<ProgramResponse[]>()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedDeletes, setSelectedDeletes] = useState<string[]>([])
  const [updateCategory, setUpdateCategory] = useState<updateProgram>({
    programCode: '',
    data: '',
  })
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false) // Edit modal state
  const [editCategory, setEditCategory] = useState('') // Holds the new category value
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [categoryOptions, setCategoryOptions] =
    useState<{ value: string; label: string }[]>()

  const { data: programData, isLoading, isSuccess, refetch } = useGetPrograms()
  const { data: categoryData, isSuccess: categoryIsSuccess } =
    useGetCategories()

  useEffect(() => {
    const options = categoryData?.map((category) => {
      return { value: category.code, label: category.name }
    })

    setCategoryOptions(options)
  }, [categoryData, categoryIsSuccess])

  const { mutate, isSuccess: deleteSuccess } = useDeleteProgram(selectedDeletes)

  const { isSuccess: categorySuccess, mutate: doUpdateCategory } =
    useUpdateProgram()

  const { mutate: updateBulkCategory, isSuccess: updateBulkSuccess } =
    useUpdatebulkProgramCatgory()

  useEffect(() => {
    if (updateCategory.data && updateCategory.programCode)
      doUpdateCategory(updateCategory)
  }, [updateCategory, doUpdateCategory])

  useEffect(() => {
    if (isSuccess) {
      setData(programData)
    }
  }, [isSuccess, programData])

  useEffect(() => {
    if (deleteSuccess || categorySuccess || updateBulkSuccess) {
      refetch()
      toast.success('Action completed successfully')
      setSelectedRows([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteSuccess, categorySuccess, updateBulkSuccess, refetch])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const filteredData = useMemo(() => {
    const results = data || []
    if (!searchQuery) return results
    return results.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  }, [searchQuery, data])

  const handleDeleteRow = useMemo(() => {
    return (row: ProgramResponse) => {
      if (row.code) {
        setSelectedDeletes([row.code])
        mutate()
      }
    }
  }, [])

  const handleEditCategory = useMemo(() => {
    return (row: ProgramResponse, newCategory: string) => {
      if (row.code) {
        setUpdateCategory({
          data: { niche: newCategory },
          programCode: row.code,
        })
      }
    }
  }, [])

  const handleOptionChange = (value: string) => {
    setSelectedOption(value)
  }

  const handleSelectedRows = useMemo(() => {
    return async ({ code }: { code: string }): Promise<void> => {
      setSelectedRows((prevSelectedRows) => {
        if (prevSelectedRows.includes(code)) {
          return prevSelectedRows.filter((row) => row !== code)
        } else {
          return [...prevSelectedRows, code]
        }
      })
    }
  }, [selectedRows])

  const handleSelectAllRows = useMemo(() => {
    return (isSelected: boolean, rows: ProgramResponse[]) => {
      if (isSelected) {
        const visibleRowCodes = rows
          .map((row) => row.code)
          .filter(Boolean) as string[]
        setSelectedRows((prevSelected) => {
          const newSelected = new Set([...prevSelected, ...visibleRowCodes])
          return Array.from(newSelected)
        })
      } else {
        const visibleRowCodes: any = new Set(
          rows.map((row) => row.code).filter(Boolean) as string[]
        )
        setSelectedRows((prevSelected) =>
          prevSelected.filter((code) => !visibleRowCodes.has(code))
        )
      }
    }
  }, [])

  const handleApplyClick = () => {
    if (selectedOption === 'edit') {
      if (selectedRows.length >= 1) {
        setIsEditDialogOpen(true) // Open modal for edit
      }
    } else if (selectedOption === 'delete') {
      if (selectedRows.length >= 1) {
        setSelectedDeletes(selectedRows)
        setIsDeleteDialogOpen(true) // Open confirmation modal
      }
    }
  }

  const handleConfirmDelete = () => {
    setIsDeleteDialogOpen(false)
    mutate() // Execute delete after confirmation
  }

  const handleConfirmEdit = () => {
    setIsEditDialogOpen(false)
    if (selectedRows && editCategory) {
      //   handleEditCategory(selectedRow, editCategory) // Perform the edit
      updateBulkCategory({
        categoryCode: editCategory,
        programCodes: selectedRows,
      })
    }
  }

  const columns = useMemo(
    () =>
      createColumns({
        onDeleteRow: handleDeleteRow,
        onEditCategory: handleEditCategory,
        refetch: refetch,
        handleSelectedRows,
        selectedRows,
        handleSelectAllRows,
      }),
    [
      handleDeleteRow,
      handleEditCategory,
      refetch,
      handleSelectedRows,
      selectedRows,
      handleSelectAllRows,
    ]
  )

  if (isLoading) return <p>Loading...</p>

  return (
    <div className='container mx-auto p-4'>
      <div className='flex-col sm:flex-row flex sm:flexBetween sm:items-center mb-10'>
        <p className='text-cream-50 bold-20'>Program listing</p>
        <div className='relative mt-5 lg:mt-0'>
          <input
            type='text'
            placeholder='Search Program'
            value={searchQuery}
            onChange={handleInputChange}
            className='lg:px-4 py-2 pl-10 lg:pl-10 border placeholder:regular-16 border-gray-20 text-gray-10 bg-transparent placeholder:text-gray-10 rounded-3xl'
          />
          <Image
            src='/search.svg'
            alt='search'
            width={17}
            height={17}
            className='absolute left-4 top-0 lg:top-[0.8px] lg:left-3 mt-3'
          />
        </div>
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        searchQuery={searchQuery}
      />
      <div className='relative rounded-md mt-5 lg:mt-0 mb-10 flex items-center justify-start gap-3'>
        <div className='w-full lg:w-[200px]'>
          <SelectInput
            name='categoryAction'
            placeholder='Select action'
            options={mutateOption}
            value={selectedOption}
            onChange={handleOptionChange}
          />
        </div>

        <Button onClick={handleApplyClick}>Apply</Button>
      </div>

      {/* Delete confirmation dialog */}
      <NestedDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        title='Delete Programs'
        description='Are you sure you want to delete the selected items? This action cannot be undone.'
      >
        <div className='flex gap-10'>
          <Button
            variant='destructive'
            className='w-full mt-3'
            onClick={handleConfirmDelete}
          >
            Yes, delete program
          </Button>
        </div>
      </NestedDialog>

      {/* Edit category dialog */}
      <NestedDialog
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        title='Edit Category'
        description='Please enter a new category for the selected program.'
      >
        <div className='flex flex-col gap-5'>
          <SelectInput
            name='category'
            placeholder=''
            options={categoryOptions || [{ value: '', label: '' }]}
            value={editCategory}
            onChange={setEditCategory}
          />
          <Button className='w-full mt-3' onClick={handleConfirmEdit}>
            Update Category
          </Button>
        </div>
      </NestedDialog>
    </div>
  )
}

export default AdsPage
