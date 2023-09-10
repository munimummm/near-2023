import Link from 'next/link';
import Logo from '../logo/Logo';
interface FooterLinkProps {
  href: string;
  label: string;
}

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <Link href={href} className='py-4 pr-5 text-lg'>
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
        <section className='flex justify-center pt-5 ml-[47px] mr-[59.5px] '>
          <Logo />
        </section>
        <nav className='flex flex-wrap items-start ml-auto font-normal text-theme-main_dark'>
          {links.map((link) => (
            <FooterLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>
      </div>
      <hr className='mb-4 border border-theme-main ' />
      {/* 컴포넌트로 변경할 예정 */}
      <section className='text-center'>
        <p className='text-base font-normal text-center text-text-gray'>
          Copyright © 2023 고장난 로켓
        </p>
        <p className='text-base font-normal text-center text-text-gray'>
          All Rights Reserved
        </p>
      </section>
    </footer>
  );
}

export default Footer;
