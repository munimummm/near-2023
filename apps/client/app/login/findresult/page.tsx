'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button, Logo } from 'ui';

function ResultPage() {
  const [resultEmail, setResultEmail] = useState<string | null>('');
  const router = useRouter();
  useEffect(() => {
    typeof window !== 'undefined'
      ? setResultEmail(sessionStorage.getItem('findEmail'))
      : null;
  }, []);

  return (
    <section className='mobile:mt-[8.5rem] tablet:mt-[8.5rem] desktop:mt-0'>
      <main className='layout_max_width flex flex-col items-center gap-5'>
        <Logo className='mb-4' />
        <div className='mb-4'>
          <h3 className='text-3xl text-text-black1 font-semibold mb-3 text-center'>
            계정을 찾았어요
          </h3>
          <h3 className='text-text-gray font-medium text-center'>
            입력하신 전화번호로 가입한 계정을 알려드릴게요
          </h3>
        </div>
        <p className='py-4 px-20 bg-gray-2 text-xl'>{resultEmail}</p>
        <Button
          className='desktop:w-1/5 desktop:mt-10 tablet:w-1/5 tablet:mt-10 mobile:w-1/2 mobile:py-5 mobile:mt-10'
          onClick={() => {
            sessionStorage.clear();
            router.push('/login');
          }}
        >
          로그인
        </Button>
      </main>
    </section>
  );
}

export default ResultPage;
