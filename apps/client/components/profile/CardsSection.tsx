'use client';

import Link from 'next/link';
import { SmallCard } from 'ui';
import {
  DummyCardListApplication,
  DummyCardListDiary,
  DummyCardListVolunteerReview,
} from './dummy';

interface CardSectionProps {
  text: string;
  href: string;
  data: { id: number; title: string; src: string }[];
}
interface CardGroupSectionProps {
  userRole: string;
}

function CardSection({ text, href, data }: CardSectionProps) {
  const dummy = data;

  return (
    <div className='flex flex-col gap-4 px-4'>
      {/* text */}
      <Link
        className='flex items-center pl-1 text-lg font-medium leading-7 text-center gap-15 text-text-black1'
        href={href}
      >
        {text}
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7.5 4.16634L13.3333 9.99967L7.5 15.833'
            stroke='#060606'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </Link>
      {/* cards */}
      <ul className='flex items-center gap-4'>
        {dummy.map((item) => (
          <Link
            key={`${text}_${item.id}_idx_${item.title}`}
            href={`${href}/${item.id}`}
          >
            <SmallCard src={item.src} title={item.title} />
          </Link>
        ))}
      </ul>
    </div>
  );
}

function CardsSection(props: CardGroupSectionProps) {
  const { userRole } = props;

  return (
    <section className='flex flex-col gap-6'>
      <CardSection
        text={userRole === 'normal_user' ? '내 봉사 후기' : '보호 중 동물'}
        href={'/profile/volunteer/review'}
        data={DummyCardListVolunteerReview}
      />
      <CardSection
        text={userRole === 'normal_user' ? '내 임보일기' : '봉사 공고 내역'}
        href={'/profile/tpdiary'}
        data={DummyCardListDiary}
      />
      <CardSection
        text={
          userRole === 'normal_user'
            ? '내 입양/임보 신청 내역'
            : '입양/임보 공고 내역'
        }
        href={'/profile/application'}
        data={DummyCardListApplication}
      />
    </section>
  );
}

export default CardsSection;
