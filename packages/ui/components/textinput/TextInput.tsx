import IconError from '../../assets/icons/textinput/icon_error.svg';
import IconSuccess from '../../assets/icons/textinput/icon_success.svg';
import IconSearch from '../../assets/icons/textinput/icon_search.svg';
import IconCancel from '../../assets/icons/textinput/icon_cancel.svg';
import { useState } from 'react';

type InputType = {
  [key: string]: string;
};

export interface TextInputProps {
  placeholder?: string;
  state: 'enabled' | 'error' | 'success' | 'disabled' | 'search';
  borderRadius?: boolean;
  size?: 'lg' | 'sm';
}
const CommonStyle =
  'w-full h-full pl-5 pr-10 rounded-[4px] focus-outline-4 active:bg-gray-3 active:text-[#333333] ';
const TextInputStyle = {
  enabled:
    'bg-gray-3 text-[#C8C8C8] focus:outline-theme-main focus:bg-white focus:text-[#333333]',
  error: 'border-text-red border-2 focus:outline-text-red',
  success: 'border-[#00AE46] border-2  focus:outline-[#00AE46]',
  disabled: 'bg-[#F0F0F0] text-[#C8C8C8]',
  search: 'pl-[52px] active:pr-10',
};
const InputSize: InputType = {
  lg: 'w-[403px] h-[48px]',
  sm: 'w-[380px] h-[40px]',
};

function TextInput({
  placeholder,
  state,
  borderRadius = false,
  size,
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  // const [text, setText] = useState('');

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

  return (
    <div className='relative w-[380px] h-10  '>
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type='text'
        placeholder={placeholder}
        className={` ${CommonStyle}
        ${TextInputStyle[state ?? 'enabled']}
        ${InputSize[size ?? 'sm']}
        ${borderRadius ? 'rounded-[60px]' : ''}
        `}
        disabled={state === 'disabled'}
      />
      <div
        className={`absolute inset-y-0 flex items-center 
        ${state === 'search' ? 'left-4' : 'right-4'}`}
      >
        {stateIcon()}
      </div>
      {state === 'search' && isFocused && (
        <div className='absolute inset-y-0 flex items-center right-4'>
          <IconCancel />
        </div>
      )}
    </div>
  );
}

export default TextInput;
// cancel 이벤트 추가
