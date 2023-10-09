'use client';

import IconError from '../../assets/icons/textinput/icon_error.svg';
import IconSuccess from '../../assets/icons/textinput/icon_success.svg';
import IconSearch from '../../assets/icons/textinput/icon_search.svg';
import IconCancel from '../../assets/icons/textinput/icon_cancel.svg';
import { useState } from 'react';

export interface TextInputProps {
  placeholder?: string;
  state: 'enabled' | 'error' | 'success' | 'disabled' | 'search';
  borderRadius?: boolean;
  size?: 'lg' | 'md' | 'sm' | 'xs';
}

const CommonStyle =
  'w-full h-full pl-5 pr-10 rounded-[4px] focus-outline-4 active:bg-gray-3 active:text-[#333333] f ';

const TextInputStyle = {
  enabled:
    'font-normal bg-gray-3 text-[#C8C8C8] focus:outline-theme-main focus:bg-white focus:text-[#333333]',
  error: 'border-text-red border-2 focus:outline-text-red',
  success: 'border-[#00AE46] border-2  focus:outline-[#00AE46]',
  disabled: 'bg-[#F0F0F0] text-[#C8C8C8]',
  search: 'pl-[52px] active:pr-10 focus:',
};

const InputSize = {
  lg: 'w-[403px] h-[48px] text-base',
  md: 'w-[380px] h-[40px] text-sm',
  sm: 'w-[416px] h-[32px] text-sm',
  xs: 'w-[349px] h-[32px] text-sm',
};

function TextInput({
  placeholder,
  state,
  borderRadius = false,
  size = 'sm',
}: TextInputProps) {
  const [text, setText] = useState('');

  const stateIcon = () => {
    switch (state) {
      case 'success':
        return <IconSuccess />;
      case 'error':
        return <IconError stroke='#CC3B3B' />;
      case 'search':
        return <IconSearch />;
      default:
        return null;
    }
  };

  const handleCancelClick = () => {
    setText('');
  };

  return (
    <div className={`relative ${InputSize[size]} `}>
      <input
        type='text'
        value={text}
        placeholder={placeholder}
        className={`
        ${CommonStyle}
        ${TextInputStyle[state]}     
        ${borderRadius ? 'rounded-[60px]' : ''}
        `}
        disabled={state === 'disabled'}
        onChange={(e) => setText(e.target.value)}
      />
      <div
        className={`absolute inset-y-0 flex items-center 
        ${state === 'search' ? 'left-4' : 'right-4'}`}
      >
        {stateIcon()}
      </div>
      {text && state === 'search' && (
        <button
          className='absolute inset-y-0 flex items-center right-4'
          onClick={handleCancelClick}
        >
          <IconCancel />
        </button>
      )}
    </div>
  );
}

export default TextInput;
