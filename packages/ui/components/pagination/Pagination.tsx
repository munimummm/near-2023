'use client';

// import { useState } from 'react';
import IconChevronLeft from '../../assets/icons/pagination/icon_chevron_left.svg';
import IconChevronRight from '../../assets/icons/pagination/icon_chevron_right.svg';

interface PaginationProps {
  total: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({ total, currentPage, onPageChange }: PaginationProps) {
  // const totalPages = Math.ceil(total / PerPage);
  // const [currentPage, setCurrentPage] = useState(1);
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };

  return (
    <div className='flex items-center justify-center gap-3 mt-12 '>
      <button onClick={() => onPageChange(Math.max(1, currentPage - 1))}>
        <IconChevronLeft />
      </button>
      {pages.map((page) => (
        <div className='p-2.5' key={page}>
          <button
            className={`w-2.5 h-2.5 flex items-center text-sm leading-5 -tracking-[-0.014] text-center ${
              currentPage === page
                ? 'text-theme-main font-medium'
                : 'bg-white text-text-gray font-normal'
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        </div>
      ))}
      <button
        onClick={() => onPageChange(Math.min(total, currentPage + 1))}
        className='hover:text-theme-main'
      >
        <IconChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
