import React, { FC } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';


interface OptionType {
  value: string;
  label: string;
}

interface SelectInputProps {
  name: string;
  label?: string;
  placeholder: string;
  options: OptionType[];
  id?: string;
  value: string;
  onChange: (value: string) => void;
}

const SelectInput: FC<SelectInputProps> = ({
  name,
  label,
  placeholder,
  options,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="text-cream-50 regular-16">
          {label}
        </label>
      )}
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id={id || name} className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent position="popper" aria-labelledby={name} className="w-fit h-fit">
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
    </div>
  );
};

export default SelectInput;
