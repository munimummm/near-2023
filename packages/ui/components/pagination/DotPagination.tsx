import { useState } from 'react';

interface DotPaginationProps {
  total: number;
}

function DotPagination({ total }: DotPaginationProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  const onSelect = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <div className='flex gap-3'>
      {pages.map((page, index) => (
        <div className='p-2.5' key={page}>
          <button
            className={`w-2.5 h-2.5 rounded-full border cursor-pointer ${
              currentPage === index ? 'bg-theme-main' : 'bg-text-gray2'
            }`}
            onClick={() => onSelect(index)}
          ></button>
        </div>
      ))}
    </div>
  );
}

export default DotPagination;
