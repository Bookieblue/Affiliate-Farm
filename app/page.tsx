import AffliatePrograms from '@/components/AffliatePrograms'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import AffiliatePageLayout from '@/components/layout/homepage'
import { getCurrentMonthAndYear } from '@/lib/helpers/formatDate'
import { baseURL } from '@/services/api'
import { CategoryResponse } from '@/services/models/hooks/category/type'
import { ProgramResponse } from '@/services/models/hooks/program/type'
import React from 'react'

export interface CategoryProgramProps {
  category?: CategoryResponse
  programs?: ProgramResponse[]
}

export const revalidate = 20
const Home: React.FC = async () => {
  const programsResponse = await fetch(`${baseURL}affiliate/get-programs/`, {
    next: { revalidate },
  })
  const programs: ProgramResponse[] = await programsResponse.json()
  const date = getCurrentMonthAndYear()
  return (
    <AffiliatePageLayout>
      <Hero
        title={`200+ Best Affiliate programs as at ${date}`}
        description='Discover 200+ curated highest paying affiliate programs that are perfect for your niche, content to cash out massively in 2024.'
      />
      <AffliatePrograms programs={programs} />
    </AffiliatePageLayout>
  )
}

export async function generateStaticParams() {
  return [{ id: '' }]
}

export default Home
