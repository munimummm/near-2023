'use client';

import { useMemo } from 'react';

interface Props {
  primary?: boolean;
  size?: 'small' | 'large';
  label?: string;
}

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2.5';
    }
    case 'large': {
      return 'px-6 py-3';
    }
    default: {
      return 'px-5 py-2.5';
    }
  }
};

const getModeClasses = (isPrimary: boolean) =>
  isPrimary
    ? 'text-white bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700'
    : 'text-zinc-700 bg-transparent border-zinc-700 dark:text-zinc-500 dark:border-zinc-500';

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-full border-2 font-bold leading-none inline-block';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'large',
  label = 'Button',
  ...props
}: Props) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(' ');
  }, [primary, size]);

  return (
    <button
      type='button'
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      {...props}
    >
      {label}
    </button>
  );
};
