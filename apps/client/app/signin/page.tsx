'use client';
import Logo from 'ui/components/logo/Logo';
import TextInput from 'ui/components/textinput/TextInput';
import { useForm } from 'react-hook-form';
import Checkbox from 'ui/components/checkbox/Checkbox';
import { ButtonXL } from 'ui/components/buttons/Button';
import { useState } from 'react';
import { clsx } from 'clsx';
import Google from 'ui/assets/icons/social/google.svg';
import { signIn } from 'next-auth/react';
interface LoginProps {
  email?: string;
  password?: string;
}

export default function SignInPage() {
  const { control, handleSubmit, reset } = useForm<LoginProps>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const toggleId = [
    { id: '개인회원', order: 'order-1' },
    { id: '보호소 회원', order: 'order-3' },
  ];

  const [pick] = useState(toggleId);
  const [selected, setSelected] = useState<string[]>([toggleId[0].id]);

  return (
    <main className='py-[8.5rem] flex flex-col items-center'>
      <button
        type='submit'
        onClick={() => {
          signIn('credentials', {
            email: 'test@near.com',
            password: 'rkskek123!!',
          });
        }}
      >
        테스트 버튼
      </button>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <fieldset>
          <legend className='m-auto'>
            <Logo size='lg' />
          </legend>
        </fieldset>
        <section className='mt-20 flex fle'>
          {pick.map((item) => {
            return (
              <option
                key={`item_${item.id}`}
                onClick={() => {
                  reset();
                  !selected.includes(item.id)
                    ? setSelected(() => [item.id])
                    : setSelected(
                        selected.filter((button) => button !== item.id),
                      );
                }}
                className={clsx(
                  item.order,
                  'inline-block  font-normal text-[#8B8B8B] cursor-pointer',
                  !selected.includes(item.id)
                    ? null
                    : 'text-theme-main_dark active:text-theme-main_dark',
                )}
              >
                {item.id}
              </option>
            );
          })}
          <span className='order-2 mx-4 text-[#8B8B8B]'>|</span>
        </section>

        <div className='flex flex-col gap-6 my-6'>
          <TextInput
            width={420}
            name={'email'}
            type='email'
            control={control}
            borderRadius={true}
            state={'default'}
            size={'lg'}
            placeholder={
              selected.includes('개인회원')
                ? '이메일을 입력해주세요.'
                : '보호소 번호를 입력해주세요.'
            }
          />
          <TextInput
            width={420}
            type='password'
            name={'password'}
            control={control}
            borderRadius={true}
            state={'default'}
            size={'lg'}
            placeholder='비밀번호를 입력해주세요.'
          />
        </div>
        <section
          className='flex mobile:pb-40 tablet:pb-20 desktop:pb-20
  
          '
        >
          <Checkbox
            singleText='로그인 상태 유지'
            // isChecked={false && 'signipud'}
          />
          {/* <span className='text-[#333] font-normal leading-6'>
              로그인 상태 유지
            </span> */}
        </section>
        <ButtonXL type='submit' mode='main'>
          로그인
        </ButtonXL>
      </form>
      <section>
        {selected.includes('개인회원') && (
          <>
            <ul className='text-[#8B8B8B] flex flex-col items-center gap-8 mt-8'>
              <li>다른 계정으로 로그인</li>
              <ul className='flex gap-6'>
                <li className='text-[0.75rem] text-center'>
                  <div className='bg-white p-[0.9375rem] rounded-full border border-[#E6E6EA] mb-2'>
                    <Google />
                  </div>
                  kakao
                </li>
                <li className='text-[0.75rem] text-center'>
                  <div className='bg-white p-[0.9375rem] rounded-full border border-[#E6E6EA] mb-2'>
                    <Google />
                  </div>
                  google
                  {/* <span>구글 로그인</span> */}
                </li>
              </ul>
            </ul>
          </>
        )}
      </section>
      <section className='mt-8 text-[#8B8B8B]'>
        아이디 찾기 | 비밀번호 찾기 | 회원가입하기
      </section>
    </main>
  );
}
