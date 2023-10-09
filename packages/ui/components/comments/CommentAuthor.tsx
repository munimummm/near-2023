'use client';

import Profile from '../profile/Profile';

export default function CommentAuthor() {
  return (
    <div className='w-[480px] h-[85px] pt-8 pr-[360px] pb-4 pl-[29px] border-b border-[#A2A2A2]  '>
      <div>
        <Profile nickname={'닉네임'} daysAgo='1' />
      </div>
    </div>
  );
}
