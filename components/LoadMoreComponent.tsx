'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Programs from './Program'
import { ArrowDown } from 'lucide-react'
import { ProgramResponse } from '@/services/models/hooks/program/type'
import { CategoryProgramProps } from '@/app/page'

interface LoadMoreProgramsProps extends CategoryProgramProps {
  searchQuery: string
}

const LoadMorePrograms: React.FC<LoadMoreProgramsProps> = ({
  searchQuery,
  programs: programsData = [], // Set a default empty array as fallback
}) => {
  const [programs, setPrograms] = useState<ProgramResponse[]>([])
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    const initialPrograms = programsData.slice(0, 9)
    setPrograms(initialPrograms)
    setOffset(initialPrograms.length)

    // If the total number of programs is less than 9, there are no more programs to load
    if (programsData.length <= 9) {
      setHasMore(false)
    }
  }, [programsData])

  const loadPrograms = useCallback(() => {
    if (loading) return

    setLoading(true)

    const newPrograms = programsData.slice(offset, offset + 9)

    setPrograms((prevPrograms) => [...prevPrograms, ...newPrograms])
    setOffset((prevOffset) => prevOffset + newPrograms.length)

    if (newPrograms.length < 9) {
      setHasMore(false) // No more programs to load
    }

    setLoading(false)
  }, [offset, programsData, loading])

  useEffect(() => {
    const initialPrograms = programsData.slice(0, 9)
    setPrograms(initialPrograms)
    setOffset(initialPrograms.length)
    setHasMore(programsData.length > 9)
  }, [searchQuery, programsData])

  if (loading && programs.length === 0) {
    return (
      <div className='flexCenter mt-20 flex-col h-full w-full'>
        <p className='text-cream-50 mt-4'>Loading...</p>
      </div>
    )
  }

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-7'>
        {programs.length > 0 ? (
          programs.map((program, index) => (
            <Programs key={index} {...program} />
          ))
        ) : (
          <p>No data</p>
        )}
      </div>
      {hasMore && (
        <div className='flex justify-center mt-4'>
          <button
            onClick={loadPrograms}
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
