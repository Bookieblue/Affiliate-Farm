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

interface CheckboxProps {
  control: Control<any>;
  name: string;
  label: string;
  id?: string;
}

export function CheckBox({ name, label, control, id }: CheckboxProps) {
  return (
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
            <FormLabel htmlFor={id || name} className="text-cream-50">
              {label}
            </FormLabel>
          </div>
        </FormItem>
      )}
    />
  )
}
