"use client"

import { Control } from "react-hook-form"


import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


// const FormSchema = z.object({
//   type: z.enum(["no", "yes"], {
//     required_error: "You need to select a notification type.",
//   }),
// })

interface radioProps{
    control: Control<any>;
    name: string;
    label: string;
    id?: string;
  }

export function RadioGroupForm({name, label, control, id} : radioProps) {

  return (
        <FormField
         control={control}
         name={name}
          render={({ field }) => (
            <FormItem className="space-y-3 ">
              <FormLabel className="text-cream-50 regular-16">{label}</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex  space-y-1"
                >
                 <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="yes" />
                    </FormControl>
                    <FormLabel htmlFor={id || name} className="font-normal text-cream-50">
                     Yes
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value='no' />
                    </FormControl>
                    <FormLabel htmlFor={id || name} className="font-normal text-cream-50">
                      No
                    </FormLabel>
                  </FormItem>
                 
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
  )
}
