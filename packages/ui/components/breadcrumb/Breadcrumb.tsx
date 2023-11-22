interface BreadcrumbProps {
  items?: string[];
}

/**
 *
 * @author `송용수`
 *
 * @desc Breadcrumb UI 컴포넌트
 *
 * @param items
 * — 배열에 들어간 순서대로 각 요소들 나열.
 * - `필수 파라미터` — `X`
 * - `기본값` — `['']`
 * - `타입` — `string[]`
 */
function Breadcrumb({ items = [''] }: BreadcrumbProps) {
  return (
    <ol className='flex items-center gap-2 mobile:gap-1'>
      {items?.map((val, idx) => (
        <>
          <li
            key={`${val}-${idx}`}
            className='text-text-gray mobile:text-[0.625rem] mobile:font-normal mobile:leading-[0.625rem] tablet:text-[0.875rem] tablet:text-sm tablet:font-medium tablet:leading-tight desktop:text-4 desktop:text-base desktop:font-medium desktop:leading-normal last:text-text-black1'
          >
            {val}
          </li>
          {idx !== items.length - 1 ? (
            // icon 들어오면 수정
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
                  stroke-linecap='round'
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
