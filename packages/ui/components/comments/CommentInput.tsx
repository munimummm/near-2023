'use client';

// import TextInput from '../textinput/TextInput';
import IconProfileImageDefault from '../../assets/icons/profile/icon_profile_default.svg';

export default function CommentInput() {
  return (
    <div className='gap-2.5 px-4 pt-4 flex items-center border-t border-[#A2A2A2]'>
      <div className='w-6 h-6 '>
        <IconProfileImageDefault className='object-cover w-full h-full' />
      </div>
      {/* <TextInput
        placeholder='내용을 작성해주세요'
        state={'enabled'}
        name='comment'
      /> */}
    </div>
  );
}
