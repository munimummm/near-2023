import Image from 'next/image';
import IconProfileImageDefault from '../../assets/icons/profile/icon_profile_default.svg';

interface ProfileProps {
  ProfileImageUrl: string;
  nickname: string;
  daysAgo?: string;
}

const Profile = ({ ProfileImageUrl, nickname, daysAgo }: ProfileProps) => {
  return (
    <div className='flex items-center w-24 gap-3 h-9'>
      <Image
        className='absolute top-0 left-0 rounded-full w-9 h-9'
        src={ProfileImageUrl ?? IconProfileImageDefault}
        alt='프로필 이미지 아이콘'
      />
      <div className='flex flex-col gap-1'>
        <span className='text-sm font-bold text-black'>{nickname}</span>
        {daysAgo ?? (
          <span className='text-xs font-normal text-zinc-400'>
            {daysAgo}일전
          </span>
        )}
      </div>
    </div>
  );
};

export default Profile;
