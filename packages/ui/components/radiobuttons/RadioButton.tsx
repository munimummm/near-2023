'use client';

import TextInput from '../textinput/TextInput';
import { useController, Control } from 'react-hook-form';

interface RadioButtonProps {
  name: string;
  value?: string;
  label?: string;
  isDisabled?: boolean;
  labelType?: 'notext' | 'singletext' | 'multipletext' | 'textinput';
  multipleLabel?: string;
  control?: Control;
}

function RadioButton({
  name,
  control,
  value,
  label,
  isDisabled,
  labelType = 'singletext',
  multipleLabel,
}: RadioButtonProps) {
  const {
    field: { onChange, value: selectedValue },
  } = useController({
    name,
    control,
  });

  const isChecked = selectedValue === value;

  return (
    <div className='flex items-center justify-center'>
      <label
        className={`inline-flex 
        ${labelType === 'multipletext' ? 'items-start' : ' items-center'}
          cursor-pointer ${isDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        <input
          type='radio'
          className='hidden'
          name={name}
          value={value}
          checked={isChecked}
          disabled={isDisabled}
          onChange={onChange}
        />
        <span
          className={`w-5 h-5 mr-4 border rounded-full ${
            isChecked
              ? 'border-theme-main border-[6px]'
              : `border-[#797979] ${isDisabled ? 'border-[6px]' : ''}`
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
                isDisabled={!isChecked || isDisabled}
                borderRadius
                name={`${name}_textInput`}
              />
            </div>
          </div>
        )}
      </label>
    </div>
  );
}

export default RadioButton;
