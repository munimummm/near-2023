'use client';

import TextInput from 'ui/components/textinput/TextInput';
import { ButtonXL } from 'ui/components/buttons/Button';
import Logo from 'ui/components/logo/Logo';
import Checkbox from 'ui/components/checkbox/Checkbox';
import { useForm } from '@near/react-hook-form';
import FooterShadowBox from 'ui/components/footer/FooterShadowBox';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RadioTag from 'ui/components/tags/RadioTag';
import { createClientComponentClient } from '@near/supabase';

interface SignupProps {
  email?: string;
  password?: string;
  role?: 'shelter_user' | 'normal_user';
  shelter_data?: {
    shelter_name?: string;
    ceo_phone?: string;
    shelter_address: string;
    shelter_detail_address: string;
    shelter_type: string;
    shelter_scale: string;
    ceo_name?: string;
    marketing_agree: boolean;
    shelter_cooperation: boolean;
    register_number: string;
  };
  normal_data?: {
    name?: string;
    phone?: string;
    shelter_address: string;
    shelter_detail_address: string;
    shelter_type: string;
    shelter_scale: string;
    ceo_name: string;
    marketing_agree: boolean;
    shelter_cooperation: boolean;
    register_number: string;
  };
}

interface ShelterProps {
  shelter_name?: string;
  ceo_name?: string;
  ceo_phone?: string;
  password?: string;
  all?: boolean;
  member?: boolean;
  site?: boolean;
  info?: boolean;
  marketing?: boolean;
  pwcheck?: string;
}

