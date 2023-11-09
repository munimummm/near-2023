import IconArrow from '../../assets/icons/breadcrumb/icon_breadcrumb_arrow.svg';

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
 * - `기본값` — `''`
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
            <IconArrow width={6} height={10} />
          ) : null}
        </>
      ))}
    </ol>
  );
}

export default Breadcrumb;
