import { SectionTextareaProps } from '../types/types';

export function SectionTextarea({ comment = '' }: SectionTextareaProps) {
  return (
    <section className='flex flex-col gap-2 w-full py-0 px-7 tablet:py-2 tablet:px-12 tablet:gap4-4 desktop:py-2 desktop:px-[6.25rem] desktop:gap-4'>
      <div className='w-full font-normal bg-gray-3 rounded-[0.25rem] p-4 text-sm text-text-black1 leading-tight tablet:px-5 desktop:px-5 tablet:text-base tablet:font-normal tablet:leading-normal desktop:text-base desktop:font-normal desktop:leading-normal'>
        {`특이사항: ${comment}`}
      </div>
    </section>
  );
}
