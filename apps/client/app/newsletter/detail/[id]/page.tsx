'use client';

import { createClientComponentClient } from '@near/supabase';
import { useEffect, useState } from 'react';
import { Breadcrumb, Footer, Tag, Top } from 'ui';
import TopCarousel from '../../../../components/home/TopCarousel';
import { TopData } from '../../../../components/home/dummy';

interface NewsletterDetail {
  subject: string;
  subheading: string;
}

const NewsletterDetail = ({ params }: { params: { id: number } }) => {
  const supabase = createClientComponentClient();
  // const [userSession, setUserSession] = useState<User | null>();
  const [detail, setDetail] = useState<any[]>([]);

  useEffect(() => {
    const fetchSession = async () => {
      // let {
      //   data: { user },
      // } = await supabase.auth.getUser();

      let { data: newsletter, error } = await supabase
        .from('newsletter')
        .select('*')
        .eq('newsletter_id', Number(params.id));

      // if (user != null) {
      //   setUserSession(user);
      // }

      if (newsletter) {
        setDetail(newsletter);
      }

      if (error instanceof Error) {
        console.log(error);
      }
    };
    fetchSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <section className='layout-max-width'>
        <div>
          <Top />
        </div>
        <div className='mt-[6.25rem] pl-[2.5rem] mobile:mb-[1.875rem] desktop:mb-[4.8125rem]'>
          <Breadcrumb items={['뉴스레터', '전체 글', '상세 내용']} />
        </div>
        <div className='mt-[3.75rem] h-[9.375rem] pl-[2rem] border-b-4 mb-[3rem]'>
          <Tag mode='stroke'>니어 소식</Tag>
          <div className='mt-[0.625rem] text-[1.25rem] font-bold'>
            {detail[0]?.subject}
          </div>
          <div className='mt-[0.625rem] flex'>
            {/* <ProfileImage src='/images/profile/img_profile_default.png' /> */}
            <div className='ml-[0.625rem] text-xs pt-[0.125rem] tablet:pt-[0.625rem]'>
              {/* {userSession?.email} | */}
            </div>
            <div className='text-xs pt-[0.125rem] tablet:pt-[0.625rem]'>
              {detail[0]?.created_at
                .substr(0, 10)
                .replace('-', '.')
                .replace('-', '.')}
            </div>
          </div>
        </div>
        <div className='pl-[0.75rem] mb-[3rem]'>{detail[0]?.subheading}</div>
        <TopCarousel slides={TopData} />
        <div className='mobile:w-full tablet:w-full desktop:w-full whitespace-pre-wrap mt-[3rem] px-[1.5rem] mb-[22.75rem]'>
          {detail[0]?.article}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NewsletterDetail;
