'use client';

import Button from '../buttons/Button';
import FooterShadowBox from './FooterShadowBox';

function FooterShadowButtons() {
  return (
    <div>
      <FooterShadowBox>
        <div className='flex gap-8 desktop:gap-10 '>
          <Button mode='outline'>임시저장</Button>
          <Button mode='main'>등록하기</Button>
        </div>
      </FooterShadowBox>
    </div>
  );
}

export default FooterShadowButtons;
