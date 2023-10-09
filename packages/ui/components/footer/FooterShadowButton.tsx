'use client';

import Button from '../buttons/Button';

function FooterShadowButton() {
  return (
    <div className='shadow-[0_4px_15px_0_rgba(128,128,128,0.1)] flex justify-end md:justify-center sm:justify-center gap-6 px-[45px] py-[26px] bg-white'>
      <div className='flex items-center justify-center gap-6'>
        <Button isRounded mode='Outline' size='lg' label='임시저장' />
        <Button isRounded mode='Main' size='lg' label='등록하기' />
        {/* 버튼 수정예정 */}
      </div>
    </div>
  );
}

export default FooterShadowButton;
