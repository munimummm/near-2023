'use client';

import IconProfileImageDefault from '../../assets/icons/profile/icon_profile_default.svg';

interface ProfileProps {
  // ProfileImageUrl?: string;
  nickname: string;
  daysAgo?: string;
}

const Profile = ({ nickname, daysAgo }: ProfileProps) => {
  return (
    <div className='flex items-center gap-[11px]'>
      <div className='rounded-full w-[38px] h-[38px] overflow-hidden'>
        <IconProfileImageDefault className='object-cover w-full h-full' />
      </div>
      <div className='flex flex-col gap-1'>
        <span className='text-sm font-bold text-black'>{nickname}</span>
        {daysAgo ? (
          <span className='text-[10px] font-normal leading-tight text-[#B4B4B4]'>
            {daysAgo}일전
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Profile;
