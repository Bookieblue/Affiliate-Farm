import React, { FC } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Control } from 'react-hook-form';

interface TextInputProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  error?: string;
  type?: 'text' | 'email' | 'password';
  id?: string;
  className?: string;
}

const TextInput: FC<TextInputProps> = ({
  type = 'text',
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
          <FormLabel className="text-cream-50 regular-16" htmlFor={id || name}>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className={className}
              type={type}
              aria-label={label}
              id={id || name}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextInput;