const SignupShelter = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
    setValue,
  } = useForm<ShelterProps>({
    defaultValues: {
      shelter_name: '',
      ceo_name: '',
      ceo_phone: '',
      all: false,
      member: false,
      site: false,
      info: false,
      marketing: false,
    },
    mode: 'onChange',
  });

  const [passwordOpen, setPasswordOpen] = useState<boolean>(false);
  const [pwcheckmsg, setPkcheckmsg] = useState<string>('');

  const passwordValidation = () => {
    setPasswordOpen(true);
    const inputPassword: string = getValues('password')!;
    const passwordCheck: string = getValues('pwcheck')!;

    if (inputPassword !== passwordCheck) {
      setPkcheckmsg('입력하신 비밀번호가 다릅니다.');
    } else {
      setPkcheckmsg('입력하신 비밀번호가 같습니다.');
    }
  };

  const changeCount = async () => {
    const { count, error } = await supabase
      .from('shelter_profile')
      .select('*', { count: 'exact', head: true });
    if (count === null || error) {
      throw new Error(error?.message);
    }
    const changeCount = (count + 1)?.toString().padStart(4, '0');

    return { changeCount };
  };

  const handleSignUp = async (userData: SignupProps) => {
    const countShelterUserId = (await changeCount()).changeCount;
    await supabase.auth.signUp({
      email:
        userData.role === 'normal_user'
          ? (userData.email as string)
          : `near${countShelterUserId}@near.com`,
      password: userData.password as string,
      options: {
        data: {
          role: userData.role,
          ...(userData.role === 'normal_user'
            ? userData.normal_data
            : userData.shelter_data),
        },
      },
    });
  };

  const onClickSubmit = async (data: ShelterProps) => {
    const userData: SignupProps = {
      password: data.password,
      role: 'shelter_user',
      shelter_data: {
        shelter_name: data.shelter_name,
        ceo_phone: data.ceo_phone,
        ceo_name: data.ceo_name,
        shelter_address: 'test',
        shelter_detail_address: 'test',
        shelter_type: 'test',
        shelter_scale: 'test',
        marketing_agree: false,
        shelter_cooperation: false,
        register_number: 'test',
      },
    };

    try {
      handleSignUp(userData);

      if (data) {
        router.push('../signup/signupsuccess');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const all = watch('all');

  // 체크박스 전체 동의
  useEffect(() => {
    if (all === true) {
      setValue('member', true);
      setValue('info', true);
      setValue('site', true);
      setValue('marketing', true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <section className='layout_max_width'>
        <form onSubmit={handleSubmit(onClickSubmit)}>
          <div className='w-[30rem] m-auto h-[95rem]'>
            <div className='pt-[8.0625rem]'>
              <div className='flex justify-center'>
                <Logo size='lg' />
              </div>
              <div className='m-auto mt-[4rem]'>
                <div className='pt-[0.625rem] h-[4.375rem] pl-[2rem] font-bold border-b-4'>
                  회원가입
                </div>
              </div>
              <div className='mt-[1rem] h-[46rem] px-[1rem]'>
                <div className='pt-[0.5rem] h-[5.75rem]'>
                  <div className='mb-[1rem]'>보호소 명</div>
                  <div className='flex flex-row'>
                    <TextInput
                      control={control}
                      placeholder='텍스트를 입력하세요'
                      borderRadius={true}
                      name={'shelter_name'}
                      rules={{ required: true }}
                    />
                  </div>
                </div>
                <div className=' flex flex-row justify-between pt-[2rem] h-[5.75rem]'>
                  <div className='mb-[1rem]'>보호소 유형</div>
                  <div className='w-[230px] flex justify-between'>
                    <RadioTag name={'public'} control={control}>
                      시보호소
                    </RadioTag>
                    <RadioTag name={'private'} control={control}>
                      사설 보호소
                    </RadioTag>
                  </div>
                </div>
                <div className='pt-[0.5rem] h-[5.75rem]'>
                  <div className='mb-[1rem]'>대표자 이름</div>
                  <div className='flex flex-row'>
                    <TextInput
                      control={control}
                      placeholder='텍스트를 입력하세요'
                      borderRadius={true}
                      name={'ceo_name'}
                      rules={{ required: true }}
                    />
                  </div>
                </div>
                <div className='pt-[0.5rem] h-[5.75rem]'>
                  <div className='mb-[1rem]'>대표자 전화번호</div>
                  <div className='flex flex-row'>
                    <TextInput
                      control={control}
                      placeholder='텍스트를 입력하세요'
                      borderRadius={true}
                      name={'ceo_phone'}
                      rules={{ required: true }}
                    />
                  </div>
                </div>
                <div className='pt-[0.5rem] h-[5.75rem]'>
                  <div className='mb-[1rem]'>비밀번호</div>
                  <div className='flex flex-row'>
                    <TextInput
                      control={control}
                      placeholder='텍스트를 입력하세요'
                      borderRadius={true}
                      type='password'
                      name={'password'}
                      rules={{
                        required: true,
                        minLength: 8,
                        maxLength: 16,
                        pattern: {
                          value:
                            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
                          message:
                            '영문 & 숫자 & 특수조합 포함 8자리 이상 입력하세요',
                        },
                      }}
                    />
                    {errors.password && (
                      <p className='text-[0.9375rem] text-red-600'>
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className='pt-[0.5rem] h-[5.75rem] mb-[1rem]'>
                  <div className='mb-[1rem]'>비밀번호 확인</div>
                  <div className='flex flex-row'>
                    <TextInput
                      control={control}
                      placeholder='텍스트를 입력하세요'
                      borderRadius={true}
                      type='password'
                      name={'pwcheck'}
                      rules={{
                        required: true,
                        onChange: () => passwordValidation(),
                      }}
                    />
                  </div>
                  {passwordOpen && (
                    <div className='text-xs pl-[20px]'>{pwcheckmsg}</div>
                  )}
                </div>
              </div>
              <div className='m-auto w-[26.25rem] h-[16rem]'>
                <div className='w-[26.25rem] h-[1.25rem] flex flex-row mb-[1.5rem]'>
                  <div className='mt-[0.125rem]'>
                    <Checkbox
                      name={'all'}
                      control={control}
                      labelType='singletext'
                      label='전체 동의'
                    />
                  </div>
                </div>
                <div className='border-t-2 h-[13.25rem]'>
                  <div className='h-[1.5rem] flex flex-row mt-[1.5rem]'>
                    <div className='mt-[0.125rem]'>
                      <Checkbox
                        name={'member'}
                        control={control}
                        labelType='singletext'
                        label='(필수) 개인 회원 약관에 동의'
                      />
                    </div>
                  </div>
                  <div className='h-[1.5rem] flex flex-row mt-[1.5rem]'>
                    <div className='mt-[0.125rem]'>
                      <Checkbox
                        name={'info'}
                        control={control}
                        labelType='singletext'
                        label='(필수) 개인정보 수집 및 이용 동의'
                      />
                    </div>
                  </div>
                  <div className='h-[1.5rem] flex flex-row mt-[1.5rem]'>
                    <div className='mt-[0.125rem]'>
                      <Checkbox
                        name={'site'}
                        control={control}
                        labelType='singletext'
                        label='(필수) 위치기반 서비스 이용에 동의'
                      />
                    </div>
                  </div>
                  <div className='h-[1.5rem] flex flex-row mt-[1.5rem]'>
                    <div className='mt-[0.125rem]'>
                      <Checkbox
                        name={'marketing'}
                        control={control}
                        labelType='singletext'
                        label='(선택) 마케팅 정보 수신 동의 및 마케팅'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <FooterShadowBox>
                <ButtonXL type='submit'>가입완료</ButtonXL>
              </FooterShadowBox>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignupShelter;
