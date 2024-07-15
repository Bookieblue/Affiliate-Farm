import AffliatePrograms from '@/components/AffliatePrograms'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import AffiliatePageLayout from '@/components/layout/homepage'
import { baseURL } from '@/services/api'
import { CategoryResponse } from '@/services/models/hooks/category/type'
import { ProgramResponse } from '@/services/models/hooks/program/type'
import React from 'react'

export interface CategoryProgramProps {
  category: CategoryResponse
  programs: ProgramResponse[]
}

const Home: React.FC<CategoryProgramProps> = ({ category, programs }) => {
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

export default Home

export async function getStaticPaths() {
  const response = await fetch(`${baseURL}category/`)
  const categories: CategoryResponse[] = await response.json()
  const paths = categories.map((category) => ({
    params: { id: category.code },
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }: any) {
  const category = await fetch(`${baseURL}category/`).then(async (resp) => {
    const categories: CategoryResponse[] = await resp.json()
    categories.find((category) => category.code === params.id)
  })
  const programs: ProgramResponse[] = await fetch(
    `${baseURL}affiliate/get-no-ads/`
  ).then(async (resp) => resp.json())
  return {
    props: { category, programs },
    revalidate: 10, // ISR: Revalidate every 10 seconds
  }
}
