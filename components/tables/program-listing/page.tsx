'use client'
import React, { ChangeEvent, useMemo, useState } from 'react'
import { DataTable } from './data-table'
import { Ad, createColumns } from './columns'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useGetPrograms } from '@/services/models/hooks/program/hook'
import {
  ProgramApiResponse,
  ProgramResponse,
} from '@/services/models/hooks/program/type'

const initialAdsData: Ad[] = [
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Bookie AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Bussiness Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Vicky AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  // Add more rows as needed
]

const AdsPage = () => {
  const [data, setData] = useState<ProgramResponse[]>()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedOption, setSelectedOption] = useState('')

  const { data: programData, isLoading, isSuccess } = useGetPrograms()

  isSuccess && setData(programData)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const filteredData = useMemo(() => {
    const results = programData || []
    if (!searchQuery) return results
    return results.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  }, [searchQuery, programData])

  const handleDeleteRow = (row: ProgramResponse) => {
    setData((prevData) => {
      if (prevData) {
        return prevData.filter((item) => item !== row)
      }
    })
  }

  const handleEditCategory = (row: ProgramResponse, newCategory: string) => {
    setData((prevData) => {
      if (prevData) {
        return prevData.map((item) =>
          item === row ? { ...item, category: newCategory } : item
        )
      }
    })
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
