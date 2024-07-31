import AffliatePrograms from '@/components/AffliatePrograms'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import AffiliatePageLayout from '@/components/layout/homepage'
import { getCurrentMonthAndYear } from '@/lib/helpers/formatDate'
import { capitalizeFirstLetter } from '@/lib/helpers/formatWord'
import { baseURL } from '@/services/api'
import { CategoryResponse } from '@/services/models/hooks/category/type'
import { ProgramResponse } from '@/services/models/hooks/program/type'
import React from 'react'

// Define the type for the page's props
interface CategoryPageProps {
  params: { id: string }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  // Check if params.id is defined
  if (!params.id) {
    console.error('params.id is undefined', params)
    return <div>Error: Category ID is missing</div>
  }

  try {
    // Fetching category data
    const categoryResponse = await fetch(`${baseURL}category/${params.id}/`)
    const category: CategoryResponse = await categoryResponse.json()

    // Fetching programs data
    const programsResponse = await fetch(
      `${baseURL}affiliate/get-programs/${category.code}/`
    )
    const programs: ProgramResponse[] = await programsResponse.json()

    const title = category.name
    const date = getCurrentMonthAndYear()

    return (
      <AffiliatePageLayout>
        <Hero
          title={`200+ Best ${
            capitalizeFirstLetter(title) || ''
          } Affiliate programs as at ${date}`}
          description='Discover 200+ curated highest paying affiliate programs that are perfect for your niche, content to cash out massively in 2024.'
        />
        <AffliatePrograms category={category} programs={programs} />
        <Footer />
      </AffiliatePageLayout>
    )
  } catch (error) {
    console.error('Error fetching data', error)
    return <div>Error: Unable to load data</div>
  }
}

// Fetch data for the static props
export async function generateStaticParams() {
  const response = await fetch(`${baseURL}category/`)
  const categories: CategoryResponse[] = await response.json()

  return categories.map((category) => ({
    id: category.code.toString(),
  }))
}

export default CategoryPage
