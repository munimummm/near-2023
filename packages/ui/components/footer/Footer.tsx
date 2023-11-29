'use client';

import Link from 'next/link';
import Logo from '../logo/Logo';
import Copyright from '../copyright/Copyright';

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
          px-2.5
          tablet:px-6 tablet:py-2.5 tablet:items-center tablet:justify-center
          desktop:px-6 desktop:py-2.5 desktop:text-xl
          '
    >
      {title}
    </Link>
  );
}

function Footer() {
  const links = [
    { path: '/', title: 'Home' },
    { path: '/aboutus', title: 'About us' },
    { path: `https://www.instagram.com/animals_near_you/`, title: 'Instagram' },
    { path: '/Pricing', title: '개인정보처리방침' },
    { path: '/Blog', title: '대표메일' },
  ];

  return (
    <footer className='py-8 bg-white desktop:px-16'>
      <div>
        <div
          className='flex tablet:flex-col desktop:flex-row w-full px-10 py-10 tablet:px-0
        gap-[1.6875rem] tablet:gap-4 desktop:gap-48  tablet:items-center desktop:justify-center'
        >
          <section className='flex justify-center items-center h-[1.875rem]'>
            <Logo
              size='sm'
              className='inline-block mobile:inline-block tablet:inline-block desktop:hidden'
            />
            <Logo
              size='lg'
              className='hidden mobile:hidden tablet:hidden desktop:inline-block'
            />
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
      <section className='flex flex-col w-full gap-[1.4063rem] tablet:gap-[2.5625rem] desktop:gap-[3.9375rem] text-center'>
        <hr className='w-full border border-theme-main' />
        <Copyright />
      </section>
    </footer>
  );
}

export default Footer;
