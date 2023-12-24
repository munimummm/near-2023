import { SectionInformationProps } from '../types/types';

export function SectionInformation({ ...props }: SectionInformationProps) {
  return (
    <section className='w-full'>
      <div className='flex flex-col gap-4 px-0 pt-[0.625rem] pb-4 mobile:px-0 mobile:pt-[0.625rem] mobile:pb-4 tablet:px-[2.8125rem] tablet:py-6 desktop:[2.8125rem] desktop:py-6'>
        <h1 className='px-8 text-lg font-semibold leading-7 text-text-black1 mobile:text-lg mobile:leading-7 tablet:text-2xl tablet:leading-loose desktop:text-2xl desktop:leading-loose mobile:px-8 tablet:px-8 tablet:pt-[0.625rem] desktop:px-8 desktop:pt-[0.625rem]'>
          유기동물 정보
        </h1>
        <hr className='bg-gray-1' />
      </div>
      <InformationList
        rescue_spot={props.rescue_spot}
        rescue_start_date={props.rescue_start_date}
        admission_date={props.admission_date}
        rescue_end_date={props.rescue_end_date}
        race={props.race}
        race_detail={props.race_detail}
        size={props.size}
        gender={props.gender}
        state_of_health={props.state_of_health}
        age={props.age}
      />
    </section>
  );
}

function InformationList({ ...props }: SectionInformationProps) {
  const information = [
    { title: '구조장소', content: props.rescue_spot },
    { title: '구조일', content: props.rescue_start_date },
    { title: '담당 보호소', content: props.rescue_spot ? '사설 보호소' : '' },
    { title: '입소일', content: props.admission_date },
    { title: '보호 종료일', content: props.rescue_end_date },
    {
      title: '품종',
      content:
        props.race && props.race_detail && props.size
          ? `${props.race} | ${props.race_detail} | ${props.size}kg`
          : '',
    },
    { title: '성별', content: props.gender },
    { title: '추정 나이', content: props.age ? `${props.age}살` : '' },
    { title: '건강상태', content: props.state_of_health },
  ];

  return (
    <ul className='flex flex-col w-full gap-10 px-8 py-2 mobile:gap-10 mobile:px-8 mobile:py-2 tablet:gap-6 tablet:px-20 desktop:gap-6 desktop:px-20'>
      {information.map((info) => (
        <li
          key={info.title}
          className='flex items-center justify-between mobile:justify-between tablet:gap-[1.625rem] tablet:justify-normal desktop:gap-20 desktop:justify-normal'
        >
          <span className='text-sm font-normal leading-tight text-text-black1 mobile:text-sm mobile:leading-tight tablet:w-[7.375rem] tablet:text-lg tablet:leading-7 desktop:w-[7.5rem] desktop:text-lg desktop:leading-7'>
            {info.title}
          </span>
          <span className='text-base font-semibold leading-normal text-text-black1 mobile:text-base mobile:leading-normal tablet:text-lg tablet:leading-7 desktop:text-lg desktop:leading-7'>
            {info.content}
          </span>
        </li>
      ))}
    </ul>
  );
}
