export function getCookieValue(name: string): string | null {
  if (typeof document === 'undefined') {
    return null // Return null or a default value when running on the server
  }

  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)

  if (parts.length === 2 && parts[1]) {
    return parts[1].split(';')[0]
  }

  return null
}
