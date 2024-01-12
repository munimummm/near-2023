'use client';

import Image from 'next/image';
import { useState } from 'react';
import { SectionTitleThumbnailsProps } from '../types/types';

interface PetThumbnailsProps {
  imgData: { id: number; url: string }[];
}

export function SectionTitleThumbnails({
  name,
  imgData,
}: SectionTitleThumbnailsProps & PetThumbnailsProps) {
  return (
    <section className='flex flex-col w-full'>
      {/* 이름 */}
      <h1 className='mobile:px-8 mobile:pb-8 text-text-black1 tablet:px-[4.8125rem] tablet:py-[2.125rem] desktop:px-[4.8125rem] desktop:pt-[2.125rem] desktop:pb-[3.125rem] text-xl font-bold mobile:text-xl mobile:font-bold tablet:text-2xl tablet:font-semibold tablet:leading-loose desktop:text-[2.75rem] desktop:font-semibold desktop:leading-12'>
        {name ?? ''}
      </h1>
      {/* 이미지 */}
      <PetThumbnails imgData={imgData} />
    </section>
  );
}

function PetThumbnails({ imgData }: PetThumbnailsProps) {
  const [currImg, setCurrImg] = useState(0);
  return (
    <div className='flex flex-col w-full gap-[2.0625rem] mobile:gap-[2.0625rem] tablet:gap-7 desktop:gap-6'>
      <div className='relative overflow-hidden w-full mobile:h-[21.3125rem] tablet:h-[19.9375rem] desktop:h-[37.5rem]'>
        <Image
          className='object-cover'
          src={imgData[currImg].url}
          fill
          alt='유기동물 썸네일 이미지'
        />
      </div>
      <div className='flex w-full gap-4 px-2 mobile:gap-4 tablet:gap-4 desktop:gap-6 mobile:px-2 tablet:px-6 desktop:px-6'>
        {imgData.map((img, idx) => (
          <button
            className='relative overflow-hidden aspect-square rounded-[0.25rem] w-20 mobile:w-20 tablet:w-40 desktop:w-40'
            onClick={() => setCurrImg(idx)}
            key={`img-${idx}-${img.id}`}
          >
            <Image
              className='object-cover'
              src={img.url}
              alt='유기동물 썸네일 이미지'
              fill
            />
          </button>
        ))}
      </div>
    </div>
  );
}
