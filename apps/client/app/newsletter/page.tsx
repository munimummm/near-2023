'use client';

import { User, createClientComponentClient } from '@near/supabase';
import { useEffect, useState } from 'react';
import {
  Breadcrumb,
  Footer,
  // Pagination,
  TextInput,
  Top,
  TopSuspense,
} from 'ui';
import NewsletterCard from '../../components/newsletter/NewsletterCard';
import { useForm } from '@near/react-hook-form';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface NewsletterHomeProps {
  subject?: string;
  subheading?: string;
  search?: string;
}

const NewsletterHome = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const { control } = useForm<NewsletterHomeProps>({
    defaultValues: {
      search: '',
    },
    mode: 'onChange',
  });
  const [userSession, setUserSession] = useState<User | null>();
  const [visible, setVisible] = useState<boolean>(false);
  // const [news, setNews] = useState<any[] | null>();

  useEffect(() => {
    const fetchSession = async () => {
      let {
        data: { user },
      } = await supabase.auth.getUser();

      if (user != null) {
        setUserSession(user);
      }
    };
    fetchSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickMore = async () => {
    setVisible(!visible);
  };

  const onClickList = async () => {
    router.push('/newsletter/list');
  };

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
        <div className='mt-[6.25rem] pl-[2.5rem] mobile:mb-[1.875rem] desktop:mb-[4.8125rem]'>
          <Breadcrumb items={['뉴스레터', '홈']} />
        </div>
        <div className='relative bg-slate-300 mobile:mb-[4.375rem]'>
          <Image
            src={'/images/newsletter/header_image.png'}
            alt={'등록된 사진이 존재하지 않습니다.'}
            className='object-cover'
            width={1440}
            height={500}
          />
          <div className='absolute bottom-0 left-5 desktop:bottom-0'>
            <div className='text-white font-bold mobile:text-[1.5rem] pb-[0.625rem]'>
              NEAR 뉴스레터
            </div>
            <div className='flex flex-col w-[18.75rem] h-[4.9375rem]'>
              <span className='text-xs text-white'>
                우리는 어쩌면 유기견에 대해 잘 모를 수도 있어요
              </span>
              <span className='text-xs text-white'>
                서로에 대해 조금씩 알아갈 수 있도록
              </span>
              <span className='text-xs text-white'>
                NEAR가 우리 근처의 유기견 이야기들을
              </span>
              <span className='text-xs text-white'>
                매주 한 번 전달해 드릴게요
              </span>
            </div>
          </div>
        </div>
        <section className=''>
          <div className='mobile:w-[17.5rem] mobile:ml-[2rem] tablet:w-[23.75rem] desktop:w-[25rem]'>
            <TextInput
              state='search'
              name={'search'}
              control={control}
              borderRadius={true}
              placeholder='검색어를 입력하세요'
            />
          </div>
          <div className='flex flex-row justify-between h-[4.625rem] pt-[0.75rem] px-[2rem] mb-[3rem] border-b-4'>
            <div className='font-bold text-[1.25rem]'>
              NEAR가 추천하는 뉴스레터
            </div>
            <button className='text-s' onClick={onClickList}>
              더보기
            </button>
          </div>
          <NewsletterCard />
          <div className='flex justify-center'>
            {/* {visible === true ? null : ( */}
            <button
              type='button'
              className='mt-[9.375rem] w-[29.375rem] h-[3.75rem] bg-slate-200 rounded-lg flex items-center pl-[1.25rem] tablet:hidden'
              onClick={onClickMore}
            >
              더 많은 뉴스레터 보기
            </button>
            {/* )} */}
            {/* {visible && <NewsletterCard />} */}
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

export default NewsletterHome;
