'use client';
import { useForm } from '@near/react-hook-form';
import { createClientComponentClient } from '@near/supabase';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button, Logo, TextInput } from 'ui';
function Page({ params }: { params: { id: string } }) {
  const supabase = createClientComponentClient();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    (async () => {
      const { data: session } = await supabase.auth.getSession();
      if (session.session) {
        router.push('/');
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const passwordValidation = () => {
    const newPassword = getValues('newPassword');
    const checkNewPassword = getValues('newPasswordCheck');
    console.log(newPassword, checkNewPassword);
    newPassword !== checkNewPassword ? setShowError(true) : setShowError(false);
  };
  const router = useRouter();
  async function updateUser(params: { email: string; password: string }) {
    await supabase.auth.updateUser({
      email: params.email,
      password: params.password,
    });
    router.push('/');
  }

  return (
    <>
      <section>
        <form
          className='w-80 flex flex-col layout_max_width desktop:mt-0 mobile:mt-[8.5rem] tablet:mt-[8.5rem]'
          onSubmit={handleSubmit((data) => {
            updateUser({
              email: decodeURIComponent(params.id),
              password: data.newPassword,
            });
          })}
        >
          <Logo className='self-center mb-2' />
          <h3 className='text-3xl text-text-black1 font-semibold mb-3 text-center'>
            비밀번호 재설정
          </h3>
          <small className='mt-3'>새 비밀번호</small>
          <TextInput
            placeholder='영문 & 숫자 & 특수문자조합 포함 8자리 이상 입력하세요'
            rules={{
              required: true,
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
                message:
                  '영문 & 숫자 & 특수문자조합 포함 8자리 이상 입력하세요',
              },
            }}
            control={control}
            defaultValue={''}
            name={'newPassword'}
          />
          <small className='mt-4'>* 비밀번호 확인</small>
          <TextInput
            placeholder='비밀 번호를 다시 한 번 입력해주세요'
            rules={{
              required: true,
              onChange: () => passwordValidation(),
            }}
            control={control}
            defaultValue={''}
            name={'newPasswordCheck'}
          />
          <div className='text-xs pr-2 text-red-500 flex flex-col mt-4 mb-8'>
            {showError ? <small>비밀번호가 맞지않습니다</small> : null}
            {errors.newPassword && (
              <small>
                영문 & 숫자 & 특수문자 조합 포함 8자리 이상 입력하세요
              </small>
            )}
          </div>

          <Button type='submit'>변경 하기</Button>
        </form>
      </section>
    </>
  );
}

export default Page;
