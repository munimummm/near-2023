'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface GraphicButtonProps {
  href: string;
  children: ReactNode;
}

function GraphicButton({ href, children }: GraphicButtonProps) {
  return (
    <Link
      className='flex flex-col items-center gap-3 text-sm font-normal leading-tight text-center min-w-[4.8125rem]'
      href={href}
    >
      {children}
    </Link>
  );
}

/**
 * @author `송용수`
 *
 * @desc profile 페이지의 그래픽 버튼 UI 컴포넌트
 */
function GraphicButtons() {
  return (
    <section className='flex items-center gap-20'>
      <GraphicButton href='/tpdiary'>
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18 9.61042C15.8856 8.58007 13.5103 8.00195 11 8.00195C8.48968 8.00195 6.11439 8.58007 4 9.61042V29.6104C6.11439 28.5801 8.48968 28.002 11 28.002C14.3372 28.002 17.4358 29.0237 20 30.7713C22.5642 29.0237 25.6628 28.002 29 28.002C31.5103 28.002 33.8856 28.5801 36 29.6104V9.61042C33.8856 8.58007 31.5103 8.00195 29 8.00195C26.4897 8.00195 24.1144 8.58007 22 9.61042V24.002C22 25.1065 21.1046 26.002 20 26.002C18.8954 26.002 18 25.1065 18 24.002V9.61042Z'
            fill='#D1E9FF'
          />
        </svg>
        관심 임보일기
      </GraphicButton>
      <GraphicButton href='/animal'>
        <svg
          width='41'
          height='40'
          viewBox='0 0 41 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M6.84315 10.3451C9.96734 7.2209 15.0327 7.2209 18.1569 10.3451L20.5 12.6882L22.8431 10.3451C25.9673 7.2209 31.0327 7.2209 34.1569 10.3451C37.281 13.4693 37.281 18.5346 34.1569 21.6588L20.5 35.3157L6.84315 21.6588C3.71895 18.5346 3.71895 13.4693 6.84315 10.3451Z'
            fill='#FFAFAF'
          />
        </svg>
        관심 동물
      </GraphicButton>
      <GraphicButton href='/volunteer'>
        <svg
          width='41'
          height='40'
          viewBox='0 0 41 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M10.5 4C11.6046 4 12.5 4.89543 12.5 6V8H14.5C15.6046 8 16.5 8.89543 16.5 10C16.5 11.1046 15.6046 12 14.5 12H12.5V14C12.5 15.1046 11.6046 16 10.5 16C9.39543 16 8.5 15.1046 8.5 14V12H6.5C5.39543 12 4.5 11.1046 4.5 10C4.5 8.89543 5.39543 8 6.5 8H8.5V6C8.5 4.89543 9.39543 4 10.5 4ZM10.5 24C11.6046 24 12.5 24.8954 12.5 26V28H14.5C15.6046 28 16.5 28.8954 16.5 30C16.5 31.1046 15.6046 32 14.5 32H12.5V34C12.5 35.1046 11.6046 36 10.5 36C9.39543 36 8.5 35.1046 8.5 34V32H6.5C5.39543 32 4.5 31.1046 4.5 30C4.5 28.8954 5.39543 28 6.5 28H8.5V26C8.5 24.8954 9.39543 24 10.5 24Z'
            fill='#FFE6A7'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M24.4999 4C25.4074 4 26.2011 4.61097 26.4333 5.48821L28.7917 14.3979L35.4993 18.2676C36.1185 18.6248 36.4999 19.2852 36.4999 20C36.4999 20.7148 36.1185 21.3752 35.4993 21.7324L28.7917 25.6021L26.4333 34.5118C26.2011 35.389 25.4074 36 24.4999 36C23.5924 36 22.7987 35.389 22.5665 34.5118L20.208 25.6021L13.5005 21.7324C12.8814 21.3752 12.5 20.7148 12.5 20C12.5 19.2852 12.8814 18.6248 13.5005 18.2676L20.208 14.3979L22.5665 5.48821C22.7987 4.61097 23.5924 4 24.4999 4Z'
            fill='#FFE6A7'
          />
        </svg>
        관심 봉사
      </GraphicButton>
    </section>
  );
}

export default GraphicButtons;
