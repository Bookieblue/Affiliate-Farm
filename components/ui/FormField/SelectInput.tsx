import React, { FC } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Control } from 'react-hook-form';

interface OptionType {
  value: any;
  label: string;
}

interface SelectInputProps {
  control ?: Control<any>;
  name: string;
  label?: string;
  placeholder: string;
  error?: string;
  options: OptionType[];
  id?: string;
}

const SelectInput: FC<SelectInputProps> = ({
  control,
  name,
  label,
  placeholder,
  options,
  id,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel htmlFor={name} className="text-cream-50 regular-16">{label}</FormLabel>
          <Select onValueChange={field.onChange} {...field}>
            <FormControl>
              <SelectTrigger id={id || name} className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent position="popper" aria-labelledby="Country" className='w-fit h-fit'>
              <ScrollArea className="w-full h-fit px-4">
                {options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="cursor-pointer regular-16"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectInput;
