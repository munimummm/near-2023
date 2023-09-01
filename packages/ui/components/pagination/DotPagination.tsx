interface DotPaginationProps {
  total: number;
  current: number;
}

function DotPagination({ total, current }: DotPaginationProps) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className='flex gap-3'>
      {pages.map((page, index) => (
        <div className='p-2.5' key={page}>
          <button
            className={`w-2.5 h-2.5 rounded-full border ${
              current === index ? 'bg-theme-main' : 'bg-text-gray2'
            }`}
          ></button>
        </div>
      ))}
    </div>
  );
}

export default DotPagination;
