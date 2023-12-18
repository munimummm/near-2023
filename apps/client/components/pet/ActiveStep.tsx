import React from 'react';

interface ActiveStepProps {
  active: number;
}

const steps = ['강아지 정보', '신청자 정보', '체크리스트'];

function ActiveStep({ active }: ActiveStepProps) {
  return (
    <div className='flex items-center gap-8 px-6 py-4 text-base font-bold tablet:px-8 tablet:text-xl '>
      {steps.map((step, index) => (
        <div
          key={index}
          className={
            active === index + 1 ? 'text-theme-main_light' : 'text-text-gray'
          }
        >
          {index + 1}. {step}
        </div>
      ))}
    </div>
  );
}

export default ActiveStep;
