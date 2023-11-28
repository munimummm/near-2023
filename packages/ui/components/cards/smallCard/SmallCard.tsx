'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

interface SmallCardProps {
  src: string;
  title?: ReactNode;
}

/**
 * @author `송용수`
 *
 * @desc 작은 카드 UI 컴포넌트
 *
 * @param src
 * — (`string`)
 * 배경 이미지 경로 (필수)
 *
 * @param title
 * — (`string`)
 * 봉사활동 제목
 */
function SmallCard({ src, title }: SmallCardProps) {
  return (
    <div className='relative overflow-hidden w-40 h-40 object-cover p-[0.875rem] flex flex-col justify-end rounded-[0.3125rem] '>
      <Image src={src} fill alt='카드 이미지' />
      <span className='z-[2] text-white text-sm font-normal leading-[1.125rem] line-clamp-2 whitespace-pre-wrap text-ellipsis'>
        {title}
      </span>
    </div>
  );
}
export default SmallCard;
