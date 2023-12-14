'use client';

import { clsx } from '@near/clsx';

interface BreadcrumbProps {
  items?: string[];
  className?: string;
}

/**
 * @author `송용수`
 *
 * @desc Breadcrumb UI 컴포넌트
 *
 * @param items
 * — (`string[]`)
 * 배열에 들어간 순서대로 각 요소들 나열.
 *
 * @param className
 * — (`string`)
 * 컴포넌트에 적용할 클래스.
 */
function Breadcrumb({ items = [''], className }: BreadcrumbProps) {
  return (
    <ol className={clsx('flex items-center gap-2 mobile:gap-1', className)}>
      {items?.map((val, idx) => (
        <>
          <li
            key={`${val}-${idx}`}
            className='text-text-gray mobile:text-[0.625rem] mobile:font-normal mobile:leading-[0.625rem] tablet:text-[0.875rem] tablet:text-sm tablet:font-medium tablet:leading-tight desktop:text-4 desktop:text-base desktop:font-medium desktop:leading-normal last:text-text-black1'
          >
            {val}
          </li>
          {idx !== items.length - 1 ? (
            <div className='w-[0.375rem] h-[0.625rem]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 8 12'
                fill='none'
              >
                <path
                  d='M1 0.625L7 5.625L1 10.625'
                  stroke='#A3A3A3'
                  strokeLinecap='round'
                />
              </svg>
            </div>
          ) : null}
        </>
      ))}
    </ol>
  );
}

export default Breadcrumb;
