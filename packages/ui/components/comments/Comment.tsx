'use client';

import Profile from '../profile/Profile';
import IconComment from '../../assets/icons/comments/icon_comment.svg';
import IconDeclaration from '../../assets/icons/comments/icon_declaration.svg';

interface CommentProps {
  commentLabel: string;
}

function Comment({ commentLabel }: CommentProps) {
  return (
    <div className='w-[480px]  pl-[29px] pb-4'>
      <div className='w-[409px] border-b  border-[#E9E9E9] pb-4'>
        <div className='flex justify-between mb-2'>
          <div className=''>
            <Profile nickname={'닉네임'} daysAgo='1' />
          </div>
          <div className='flex gap-2 '>
            <div className='w-[12px] h-[12px]'>
              <IconComment className='w-full h-full' />
            </div>
            <hr className='h-[12px] border-theme-main_light border' />
            <div className='w-[12px] h-[12px] '>
              <IconDeclaration className='w-full h-full mt-[-2px]' />
            </div>
          </div>
        </div>
        <p className='gap-1 text-base'>{commentLabel}</p>
      </div>
    </div>
  );
}
export default Comment;
