import React, { FC } from 'react';

interface TextareaInputProps {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id?: string;
  className?: string;
}

const TextareaInput: FC<TextareaInputProps> = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  id,
  className,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={id || name} className="text-cream-50 regular-16">
        {label}
      </label>
      <textarea
        id={id || name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 bg-transparent border border-gray-20 rounded-md text-cream-50 placeholder-gray-10 outline-none ${className}`}
        aria-label={label}
      />
    </div>
  );
};

export default TextareaInput;
