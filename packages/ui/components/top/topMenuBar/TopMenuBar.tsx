'use client';

import TopMenuBarIcons, { TopMenuBarIconsProps } from './TopMenuBarIcons';

function TopMenuBar({ setIsHamburgerMenuVisible }: TopMenuBarIconsProps) {
  return (
    <TopMenuBarIcons setIsHamburgerMenuVisible={setIsHamburgerMenuVisible} />
  );
}

export default TopMenuBar;
