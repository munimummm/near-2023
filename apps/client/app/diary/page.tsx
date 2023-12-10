'use client';
import { createClientComponentClient } from '@near/supabase';
import { useEffect, useState } from 'react';
import { Pagination } from 'ui';
import Button from 'ui/components/buttons/Button';

interface DiaryProps {
  subject: string;
}

function Top() {
  return (
    <div className='relative flex justify-center tablet: w-full  bg-gray-500 h-52 tablet:h-[25rem] desktop:h-[44rem] mb-10 tablet:mb-16 desktop:mb-20'>
      <div className='absolute text-3xl font-normal text-white top-12 tablet:top-44 desktop:top-[24.5rem]  tablet:text-4xl tablet:font-bold desktop:font-bold desktop:text-4xl tablet:right-[3.375rem] desktop:right-[4.6875rem] '>
        NEAR 임보일기
      </div>
      <div className='absolute hidden font-medium text-2xl text-white text-right tablet:flex desktop:flex tablet:top-[13.6875rem] desktop:top-[27.875rem] tablet:right-[3.375rem] desktop:right-[4.6875rem]'>
        {`반려동물의 소중한 성장 과정을 
        임보일기로 기록하세요.`}
      </div>
      <div className='absolute top-[8.375rem]  tablet:top-[19.4375rem] tablet:right-[2.8125rem] desktop:top-[35.625rem] desktop:right-[3.875rem]'>
        <Button mode='main'>내 임보일기 쓰기</Button>
      </div>
    </div>
  );
}

function CardItem({ subject }) {
  return (
    <div className='w-[13.9375rem] h-[17.125rem] shadow-md rounded-lg desktop:w-[26.25rem] desktop:h-[28.5rem] tablet:w-[22.5rem] tablet:h-[26.5rem] '>
      <div>
        {/* <Image ></Image> */}
        <div>{subject}</div>
      </div>
    </div>
  );
}

function CardSection({ subject }) {
  return (
    <div>
      <div className='px-4 py-6 tablet:px-11 desktop:px-11'>
        <div className='mb-4 text-2xl tablet:text-4xl desktop:text-4xl '>
          전체 임보일기
        </div>
        <hr />
      </div>
      <div className='grid grid-cols-2 mt-12 desktop:grid-cols-3'>
        <CardItem subject={subject} />
        <CardItem subject={subject} />
        <CardItem subject={subject} />
        <CardItem subject={subject} />
        <CardItem subject={subject} />
        <CardItem subject={subject} />
        <CardItem subject={subject} />
        <CardItem subject={subject} />
        <CardItem subject={subject} />
        <CardItem subject={subject} />
      </div>
    </div>
  );
}

function DiaryHomePage() {
  const supabase = createClientComponentClient();
  const [data, setData] = useState<DiaryProps[]>([]);
  const [page, setPage] = useState(0);

  const getFromAndTo = () => {
    const ITEM_PAGE = 12;
    let from = page * ITEM_PAGE;
    let to = from + ITEM_PAGE;
    // if (page > 0) {
    //   from += 1;
    // }
    return { from, to };
  };

  const fetchData = async () => {
    const { from, to } = getFromAndTo();
    const { data, error } = await supabase
      .from('shelter_profile')
      .select('subject')
      .range(from, to);
    if (error) {
      console.log(error);
    }
    if (data) {
      setPage(page + 1);
      setData((cur) => [...cur, ...data]);
    }

    console.log(from, to);
    console.log(data?.length);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Top />
      <CardSection subject={data} />
      <Pagination total={data.length} />
    </div>
  );
}

export default DiaryHomePage;
