import React from 'react';
import Button from 'ui/components/buttons/Button';

function Top() {
  return (
    <div className='relative flex justify-center tablet: w-full  bg-gray-500 h-52 tablet:h-[25rem] desktop:h-[44rem] mb-10 tablet:mb-16 desktop:mb-20'>
      <div className='absolute text-3xl font-normal text-white top-12 tablet:top-44 desktop:top-[24.5rem]  tablet:text-4xl tablet:font-bold desktop:font-bold desktop:text-4xl tablet:right-[3.375rem] desktop:right-[4.6875rem] '>
        NEAR 임보일기
      </div>
      <div className='absolute hidden font-medium text-2xl text-white text-right tablet:flex desktop:flex tablet:top-[13.6875rem] desktop:top-[27.875rem] tablet:right-[3.375rem] desktop:right-[4.6875rem]'>
        반려동물의 소중한 성장 과정을 <br />
        임보일기로 기록하세요.
      </div>
      <div className='absolute top-[8.375rem]  tablet:top-[19.4375rem] tablet:right-[2.8125rem] desktop:top-[35.625rem] desktop:right-[3.875rem]'>
        <Button mode='main'>내 임보일기 쓰기</Button>
      </div>
    </div>
  );
}

function CardSection() {
  return (
    <div>
      <div className='px-4 py-6 tablet:px-11 desktop:px-11'>
        <div className='mb-4 text-2xl tablet:text-4xl desktop:text-4xl '>
          전체 임보일기
        </div>
        <hr />
      </div>
      <div className='mt-12'>
        <div>카드리스트</div>
      </div>
    </div>
  );
}

function page() {
  return (
    <div>
      <Top />
      <CardSection />
    </div>
  );
}

export default page;
