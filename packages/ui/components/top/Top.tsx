'use client';

import { useState } from 'react';
import { clsx } from '@near/clsx';
import TopMenuBar from './topMenuBar/TopMenuBar';
import HamburgerMenu from './hamburgerMenu/HamburgerMenu';

interface TopProps {
  isLogin: boolean;
  backgroundColor?: 'white' | 'transparent';
  hasBoxShadow?: boolean;
  handleSignOut?: () => void;
  className?: string;
}

const BackgroundColorStyle = {
  white: 'bg-white',
  transparent: 'bg-transparent',
};

/**
 * @author `송용수`
 *
 * @desc Top UI 컴포넌트. (흔히 말하는 헤더 컴포넌트)
 *
 * @param isLogin
 * — (`boolean`)
 * 로그인 여부 (필수)
 *
 * @param backgroundColor
 * — (`'white' | 'transparent'`)
 * 배경 색상. 기본값은 `'white'`
 *
 * @param hasBoxShadow
 * — (`boolean`)
 * 그림자 유무. 기본값은 `true`
 *
 * @param handleSignOut
 * — (`() => void`)
 * 로그아웃 시 실행할 함수
 *
 * @param className
 * — (`string`)
 * 컴포넌트에 적용할 `className`
 */
function Top({
  isLogin,
  backgroundColor = 'white',
  hasBoxShadow = true,
  handleSignOut,
  className = '',
}: TopProps) {
  const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false);

  return (
    <>
      <header
        className={clsx(
          'z-20 sticky top-0 w-full min-w-[30rem] my-0 mx-auto flex flex-col items-center mobile:px-4 mobile:py-[0.8125rem] tablet:px-4 tablet:py-[0.8125rem] desktop:px-12 desktop:pt-[2.625rem] desktop:pb-[6.875rem]',
          `${BackgroundColorStyle[backgroundColor]}`,
          `${hasBoxShadow ? 'shadow-top' : 'shadow-none'}`,
          `${className}`,
        )}
      >
        <TopMenuBar
          isLogin={isLogin}
          handleSignOut={handleSignOut}
          setIsHamburgerMenuVisible={setIsHamburgerMenuVisible}
        />
      </header>
      {isHamburgerMenuVisible ? (
        <HamburgerMenu
          isLogin={isLogin}
          handleSignOut={handleSignOut}
          setIsHamburgerMenuVisible={setIsHamburgerMenuVisible}
        />
      ) : null}
    </>
  );
}

export default Top;
