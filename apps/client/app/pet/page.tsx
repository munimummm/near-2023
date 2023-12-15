'use client';

// import { useEffect, useState } from 'react';
// import { Session, createClientComponentClient } from '@near/supabase';
import { Footer, Top } from 'ui';
import NearAnimalCardSection from '../../components/pet/CardSection';
import { TopData } from '../../components/home/dummy';
import TopCarousel from '../../components/home/TopCarousel';

function NearAnimalPage() {
  // const supabase = createClientComponentClient();
  // const [userSession, setUserSession] = useState<Session | null>();

  // async function getUserSession() {
  //   const { data, error } = await supabase.auth.getSession();
  //   if (data) {
  //     setUserSession(data.session);
  //   }
  //   if (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getUserSession();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <Top />
      <main className='flex flex-col items-center mt-[2.9375rem] pb-[7.0625rem] mobile:mt-[2.9375rem] mobile:pb-[7.0625rem] tablet:mt-[2.9375rem] tablet:pb-[18.9375rem] desktop:mt-0 desktop:pb-[15.8125rem]'>
        {/* home과 동일 */}
        <TopCarousel slides={TopData} />
        <NearAnimalCardSection />
      </main>
      <Footer />
    </>
  );
}

export default NearAnimalPage;
