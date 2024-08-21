import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MoreResources = () => {
    const MoreResources = [
        {
            icon: '/setup.svg',
            title: 'Setup Affiliate Program',
            link:  'https://tapfiliate.com/',
        },
        {
            icon: '/feedback.svg',
            title: 'Feedback/Suggestion',
            link:  'mailto:support@affilatebase.xyz',
        },
        {
            icon: '/support.svg',
            title: 'Support',
            link:  'mailto:support@affilatebase.xyz',
        },
    ]
  return (
    <div>
        {MoreResources.map((resource) =>(
            <Link href={resource.link} key={resource.title} target='_blank' className='flex gap-4 mb-4 '>
                  <Image src={resource.icon} width={20} height={20} alt='icon' />
                   <p className='text-cream-20 text-medium-16 hover:text-yellow-50'>{resource.title}</p>
            </Link>
        ))}
    </div>
  )
}

export default MoreResources