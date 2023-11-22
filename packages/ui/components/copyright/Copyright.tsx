'use client';

interface CopyrightProps {
  size?: 'lg' | 'sm';
}

const BASE_CLASSES = 'text-center text-[#A3A3A3] font-normal';

function Copyright({ size = 'lg' }: CopyrightProps) {
  return (
    <div className='flex flex-col items-center justify-center'>
      {size === 'lg' ? (
        <span className={`${BASE_CLASSES} text-lg leading-[18px]`}>
          {`Copyright © 2023 고장난 로켓 | All Rights Reserved`}
        </span>
      ) : (
        <>
          <span
            className={`${BASE_CLASSES} text-base leading-normal`}
          >{`Copyright © 2023 고장난 로켓`}</span>
          <span
            className={`${BASE_CLASSES} text-base leading-normal`}
          >{`All Rights Reserved`}</span>
        </>
      )}
    </div>
  );
}

export default Copyright;
