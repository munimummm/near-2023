'use client';

interface SubheadingProps {
  subheading1: string;
  subheading2: string;
  subheading3: string;
}

const Subheading = ({
  subheading1,
  subheading2,
  subheading3,
}: SubheadingProps) => {
  return (
    <div
      className={
        'w-[21.438rem] h-[5.875rem] text-[1.125rem] border-l-2 border-black pl-4 pt-1 lg:h-[6.25rem] lg:pt-0'
      }
    >
      <div className={'md:text-bold lg:text-[1.25rem] lg:font-bold'}>
        {subheading1}
      </div>
      <div className={'py-1 md:text-bold lg:text-[1.25rem] lg:font-bold'}>
        {subheading2}
      </div>
      <div className={'md:text-bold lg:text-[1.25rem] lg:font-bold'}>
        {subheading3}
      </div>
    </div>
  );
};

export default Subheading;
