'use client';
import { createClientComponentClient } from '@near/supabase';
import { useEffect, useState } from 'react';
import { Pagination } from 'ui';
import CardItem from '../../components/diary/diaryCardItem';
import { useRouter } from 'next/navigation';
import { getFromAndTo } from '../../utils/getFromAndTo';

interface DiaryProps {
  name: string;
  lost_pet_id: number;
}

function DiaryHomeTop() {
  return (
    <div className='relative flex justify-center tablet: w-full  bg-gray-500 h-52 tablet:h-[25rem] desktop:h-[44rem] mb-10 tablet:mb-16 desktop:mb-20'>
      <div className='absolute text-3xl font-normal text-white top-12 tablet:top-44 desktop:top-[24.5rem]  tablet:text-4xl tablet:font-bold desktop:font-bold desktop:text-4xl tablet:right-[3.375rem] desktop:right-[4.6875rem] '>
        NEAR 임보일기
      </div>
      <div className='absolute hidden font-medium text-2xl text-white text-right tablet:flex desktop:flex tablet:top-[13.6875rem] desktop:top-[27.875rem] tablet:right-[3.375rem] desktop:right-[4.6875rem]'>
        {`반려동물의 소중한 성장 과정을 
        임보일기로 기록하세요.`}
      </div>
    </div>
  );
}
function DiaryHomeTitle() {
  return (
    <div className='px-4 py-6 tablet:px-10 desktop:px-11'>
      <div className='mb-4 text-2xl tablet:text-4xl desktop:text-4xl '>
        전체 임보일기
      </div>
      <hr />
    </div>
  );
}

function DiaryHomePage() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [data, setData] = useState<DiaryProps[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const fetchData = async () => {
    const { from, to } = getFromAndTo(currentPage, itemsPerPage);

    const { data, error, count } = await supabase
      .from('lost_pet_information')
      .select('*', { count: 'exact' })
      .eq('foster', true)
      .range(from, to);
    if (error) {
      console.log(error);
    }
    if (data) {
      if (count) {
        setTotalPages(Math.ceil(count / itemsPerPage));
      }
      setData((cur) => [...cur, ...data]);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <DiaryHomeTop />
      <div>
        <DiaryHomeTitle />
        <ul className='grid grid-cols-2 px-[1.0625rem] gap-x-[0.875rem] gap-y-4 max-w-[30rem]  mt-9 tablet:gap-8 tablet:max-w-[48rem] desktop:max-w-[1440px] desktop:grid-cols-3'>
          {data.map((item, index) => (
            <li key={`${item.lost_pet_id}_${index}`}>
              <CardItem
                onClick={() =>
                  router.push(`/diary/lostpetdetail/${item.lost_pet_id}`)
                }
                title={`${item.name}의 임보일기`}
              />
            </li>
          ))}
        </ul>
        {totalPages > 1 && (
          <Pagination
            total={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}

export default DiaryHomePage;
