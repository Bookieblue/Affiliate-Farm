import api from '@/services/api'
import { useMutation } from '@tanstack/react-query'

export interface loginData {
  email: string
  password: string
}

export const useLogin = ({ email, password }: loginData) => {
  const login = async () => {
    const request = api.post(`api/token/`, { username: email, password })
    const response = await request
    return response['data']
  }

  const mutation = useMutation({
    mutationFn: () => login(),
  })

  return mutation
}
