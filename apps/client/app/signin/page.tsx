'use client';
import Logo from 'ui/components/logo/Logo';
import TextInput from 'ui/components/textinput/TextInput';
import { useForm, useController, UseControllerProps } from 'react-hook-form';
import Checkbox from 'ui/components/checkbox/Checkbox';
import Button from 'ui/components/buttons/Button';
import { useState } from 'react';
import { clsx } from 'clsx';
interface LoginProps {
  email?: string;
  password?: string;
}

export default function SignInPage() {
  const { control } = useForm<LoginProps>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  const [userType, setUserType] = useState(true);
  return (
    <section className='py-[8.5rem] flex flex-col items-center'>
      <form action=''>
        <fieldset>
          <legend className='m-auto'>
            <Logo size='lg' />
          </legend>
          <option
            onClick={() => setUserType((prev) => !prev)}
            className={clsx(
              'inline-block mt-20 font-normal text-[#8B8B8B]',
              userType
                ? 'text-theme-main_dark active:text-theme-main_dark'
                : null,
            )}
          >
            개인회원
          </option>
          <span className='mx-4 text-[#8B8B8B]'>|</span>
          <option
            onClick={() => setUserType((prev) => !prev)}
            className={clsx(
              'inline-block font-normal text-[#8B8B8B]',
              userType
                ? 'text-theme-main_dark active:text-theme-main_dark'
                : null,
            )}
          >
            보호소 회원
          </option>
          <div className='flex flex-col gap-6 my-6'>
            <TextInput
              name={'email'}
              control={control}
              borderRadius={true}
              state={'default'}
              size={'md'}
              placeholder='이메일을 입력해주세요.'
            />
            <TextInput
              name={'password'}
              control={control}
              borderRadius={true}
              state={'default'}
              size={'md'}
              placeholder='비밀번호를 입력해주세요.'
            />
          </div>
          <section className='flex mb-40'>
            <Checkbox />
            <span>로그인 상태 유지</span>
          </section>
          <Button>로그인</Button>
        </fieldset>
      </form>
      아이디 찾기 | 비밀번호 찾기 | 회원가입
    </section>
  );
}
