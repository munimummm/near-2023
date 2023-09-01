import IconChevronLeft from '../../assets/icons/pagination/icon_chevron_left.svg';
import IconChevronRight from '../../assets/icons/pagination/icon_chevron_right.svg';

interface PaginationProps {
  total: number;
  current: number;
}

function Pagination({ total, current }: PaginationProps) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className='flex items-center gap-3 '>
      <IconChevronLeft />
      {pages.map((page) => (
        <div className='p-2.5' key={page}>
          <button
            className={`w-2.5 h-2.5 flex items-center text-sm font-normal leading-5 tracking-tighter text-center ${
              current === page ? ' text-theme-main' : 'bg-white text-text-gray'
            }`}
          >
            {page}
          </button>
        </div>
      ))}
      <IconChevronRight />
    </div>
  );
}

export default Pagination;
