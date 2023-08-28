import React from 'react';

interface TextInputProps {
  placeholder?: string;
  state: 'enabled' | 'error' | 'success' | 'disabled';
}

function TextInput({ placeholder, state }: TextInputProps) {
  const commonStyle =
    'w-full h-full pl-5 pr-10 rounded-[4px] active:bg-gray-3 active:text-[#333333]';

  const TextInputStyle = {
    enabled: 'bg-gray-3 text-[#C8C8C8] focus:bg-white focus:text-[#333333]',
    error: 'border-text-red border-2 focus:border-text-red',
    success: 'border-[#00AE46] border-2 focus:border-[#00AE46]',
    disabled: 'bg-[#F0F0F0] text-[#C8C8C8]',
  };
  const stateIcon = () => {
    switch (state) {
      case 'success':
        return (
          <div className='absolute text-green-500 transform -translate-y-1/2 right-3 top-1/2' />
        );
      case 'error':
        return (
          <div className='absolute text-red-500 transform -translate-y-1/2 right-3 top-1/2' />
        );
      default:
        return null;
    }
  };

  return (
    <div className='relative w-[380px] h-10'>
      <input
        type='text'
        placeholder={placeholder}
        className={`${commonStyle} ${TextInputStyle[state ?? 'enabled']}`}
        disabled={state === 'disabled'}
      />
      {stateIcon()}
    </div>
  );
}

export default TextInput;
