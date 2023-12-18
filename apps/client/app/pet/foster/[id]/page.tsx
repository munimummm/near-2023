'use client';
import { ButtonETC, CheckBox, Footer, Top } from 'ui';
import TopCarousel from '../../../../components/home/TopCarousel';
import { useForm } from '@near/react-hook-form';
import { TopData } from '../../../../components/home/dummy';
import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@near/supabase';
import ActiveStep from '../../../../components/pet/ActiveStep';
import { useRouter } from 'next/navigation';
interface AnimalApplyProps {
  lost_pet_id?: number;
  name: string;
  race: string;
  state_of_health: string;
}

function DetailInfo({ name, race, state_of_health }: AnimalApplyProps) {
  return (
    <section>
      <div className='flex flex-col gap-10 px-8 py-12 tablet:px-[74px] '>
        <div className='flex justify-between text-lg tablet:justify-start tablet:gap-32'>
          <p className='w-32'>공고번호</p>
          <p className='font-semibold'>{name}</p>
        </div>
        <div className='flex justify-between text-lg tablet:justify-start tablet:gap-32'>
          <p className='w-32'>견종</p>
          <p className='font-semibold'>{race}</p>
        </div>
        <div className='flex justify-between text-lg tablet:justify-start tablet:gap-32'>
          <p className='w-32'>추정나이</p>
          <p className='font-semibold'>12</p>
        </div>
        <div className='flex justify-between text-lg tablet:justify-start tablet:gap-32'>
          <p className='w-32'>건강상태</p>
          <p className='font-semibold'>{state_of_health}</p>
        </div>
        <div className='flex justify-between text-lg tablet:justify-start tablet:gap-32'>
          <p className='w-32'>담당기관</p>
          <p className='font-semibold'>몰라유</p>
        </div>
      </div>
    </section>
  );
}

function NearAnimalApplyPage({ params }: { params: { id: number } }) {
  const { control, watch } = useForm();
  const [data, setData] = useState<AnimalApplyProps[]>([]);
  const isChecked = watch('check');
  const router = useRouter();
  const supabase = createClientComponentClient();

  const fetchData = async () => {
    const { data, error } = await supabase
      .from('lost_pet_information')
      .select('*')
      .eq('lost_pet_id', params.id);

    if (error) {
      console.error(error);
      return;
    }
    if (data) {
      setData(data);
      // console.log('리스트', data);
    }
  };
  const clickNext = () => {
    if (!isChecked) {
      alert('체크 박스를 선택해주세요');
      return;
    }
    router.push(`/pet/foster/${params.id}/applyinfo`);
  };
  const clickPrev = () => {
    router.push('#');
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Top />
      <main>
        <h2 className='px-8 text-xl tablet:pb-11 desktop:pb-20 font-semibold tablet:px-16 tablet:text-4xl mt-14 tablet:mt-[7.5rem]'>
          임시보호 신청하기
        </h2>
        <ActiveStep active={1} />
        <TopCarousel isNotHome slides={TopData} />
        {data.map((item) => (
          <div key={item.lost_pet_id}>
            <DetailInfo
              name={item.name}
              race={item.race}
              state_of_health={item.state_of_health}
            />
          </div>
        ))}

        <div className='flex justify-center px-14 py-36 tablet:py-44 desktop:py-60'>
          <CheckBox
            isResponsive={false}
            name='check'
            type='checkbox'
            labelType='singletext'
            label='임시 보호하려는 강아지가 해당 강아지가 맞으며, 특이 사항과 강아지 정보에 관해 숙지하였습니다.'
            control={control}
          />
        </div>
        <div className='flex justify-center gap-8 py-8'>
          <ButtonETC mode='ghost' onClick={clickPrev}>
            목록으로
          </ButtonETC>
          <ButtonETC onClick={clickNext}>다음</ButtonETC>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NearAnimalApplyPage;
