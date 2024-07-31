'use client'
import React, { useState, useEffect, MouseEvent, Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { useGetCategories } from '@/services/models/hooks/category/hook'
import { CategoryResponse } from '@/services/models/hooks/category/type'
import { capitalizeFirstLetter } from '@/lib/helpers/formatWord'

const SideBar = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [categories, setCategories] = useState<CategoryResponse[]>([
    { name: 'all', code: '' },
  ])
  const [activeLink, setActiveLink] = useState('')

  const { data, isLoading, isSuccess } = useGetCategories()

  useEffect(() => {
    if (isSuccess) {
      setCategories([{ name: 'all', code: '' }, ...data])
    }
  }, [isSuccess, data])

  useEffect(() => {
    setActiveLink(`${pathname}?${searchParams.toString()}`)
  }, [pathname, searchParams])

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault()
    setActiveLink(href)
    router.push(href)
  }

  const getRoute = (code: string): string => {
    if (code.length > 1) return `/category/${code}`
    return '/'
  }
  if (isLoading) return <p>Loading...</p>

  return (
    <Suspense>
      <section className='gap-10 pl-8 z-20 fixed bg-black-30 h-full'>
        <div className='pt-5'>
          <Link href='/'>
            <Image src='/logo.svg' alt='logo' width={150} height={29} />
          </Link>
          <p className='medium-20 text-cream-50 pt-20'>Categories</p>
        </div>
        <div className='mt-5 pr-5 h-[calc(100vh-8rem)] overflow-y-scroll scrollbar-visible pb-20'>
          {categories.map((link) => {
            const linkHref = `${getRoute(link.code)}?${searchParams.toString()}`
            return (
              <div className='flex mb-10' key={link.name}>
                <Link
                  href={getRoute(link.code)}
                  onClick={(event) => handleLinkClick(event, linkHref)}
                  className='flex gap-1 w-40'
                >
                  <ChevronRight
                    className={`size-4 mt-1 ${
                      activeLink === linkHref
                        ? 'text-yellow-500'
                        : 'text-gray-10'
                    }`}
                  />
                  <p
                    className={`ml-2 ${
                      activeLink === linkHref
                        ? 'text-yellow-500'
                        : 'text-gray-10'
                    }`}
                  >
                    {capitalizeFirstLetter(`${link.name} Affiliate Programs`)}
                  </p>
                </Link>
              </div>
            )
          })}
        </div>
      </section>
    </Suspense>
  )
}

export default SideBar
