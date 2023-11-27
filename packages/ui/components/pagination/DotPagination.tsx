'use client';

import { useState } from 'react';

interface DotPaginationProps {
  total: number;
  size?: 'sm' | 'lg';
}

function DotPagination({ total, size }: DotPaginationProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  const onSelect = (index: number) => {
    setCurrentPage(index);
  };

  const sizeGap = size === 'lg' && 'gap-2';

  return (
    <div className={`flex items-center justify-center ${sizeGap}`}>
      {pages.map((page, index) => (
        <div className='flex items-center justify-center p-2.5' key={page}>
          <button
            className={`
            rounded-full border cursor-pointer
            ${
              currentPage === index
                ? 'bg-theme-main w-3 h-3'
                : 'bg-text-gray2 w-2 h-2'
            }
          `}
            onClick={() => onSelect(index)}
          ></button>
        </div>
      ))}
    </div>
  );
}

export default DotPagination;
