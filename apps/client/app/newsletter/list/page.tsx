'use client';

// import { User, createClientComponentClient } from '@near/supabase';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
import {
  Breadcrumb,
  Footer,
  Top,
  // Pagination
} from 'ui';
import NewsletterCard from '../../../components/newsletter/NewsletterCard';

// interface NewsletterListProps {}

const NewsletterList = () => {
  // const router = useRouter();
  // const supabase = createClientComponentClient();
  // const [userSession, setUserSession] = useState<User | null>();
  // const [news, setNews] = useState<any[] | null>();

  // useEffect(() => {
  //   const fetchSession = async () => {
  //     let {
  //       data: { user },
  //     } = await supabase.auth.getUser();

  //     if (user != null) {
  //       setUserSession(user);
  //     }

  //     // if (!data.session) {
  //     //   router.push('/');
  //     // } else {
  //     //   console.log('session error');
  //     // }
  //   };
  //   fetchSession();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
        <div>
          <Top />
        </div>
        <div className='mt-[6.25rem] pl-[2.5rem] mobile:mb-[1.875rem] desktop:mb-[4.8125rem]'>
          <Breadcrumb items={['뉴스레터', '전체 글']} />
        </div>
        <section className=''>
          <div className='flex flex-row justify-between h-[4.625rem] pt-[0.75rem] px-[2rem] mb-[3rem] border-b-4'>
            <div className='font-bold text-[1.25rem]'>NEAR 뉴스레터</div>
            {/* <div className='text-s'>더보기</div> */}
          </div>
          <NewsletterCard />;
          <div className='flex justify-center'>
            <button
              type='button'
              className='mt-[9.375rem] w-[29.375rem] h-[3.75rem] bg-slate-200 rounded-lg flex items-center pl-[1.25rem] tablet:hidden'
            >
              더 많은 뉴스레터 보기
            </button>
          </div>
          {/* <div className='tablet:flex tablet:justify-center tablet:mt-[100px] mobile:hidden'>
            <Pagination total={5} />
          </div> */}
        </section>
        <div className='mt-[12.5rem]'>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default NewsletterList;
