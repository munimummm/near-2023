'use client';

import Link from 'next/link';
import { clsx } from '@near/clsx';
import { MenuOptionTabsContentProps } from '../MenuOptionTabsContent';

function TopMenuTabs({ href, name }: MenuOptionTabsContentProps) {
  return (
    <Link
      className={clsx(
        'text-xl leading-7 cursor-pointer hover:text-theme-main',
        'font-normal text-text-gray',
        // `${
        //   href === pathname
        //     ? 'font-bold text-theme-main'
        //     : 'font-normal text-text-gray'
        // }`,
      )}
      href={href}
    >
      {name}
    </Link>
  );
}

export default TopMenuTabs;
