'use client';
import { useForm } from '@near/react-hook-form';
import { createClientComponentClient } from '@near/supabase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Logo, TextInput } from 'ui';

function Page() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [data, setData] = useState(false);
  const [show, setShow] = useState(false);
  const { control, handleSubmit, getValues } = useForm();
  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      'http://localhost:3000/';
    // Make sure to include `https://` when not localhost.
    url = url.includes('http') ? url : `https://${url}`;
    // Make sure to include a trailing `/`.
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
    return url;
  };
  // useEffect(() => {
  //   (async () => {
  //     const { data: session } = await supabase.auth.getSession();
  //     if (session.session) {
  //       router.push('/');
  //     }
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  async function getProfile(text: string) {
    const { data } = await supabase
      .from('user_email_list')
      .select('email')
      .eq('email', text);

    if (data?.length !== 0) {
      setShow(true);
      setData(true);
    } else {
      setShow(true);
      setData(false);
    }
  }

  return (
    <section className='mobile:mt-[8.5rem] tablet:mt-[8.5rem] desktop:mt-0'>
      <main className='layout_max_width flex flex-col items-center gap-5'>
        <Logo className='mb-4' />
        <div className='mb-4'>
          <h3 className='text-3xl text-text-black1 font-semibold mb-3 text-center'>
            비밀번호 재설정
          </h3>
          <h3 className='text-text-gray font-medium text-center'>
            가입하신 이메일을 적어주세요
          </h3>
          <form
            onSubmit={handleSubmit((data) => {
              getProfile(data.email);
            })}
            className='flex gap-2 items-center mt-8'
          >
            <TextInput defaultValue='' control={control} name={'email'} />
            <button className='w-40 bg-theme-main px-1 py-2 rounded-md text-bg-white text-sm'>
              이메일 찾기
            </button>
          </form>
          {show && (
            <section className='p-10 bg-gray-3 mt-10 rounded-xl text-center'>
              <p className='mb-6'>
                {data ? '존재하는 이메일 입니다' : '가입된 이메일이 없어요'}
              </p>
              <Button
                type='button'
                onClick={async () => {
                  if (data) {
                    alert('입력하신 메일의 메일함을 확인해주세요');
                    return await supabase.auth.resetPasswordForEmail(
                      getValues().email,
                      {
                        redirectTo: `${getURL()}/login/findpassword/update-password`,
                      },
                    );
                  } else {
                    router.push('/signup');
                  }
                }}
                mode='secondary'
              >
                {data ? '새로운 비밀번호 등록하기' : '회원가입'}
              </Button>
            </section>
          )}
        </div>
      </main>
    </section>
  );
}

export default Page;
