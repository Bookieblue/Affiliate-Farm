import React, { FC } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { FormLabel } from '@/components/ui/form';

interface RadioGroupFormProps {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  id?: string;
}

const RadioGroupForm: FC<RadioGroupFormProps> = ({
  name,
  label,
  value,
  onChange,
  id,
}) => {
  return (
    <div className="space-y-3">
      <FormLabel className="text-cream-50 regular-16" htmlFor={id || name}>
        {label}
      </FormLabel>
      <RadioGroup
        onValueChange={onChange}
        defaultValue={value}
        className="flex space-y-1"
      >
        <div className="flex items-center space-x-3 space-y-0">
          <RadioGroupItem value="yes" id={`${id || name}-yes`} />
          <label
            htmlFor={`${id || name}-yes`}
            className="font-normal text-cream-50"
          >
            Yes
          </label>
        </div>
        <div className="flex items-center space-x-3 space-y-0">
          <RadioGroupItem value="no" id={`${id || name}-no`} />
          <label
            htmlFor={`${id || name}-no`}
            className="font-normal text-cream-50"
          >
            No
          </label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default RadioGroupForm;
