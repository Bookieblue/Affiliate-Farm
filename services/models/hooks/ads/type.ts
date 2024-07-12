import { ProgramResponse } from '../program/type'

export interface AdsResponse {
  id: number
  program: number
  program_details: ProgramResponse
  code: string
  email: string
  fullname: string
  adPlan: string
  note: string | null
  created_at: string
  expires_at: string
  updated_at: string
  status: 'Expired' | 'Active'
}
