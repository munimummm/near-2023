'use client';

import Button from '../buttons/Button';

function FooterShadowButton() {
  return (
    <div
      className='shadow-[0_4px_15px_0_rgba(128,128,128,0.1)] bg-white h-[126px] flex justify-center items-center
     mobile:w-[480px] tablet:w-[768px] desktop:[1440px]  desktop:justify-end desktop:pr-20'
    >
      <div className='flex items-center justify-center gap-8 desktop:gap-10 '>
        <Button isRounded mode='Outline' size='lg' label='임시저장' />
        <Button isRounded mode='Main' size='lg' label='등록하기' />
        {/* 버튼 수정예정 */}
      </div>
    </div>
  );
}

export default FooterShadowButton;
