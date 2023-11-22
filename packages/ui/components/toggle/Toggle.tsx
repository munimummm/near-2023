'use client';

import { useController, Control } from 'react-hook-form';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface ToggleCommonProps {
  className?: string;
  children?: ReactNode;
}

interface ToggleProps {
  name: string;
  type?: string;
  value?: string;
  control?: Control;
}

function ToggleBackground({ className, children }: ToggleCommonProps) {
  return (
    <label
      className={clsx(
        'flex items-center mobile:w-10 mobile:h-[1.3125rem] tablet:w-[3.75rem] tablet:h-[1.875rem] desktop:w-20 desktop:h-10 p-0.5 rounded-full cursor-pointer',
        className,
      )}
    >
      {children}
    </label>
  );
}

function ToggleBall() {
  return (
    <div className='bg-white rounded-full mobile:w-[1.0625rem] mobile:h-[1.0625rem] tablet:w-[1.625rem] tablet:h-[1.625rem] desktop:w-9 desktop:h-9' />
  );
}

function Toggle({ name, type = 'checkbox', control, value }: ToggleProps) {
  const {
    field: { onChange, value: selectedValue },
  } = useController({
    name,
    control,
  });

  const isChecked = selectedValue === value;

  return (
    <div className='flex items-center justify-center'>
      <ToggleBackground
        className={`${
          isChecked ? 'bg-theme-main justify-end' : 'bg-[#C6C6C6] justify-start'
        }`}
      >
        <input
          type={type}
          className='hidden'
          name={name}
          value={value}
          checked={isChecked}
          onChange={onChange}
        />
        <ToggleBall />
      </ToggleBackground>
    </div>
  );
}

export default Toggle;
