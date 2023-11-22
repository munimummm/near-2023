'use client';

import IconError from '../../assets/icons/textinput/icon_error.svg';
import IconSuccess from '../../assets/icons/textinput/icon_success.svg';
import IconSearch from '../../assets/icons/textinput/icon_search.svg';
import IconCancel from '../../assets/icons/textinput/icon_cancel.svg';
import { useController, UseControllerProps } from 'react-hook-form';
import { Icon } from '../icon/Icon';
import { useState } from 'react';
import { clsx } from 'clsx';

export interface TextInputProps extends UseControllerProps {
  placeholder?: string;
  state?: 'default' | 'enabled' | 'error' | 'success' | 'search' | 'password';
  borderRadius?: boolean;
  isDisabled?: boolean;
  type?: string;
  className?: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
}

const CommonStyle =
  'p-5 py-2 text-sm rounded focus-outline-4 active:bg-gray-3 active:text-[#333333] w-full ';

const TextInputStyle = {
  default:
    'font-normal bg-white text-[#C8C8C8] border-text-gray  border outline-text-gray focus:outline-theme-main focus:bg-white focus:text-[#333333]',
  enabled:
    'font-normal bg-gray-3 text-[#C8C8C8] focus:outline-theme-main focus:bg-white focus:text-[#333333]',
  error: 'pr-10 border-text-red border-2 focus:outline-text-red',
  success: 'pr-10 border-[#00AE46] border-2  focus:outline-[#00AE46]',
  search: 'pr-10 pl-[3.25rem]  active:pr-10 focus:',
  password:
    'pr-10 font-normal bg-white text-[#C8C8C8] border-text-gray  border outline-text-gray focus:outline-theme-main focus:bg-white focus:text-[#333333]',
};

function TextInput({
  placeholder,
  type = 'text',
  state = 'enabled',
  borderRadius = false,
  isDisabled = false,
  className = '',
  inputProps,
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
    <div className={`relative w-full`}>
      <input
        {...inputProps}
        {...field}
        type={state === 'password' ? passwordType : type}
        placeholder={placeholder}
        className={clsx(
          CommonStyle,
          TextInputStyle[state],
          `${borderRadius ? 'rounded-[3.75rem]' : ''}`,
          className,
        )}
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
// 이미지 컴포넌트, 텍스트 인풋 컴포넌트 수정
