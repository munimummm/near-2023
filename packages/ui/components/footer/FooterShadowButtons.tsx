'use client';

import Button from '../buttons/Button';
import FooterShadowBox from './FooterShadowBox';

function FooterShadowButtons() {
  return (
    <div>
      <FooterShadowBox>
        <div className='flex gap-8 desktop:gap-10 '>
          <Button isRounded mode='Outline' size='sm' label='임시저장' />
          <Button isRounded mode='Main' size='sm' label='등록하기' />
        </div>
      </FooterShadowBox>
    </div>
  );
}

export default FooterShadowButtons;
