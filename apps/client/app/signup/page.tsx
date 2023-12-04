'use client';

import { useRouter } from 'next/navigation';

const SingupEntrance = () => {
  const router = useRouter();

  const onClicksingupClient = () => {
    router.push('/signup/signupclient');
  };

  const onClicksingupShelter = () => {
    router.push('/signup/signupshelter');
  };

  return (
    <div>
      <section className='layer-max-width'>
        <div className='m-auto w-[30rem] h-[65.125rem] flex justify-center items-center'>
          <div className='w-[25rem] h-[11.25rem] flex justify-between'>
            <button
              type='button'
              className='w-[11.25rem] h-[11.25rem] rounded-xl hover:rounded-xl shadow-xl text-xl bg-slate-50'
              onClick={onClicksingupClient}
            >
              개인 회원
            </button>
            <button
              type='button'
              className='w-[11.25rem] h-[11.25rem] rounded-xl hover:rounded-xl shadow-xl text-xl bg-slate-50'
              onClick={onClicksingupShelter}
            >
              보호소 회원
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingupEntrance;
