const getCurrency = (rate: string): string => {
  if (rate.includes('%')) return '%'
  return rate[0]
}

export function convertAffiliatePayload(payload: any) {
  console.log(payload)
  return {
    logo: payload.logo,
    name: payload.brand_name,
    publisherName: payload.publisher_name,
    publisherEmail: payload.publisher_email,
    niche: payload.category,
    programUrl: payload.program_url,
    shortDescription: payload.program_description,
    description: payload.description,
    cookieDuration: parseInt(payload.cookie_duration, 10),
    cookieExpires: payload.cookie_expired === 'yes',
    commissionRate: parseInt(payload.commission_rate.replace('$', ''), 10),
    payoutAmount: parseInt(payload.payout_fee, 10),
    affiliateType: payload.affiliates,
    affiliateLevel: payload.levels,
    paymentMethod: payload.payments,
    currency: getCurrency(payload.commission_rate), // Assuming USD based on the commission_rate format
    commissionType: payload.commissions,
  }
}
