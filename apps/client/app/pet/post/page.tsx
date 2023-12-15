'use client';

import { Cookies } from '@near/react-cookie';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function NearAnimalPostPage() {
  const router = useRouter();
  const cookies = new Cookies();

  useEffect(() => {
    if (cookies.get('sb-ztcvdzkqqrglziiavupe-auth-token') === undefined) {
      router.push('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies]);

  return <div>등록</div>;
}

export default NearAnimalPostPage;
