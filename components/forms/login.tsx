'use client'
import React, { useEffect } from 'react'
import { Form } from '../ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '../ui/button'
import TextInput from '../ui/FormField/TextInput/index'
import { useRouter } from 'next/navigation'
import { loginData, useLogin } from '@/services/models/hooks/auth/hook'

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Incorrect email address'),
  password: z.string().min(0, 'Password is required'), //TODO look into this min later
})

const LoginForm = () => {
  const router = useRouter()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [data, setData] = React.useState<loginData>({ email: '', password: '' })

  const { mutate, isPending, isSuccess, data: loginData } = useLogin(data)

  useEffect(() => {
    if (isSuccess) {
      sessionStorage.setItem('token', loginData.access)
      router.push('/ads-listing')
    }
  }, [isSuccess, router, loginData])

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    console.log(data)
    const { email, password } = data

    if (email && password) {
      setData({ email, password })
      mutate()
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='mt-5 space-y-4'>
        <TextInput
          control={form.control}
          name='email'
          label='Email'
          placeholder='admin@affiliatefarm@gmail.com'
          type='email'
        />
        <TextInput
          control={form.control}
          name='password'
          label='Password'
          placeholder='XXXXXXXXXXX'
          type='password'
        />
        <div className='w-full '>
          <Button type='submit' className='w-full'>
            {isPending ? 'Loading...' : 'Sign in'}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default LoginForm
