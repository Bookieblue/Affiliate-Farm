import axios, { AxiosRequestConfig, Method } from 'axios'

export const BASE: string = 'https://api.houseofose.com/'

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

interface BackendFetchParams {
  endpoint: string
  method?: Method
  body?: Record<string, any> | null
  customInit?: AxiosRequestConfig
  omitToken?: boolean
  token?: string
}

export const backendFetch = ({
  endpoint,
  method = 'GET',
  body = null,
  customInit = {},
  omitToken = false,
  token = '',
}: BackendFetchParams): Promise<any> => {
  const customHeaders: Record<string, any> | null = customInit.headers || {}
  if (token && !omitToken) {
    customHeaders.Authorization = `Bearer ${token}`
  }

  const init: AxiosRequestConfig = {
    ...customInit,
    method,
    headers: { ...defaultHeaders, ...customHeaders },
  }

  if (body) {
    init.data = JSON.stringify(body)
  }

  return axios
    .request({
      baseURL: BASE,
      url: endpoint,
      ...init,
    })
    .then((resp) => resp.data)
}
