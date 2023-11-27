'use client';
import Logo from 'ui/components/logo/Logo';
import Link from 'next/link';
import TextInput from 'ui/components/textinput/TextInput';
import { useForm } from '@near/react-hook-form';
import Checkbox from 'ui/components/checkbox/Checkbox';
import { ButtonXL } from 'ui/components/buttons/Button';
import { useEffect, useState } from 'react';
import { clsx } from '@near/clsx';
import { useCookies } from '@near/react-cookie';
import { createClientComponentClient } from '@near/supabase';
import { useRouter } from 'next/navigation';

interface LoginProps {
  email?: string;
  password?: string;
  checkbox_login?: boolean;
}

export default function SignIn() {
  const { control, handleSubmit, reset } = useForm<LoginProps>({
    defaultValues: {
      email: '',
      password: '',
      checkbox_login: true,
    },
    mode: 'onChange',
  });

  const router = useRouter();

  const toggleId = [
    { id: '개인회원', order: 'order-1' },
    { id: '보호소 회원', order: 'order-3' },
  ];

  const [pick] = useState(toggleId);
  const [selected, setSelected] = useState<string[]>([toggleId[0].id]);
  const [error, setError] = useState(false);
  const [ischecked, setIschecked] = useState<boolean>();
  const supabase = createClientComponentClient();
  const [cookies, setCookie] = useCookies([
    'sb-ztcvdzkqqrglziiavupe-auth-token',
  ]);

  useEffect(() => {
    if (ischecked !== undefined && ischecked === false) {
      setCookie(
        'sb-ztcvdzkqqrglziiavupe-auth-token',
        { ...cookies }['sb-ztcvdzkqqrglziiavupe-auth-token'],
        {
          expires: new Date(Date.now() + 3600 * 24 * 1000),
        },
      );
    } else {
      setCookie(
        'sb-ztcvdzkqqrglziiavupe-auth-token',
        { ...cookies }['sb-ztcvdzkqqrglziiavupe-auth-token'],
      );
    }
    (async () => {
      const { data: session } = await supabase.auth.getSession();
      if (session.session) {
        router.push('/');
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, ischecked]);

  return (
    <main className='py-[8.5rem] flex flex-col items-center'>
      <section className='layout_max_width'>
        <form
          onSubmit={handleSubmit(async (data) => {
            const { error } = await supabase.auth.signInWithPassword({
              email: selected.includes('개인회원')
                ? data.email || ''
                : `${data.email}@near.com`,
              password: data.password || '',
            });
            if (error) {
              setError(true);
            }
            if (!data.checkbox_login) {
              setIschecked(false);
            } else {
              setIschecked(true);
            }
          })}
        >
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
                    setError(false);
                    setSelected(() => [item.id]);
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
          <div className='flex flex-col gap-6 my-6 '>
            <div className='relative'>
              <TextInput
                name={'email'}
                type='text'
                control={control}
                borderRadius={true}
                state={error ? 'error' : 'default'}
                aria-errormessage='이메일을 다시 확인해주세요'
                placeholder={
                  selected.includes('개인회원')
                    ? '이메일을 입력해주세요.'
                    : '발급 받은 아이디를 입력해주세요.'
                }
              />
              {error && (
                <p
                  id='이메일을 다시 확인해주세요'
                  className='text-[0.75rem] text-[#CC3B3B] mt-[0.204375rem] pl-4 absolute'
                >
                  {selected.includes('개인회원')
                    ? '이메일을 다시 확인해주세요'
                    : '아이디를 다시 확인해주세요'}
                </p>
              )}
            </div>
            <div className='relative'>
              <TextInput
                type='password'
                name={'password'}
                control={control}
                borderRadius={true}
                state={error ? 'error' : 'password'}
                aria-errormessage='비밀번호를 다시 확인해주세요'
                placeholder='비밀번호를 입력해주세요.'
              />
              {error && (
                <p
                  id='비밀번호를 다시 확인해주세요'
                  className='text-[0.75rem] text-[#CC3B3B] mt-[0.204375rem] pl-4 absolute'
                >
                  비밀번호를 다시 입력해주세요
                </p>
              )}
            </div>
          </div>
          <section className='flex mobile:pb-40 tablet:pb-20 desktop:pb-20'>
            <Checkbox
              isResponsive={false}
              labelType='singletext'
              control={control}
              name='checkbox_login'
              type='checkbox'
              label='로그인 상태 유지'
            />
          </section>
          <ButtonXL type='submit' mode='main'>
            로그인
          </ButtonXL>
        </form>
        <section>
          {selected.includes('개인회원') && (
            <>
              <ul className='text-[#8B8B8B] flex flex-col items-center gap-8 mt-8'>
                {/* <li>다른 계정으로 로그인</li> */}
                {/* <ul className='flex gap-6'>
                  <li className='text-[0.75rem] text-center'>
                    <button
                      type='button'
                      onClick={() => handleSocialSignin('google')}
                      className='mb-2'
                    >
                      <Image
                        src={'/kakao_login_medium_narrow 1.png'}
                        width={183}
                        height={45}
                        alt={'구글 소셜 로그인'}
                      />
                    </button>
                  </li>
                  <li className='text-[0.75rem] text-center'>
                    <button
                      type='button'
                      onClick={() => handleSocialSignin('kakao')}
                      className='mb-2'
                    >
                      <Image
                        src={'/kakao_login_medium_narrow 1.png'}
                        width={183}
                        height={45}
                        alt={'카카오 소셜 로그인'}
                      />
                    </button>
                  </li>
                </ul> */}
              </ul>
            </>
          )}
        </section>
        <section className='mt-8 text-[#8B8B8B] font-normal text-center'>
          <Link className='after:content-["|"] after:mx-4' href={''}>
            아이디 찾기
          </Link>
          <Link className='after:content-["|"] after:mx-4' href={''}>
            비밀번호 찾기
          </Link>
          <Link href={''}>회원가입하기</Link>
        </section>
      </section>
    </main>
  );
}
