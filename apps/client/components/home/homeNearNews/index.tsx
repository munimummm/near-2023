import {
  HeaderButton,
  HeaderTitle,
  PostThumbnailCard,
  VolunteerCard,
} from 'ui';
import { DummyHomeJoinVolunteer, DummyHomeNearNews } from '../dummy';

function JoinVolunteer() {
  const dummy = DummyHomeJoinVolunteer;

  return (
    <section className='flex flex-col'>
      <div className='flex py-[2.125rem] px-[4.8125rem] justify-center mobile:justify-center tablet:justify-center desktop:justify-start'>
        <HeaderTitle title='니어 봉사활동 함께하기'>
          <HeaderButton href='/volunteer' />
        </HeaderTitle>
      </div>
      <ul className='flex flex-col justify-center w-full max-w-[48.25rem] gap-12 flex-nowrap mobile:flex-col mobile:flex-nowrap mobile:gap-12 tablet:flex-row tablet:flex-wrap tablet:gap-6 desktop:flex-row desktop:flex-wrap desktop:gap-6'>
        {dummy.map((item, index) => (
          <li key={`home_join_volunteer_${index}`}>
            <VolunteerCard
              src={item.src}
              id={item.id}
              title={item.title}
              subTitle={item.subTitle}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

function NearNews() {
  const dummy = DummyHomeNearNews;

  return (
    <section className='flex flex-col'>
      <div className='flex py-[2.125rem] px-[4.8125rem] justify-center mobile:justify-center tablet:justify-center desktop:justify-start'>
        <HeaderTitle title='니어 소식'>
          <HeaderButton href='/newsletter' />
        </HeaderTitle>
      </div>

      <ul className='flex flex-col gap-6 mobile:gap-6 tablet:gap-3 desktop:gap-3'>
        {dummy.map((item, index) => (
          <li key={`home_news_${index}`}>
            <PostThumbnailCard
              href={`/newsletter/${item.id}`}
              category={item.category}
              title={item.title}
              date={item.date}
              author={item.author}
              src={item.src}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

function HomeNearNews() {
  return (
    <section className='flex flex-col justify-center items-center gap-[7.5rem] mobile:gap-[7.5rem] mobile:flex-col tablet:gap-[11.25rem] tablet:flex-col desktop:gap-6 desktop:flex-row'>
      <JoinVolunteer />
      <NearNews />
    </section>
  );
}

export default HomeNearNews;
