'use Client';

import { useRef } from 'react';

interface InputFileButtonProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}
function InputFileButton({ onChange, onClick }: InputFileButtonProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  return (
    <>
      <input
        type='file'
        accept='image/jpg, image/jpeg, image/png'
        className='hidden'
        ref={fileInputRef}
        onChange={onChange}
      />
      <button
        className='py-2.5 px-6 text-sm rounded-[2.5rem] ox-border border-[0.0938rem] bg-transparent border-theme-main text-theme-main hover:bg-bg-blue1 hover:border-theme-main hover:text-theme-main hover:shadow-none'
        onClick={() => {
          onClick();
          fileInputRef.current?.click();
        }}
      >
        이미지 수정
      </button>
    </>
  );
}

export default InputFileButton;
