'use client';

import Link from 'next/link';
import { useState } from 'react';

interface TabItemProps {
  label: string;
  href: string;
}
interface TabProps {
  tab: TabItemProps[];
}

function TabItem({ href, label }: TabItemProps) {
  return (
    <div className='flex items-center justify-center w-[120px] h-[48px] px-[24px] py-[16px]'>
      <Link href={href} className='text-lg'>
        {label}
      </Link>
    </div>
  );
}

function VerticalTab({ tab }: TabProps) {
  return (
    <div className='flex flex-col gap-[24px]'>
      {tab.map((item, index) => (
        <div key={index}>
          <TabItem href={item.href} label={item.label} />
        </div>
      ))}
    </div>
  );
}

export default VerticalTab;
