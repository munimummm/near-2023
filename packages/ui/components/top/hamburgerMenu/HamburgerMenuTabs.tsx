import { ReactNode } from 'react';
import { clsx } from '@near/clsx';
import Link from 'next/link';

interface HamburgerMenuTabsProps {
  size?: 'sm' | 'lg';
  onClick?: () => void;
  href: string;
  children?: ReactNode;
}

function HamburgerMenuTabs({
  size = 'lg',
  href,
  onClick,
  children,
}: HamburgerMenuTabsProps) {
  return (
    <Link
      className={clsx(
        'flex justify-center bg-transparent no-underline items-center text-black font-normal',
        `${
          size === 'sm'
            ? 'text-base leading-normal'
            : 'w-[7.5rem] h-12 text-xl leading-7'
        }`,
      )}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default HamburgerMenuTabs;
