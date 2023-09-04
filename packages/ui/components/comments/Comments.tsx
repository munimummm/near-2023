import React from 'react';
import Profile from '../profile/Profile';
import TextInput from '../textinput/TextInput';
import IconProfileImageDefault from '../../assets/icons/profile/icon_profile_default.svg';
import IconComment from '../../assets/icons/comments/icon_comment.svg';
import IconDeclaration from '../../assets/icons/comments/icon_declaration.svg';
interface CommentProps {
  commentLabel: string;
}

export function Comment({ commentLabel }: CommentProps) {
  return (
    <div className='w-[409px] h-[81px] ml-5 pb-4 border-b border-[#E9E9E9] '>
      <div className='flex justify-between mb-2'>
        <Profile nickname={'닉네임'} daysAgo='1' />
        <div className='flex gap-2 '>
          <div className='pt-[2px]'>
            <IconComment />
          </div>
          <hr className='h-[12px] border-theme-main_light border' />
          <div>
            <IconDeclaration />
          </div>
        </div>
      </div>
      <p className='gap-1 text-base'>{commentLabel}</p>
    </div>
  );
}

export function CommentAuthor() {
  return (
    <div className='w-[480px] h-[85px] pt-8 pr-[362px] pb-4 pl-[29px] border-b border-[#A2A2A2]  '>
      <div>
        <Profile nickname={'닉네임'} daysAgo='1' />
      </div>
    </div>
  );
}

export function CommentInput() {
  return (
    <div className='gap-2.5 px-4 pt-4 flex border-t border-[#A2A2A2]'>
      <div className=''>
        <IconProfileImageDefault className='object-cover w-full h-full' />
      </div>
      <TextInput placeholder='내용을 작성해주세요' state={'enabled'} />
    </div>
  );
}
