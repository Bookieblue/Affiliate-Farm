interface NicheDetails {
  name: string
  code: string
  created_at: string
  updated_at: string
  program_no: number
}

export interface ProgramResponse {
  id: number
  niche: number
  niche_details: NicheDetails
  logo: string
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
  verified: boolean
  affiliateType: string
  affiliateLevel: string
  paymentMethod: string
  currency: string
  commissionType: string
  ticketType: string
  created_at: string
  updated_at: string
}

export interface ProgramApiResponse {
  count: number
  next: string | null
  previous: string | null
  results: ProgramResponse[]
}
