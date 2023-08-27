import React from 'react';

interface PaginationProps {
  total: number;
  current: number;
}

function Pagination({ total, current }: PaginationProps) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className='flex gap-3'>
      {/* svg 수정 예정 */}
      <div>
        <svg
          width='8'
          height='10'
          viewBox='0 0 8 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            id='Icon'
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M6.9327 9.08014C7.35577 8.74169 7.35577 8.19295 6.9327 7.85449L3.3654 5.00065L6.9327 2.14681C7.35577 1.80836 7.35577 1.25961 6.9327 0.921159C6.50963 0.582704 5.8237 0.582704 5.40063 0.921159L1.0673 4.38783C0.644233 4.72628 0.644233 5.27502 1.0673 5.61348L5.40063 9.08014C5.8237 9.4186 6.50963 9.4186 6.9327 9.08014Z'
            fill='#A3A3A3'
          />
        </svg>
      </div>
      {pages.map((page, index) => (
        <div className='p-2.5' key={page}>
          <button
            className={`w-2.5 h-2.5 text-sm font-normal leading-5 tracking-tighter text-center ${
              current === page ? ' text-theme-main' : 'bg-white text-text-gray'
            }`}
          >
            {page}
          </button>
        </div>
      ))}
      {/* svg 수정 예정 */}
      <div>
        <svg
          width='8'
          height='10'
          viewBox='0 0 8 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            id='Icon'
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M1.0673 8.92194C0.644233 8.5965 0.644233 8.06886 1.0673 7.74343L4.6346 4.99935L1.0673 2.25527C0.644233 1.92983 0.644233 1.4022 1.0673 1.07676C1.49037 0.751323 2.1763 0.751323 2.59937 1.07676L6.9327 4.41009C7.35577 4.73553 7.35577 5.26317 6.9327 5.5886L2.59937 8.92194C2.1763 9.24737 1.49037 9.24737 1.0673 8.92194Z'
            fill='#A3A3A3'
          />
        </svg>
      </div>
    </div>
  );
}

export default Pagination;
