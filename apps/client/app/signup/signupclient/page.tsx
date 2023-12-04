'use client';

import { useEffect, useState } from 'react';
import { useForm } from '@near/react-hook-form';
import { ButtonXL } from 'ui/components/buttons/Button';
import CheckBox from 'ui/components/checkbox/Checkbox';
import FooterShadowBox from 'ui/components/footer/FooterShadowBox';
import Logo from 'ui/components/logo/Logo';
import Tag from 'ui/components/tags/Tag';
import './datepicker/datepicker.css';
import TextInput from 'ui/components/textinput/TextInput';
import { Modal } from '@near/antd';
import { DaumPostcode } from '@near/react-daum-postcode';
import { createClientComponentClient } from '@near/supabase';
import { useRouter } from 'next/navigation';
import DatepickerHeader from '../../../components/signup/DatapickerHeader';

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
    birth?: string;
    address?: string;
    detail?: string;
    member?: boolean;
    info?: boolean;
    site?: boolean;
  };
}

interface FormValues {
  birth?: string;
  email?: string;
  password?: string;
  pwcheck?: string;
  name?: string;
  phone?: string;
  address?: string;
  detail?: string;
  all?: boolean;
  member?: boolean;
  info?: boolean;
  site?: boolean;
  marketing?: boolean;
}

