'use client';

import { useRecoilValue, userEmailState } from '@near/store';

export default function Page() {
  const recoilTest = useRecoilValue(userEmailState);

  return (
    <div className='flex flex-col gap-1 p-6 bg-blue-700'>
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
        <b>{process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY}</b>
      </span>
      <span className='text-white'>
        userEmailState(recoil):<b>{recoilTest + ''}</b>
      </span>
    </div>
  );
}
