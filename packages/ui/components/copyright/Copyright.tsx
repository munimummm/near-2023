'use client';

const BASE_CLASSES = 'text-center text-[#A3A3A3] font-normal';

function Copyright() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <span
        className={`${BASE_CLASSES} text-lg leading-[1.125rem] hidden mobile:hidden tablet:inline-block desktop:inline-block`}
      >
        {`Copyright © 2023 고장난 로켓 | All Rights Reserved`}
      </span>

      <span
        className={`${BASE_CLASSES} text-base leading-normal inline-block mobile:inline-block tablet:hidden desktop:hidden`}
      >{`Copyright © 2023 고장난 로켓`}</span>
      <span
        className={`${BASE_CLASSES} text-base leading-normal inline-block mobile:inline-block tablet:hidden desktop:hidden`}
      >{`All Rights Reserved`}</span>
    </div>
  );
}

export default Copyright;
