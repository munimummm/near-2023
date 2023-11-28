'use client';

import Link from 'next/link';
import { Icon } from '../../icon/Icon';
import Logo from '../../logo/Logo';
import { MenuOptionTabsContent } from '../MenuOptionTabsContent';
import TopMenuTabs from './TopMenuTabs';
import { Session, createClientComponentClient } from '@near/supabase';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
export interface TopMenuBarIconsProps {
  setIsHamburgerMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function TopMenuBarIcons({ setIsHamburgerMenuVisible }: TopMenuBarIconsProps) {
  const supabase = createClientComponentClient();
  const [userSession, setuserSession] = useState<Session | null>();
  const router = useRouter();
  async function getUserSession() {
    const { data, error } = await supabase.auth.getSession();
    if (data) {
      setuserSession(data.session);
    }
    if (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.refresh();
  }
  useEffect(() => {
    getUserSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSession]);

  return (
    <section className='flex items-center justify-between w-full max-w-[84rem]'>
      <Logo
        size='sm'
        className='inline-block mobile:inline-block tablet:inline-block desktop:hidden'
      />
      <Logo
        size='lg'
        className='hidden mobile:hidden tablet:hidden desktop:inline-block'
      />
      <ul className='mobile:hidden tablet:hidden desktop:flex desktop:items-center desktop:gap-10'>
        {MenuOptionTabsContent.map((menuOptionTab, index) => {
          return (
            <li
              key={`${menuOptionTab.name}_${index}_desktop`}
              className='flex items-center justify-center w-[7.5rem] h-12'
            >
              <TopMenuTabs
                href={menuOptionTab.href}
                name={menuOptionTab.name}
              />
            </li>
          );
        })}
      </ul>
      <div className='flex items-center mobile:gap-6 tablet:gap-6 desktop:gap-8'>
        {userSession ? (
          <>
            <Link
              className='mobile:text-sm tablet:text-sm desktop:text-lg text-text-black1'
              href={'/profile'}
            >
              프로필
            </Link>
            <Link
              className='mobile:text-sm tablet:text-sm desktop:text-lg text-text-black1'
              href={'/'}
              onClick={handleSignOut}
            >
              로그아웃
            </Link>
          </>
        ) : (
          <>
            <Link
              className='mobile:text-sm tablet:text-sm desktop:text-lg text-text-black1'
              href={'/signup'}
            >
              회원가입
            </Link>
            <Link
              className='mobile:text-sm tablet:text-sm desktop:text-lg text-text-black1'
              href={'/login'}
            >
              로그인
            </Link>
          </>
        )}
        {/* hamburger icon */}
        <button
          className='desktop:hidden'
          onClick={() => setIsHamburgerMenuVisible((prev) => !prev)}
        >
          <Icon icon={'ic_hamburger'} sizes={'lg'} state={'default'} />
        </button>
      </div>
    </section>
  );
}

export default TopMenuBarIcons;
