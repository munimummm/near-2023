'use client';

import { useForm } from '@near/react-hook-form';
import TextInput from 'ui/components/textinput/TextInput';
import { ButtonXL } from 'ui/components/buttons/Button';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import FooterShadowBox from 'ui/components/footer/FooterShadowBox';
import { createClientComponentClient } from '@near/supabase';
import { Modal } from '@near/antd';

interface FormValues {
  currentpw?: string;
  changepw?: string;
  pwcheck?: string;
}

const PasswordChange = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormValues>({
    defaultValues: {
      currentpw: '',
      changepw: '',
      pwcheck: '',
    },
    mode: 'onChange',
  });

  const [color, setColor] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [pwcheckmsg, setPkcheckmsg] = useState<string>('');
  const [passwordOpen, setPasswordOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();

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

  // 비밀번호 체크 함수
  const passwordValidation = () => {
    setPasswordOpen(true);
    const inputPassword: string = getValues('changepw')!;
    const passwordCheck: string = getValues('pwcheck')!;

    if (inputPassword !== passwordCheck) {
      setPkcheckmsg('입력하신 비밀번호가 다릅니다.');
    } else {
      setPkcheckmsg('입력하신 비밀번호가 같습니다.');
    }
  };

  const onClickPersonalPage = () => {
    router.push('/personalchange');
    setColor(true);
  };

  const onClickSubmit = async (userData: FormValues) => {
    const { data, error } = await supabase.auth.updateUser({
      password: userData.changepw,
    });

    if (data) {
      console.log(data);
    }

    if (error) {
      console.log(error);
    }

    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div></div>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <div
          className='mobile:flex mobile:flex-col mobile:justify-between mobile:items-center mobile:h-[6.25rem] mobile:mt-[8.25rem] mobile:mb-[2.5rem] 
                                tablet:h-[9.25rem] tablet:grid tablet:justify-items-start'
        >
          <div
            className='moblie:pb-[3rem] moblie:text-[1.25rem] mobile:font-bold tablet:font-bold
                                    tablet:ml-[4.0625rem]'
          >
            프로필
          </div>
          <div
            className='mobile:flex flex-row justify-between w-[12.5rem]
                                    tablet:ml-[2.5rem]'
          >
            {color === false ? (
              <button className='text-slate-300' onClick={onClickPersonalPage}>
                개인 정보
              </button>
            ) : (
              <button className='text-indigo-900' onClick={onClickPersonalPage}>
                개인 정보
              </button>
            )}
            <div className='text-indigo-900'>비밀번호 변경</div>
          </div>
        </div>
        <div className='mobile:flex mobile:flex-col'>
          <div className='mobile:h-[37.5rem] mobile:mt-[1rem] desktop:h-[760px]'>
            <div
              className='mobile:flex mobile:justify-center mobile:h-[5.75rem] mobile:grid moible:mb-[0.625rem]
                                        tablet:mb-[1.5rem]
                                        desktop:mb-[1.625rem]'
            >
              <div>현재 비밀번호</div>
              <div className='mobile:w-[26rem] desktop:w-[43.1875rem]'>
                <TextInput
                  control={control}
                  borderRadius={true}
                  placeholder='현재 비밀번호를 입력하세요'
                  name={'currentpw'}
                  rules={{ required: true }}
                />
              </div>
            </div>
            <div
              className='mobile:flex mobile:justify-center mobile:h-[5.75rem] mobile:grid moible:mb-[0.625rem]
                                        tablet:mb-[1.5rem]
                                        desktop:mb-[1.625rem]'
            >
              <div>변경 비밀번호 입력</div>
              <div className='mobile:w-[26rem] desktop:w-[43.1875rem]'>
                <TextInput
                  control={control}
                  borderRadius={true}
                  placeholder='변경할 비밀번호를 입력하세요'
                  name={'changepw'}
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
                {errors.changepw && <p>{errors.changepw.message}</p>}
              </div>
            </div>
            <div
              className='mobile:flex mobile:justify-center mobile:h-[5.75rem] mobile:grid moible:mb-[0.625rem]
                                        desktop:mb-[1.625rem]'
            >
              <div>변경 비밀번호 확인</div>
              <div className='mobile:w-[26rem] desktop:w-[43.1875rem]'>
                <TextInput
                  control={control}
                  borderRadius={true}
                  placeholder='변경할 비밀번호를 입력하세요'
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
          <div>
            <FooterShadowBox>
              <ButtonXL type='submit'>변경하기</ButtonXL>
            </FooterShadowBox>
            <Modal width={480} open={isModalOpen} footer={null}>
              <div className='mobile:flex flex-col mobile:items-center'>
                <p className='mobile:my-[50px] mobile:font-bold'>
                  비밀번호가 정상적으로 변경되었습니다.
                </p>
                <ButtonXL onClick={handleOk}>확인</ButtonXL>
              </div>
            </Modal>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PasswordChange;
