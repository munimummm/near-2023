'use client';

import { useForm } from '@near/react-hook-form';
import { createClientComponentClient, User } from '@near/supabase';
import { Key, useEffect, useState } from 'react';
import { Select, Space } from '@near/antd';
import {
  Breadcrumb,
  Button,
  Footer,
  FooterShadowBox,
  RadioTag,
  TextInput,
  Top,
  TopSuspense,
} from 'ui';
import { useRouter } from 'next/navigation';

interface ApplyInfoProps {
  residence_type?: string;
  family?: string;
  residence?: string;
  foster?: boolean;
  rescue?: boolean;
}

const ApplyInfo = (params) => {
  const { control, handleSubmit, getValues } = useForm<ApplyInfoProps>({
    defaultValues: {
      residence: '',
      foster: false,
      rescue: false,
    },
    mode: 'onSubmit',
  });
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [userSession, setUserSession] = useState<User | null>();
  const [profile, setProfile] = useState<string[] | any[]>([]);
  const [pet, setPet] = useState<string[] | any[]>([]);
  const [familyType, setFamilyType] = useState<string>();
  const [relevent, setRelevent] = useState<string>();

  useEffect(() => {
    const fetchProfile = async () => {
      let {
        data: { user },
      } = await supabase.auth.getUser();

      let { data: user_profile, error } = await supabase
        .from('user_profile')
        .select('*');

      let { data: user_pet_profile } = await supabase
        .from('user_pet_profile')
        .select('*')
        .eq('id', user?.id);

      if (user_profile != null) {
        setUserSession(user);
        setProfile(user_profile);
      }

      if (user_pet_profile != null) {
        setPet(user_pet_profile);
      }

      if (error instanceof Error) {
        throw new Error(error.message);
      }
    };
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeRelevent = async (value: string) => {
    setRelevent(`${value}`);
  };
  console.log(relevent);

  const handleChangeFamily = async (value: string) => {
    setFamilyType(`${value}`);
  };

  const onClickPrevious = async () => {
    router.push('/pet/foster/' + `${params}`);
  };

  const onSubmitApply = async (data: ApplyInfoProps) => {
    let residence = getValues('residence');
    let care_exp = Boolean(getValues('foster'));
    let rescue_exp = Boolean(getValues('rescue'));
    let { data: foster_detail, error } = await supabase
      .from('foster_detail')
      .insert({
        residence_type: residence,
        family_type: familyType,
        care_experience: care_exp,
        adopt_experience: rescue_exp,
      });

    if (data != null && foster_detail != null) {
      router.push('/pet/foster/' + `${params}` + '/applyinfo/checklist');
    }

    if (error instanceof Error) {
      throw new Error(error.message);
    }
  };

  return (
    <>
      <section>
        <div>{userSession ? <Top /> : <TopSuspense />}</div>
        <Breadcrumb
          items={['근처 동물', '임시 보호 신청', '신청자 정보']}
          className='mt-[4.0625rem] ml-[1rem]'
        />
      </section>
      <section>
        <div className='mobile:h-[5.875rem] mobile:mt-[2.875rem] tablet:h-[11.25rem] desktop:h-[13.75rem]'>
          <div className='font-bold mobile:text-lg mobile:pl-[2rem] mobile:pt-[0.625rem] tablet:text-2xl tablet:pl-[4.8125rem] tablet:pt-[2.125rem] desktop:text-4xl'>
            임시 보호 신청하기
          </div>
          <div className='flex justify-around mobile:w-[24rem] mobile:pt-[1rem] mobile:pl-[1.5rem] mobile:text-sm tablet:w-[30.5rem] tablet:pl-[2rem] tablet:mt-[1.5rem] desktop:mt-[3.75rem] desktop:text-lg'>
            <div className='text-slate-400'>1. 강아지 정보</div>
            <div className='text-indigo-900'>2. 신청자 정보</div>
            <div className='text-slate-400'>3. 체크리스트</div>
          </div>
        </div>
      </section>
      <form onSubmit={handleSubmit(onSubmitApply)}>
        <section className='mt-[3rem] desktop:w-[52.8125rem]'>
          <div className='grid gap-4 '>
            <div className='h-[5.75rem] pl-[2rem] py-[0.5rem] grid'>
              <div>이름</div>
              <div className='pl-[16px]'>{profile[0]?.name}</div>
            </div>
            {/* <div className='h-[92px] pl-[32px] py-[8px] grid'>
              <div>나이</div>
              <div className='pl-[16px]'>{profile[0]?.age}</div>
            </div> */}
            <div className='h-[5.75rem] pl-[2rem] py-[0.5rem] grid'>
              <div>연락처</div>
              <div className='pl-[1rem]'>{profile[0]?.phone}</div>
            </div>
            <div className='h-[5.75rem] pl-[2rem] py-[0.5rem] grid'>
              <div>거주지</div>
              <div className='pl-[1rem]'>{profile[0]?.address}</div>
            </div>
            <div className='h-[4rem] flex pt-[1.25rem] px-[2rem] justify-between'>
              <div className='pt-[0.3125rem]'>거주 형태</div>
              <div className='w-[18.75rem] flex justify-between'>
                <RadioTag name={'residence'} value='apart' control={control}>
                  아파트
                </RadioTag>
                <RadioTag name={'residence'} value='vila' control={control}>
                  빌라
                </RadioTag>
                <RadioTag name={'residence'} value='house' control={control}>
                  주택
                </RadioTag>
              </div>
            </div>
            <div className='h-[4rem] flex pt-[1rem] px-[2rem] justify-between'>
              <div className='pt-[0.3125rem]'>이동 수단</div>
              <div className='w-[18.75rem] flex justify-between'>
                <RadioTag name={'transport'} value='car' control={control}>
                  자차
                </RadioTag>
                <RadioTag name={'transport'} value='public' control={control}>
                  대중 교통
                </RadioTag>
                <RadioTag name={'transport'} value='walk' control={control}>
                  도보
                </RadioTag>
              </div>
            </div>
            <div className='h-[4rem] flex pt-[1rem] px-[2rem] justify-between'>
              <div className='pt-[0.3125rem]'>동거인</div>
              <div className=''>
                <Space wrap>
                  <Select
                    defaultValue='선택'
                    style={{ width: 120 }}
                    onChange={handleChangeFamily}
                    options={[
                      { value: '배우자', label: '배우자' },
                      { value: '형제/자매', label: '형제/자매' },
                      { value: '부모', label: '부모' },
                      { value: '친구', label: '친구' },
                    ]}
                  />
                </Space>
              </div>
            </div>
            <div className='grid h-[6.25rem] px-[2rem]'>
              <div className='flex pt-[1rem] justify-between'>
                <div className='pt-[0.3125rem]'>비상 연락망</div>
                <div className=''>
                  <Space wrap>
                    <Select
                      defaultValue='선택'
                      style={{ width: 120 }}
                      onChange={handleChangeRelevent}
                      options={[
                        { value: '배우자', label: '배우자' },
                        { value: '형제/자매', label: '형제/자매' },
                        { value: '부모', label: '부모' },
                        { value: '친구', label: '친구' },
                      ]}
                    />
                  </Space>
                </div>
              </div>
              <TextInput
                name={'phone'}
                control={control}
                placeholder='전화번호를 입력하세요'
              />
            </div>
            <div className='h-[8.125rem] pt-[1rem] px-[2rem] justify-between'>
              <div className='pt-[0.3125rem]'>반려 동물</div>
              {pet.map((a: Key | null | undefined, i: string | number) => {
                return (
                  <div className='grid' key={a}>
                    <div className='pl-[1rem] flex justify-between'>
                      <span>품종</span>
                      <span>{pet[i]?.user_pet_race}</span>
                    </div>
                    <div className='pl-[1rem] flex justify-between'>
                      <span>성별</span>
                      <span>{pet[i]?.user_pet_gender}</span>
                    </div>
                    <div className='pl-[1rem] flex justify-between'>
                      <span>나이</span>
                      <span>{pet[i]?.user_pet_age}세</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='h-[4rem] flex pt-[1rem] px-[2rem] justify-between'>
              <div className='pt-[0.3125rem]'>임시 보호 경험</div>
              <div className='w-[7.5rem] flex justify-between'>
                <RadioTag name={'foster'} value='true' control={control}>
                  유
                </RadioTag>
                <RadioTag name={'foster'} value='false' control={control}>
                  무
                </RadioTag>
              </div>
            </div>
            <div className='h-[4rem] flex pt-[1rem] px-[2rem] justify-between'>
              <div className='pt-[0.3125rem]'>구조 경험</div>
              <div className='w-[7.5rem] flex justify-between'>
                <RadioTag name={'rescue'} value='true' control={control}>
                  유
                </RadioTag>
                <RadioTag name={'rescue'} value='false' control={control}>
                  무
                </RadioTag>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='mt-[6.25rem]'>
            <Footer />
          </div>
          <FooterShadowBox>
            <div className='flex justify-around w-[21.875rem]'>
              <Button
                mode='outline'
                className='w-[8.125rem] h-[3.625rem]'
                onClick={onClickPrevious}
              >
                이전
              </Button>
              <Button type='submit' className='w-[8.125rem] h-[3.625rem]'>
                다음
              </Button>
            </div>
          </FooterShadowBox>
        </section>
      </form>
    </>
  );
};

export default ApplyInfo;
