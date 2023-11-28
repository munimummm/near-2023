'use client';

import { Cookies } from '@near/react-cookie';
import { useState, useEffect } from 'react';
import { Footer, Top, TopSuspense } from 'ui';
import BottomButtonsSection from '../../components/profile/BottomButtons';
import { useRouter } from 'next/navigation';
import ProfileBoxSection from '../../components/profile/ProfileBoxSection';
import CardsSection from '../../components/profile/CardsSection';

export default function ProfilePage() {
  const [isLogin, setIsLogin] = useState<boolean>();
  const router = useRouter();

  useEffect(() => {
    const cookies = new Cookies();
    if (cookies.get('sb-ztcvdzkqqrglziiavupe-auth-token')) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {typeof isLogin !== 'undefined' ? (
        <Top isLogin={isLogin} />
      ) : (
        <TopSuspense />
      )}
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
