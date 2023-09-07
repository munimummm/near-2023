import Link from 'next/Link';
import NearLogo from '../../assets/logo/near-small.svg';

function Logo() {
  return (
    <Link href='/'>
      <NearLogo />
    </Link>
  );
}

export default Logo;
