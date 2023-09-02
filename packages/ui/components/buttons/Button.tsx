'use client';

import { ReactNode, useMemo } from 'react';

interface ButtonProps {
  mode?: 'Main' | 'Secondary' | 'Ghost' | 'Outline' | 'Text' | 'Danger';
  size?: 'sm' | 'lg';
  isRounded?: boolean;
  isDisabled?: boolean;
  label?: ReactNode;
  onClick?: () => void;
}

const getModeClasses = (mode: string) => {
  switch (mode) {
    case 'Main': {
      return 'border-none bg-[#312E81] text-white active:bg-[#1E1B4B] disabled:bg-[#E1E1E1] disabled:text-[#ACACAC]';
    }
    case 'Secondary': {
      return 'border-none bg-[#EEF2FF] text-[#312E81] active:bg-[#E0E7FF] disabled:bg-[#F9F9F9] disabled:text-[#E0E0E0]';
    }
    case 'Ghost': {
      return 'border-none bg-[#F9F9F9] text-[#A3A3A3] active:bg-[#E1E1E1] disabled:bg-[#F9F9F9] disabled:text-[#E0E0E0]';
    }
    case 'Outline': {
      return 'border border-[#312E81] bg-white text-[#312E81] hover:bg-[#EEF2FF] hover:border-[#312E81] active:bg-[#E0E7FF] disabled:bg-white disabled:text-[#A3A3A3] disabled:border-[#A3A3A3]';
    }
    case 'Text': {
      return 'border-none bg-transparent text-[#242424] hover:bg-[#EEF2FF] active:bg-white active:text-[#312E81] disabled:bg-transparent disabled:text-[#A3A3A3]';
    }
    case 'Danger': {
      return 'border-none bg-[#CC3C3B] text-white hover:bg-[#A32F2F] active:bg-[#822626] disabled:bg-[#E1E1E1] disabled:text-[#E0E0E0]';
    }
    default: {
      return 'border-none bg-[#312E81] text-white active:bg-[#1E1B4B] disabled:bg-[#E1E1E1] disabled:text-[#ACACAC]';
    }
  }
};

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'sm': {
      return 'py-2 gap-2';
    }
    case 'lg': {
      return 'py-[15px] gap-3';
    }
    default: {
      return 'py-[15px] gap-3';
    }
  }
};

const getRoundedClasses = (isRounded: boolean) =>
  isRounded ? 'rounded-full' : 'rounded';

const BASE_CLASSES =
  'box-border px-4 flex items-center justify-center cursor-pointer font-bold text-base inline-block outline-none focus:outline-none hover:shadow disabled:hover:shadow-none disabled:cursor-not-allowed';

function Button({
  mode = 'Main',
  size = 'lg',
  isRounded = false,
  isDisabled = false,
  label = 'Button',
  onClick,
  ...props
}: ButtonProps) {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(mode);
    const sizeClass = getSizeClasses(size);
    const roundedClass = getRoundedClasses(isRounded);

    return [modeClass, sizeClass, roundedClass].join(' ');
  }, [mode, size, isRounded]);

  return (
    <button
      type='button'
      className={`${BASE_CLASSES} ${computedClasses}`}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
