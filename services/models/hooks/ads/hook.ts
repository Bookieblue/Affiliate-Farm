import { backendFetch } from '@/services/backendFetch'
import { useMutation, useQuery } from '@tanstack/react-query'

import api from '@/services/api'
import { ADS_QUERY_KEY } from '.'
import { AdsResponse } from './type'

export const useGetAds = () => {
  const fetch = async (): Promise<AdsResponse[]> =>
    backendFetch({
      endpoint: `ads/?no_paginate=true`,
    })

  return useQuery({
    queryKey: [ADS_QUERY_KEY],
    queryFn: () => fetch(),
    staleTime: Infinity,
    refetchOnMount: 'always',
  })
}

export const useCreateAds = (name: string) => {
  const create = async () => {
    const request = api.post(`ads/`, { name })
    const response = await request
    return response['data']
  }

  const mutation = useMutation({
    mutationFn: () => create(),
  })

  return mutation
}
