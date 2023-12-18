'use client';

import { User, createClientComponentClient } from '@near/supabase';
import { useEffect, useState } from 'react';
import { Breadcrumb, Footer, ProfileImage, Tag, Top, TopSuspense } from 'ui';
import TopCarousel from '../../../../components/home/TopCarousel';
import { TopData } from '../../../../components/home/dummy';

interface NewsletterDetail {
  subject: string;
  subheading: string;
}

const NewsletterDetail = ({ params }: { params: { id: number } }) => {
  const supabase = createClientComponentClient();
  const [userSession, setUserSession] = useState<User | null>();
  const [detail, setDetail] = useState<any[]>([]);

  useEffect(() => {
    const fetchSession = async () => {
      let {
        data: { user },
      } = await supabase.auth.getUser();

      let { data: newsletter, error } = await supabase
        .from('newsletter')
        .select('*')
        .eq('newsletter_id', Number(params.id));

      console.log(newsletter);

      if (user != null) {
        setUserSession(user);
      }

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
        <div>{userSession ? <Top /> : <TopSuspense />}</div>
        <div className='mt-[100px] pl-[40px] mobile:mb-[30px] desktop:mb-[77px]'>
          <Breadcrumb items={['뉴스레터', '전체 글', '상세 내용']} />
        </div>
        <div className='mt-[60px] h-[150px] pl-[32px] border-b-4 mb-[48px]'>
          <Tag mode='stroke'>니어 소식</Tag>
          <div className='mt-[10px] text-[20px] font-bold'>
            {detail[0]?.subject}
          </div>
          <div className='mt-[10px] flex'>
            <ProfileImage src='/images/profile/img_profile_default.png' />
            <div className='ml-[10px] text-xs pt-[2px] tablet:pt-[10px]'>
              {userSession?.email} |
            </div>
            <div className='ml-[10px] text-xs pt-[2px] tablet:pt-[10px]'>
              {/* {detail[0]?.created_at} */}
            </div>
          </div>
        </div>
        <div className='pl-[12px] mb-[48px]'>{detail[0]?.subheading}</div>
        <TopCarousel slides={TopData} />
        <div className='mt-[48px] px-[24px] mb-[364px]'>
          {/* {detail[0]?.article} */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NewsletterDetail;
