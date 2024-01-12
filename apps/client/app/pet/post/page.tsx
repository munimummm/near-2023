'use client';

import { Cookies } from '@near/react-cookie';
import { useForm } from '@near/react-hook-form';
import { createClientComponentClient } from '@near/supabase';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Footer,
  FooterShadowButtons,
  Icon,
  RadioTag,
  Tag,
  TextArea,
  TextInput,
} from 'ui';
import Top from 'ui/components/top/Top';
import 'react-datepicker/dist/react-datepicker.css';
import '../../signup/signupclient/datepicker/datepicker.css';
import Calendar from 'ui/components/calendar/calendar';

const useMultipleSelection = (maxSelection: number) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else if (selectedItems.length < maxSelection) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const clearSelection = () => {
    setSelectedItems([]);
  };

  return {
    selectedItems,
    toggleItem,
    clearSelection,
  };
};

function NearAnimalPostPage() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [name, setName] = useState<any[] | null>();
  const fetchShelterCounts = async () => {
    const { data: shelterUser } = await supabase.auth.getSession();
    const { data: allShelters, error } = await supabase
      .from('shelter_profile')
      .select('*')
      .eq('id', shelterUser.session?.user.id);
    setName(allShelters);
    if (error) {
      console.error(error);
      return;
    }
    if (shelterUser.session?.user.role !== 'shelter_user') {
      router.push('/pet');
    }
    if (shelterUser.session === null) {
      router.push('/pet');
    }
  };

  useEffect(() => {
    fetchShelterCounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cookies = new Cookies();
  const maxSelection = 5;
  const { selectedItems, toggleItem } = useMultipleSelection(maxSelection);
  const TAG = [
    '수컷',
    '암컷',
    '6개월 이하',
    '7개월~2살',
    '2살~8살',
    '8살 이상',
    '8kg 미만',
    '8~18kg',
    '18kg 이상',
    '중성화 완료',
    '접종 완료',
    '임보중',
    '단모',
    '장모',
    '타동물 친화',
    '어린이 친화',
    '산책 가능',
    '배변훈련 완료',
    '기본훈련 완료',
    '낯가림',
    '활발',
  ];
  // const handleClick = (idx) => {
  //   const newArr = Array(TAG.length).fill(false);
  //   newArr[idx] = true;
  //   setAtcive(newArr);
  // };

  const { control, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (cookies.get('sb-ztcvdzkqqrglziiavupe-auth-token') === undefined) {
      router.push('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies]);

  return (
    <>
      <Top />
      <section className='mobile:mt-[8.5rem] tablet:mt-[8.5rem] desktop:mt-0 mobile:mb-24 tablet:mb-32 desktop:mb-40'>
        <form
          onSubmit={handleSubmit(async (data) => {
            const { error } = await supabase
              .from('lost_pet_information')
              .insert([
                {
                  name: data.name,
                  rescue_spot: data.rescueSpot,
                  rescue_start_date: data.rescueStartDate,
                  admission_date: data.admissionDate,
                  rescue_end_date: data.rescueEndDate,
                  race: data.race,
                  race_detail: data.raceDetail,
                  size: data.size,
                  gender: data.gender,
                  age: data.age,
                  state_of_health: data.health,
                  comment: data.comment,
                  tag: selectedItems,
                },
              ]);
            if (!error) {
              alert('등록 완료 되었습니다.');
              router.push('/pet');
            }
          })}
          className='layout_max_width'
        >
          <fieldset>
            <legend className='w-full border-b-2 border-gray-1'>
              <h3 className='font-bold mobile:text-[1.25rem] tablet:text-2xl desktop:text-2xl mobile:mb-6 mobile:ml-8 tablet:ml-8 desktop:ml-8'>
                니어 동물 등록 정보
              </h3>
            </legend>
            <section className='px-8 flex flex-col gap-4 desktop:justify-start mt-4'>
              <label className='flex flex-col' htmlFor='shelterName'>
                <span className='text-[#545454]'>보호소 이름</span>
                <span className='font-semibold'>
                  {`${name && name[0]?.shelter_name} 보호소`}
                </span>
              </label>
              <label className='text-[#545454] mt-4' htmlFor='name'>
                임시 이름 (공고 번호)
              </label>
              <div className='max-w-[553px] flex justify-center gap-3'>
                <TextInput
                  rules={{
                    required: true,
                  }}
                  defaultValue={''}
                  className='desktop:w-[474px] tablet:w-[474px] mobile:w-[468px]'
                  borderRadius
                  control={control}
                  name='name'
                  placeholder='ex) 흰둥이'
                />
              </div>
              <label className='text-[#545454]' htmlFor='rescueSpot'>
                구조 장소
              </label>
              <div className='max-w-[553px] flex justify-center gap-3'>
                <TextInput
                  rules={{
                    required: true,
                  }}
                  defaultValue={''}
                  className='desktop:w-[474px] tablet:w-[474px] mobile:w-[468px]'
                  borderRadius
                  control={control}
                  name='rescueSpot'
                  placeholder='ex) 서울시 뚝섬유원지 부근'
                />
              </div>
              <label className='text-[#545454]' htmlFor='rescueStartDate'>
                구조일
              </label>
              <div className='max-w-[553px] flex justify-center gap-3'>
                <Calendar
                  control={control}
                  setValue={setValue}
                  name='rescueStartDate'
                  TagName={
                    <Icon icon={'ic_calender'} sizes={'md'} state={'default'} />
                  }
                />
              </div>
              <label className='text-[#545454]' htmlFor='admissionDate'>
                입소일
              </label>
              <div className='max-w-[553px] flex gap-3'>
                <Calendar
                  setValue={setValue}
                  control={control}
                  name='admissionDate'
                  TagName={
                    <Icon icon={'ic_calender'} sizes={'md'} state={'default'} />
                  }
                />
              </div>
              <label className='text-[#545454]' htmlFor='rescueEndDate'>
                보호 종료일
              </label>
              <div className='max-w-[553px] flex justify-center gap-3'>
                <Calendar
                  setValue={setValue}
                  control={control}
                  name='rescueEndDate'
                  TagName={
                    <Icon icon='ic_calender' sizes='md' state='default' />
                  }
                />
              </div>
              <div className='mobile:flex mobile:justify-between items-center desktop:block mobile:mt-4 tablet:block desktop:mt-0 tablet:mt-0'>
                <label className='text-[#545454]' htmlFor='race'>
                  품종
                </label>
                <div className='flex gap-4 desktop:mt-4 tablet:mt-4'>
                  <RadioTag
                    className='desktop:w-[252px]  mobile:whitespace-nowrap'
                    name={'race'}
                    value='dog'
                    control={control}
                  >
                    강아지
                  </RadioTag>
                  <TextInput
                    defaultValue={''}
                    borderRadius
                    className='h-8 desktop:w-[12.5rem] tablet:w-[12.5rem]'
                    placeholder='ex) 포메라니안'
                    name={'raceDetail'}
                    control={control}
                  />
                </div>
              </div>
              <div className='mobile:flex mobile:justify-between items-center desktop:block tablet:block mobile:mt-4 desktop:mt-0 tablet:mt-0'>
                <label className='text-[#545454]' htmlFor='size'>
                  크기 <small>(단위: kG)</small>
                </label>
                <div className='flex items-center desktop:mt-4 tablet:mt-4r'>
                  <TextInput
                    rules={{
                      required: true,
                    }}
                    defaultValue={''}
                    borderRadius
                    className='h-8 mobile:w-[200px]'
                    placeholder='ex) 4'
                    name={'size'}
                    control={control}
                  />
                </div>
              </div>

              <div className='mobile:flex mobile:justify-between items-center desktop:block tablet:block mobile:mt-4 desktop:mt-0 tablet:mt-0'>
                <div className='text-[#545454]'>성별</div>
                <div className='flex gap-4 desktop:mt-4 tablet:mt-4'>
                  <RadioTag
                    className='desktop:w-[252px]'
                    name='gender'
                    value='male'
                    control={control}
                  >
                    수컷
                  </RadioTag>
                  <RadioTag
                    className='desktop:w-[252px]'
                    name='gender'
                    value='female'
                    control={control}
                  >
                    암컷
                  </RadioTag>
                </div>
              </div>
              <div className='mobile:flex mobile:justify-between items-center desktop:block tablet:block mobile:mt-4'>
                <label className='text-[#545454]' htmlFor='age'>
                  추정나이
                </label>
                <div className='flex gap-4 desktop:mt-4 tablet:mt-4'>
                  <TextInput
                    rules={{
                      required: true,
                    }}
                    defaultValue={''}
                    borderRadius
                    className='h-8 mobile:w-[200px]'
                    placeholder='ex) 5'
                    name={'age'}
                    control={control}
                  />
                </div>
              </div>

              <div className='mobile:flex mobile:justify-between items-center desktop:block tablet:block mobile:mt-4 desktop:mt-0 tablet:mt-0'>
                <div className='text-[#545454]'>건강상태</div>
                <div className='flex gap-4 desktop:mt-4 tablet:mt-4'>
                  <RadioTag
                    className='desktop:w-[252px] tablet:w-[252px]'
                    name='health'
                    value='양호'
                    control={control}
                  >
                    양호
                  </RadioTag>
                  <RadioTag
                    className='desktop:w-[252px] tablet:w-[252px]'
                    name='health'
                    value='주의 필요'
                    control={control}
                  >
                    주의 필요
                  </RadioTag>
                </div>
              </div>

              <label className='text-[#545454] mobile:mt-4' htmlFor='tag'>
                특징 <small>(다섯개 선택해주세요)</small>
              </label>
              <div className='inline-grid grid-rows-2 mobile:grid-cols-4 tablet:grid-cols-4 desktop:grid-cols-7 gap-y-2 mobile:gap-x-3 tablet:gap-x-4 desktop:gap-x-4 justify-items-start desktop:w-3/4 w-fit'>
                {TAG.map((item, index) => {
                  return (
                    <div key={`${item}_${index}`}>
                      <Tag
                        handleTagClick={() => toggleItem(item)}
                        type='button'
                        mode={selectedItems.includes(item) ? 'main' : 'gray'}
                        className='text-sm desktop:text-sm tablet:text-sm h-[2.1875rem] whitespace-nowrap'
                      >
                        {item}
                      </Tag>
                    </div>
                  );
                })}
              </div>
              <label className='text-[#545454] mt-6' htmlFor='comment'>
                상세정보 및 특이사항
              </label>
              <TextArea
                rules={{
                  required: true,
                }}
                control={control}
                name='comment'
              />
            </section>
          </fieldset>
          <Footer />
          <FooterShadowButtons />
        </form>
      </section>
    </>
  );
}

export default NearAnimalPostPage;
