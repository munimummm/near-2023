'use client';

import Link from 'next/link';
import Logo from '../logo/Logo';
import Copyright from '../copyright/Copyright';

interface FooterLinkProps {
  href: string;
  label: string;
}

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <Link href={href} className='py-4 pr-[40px] text-lg'>
      {label}
    </Link>
  );
}

function Footer() {
  const links = [
    { href: '/Home', label: 'Home' },
    { href: '/About', label: 'About' },
    { href: '/Pricing', label: 'Pricing' },
    { href: '/Blog', label: 'Blog' },
    { href: '/Contact', label: 'Contact' },
  ];
  return (
    <footer className='bg-white '>
      <div className='flex items-start mb-4'>
        <section className='flex justify-center pt-5 ml-[47px] mr-[54px] '>
          <Logo />
        </section>
        <nav className='flex flex-wrap items-start ml-auto font-normal text-theme-main_dark'>
          {links.map((link) => (
            <FooterLink key={link.href} href={link.href} label={link.label} />
          ))}
          {/* 링크 수정예정 */}
        </nav>
      </div>
      <hr className='mb-4 border border-theme-main ' />
      <section className='text-center'>
        <Copyright size='sm' />
      </section>
    </footer>
  );
}

export default Footer;
