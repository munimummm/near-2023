'use client';

import { useForm } from '@near/react-hook-form';
import { CheckBox } from 'ui';

interface SiteProps {
  site?: boolean;
}

const Site = () => {
  const { control } = useForm<SiteProps>({
    defaultValues: {},
    mode: 'onChange',
  });
  return (
    <div className='mobile:w-[25rem] tablet:w-[550px] desktop:w-[1080px] m-auto mt-[30px]'>
      <section className='layout-max-width'>
        <div className='flex flex-col'>
          <div className='mb-[100px] font-bold text-xl flex justify-center'>
            개인정보 수집 및 이용에 대한 동의 (필수)
          </div>
          {/* <span className='font-bold text-lg mb-[16px]'>제 1 장 총 칙</span>
          <span className='font-semibold mb-[16px]'>제 1 조(목적)</span> */}
        </div>
        <div className='grid gap-8'>
          <ul className='flex flex-col grid gap-1 pl-[20px]'>
            <li className='text-lg font-semibold'>
              개인정보의 처리 목적
              <ul className='list-disc pl-[16px] mt-[8px] text-sm grid gap-1'>
                <li>
                  니어시스템(NEAR)은 회원가입(14세 이상 가입가능) 및 회원제
                  서비스 이용 및 제한적 본인절차에 따른 본인확인, 개인식별,
                  부정이용 방지, 비인가 이용방지, 가입의사 확인, 분쟁조정을 위한
                  기록보존, 불만처리 등 민원처리, 고지사항 전달, 서비스 향상 및
                  정책평가 등을 목적으로 개인정보를 처리합니다.
                </li>
                <p>
                  수집한 개인정보는 목적이외의 용도로는 사용되지 않으며 이용
                  목적이 변경될 시에는 사전 동의를 구할 예정입니다.
                </p>
              </ul>
            </li>
          </ul>
          <ul className='flex flex-col grid gap-1 pl-[20px]'>
            <li className='text-lg font-semibold'>
              개인정보의 처리 및 보유기간
              <ul className='list-disc pl-[16px] mt-[8px] text-sm grid gap-1'>
                <li>
                  회원정보 보유기간은 준영구이며 탈퇴 즉시 지체없이 파기합니다.
                </li>
              </ul>
            </li>
          </ul>
          <ul className='flex flex-col grid gap-1 pl-[20px]'>
            <li className='text-lg font-semibold'>
              처리하는 개인정보 항목
              <ul className='list-disc pl-[16px] mt-[8px] text-sm grid gap-1'>
                <li>이름, 생년월일, E-Mail, 집주소, 휴대폰번호</li>
              </ul>
            </li>
          </ul>
          <ul className='flex flex-col grid gap-1 pl-[20px]'>
            <li className='text-lg font-semibold'>
              동의를 거부할 권리가 있다는 사실과 동의 거부에 따른 불이익 내용
              <ul className='list-disc pl-[16px] mt-[8px] text-sm grid gap-1'>
                <li>
                  이용자는 NEAR에서 수집하는 개인정보에 대해 동의를 거부할
                  권리가 있으며 동의 거부 시에는 회원가입 및 NEAR 서비스가
                  제한됩니다.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className=' mt-[200px]'>
          <CheckBox
            name={'site'}
            control={control}
            labelType='singletext'
            label='위 약관에 동의합니다'
          />
        </div>
      </section>
    </div>
  );
};

export default Site;
