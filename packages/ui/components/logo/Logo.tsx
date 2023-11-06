import Link from 'next/link';
import NearLogoSmall from '../../assets/logo/near-small.svg';
import NearLogoLarge from '../../assets/logo/near-large.svg';

interface LogoProps {
  size?: 'sm' | 'lg';
}

function Logo({ size = 'sm' }: LogoProps) {
  const NearLogo = size === 'sm' ? NearLogoSmall : NearLogoLarge;
  return (
    <Link href='/'>
      <NearLogo />
    </Link>
  );
}

export default Logo;
