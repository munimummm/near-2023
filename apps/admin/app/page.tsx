'use client';

import { isUserLoadingState, useRecoilValue } from '@near/store';

export default function Page() {
  const recoilTest = useRecoilValue(isUserLoadingState);

  return (
    <div className='flex flex-col gap-1 p-6 bg-green-700'>
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
        isUserLoadingState(recoil):<b>{recoilTest + ''}</b>
      </span>
    </div>
  );
}
