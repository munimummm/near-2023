'use client';

import Link from 'next/link';
import Logo from '../logo/Logo';
import Copyright from '../copyright/Copyright';
import { useInnerWidthState } from '../../../apis/src/useInnerWidthState';

interface FooterLinkProps {
  href: string;
  label: string;
}

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className='text-lg flex
        mobile:w-[81px] mobile:px-[10px] 
        tablet:w-[100px] tablet:px-6 tablet:py-3 tablet:items-center tablet:justify-center
        desktop:w-[120px] desktop:text-xl
          '
    >
      {label}
    </Link>
  );
}

function Footer() {
  const [{ width }] = useInnerWidthState();

  const links = [
    { href: '/Home', label: 'Home' },
    { href: '/About', label: 'About' },
    { href: '/Pricing', label: 'Pricing' },
    { href: '/Blog', label: 'Blog' },
    { href: '/Contact', label: 'Contact' },
  ];
  return (
    <footer className={`bg-white w-full`}>
      <div className='flex mobile:mb-[46.5px] tablet:mb-[51px] tablet:items-center desktop:mb-[63px]'>
        <section
          className='flex justify-center items-center  
        mobile:ml-[40px] mobile:mr-[43px] mobile:h-[30px]
        tablet:ml-[52px] tablet:mr-[40px]
        desktop:ml-[83px] desktop:mr-[213px]
        '
        >
          <Logo size={width > 1439 ? 'lg' : 'sm'} />
        </section>
        <nav className='flex flex-wrap font-normal text-theme-main_dark mobile:gap-1 mobile:items-start tablet:gap-0 tablet:items-center tablet:justify-center desktop:gap-4 '>
          {links.map((link) => (
            <FooterLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>
      </div>
      <hr className='border border-theme-main w-full mobile:mb-[22.5px] tablet:mb-[51px] desktop:mb-[63px] ' />
      <section className='w-full text-center'>
        <Copyright size={width > 767 ? 'lg' : 'sm'} />
      </section>
    </footer>
  );
}

export default Footer;
