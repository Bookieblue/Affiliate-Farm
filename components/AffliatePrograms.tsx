'use client'
import React, { useState, FormEvent } from 'react'
import SelectInput from './ui/FormField/SelectInput'
import {
  AFFLIATE_TYPE,
  ALL_LEVELS,
  COMMISSION_TYPE,
  PAYMENT_METHOD,
  TICKET_TYPE,
} from '../constant/index'
import Image from 'next/image'
import LoadMoreComponent from './LoadMoreComponent'
import { CategoryProgramProps } from '@/app/page'

interface Option {
  label: string
  value: string
}

const Tickets: Option[] = TICKET_TYPE.map((ticket) => ({
  label: ticket.name,
  value: ticket.name,
}))

const Levels: Option[] = ALL_LEVELS.map((level) => ({
  label: level.name,
  value: level.name,
}))

const Payments: Option[] = PAYMENT_METHOD.map((payment) => ({
  label: payment.name,
  value: payment.name,
}))

const Affiliates: Option[] = AFFLIATE_TYPE.map((affiliate) => ({
  label: affiliate.name,
  value: affiliate.name,
}))

const Commissions: Option[] = COMMISSION_TYPE.map((commission) => ({
  label: commission.name,
  value: commission.name,
}))

const AffliatePrograms: React.FC<CategoryProgramProps> = ({
  category,
  programs,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedAffiliate, setSelectedAffiliate] = useState<string>('')
  const [selectedCommission, setSelectedCommission] = useState<string>('')
  const [selectedLevel, setSelectedLevel] = useState<string>('')
  const [selectedTicket, setSelectedTicket] = useState<string>('')
  const [selectedPayment, setSelectedPayment] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleDropdownChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (value: string) => {
    setter(value)
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // handle submit logic
  }

  // Multi-attribute and dropdown filtering logic
  const filteredPrograms = programs?.filter((program) => {
    const matchesSearchQuery = ['name'].some((key) =>
      (program[key as keyof typeof program] as string)
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase())
    )

    const matchesAffiliate = selectedAffiliate
      ? program.affiliateType === selectedAffiliate
      : true
    const matchesCommission = selectedCommission
      ? program.commissionType === selectedCommission
      : true
    const matchesLevel = selectedLevel
      ? program.affiliateLevel === selectedLevel
      : true
    const matchesTicket = selectedTicket
      ? program.ticketType === selectedTicket
      : true
    const matchesPayment = selectedPayment
      ? program.paymentMethod === selectedPayment
      : true

    return (
      matchesSearchQuery &&
      matchesAffiliate &&
      matchesCommission &&
      matchesLevel &&
      matchesTicket &&
      matchesPayment
    )
  }) || []

  return (
    <section className='max-container padding-container mt-10 w-full'>
      <div className='relative w-full'>
        <input
          type='text'
          placeholder='Search Program'
          value={searchQuery}
          onChange={handleInputChange}
          className='w-full xs:w-full lg:px-4 py-2 pl-10 mb-10 lg:pl-10 border placeholder:regular-16 border-gray-20 xl:w-[60%] text-gray-10 bg-transparent placeholder:text-gray-10 rounded-3xl'
        />
        <Image
          src='/search.svg'
          alt='search'
          width={17}
          height={17}
          className='absolute left-4 top-0 lg:top-[0.8px] lg:left-3 mt-3'
        />
      </div>
      <div className='hidden lg:block'>
        <form onSubmit={onSubmit} className='mt-5 flexBetween gap-4 min-w-fit'>
          <SelectInput
            name='affiliateType'
            label=''
            options={Affiliates}
            placeholder='All Affiliates Type'
            value={selectedAffiliate}
            onChange={handleDropdownChange(setSelectedAffiliate)}
          />
          <SelectInput
            name='commissionType'
            label=''
            options={Commissions}
            placeholder='Commission Type'
            value={selectedCommission}
            onChange={handleDropdownChange(setSelectedCommission)}
          />
          <SelectInput
            name='Levels'
            label=''
            options={Levels}
            placeholder='Level'
            value={selectedLevel}
            onChange={handleDropdownChange(setSelectedLevel)}
          />
          <SelectInput
            name='ticketType'
            label=''
            options={Tickets}
            placeholder='Ticket Type'
            value={selectedTicket}
            onChange={handleDropdownChange(setSelectedTicket)}
          />
          <SelectInput
            name='paymentMethod'
            label=''
            options={Payments}
            placeholder='Payment Method'
            value={selectedPayment}
            onChange={handleDropdownChange(setSelectedPayment)}
          />
        </form>
      </div>

      {filteredPrograms.length > 0 ? (
        <div className=''>
          <LoadMoreComponent searchQuery={searchQuery} programs={filteredPrograms} />
        </div>
      ) : (
        <div className='flex justify-center mt-10'>
          <p>No programs found. Please adjust your search or filters.</p>
        </div>
      )}
    </section>
  )
}

export default AffliatePrograms
