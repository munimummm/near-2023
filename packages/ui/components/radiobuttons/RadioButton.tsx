import { useState } from 'react';

interface RadioButtonProps {
  name: string;
  value?: string;
  label?: string;
  disabled?: boolean;
  labelType?: 'notext' | 'singletext' | 'multipletext';
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
    <label
      className={`inline-flex items-start cursor-pointer ${
        disabled ? 'cursor-not-allowed opacity-50' : ''
      }`}
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
        <span className='text-base font-normal items-start leading-5.5 align-left tracking-normal'>
          {label}
        </span>
      )}
      {labelType === 'multipletext' && (
        <div className='flex flex-col items-start'>
          <span className='text-[16px] font-normal leading-5 align-left tracking-normal'>
            {label}
          </span>
          <span className='text-sm text-left text-[#626262] mt-4'>
            {multipleLabel}
          </span>
        </div>
      )}
    </label>
  );
}

export default RadioButton;
