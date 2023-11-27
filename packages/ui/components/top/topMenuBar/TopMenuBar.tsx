'use client';

import TopMenuBarIcons, { TopMenuBarIconsProps } from './TopMenuBarIcons';

function TopMenuBar({
  isLogin,
  handleSignOut,
  setIsHamburgerMenuVisible,
}: TopMenuBarIconsProps) {
  return (
    <TopMenuBarIcons
      isLogin={isLogin}
      handleSignOut={handleSignOut}
      setIsHamburgerMenuVisible={setIsHamburgerMenuVisible}
    />
  );
}

export default TopMenuBar;
