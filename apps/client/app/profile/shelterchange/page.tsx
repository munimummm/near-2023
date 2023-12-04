'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Breadcrumb,
  ButtonETC,
  Footer,
  FooterShadowBox,
  RadioTag,
  Tag,
  TextInput,
  Top,
  TopSuspense,
} from 'ui';
import { createClientComponentClient, User } from '@near/supabase';
import { useForm } from '@near/react-hook-form';
import { Modal } from '@near/antd';
import { DaumPostcode } from '@near/react-daum-postcode';
import { useRouter } from 'next/navigation';

interface ShelterChangeProps {
  address?: string;
  detail?: string;
  animal?: 'dog' | 'cat';
  scale?: 'public' | 'private';
  url?: string;
  instagram?: string;
  relation?: string;
}

const ShelterChange = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const { control, setValue, handleSubmit, getValues } =
    useForm<ShelterChangeProps>({
      defaultValues: {
        address: '',
        detail: '',
        animal: undefined,
        scale: undefined,
        url: '',
        instagram: '',
        relation: '',
      },
      mode: 'onChange',
    });

  const [userSession, setUserSession] = useState<User | null>();
  const [shelterName, setShelterName] = useState<string[] | any>([]);
  const [shelterType, setShelterType] = useState<string[] | any>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  let { current: temp } = useRef([]) as string[] | any;

  useEffect(() => {
    const fetchShelter = async () => {
      let {
        data: { user },
      } = await supabase.auth.getUser();

      let { data: shelter_profile, error } = await supabase
        .from('shelter_profile')
        .select('*')
        .eq('id', user?.id);

      if (shelter_profile != null) {
        setUserSession(user);
        setShelterName(shelter_profile);
        setShelterType(shelter_profile);
      } else {
        console.log('data is null');
      }

      if (error instanceof Error) {
        throw new Error(error.message);
      }
    };
    fetchShelter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onToggleModal = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    setValue('address', data.address);

    if (data) {
      setIsOpen((prev) => !prev);
    }
  };

  const onClickSubmit = async (userData: any) => {
    let { data: shelter_profile, error } = await supabase
      .from('shelter_profile')
      .update({
        shelter_address: userData.address,
        shelter_detail_address: userData.detail,
      })
      .eq('id', userSession?.id);

    if (shelter_profile != null) {
      router.push('/profile');
    }

    let { data: shelter_profile_detail } = await supabase
      .from('shelter_porfile_detail')
      .update({
        shelter_site_url: userData.url,
        shelter_instagram: userData.instagram,
        relationship_with_shelter: userData.relation,
      })
      .eq('id', userSession?.id);

    if (shelter_profile_detail != null) {
      router.push('/profile');
      console.log(shelter_profile_detail);
    }

    if (error instanceof Error) {
      throw new Error(error.message);
    }
  };

  // 임시 저장

  const onClickTempSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let address = getValues('address');
    let detail = getValues('detail');
    let animal = getValues('animal');
    let scale = getValues('scale');
    let url = getValues('url');
    let instagram = getValues('instagram');
    let relation = getValues('relation');

    localStorage.setItem(
      'temp',
      JSON.stringify([
        address,
        detail,
        animal,
        scale,
        url,
        instagram,
        relation,
      ]),
    );
  };

  useEffect(() => {
    let watched = JSON.parse(localStorage.getItem('temp') as string);
    temp = watched;
    if (temp) {
      setValue('address', temp[0]);
      setValue('detail', temp[1]);
      setValue('animal', temp[2]);
      setValue('scale', temp[3]);
      setValue('url', temp[4]);
      setValue('instagram', temp[5]);
      setValue('relation', temp[6]);
    }
  }, [temp]);

  return (
    <div>
      <section className='layout_max_width'>
        <form onSubmit={handleSubmit(onClickSubmit)}>
          {isOpen && (
            <Modal open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
              <DaumPostcode onComplete={handleComplete} />
            </Modal>
          )}
          <div>{userSession ? <Top /> : <TopSuspense />}</div>
          <div className='ml-[2rem] mt-[3.125rem]'>
            <Breadcrumb items={['보호소', '수정하기']} />
          </div>
          <div className='mt-[2rem] h-[67.5rem]'>
            <div className='h-[5.625rem] pl-[2rem] pt-[0.625rem] border-b-2 mb-[1rem] desktop:w-[48rem]'>
              <p className='text-xs'>{shelterName[0]?.shelter_name} 보호소</p>
              <div className='text-xl font-bold'>보호소 수정하기</div>
            </div>
            <section className='h-[60.875rem] grid desktop:w-[48rem]'>
              <div className='h-[5.75rem] pt-[0.5rem] pl-[2rem]'>
                <div className='mb-[1rem]'>보호소 명</div>
                <div>{shelterName[0]?.shelter_name} 보호소</div>
              </div>
              <div className='mobile:h-[8.875rem] mobile:pt-[0.5rem] mobile:px-[2rem]'>
                <div className='mb-[1rem]'>지역</div>
                <div className='flex mb-[0.5rem]'>
                  <TextInput
                    control={control}
                    borderRadius={true}
                    placeholder='주소를 입력하세요'
                    name={'address'}
                    rules={{ required: false }}
                  />
                  <div className='ml-[0.5rem] w-[5rem]'>
                    <Tag
                      mode='gray'
                      className='tablet:h-[2.375rem] w-[5rem]'
                      handleTagClick={onToggleModal}
                    >
                      입력
                    </Tag>
                  </div>
                </div>
                <TextInput
                  control={control}
                  borderRadius={true}
                  placeholder='주소를 입력하세요'
                  name={'detail'}
                  rules={{ required: false }}
                />
              </div>
              <div className='mobile:h-[4rem] mobile:pt-[0.5rem] mobile:pl-[2rem] pr-[2.5rem] flex justify-between items-center'>
                <div className=''>보호소 유형</div>
                <div>{shelterType[0]?.shelter_type}</div>
              </div>
              <div className='mobile:h-[4rem] mobile:pt-[0.5rem] mobile:px-[2rem] flex justify-between items-center'>
                <div className=''>보호 동물 종</div>
                <div className='flex justify-between w-[12.5rem]'>
                  <RadioTag name={'animal'} control={control} value='dog'>
                    강아지
                  </RadioTag>
                  <RadioTag name={'animal'} control={control} value='cat'>
                    고양이
                  </RadioTag>
                </div>
              </div>
              <div className='mobile:h-[4rem] mobile:pt-[0.5rem] mobile:px-[2rem] flex justify-between items-center'>
                <div className=''>시설 규모</div>
                <div className='flex justify-between w-[15.625rem]'>
                  <RadioTag name={'scale'} control={control} value='public'>
                    공공 보호소
                  </RadioTag>
                  <RadioTag name={'scale'} control={control} value='private'>
                    사설 보호소
                  </RadioTag>
                </div>
              </div>
              <div className='h-[5.75rem] pt-[0.5rem] mobile:px-[2rem]'>
                <div className='mb-[1rem]'>보호소 홈페이지</div>
                <TextInput
                  control={control}
                  borderRadius={true}
                  placeholder='홈페이지 URL을 입력하세요'
                  name={'url'}
                  rules={{ required: false }}
                />
              </div>
              <div className='h-[5.75rem] pt-[0.5rem] mobile:px-[2rem]'>
                <div className='mb-[1rem]'>보호소 인스타 주소</div>
                <TextInput
                  control={control}
                  borderRadius={true}
                  placeholder='인스타그램 프로필 URL을 입력하세요'
                  name={'instagram'}
                  rules={{ required: false }}
                />
              </div>
              <div className='h-[5.75rem] pt-[0.5rem] mobile:px-[2rem]'>
                <div className='mb-[1rem]'>작성자와 보호소의 관계</div>
                <TextInput
                  control={control}
                  borderRadius={true}
                  placeholder='보호소 소장, 홍보 담당자등 관계를 입력하세요'
                  name={'relation'}
                  rules={{ required: false }}
                />
              </div>
            </section>
            <section>
              <Footer />
            </section>
            <section className='mt-[3.125rem]'>
              <FooterShadowBox>
                <div className='m-auto flex justify-centere'>
                  <ButtonETC mode='outline' onClick={onClickTempSave}>
                    임시 저장
                  </ButtonETC>
                  <ButtonETC type='submit' className='ml-[0.5rem]'>
                    수정 완료
                  </ButtonETC>
                </div>
              </FooterShadowBox>
            </section>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ShelterChange;
