import { useState } from 'react';
import IconChevronLeft from '../../assets/icons/pagination/icon_chevron_left.svg';
import IconChevronRight from '../../assets/icons/pagination/icon_chevron_right.svg';

interface PaginationProps {
  total: number;
}

function Pagination({ total }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='flex items-center gap-3 '>
      <button onClick={() => handlePageChange(Math.max(1, currentPage - 1))}>
        <IconChevronLeft />
      </button>
      {pages.map((page) => (
        <div className='p-2.5' key={page}>
          <button
            className={`w-2.5 h-2.5 flex items-center text-sm font-normal leading-5 tracking-tighter text-center ${
              currentPage === page
                ? ' text-theme-main'
                : 'bg-white text-text-gray'
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        </div>
      ))}
      <button
        onClick={() => handlePageChange(Math.min(total, currentPage + 1))}
      >
        <IconChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
