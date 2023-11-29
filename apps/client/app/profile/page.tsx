'use client';

import { useState, useEffect } from 'react';
import { Footer, Top, TopSuspense } from 'ui';
import BottomButtonsSection from '../../components/profile/BottomButtons';
import { useRouter } from 'next/navigation';
import ProfileBoxSection from '../../components/profile/ProfileBoxSection';
import CardsSection from '../../components/profile/CardsSection';
import { Session, createClientComponentClient } from '@near/supabase';

export default function ProfilePage() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [userSession, setuserSession] = useState<Session | null>();

  async function getUserSession() {
    const { data, error } = await supabase.auth.getSession();
    if (data) {
      setuserSession(data.session);
    }
    if (error) {
      console.log(error);
    }
  }

  if (userSession === null) {
    router.push('/');
  }

  useEffect(() => {
    getUserSession();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {userSession ? <Top /> : <TopSuspense />}
      <main className='flex flex-col gap-[7.5rem] mobile:gap-[7.5rem] tablet:pt-[6.5625rem] tablet:gap-[11.5625rem] desktop:pt-[8.125rem] desktop:gap-[20.0625rem]'>
        <section className='flex flex-col gap-[7.5rem] justify-center items-center mobile:flex-col tablet:flex-col desktop:flex-row'>
          <ProfileBoxSection />
          <CardsSection />
        </section>
        <BottomButtonsSection />
      </main>
      <Footer />
    </>
  );
}
