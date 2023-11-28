import { clsx } from '@near/clsx';
import { HeaderTitle, HeaderButton } from 'ui';
import { DummyHomeVolunteerPoster } from '../dummy';
import Image from 'next/image';

function HomeVolunteerPoster() {
  const dummy = DummyHomeVolunteerPoster;

  return (
    <section
      className={clsx(
        'flex flex-col items-center justify-center w-full gap-10',
        'mobile:gap-10',
        'tablet:gap-20',
        'desktop:gap-20',
      )}
    >
      <div className='flex flex-col items-center justify-center gap-1 mobile:gap-1 tablet:gap-2 tablet:py-[2.125rem] desktop:gap-2 desktop:py-[2.125rem]'>
        <HeaderTitle title='니어 봉사활동에 함께 해주세요'>
          <HeaderButton href='/volunteer' />
        </HeaderTitle>
      </div>

      <div className='flex flex-col items-center justify-center w-full tablet:gap-4 desktop:gap-4'>
        <div className='relative overflow-hidden w-full h-[12.6875rem] mobile:w-full mobile:h-[12.6875rem] tablet:w-full tablet:h-[18rem] desktop:w-full desktop:h-[18rem] desktop:object-cover'>
          <Image src={dummy.url} fill alt='홈 봉사활동 독려 이미지' />
        </div>
        <p
          className={clsx(
            'hidden',
            'mobile:hidden',
            'tablet:block tablet:px-[4.5rem] tablet:text-base tablet:text-text-black1 tablet:font-semibold tablet:leading-normal',
            'desktop:block desktop:px-20 desktop:text-lg desktop:text-text-black1 desktop:font-semibold desktop:leading-7',
          )}
        >
          {dummy.text}
        </p>
      </div>
    </section>
  );
}

export default HomeVolunteerPoster;
