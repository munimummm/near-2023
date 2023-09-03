import Link from 'next/link';
interface FooterLinkProps {
  href: string;
  label: string;
}

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <Link href={href} className='px-6 py-4 text-base'>
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
      <div className='flex mb-4 '>
        <section className='flex items-start py-4 ml-5 mr-4'>
          <h2 className='text-base font-bold text-theme-main'>NEAR</h2>
        </section>
        <nav className='flex flex-wrap items-center ml-auto font-normal text-theme-main_dark'>
          {links.map((link) => (
            <FooterLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>
      </div>
      <hr className='mb-4 border border-theme-main ' />
      <section className='text-center'>
        <p className='text-base font-normal text-center text-text-gray'>
          Copyright © 2023 고장난 로켓 <br /> All Rights Reserved
        </p>
      </section>
    </footer>
  );
}

export default Footer;
