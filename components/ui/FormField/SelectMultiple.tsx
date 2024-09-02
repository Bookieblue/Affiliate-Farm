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
  SelectTrigger,
} from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Control } from 'react-hook-form';
import { CheckBox } from './CheckBox'; // Ensure correct path

interface OptionType {
  value: any;
  label: string;
}

interface SelectInputProps {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder: string;
  error?: string;
  options: OptionType[];
  id?: string;
  selectedValues: any[];
  onChange: (selectedValues: any[]) => void;
}

const SelectMutipleInput: FC<SelectInputProps> = ({
  control,
  name,
  label,
  placeholder,
  options,
  id,
  selectedValues,
  onChange,
}) => {
  const handleSelectChange = (value: any) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];
    onChange(updatedValues);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          {label && (
            <FormLabel htmlFor={name} className="text-cream-50 regular-16">
              {label}
            </FormLabel>
          )}
          <Select>
            <FormControl>
              <SelectTrigger id={id || name} className="w-full">
                <div className="overflow-hidden whitespace-nowrap text-ellipsis">
                  {selectedValues.length > 0 ? (
                    selectedValues.map((value, index) => {
                      const selectedOption = options.find(
                        (option) => option.value === value
                      );
                      return (
                        <span key={index} className="mr-2 bg-cream-50 p-2 text-black-30 rounded-lg">
                          {selectedOption?.label}
                        </span>
                      );
                    })
                  ) : (
                    <span className="text-cream-50 mb-10">{placeholder}</span>
                  )}
                </div>
              </SelectTrigger>
            </FormControl>
            <SelectContent
              position="popper"
              aria-labelledby={name}
              className="w-fit h-fit"
            >
              <ScrollArea className="w-full h-fit px-4">
                {options.map((option) => (
                  <div
                    key={option.value}
                    className="cursor-pointer regular-16 my-3"
                    onClick={() => handleSelectChange(option.value)}
                  >
                    <CheckBox
                      name={option.value}
                      label={option.label}
                      control={control}
                      id={option.value}
                    />
                  </div>
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

export default SelectMutipleInput;