const SignupClient = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    watch,
    formState: { errors },
    setError,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      pwcheck: '',
      name: '',
      phone: '',
      address: '',
      detail: '',
      all: false,
      member: false,
      info: false,
      site: false,
      marketing: false,
    },
    mode: 'onChange',
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [messageOpen, setMessageOpen] = useState(false);
  const [pwcheckmsg, setPkcheckmsg] = useState<string>('');
  const [passwordOpen, setPasswordOpen] = useState<boolean>(false);

  // 중복 확인 기능
  const fetchProfile = async () => {
    setMessageOpen(true);
    try {
      let { data: user_email_list } = await supabase
        .from('user_email_list')
        .select('*');

      const emailList = user_email_list;
      const inputEmail: string = getValues('email')!;
      const emailCheck = emailList?.map((idx) => {
        return idx.user_email;
      });

      if (`${emailCheck}` === inputEmail) {
        setMessage('이미 존재하는 아이디입니다.');
      } else if (getValues('email') === '') {
        setMessage('아이디를 입력하세요');
      } else if (!/\w+@\w+\.\w+/.test(inputEmail)) {
        setMessage('올바른 형식에 맞게 작성해 주세요');
      } else {
        setMessage('사용 가능한 아이디입니다.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 비밀번호 체크 함수
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

  const onClickSubmit = async (data: FormValues) => {
    const userData: SignupProps = {
      email: data.email,
      password: data.password,
      role: 'normal_user',
      normal_data: {
        name: data.name,
        birth: data.birth,
        phone: data.phone,
        address: data.address,
        detail: data.detail,
        member: data.member,
        info: data.info,
        site: data.site,
      },
    };
    try {
      handleSignUp(userData);

      console.log(userData);
      if (data.member === false) {
        setError(
          'member',
          { message: '필수 항목을 체크하셔야 합니다' },
          { shouldFocus: true },
        );
      } else if (data.info === false) {
        setError(
          'info',
          { message: '필수 항목을 체크하셔야 합니다' },
          { shouldFocus: true },
        );
      } else if (data.site === false) {
        setError(
          'site',
          { message: '필수 항목을 체크하셔야 합니다' },
          { shouldFocus: true },
        );
      }

      if (userData) {
        router.push('/signup/signupsuccess');
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleComplete = (data: any) => {
    setValue('address', data.address);

    if (data) {
      setIsOpen((prev) => !prev);
    }
  };

  const onToggleModal = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const all = watch('all');
  // 체크박스 전체 동의
  useEffect(() => {
    if (all === true) {
      setValue('member', true);
      setValue('info', true);
      setValue('site', true);
      setValue('marketing', true);
    } else {
      setValue('member', false);
      setValue('info', false);
      setValue('site', false);
      setValue('marketing', false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <div>
      <section className='layout_max_width'>
        <form onSubmit={handleSubmit(onClickSubmit)}>
          {isOpen && (
            <Modal open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
              <DaumPostcode onComplete={handleComplete} />
            </Modal>
          )}
          <section>
            <div className='mobile:flex mobile:justify-center mobile:mt-[8.0625rem] mobile:mb-[4rem]'>
              <Logo size='lg' />
            </div>
          </section>
          {/* 입력 란 */}
          <section>
            <div className='m-auto mobile:h-[85.5rem] w-[30rem] desktop:h-[85.5rem]'>
              <div className='mobile:h-[4.375rem] mobile:pt-[0.625rem] mobile:pl-[2rem] mobile:text-[1.25rem] mobile:font-bold mobile:border-b-2'>
                회원가입
              </div>
              <div className='mt-[3rem]'>
                <div className='grid px-[6%] mobile:h-[5.75rem]'>
                  <div>이름</div>
                  <div>
                    <TextInput
                      control={control}
                      placeholder='이름을 입력하세요'
                      borderRadius={true}
                      name={'name'}
                      rules={{
                        required: true,
                        minLength: {
                          value: 2,
                          message: '최소 2글자 이상 입력하세요',
                        },
                      }}
                    />
                    {errors.name && (
                      <p className='text-xs pl-[1.25rem] text-red-600'>
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className='grid pl-[6%] mobile:h-[5.75rem]'>
                  <div>이메일</div>
                  <div className='flex gap-x-3'>
                    <TextInput
                      control={control}
                      placeholder='이메일을 입력하세요'
                      borderRadius={true}
                      name={'email'}
                      rules={{ required: true }}
                    />
                    <Tag
                      mode='gray'
                      handleTagClick={fetchProfile}
                      className='h-[2.1875rem] w-[9.375rem] mr-[1.875rem]'
                    >
                      중복확인
                    </Tag>
                  </div>
                  {messageOpen ? (
                    <div className='text-xs pl-[1.25rem] text-red-600'>
                      {message}
                    </div>
                  ) : null}
                </div>
                <div className='grid px-[6%] mobile:h-[5.75rem]'>
                  <div>비밀번호</div>
                  <div className=''>
                    <TextInput
                      control={control}
                      type='password'
                      placeholder='비밀번호를 입력하세요'
                      borderRadius={true}
                      name={'password'}
                      rules={{
                        required: true,
                        minLength: 8,
                        maxLength: 16,
                        // 영문 숫자 특수조합 8자리 이상
                        pattern: {
                          value:
                            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
                          message:
                            '영문 & 숫자 & 특수문자조합 포함 8자리 이상 입력하세요',
                        },
                      }}
                    />
                    {errors.password && (
                      <p className='text-xs pl-[1.25rem] text-red-600'>
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className='grid px-[6%] mobile:h-[5.75rem]'>
                  <div>비밀번호 확인</div>
                  <div className=''>
                    <TextInput
                      control={control}
                      type='password'
                      placeholder='비밀번호를 재입력하세요'
                      borderRadius={true}
                      name={'pwcheck'}
                      rules={{
                        required: true,
                        onChange: () => passwordValidation(),
                      }}
                    />
                  </div>
                  {passwordOpen && (
                    <div className='text-xs pl-[1.25rem] text-red-600'>
                      {pwcheckmsg}
                    </div>
                  )}
                </div>
                <div className='grid px-[6%] mobile:h-[5.75rem]'>
                  <div>생년월일</div>
                  <div className='flex gap-x-3'>
                    <div className='w-[26.125rem]'>
                      <DatepickerHeader />
                    </div>
                  </div>
                </div>
                <div className='grid px-[6%] mobile:h-[5.75rem]'>
                  <div>전화번호</div>
                  <div className=''>
                    <TextInput
                      control={control}
                      placeholder='번호를 입력하세요'
                      borderRadius={true}
                      name={'phone'}
                      rules={{ required: true }}
                    />
                  </div>
                </div>
                <div className='grid px-[6%] mobile:h-[7rem]'>
                  <div>주소</div>
                  <div className='grid gap-y-2 mt-[0.625rem]'>
                    <div className='flex gap-x-3'>
                      <TextInput
                        control={control}
                        placeholder='주소를 입력하세요'
                        borderRadius={true}
                        name={'address'}
                        rules={{ required: true }}
                      />
                      <div className='mobile:w-[4.375rem] tablet:w-[6.25rem]'>
                        <Tag
                          mode='gray'
                          handleTagClick={onToggleModal}
                          className='h-[2.1875rem]'
                        >
                          입력
                        </Tag>
                      </div>
                    </div>
                    <div>
                      <TextInput
                        control={control}
                        placeholder='상세주소를 입력하세요'
                        borderRadius={true}
                        name={'detail'}
                        rules={{ required: true }}
                      />
                    </div>
                    <span className='text-xs pl-2'>
                      동네 기반으로 니어동물, 봉사활동을 추천할 때 필요해요
                    </span>
                  </div>
                </div>
                <div className='m-auto grid gap-y-2 mobile:w-[26.25rem] mobile:h-[16rem] mobile:mt-[5rem]'>
                  <div className='border-b-2 h-[2.5rem]'>
                    <CheckBox
                      control={control}
                      labelType='singletext'
                      name={'all'}
                      label='전체동의'
                    />
                  </div>
                  <fieldset className='grid gap-y-4'>
                    <CheckBox
                      control={control}
                      labelType='singletext'
                      name={'member'}
                      label='(필수) 개인 회원 약관에 동의'
                    />
                    <CheckBox
                      control={control}
                      labelType='singletext'
                      name={'info'}
                      label='(필수) 개인정보 수집 및 이용 동의'
                    />
                    <CheckBox
                      control={control}
                      labelType='singletext'
                      name={'site'}
                      label='(필수) 위치기반 서비스 이용에 동의'
                    />
                    <CheckBox
                      control={control}
                      labelType='singletext'
                      name={'marketing'}
                      label='(선택) 마케팅 정보 수신 동의 및 마케팅'
                    />
                  </fieldset>
                  {errors.member && (
                    <p className='text-xs pl-[1.25rem] text-red-600'>
                      {errors.member.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section>
            <FooterShadowBox>
              <ButtonXL type='submit'>가입완료</ButtonXL>
            </FooterShadowBox>
          </section>
        </form>
      </section>
    </div>
  );
};

export default SignupClient;
