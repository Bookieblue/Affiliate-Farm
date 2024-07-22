import { ProgramResponse } from '@/services/models/hooks/program/type'
import { createContext } from 'react'

interface AffiliateFormContextType {
  formData: ProgramResponse | any | undefined
  setFormData: React.Dispatch<React.SetStateAction<ProgramResponse | undefined>>
}

export const AffiliateFormContext = createContext<
  AffiliateFormContextType | undefined
>(undefined)
