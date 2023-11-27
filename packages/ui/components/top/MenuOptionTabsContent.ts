export interface MenuOptionTabsContentProps {
  href: string;
  name: string;
  children?: MenuOptionTabsContentProps[];
}

export const MenuOptionTabsContent: MenuOptionTabsContentProps[] = [
  { href: '/aboutus', name: 'ABOUT US' },
  { href: '/pet', name: '근처동물' },
  { href: '/volunteer', name: 'NEAR 봉사' },
  { href: '/shelter', name: 'NEAR 보호소' },
  { href: '/newsletter', name: '뉴스레터' },
  { href: '/tpdiary', name: '임보일기' },
];
