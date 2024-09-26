import { backendFetch } from '@/services/backendFetch';
import { useMutation, useQuery } from '@tanstack/react-query';

import api from '@/services/api';
import { PROGRAM_QUERY_KEY } from '.';
import { ProgramResponse } from './type';
import { getCookieValue } from '@/services/cookie';

export interface updateProgram {
  programCode: string;
  data: any;
}

export interface bulkUpdate {
  programCodes: string[];
  categoryCode: string;
}

export const useGetPrograms = () => {
  const fetch = async (): Promise<ProgramResponse[]> =>
    backendFetch({
      endpoint: `affiliate/get-no-ads/`,
    });

  return useQuery({
    queryKey: [PROGRAM_QUERY_KEY],
    queryFn: () => fetch(),
    staleTime: Infinity,
    refetchOnMount: 'always',
  });
};

export const useCreateProgram = (data: any) => {
  const formData = new FormData();

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (key === 'logo' && data[key] instanceof File) {
        formData.append(key, data[key]);
      } else {
        formData.append(key, data[key]);
      }
    }
  }

  const create = async () => {
    const request = api.post(`affiliate/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const response = await request;
    return response['data'];
  };

  const mutation = useMutation({
    mutationFn: () => create(),
  });

  return mutation;
};

export const useCreateBulkProgram = () => {
  const create = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const request = api.post(`affiliate/upload-programs/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const response = await request;
    return response['data'];
  };

  const mutation = useMutation({
    mutationFn: (file: File) => create(file),
  });

  return mutation;
};

export const useUpdateProgram = () => {
  const token = getCookieValue('token');

  const update = async ({ programCode, data }: updateProgram) => {
    const formData = new FormData();

    if (!data.logo) delete data['logo'];

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (key === 'logo' && data[key] instanceof File) {
          formData.append(key, data[key]);
        } else {
          formData.append(key, data[key]);
        }
      }
    }

    const request = api.patch(`affiliate/${programCode}/`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    const response = await request;
    return response['data'];
  };

  const mutation = useMutation({
    mutationFn: ({ programCode, data }: updateProgram) =>
      update({ programCode, data }),
  });

  return mutation;
};

export const useUpdatebulkProgramCatgory = () => {
  const token = getCookieValue('token');

  const update = async ({ programCodes, categoryCode }: bulkUpdate) => {
    const request = api.patch(
      `affiliate/updates-programs-categories/`,
      { categoryCode, programCodes },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const response = await request;
    return response['data'];
  };

  const mutation = useMutation({
    mutationFn: ({ programCodes, categoryCode }: bulkUpdate) =>
      update({ programCodes, categoryCode }),
  });

  return mutation;
};

export const useDeleteProgram = (codes: string[]) => {
  const token = getCookieValue('token');
  const doDelete = async () => {
    const request = api.delete(`affiliate/delete-programs/`, {
      data: { codes },
      headers: { Authorization: `Bearer ${token}` },
    });
    const response = await request;
    return response['data'];
  };

  const mutation = useMutation({
    mutationFn: () => doDelete(),
  });

  return mutation;
};
