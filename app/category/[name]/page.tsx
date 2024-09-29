import AffliatePrograms from '@/components/AffliatePrograms';
import Hero from '@/components/Hero';
import {
  getCurrentMonthAndYear,
  getCurrentYear,
} from '@/lib/helpers/formatDate';
import {
  capitalizeFirstLetter,
  replaceDashWithSpace,
  replaceSpaceWithDash,
} from '@/lib/helpers/formatWord';
import { baseURL } from '@/services/api';
import { CategoryResponse } from '@/services/models/hooks/category/type';
import { ProgramResponse } from '@/services/models/hooks/program/type';
import React from 'react';

interface CategoryPageProps {
  params: { name: string };
}

export const revalidate = 20; // This will revalidate the page every 20 seconds

async function getCategoryData(name: string) {
  const categoryResponse = await fetch(`${baseURL}category/${name}/`, {
    next: { revalidate },
  });
  return categoryResponse.json();
}

async function getProgramsData(code: string) {
  const programsResponse = await fetch(
    `${baseURL}affiliate/get-programs/${code}/`,
    { next: { revalidate } }
  );
  return programsResponse.json();
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  if (!params.name) {
    console.error('params name is undefined', params);
    return <div>Error: Category ID is missing</div>;
  }

  try {
    const name = replaceDashWithSpace(params.name);
    const category: CategoryResponse = await getCategoryData(name);
    const programs: ProgramResponse[] = await getProgramsData(category.code);

    const title = category.name;
    const date = getCurrentMonthAndYear();

    return (
      <>
        <Hero
          title={`200+ Best ${
            capitalizeFirstLetter(title) || ''
          } Affiliate programs as at ${date}`}
          description={`Discover 200+ curated highest paying affiliate programs that are perfect for your niche, content to cash out massively in ${getCurrentYear()}.`}
        />
        <AffliatePrograms category={category} programs={programs} />
      </>
    );
  } catch (error) {
    console.error('Error fetching data', error);
    return <div>Error: Unable to load data</div>;
  }
};

export async function generateStaticParams() {
  const response = await fetch(`${baseURL}category/`);
  const categories: CategoryResponse[] = await response.json();

  return categories.map(category => ({
    name: replaceSpaceWithDash(category.name),
  }));
}

export default CategoryPage;
