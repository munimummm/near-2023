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
  state?: 'enabled' | 'error' | 'success' | 'search' | 'password';
  borderRadius?: boolean;
  size?: 'lg' | 'md' | 'sm';
  isDisabled?: boolean;
  type?: string;
  width?: number;
}

const CommonStyle =
  'w-full h-full pl-5 pr-10 rounded-[4px] focus-outline-4 active:bg-gray-3 active:text-[#333333] ';

const TextInputStyle = {
  enabled:
    'font-normal bg-gray-3 text-[#C8C8C8] focus:outline-theme-main focus:bg-white focus:text-[#333333]',
  error: 'border-text-red border-2 focus:outline-text-red',
  success: 'border-[#00AE46] border-2  focus:outline-[#00AE46]',
  search: 'pl-[52px] active:pr-10 focus:',
  password: '',
};

const InputSize = {
  lg: `h-10 text-base`,
  md: `h-8 text-sm`,
  sm: 'h-6 text-xs',
};
const WidthSize: WidthType = {
  640: 'w-[640px]',
  720: 'w-[720px]',
  439: 'w-[439px]',
  380: 'w-[380px]',
  420: 'w-[420px]',
  600: 'w-[600px]',
  416: 'w-[416px]',
  349: 'w-[349px]',
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
          <button onClick={passwordVisible}>
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
    <div className={`relative ${InputSize[size]} ${WidthSize[width]}`}>
      <input
        {...field}
        type={state === 'password' ? passwordType : type}
        placeholder={placeholder}
        className={`
        ${CommonStyle}
        ${TextInputStyle[state]}     
        ${borderRadius ? 'rounded-[60px]' : ''}
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

//인풋사이즈
// 601 40
// 720 40
// 439 40
// 380 40
// 420 40
// 600 40
// 416 32
// 349 32
