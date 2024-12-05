import { backendFetch } from '@/services/backendFetch';
import { useMutation, useQuery } from '@tanstack/react-query';
import { CATEGORY_QUERY_KEY, OTHER_CATEGORY_QUERY_KEY } from '.';
import { CategoryResponse } from './type';
import api from '@/services/api';
import { getCookieValue } from '@/services/cookie';

interface updateCategory {
  categoryCode: string;
  data: any;
}

export const useGetCategories = () => {
  const fetch = async (): Promise<CategoryResponse[]> =>
    backendFetch({
      endpoint: `category/`,
    });

  return useQuery({
    queryKey: [CATEGORY_QUERY_KEY],
    queryFn: () => fetch(),
    staleTime: Infinity,
    refetchOnMount: 'always',
  });
};

export const useGetOtherCategories = (code: string) => {
  const fetch = async (): Promise<CategoryResponse[]> =>
    backendFetch({
      endpoint: `category/other-category/${code}/`,
    });

  return useQuery({
    queryKey: [OTHER_CATEGORY_QUERY_KEY],
    queryFn: () => fetch(),
    staleTime: Infinity,
    refetchOnMount: 'always',
  });
};

interface CreateCategoryParams {
  name: string;
  faq: string;
}

export const useCreateCategory = () => {
  const token = getCookieValue('token');
  const create = async (data: CreateCategoryParams) => {
    const response = await api.post(`category/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  return useMutation({
    mutationFn: (data: CreateCategoryParams) => create(data),
  });
};

export const useUpdateCategory = () => {
  const token = getCookieValue('token');

  const update = async ({ categoryCode, data }: updateCategory) => {
    const request = api.patch(`category/${categoryCode}/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await request;
    return response['data'];
  };

  const mutation = useMutation({
    mutationFn: ({ categoryCode, data }: updateCategory) =>
      update({ categoryCode, data }),
  });

  return mutation;
};

export const useDeleteCategory = () => {
  const token = getCookieValue('token');
  const doDelete = async (codes: string[]) => {
    const request = api.delete(`category/delete-category/`, {
      data: { codes },
      headers: { Authorization: `Bearer ${token}` },
    });
    const response = await request;
    return response['data'];
  };

  const mutation = useMutation({
    mutationFn: (codes: string[]) => doDelete(codes),
  });

  return mutation;
};
