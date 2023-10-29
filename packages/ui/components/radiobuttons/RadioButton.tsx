'use client';
import { useState } from 'react';
import TextInput from '../textinput/TextInput';

interface RadioButtonProps {
  name: string;
  value?: string;
  label?: string;
  disabled?: boolean;
  labelType?: 'notext' | 'singletext' | 'multipletext' | 'textinput';
  multipleLabel?: string;
  initialSelected?: string;
}

function RadioButton({
  name,
  value,
  label,
  disabled,
  labelType = 'singletext',
  multipleLabel,
  initialSelected = '',
}: RadioButtonProps) {
  const [selectedValue, setSelectedValue] = useState(initialSelected);

  const selectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const isChecked = selectedValue === value;

  return (
    <div className='flex items-center justify-center'>
      <label
        className={`inline-flex 
        ${labelType === 'multipletext' ? 'items-start' : ' items-center'}
          cursor-pointer ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        <input
          type='radio'
          className='hidden'
          name={name}
          value={value}
          checked={isChecked}
          disabled={disabled}
          onChange={selectChange}
        />
        <span
          className={`w-5 h-5 mr-4 border rounded-full ${
            isChecked
              ? 'border-theme-main border-[6px]'
              : `border-[#797979] ${disabled ? 'border-[6px]' : ''}`
          }`}
        ></span>
        {labelType === 'singletext' && (
          <span className='text-base font-normal items-center justify-center leading-5.5 align-left tracking-normal'>
            {label}
          </span>
        )}
        {labelType === 'multipletext' && (
          <div className='flex flex-col items-start'>
            <span className='text-base font-normal tracking-normal align-left'>
              {label}
            </span>
            <span className='text-sm text-left font-normal text-[#626262] mt-0.5'>
              {multipleLabel}
            </span>
          </div>
        )}
        {labelType === 'textinput' && (
          <div className='flex items-center justify-center'>
            <span className='items-center justify-center text-base font-normal tracking-normal align-left mr-[19px]'>
              {label}
            </span>
            <div className='flex items-center justify-start'>
              <TextInput
                state={isChecked ? 'enabled' : 'disabled'}
                borderRadius
                width='163px'
                height='sm'
              />
            </div>
          </div>
        )}
      </label>
    </div>
  );
}

export default RadioButton;
