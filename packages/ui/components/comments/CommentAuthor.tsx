'use client';

import Profile from '../profile/Profile';

export default function CommentAuthor() {
  return (
    <div className='w-[30rem] h-[5.3125rem] pt-8 pr-[22.5rem] pb-4 pl-[1.8125rem] border-b border-[#A2A2A2]  '>
      <div>
        <Profile nickname={'닉네임'} daysAgo='1' />
      </div>
    </div>
  );
}
