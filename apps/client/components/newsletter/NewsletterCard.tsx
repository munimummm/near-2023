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
        .select('*')
        .range(0, 5);

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
    <div className='desktop:grid desktop:grid-cols-2'>
      {data.map((a, i) => {
        return (
          <div
            className='grid mt-[6.25rem] flex justify-center'
            key={a.newsletter_id}
          >
            <section className='layout-max-width'>
              <div className='mobile:relative mobile:flex mobile:justify-center tablet:w-[31rem] tablet:h-[31.25rem] tablet:flex tablet:justify-center desktop:w-[38.75rem] desktop:h-[31.25rem]'>
                <Image
                  src={'/images/newsletter/Rectangle 1545.png'}
                  alt={'등록된 사진이 존재하지 않습니다.'}
                  className='object-cover tablet:w-[31rem] tablet:h-[31.25rem] desktop:w-[38.75rem] desktop:h-[31.25rem]'
                  width={768}
                  height={500}
                />
                <div className='absolute -bottom-10 bg-white shadow-xl pt-[1.5rem] pl-[2rem] mobile:w-[26.4375rem] mobile:h-[15rem] tablet:w-[28.8125rem] tablet:h-[18rem] desktop:w-[35.9375rem] desktop:h-[16.5rem]'>
                  <div className='flex flex-row justify-between mobile:w-[10.625rem] mobile:mb-[1rem] tablet:w-[12.5rem]'>
                    <Tag mode='main'>니어 소식</Tag>
                    <div className='flex items-center'>
                      {data[i].created_at
                        .substr(0, 10)
                        .replace('-', '.')
                        .replace('-', '.')}
                    </div>
                  </div>
                  <div className='grid flex flex-col w-[12.75rem] h-[8.5625rem]'>
                    <Link
                      className='font-semibold text-[1.5rem] truncate ...'
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
