'use client';

// import Button from './buttons/Button';
import IconProfileImageDefault from '../assets/icons/profile/icon_profile_default.svg';
import TextArea from './TextArea';
// import { useState } from 'react';

function CommentBox() {
  // const [isButtonDisabled, setButtonDisabled] = useState(false);
  return (
    <div className='w-[434px] h-[157px] '>
      <div className='flex mb-[10px]'>
        <div className='w-[24px] h-[24px] mr-[10px] mt-[7px]'>
          <IconProfileImageDefault className='object-cover w-full h-full' />
        </div>
        <TextArea
          width={400}
          height={119}
          maxLength={200}
          placeholder='내용을 작성해주세요.'
          // setParentExceeding={setButtonDisabled}
        />
      </div>
      <div className='flex justify-end text-xl font-bold'>
        {/* <Button
          mode='Secondary'
          size='sm'
          isRounded={false}
          label='댓글등록'
          isDisabled={isButtonDisabled}
        /> */}
      </div>
    </div>
  );
}

export default CommentBox;
