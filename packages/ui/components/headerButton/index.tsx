'use client';

import { clsx } from '@near/clsx';
import Link from 'next/link';
import { ReactNode } from 'react';

interface HeaderCommonProps {
  className?: string;
}

interface HeaderButtonProps extends HeaderCommonProps {
  href: string;
}

interface HeaderTitleProps extends HeaderCommonProps {
  title?: string;
  children?: ReactNode;
}

interface HeaderSubTitleProps extends HeaderCommonProps {
  subTitle?: string;
}

export function HeaderButton({ href, className }: HeaderButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'flex justify-center items-center bg-transparent w-5 h-5 mobile:w-5 mobile:h-5 tablet:w-7 tablet:h-7 desktop:w-7 desktop:h-7',
        className,
      )}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'
        viewBox='0 0 29 28'
        fill='none'
      >
        <path
          d='M11 5.83268L19.1667 13.9993L11 22.166'
          stroke='#242424'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </Link>
  );
}

export function HeaderTitle({ title, children }: HeaderTitleProps) {
  return (
    <div className='flex mobile:gap-[0.375rem] items-center tablet:gap-2 desktop:gap-2'>
      <span className='text-text-black1 mobile:font-bold tablet:font-extrabold desktop:font-bold mobile:text-xl tablet:text-2xl desktop:text-4xl'>
        {title}
      </span>
      {children}
    </div>
  );
}

export function HeaderSubTitle({ subTitle, className }: HeaderSubTitleProps) {
  return (
    <span
      className={clsx(
        'text-center text-theme-main_light font-normal mobile:text-base tablet:text-lg desktop:text-lg',
        className,
      )}
    >
      {subTitle}
    </span>
  );
}
