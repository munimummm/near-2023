'use client';
import Image from 'next/image';
// import { Button, Tag } from 'ui';
import { clsx } from '@near/clsx';

interface CardBlockCommonProps {
  className?: string;
}
interface BackgroundImageProps extends CardBlockCommonProps {
  src: string;
}

function BackgroundImage({ src }: BackgroundImageProps) {
  return (
    <Image
      className={clsx('object-cover w-full h-full rounded-2xl')}
      fill
      src={src}
      alt={`CardBlock Image`}
    />
  );
}

function ShelterVoluteerCard({ item }) {
  return (
    <div className='relative w-[200px] h-[337px] flex flex-col gap-[124px]  border px-8 desktop:px-28'>
      <div className='w-[200px] h-[200px] rounded-2xl'>
        <BackgroundImage src={item.src} className='' />
      </div>

      <div className='pl-[14px] pt-[13px] absolute left-0'>
        <div className='px-[0.875rem] py-2 whitespace-nowrap text-[0.75rem] rounded-full bg-white opacity-70 cursor-default'>
          {item.tagName}
        </div>
      </div>
      <div className='absolute bottom-0 h-[132px] left-0 flex flex-col w-full gap-4 pl-4 pt-2 pr-8 bg-black rounded-b-2xl'>
        <div className='text-xl font-bold text-white'>{item.title}</div>
        <div className='text-xs text-[#D9D9D9]'>{item.subTitle}</div>
      </div>
    </div>
  );
}

export default ShelterVoluteerCard;
