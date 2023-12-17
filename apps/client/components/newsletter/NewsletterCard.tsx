'use client';

import { createClientComponentClient } from '@near/supabase';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Tag } from 'ui';

const NewsletterCard = () => {
  const supabase = createClientComponentClient();
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchNewsletter = async () => {
      let { data: newsletter, error } = await supabase
        .from('newsletter')
        .select('*');

      if (newsletter) {
        setData(newsletter);
      }

      if (error instanceof Error) {
        console.log(error);
      }
    };
    fetchNewsletter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const { subject, subheading } = props;
  return (
    <div>
      {data.map((a, i) => {
        return (
          <div className='grid mt-[100px] flex justify-center' key={a}>
            <section className='layout-max-width'>
              <div className='mobile:relative mobile:flex mobile:justify-center tablet:w-[496px] tablet:h-[500px] tablet:flex tablet:justify-center desktop:w-[620px] desktop:h-[500px]'>
                <Image
                  src={'/images/newsletter/Rectangle 1545.png'}
                  alt={'등록된 사진이 존재하지 않습니다.'}
                  className='object-cover tablet:w-[496px] tablet:h-[500px] desktop:w-[620px] desktop:h-[500px]'
                  width={768}
                  height={500}
                />
                <div className='absolute -bottom-10 bg-white shadow-xl pt-[24px] pl-[32px] mobile:w-[423px] mobile:h-[240px] tablet:w-[461px] tablet:h-[288px] desktop:w-[575px] desktop:h-[264px]'>
                  <div className='flex flex-row justify-between mobile:w-[170px] mobile:mb-[16px] tablet:w-[200px]'>
                    <Tag mode='main'>니어 소식</Tag>
                    <div className='flex items-center'>2023.12.11</div>
                  </div>
                  <div className='grid flex flex-col w-[204px] h-[137px]'>
                    <Link
                      className='font-semibold text-[24px] truncate ...'
                      href={`/newsletter/detail/${data[i].newsletter_id}`}
                    >
                      {data[i].subject}
                    </Link>

                    <Link
                      className='font-extralight text-base truncate ...'
                      href={`/newsletter/detail/${data[i].newsletter_id}`}
                    >
                      {data[i].subheading}
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default NewsletterCard;
