'use client';

import Image from 'next/image';

function RoundImageSection({ src, alt, text }) {
  return (
    <div className='flex flex-col items-center gap-3'>
      <div className='relative w-[7.375rem] h-[7.375rem] tablet:w-[11.8125rem] tablet:h-[11.8125rem] desktop:w-[20rem] desktop:h-[20rem] rounded-full'>
        <Image fill className='rounded-full' src={src} alt={alt}></Image>
      </div>
      <span>{text}</span>
    </div>
  );
}

function page() {
  return (
    <main className='pt-[4.5rem]'>
      <div className='layout_max_width'></div>
      <header className=' tablet:py-6 tablet:px-11'>
        <h2 className='text-2xl pt-2.5 pb-[1.625rem] px-8 font-bold tablet:text-4xl desktop:text-5xl'>
          About us
        </h2>
        <hr />
      </header>
      <div className='flex flex-col gap-[11.25rem] pt-[3.125rem] tablet:pt-24  tablet:gap-[12rem] desktop:gap-[23rem]'>
        <section className='flex flex-col items-center justify-center gap-6 tablet:gap-8'>
          <h3 className='py-6 text-xl font-bold tablet:py-8 tablet:text-2xl desktop:text-4xl'>
            History
          </h3>
          <p className='items-center justify-center px-8 text-sm text-center whitespace-pre-line tablet:text-base desktop:text-lg'>
            {`농림축산식품부의 조사에 따르면 2017년부터 2021년까지 `}
            <strong>매년 10만 마리이상</strong>
            {`의 유기 동물이 발생하고 있습니다.
            개의 경우 법적으로 등록이 의무화되어 있어 수치를 어림짐작
            할수있지만, 고양이는 정확한 수치를 알아내는것 조차 쉽지 않습니다.`}
          </p>
          <div className='flex flex-col gap-8 mt-4 desktop:flex-row'>
            <div>
              <div className='relative w-[26.25rem] h-[15.625rem] rounded-lg desktop:w-[48.75rem] desktop:h-[29rem] desktop:rounded-2xl '>
                <Image
                  fill
                  src='/images/aboutus/history.png'
                  alt='history'
                ></Image>
              </div>
              <blockquote
                className='text-xs'
                cite='https://news.sbs.co.kr/news/endPage.do?news_id=N1006610468'
              >
                <cite>출처: SBS 뉴스 [Pick]</cite>
                {`"오물 범벅, 개 사체 뜯어먹어"…'지옥'된
                유기견 보호소 (sbs.co.kr)`}
              </blockquote>
            </div>
            <p className='flex justify-center pt-[0.75rem] px-4 text-sm text-center whitespace-pre-line desktop:text-start tablet:text-base desktop:text-lg'>
              {`공설 보호소의 경우 개체수 조절을 위해 안락사를 진행하고, 
            사설 보호소는 열악한 환경 속에서 봉사자들의 
            도움과 후원으로 겨우 운영이 되고 있습니다.

            대부분의 사설 보호소는 인적이 드문 외곽 지역에 위치합니다. 

            주소를 공개하면 밤새 몰래 개를 버리고 가는 사람들 때문에
                쉽사리 주소를 공개할 수 없습니다.`}
            </p>
          </div>
        </section>

        <section className='flex flex-col items-center justify-center gap-6 tablet:gap-8'>
          <h3 className='py-6 text-xl font-bold tablet:py-8 tablet:text-2xl desktop:text-4xl'>
            Goal
          </h3>
          <div className='flex flex-col items-center w-full gap-10'>
            <div className='relative w-full h-[13.1875rem] desktop:h-[25.0625rem]'>
              <Image fill src='/images/aboutus/goal.png' alt='goal'></Image>
            </div>
            <p className='text-base table:text-lg desktop:text-xl'>
              니어는 두가지 목표 아래 만들어졌습니다.
            </p>
            <p className='text-xl font-extrabold tablet:text-2xl desktop:text-3xl text-theme-main'>
              1. 투명한 정보 공개
            </p>
            <p className='text-xl font-extrabold tablet:text-2xl desktop:text-3xl text-theme-main'>
              2. 한번에 유기견 정보를 확인할 수 있는 공간의 필요성
            </p>
            <p className='text-base table:text-lg desktop:text-xl'>
              내 주위의 동물이 행복해지도록
            </p>
          </div>
        </section>

        <section className='flex flex-col items-center justify-center gap-6 tablet:gap-8'>
          <h3 className='py-6 text-xl font-bold tablet:py-8 tablet:text-2xl desktop:text-4xl'>
            OutCome
          </h3>
          <div className='flex gap-[1.625rem] tablet:gap-[2.625rem] desktop:gap-[4.5rem]'>
            <RoundImageSection
              src='/images/aboutus/outcome1.png'
              alt='outCome1'
              text='근처동물'
            />
            <RoundImageSection
              src='/images/aboutus/outcome2.png'
              alt='outCome2'
              text='봉사신청'
            />
            <RoundImageSection
              src='/images/aboutus/outcome3.png'
              alt='outCome3'
              text='임보일기'
            />
          </div>
          <p className='px-8 text-sm text-center whitespace-pre-line tablet:text-base desktop:text-lg'>
            {`우리는 이 서비스가 언젠가 종료되길 원합니다.
                우리 주변의 모든 동물들이행복한 삶을 살아
            더이상 이 서비스를 찾지 않는 세상을 희망합니다.`}
          </p>
        </section>
        <section></section>
      </div>
    </main>
  );
}

export default page;
