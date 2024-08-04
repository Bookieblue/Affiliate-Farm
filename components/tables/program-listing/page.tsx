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
  useUpdateProgram,
} from '@/services/models/hooks/program/hook'
import { ProgramResponse } from '@/services/models/hooks/program/type'

const AdsPage = () => {
  const [data, setData] = useState<ProgramResponse[]>()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedDeletes, setSelectedDeletes] = useState<string[]>([])
  const [updateCategory, setUpdateCategory] = useState<updateProgram>({
    programCode: '',
    niche: '',
  })

  const { data: programData, isLoading, isSuccess, refetch } = useGetPrograms()

  const { mutate, isSuccess: deleteSuccess } = useDeleteProgram(selectedDeletes)

  const {
    isPending,
    isSuccess: categorySuccess,
    mutate: doUpdateCategory,
  } = useUpdateProgram(updateCategory)

  useEffect(() => {
    isSuccess && setData(programData)
  }, [isSuccess, programData])

  useEffect(() => {
    if (deleteSuccess || categorySuccess) refetch()
  }, [deleteSuccess, categorySuccess, refetch])

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

  const handleDeleteRow = (row: ProgramResponse) => {
    if (row.code) {
      setSelectedDeletes([row.code])
      mutate()
    }
  }

  const handleEditCategory = (row: ProgramResponse, newCategory: string) => {
    if (row.code) {
      setUpdateCategory({ niche: newCategory, programCode: row.code })
      doUpdateCategory()
    }
  }

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value)
  }

  const handleApplyClick = () => {
    // Handle apply button click logic based on selectedOption
    if (selectedOption === 'edit') {
      // setIsEditModalOpen(true); // Open modal for edit
    } else if (selectedOption === 'delete') {
      // Implement delete logic
      console.log('Delete category')
    }
  }

  const columns = useMemo(
    () =>
      createColumns({
        onDeleteRow: handleDeleteRow,
        onEditCategory: handleEditCategory,
      }),
    []
  )

  if (isLoading) return <p>Loading...</p>

  return (
    <div className='container mx-auto p-4'>
      <div className='flexBetween items-center mb-10'>
        <p className='text-cream-50 bold-20'>Program listing</p>
        <div className='relative'>
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
      <div className='relative rounded-md flex items-center justify-start gap-3'>
        <select
          id='categoryAction'
          name='categoryAction'
          value={selectedOption}
          onChange={handleOptionChange}
          className='py-2 px-4 text-sm w-fit bg-transparent text-gray-10 border border-[#32312C] rounded-md'
        >
          <option value='edit'>Edit Category</option>
          <option value='delete'>Delete Category</option>
        </select>
        <Button className='' onClick={handleApplyClick}>
          Apply
        </Button>
      </div>
    </div>
  )
}

export default AdsPage
