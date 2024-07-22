// NAVIGATION
import PayoutIcon from '@/components/assets-nav-icons/payout'
import MoreResourcesIcon from '@/components/assets-nav-icons/more-resources'
import FeaturedAdIcon from '@/components/assets-nav-icons/featured-ad'
import NewsletterIcon from '@/components/assets-nav-icons/newsletter'

import React from 'react'
import {
  affiliateLevel,
  affiliateType,
  commissionType,
  paymentMethod,
} from '@/services/models/hooks/program/type'

export interface NavLink {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  href: string
  key: string
  label: string
  iconWidth?: number
  iconHeight?: number
}

export const NAV_LINKS: NavLink[] = [
  {
    href: '/',
    key: 'affiliates-programs',
    label: 'Affiliates Programs',
    icon: PayoutIcon,
    iconWidth: 20,
    iconHeight: 20,
  },
  {
    href: '/newsletters',
    key: 'newsletters',
    label: 'Newsletters',
    icon: NewsletterIcon,
    iconWidth: 15,
    iconHeight: 20,
  },
  {
    href: '/featured-ad',
    key: 'featured_ad',
    label: 'Featured Ad',
    icon: FeaturedAdIcon,
    iconWidth: 20,
    iconHeight: 20,
  },
  {
    href: '/more-resources',
    key: 'more-resources',
    label: 'More resources',
    icon: MoreResourcesIcon,
    iconWidth: 15,
    iconHeight: 20,
  },
]

export const ADMIN_NAV_LINKS: NavLink[] = [
  {
    href: '/',
    key: 'affiliates-programs',
    label: 'Affiliates Programs',
    icon: PayoutIcon,
    iconWidth: 20,
    iconHeight: 20,
  },
]

//AFFLIATE PROGRAM
export const AFFLIATE_PROGRAMS = [
  {
    img: '/',
    name: 'Jasper AI',
    type: 'Content writing tool',
    payout: '$100',
    cookie: '60days',
    Program:
      'With jasper user can start creating massive blog, ebook, music , etc contents with AI.',
    id: '',
    link: '',
  },
]

//AFFLIATE PROGRAM LINKS
export const AFFLIATE_PROGRAMS_LINKS = [
  {
    name: 'All Affiliate Programs',
    link: '/',
  },
  {
    name: 'SaaS Affiliate Programs',
    link: '/saas-affiliate-programs',
  },
  {
    name: 'Travel Affiliate Programs',
    link: '/travel-affiliate-programs',
  },
  {
    name: 'Finance Affiliate Programs',
    link: '/finance-affiliate-programs',
  },
  {
    name: 'Health Affiliate Programs',
    link: '/health-affiliate-programs',
  },
  {
    name: 'Pet Affiliate Programs',
    link: 'pet-affiliate-programs',
  },
  {
    name: 'Travel Affiliate Programs',
    link: '/travel-affiliate-programs',
  },
  {
    name: 'Travel Affiliate Programs',
    link: '/travel-affiliate-programs',
  },
]

//AFFLIATE PROGRAM LINKS
export const DASHBOARD_LINKS = [
  {
    name: 'Ads listing',
    link: '/ads-listing',
  },
  {
    name: 'Program listing',
    link: '/program-listing',
  },
  {
    name: 'Program categories',
    link: '/program-categories',
  },
  {
    name: 'Logout',
    link: '/logout',
  },
]

//TICKET TYPE DROPDOWN MENU
export const TICKET_TYPE = [
  {
    name: 'All tickets type',
  },
  {
    name: 'High tickets',
  },
  {
    name: 'Low tickets',
  },
  {
    name: 'Intermediary ticket',
  },
] as {
  name: string
}[]

//ALL LEVELS DROPDOWN MENU
export const ALL_LEVELS = Object.values(affiliateLevel).map((level) => ({
  name: level,
}))

//PAYMENT METHOD DROPDOWN MENU
export const PAYMENT_METHOD = Object.values(paymentMethod).map((method) => ({
  name: method,
}))

//AFFLIATE TYPE DROPDOWN MENU
export const AFFLIATE_TYPE = Object.values(affiliateType).map((method) => ({
  name: method,
}))

//AFFLIATE CATEGORY DROPDOWN MENU
export const AFFILIATE_CATEGORY = [
  {
    name: 'Other affiliate program',
  },
  {
    name: 'Travel affiliate program',
  },
  {
    name: 'Health affiliate program',
  },
  {
    name: 'Betting affiliate program',
  },
] as {
  name: string
}[]

//COMMISSION_YPE DROPDOWN MENU
export const COMMISSION_TYPE = Object.values(commissionType).map((name) => ({
  name,
}))

//FEATURED AD PLAN DROPDOWN MENU
export const FEATURED_AD_PLAN = [
  {
    name: '1 month - $24',
  },
  {
    name: '2 Month - $36',
  },
  {
    name: '6 Month - $72',
  },
] as {
  name: string
}[]

//AFFLIATE PROGRAM LINKS
export const FEATURED_AD = [
  {
    name: 'Featured Listing: ',
    description:
      'Get your affiliate program featured through our website, putting your brand in front of a highly engaged audiences.',
  },
  {
    name: 'Verified Badge: ',
    description:
      "Get credibility with our  verified badge showcasing your program's authenticity.",
  },
  {
    name: 'Social Media Reach: ',
    description:
      'Tap into our large social media following with featured posts on LinkedIn and Twitter, reaching over 100,000 followers.',
  },
  {
    name: 'Twitter (X) Highlight: ',
    description:
      "Enjoy premium exposure with your program pinned to our Twitter page for a week and permanently showcased in our 'Highlights' tab.",
  },
  {
    name: 'Newsletter Promotion: ',
    description:
      'We get your brand program across to over 200 bloggers, YouTubers, and content creators on our newsletter list.',
  },
  {
    name: 'Exclusive Partnership Banner: ',
    description:
      'Stand out with a personalized banner announcing your partnership with Affiliate Farm, adding an air of exclusivity and importance.',
  },
]

//AFFLIATE PROGRAM LINKS
export const AD_FEE = [
  'Credibility badge',
  'Ads on all program pages',
  'Personalized outreach',
  'Quick Support',
]

//FAQs
export const FAQ = [
  {
    question: 'How do I join the program?',
    answer:
      'To join the program, simply sign up on our website by providing some basic information such as your name, email address, and website (if applicable).',
  },
  {
    question: 'What products or services can I promote?',
    answer:
      'We offer a wide range of health-related products and services, including supplements, fitness equipment, and health insurance.',
  },
  {
    question: 'How much commission can I earn?',
    answer:
      'Our commission structure varies depending on the product or service, but you can earn up to 50% commission on each sale or referral.',
  },
  {
    question: 'How do I track my earnings?',
    answer:
      'You can track your earnings and referrals through our user-friendly affiliate dashboard.',
  },
  {
    question: 'How do I receive my payments?',
    answer: 'Payments are made monthly through PayPal or bank transfer.',
  },
  {
    question: 'What kind of support is available?',
    answer:
      'We offer dedicated support through email, phone, and live chat to help you succeed in the program.',
  },
  {
    question: 'Can I promote offers on social media?',
    answer:
      'Yes, you can promote offers on social media platforms like Facebook, Instagram, Twitter, and more.',
  },
]
