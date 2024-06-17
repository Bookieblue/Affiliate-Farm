"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Control, useForm } from "react-hook-form"
import { z } from "zod"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"


const FormSchema = z.object({
  mobile: z.boolean().default(false).optional(),
})

interface checkboxProps{
    control: Control<any>;
    name: string;
    label: string;
    id?: string;
  }

export function CheckBox({name, label, control, id} : checkboxProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mobile: true,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel htmlFor={id || name} className='text-cream-50'>
                  {label}
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
