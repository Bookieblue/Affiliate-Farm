'use client'
import React, { ChangeEvent, useState, useMemo, useEffect } from 'react'
import { Ad, columns } from './columns'
import { DataTable } from './data-table'
import { useGetAds } from '@/services/models/hooks/ads/hook'
import { AdsResponse } from '@/services/models/hooks/ads/type'

async function getData(): Promise<Ad[]> {
  // Fetch data from your API here.
  return [
    {
      orderId: '02345',
      program: 'Jasper AI',
      duration: '2 Months',
      paymentDate: 'Jun 4, 2024',
      expiringDate: 'Aug 4, 2024',
      customer: 'Johnson Petel',
      customerEmail: 'johnsonpetel123@gmail.com',
      status: 'Active',
    },
    {
      orderId: '02346',
      program: 'Jasper AI',
      duration: '2 Months',
      paymentDate: 'Jun 4, 2024',
      expiringDate: 'Aug 4, 2024',
      customer: 'Johnson Petel',
      customerEmail: 'johnsonpetel123@gmail.com',
      status: 'Active',
    },
    {
      orderId: '02345',
      program: 'Jasper AI',
      duration: '2 Months',
      paymentDate: 'Jun 4, 2024',
      expiringDate: 'Aug 4, 2024',
      customer: 'Johnson Petel',
      customerEmail: 'johnsonpetel123@gmail.com',
      status: 'Active',
    },
    {
      orderId: '02346',
      program: 'Jasper AI',
      duration: '2 Months',
      paymentDate: 'Jun 4, 2024',
      expiringDate: 'Aug 4, 2024',
      customer: 'Johnson Petel',
      customerEmail: 'johnsonpetel123@gmail.com',
      status: 'Expired',
    },
    {
      orderId: '02345',
      program: 'Jasper AI',
      duration: '2 Months',
      paymentDate: 'Jun 4, 2024',
      expiringDate: 'Aug 4, 2024',
      customer: 'Johnson Petel',
      customerEmail: 'johnsonpetel123@gmail.com',
      status: 'Active',
    },
    {
      orderId: '02346',
      program: 'Jasper AI',
      duration: '2 Months',
      paymentDate: 'Jun 4, 2024',
      expiringDate: 'Aug 4, 2024',
      customer: 'Johnson Petel',
      customerEmail: 'johnsonpetel123@gmail.com',
      status: 'Expired',
    },
    {
      orderId: '02345',
      program: 'Jasper AI',
      duration: '2 Months',
      paymentDate: 'Jun 4, 2024',
      expiringDate: 'Aug 4, 2024',
      customer: 'Johnson Petel',
      customerEmail: 'johnsonpetel123@gmail.com',
      status: 'Active',
    },
    {
      orderId: '02346',
      program: 'Jasper AI',
      duration: '2 Months',
      paymentDate: 'Jun 4, 2024',
      expiringDate: 'Aug 4, 2024',
      customer: 'Johnson Petel',
      customerEmail: 'johnsonpetel123@gmail.com',
      status: 'Expired',
    },
    {
      orderId: '02345',
      program: 'Jasper AI',
      duration: '2 Months',
      paymentDate: 'Jun 4, 2024',
      expiringDate: 'Aug 4, 2024',
      customer: 'Johnson Petel',
      customerEmail: 'johnsonpetel123@gmail.com',
      status: 'Active',
    },
    {
      orderId: '02346',
      program: 'Jasper AI',
      duration: '2 Months',
      paymentDate: 'Jun 4, 2024',
      expiringDate: 'Aug 4, 2024',
      customer: 'Johnson Petel',
      customerEmail: 'johnsonpetel123@gmail.com',
      status: 'Active',
    },
    {
      orderId: '02345',
      program: 'Jasper AI',
      duration: '2 Months',
      paymentDate: 'Jun 4, 2024',
      expiringDate: 'Aug 4, 2024',
      customer: 'Johnson Petel',
      customerEmail: 'johnsonpetel123@gmail.com',
      status: 'Active',
    },
    {
      orderId: '02346',
      program: 'Jasper AI',
      duration: '2 Months',
      paymentDate: 'Jun 4, 2024',
      expiringDate: 'Aug 4, 2024',
      customer: 'Johnson Petel',
      customerEmail: 'johnsonpetel123@gmail.com',
      status: 'Active',
    },
    {
      orderId: '02345',
      program: 'Jasper AI',
      duration: '2 Months',
      paymentDate: 'Jun 4, 2024',
      expiringDate: 'Aug 4, 2024',
      customer: 'Johnson Petel',
      customerEmail: 'johnsonpetel123@gmail.com',
      status: 'Active',
    },
    {
      orderId: '02346',
      program: 'Jasper AI',
      duration: '2 Months',
      paymentDate: 'Jun 4, 2024',
      expiringDate: 'Aug 4, 2024',
      customer: 'Johnson Petel',
      customerEmail: 'johnsonpetel123@gmail.com',
      status: 'Active',
    },
  ]
}

const Listing = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'expired', label: 'Expired' },
]

export default function DemoPage() {
  const [data, setData] = useState<AdsResponse[]>([])
  const [selectedListing, setselectedListing] = useState('all')

  const { data: adsData, isLoading, isSuccess } = useGetAds()

  isSuccess && console.log(adsData)

  useEffect(() => {
    isSuccess && setData(adsData)
  }, [isSuccess, adsData])

  const handleTicketChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setselectedListing(event.target.value)
  }

  const filteredData = useMemo(() => {
    if (selectedListing === 'all') {
      return data
    }
    return data.filter(
      (item) => item.status.toLowerCase() === selectedListing.toLowerCase()
    )
  }, [selectedListing, data])

  return (
    <div className='mt-10 mb-20'>
      <div className='flexBetween mb-10 items-center'>
        <p className='text-cream-50 bold-20'>Program category</p>
        <select
          value={selectedListing}
          onChange={handleTicketChange}
          className='py-2 w-40 border placeholder:regular-16 text-cream-50 border-gray-20 bg-transparent placeholder:text-cream-50  rounded-md'
        >
          {Listing.map((list) => (
            <option
              key={list.value}
              value={list.value}
              className='bg-[#32312C] text-cream-20'
            >
              {list.label}
            </option>
          ))}
        </select>
      </div>
      {isSuccess && <DataTable columns={columns} data={filteredData} />}
    </div>
  )
}
