import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export default function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value
  if (!token) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/ads-listing',
    '/program-categories',
    '/program-listing',
    '/upload-program',
  ],
}
