// NAVIGATION
export interface NavLink {
    icon: string;
    href: string;
    key: string;
    label: string;
    iconWidth?: number;
    iconHeight?: number;
  }

export const NAV_LINKS : NavLink[]  = [
    {href: '/', key: 'affiliates-programs', label: 'Affiliates Programs', icon: '/payout.svg',   iconWidth: 20,
    iconHeight: 20,},
    {href: '/newsletters', key: 'newsletters', label: 'Newsletters', icon: '/newsletter-icon.svg',   iconWidth: 15,
    iconHeight: 20,},
    {href: 'featured-ad', key: 'featured_ad', label: 'Featured Ad', icon: '/featured-icon.svg',   iconWidth: 20,
    iconHeight: 20,}, 
    {href: '/more-resources', key: 'more-resources', label: 'More resources', icon: '/more-resources-icon.svg',   iconWidth: 15,
    iconHeight: 20,},
  ]

  export const ADMIN_NAV_LINKS: NavLink[]  = [
    {href: '/', key: 'affiliates-programs', label: 'Affiliates Programs', icon: '/payout.svg',   iconWidth: 20,
    iconHeight: 20,},
  ]

//AFFLIATE PROGRAM
export const AFFLIATE_PROGRAMS = [
    {
        img: "/",
        name: 'Jasper AI',
        type: 'Content writing tool',
        payout: '$100',
        cookie: '60days',
        Program: "With jasper user can start creating massive blog, ebook, music , etc contents with AI.",
        id: '',
        link: ''
    }
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
    }
]

//TICKET TYPE DROPDOWN MENU
export const TICKET_TYPE= [
    {
     name: 'All tickets type'
    },
    {
     name: 'High tickets'
    },
    {
     name: 'Low tickets'
    },
    {
     name: 'Intermediary ticket'
    },
] as {
 name: string;
}[];


//ALL LEVELS DROPDOWN MENU
export const ALL_LEVELS= [
    {
     name: 'All levels'
    },
    {
     name: 'Beginner level'
    },
    {
     name: 'Expert level'
    },
    {
     name: 'Newest offers'
    },
] as {
 name: string;
}[];


//PAYMENT METHOD DROPDOWN MENU
export const PAYMENT_METHOD= [
    {
     name: 'All payment methods'
    },
    {
     name: 'Paypal'
    },
    {
     name: 'Payoneer'
    },
    {
     name: 'Bank transfer'
    },
    {
      name: 'Other payment method'
    },
] as {
 name: string;
}[];


//AFFLIATE TYPE DROPDOWN MENU
export const AFFLIATE_TYPE= [
    {
     name: 'All affiliate type'
    },
    {
     name: 'Affiliate Programs'
    },
    {
     name: 'Affiliate Networks'
    },
] as {
 name: string;
}[];


//COMMISSION_YPE DROPDOWN MENU
export const COMMISSION_TYPE= [
    {
     name: 'All commission type'
    },
    {
     name: 'One-time sale'
    },
    {
     name: 'Recurring sale '
    },
    {
        name: 'Lifetime sale '
    },
    {
        name: 'Per booking'
    },
    {
        name: 'Pay per lead '
    },
    {
        name: 'Pay per click'
    },
    {
        name: 'pay per impression '
    },
] as {
 name: string;
}[];


//AFFLIATE PROGRAM LINKS
export const FEATURED_AD = [
    {
        name: 'Featured Listing:',
        description: 'Get your affiliate program featured through our website, putting your brand in front of a highly engaged audiences.'
    },
    {
        name: 'Verified Badge: ',
        description: "Get credibility with our  verified badge showcasing your program's authenticity."
    },
    {
        name: 'Social Media Reach: ',
        description: "Tap into our large social media following with featured posts on LinkedIn and Twitter, reaching over 100,000 followers."
    },
    {
        name: 'Twitter (X) Highlight:',
        description: "Enjoy premium exposure with your program pinned to our Twitter page for a week and permanently showcased in our 'Highlights' tab."
    },
    {
        name: 'Newsletter Promotion:',
        description: "We get your brand program across to over 200 bloggers, YouTubers, and content creators on our newsletter list."
    },
    {
        name: 'Exclusive Partnership Banner:',
        description: "Stand out with a personalized banner announcing your partnership with Affiliate Farm, adding an air of exclusivity and importance."
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
export const FAQ= [
    {
        question: 'How do I join the program?',
        answer: 'To join the program, simply sign up on our website by providing some basic information such as your name, email address, and website (if applicable).',
    },
    {
        question: 'What products or services can I promote?',
        answer: 'We offer a wide range of health-related products and services, including supplements, fitness equipment, and health insurance.',
    },
    {
        question: 'How much commission can I earn?',
        answer: 'Our commission structure varies depending on the product or service, but you can earn up to 50% commission on each sale or referral.',
    },
    {
        question: 'How do I track my earnings?',
        answer: 'You can track your earnings and referrals through our user-friendly affiliate dashboard.',
    },
    {
        question: 'How do I receive my payments?',
        answer: 'Payments are made monthly through PayPal or bank transfer.',
    },
    {
        question: 'What kind of support is available?',
        answer: 'We offer dedicated support through email, phone, and live chat to help you succeed in the program.',
    },
    {
        question: 'Can I promote offers on social media?',
        answer: 'Yes, you can promote offers on social media platforms like Facebook, Instagram, Twitter, and more.',
    } 
]


type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
  }
  
  export const payments: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    // ...
  ]
  