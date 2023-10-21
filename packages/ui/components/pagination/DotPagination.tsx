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

  const sizeGap = size === 'lg' && 'gap-[8px]';

  return (
    <div className={`flex items-center justify-center ${sizeGap}`}>
      {pages.map((page, index) => (
        <div className='flex items-center justify-center p-2.5' key={page}>
          <button
            className={`
            rounded-full border cursor-pointer
            ${
              currentPage === index
                ? 'bg-theme-main w-[12px] h-[12px]'
                : 'bg-text-gray2 w-[8px] h-[8px]'
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
