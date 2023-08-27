import React, { useState } from 'react';

interface TooltipsProps {
  content: string;
  children: React.ReactNode;
}

function Tooltips({ content, children }: TooltipsProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className='relative'>
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className='cursor-pointer'
      >
        {children}
      </div>
      {showTooltip && (
        <div className='absolute top-0 left-0 p-2 mt-6 text-sm font-normal text-left text-white rounded bg-text-black1'>
          {content}
          <div className='absolute w-3 h-3 transform rotate-45 -translate-x-1/2 bg-gray-700 -top-1 left-1/2'></div>
        </div>
      )}
    </div>
  );
}

export default Tooltips;
