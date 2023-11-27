'use client';

import HamburgerMenuTabs from './HamburgerMenuTabs';
import { MenuOptionTabsContent } from '../MenuOptionTabsContent';

interface HamburgerMenuProps {
  isLogin: boolean;
  setIsHamburgerMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleSignOut?: () => void;
}

/**
 * @author `송용수`
 *
 * @desc 햄버거 메뉴 UI 컴포넌트. mobile, tablet 화면에서만 렌더링됨.
 *
 * @param isLogin
 * — (`boolean`)
 * 로그인 여부 (필수)
 *
 * @param handleSignOut
 * — (`() => void`)
 * 로그아웃 시 실행할 함수
 *
 * @param setIsHamburgerMenuVisible
 * — (`React.Dispatch<React.SetStateAction<boolean>>`)
 * 햄버거 메뉴 컴포넌트 렌더링 여부를 변경하는 함수 (필수)
 */
function HamburgerMenu({
  isLogin,
  handleSignOut,
  setIsHamburgerMenuVisible,
}: HamburgerMenuProps) {
  return (
    <div className='fixed top-0 left-0 z-50 flex-col items-stretch w-screen h-screen p-8 overflow-scroll bg-white mobile:flex tablet:flex desktop:hidden'>
      {/* Menu Close Button */}
      <div className='flex justify-end w-full'>
        <button
          className='bg-transparent border-none'
          onClick={() => setIsHamburgerMenuVisible(false)}
        >
          <svg
            width='21'
            height='20'
            viewBox='0 0 21 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M18.3893 19.6755C18.7791 20.0668 19.4111 20.0668 19.8009 19.6755C20.1907 19.2843 20.1907 18.65 19.8009 18.2587L11.4584 9.88538L19.6032 1.71054C19.993 1.3193 19.993 0.68497 19.6032 0.293727C19.2134 -0.0975157 18.5814 -0.0975157 18.1916 0.293727L10.0468 8.46856L1.90173 0.293432C1.51192 -0.0978105 0.879926 -0.0978109 0.490122 0.293432C0.100318 0.684675 0.100318 1.31901 0.490122 1.71025L8.63519 9.88538L0.292353 18.259C-0.0974508 18.6502 -0.0974512 19.2846 0.292353 19.6758C0.682157 20.0671 1.31416 20.0671 1.70396 19.6758L10.0468 11.3022L18.3893 19.6755Z'
              fill='#1E1B4B'
            />
          </svg>
        </button>
      </div>

      <li className='flex justify-center items-center w-full gap-[2.625rem] pt-[6.25rem] pb-[5rem]'>
        {isLogin ? (
          <>
            <HamburgerMenuTabs size='sm' href='/profile'>
              프로필
            </HamburgerMenuTabs>
            <div className='bg-black w-[0.0625rem] h-[1.25rem]' />
            <HamburgerMenuTabs size='sm' href='/' onClick={handleSignOut}>
              로그아웃
            </HamburgerMenuTabs>
          </>
        ) : (
          <>
            <HamburgerMenuTabs size='sm' href='signup'>
              회원가입
            </HamburgerMenuTabs>
            <div className='bg-black w-[0.0625rem] h-[1.25rem]' />
            <HamburgerMenuTabs size='sm' href='login'>
              로그인
            </HamburgerMenuTabs>
          </>
        )}
      </li>
      {/* Menu option tabs list */}
      <ul className='flex flex-col justify-center w-full gap-6'>
        <li className='flex items-center justify-center'>
          <HamburgerMenuTabs href={'/'}>Home</HamburgerMenuTabs>
        </li>
        {MenuOptionTabsContent.map((menuOptionTab, index) => {
          return (
            <li
              key={`${menuOptionTab.name}_${index}`}
              className='flex items-center justify-center'
            >
              <HamburgerMenuTabs href={menuOptionTab.href}>
                {menuOptionTab.name}
              </HamburgerMenuTabs>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HamburgerMenu;
