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
    <div className='flex items-center justify-center w-[7.5rem] h-[3rem] px-[1.5rem] py-[1rem]'>
      <Link href={href} className='text-lg'>
        {label}
      </Link>
    </div>
  );
}

function VerticalTab({ tab }: TabProps) {
  return (
    <div className='flex flex-col gap-[1.5rem]'>
      {tab.map((item, index) => (
        <div key={index}>
          <TabItem href={item.href} label={item.label} />
        </div>
      ))}
    </div>
  );
}

export default VerticalTab;
