'use client';

import { ButtonXL, ButtonXS } from 'ui/components/buttons/Button';
import ImageBox from 'ui/components/imagebox/ImageBox';
import TextInput from 'ui/components/textinput/TextInput';
import { useForm } from '@near/react-hook-form';
import Tag from 'ui/components/tags/Tag';
import FooterShadowBox from 'ui/components/footer/FooterShadowBox';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DatePicker } from '@near/react-datepicker';
import './datepicker/datepicker.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Modal } from '@near/antd';
import { DaumPostcode } from '@near/react-daum-postcode';
import { createClientComponentClient, Session } from '@near/supabase';
import { Top, TopSuspense } from 'ui';

interface FormValues {
  id?: string;
  birth?: string;
  address?: string;
  name?: string;
  phone?: string;
  detail_address?: string;
  email?: string;
}

const PersonalChange = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      birth: '',
      address: '',
      name: '',
      email: '',
      detail_address: '',
      phone: '',
    },
    mode: 'onChange',
  });

  const [color, setColor] = useState<boolean>(false);
  const [datePicker, setDatePicker] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userSession, setUserSession] = useState<Session | null>();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();

        if (data) {
          setUserSession(data.session);
        }

        if (!data.session) {
          router.push('/');
        } else {
          console.log('session error');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickPasswordChange = () => {
    router.push('/profile/passwordchange');
    setColor(true);
  };

  const onClickDatePicker = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDatePicker(!datePicker);
  };

  const onChangebirth = () => {
    const date = selectedDate;
    const year = date?.getFullYear();
    const month = Number(date?.getMonth()) + 1;
    const day = date?.getDate();
    const value = year + '.' + month + '.' + day;

    setValue('birth', value);
  };

  const onToggleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    setValue('address', data.address);

    if (data) {
      setIsOpen((prev) => !prev);
    }
  };

  let profileId = [] as any | undefined;
  const fetchId = async () => {
    try {
      let { data, error } = await supabase.from('user_profile').select('id');
      console.log(data);

      profileId = data?.map((idx) => {
        return idx.id;
      });
      console.log(profileId);

      if (error instanceof Error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickSubmit = async (userData: FormValues) => {
    fetchId();
    let { data: user_profile, error } = await supabase
      .from('user_profile')
      .update({
        name: userData.name,
        birth: userData.birth,
        phone: userData.phone,
        address: userData.address,
        detail_address: userData.detail_address,
      })
      .eq('id', profileId);

    if (error instanceof Error) {
      console.log(error);
    }

    if (user_profile) {
      console.log('변경');
    }
    router.push('/profile');
  };

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
          <div
            className='mobile:flex mobile:flex-col mobile:justify-between mobile:items-center mobile:h-[6.25rem] mobile:mt-[5rem] mobile:mb-[2.5rem] 
            tablet:h-[9.25rem] tablet:grid tablet:justify-items-start'
          >
            <div
              className='moblie:pb-[3rem] moblie:text-[1.25rem] mobile:font-bold tablet:font-bold
                                    tablet:ml-[4.0625rem]
                    '
            >
              프로필
            </div>
            <div
              className='mobile:flex flex-row justify-between w-[12.5rem]
                                    tablet:ml-[2.5rem]
                    '
            >
              <div className='text-indigo-900'>개인 정보</div>
              {color === false ? (
                <button
                  className='text-slate-300'
                  onClick={onClickPasswordChange}
                >
                  비밀번호 변경
                </button>
              ) : (
                <button
                  className='text-indigo-900'
                  onClick={onClickPasswordChange}
                >
                  비밀번호 변경
                </button>
              )}
            </div>
          </div>
          <div
            className=' m-auto mobile:flex mobile:flex-col mobile:w-[480px] mobile:h-[62.5rem]
                                 tablet:w-[30rem] tablet:h-[56.375rem]
                                 desktop:w-[90rem] desktop:h-[66.0625rem]'
          >
            <div
              className='mobile:h-[14rem] mobile:relative 
                                    tablet:h-[14rem] tablet:relative
                                    desktop:h-[14rem] desktop:relative'
            >
              <div
                className='mobile:flex mobile:flex-row mobile:items-end mobile:absolute top-[3.125rem] mobile:left-[1.625rem]
                                        tablet:absolute top-[2.5rem]
                                        desktop:absolute top-[3.125rem] desktop:left-[23.4375rem]'
              >
                <ImageBox size='lg' />
                <ButtonXS
                  className='w-[5rem] h-[1.875rem]'
                  mode='outline'
                  type='button'
                >
                  이미지 수정
                </ButtonXS>
              </div>
            </div>
            <div className='mobile:h-[37.5rem] mobile:mt-[1rem] desktop:h-[760px]'>
              <div
                className='mobile:flex mobile:justify-center mobile:h-[5.75rem] mobile:grid moible:mb-[0.625rem]
                                        desktop:mb-[1.625rem]'
              >
                <div>이름</div>
                <div className='mobile:w-[26rem] desktop:w-[43.1875rem]'>
                  <TextInput
                    control={control}
                    borderRadius={true}
                    placeholder='성함을 입력하세요'
                    name={'name'}
                    rules={{
                      required: true,
                      minLength: {
                        value: 2,
                        message: '2글자 이상 입력해 주세요',
                      },
                    }}
                  />
                  {errors.name && (
                    <p className='text-[0.9375rem] text-red-600'>
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>
              <div
                className='mobile:flex mobile:justify-center mobile:h-[5.75rem] mobile:grid
                                        desktop:grid desktop:mb-[1.625rem]'
              >
                <div>생년월일</div>
                <div className='mobile:flex mobile:flex-row mobile:w-[26.125rem] desktop:w-[43.1875rem]'>
                  <div className='mobile:flex mobile:justify-between mobile:w-[21.8125rem] mobile:mr-[0.75rem] desktop:w-[43.1875rem]'>
                    <TextInput
                      control={control}
                      borderRadius={true}
                      placeholder='생년월일을 입력하세요'
                      name={'birth'}
                      rules={{ required: true }}
                    />
                  </div>
                  <Tag
                    mode='gray'
                    isFlat={false}
                    handleTagClick={onClickDatePicker}
                    className='w-[6.25rem] mb-[5px] h-[35px]'
                  >
                    달력
                  </Tag>
                  <DatePicker
                    dateFormat='yyyy년 MM월 dd일'
                    popperPlacement='bottom-end'
                    selected={selectedDate}
                    onChange={(date: Date) => {
                      setSelectedDate(date);
                      onChangebirth();
                      setDatePicker(false);
                    }}
                    open={datePicker}
                  />
                </div>
              </div>
              <div className='mobile:flex mobile:justify-center mobile:h-[5.75rem] mobile:grid desktop:mb-[1.625rem]'>
                <div>이메일</div>
                <div className='mobile:w-[26rem] desktop:w-[43.1875rem]'>
                  <TextInput
                    control={control}
                    borderRadius={true}
                    placeholder='이메일을 입력하세요'
                    name={'email'}
                    rules={{
                      required: true,
                      pattern: {
                        value:
                          /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: '이메일 형식에 맞게 입력해 주세요',
                      },
                    }}
                  />
                  {errors.email && (
                    <p className='text-[0.9375rem] text-red-600'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='mobile:flex mobile:justify-center mobile:h-[5.75rem] mobile:grid desktop:mb-[1.625rem]'>
                <div>전화번호</div>
                <div className='mobile:w-[26rem] desktop:w-[43.1875rem]'>
                  <TextInput
                    control={control}
                    borderRadius={true}
                    placeholder='전화번호를 입력하세요 '
                    name={'phone'}
                    rules={{ required: true }}
                  />
                </div>
              </div>
              <div
                className='mobile:flex mobile:justify-center mobile:h-[9.25rem] mobile:grid 
                                        desktop:w-[43.1875rem] desktop:m-auto'
              >
                <div>주소</div>
                <div>
                  <div className='flex mobile:flex-row w-[26.125rem] mb-[0.5rem] desktop:w-[43.1875rem]'>
                    <div className='flex mobile:justify-between w-[21.8125rem] mr-[0.75rem] desktop:w-[43.1875rem]'>
                      <TextInput
                        control={control}
                        borderRadius={true}
                        placeholder='주소를 입력하세요'
                        name={'address'}
                        rules={{ required: true }}
                      />
                    </div>
                    <Tag
                      mode='gray'
                      isFlat={false}
                      handleTagClick={onToggleModal}
                      className='w-[6.25rem] mb-[5px] h-[35px]'
                    >
                      입력
                    </Tag>
                  </div>
                  <div>
                    <TextInput
                      control={control}
                      borderRadius={true}
                      placeholder='주소를 입력하세요'
                      name={'detail_address'}
                      rules={{ required: true }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <FooterShadowBox>
                <ButtonXL type='submit'>변경하기</ButtonXL>
              </FooterShadowBox>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default PersonalChange;
