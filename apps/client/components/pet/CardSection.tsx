'use client';

import { ButtonMedium, CardWithLike, Icon, Pagination } from 'ui';
import { DummyNearPets } from './dummy';
import { useRouter } from 'next/navigation';
import { Session, createClientComponentClient } from '@near/supabase';
import { useEffect, useState } from 'react';

function NearAnimalCardSection() {
  const router = useRouter();
  const data = DummyNearPets;

  const supabase = createClientComponentClient();
  const [userSession, setUserSession] = useState<Session | null>();

  async function getUserSession() {
    const { data, error } = await supabase.auth.getSession();
    if (data) {
      setUserSession(data.session);
    }
    if (error) {
      console.log(error);
    }
  }

  function handlePostButtonClick(url: string) {
    router.push(url);
  }

  useEffect(() => {
    getUserSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='flex flex-col items-center w-full mt-[76px] mobile:mt-[76px] tablet:mt-[123px] desktop:mt-[65px]'>
      {/* 근처 동물 찾기, 유기견 등록하기 버튼 */}
      <div className='w-full flex justify-end items-center gap-6 pr-[1.875rem] desktop:mr-20'>
        <div className='relative'>
          <ButtonMedium mode='outline'>
            근처 동물 찾기
            <Icon icon={'ic_chevron_down'} sizes={'md'} state={'active'} />
          </ButtonMedium>
          {/* <div className='absolute z-10 flex flex-col mt-[0.625rem] -translate-x-1/2 bg-white py-2 pl-6 pr-4 border rounded-lg shadow left-1/2 border-text-gray'>
            <span>asdasdasd</span>
            <span>asdasdasd</span>
            <span>asdasdasd</span>
            <span>asdasdasd</span>
          </div> */}
        </div>
        <ButtonMedium
          className='h-10'
          onClick={() =>
            handlePostButtonClick(userSession ? `/pet/post` : '/login')
          }
        >
          유기견 등록하기
        </ButtonMedium>
      </div>
      {/* 카드 정렬 순서 선택 버튼 */}
      <div className='flex items-center w-full gap-[1.3125rem] mobile:gap-[1.3125rem] tablet:gap-8 desktop:gap-8'></div>
      {/* 카드 리스트 */}
      <ul className='flex flex-wrap items-center justify-center w-full mt-8 mb-10 gap-x-5 gap-y-7 mobile:mt-8 mobile:mb-10 mobile:gap-x-5 mobile:gap-y-7 tablet:gap-x-16 tablet:gap-y-12 tablet:mt-10 tablet:mb-10 desktop:mt-10 desktop:mb-[7.5rem] desktop:gap-12'>
        {data.map((item, index) => (
          <li key={`home_near_pets_${index}`}>
            <CardWithLike
              petData={item.petData}
              src={item.src}
              tags={item.tags}
              cardNumber={item.cardNumber}
            />
          </li>
        ))}
      </ul>
      <Pagination total={1} currentPage={1} onPageChange={function () {}} />
    </section>
  );
}

export default NearAnimalCardSection;
