import axios from 'axios'

export const baseURL = 'http://localhost:8000/'

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const setBearerToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default api
