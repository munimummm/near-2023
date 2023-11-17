'use client';

import IconError from '../../assets/icons/textinput/icon_error.svg';
import IconSuccess from '../../assets/icons/textinput/icon_success.svg';
import IconSearch from '../../assets/icons/textinput/icon_search.svg';
import IconCancel from '../../assets/icons/textinput/icon_cancel.svg';
import { useController, UseControllerProps } from 'react-hook-form';
import { Icon } from '../icon/Icon';
import { useState } from 'react';

type WidthType = Record<number, string>;

export interface TextInputProps extends UseControllerProps {
  placeholder?: string;
  state?: 'default' | 'enabled' | 'error' | 'success' | 'search' | 'password';
  borderRadius?: boolean;
  size?: 'lg' | 'md' | 'sm';
  isDisabled?: boolean;
  type?: string;
  width?: number;
}

const CommonStyle =
  'w-full h-full pl-5 pr-10 rounded-[0.25rem] focus-outline-4 active:bg-gray-3 active:text-[#333333] ';

const TextInputStyle = {
  default:
    'font-normal bg-white text-[#C8C8C8] border-text-gray  border outline-text-gray focus:outline-theme-main focus:bg-white focus:text-[#333333]',
  enabled:
    'font-normal bg-gray-3 text-[#C8C8C8] focus:outline-theme-main focus:bg-white focus:text-[#333333]',
  error: 'border-text-red border-2 focus:outline-text-red',
  success: 'border-[#00AE46] border-2  focus:outline-[#00AE46]',
  search: 'pl-[3.25rem] active:pr-10 focus:',
  password:
    'font-normal bg-white text-[#C8C8C8] border-text-gray  border outline-text-gray focus:outline-theme-main focus:bg-white focus:text-[#333333]',
};

const InputSize = {
  lg: `h-10 text-base`,
  md: `h-8 text-sm`,
  sm: 'h-6 text-xs',
};
const WidthSize: WidthType = {
  640: 'w-[40rem]',
  720: 'w-[45rem]',
  439: 'w-[27.4375rem]',
  380: 'w-[23.75rem]',
  420: 'w-[26.25rem]',
  600: 'w-[37.5rem]',
  416: 'w-[26rem]',
  349: 'w-[21.8125rem]',
};

function TextInput({
  placeholder,
  type = 'text',
  state = 'enabled',
  borderRadius = false,
  size = 'md',
  width = 349,
  isDisabled = false,
  ...props
}: TextInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { field } = useController(props);

  const passwordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const passwordType =
    state === 'password' && isPasswordVisible ? 'text' : 'password';

  const stateIcon = (state: string) => {
    switch (state) {
      case 'success':
        return <IconSuccess />;
      case 'error':
        return <IconError stroke='#CC3B3B' />;
      case 'search':
        return <IconSearch />;
      case 'password':
        return (
          <button type='button' onClick={passwordVisible}>
            {isPasswordVisible ? (
              <Icon icon='ic_visible' sizes='sm' state='mild' />
            ) : (
              <Icon icon='ic_hidden' sizes='sm' state='mild' />
            )}
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`relative ${InputSize[size]} ${WidthSize[width]} `}>
      <input
        {...field}
        type={state === 'password' ? passwordType : type}
        placeholder={placeholder}
        className={`
        ${CommonStyle}
        ${TextInputStyle[state]}     
        ${borderRadius ? 'rounded-[3.75rem]' : ''}
        `}
        disabled={isDisabled}
      />
      <div
        className={`absolute inset-y-0 flex items-center  
        ${state === 'search' ? 'left-4' : 'right-4'}`}
      >
        {stateIcon(state)}
      </div>
      {field.value && state === 'search' && (
        <button
          className='absolute inset-y-0 flex items-center right-4'
          onClick={() => field.onChange('')}
        >
          <IconCancel />
        </button>
      )}
    </div>
  );
}
export default TextInput;
