'use client';

import { useState, useEffect } from 'react';
import { Footer, Top } from 'ui';
import BottomButtonsSection from '../../components/profile/BottomButtons';
import { useRouter } from 'next/navigation';
import ProfileBoxSection from '../../components/profile/ProfileBoxSection';
import CardsSection from '../../components/profile/CardsSection';
import { createClientComponentClient } from '@near/supabase';
import { Cookies } from '@near/react-cookie';
import { getUsersession, useRecoilValue } from '@near/store';

export default function ProfilePage() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [profile, setProfile] = useState<any[] | null>(null);
  const getUserSession = useRecoilValue(getUsersession);

  async function getLoginUserProfile() {
    if (getUserSession?.user.role === 'normal_user') {
      const { data } = await supabase.from('user_profile').select('*');
      setProfile(data);
    }

    if (getUserSession?.user.role === 'shelter_user') {
      const { data } = await supabase
        .from('shelter_profile')
        .select('*')
        .eq('id', getUserSession.user.id);
      setProfile(data);
    }
  }

  useEffect(() => {
    const cookies = new Cookies();
    if (cookies.get('sb-ztcvdzkqqrglziiavupe-auth-token') === undefined) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUserSession]);

  useEffect(() => {
    getLoginUserProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Top />
      <main className='flex flex-col gap-[7.5rem] mobile:gap-[7.5rem] tablet:pt-[6.5625rem] tablet:gap-[11.5625rem] desktop:pt-[8.125rem] desktop:gap-[20.0625rem]'>
        <section className='flex flex-col gap-[7.5rem] justify-center items-center mobile:flex-col tablet:flex-col desktop:flex-row'>
          {getUserSession?.user.role === 'normal_user'
            ? profile?.map((item, idex) => {
                return (
                  <ProfileBoxSection
                    key={idex}
                    src={'/images/profile/img_profile_default.png'}
                    level={item.level}
                    name={item.name}
                    email={item.email}
                  />
                );
              })
            : profile?.map((item, idex) => {
                return (
                  <ProfileBoxSection
                    key={idex}
                    level={(100).toString()}
                    src={'/images/profile/img_profile_default.png'}
                    name={item.shelter_name}
                    email={item.email.replace('@near.com', '')}
                  />
                );
              })}
          <CardsSection />
        </section>
        <BottomButtonsSection />
      </main>
      <Footer />
    </>
  );
}
