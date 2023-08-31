// import IconTextInputError from '../../assets/icons/textinput/icon_textinput_error.svg';
type InputType = {
  [key: string]: string;
};

interface TextInputProps {
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
  search: 'pl-10 active:pr-10',
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
    <div className='relative w-[380px] h-10 '>
      <input
        type='text'
        placeholder={placeholder}
        className={` ${CommonStyle}
        ${TextInputStyle[state ?? 'enabled']}
        ${InputSize[size ?? 'sm']}
        ${borderRadius ? 'rounded-[60px]' : ''}
        `}
        disabled={state === 'disabled'}
      />
      {stateIcon()}
    </div>
  );
}

export default TextInput;
