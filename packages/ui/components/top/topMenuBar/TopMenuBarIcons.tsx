'use client';

import Link from 'next/link';
import { Icon } from '../../icon/Icon';
import Logo from '../../logo/Logo';
import { MenuOptionTabsContent } from '../MenuOptionTabsContent';
import TopMenuTabs from './TopMenuTabs';

export interface TopMenuBarIconsProps {
  isLogin: boolean;
  setIsHamburgerMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleSignOut?: () => void;
}

function TopMenuBarIcons({
  isLogin,
  handleSignOut,
  setIsHamburgerMenuVisible,
}: TopMenuBarIconsProps) {
  return (
    <section className='flex items-center justify-between w-full max-w-[84rem]'>
      <Logo />
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
        {isLogin ? (
          <>
            <Link
              className='mobile:text-sm tablet:text-sm text-text-black1'
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
