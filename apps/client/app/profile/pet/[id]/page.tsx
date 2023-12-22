'use client';
import { useEffect } from 'react';
import TextInput from 'ui/components/textinput/TextInput';
import { useForm } from '@near/react-hook-form';
import { ButtonXL } from 'ui/components/buttons/Button';
import RadioTag from 'ui/components/tags/RadioTag';
import { createClientComponentClient } from '@near/supabase';
import { useRouter } from 'next/navigation';
import { Footer, Top } from 'ui';

interface UserPetType {
  user_pet_name?: string;
  user_pet_age?: string;
  user_pet_gender?: 'male' | 'female';
  user_pet_size?: number;
  user_pet_type?: 'dog' | 'cat' | 'etc';
}

function UserPetProfilePage({ params }: { params: { id: number } }) {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserPetType>({
    defaultValues: {
      user_pet_name: '',
      user_pet_age: '',
      user_pet_gender: undefined,
      user_pet_size: 0,
      user_pet_type: undefined,
    },
    mode: 'onChange',
  });

  const fetchData = async () => {
    try {
      const { data } = await supabase
        .from('user_pet_profile')
        .select('*')
        .eq('user_pet_id', params.id);
      if (data && data.length > 0) {
        setValue('user_pet_name', data[0].user_pet_name || '');
        setValue('user_pet_age', data[0].user_pet_age || '');
        setValue('user_pet_gender', data[0].user_pet_gender || undefined);
        setValue('user_pet_size', data[0].user_pet_size || undefined);
        setValue('user_pet_type', data[0].user_pet_type || undefined);
      }
    } catch (error) {
      console.error('실패', error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (formData) => {
    const petProfileData = {
      ...formData,
      user_pet_id: params.id,
    };
    const { error } = await supabase
      .from('user_pet_profile')
      .update([petProfileData])
      .eq('user_pet_id', params.id);
    if (error) {
      console.error('데이터 추가 실패:', error);
    }
    console.log('데이터 추가 성공:', petProfileData);
    router.push(`/profile`);
  };
  return (
    <>
      <Top />
      <div className='flex flex-col pt-11 tablet:pt-[4.25rem] desktop:pt-[4.25rem] gap-4 w-[30rem] tablet:w-[48rem] desktop:w-[90rem] mb-28'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className='flex justify-center py-10 text-xl font-bold tablet:justify-start desktop:justify-start tablet:py-8 desktop:py-8 tablet:px-20 desktop:px-20'>
            반려동물 정보
          </h1>
          <div className='flex items-center justify-center'>
            <div className='flex flex-col items-start tablet: w-[30rem] gap-4 p-8'>
              <div className='flex flex-col w-full gap-4 py-2'>
                <h2 className='text-lg text-left text-[#545454]'>이름</h2>
                <TextInput
                  control={control}
                  name='user_pet_name'
                  placeholder='이름을 입력해 주세요.'
                  state='default'
                  borderRadius
                  rules={{
                    pattern: {
                      value: /^[가-힣\s]+$/,
                      message: '한글만 입력 가능합니다.',
                    },
                    maxLength: {
                      value: 20,
                      message: '20자 이내로 입력해 주세요',
                    },
                  }}
                />
                {errors.user_pet_name && (
                  <span className='pl-4 text-red-500'>
                    {errors.user_pet_name.message}
                  </span>
                )}
              </div>

              <div className='flex justify-between items-center h-16 w-[26rem]'>
                <h2 className='text-lg text-left text-[#545454]'>성별</h2>
                <div className='flex gap-4'>
                  <RadioTag
                    name='user_pet_gender'
                    control={control}
                    value='female'
                  >
                    암컷
                  </RadioTag>
                  <RadioTag
                    name='user_pet_gender'
                    control={control}
                    value='male'
                  >
                    수컷
                  </RadioTag>
                </div>
              </div>
              <div className='flex justify-between items-center h-16 w-[26rem]'>
                <h2 className='text-lg text-left text-[#545454]'>종</h2>
                <div className='flex gap-4'>
                  <RadioTag name='user_pet_type' control={control} value='dog'>
                    강아지
                  </RadioTag>
                  <RadioTag name='user_pet_type' control={control} value='cat'>
                    고양이
                  </RadioTag>
                </div>
              </div>
              <div className='flex flex-col w-full gap-4 py-2'>
                <h2 className='text-lg text-left text-[#545454]'>몸무게</h2>
                <TextInput
                  inputProps={{ min: 0 }}
                  type='number'
                  control={control}
                  name='user_pet_size'
                  placeholder='숫자만 입력해 주세요'
                  state='default'
                  borderRadius
                />
              </div>
              <div className='flex flex-col w-full gap-4 py-2'>
                <h2 className='text-lg text-left text-[#545454]'>나이</h2>
                <TextInput
                  control={control}
                  name='user_pet_age'
                  placeholder='나이를 입력해 주세요'
                  state='default'
                  borderRadius
                />
              </div>
              <div className='py-24'>
                <ButtonXL type='submit'>변경하기</ButtonXL>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default UserPetProfilePage;
