'use client';

import { useEffect, useState } from 'react';
import { Session, createClientComponentClient } from '@near/supabase';
import { Breadcrumb, Footer, Top, TopSuspense } from 'ui';

function NearAnimalDetailPage({ params }: { params: { id: number } }) {
  const supabase = createClientComponentClient();
  const [userSession, setUserSession] = useState<Session | null>();

  async function getUserSession() {
    const { data, error } = await supabase.auth.getSession();
    if (data) {
      setUserSession(data.session);
    }
    if (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {userSession ? <Top /> : <TopSuspense />}
      <main className='flex flex-col items-center mt-[2.9375rem] pb-[7.0625rem] mobile:mt-[2.9375rem] mobile:pb-[7.0625rem] tablet:mt-[2.9375rem] tablet:pb-[18.9375rem] desktop:mt-0 desktop:pb-[15.8125rem]'>
        <Breadcrumb
          className='w-full pl-4 desktop:pl-10'
          items={['근처동물', '니어동물 프로필']}
        />

        {params.id}
      </main>
      <Footer />
    </>
  );
}

export default NearAnimalDetailPage;
