import { backendFetch } from '@/services/backendFetch'
import { useMutation, useQuery } from '@tanstack/react-query'
import { CATEGORY_QUERY_KEY } from '.'
import { CategoryResponse } from './type'
import api from '@/services/api'

export const useGetCategories = () => {
  const fetch = async (): Promise<CategoryResponse[]> =>
    backendFetch({
      endpoint: `category/`,
    })

  return useQuery({
    queryKey: [CATEGORY_QUERY_KEY],
    queryFn: () => fetch(),
    staleTime: Infinity,
    refetchOnMount: 'always',
  })
}

export const useCreateCategory = (name: string) => {
  const create = async () => {
    const request = api.post(`category/`, { name })
    const response = await request
    return response['data']
  }

  const mutation = useMutation({
    mutationFn: () => create(),
  })

  return mutation
}
