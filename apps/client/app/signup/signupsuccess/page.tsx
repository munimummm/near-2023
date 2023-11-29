'use client';

import { useRouter } from 'next/navigation';
import { ButtonXL, Logo } from 'ui';

const SignupSuccess = () => {
  const router = useRouter();
  //   const { control } = useForm({
  //     defaultValues: {},
  //     mode: 'onChange',
  //   });

  const onClickPryProfile = () => {
    router.push('../../profile/pet');
  };

  const onClickHome = () => {
    router.push('/');
  };

  return (
    <div>
      <section className='layout-max-width'>
        <div className='m-auto w-[30rem] h-[65.3125rem]'>
          <div className='flex flex-col items-center pt-[8.5rem]'>
            <div>
              <Logo size='lg' />
            </div>
            <div className='mt-[1.5rem] text-[2.25rem] text-indigo-800'>
              WELCOME NEAR
            </div>
          </div>
          <div className='flex flex-col items-center mt-[260px]'>
            <ButtonXL type='button' onClick={onClickPryProfile}>
              반려동물 등록 하러가기
            </ButtonXL>
            <ButtonXL
              type='button'
              mode='outline'
              onClick={onClickHome}
              className='mt-[1rem]'
            >
              메인 홈으로 가기
            </ButtonXL>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupSuccess;
