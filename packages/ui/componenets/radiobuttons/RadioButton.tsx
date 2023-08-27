import React from 'react';

interface RadioButtonProps {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
}

function RadioButton({
  name,
  value,
  label,
  checked,
  disabled,
}: RadioButtonProps) {
  return (
    <>
      <label
        className={`inline-flex items-center ${
          disabled ? 'cursor-not-allowed opacity-50' : ''
        }`}
      >
        <input
          type='radio'
          className='w-5 h-5 mr-4 bg-theme-main'
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
        />
        <span className='text-base font-normal leading-5.5 align-left tracking-normal'>
          {label}
        </span>
      </label>
    </>
  );
}

export default RadioButton;
