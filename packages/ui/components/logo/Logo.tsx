import Link from 'next/link';
import NearLogo from '../../assets/logo/near-small.svg';

function Logo() {
  return (
    <Link href='/'>
      <NearLogo />
    </Link>
  );
}

export default Logo;
