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

interface CreateCategoryParams {
  name: string
  faq: string
}

export const useCreateCategory = () => {
  const create = async (data: CreateCategoryParams) => {
    const response = await api.post(`category/`, data)
    return response.data
  }

  return useMutation({
    mutationFn: (data: CreateCategoryParams) => create(data),
  })
}

export const useDeleteCategory = () => {
  const deleteCategory = async (categoryId: string) => {
    await backendFetch({
      endpoint: `category/${categoryId}`,
      method: 'DELETE',
    })
  }

  const mutation = useMutation({
    mutationFn: (categoryId: string) => deleteCategory(categoryId),
  })

  return mutation
}
