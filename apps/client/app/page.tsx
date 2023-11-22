'use client';

import { useRecoilValue, userEmailState } from '@near/store';
// import { useEffect } from 'react';

// import { useCookies } from '@near/react-cookie';
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
export default function Page() {
  const recoilTest = useRecoilValue(userEmailState);
  // const [cookies, setCookie, removeCookie] = useCookies([
  //   'sb-ztcvdzkqqrglziiavupe-auth-token',
  // ]);
  // const supabase = createClientComponentClient();
  // useEffect(() => {
  //   (async () => {
  //     const { data: session } = await supabase.auth.getSession();
  //     console.log(session);
  //   })();
  // }, []);
  return (
    <div className='flex justify-center bg-black'>
      <div className='bg-blue-700 layout_max_width '>
        {/* <button
          onClick={async () => {
            // removeCookie('sb-ztcvdzkqqrglziiavupe-auth-token');
            await supabase.auth.signOut();
          }}
        >
          로그아웃 버튼
        </button> */}
        <span className='text-white'>
          process.env.NODE_ENV:<b>{process.env.NODE_ENV}</b>
        </span>
        <span className='text-white'>
          process.env.NEXT_PUBLIC_SUPABASE_URL:
          <b>{process.env.NEXT_PUBLIC_SUPABASE_URL}</b>
        </span>
        <span className='text-white'>
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY:
          <b>{process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}</b>
        </span>
        <span className='text-white'>
          process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY:
          {/* <b>{process.env.SUPABASE_SERVICE_KEY}</b> */}
        </span>
        <span className='text-white'>
          userEmailState(recoil):<b>{recoilTest + ''}</b>
        </span>
      </div>
    </div>
  );
}
