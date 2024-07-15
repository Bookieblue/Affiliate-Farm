interface NicheDetails {
  name: string
  code: string
  created_at: string
  updated_at: string
  program_no: number
}

enum affiliateType {
  AFFILIATE_PROGRAM = 'Affiliate Program',
  AFFILIATE_NETWORK = 'Affiliate Network',
  ALL_AFFILIATE_TYPE = 'All Affiliate Type',
}

enum affiliateLevel {
  ALL_LEVELS = 'All Levels',
  BEGINNER_LEVEL = 'Beginner Level',
  EXPERT_LEVEL = 'Expert Level',
  NEWEST_OFFER = 'Newest Offer',
}

enum paymentMethod {
  ALL_PAYMENT_METHODS = 'All payment methods',
  PAYPAL = 'PayPal',
  PAYONEER = 'Payoneer',
  OTHERS = 'Others',
}

enum currencyType {
  PERCENTAGE = '%',
  DOLLAR = '$',
  POUND = '£',
  EURO = '€',
}

enum commissionType {
  ALL_COMMISION_TYPE = 'All commission type',
  ONE_TIME_SALE_COMMISSION = 'One-time sale commission',
  RECURRING_SALE_COMMISSION = 'Recurring sale commission',
  LIFETIME_SALE_COMMISSION = 'Lifetime sale commission',
  PAY_PER_LEAD_COMMISSION = 'Pay per lead commission',
  PAY_PER_CLICK_COMMISSION = 'Pay per click commission',
  PAY_PER_IMPRESSION_COMMISSION = 'Pay per impression commission',
}

enum ticketType {
  ALL_TICKETS_TYPE = 'All tickets type',
  HIGH_TICKETS = 'High tickets',
  LOW_TICKETS = 'Low tickets',
  INTERMEDIARY_TICKET = 'Intermediary ticket',
}
export interface ProgramResponse {
  id: number
  niche?: number
  niche_details?: NicheDetails
  logo: any
  code: string
  name: string
  publisherName: string
  publisherEmail: string
  programUrl: string
  shortDescription: string
  description: string
  cookieDuration: number
  cookieExpires: boolean
  commissionRate: number
  payoutAmount: number
  verified?: boolean
  affiliateType: affiliateType
  affiliateLevel: affiliateLevel
  paymentMethod: paymentMethod
  currency: currencyType
  commissionType: commissionType
  ticketType: ticketType
  created_at?: string
  updated_at?: string
}

export interface ProgramApiResponse {
  count: number
  next: string | null
  previous: string | null
  results: ProgramResponse[]
}
