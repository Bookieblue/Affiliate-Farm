'use client'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'
import { AffiliateFormContext } from '@/lib/context/AffiliateFormContext'
import { ProgramResponse } from './hooks/program/type'

export default function Provider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())
  const [formData, setFormData] = useState<ProgramResponse | any | undefined>()

  return (
    <QueryClientProvider client={queryClient}>
      <AffiliateFormContext.Provider value={{ formData, setFormData }}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </AffiliateFormContext.Provider>
    </QueryClientProvider>
  )
}
