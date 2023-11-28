'use client';

import Profile from '../profile/Profile';
import IconComment from '../../assets/icons/comments/icon_comment.svg';
import IconDeclaration from '../../assets/icons/comments/icon_declaration.svg';

interface CommentProps {
  commentLabel: string;
}

function Comment({ commentLabel }: CommentProps) {
  return (
    <div className='w-[30rem]  pl-[1.8125rem] pb-4'>
      <div className='w-[25.5625rem] border-b  border-[#E9E9E9] pb-4'>
        <div className='flex justify-between mb-2'>
          <div className=''>
            <Profile nickname={'닉네임'} daysAgo='1' />
          </div>
          <div className='flex gap-2 '>
            <div className='w-3 h-3'>
              <IconComment className='w-full h-full' />
            </div>
            <hr className='h-3 border border-theme-main_light' />
            <div className='w-3 h-3 '>
              <IconDeclaration className='w-full h-full mt-[-0.125rem]' />
            </div>
          </div>
        </div>
        <p className='gap-1 text-base'>{commentLabel}</p>
      </div>
    </div>
  );
}
export default Comment;
