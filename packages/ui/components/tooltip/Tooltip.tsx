'use client';
import React, { useState, ReactNode } from 'react';
import IconError from '../../assets/icons/textinput/icon_error.svg';

interface TooltipsProps {
  content: string;
  icon?: ReactNode;
}

function Tooltips({
  content,
  icon = <IconError stroke='#333333' />,
}: TooltipsProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className='relative inline-block'>
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className='relative z-10 cursor-pointer'
      >
        {icon}
      </div>
      {showTooltip && (
        <div className='absolute top-full left-1/2 p-2 mt-2 text-sm text-white bg-[#161616] rounded-sm transform -translate-x-1/2 min-w-max'>
          {content}
          <div className='absolute w-3 h-3 transform -rotate-45 -translate-x-1/2 bg-[#161616] -top-1 left-1/2'></div>
        </div>
      )}
    </div>
  );
}

export default Tooltips;
