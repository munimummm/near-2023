'use client';

import { ReactNode } from 'react';

interface FooterShadowBoxProps {
  children: ReactNode;
}

function FooterShadowBox({ children }: FooterShadowBoxProps) {
  return (
    <div className='fixed bottom-0 left-0 z-20 w-full'>
      <div className='shadow-[0_0.25rem_0.9375rem_0_rgba(128,128,128,0.1)] bg-white h-[7.875rem] flex justify-center items-center w-full desktop:justify-end desktop:pr-20'>
        <div className='flex items-center justify-center'>{children}</div>
      </div>
    </div>
  );
}

export default FooterShadowBox;
