'use client'
import React, { ChangeEvent, useState, useMemo, useEffect } from 'react'
import { Ad, columns } from './columns'
import { DataTable } from './data-table'
import { useGetAds } from '@/services/models/hooks/ads/hook'
import { AdsResponse } from '@/services/models/hooks/ads/type'
import SelectInput from '@/components/ui/FormField/SelectInput' // Import SelectInput

const Listing = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'expired', label: 'Expired' },
]

export default function DemoPage() {
  const [data, setData] = useState<AdsResponse[]>([])
  const [selectedListing, setSelectedListing] = useState('all')

  const { data: adsData, isLoading, isSuccess } = useGetAds()

  useEffect(() => {
    if (isSuccess) {
      setData(adsData)
    }
  }, [isSuccess, adsData])

  const handleListingChange = (value: string) => {
    setSelectedListing(value)
  }

  const filteredData = useMemo(() => {
    if (selectedListing === 'all') {
      return data
    }
    return data.filter(
      (item) => item.status.toLowerCase() === selectedListing.toLowerCase()
    )
  }, [selectedListing, data])

  // Map Listing data to the format required by SelectInput
  const options = Listing.map(list => ({
    value: list.value,
    label: list.label,
  }))

  return (
    <div className='mt-10 mb-20'>
      <div className='flexBetween mb-10 items-center'>
        <p className='text-cream-50 bold-20'>All Ads listing</p>
        <div className='w-[200px]'>
        <SelectInput
          name="listing"
          placeholder="Select status"
          options={options}
          value={selectedListing}
          onChange={handleListingChange}
        />
        </div>
      </div>
      {isSuccess && <DataTable columns={columns} data={filteredData} />}
    </div>
  )
}
