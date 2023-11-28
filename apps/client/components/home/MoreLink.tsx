import { Icon } from 'ui/components/icon/Icon';
import Link from 'next/link';

type TitleMoreProps = {
  title: string;
  path: string;
};

export function MoreLink({ title, path }: TitleMoreProps) {
  return (
    <div>
      <Link
        href={path}
        className='relative font-bold flex justify-center gap-[0.375rem] mb-8'
      >
        <span className='text-xl mobile:text-xl tablet:text-4xl desktop:text-4xl'>
          {title}
        </span>
        <Icon sizes='sm' state='default' icon='ic_chevron_right' />
      </Link>
    </div>
  );
}
