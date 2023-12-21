'use client';

import { Cookies } from '@near/react-cookie';
import { useForm } from '@near/react-hook-form';
import { createClientComponentClient } from '@near/supabase';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Icon, Tag, TextArea, TextInput } from 'ui';
import Top from 'ui/components/top/Top';

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
  };

  useEffect(() => {
    fetchShelterCounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const cookies = new Cookies();
  const maxSelection = 3;
  const { selectedItems, toggleItem, clearSelection } =
    useMultipleSelection(maxSelection);
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

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors: formError },
  } = useForm();
  useEffect(() => {
    if (cookies.get('sb-ztcvdzkqqrglziiavupe-auth-token') === undefined) {
      router.push('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies]);

  return (
    <>
      <Top />
      <section className='mobile:mt-[8.5rem] tablet:mt-[8.5rem] desktop:mt-0'>
        <form className='layout_max_width' action=''>
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
                  {`${name && name[0].shelter_name} 보호소`}
                </span>
              </label>
              <label className='text-[#545454]' htmlFor='rescueSpot'>
                구조 장소
              </label>
              <div className='max-w-[553px] flex justify-center gap-3'>
                <TextInput borderRadius control={control} name='rescueDate' />
                <Tag
                  mode='gray'
                  className='text-sm desktop:text-sm tablet:text-sm h-[2.1875rem] whitespace-nowrap'
                >
                  입력
                </Tag>
              </div>
              <label className='text-[#545454]' htmlFor='rescueSpot'>
                구조일
              </label>
              <div className='max-w-[553px] flex justify-center gap-3'>
                <TextInput borderRadius control={control} name='rescueDate' />
                <Tag
                  mode='gray'
                  className='text-sm desktop:text-sm tablet:text-sm h-[2.1875rem] whitespace-nowrap'
                >
                  <Icon icon={'ic_calender'} sizes={'md'} state={'default'} />
                </Tag>
              </div>
              <label className='text-[#545454]' htmlFor='rescueSpot'>
                구조일
              </label>
              <div className='max-w-[553px] flex justify-center gap-3'>
                <TextInput borderRadius control={control} name='rescueDate' />
                <Tag
                  mode='gray'
                  className='text-sm desktop:text-sm tablet:text-sm h-[2.1875rem] whitespace-nowrap'
                >
                  <Icon icon={'ic_calender'} sizes={'md'} state={'default'} />
                </Tag>
              </div>
              <label className='text-[#545454]' htmlFor='rescueSpot'>
                구조일
              </label>
              <div className='max-w-[553px] flex justify-center gap-3'>
                <TextInput borderRadius control={control} name='rescueDate' />
                <Tag
                  type='button'
                  mode='gray'
                  className='text-sm desktop:text-sm tablet:text-sm h-[2.1875rem] whitespace-nowrap'
                >
                  <Icon icon={'ic_calender'} sizes={'md'} state={'default'} />
                </Tag>
              </div>
              <label className='text-[#545454]' htmlFor='rescueSpot'>
                특징
              </label>
              <div className='inline-grid grid-rows-2 mobile:grid-cols-4 tablet:grid-cols-4 desktop:grid-cols-7 gap-y-2 mobile:gap-x-3 tablet:gap-x-4 desktop:gap-x-4 justify-items-start desktop:w-3/4 w-fit'>
                {TAG.map((item, index) => {
                  return (
                    <div key={index}>
                      <Tag
                        handleTagClick={() => toggleItem(item)}
                        type='button'
                        mode={selectedItems.includes(item) ? 'main' : 'gray'}
                        className='text-sm desktop:text-sm tablet:text-sm h-[2.1875rem] whitespace-nowrap'
                      >
                        {item}
                        {/* {selectedItems.includes(item) && (
                          <Icon icon={'ic_x'} sizes={'xs'} state={'mild'} />
                        )} */}
                      </Tag>
                    </div>
                  );
                })}
              </div>
              <label className='text-[#545454] mt-6' htmlFor='rescueSpot'>
                상세정보 및 특이사항
              </label>
              <TextArea control={control} name='text' />
            </section>
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default NearAnimalPostPage;
