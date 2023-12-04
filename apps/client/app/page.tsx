'use client';

import TopCarousel from '../components/home/TopCarousel';
import BottomCarousel from '../components/home/BottomCarousel';
import { TopData } from '../components/home/dummy';
import { BottomData } from '../components/home/dummy';
import { Footer, Top } from 'ui';
import HomeNearPets from '../components/home/homeNearPets';
import HomeVolunteerPoster from '../components/home/homeVolunteerPoster';
import { useEffect, useState } from 'react';
import { Cookies } from '@near/react-cookie';
import HomeNearNews from '../components/home/homeNearNews';

export default function Page() {
  const [isLogin, setIsLogin] = useState<boolean>();

  useEffect(() => {
    const cookies = new Cookies();
    if (cookies.get('sb-ztcvdzkqqrglziiavupe-auth-token')) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <>
      <Top />
      {/* <TopSuspense /> */}
      {/* {typeof isLogin !== 'undefined' ? <Top /> : <TopSuspense />} */}
      <main className='w-full flex flex-col gap-[7.5rem] mobile:gap-[7.5rem] tablet:gap-[11.25rem] desktop:gap-60'>
        <TopCarousel slides={TopData} />
        <HomeNearPets />
        <BottomCarousel slides={BottomData} />
        {typeof isLogin !== 'undefined' ? (
          isLogin ? (
            <HomeNearNews />
          ) : (
            <HomeVolunteerPoster />
          )
        ) : null}
      </main>
      <Footer />
    </>
  );
}
