import { backendFetch } from '@/services/backendFetch'
import { useMutation, useQuery } from '@tanstack/react-query'

import api from '@/services/api'
import { PROGRAM_QUERY_KEY } from '.'
import { ProgramResponse } from './type'

export interface updateProgram {
  programCode: string
  niche: any
}

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
export const useUpdateProgram = ({ programCode, niche }: updateProgram) => {
  const update = async () => {
    const request = api.patch(`affiliate/${programCode}/`, { niche })
    const response = await request
    return response['data']
  }

  const mutation = useMutation({
    mutationFn: () => update(),
  })

  return mutation
}

export const useDeleteProgram = (codes: string[]) => {
  const token = sessionStorage.getItem('token')
  const doDelete = async () => {
    const request = api.delete(`affiliate/delete-programs/`, {
      data: { codes },
      headers: { Authorization: `Bearer ${token + '132'}` },
    })
    const response = await request
    return response['data']
  }

  const mutation = useMutation({
    mutationFn: () => doDelete(),
  })

  return mutation
}
