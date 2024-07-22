import { backendFetch } from '@/services/backendFetch'
import { useMutation, useQuery } from '@tanstack/react-query'

import api from '@/services/api'
import { PROGRAM_QUERY_KEY } from '.'
import { ProgramResponse } from './type'
import { convertAffiliatePayload } from '@/lib/helpers/convertProgramPayload'

export const useGetPrograms = () => {
  const fetch = async (): Promise<ProgramResponse[]> =>
    backendFetch({
      endpoint: `affiliate/get-no-ads/`,
    })

  return useQuery({
    queryKey: [PROGRAM_QUERY_KEY],
    queryFn: () => fetch(),
    staleTime: Infinity,
    refetchOnMount: 'always',
  })
}

export const useCreateProgram = (data: any) => {
  const formData = new FormData()

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (key === 'logo' && data[key] instanceof File) {
        formData.append(key, data[key])
      } else {
        formData.append(key, data[key])
      }
    }
  }
  const create = async () => {
    const request = api.post(`affiliate/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const response = await request
    return response['data']
  }

  const mutation = useMutation({
    mutationFn: () => create(),
  })

  return mutation
}
