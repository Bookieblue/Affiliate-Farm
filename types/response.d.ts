declare global {
  // interface for the niche of the program
  interface NicheDetails {
    name: string
    code: string
    created_at: string
    updated_at: string
    program_no: number
  }

  // interface for program's object
  interface ProgramApiResponse {
    id: number
    niche: number
    niche_details: NicheDetails | null
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
    affiliateType: string
    affiliateLevel: string
    paymentMethod: string
    currency: string
    commissionType: string
    ticketType: string
    created_at: string
    updated_at: string
    verified: boolean
    promoted?: boolean
  }
}

export {}
