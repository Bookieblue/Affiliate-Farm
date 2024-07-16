import AffliatePrograms from '@/components/AffliatePrograms'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import AffiliatePageLayout from '@/components/layout/homepage'
import { baseURL } from '@/services/api'
import { CategoryResponse } from '@/services/models/hooks/category/type'
import { ProgramResponse } from '@/services/models/hooks/program/type'
import React from 'react'

export interface CategoryProgramProps {
  category?: CategoryResponse
  programs?: ProgramResponse[]
}

const Home: React.FC<{ params: any }> = async ({ params }) => {
  // Fetching category data
  const categoryResponse = await fetch(`${baseURL}category/${params.id}`)
  const category: CategoryResponse = await categoryResponse.json()

  // Fetching programs data
  const programsResponse = await fetch(`${baseURL}affiliate/get-no-ads/`)
  const programs: ProgramResponse[] = await programsResponse.json()

  return (
    <AffiliatePageLayout>
      <Hero
        title='200+ Best Affiliate programs as at Jan, 2024'
        description='Discover 200+ curated highest paying affiliate programs that are perfect for your niche, content to cash out massively in 2024.'
      />
      <AffliatePrograms category={category} programs={programs} />
      <Footer />
    </AffiliatePageLayout>
  )
}

export async function generateStaticParams() {
  const response = await fetch(`${baseURL}category/`)
  const categories: CategoryResponse[] = await response.json()

  return categories.map((category) => ({
    id: category.code.toString(),
  }))
}

export default Home
