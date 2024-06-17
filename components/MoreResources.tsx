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
            link:  'support@affiliatefram.xyz',
        },
        {
            icon: '/support.svg',
            title: 'Support',
            link:  'support@affiliatefram.xyz',
        },
    ]
  return (
    <div>
        {MoreResources.map((resource) =>(
            <Link href={resource.link} key={resource.title} className='flex gap-4 mb-4 '>
                  <Image src={resource.icon} width={20} height={20} alt='icon' />
                   <p className='text-cream-20 text-medium-16 hover:text-yellow-50'>{resource.title}</p>
            </Link>
        ))}
    </div>
  )
}

export default MoreResources