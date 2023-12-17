'use client';
import { useForm } from '@near/react-hook-form';
import { Button, Logo, TextInput } from 'ui';

function Page() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors: formError },
  } = useForm();
  return (
    <section>
      <main className='layout_max_width flex flex-col items-center gap-5'>
        <Logo className='mb-4' />
        <div className='mb-4'>
          <h3 className='text-3xl text-text-black1 font-semibold mb-3 text-center'>
            비밀번호 재설정
          </h3>
          <h3 className='text-text-gray font-medium text-center'>
            가입하신 이메일을 적어주세요
          </h3>
          <form className='flex gap-2 items-center mt-8'>
            <TextInput control={control} name={'email'} />
            <button className='w-40 bg-theme-main px-1 py-2 rounded-md text-bg-white text-sm'>
              이메일 찾기
            </button>
          </form>
        </div>
      </main>
    </section>
  );
}

export default Page;
