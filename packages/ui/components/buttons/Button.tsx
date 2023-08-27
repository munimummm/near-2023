import { ReactNode } from 'react';

type ButtonType = {
  [key: string]: string;
};

interface ButtonProps {
  size: 'lg' | 'sm';
  type: 'main' | 'secondary' | 'ghost' | 'outline' | 'text' | 'danger';
  state: 'default' | 'hover' | 'active' | 'disabled';
  rounded: 'rounded' | 'rounded-full';
  label?: string;
  imageRight?: ReactNode;
  imageLeft?: ReactNode;
}

const ButtonSize: ButtonType = {
  lg: 'gap-3 py-[17px]',
  sm: 'gap-2 py-2',
};

const ButtonRounded: ButtonType = {
  rounded: 'rounded',
  'rounded-full': 'rounded-full',
};

const ButtonStyle = {
  main: {
    default: 'bg-indigo-900',
    hover: 'hover:bg-indigo-900 hover:shadow hover:text-white',
    active: 'bg-indigo-950',
    disabled: 'bg-neutral-200 text-neutral-400',
  },
  secondary: {
    default: 'bg-indigo-50 text-indigo-900',
    hover: 'hover:bg-indigo-50 hover:text-indigo-900 hover:shadow',
    active: 'bg-indigo-100 text-indigo-900',
    disabled: 'bg-stone-50 text-neutral-200',
  },
  ghost: {
    default: 'bg-stone-50 text-neutral-400 ',
    hover: 'hover:bg-stone-50 hover:text-neutral-400 hover:shadow',
    active: 'bg-neutral-200 text-neutral-400',
    disabled: 'bg-stone-50 text-neutral-200',
  },
  outline: {
    default: 'bg-white text-indigo-900 border border-indigo-900',
    hover:
      'hover:bg-indigo-50 hover:text-indigo-900 hover:border hover:border-indigo-900',
    active: 'bg-indigo-100 border border-indigo-900',
    disabled: 'bg-white text-neutral-400 border border-neutral-400',
  },
  text: {
    default: 'bg-transparent text-neutral-800',
    hover: 'hover:bg-indigo-50 hover:text-neutral-800',
    active: 'bg-transparent text-indigo-900',
    disabled: 'bg-transparent text-neutral-400',
  },
  danger: {
    default: 'bg-red-600 text-white',
    hover: 'hover:bg-[#a32f2f] hover:bg-opacity-20 hover:text-white',
    active: 'bg-[#822626] text-white',
    disabled: 'bg-neutral-200 text-neutral-400',
  },
};

const Button = ({
  size,
  type,
  state,
  rounded,
  label,
  imageRight,
  imageLeft,
}: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center px-4 text-base font-bold 
      ${ButtonRounded[rounded ?? 'rounded']}
      ${ButtonSize[size ?? 'lg']}
      ${ButtonStyle[type ?? 'main'][state ?? 'default']}
      `}
      disabled={state === 'disabled'}
    >
      {imageLeft}
      {label}
      {imageRight}
    </button>
  );
};

export default Button;
