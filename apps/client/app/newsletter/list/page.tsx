'use client';

import { User, createClientComponentClient } from '@near/supabase';
// import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Breadcrumb, Footer, Top, TopSuspense, Pagination } from 'ui';
import NewsletterCard from '../../../components/newsletter/NewsletterCard';

// interface NewsletterListProps {}

const NewsletterList = () => {
  // const router = useRouter();
  const supabase = createClientComponentClient();
  const [userSession, setUserSession] = useState<User | null>();
  // const [news, setNews] = useState<any[] | null>();

  useEffect(() => {
    const fetchSession = async () => {
      let {
        data: { user },
      } = await supabase.auth.getUser();

      if (user != null) {
        setUserSession(user);
      }

      // if (!data.session) {
      //   router.push('/');
      // } else {
      //   console.log('session error');
      // }
    };
    fetchSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   const fetchNewsletter = async () => {
  //     let { data: newsletter, error } = await supabase
  //       .from('newsletter')
  //       .select('*');

  //     if (newsletter != null) {
  //       setNews(newsletter);
  //     }

  //     if (error instanceof Error) {
  //       throw new Error(error.message);
  //     }
  //   };
  //   fetchNewsletter();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div>
      <section className='layout_max_width'>
        <div>{userSession ? <Top /> : <TopSuspense />}</div>
        <div className='mt-[100px] pl-[40px] mobile:mb-[30px] desktop:mb-[77px]'>
          <Breadcrumb items={['뉴스레터', '전체 글']} />
        </div>
        <section className=''>
          <div className='flex flex-row justify-between h-[74px] pt-[12px] px-[32px] mb-[48px] border-b-4'>
            <div className='font-bold text-[20px]'>NEAR 뉴스레터</div>
            {/* <div className='text-s'>더보기</div> */}
          </div>
          <NewsletterCard />;
          <div className='flex justify-center'>
            <button
              type='button'
              className='mt-[150px] w-[470px] h-[60px] bg-slate-200 rounded-lg flex items-center pl-[20px] tablet:hidden'
            >
              더 많은 뉴스레터 보기
            </button>
          </div>
          <div className='tablet:flex tablet:justify-center tablet:mt-[100px] mobile:hidden'>
            <Pagination total={5} />
          </div>
        </section>
        <div className='mt-[200px]'>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default NewsletterList;
