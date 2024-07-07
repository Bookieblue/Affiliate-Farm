import { backendFetch } from '@/services/backendFetch'
import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { AFFILIATE_QUERY_KEY } from '.'

export const useGetAllAffilates = (): UseQueryResult<any, Error> => {
  const query_options = {
    staleTime: Infinity,
    refetchOnMount: 'always',
  }

  const fetch = () =>
    backendFetch({
      endpoint: `affiliate/?page=1&limit=3`,
    })

  return useQuery({
    queryKey: [AFFILIATE_QUERY_KEY, 'All'],
    queryFn: () => fetch(),
    staleTime: Infinity,
    refetchOnMount: 'always',
  })
}
