import AffliatePrograms from '@/components/AffliatePrograms'
import Hero from '@/components/Hero'
import AffiliatePageLayout from '@/components/layout/homepage'
import { getCurrentMonthAndYear } from '@/lib/helpers/formatDate'
import { capitalizeFirstLetter } from '@/lib/helpers/formatWord'
import { baseURL } from '@/services/api'
import { CategoryResponse } from '@/services/models/hooks/category/type'
import { ProgramResponse } from '@/services/models/hooks/program/type'
import Layout from "../layout";

interface CategoryPageProps {
  params: { id: string }
}

export const revalidate = 20 // This will revalidate the page every 20 seconds

async function getCategoryData(id: string) {
  const categoryResponse = await fetch(`${baseURL}category/${id}/`, {
    next: { revalidate },
  })
  return categoryResponse.json()
}

async function getProgramsData(code: string) {
  const programsResponse = await fetch(
    `${baseURL}affiliate/get-programs/${code}/`,
    { next: { revalidate } }
  )
  return programsResponse.json()
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  if (!params.id) {
    console.error('params.id is undefined', params)
    return <div>Error: Category ID is missing</div>
  }

  try {
    const category: CategoryResponse = await getCategoryData(params.id)
    const programs: ProgramResponse[] = await getProgramsData(category.code)

    const title = category.name
    const date = getCurrentMonthAndYear()

    return (
      <>
       <Hero
          title={`200+ Best ${
            capitalizeFirstLetter(title) || ''
          } Affiliate programs as at ${date}`}
          description='Discover 200+ curated highest paying affiliate programs that are perfect for your niche, content to cash out massively in 2024.'
        />
        <AffliatePrograms category={category} programs={programs} />
      </>
        
    )
  } catch (error) {
    console.error('Error fetching data', error)
    return <div>Error: Unable to load data</div>
  }
}

export async function generateStaticParams() {
  const response = await fetch(`${baseURL}category/`)
  const categories: CategoryResponse[] = await response.json()

  return categories.map((category) => ({
    id: category.code.toString(),
  }))
}

export default CategoryPage
