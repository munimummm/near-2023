import Link from 'next/link';
import NearLogoSmall from '../../assets/logo/near-small.svg';
import NearLogoLarge from '../../assets/logo/near-large.svg';
import { clsx } from '@near/clsx';

interface LogoProps {
  size?: 'sm' | 'lg';
  className?: string;
}

function Logo({ size = 'sm', className }: LogoProps) {
  const NearLogo = size === 'sm' ? <NearLogoSmall /> : <NearLogoLarge />;
  return (
    <Link className={clsx(className)} href='/'>
      {NearLogo}
    </Link>
  );
}

export default Logo;
