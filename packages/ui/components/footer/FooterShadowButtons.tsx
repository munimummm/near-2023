'use client';

import { ButtonETC } from '../buttons/Button';
import FooterShadowBox from './FooterShadowBox';

function FooterShadowButtons() {
  return (
    <div>
      <FooterShadowBox>
        <div className='flex gap-8 desktop:gap-10 '>
          <ButtonETC type='submit' mode='main'>
            등록하기
          </ButtonETC>
        </div>
      </FooterShadowBox>
    </div>
  );
}

export default FooterShadowButtons;
