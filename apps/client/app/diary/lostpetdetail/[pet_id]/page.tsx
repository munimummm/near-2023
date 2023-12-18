'use client';
import { useEffect, useState } from 'react';
import { Button, Pagination } from 'ui';
import { Tabs } from 'ui';
import CardItem from '../../../../components/diary/diaryCardItem';
import { createClientComponentClient } from '@near/supabase';
import { useRouter } from 'next/navigation';
import LostPetDiaryTop from '../../../../components/diary/lostPetDiaryTop';
import { dateFormatting } from '../../../../utils/dateFormatting';
import { getFromAndTo } from '../../../../utils/getFromAndTo';
interface Props {
  params: {
    pet_id: string;
  };
}

function LostpetDiaryDetail({ params }: Props) {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [diaryData, setDiaryData] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const DiaryTabs = [
    { label: '최근 등록 순', value: 'latest' },
    { label: '오래된 순', value: 'oldest' },
  ];

  const fetchData = async () => {
    const { from, to } = getFromAndTo(currentPage, itemsPerPage);
    const { data, error, count } = await supabase
      .from('care_diary')
      .select('*', { count: 'exact' })
      .eq('related_lost_pet_id', params.pet_id)
      .range(from, to);

    if (error) {
      console.error(error);
      return;
    }
    if (data) {
      const formattedData = data.map((item) => {
        const formattedDate = dateFormatting(item.created_at);
        return { ...item, formattedDate };
      });
      setDiaryData(formattedData);
      console.log('리스트', data);
    }
    if (count) {
      setTotalPages(Math.ceil(count / itemsPerPage));
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);
  return (
    <div className='flex flex-col'>
      <section className='relative w-[480px] tablet:w-[768px] desktop:w-[1440px]'>
        <LostPetDiaryTop params={params} />
        <div className='absolute top-[880px] tablet:static desktop:static '>
          <section>
            <div className='flex  flex-col mt-12 mb-6 w-full tablet:w-[768px] desktop:w-[1440px] '>
              <div className='flex items-center justify-between px-4 py-8'>
                <div className='text-2xl tablet:text-4xl desktop:text-4xl'>
                  일기 모아보기
                </div>
                <Button
                  onClick={() => router.push(`/diary/write/${params.pet_id}`)}
                  mode='main'
                >
                  내 임보일기 쓰기
                </Button>
              </div>
              <div className='flex justify-start px-4'>
                <Tabs size='sm' items={DiaryTabs} />
              </div>
            </div>
            <ul className='grid grid-cols-2 px-[1.0625rem] gap-x-[0.875rem] gap-y-4 max-w-[30rem]  mt-9 tablet:gap-8 tablet:max-w-[48rem] desktop:max-w-[1440px] desktop:grid-cols-3'>
              {diaryData.map((item, index) => (
                <li key={`${item.lost_pet_id}_${index}`}>
                  <CardItem
                    onClick={() =>
                      router.push(`/diary/diarydetail/${item.care_diary_id}`)
                    }
                    title={item.subject}
                    date={item.formattedDate}
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
      {totalPages > 1 && (
        <Pagination
          total={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default LostpetDiaryDetail;
