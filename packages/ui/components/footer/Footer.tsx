'use client';

import Link from 'next/link';
import Logo from '../logo/Logo';
import Copyright from '../copyright/Copyright';
import { useInnerWidthState } from '@near/utils';

interface Menu {
  title: string;
  path: string;
}

function FooterMenuItem({ path, title }: Menu) {
  return (
    <Link
      key={title}
      href={path}
      className='text-lg flex 
          px-[10px]
          tablet:px-6 tablet:py-2.5 tablet:items-center tablet:justify-center
          desktop:px-6 desktop:py-2.5 desktop:text-xl
          '
    >
      {title}
    </Link>
  );
}

function Footer() {
  const [{ width }] = useInnerWidthState();

  const links = [
    { path: '/', title: 'Home' },
    { path: '/aboutus', title: 'About us' },
    { path: `https://www.instagram.com/animals_near_you/`, title: 'Instagram' },
    { path: '/Pricing', title: '개인정보처리방침' },
    { path: '/Blog', title: '대표메일' },
  ];

  return (
    <footer className='bg-white desktop:px-16'>
      <div>
        <div
          className='flex tablet:flex-col desktop:flex-row w-full px-10 py-16 tablet:px-0
        gap-[27px] tablet:gap-4 desktop:gap-48  tablet:items-center desktop:justify-center'
        >
          <section className='flex justify-center items-center h-[30px]'>
            <Logo size={width > 1439 ? 'lg' : 'sm'} />
          </section>
          <nav className='flex flex-wrap font-normal text-theme-main_dark mobile:gap-1 mobile:items-start tablet:gap-2 tablet:items-center tablet:justify-center desktop:gap-4 '>
            {links.map((link) => (
              <FooterMenuItem
                key={link.title}
                title={link.title}
                path={link.path}
              />
            ))}
          </nav>
        </div>
      </div>
      <section className='flex flex-col w-full gap-[22.5px] tablet:gap-[2.5625rem] desktop:gap-[3.9375rem] text-center'>
        <hr className='w-full border border-theme-main' />
        <Copyright size={width > 767 ? 'lg' : 'sm'} />
      </section>
    </footer>
  );
}

export default Footer;
