'use client';

import Image from 'next/image';
import Link from 'next/link';

interface VolunteerCardLinkProps {
  id: number;
}

interface VolunteerCardProps {
  src: string;
  title?: string;
  subTitle?: string;
}

function DetailLink({ id }: VolunteerCardLinkProps) {
  return (
    <Link
      className='z-[2] rounded-full absolute top-[0.8125rem] right-[0.6875rem] no-underline flex justify-center items-center gap-[0.1875rem] w-[3.4375rem] h-4 bg-theme-main text-white text-[0.3987rem] font-semibold leading-[0.5981rem]'
      href={`/volunteer/${id}`}
    >
      자세히보기
      <svg
        width='8'
        height='8'
        viewBox='0 0 8 8'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clip-path='url(#clip0_522_21604)'>
          <path
            d='M4.66752 1.67578L6.99269 4.00096M6.99269 4.00096L4.66752 6.32613M6.99269 4.00096L1.01367 4.00096'
            stroke='white'
            strokeWidth='0.597902'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_522_21604'>
            <rect
              width='7.97203'
              height='7.97203'
              fill='white'
              transform='translate(0.0175781 0.015625)'
            />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
}

/**
 * @author `송용수`
 *
 * @desc 봉사활동 카드 UI 컴포넌트
 *
 * @param src
 * — (`string`)
 * 배경 이미지 경로 (필수)
 *
 * @param id
 * — (`number`)
 * 봉사활동 id. 자세히보기 버튼 클릭 시 이동하는 경로와 관련있음. (필수)
 *
 * @param title
 * — (`string`)
 * 봉사활동 제목
 *
 * @param subTitle
 * — (`string`)
 * 봉사활동 부제목
 */
function VolunteerCard({
  src,
  id,
  title,
  subTitle,
}: VolunteerCardProps & VolunteerCardLinkProps) {
  return (
    <div className='w-[22.625rem] h-[10.5rem] p-4 relative overflow-hidden rounded-[0.625rem] object-cover flex flex-col items-end'>
      <Image src={src} fill alt='봉사활동 이미지' />
      <DetailLink id={id} />
      <div className='z-[2] flex flex-col gap-1 justify-end'>
        <span className='text-lg font-bold leading-normal text-white'>
          {title}
        </span>
        <span className='text-white text-[0.625rem] font-normal leading-3'>
          {subTitle}
        </span>
      </div>
    </div>
  );
}

export default VolunteerCard;
