import { Tag } from 'ui';
import { SectionTagsProps } from '../types/types';

export function SectionTags({ tag = [''] }: SectionTagsProps) {
  return (
    <section className='flex items-center w-full gap-2 px-6 mobile:px-6 mobile:gap-2 tablet:gap-2 tablet:px-20 desktop:gap-4 desktop:px-20'>
      {tag?.map((item) => {
        return <Tag key={item}>{item}</Tag>;
      })}
    </section>
  );
}
