import IconArrow from '../../assets/icons/breadcrumb/icon_breadcrumb_arrow.svg';
// import Link from 'next/link';

// type Item = {
//   label: string;
//   url: string;
// };

interface BreadcrumbProps {
  // items?: Item[];
  items?: string[];
}

function Breadcrumb({ items = ['item'] }: BreadcrumbProps) {
  return (
    <ol className='flex items-center gap-1'>
      {items?.map((val, idx) => (
        <>
          {/* <Link href={val.url}> */}
          <li
            key={idx}
            className='text-[10px] text-[#A3A3A3] font-normal leading-3 last:text-[#242424]'
          >
            {/* {val.label} */}
            {val}
          </li>
          {/* </Link> */}
          {idx !== items.length - 1 ? <IconArrow width={4} height={8} /> : null}
        </>
      ))}
    </ol>
  );
}

export default Breadcrumb;
