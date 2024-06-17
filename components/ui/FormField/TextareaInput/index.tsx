import React, { FC } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Control } from 'react-hook-form';
import { Textarea } from '../../textarea';

interface TextInputProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  error?: string;
  id?: string;
  className?: string;
}

const TextInput: FC<TextInputProps> = ({
  control,
  name,
  label,
  placeholder,
  id,
  className,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel htmlFor={id || name} className='text-cream-50'>{label}</FormLabel>
          <FormControl>
          <Textarea placeholder={placeholder} {...field} className={className} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextInput;
