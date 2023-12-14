'use client';

import { User, createClientComponentClient } from '@near/supabase';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Breadcrumb,
  Footer,
  Pagination,
  TextInput,
  Top,
  TopSuspense,
} from 'ui';
import NewsletterCard from '../../../components/newsletter/NewsletterCard';
import { useForm } from '@near/react-hook-form';
import Image from 'next/image';

interface NewsletterHomeProps {
  subject?: string;
  subheading?: string;
  search?: string;
}

const NewsletterHome = () => {
  const supabase = createClientComponentClient();
  const { id } = useParams();
  const { control } = useForm<NewsletterHomeProps>({
    defaultValues: {
      search: '',
    },
    mode: 'onChange',
  });
  const [userSession, setUserSession] = useState<User | null>();
  const [news, setNews] = useState<any[] | null>();

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

  useEffect(() => {
    const fetchNewsletter = async () => {
      let { data: newsletter, error } = await supabase
        .from('newsletter')
        .select('*');

      if (newsletter != null) {
        setNews(newsletter);
      }

      if (error instanceof Error) {
        throw new Error(error.message);
      }
    };
    fetchNewsletter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(id);

  return (
    <div>
      <section className='layout_max_width'>
        <div>{userSession ? <Top /> : <TopSuspense />}</div>
        <div className='mt-[100px] pl-[40px] mobile:mb-[30px] desktop:mb-[77px]'>
          <Breadcrumb items={['뉴스레터', '홈']} />
        </div>
        <div className='relative bg-slate-300 mobile:mb-[70px]'>
          <Image
            src={'/images/newsletter/header_image.png'}
            alt={'등록된 사진이 존재하지 않습니다.'}
            className='object-cover'
            width={1440}
            height={500}
          />
          <div className='absolute bottom-0 left-5 desktop:bottom-0'>
            <div className='text-white font-bold mobile:text-[24px] pb-[10px]'>
              NEAR 뉴스레터
            </div>
            <div className='flex flex-col w-[300px] h-[79px]'>
              <span className='text-white text-xs'>
                우리는 어쩌면 유기견에 대해 잘 모를 수도 있어요
              </span>
              <span className='text-white text-xs'>
                서로에 대해 조금씩 알아갈 수 있도록
              </span>
              <span className='text-white text-xs'>
                NEAR가 우리 근처의 유기견 이야기들을
              </span>
              <span className='text-white text-xs'>
                매주 한 번 전달해 드릴게요
              </span>
            </div>
          </div>
        </div>
        <section className=''>
          <div className='mobile:w-[280px] mobile:ml-[32px] tablet:w-[380px] desktop:w-[400px]'>
            <TextInput
              state='search'
              name={'search'}
              control={control}
              borderRadius={true}
              placeholder='검색어를 입력하세요'
            />
          </div>
          <div className='flex flex-row justify-between h-[74px] pt-[12px] px-[32px] mb-[48px] border-b-4'>
            <div className='font-bold text-[20px]'>
              NEAR가 추천하는 뉴스레터
            </div>
            <div className='text-s'>더보기</div>
          </div>
          {news?.map((el, index) => {
            return (
              <NewsletterCard
                key={index}
                subject={el.subject}
                subheading={el.subheading}
              />
            );
          })}
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

export default NewsletterHome;
