export function convertDate(dateString: string): string {
  const date = new Date(dateString)

  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const parts = formatter.formatToParts(date)
  const month = parts.find((part) => part.type === 'month')?.value || ''
  const day = parts.find((part) => part.type === 'day')?.value || ''
  const year = parts.find((part) => part.type === 'year')?.value || ''

  const ordinalSuffix = (day: string): string => {
    const num = parseInt(day, 10)
    if (num > 3 && num < 21) return 'th'
    switch (num % 10) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      case 3:
        return 'rd'
      default:
        return 'th'
    }
  }

  return `${month} ${day}${ordinalSuffix(day)}, ${year}`
}
