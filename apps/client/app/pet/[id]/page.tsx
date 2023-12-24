'use client';

import { useEffect, useState } from 'react';
import { Session, createClientComponentClient } from '@near/supabase';
import { useRouter } from 'next/navigation';
import { Breadcrumb, ButtonETC, Footer, FooterShadowBox, Top } from 'ui';
import { SectionTitleThumbnails } from '../../../components/pet/detail/SectionThumbnails';
import { SectionInformation } from '../../../components/pet/detail/SectionInformation';
import { SectionTags } from '../../../components/pet/detail/SectionTags';
import { SectionTextarea } from '../../../components/pet/detail/SectionTextarea';
import { AnimalDetailProps } from '../../../components/pet/types/types';

function NearAnimalDetailPage({ params }: { params: { id: number } }) {
  const router = useRouter();
  const [data, setData] = useState<AnimalDetailProps[]>([]);
  const supabase = createClientComponentClient();
  const [userSession, setUserSession] = useState<Session | null>();

  const fetchData = async (id: number) => {
    try {
      const { data } = await supabase
        .from('lost_pet_information')
        .select('*')
        .eq('lost_pet_id', id);

      data ? setData(data) : setData([]);
    } catch (error) {
      console.error(error);
    }
  };

  async function getUserSession() {
    const { data, error } = await supabase.auth.getSession();
    if (data) {
      setUserSession(data.session);
    }
    if (error) {
      console.log(error);
    }
  }

  function handleRibbonButtonClick(url: string) {
    router.push(url);
  }

  useEffect(() => {
    getUserSession();
    fetchData(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const dummyImgData = [
    { id: 1, url: '/mock/nearanimal/img_detail_1.jpg' },
    { id: 2, url: '/mock/nearanimal/img_detail_2.jpg' },
    { id: 3, url: '/mock/nearanimal/img_detail_3.jpg' },
  ];

  return (
    <>
      {/* 헤더 */}
      <Top />

      {/* 데스크탑에서만 보이는 Breadcrumb */}
      <Breadcrumb
        className='hidden w-full mobile:hidden tablet:hidden desktop:flex desktop:pl-10 desktop:pb-[1.3125rem]'
        items={['근처동물', '니어동물 프로필']}
      />
      {/* 메인 */}
      <main className='flex flex-col items-center gap-12 mt-[4.6875rem] pb-[6.625rem] mobile:gap-12 mobile:mt-[2.9375rem] mobile:pt-[4.6875rem] mobile:pb-[6.625rem] tablet:gap-11 tablet:mt-[2.9375rem] tablet:pt-[2.8125rem] tablet:pb-[34.125rem] desktop:gap-[7.5rem] desktop:mt-0 desktop:pt-[5.3125rem] desktop:pb-[16.625rem]'>
        {/* 이름 & 이미지 섹션 */}
        <SectionTitleThumbnails name={data[0]?.name} imgData={dummyImgData} />
        {/* 유기동물 정보 */}
        <SectionInformation
          rescue_spot={data[0]?.rescue_spot}
          rescue_start_date={data[0]?.rescue_start_date}
          admission_date={data[0]?.admission_date}
          rescue_end_date={data[0]?.rescue_end_date}
          race={data[0]?.race}
          race_detail={data[0]?.race_detail}
          size={data[0]?.size}
          gender={data[0]?.gender}
          state_of_health={data[0]?.state_of_health}
          age={data[0]?.age}
        />
        {/* 텍스트에리어 */}
        <SectionTextarea comment={data[0]?.comment} />
        {/* 태그 */}
        <SectionTags tag={data[0]?.tag} />
      </main>
      {/* 푸터 */}
      <div className='desktop:py-16'>
        <Footer />
      </div>

      {/* 하단 리본 버튼 */}
      <FooterShadowBox>
        <div className='flex gap-8 desktop:gap-10 '>
          <ButtonETC
            mode='outline'
            onClick={() => handleRibbonButtonClick('/pet')}
          >
            목록으로
          </ButtonETC>
          <ButtonETC
            mode='main'
            onClick={() =>
              handleRibbonButtonClick(
                userSession ? `/pet/foster/${params.id}` : '/login',
              )
            }
          >
            임보 신청
          </ButtonETC>
        </div>
      </FooterShadowBox>
    </>
  );
}

export default NearAnimalDetailPage;
