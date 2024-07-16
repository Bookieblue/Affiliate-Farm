'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Programs from './Program'
import { fetchPrograms, programData } from '../lib/data'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { useGetCategories } from '@/services/models/hooks/category/hook'
import { baseURL } from '@/services/api'
import { CategoryResponse } from '@/services/models/hooks/category/type'
import { ProgramResponse } from '@/services/models/hooks/program/type'
import { CategoryProgramProps } from '@/app/page'

interface LoadMoreProgramsProps extends CategoryProgramProps {
  searchQuery: string
}

const LoadMorePrograms: React.FC<LoadMoreProgramsProps> = ({
  searchQuery,
  category,
  programs: programsData, //TODO will change this
}) => {
  const [programs, setPrograms] = useState<ProgramResponse[]>()
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  useEffect(() => setPrograms(programsData), [programs, programsData])
  const loadPrograms = useCallback(
    async (initialLoad = false) => {
      setLoading(true)
      // const newPrograms = await fetchPrograms(
      //   initialLoad ? 0 : offset,
      //   9,
      //   searchQuery
      // )
      // setPrograms((prevPrograms) =>
      //   initialLoad ? newPrograms : [...prevPrograms, ...newPrograms]
      // )
      setOffset((prevOffset) => (initialLoad ? 9 : prevOffset + 9))
      setLoading(false)
      if (programs && programs.length < 9) {
        setHasMore(false) // No more programs to load
      }
    },
    [programs]
  )

  useEffect(() => {
    loadPrograms(true) // Load initial programs
  }, [searchQuery, loadPrograms])

  if (loading && programs && programs.length === 0) {
    return (
      <div className='flexCenter mt-20 flex-col  h-full w-full'>
        <p className='text-gray-10 mt-4'>Loading...</p>
      </div>
    )
  }

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-7'>
        {programs ? (
          programs.map((program, index) => (
            <Programs key={index} {...program} />
          ))
        ) : (
          <p>No data </p>
        )}
      </div>
      {hasMore && (
        <div className='flex justify-center mt-4'>
          <button
            onClick={() => loadPrograms()}
            className='px-2 py-2 bg-[#8D8885] text-[#14181A] font-medium text-sm rounded hover:bg-yellow-50 mt-5 flexCenter gap-2'
            disabled={loading}
          >
            <ArrowDown className='size-4 text-[#14181A]' />{' '}
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  )
}

export default LoadMorePrograms
