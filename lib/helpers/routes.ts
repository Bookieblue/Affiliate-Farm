export const getRoute = (code: string): string => {
  if (code.length > 1) return `/category/${code}`
  return '/'
}
