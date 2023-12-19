'use client';

import { useForm } from '@near/react-hook-form';
import { CheckBox } from 'ui';

interface InfoProps {
  info?: boolean;
}

const Info = () => {
  const { control } = useForm<InfoProps>({
    defaultValues: {},
    mode: 'onChange',
  });
  return (
    <div className='mobile:w-[25rem] tablet:w-[550px] desktop:w-[1080px] m-auto mt-[30px]'>
      <section className='layout-max-width'>
        <div className='flex flex-col'>
          <div className='mb-[100px] font-bold text-2xl flex justify-center'>
            고유식별정보 수집 및 이용안내
          </div>
          {/* <span className='font-bold text-lg mb-[16px]'>제 1 장 총 칙</span>
          <span className='font-semibold mb-[16px]'>제 1 조(목적)</span> */}
        </div>
        <div className='grid gap-8'>
          <ul className='flex flex-col grid gap-1 pl-[20px]'>
            <li className='text-lg font-semibold'>
              수집항목
              <ul className='list-disc pl-[16px] mt-[8px] text-sm grid gap-1'>
                <li>고유식별정보: 주민등록표에 기재된 성명 및 전화번호 </li>
              </ul>
            </li>
          </ul>
          <ul className='flex flex-col grid gap-1 pl-[20px]'>
            <li className='text-lg font-semibold'>
              고유식별정보의 수집 및 이용목적
              <ul className='list-disc pl-[16px] mt-[8px] text-sm grid gap-1'>
                <li>
                  당사는 동물보호법 및 동물보호시행규칙에 근거하는 목적 하에
                  관련한 고유식별정보를 수집합니다.(동물보호법 제15조.
                  등록대상동물의 등록등){' '}
                </li>
                <li>
                  수집된 고유식별정보는 해당 목적 외 용도로는 이용되지 않습니다.
                </li>
              </ul>
            </li>
          </ul>
          <ul className='flex flex-col grid gap-1 pl-[20px]'>
            <li className='text-lg font-semibold'>
              고유식별정보의 보유 및 이용기간
              <ul className='list-disc pl-[16px] mt-[8px] text-sm grid gap-1'>
                <li>
                  회원정보 보유기간은 준영구이며 탈퇴 즉시 지체없이 파기합니다.{' '}
                </li>
              </ul>
            </li>
          </ul>
          <ul className='flex flex-col grid gap-1 pl-[20px]'>
            <li className='text-lg font-semibold'>
              동의를 거부할 권리가 있다는 사실과 동의 거부에 따른 불이익 내용
              <ul className='list-disc pl-[16px] mt-[8px] text-sm grid gap-1'>
                <li>
                  니어시스템(NEAR)에서 수집하는 개인정보에 대해 동의를 거부할
                  권리가 있으며 동의 거부 시에는 NEAR 서비스가 제한됩니다.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className=' mt-[200px]'>
          <CheckBox
            name={'info'}
            control={control}
            labelType='singletext'
            label='위 약관에 동의합니다'
          />
        </div>
      </section>
    </div>
  );
};

export default Info;
