import React, { FC } from 'react';
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';


interface TextInputProps {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password';
  id?: string;
  className?: string;
}

const TextInput: FC<TextInputProps> = ({
  type = 'text',
  name,
  label,
  placeholder,
  value,
  onChange,
  id,
  className,
}) => {
  return (
    <FormItem className="w-full">
      <FormLabel className="text-cream-50 regular-16" htmlFor={id || name}>
        {label}
      </FormLabel>
      <FormControl>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={className}
          type={type}
          aria-label={label}
          id={id || name}
        />
      </FormControl>
    </FormItem>
  );
};

export default TextInput;
